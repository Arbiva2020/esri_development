
import { React, type ImmutableArray, type ImmutableObject, Immutable, type UseDataSource, hooks } from 'jimu-core'
import { Select, defaultMessages as jimuiDefaultMessage, Switch, type LinearUnit, DistanceUnits } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { type ChartDataSource, type WebChartSeries } from '../../../../../../config'
import defaultMessages from '../../../../../translations/default'
import { InputUnit } from 'jimu-ui/advanced/style-setting-components'
import { getDefaultSeriesOutlineColor, getFillSymbol } from '../../../../../../utils/default'
import { type ISimpleLineSymbol } from '@esri/arcgis-rest-types'
import { LineSymbolSetting } from '../../components'
import { ColorType } from './color-type'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import { type WebChartPieChartSeries } from 'jimu-ui/advanced/chart'
import { getTheme2 } from 'jimu-theme'
import { applyPieSlicesOutline } from './color-type/utils'
import { PieSliceGroupingSliceId } from '../../../../../../constants'

interface PieSeriesSettingProps {
  useFeatureLayerDataSource?: boolean
  chartDataSource: ImmutableObject<ChartDataSource>
  useDataSources: ImmutableArray<UseDataSource>
  series: ImmutableArray<WebChartSeries>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
}

type LabelType = 'value' | 'percentage'
const units = [DistanceUnits.PERCENTAGE]

const defaultSeries = Immutable([])

const sliceGroupingLabel = 'Other'
const sliceGroupingColor = '#D6D6D6'

const defaultSliceGrouping = Immutable({
  sliceId: PieSliceGroupingSliceId,
  percentageThreshold: 0,
  label: sliceGroupingLabel,
  fillSymbol: getFillSymbol(sliceGroupingColor, 1, 'var(--light-100)')
}) as any

const defaultOutlineColor = getDefaultSeriesOutlineColor('pieSeries')

