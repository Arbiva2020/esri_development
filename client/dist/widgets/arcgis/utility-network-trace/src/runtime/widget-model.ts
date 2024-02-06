import { DataSourceManager, MessageManager, DataRecordsSelectionChangeMessage } from 'jimu-core'
import { type FeatureLayerDataSource } from 'jimu-core/data-source'
import { type JimuMapView, MapViewManager } from 'jimu-arcgis'
import UtilityNetworkTrace from 'esri/widgets/UtilityNetworkTrace'
import reactiveUtils from 'esri/core/reactiveUtils'

export default class WidgetModel {
  private static instance: WidgetModel

  public unt: UtilityNetworkTrace = null

  private props: any = null

  readonly mvManager: MapViewManager = MapViewManager.getInstance()

  static getInstance (): WidgetModel {
    if (!WidgetModel.instance) {
      WidgetModel.instance = new WidgetModel()
    }
    return WidgetModel.instance
  }

  /****** PUBLIC METHODS ****/
  public loadPropsFromView (props) {
    this.props = props
  }

  //--------------------------------------------------------------------------
  //  loadTraceWidgetFromAPI
  //--------------------------------------------------------------------------

  /**
   * Loads the Utility Network widget from the ArcGIS JS SDK. Takes a Utility Network with published trace configurations to work.
   *
   * @method loadTraceWidgetFromAPI
   * @instance
   * @param {any} jimuMapView - The current active map view.
   * @param {HTMLElement} domRef - Reference to the DOM object to place the widget.
   * @return {Promise<UtilityNetworkTrace>} When resolved, response is the Utility Network Trace widget.
   */
  public async loadTraceWidgetFromAPI (jimuMapView: any, domRef: HTMLElement): Promise<UtilityNetworkTrace> {
    if (this.unt !== null) {
      if (this.unt.viewModel !== null) {
        this.unt.viewModel.reset()
      }
    }
    let un = null
    if (jimuMapView.view.map.utilityNetworks) {
      un = jimuMapView.view.map.utilityNetworks.getItemAt(0)
    }
    const unt = new UtilityNetworkTrace({
      container: domRef,
      utilityNetwork: un,
      view: jimuMapView.view,
      showSelectionAttributes: true,
      selectOnComplete: true,
      showGraphicsOnComplete: true,
      selectedTraces: [],
      flags: [],
      //@ts-expect-error: currently not typed in JS SDK 4.26. Will be in 4.27
      enableResultArea: false
    })
    this.unt = unt
    await this.loadAllChildDS()
    this.registerEvents()
    return unt
  }

  public registerEvents () {
    // @ts-expect-error: 'select-features' event is not documented for 4.23, let us fix it later.
    this.unt.on('select-features', (res) => {
      this.clearSelection(res)
      const mapDS = this.getActiveMap()
      const mapLyrVws = mapDS.jimuLayerViews
      const dsObj = DataSourceManager.getInstance()
      const mapLyrVwsSel = {}
      // @ts-expect-error: 'res' is not documented as a result set from this event.
      res.resultSet.forEach((arrResult) => {
        arrResult.forEach((rs) => {
          //dsObj.forEach((ds) => {
          for (const key in mapLyrVws) {
            const ds = dsObj.getDataSource(mapLyrVws[key].layerDataSourceId)
            if (ds && ds.type === 'FEATURE_LAYER') {
              // @ts-expect-error
              if (ds.layer.id === rs.layer.id) {
                const oidField = rs.layer.objectIdField
                if (!mapLyrVwsSel[key]) {
                  mapLyrVwsSel[key] = {
                    ds: ds,
                    featDatRecList: [],
                    objectIdList: []
                  }
                }
                rs.featureSet.features.forEach((feat) => {
                  mapLyrVwsSel[key].featDatRecList.push(ds.buildRecord(feat))
                  mapLyrVwsSel[key].objectIdList.push(feat.attributes[oidField])
                  // featDatRecList.push(ds.buildRecord(feat))
                  // objectIdList.push(feat.attributes[oidField])
                })
                // ds.selectRecordsByIds(objectIdList.map(String), featDatRecList, true)
              }
            }
          }
        })
      })
      for (const key in mapLyrVwsSel) {
        const ds = mapLyrVwsSel[key].ds
        ds.selectRecordsByIds(mapLyrVwsSel[key].objectIdList.map(String), mapLyrVwsSel[key].featDatRecList, true)
        const message = new DataRecordsSelectionChangeMessage(this.props.id, mapLyrVwsSel[key].featDatRecList)
        MessageManager.getInstance().publishMessage(message)
      }
    })
    // @ts-expect-error: 'clear-selection' event is not documented for 4.23, let us fix it later.
    this.unt.on('clear-selection', (res) => {
      if (this.unt) {
        this.clearSelection(res)
      }
    })
    const fsDS = this.getFeatureLayerDS()
    if (fsDS !== null) {
      this.unt.gdbVersion = fsDS.getGDBVersion()
      reactiveUtils.watch(
        () => fsDS.layer.gdbVersion,
        (value) => {
          this.unt.gdbVersion = value
        })
    }
  }

