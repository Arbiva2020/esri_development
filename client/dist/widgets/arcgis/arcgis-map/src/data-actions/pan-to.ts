import { AbstractDataAction, type DataRecordSet, DataSourceStatus, MutableStoreManager, type FeatureDataRecord, type JSAPILayerMixin, type DataSource } from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'
import { type PanToGeometriesInternalValue, type PanToLayerInternalValue } from '../message-actions/pan-to-action'

export default class PanTo extends AbstractDataAction {
  async isSupported (dataSet: DataRecordSet): Promise<boolean> {
    const { records } = dataSet
    const dataSource = dataSet.dataSource as DataSource & JSAPILayerMixin
    if (!dataSource || dataSource.getStatus() === DataSourceStatus.NotReady) {
      return false
    }
    if (records.length > 0 && dataSource?.supportSpatialInfo && dataSource?.supportSpatialInfo()) {
      // pan to graphics
      return true
    } else if (dataSet.records?.length === 0 &&
               !!(dataSet.dataSource as unknown as JSAPILayerMixin)?.createJSAPILayerByDataSource &&
               dataSource?.supportSpatialInfo && dataSource?.supportSpatialInfo()) {
      // pan to layer
      return true
    } else {
      return false
    }
  }

  async onExecute (dataSet: DataRecordSet): Promise<boolean> {
    const { records } = dataSet
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules
      let panToActionValue: PanToGeometriesInternalValue | PanToLayerInternalValue = null
      const geometries = records.map(record => handleFeature((record as FeatureDataRecord).feature, Graphic)?.geometry)

      if (geometries?.length > 0) {
        panToActionValue = {
          type: 'pan-to-geometries',
          geometries
        }
      } else {
        panToActionValue = {
          type: 'pan-to-layer',
          dataSourceId: dataSet.dataSource?.id || null
        }
      }
      MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToActionValue)
      return true
    })
  }
}
