import { React, ReactRedux, type ImmutableObject, type JimuMapViewInfo, type IMState, type DataSourceInfo, DataSourceManager } from 'jimu-core'
import { type JimuMapView, type JimuFeatureLayerView, type JimuSceneLayerView } from 'jimu-arcgis'

interface Props {
  jimuMapView: JimuMapView

  onSelectedGraphicsChanged?: (selectedGraphicCount: number) => void
}

// eslint-disable-next-line
interface States{}

class _SelectedNumber extends React.PureComponent<Props & ExtraProps, States> {
  currentJimuMapView: JimuMapView

  componentDidMount () {
    this.setCurrentJimuMapView(this.props.jimuMapView)
    this.computerSelectedGraphicCount()
  }

  componentDidUpdate (prevProps: Readonly<Props & ExtraProps>): void {
    const preJimuMapView = prevProps?.jimuMapView || null
    const currJimuMapView = this.props.jimuMapView || null

    if (preJimuMapView !== currJimuMapView) {
      // switch map
      this.setCurrentJimuMapView(currJimuMapView)
    }

    this.computerSelectedGraphicCount()
  }

  componentWillUnmount (): void {
    this.setCurrentJimuMapView(null)
  }

  setCurrentJimuMapView (jimuMapView: JimuMapView): void {
    if (this.currentJimuMapView) {
      this.currentJimuMapView.removeJimuLayerViewSelectedFeatureIdsChangeListener(this.onJimuLayerViewSelectedFeatureIdsChange)
    }

    this.currentJimuMapView = jimuMapView

    if (this.currentJimuMapView) {
      this.currentJimuMapView.addJimuLayerViewSelectedFeatureIdsChangeListener(this.onJimuLayerViewSelectedFeatureIdsChange)
    }
  }

  onJimuLayerViewSelectedFeatureIdsChange = () => {
    // Typically, this callback method is called when we highlight a feature by popup click, but the data source is not used and not created.
    this.computerSelectedGraphicCount()
  }

  computerSelectedGraphicCount () {
    if (this.props.onSelectedGraphicsChanged) {
      const jimuLayerViews = this.props.jimuMapView.jimuLayerViews
      const jimuLayerViewIds = Object.keys(jimuLayerViews)
      let selectedGraphicCount = 0

      for (let i = 0; i < jimuLayerViewIds.length; i++) {
        const jimuLayerView = jimuLayerViews[jimuLayerViewIds[i]]
        const dsId = jimuLayerView.layerDataSourceId
        const ds = DataSourceManager.getInstance().getDataSource(dsId)

        let count = 0

        // If dataSource exist, we get selected features from dataSource, otherwise we get selected features from JimuLayerView.
        if (ds) {
          const selectedRecords = ds.getSelectedRecords()
          count = selectedRecords.length
        }

        if (count === 0 && (jimuLayerView as (JimuFeatureLayerView | JimuSceneLayerView)).getSelectedFeatureIds) {
          // Typically, this is the case that we highlight a feature by popup click, but the data source is not used and not created.
          const jimuLayerViewSelectedFeatureIds = (jimuLayerView as (JimuFeatureLayerView | JimuSceneLayerView)).getSelectedFeatureIds()
          count = jimuLayerViewSelectedFeatureIds.length
        }

        selectedGraphicCount += count
      }

      this.props.onSelectedGraphicsChanged(selectedGraphicCount)
    }
  }

  render () {
    return null
  }
}

const mapStateToProps = (state: IMState, ownProps: Props): ExtraProps => {
  if (state.appStateInBuilder) {
    const dataSourcesInfo = state.appStateInBuilder && state.appStateInBuilder.dataSourcesInfo
    const jimuMapViewsInfo = state.appStateInBuilder && state.appStateInBuilder.jimuMapViewsInfo
    return {
      dataSourcesInfo: dataSourcesInfo,
      viewInfos: jimuMapViewsInfo
    }
  } else {
    const dataSourcesInfo = state && state.dataSourcesInfo
    const jimuMapViewsInfo = state && state.jimuMapViewsInfo
    return {
      dataSourcesInfo: dataSourcesInfo,
      viewInfos: jimuMapViewsInfo
    }
  }
}

interface ExtraProps {
  dataSourcesInfo?: ImmutableObject<{ [dsId: string]: DataSourceInfo }>
  viewInfos?: ImmutableObject<{ [jimuMapViewId: string]: JimuMapViewInfo }>
}

export const SelectedNumber = ReactRedux.connect<ExtraProps, unknown, Props>(mapStateToProps)(_SelectedNumber)
