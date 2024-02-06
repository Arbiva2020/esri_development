import { type ChartElementLimit, LimitBehavior } from 'jimu-ui/advanced/chart'

export const ByFieldSeriesX = 'name'
export const ByFieldSeriesXAlias = 'Name'
export const ByFieldSeriesY = 'value'
export const ByFieldSeriesYAlias = 'Value'
export const MaxColorCount = 20
export const ObjectIdField = 'objectid'
export const HistogramMinValueField = 'minValue'
export const HistogramMinValueFieldAlias = 'Min value'
export const HistogramMaxValueField = 'maxValue'
export const HistogramMaxValueFieldAlias = 'Max value'
export const HistogramCountField = 'count'
export const HistogramCountFieldAlias = 'Count'
export const PieSliceGroupingSliceId = '__other-slice__'

export const ChartLimits: Partial<ChartElementLimit> = {
  // chart's behavior once the limit is reached
  behaviorAfterLimit: LimitBehavior.Reject,
  // maximum number of bars for a unique series bar chart
  maxBarUniqueSeriesCountTotal: 10000,
  // maximum number of bars per series for a 2 series bar chart
  maxBarTwoSeriesCountPerSeries: 1000,
  // maximum number of bars for a 2 series bar chart
  maxBarTwoSeriesCountTotal: 2000,
  // maximum number of bars per series for a 3+ series bar chart
  maxBarThreePlusSeriesCountPerSeries: 100,
  // maximum number of bars for a 3+ series bar chart
  maxBarThreePlusSeriesCountTotal: 2000,
  /**
   * Specifies the maximum number of points to be rendered in a scatter plot.
   * If the number of points are more, then the data will be aggregated in
   * a 2D grid of size sqrt(maxScatterPointsAfterAggregation) x sqrt(maxScatterPointsAfterAggregation)
   */
  maxScatterPointsBeforeAggregation: 10000,
  // Specifies how many maximum points can be displayed once the scatter plot data is aggregated
  maxScatterPointsAfterAggregation: 10000,
  // maximum number of data points for line chart
  maxLineChartMarkersCountTotal: 10000,
  // maximum number of series for line chart
  maxLineChartSeriesCount: 100,
  // maximum number of slices for pie chart
  maxPieChartSliceCountTotal: 300
}

// The version used for arcgis charts spec.
export const WebChartCurrentVersion = '6.2.1'