  public clearSelection (res) {
    const mapDS = this.getActiveMap()
    if (mapDS !== null) {
      const mapLyrVws = mapDS.jimuLayerViews
      const dsObj = DataSourceManager.getInstance()
      if (res.resultSet.length > 0) {
        //res.resultSet.forEach((arrResult) => {
        const uniqueDS = []
        //arrResult.forEach((rs) => {
        for (const key in mapLyrVws) {
          if (!uniqueDS.includes(mapLyrVws[key].layerDataSourceId)) {
            const ds = dsObj.getDataSource(mapLyrVws[key].layerDataSourceId)
            if (ds) {
              if (ds.type === 'FEATURE_LAYER') {
                //const dsJson = ds.getDataSourceJson()
                //if (ds.layer.id === rs.layer.id) {
                ds.clearSelection()
                //}
              }
            }
          }
          uniqueDS.push(mapLyrVws[key].layerDataSourceId)
        }
        //})
        //})
      } else {
        for (const key in mapLyrVws) {
          const ds = dsObj.getDataSource(mapLyrVws[key].layerDataSourceId)
          if (ds) {
            if (ds.type === 'FEATURE_LAYER') {
              //const dsJson = ds.getDataSourceJson()
              //if (dsJson.url !== null && dsJson.url === rs.layerUrl) {
              ds.clearSelection()
              //}
            }
          }
        }
      }
    }
  }

  public clearAll () {
    //const mapDS = this.getActiveMap()
    //const mapLyrVws = mapDS.jimuLayerViews
    let activeMap = null
    const allIds = this.mvManager.getAllJimuMapViewIds()
    allIds.forEach((ids) => {
      const jmapView = this.mvManager.getJimuMapViewById(ids)
      //if (jmapView.isActive) {
      activeMap = jmapView
      //}
      if (activeMap !== null) {
        const dsObj = DataSourceManager.getInstance()
        const mapLyrVws = activeMap.jimuLayerViews
        for (const key in mapLyrVws) {
          const ds = dsObj.getDataSource(mapLyrVws[key].layerDataSourceId)
          if (ds) {
            if (ds.type === 'FEATURE_LAYER') {
              ds.clearSelection()
            }
          }
        }
        activeMap.view.graphics.removeAll()
        this.callResetOnJSWidget()
      }
    })
  }

  public callResetOnJSWidget () {
    if (this.unt !== null) {
      if (this.unt.viewModel !== null) {
        //@ts-expect-error
        if (this.unt.viewModel._unObject !== null) {
          this.unt.viewModel.reset()
        }
      }
    }
  }

  public getActiveMap (): JimuMapView {
    let returnVal = null
    if (this.props) {
      if (this.props.config.useMapWidget) {
        const mapViewGroups = this.mvManager.getJimuMapViewGroup(this.props.config.useMapWidgetIds)
        if (mapViewGroups && mapViewGroups.jimuMapViews) {
          for (const id in mapViewGroups.jimuMapViews) {
            if (mapViewGroups.jimuMapViews[id].dataSourceId) {
              if (
                mapViewGroups.jimuMapViews[id].isActive ||
                mapViewGroups.jimuMapViews[id].isActive === undefined
              ) {
                returnVal = mapViewGroups.jimuMapViews[id]
              }
            }
          }
        }
      }
    }
    return returnVal
  }

  public getFeatureLayerDS (): FeatureLayerDataSource {
    const mapDS = this.getActiveMap()
    if (mapDS !== null) {
      const mapLyrVws = mapDS.jimuLayerViews
      const dsObj = DataSourceManager.getInstance()
      for (const key in mapLyrVws) {
        const ds = dsObj.getDataSource(mapLyrVws[key].layerDataSourceId)
        if (ds) {
          if (ds.type === 'FEATURE_LAYER') {
            const flDS = ds as FeatureLayerDataSource
            const lyrDef = flDS.getLayerDefinition()
            const unField = lyrDef.fields.some((fld) => {
              return fld.name.toLowerCase() === 'subnetworkname'
            })
            if (unField) { return flDS }
          }
        } else {
          return null
        }
      }
      return null
    } else {
      return null
    }
  }

  public async loadAllChildDS (): Promise<boolean> {
    const activeMap = this.getActiveMap()
    if (activeMap) {
      await activeMap.whenAllJimuLayerViewLoaded()
      const dsObj = DataSourceManager.getInstance()
      const mapDs = dsObj.getDataSource(activeMap.dataSourceId)
      if (mapDs.isDataSourceSet && !mapDs.areChildDataSourcesCreated()) {
        await mapDs.childDataSourcesReady()
      }
      return true
    }
    return false
  }
}
