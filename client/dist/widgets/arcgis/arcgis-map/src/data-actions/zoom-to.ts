import { AbstractDataAction, type DataRecordSet, DataSourceStatus, MutableStoreManager, type FeatureDataRecord, type DataSource, type JSAPILayerMixin } from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'
import { type ZoomToGraphicsInternalValue } from '../message-actions/zoom-to-feature-action'

export default class ZoomTo extends AbstractDataAction {
  async isSupported (dataSet: DataRecordSet): Promise<boolean> {
    const { records } = dataSet
    const dataSource = dataSet.dataSource as DataSource & JSAPILayerMixin
    if (!dataSource || dataSource.getStatus() === DataSourceStatus.NotReady) {
      return false
    }
    if (records.length > 0 && dataSource?.supportSpatialInfo && dataSource?.supportSpatialInfo()) {
      // zoom to graphics
      return true
    } else if (dataSet.records?.length === 0 &&
               !!dataSource?.createJSAPILayerByDataSource &&
                dataSource?.supportSpatialInfo && dataSource?.supportSpatialInfo()) {
      // zoom to layer
      return true
    } else {
      return false
    }
  }

  async onExecute (dataSet: DataRecordSet): Promise<boolean> {
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules
      const featureSet: ZoomToGraphicsInternalValue = {
        type: 'zoom-to-graphics',
        features: dataSet.records.map(record => handleFeature((record as FeatureDataRecord).feature, Graphic)),
        dataSourceId: dataSet.dataSource?.id || null,
        zoomToOption: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        }
      }
      MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureSet)
      return true
    })
  }
}