export const PieSeriesSetting = (props: PieSeriesSettingProps): React.ReactElement => {
  const { useFeatureLayerDataSource = true, series: propSeries = defaultSeries, useDataSources, chartDataSource, onChange } = props

  const theme2 = getTheme2()
  const propSerie: ImmutableObject<WebChartPieChartSeries> = propSeries[0]
  const dataLabelVisible = propSerie?.dataLabels.visible ?? false

  const displayPercentageOnDataLabel = propSerie?.displayPercentageOnDataLabel ?? false
  const labelType: LabelType = displayPercentageOnDataLabel ? 'percentage' : 'value'

  const dataLabelsOffset = propSerie?.dataLabelsOffset ?? 0
  const dataLabelsOffsetUnit: LinearUnit = {
    distance: dataLabelsOffset,
    unit: DistanceUnits.PIXEL
  }

  const propSliceGrouping = React.useMemo(() => {
    let grouping = propSerie?.sliceGrouping ?? defaultSliceGrouping
    if (!grouping.fillSymbol) {
      grouping = grouping.set('fillSymbol', defaultSliceGrouping.fillSymbol)
    }
    return grouping
  }, [propSerie?.sliceGrouping])

  const sliceGroupingFill = propSliceGrouping.fillSymbol
  const percentageThreshold = propSliceGrouping.percentageThreshold
  const percentageThresholdUnit: LinearUnit = {
    distance: percentageThreshold,
    unit: DistanceUnits.PERCENTAGE
  }

  const outline = propSerie?.fillSymbol?.outline

  const translate = hooks.useTranslation(defaultMessages, jimuiDefaultMessage)

  const handleDataLabelsVisibleChange = (evt): void => {
    const visible = evt.target.checked
    const series = Immutable.setIn(propSeries, ['0', 'dataLabels', 'visible'], visible)
    onChange?.(series)
  }

  const handleLabelTypeChange = (evt: React.MouseEvent<HTMLSelectElement>) => {
    const labelType = evt.currentTarget.value as LabelType
    const displayNumericValueOnDataLabel = labelType === 'value'
    const displayPercentageOnDataLabel = labelType === 'percentage'
    let series = Immutable.setIn(propSeries, ['0', 'displayNumericValueOnDataLabel'], displayNumericValueOnDataLabel)
    series = Immutable.setIn(series, ['0', 'displayPercentageOnDataLabel'], displayPercentageOnDataLabel)
    onChange?.(series)
  }

  const handleLabelOffsetChange = (value: LinearUnit) => {
    const number = value.distance ?? 0
    const dataLabelsOffset = Math.floor(+number)
    const series = Immutable.setIn(propSeries, ['0', 'dataLabelsOffset'], dataLabelsOffset)
    onChange?.(series)
  }

  const handlePercentageThreshold = (value: LinearUnit) => {
    const number = value.distance ?? 0
    const percentageThreshold = Math.floor(+number)
    const sliceGrouping = propSliceGrouping.set('percentageThreshold', percentageThreshold)
    const series = Immutable.setIn(propSeries, ['0', 'sliceGrouping'], sliceGrouping)
    onChange?.(series)
  }

  const handleSliceGroupingColorChange = (value: string) => {
    const sliceGrouping = propSliceGrouping.setIn(['fillSymbol', 'color'], value)
    const series = Immutable.setIn(propSeries, ['0', 'sliceGrouping'], sliceGrouping)
    onChange?.(series)
  }

  const handleOutlineChange = (value: ImmutableObject<ISimpleLineSymbol>) => {
    let series = Immutable.setIn(propSeries, ['0', 'fillSymbol', 'outline'], value)
    const sliceGrouping = propSliceGrouping.setIn(['fillSymbol', 'outline'], value)
    series = Immutable.setIn(series, ['0', 'sliceGrouping'], sliceGrouping)
    const propSlices = series?.[0]?.slices
    if (propSlices) {
      const slices = applyPieSlicesOutline(propSlices, value)
      series = Immutable.setIn(series, ['0', 'slices'], slices)
    }
    onChange?.(series)
  }

  return (
    <div className='pie-series-setting w-100' role='group' aria-label={translate('slices')}>
      <div role='group' aria-label={translate('valueLabel')} className='mt-2'>
        <SettingRow className='mt-3' label={translate('valueLabel')}>
          <Switch
            checked={dataLabelVisible}
            aria-label={translate('valueLabel')}
            onChange={handleDataLabelsVisibleChange}
          />
        </SettingRow>
        {
          dataLabelVisible && <>
            <SettingRow label={translate('labelType')}>
              <Select
                size='sm'
                aria-label={translate('labelType')}
                className='w-50'
                value={labelType}
                onChange={handleLabelTypeChange}
              >
                <option value={'value'}>
                  {translate('value')}
                </option>
                <option value={'percentage'}>
                  {translate('percentage')}
                </option>
              </Select>
            </SettingRow>
            <SettingRow label={translate('labelOffset')}>
              <InputUnit
                className='w-50'
                aria-label={translate('labelOffset')}
                size='sm'
                min={-100}
                step={1}
                max={100}
                units={units}
                value={dataLabelsOffsetUnit}
                onChange={handleLabelOffsetChange}
              />
            </SettingRow>
          </>
        }
      </div>
      <SettingRow label={translate('grouping')} className='mt-3'>
        <div className='slice-grouping w-50 d-flex justify-content-between' role='group' aria-label={translate('grouping')}>
          <InputUnit
            className='flex-grow-1 mr-1'
            size='sm'
            aria-label={translate('grouping')}
            min={0}
            step={1}
            max={100}
            units={units}
            value={percentageThresholdUnit}
            onChange={handlePercentageThreshold}
          />
          <ThemeColorPicker specificTheme={theme2} title={translate('groupedColor')} aria-label={translate('groupedColor')} className='flex-shrink-0 mr-1' value={sliceGroupingFill.color} onChange={handleSliceGroupingColorChange} />
        </div>
      </SettingRow>
      <SettingRow label={translate('columnOutline')} flow='wrap'>
        <LineSymbolSetting aria-label={translate('columnOutline')} type='outline' defaultColor={defaultOutlineColor} value={outline} onChange={handleOutlineChange} />
      </SettingRow>
      <ColorType
        useFeatureLayerDataSource={useFeatureLayerDataSource}
        chartDataSource={chartDataSource}
        useDataSources={useDataSources}
        series={propSeries}
        onChange={onChange} />
    </div>
  )
}
