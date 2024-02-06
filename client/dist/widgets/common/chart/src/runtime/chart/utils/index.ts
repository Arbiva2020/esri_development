import { type ChartElementLimit, LimitBehavior, getSeriesType } from 'jimu-ui/advanced/chart'
import getSeriesWithQuery from './get-series-with-query'
import useSelection from './use-selection'

const getMinSafeValue = (v1, v2) => {
  if (v1 == null && v2 == null) return
  if (v1 == null && v2 != null) return v2
  if (v1 != null && v2 == null) return v1
  return Math.min(v1, v2)
}

const getChartLimits = (series: any, defaultChartLimits: Partial<ChartElementLimit>, num?: number) => {
  const chartLimits: Partial<ChartElementLimit> = {}
  const seriesLength = series?.length
  if (!seriesLength) return defaultChartLimits
  const seriesType = getSeriesType(series)

  let behaviorAfterLimit: LimitBehavior = LimitBehavior.Reject

  if (seriesType === 'scatterSeries') {
    chartLimits.maxScatterPointsBeforeAggregation = defaultChartLimits.maxScatterPointsBeforeAggregation
    chartLimits.maxScatterPointsAfterAggregation = defaultChartLimits.maxScatterPointsAfterAggregation
  }

  let limitKey = ''
  let limitNum = -1
  if (seriesType === 'lineSeries') {
    chartLimits.maxLineChartSeriesCount = defaultChartLimits.maxLineChartSeriesCount
    limitKey = 'maxLineChartMarkersCountTotal'
    const tootleCount = defaultChartLimits[limitKey]
    // There is a bug for `RenderUpToTheLimit` the line chart, use `Reject` first
    // if (num && (num * seriesLength) <= tootleCount) {
    //   limitNum = num * seriesLength
    //   behaviorAfterLimit = LimitBehavior.RenderUpToTheLimit
    // } else {
    //   limitNum = tootleCount
    // }
    chartLimits[limitKey] = tootleCount
  } else {
    if (seriesType === 'barSeries') {
      if (series.length === 1) {
        limitKey = 'maxBarUniqueSeriesCountTotal'
      } else if (series.length === 2) {
        chartLimits.maxBarTwoSeriesCountTotal = defaultChartLimits.maxBarTwoSeriesCountTotal
        limitKey = 'maxBarTwoSeriesCountPerSeries'
      } else if (series.length > 2) {
        chartLimits.maxBarThreePlusSeriesCountTotal = defaultChartLimits.maxBarThreePlusSeriesCountTotal
        limitKey = 'maxBarThreePlusSeriesCountPerSeries'
      }
    } else if (seriesType === 'pieSeries') {
      limitKey = 'maxPieChartSliceCountTotal'
    }
    const defaultLimitNum = defaultChartLimits[limitKey]
    if (num && num <= defaultLimitNum) {
      limitNum = num
      behaviorAfterLimit = LimitBehavior.RenderUpToTheLimit
    } else {
      limitNum = defaultLimitNum
    }
    chartLimits[limitKey] = limitNum
  }
  chartLimits.behaviorAfterLimit = behaviorAfterLimit
  return chartLimits
}

export { getSeriesWithQuery, useSelection, getMinSafeValue, getChartLimits }
