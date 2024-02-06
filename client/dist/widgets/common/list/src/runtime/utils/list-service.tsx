import { type ListStates, type ListProps } from '../widget'
import {
  type QueriableDataSource,
  utils,
  type DataSource,
  dataSourceUtils,
  ClauseOperator,
  ClauseLogic,
  QueryScope,
  type FeatureLayerDataSource,
  type IMSqlExpression,
  Immutable
} from 'jimu-core'
import { type SortSettingOption } from 'jimu-ui/advanced/setting-components'
import { type IMConfig, type Suggestion } from '../../config'

export interface QueryOptions {
  returnGeometry?: boolean
  geometry?: any
  sortField?: string
  sortOrder?: string
  orderByFields?: string | string[]
  resultOffset?: number
  resultRecordCount?: number
  pageSize?: number
  page?: number
  where?: string
  sqlExpression?: IMSqlExpression
}

export function getQueryOptions (
  state: ListStates,
  props: ListProps,
  pageSize: number
): any {
  const options: QueryOptions = {
    returnGeometry: true
  }
  const { config, useDataSources } = props
  const {
    sortOptionName,
    searchText,
    currentFilter,
    filterApplied,
    datasource
  } = state
  const useDS = useDataSources && useDataSources[0]
  if (!datasource || !useDS) return null

  if (!(datasource as QueriableDataSource).query) {
    // not queryiable data source, return
    return null
  }
  // sort
  let sortOption: SortSettingOption
  if (config.sortOpen && config.sorts) {
    sortOption = config.sorts.find(
      (sort: SortSettingOption) => sort.ruleOptionName === sortOptionName
    )
    sortOption = sortOption || (config.sorts[0] as any)
    if (!sortOption?.rule?.[0]?.jimuFieldName) {
      sortOption = undefined
    }
    if (sortOption) {
      const orderBys = []
      sortOption.rule.forEach(sortData => {
        if (sortData.jimuFieldName) {
          orderBys.push(`${sortData.jimuFieldName} ${sortData.order}`)
        }
      })
      options.orderByFields = orderBys
    }
  }
  // filter
  if (
    config.filterOpen &&
    filterApplied &&
    config.filter &&
    currentFilter &&
    currentFilter.sql
  ) {
    options.where = currentFilter.sql
    options.sqlExpression = currentFilter
  }
  // search
  if (config.searchOpen && config.searchFields && searchText) {
    const sqlExpr = getSQL(searchText, config, datasource)
    if (options.where) { // has filter
      const mergedExpr = dataSourceUtils.getMergedSQLExpressions([options.sqlExpression.asMutable({ deep: true }), sqlExpr], datasource)
      options.where = mergedExpr.sql
      options.sqlExpression = Immutable(mergedExpr)
    } else {
      options.where = sqlExpr.sql
      options.sqlExpression = Immutable(sqlExpr)
    }
  }
  // paging
  if (pageSize > 0) {
    options.page = state.page
    options.pageSize = pageSize
  }

  // Compare if query changed except paging
  const newQuery = options

  return newQuery
}

export async function fetchSuggestionRecords (
  searchText: string,
  config: IMConfig,
  datasource: DataSource
): Promise<Suggestion[]> {
  const searchFields = config.searchFields.split(',')
  const queryParams: any = {
    page: 1,
    pageSize: 10,
    outFields: searchFields,
    returnDistinctValues: true,
    orderByFields: null
  }

  if (config.searchOpen && config.searchFields) {
    const sqlExpr = getSQL(searchText, config, datasource, true)
    queryParams.where = sqlExpr.sql
    queryParams.sqlExpression = sqlExpr
  }
  const searchReg = new RegExp(`(${escapeRegex(searchText)})`, 'gi')
  return queryRecords(queryParams, datasource).then(async records => {
    let searchSuggestion = []
    searchFields.forEach(attrName => {
      records.forEach(el => {
        const suggestionItem = el?.feature?.attributes[attrName]
        if (
          suggestionItem &&
          !searchSuggestion.includes(suggestionItem) &&
          suggestionItem.match(searchReg)
        ) {
          const suggestion: Suggestion = {
            suggestionHtml: getSuggestionItem(suggestionItem, searchText),
            suggestion: suggestionItem
          }
          searchSuggestion.push(suggestion)
        }
      })
    })
    searchSuggestion = uniqueJson(searchSuggestion, 'suggestion')
    return Promise.resolve(searchSuggestion)
  })
}

function escapeRegex (string) {
  return string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&')
}

function uniqueJson (jsonArr, key) {
  const result = jsonArr[0] ? [jsonArr[0]] : []
  for (let i = 1; i < jsonArr.length; i++) {
    const item = jsonArr[i]
    let repeat = false
    for (let j = 0; j < result.length; j++) {
      if (item[key] === result[j][key]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      result.push(item)
    }
  }
  return result
}

function getSQL (
  searchText: string,
  config: IMConfig,
  datasource: DataSource,
  fetchSuggestion: boolean = false
) {
  const searchFields = config.searchFields.split(',')
  const searchExact = fetchSuggestion ? false : config.searchExact
  const clauseOperator = searchExact ? ClauseOperator.StringOperatorIs : ClauseOperator.StringOperatorContains
  if (config.searchOpen && config.searchFields) {
    const clauses = searchFields.map(field => {
      let newSearchText: any = searchText
      const codedValues = (datasource as FeatureLayerDataSource)?.getFieldCodedValueList(field)
      if (codedValues) {
        codedValues?.forEach(item => {
          if (newSearchText === item?.label) {
            newSearchText = item?.value
          }
        })
      }
      return dataSourceUtils.createSQLClause(field, clauseOperator, newSearchText)
    })
    const clauseSet = dataSourceUtils.createSQLClauseSet(ClauseLogic.Or, clauses) as any
    return dataSourceUtils.createSQLExpression(ClauseLogic.And, [clauseSet], datasource)
  }
}

function getSuggestionItem (suggestion: string, searchText: string): string {
  if (!searchText) return suggestion
  const replaceReg = new RegExp(`(${escapeRegex(searchText)})`, 'gi')
  return suggestion.replace(replaceReg, '<strong >$1</strong>')
}

async function queryRecords (q: any, ds: DataSource): Promise<any> {
  if (!ds) return await Promise.resolve([])
  return await (ds as QueriableDataSource)
    .query(q, { scope: QueryScope.InRuntimeView })
    .then(async queryResult => await queryRecordsResult(q, queryResult))
}

async function queryRecordsResult (q, queryResult): Promise<any> {
  return await Promise.resolve(queryResult?.records || [])
}

export function compareQueryOptionsExceptPaging (
  query1: any,
  query2: any,
  datasource: QueriableDataSource
): boolean {
  // const isEqual = true;
  if (!datasource) return false
  query1 = datasource.getRealQueryParams(query1, 'query')
  query2 = datasource.getRealQueryParams(query2, 'query')
  if (!query1 || !query2) {
    return false
  }
  delete query1.page
  delete query1.pageSize
  delete query1.resultOffset
  delete query1.resultRecordCount

  delete query2.page
  delete query2.pageSize
  delete query2.resultOffset
  delete query2.resultRecordCount

  return utils.isDeepEqual(query1, query2)
}
