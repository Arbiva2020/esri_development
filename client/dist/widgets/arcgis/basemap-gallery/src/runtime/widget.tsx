/** @jsx jsx */
import { classNames, getAppStore, React, type AllWidgetProps, jsx, MutableStoreManager, ReactRedux, type IMState } from 'jimu-core'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { WidgetPlaceholder } from 'jimu-ui'
import { type IMConfig, BasemapsType, type DatasourceBasemaps } from '../config'
import { getStyles } from './style'
import defaultMessages from './translations/default'
import { getBasemapGroupByDefault, getBasemapItemsByGroupId } from '../utils/util'
import { usePrevious } from '../utils/usePrevious'
import Basemap from 'esri/Basemap'
import BasemapGallery from 'esri/widgets/BasemapGallery'
import Portal from 'esri/portal/Portal'
import esriRequest from 'esri/request'
import reactiveUtils from 'esri/core/reactiveUtils'
import BasemapGalleryViewModel from 'esri/widgets/BasemapGallery/BasemapGalleryViewModel'
const BaseMapGalleryIcon = require('../../icon.svg')
type BaseMapProps = AllWidgetProps<IMConfig>
const Widget = (props: BaseMapProps) => {
  const { useMapWidgetIds, config, id, theme, token, mutableStateProps } = props
  const { basemapsType, customBasemaps } = config
  const prevBasemapsType = usePrevious(basemapsType)

  // Holds a value of basemapsType that is not affected by asynchrony
  const basemapsTypeRef = React.useRef<string>(null)
  basemapsTypeRef.current = basemapsType

  // Since usestate cannot get the latest value immediately, it is changed to useref
  const activeView = React.useRef<__esri.MapView | __esri.SceneView>(null)
  const currentJimuMapViewId = React.useRef<string>(null)
  const bmViewModel = React.useRef<__esri.BasemapGalleryViewModel>(null)

  const [isGalleryReady, setGalleryReady] = React.useState(false)
  const basemapContainerParent = React.useRef<HTMLInputElement>(null)

  // Current basemaps for the views
  const mapViewBasemaps = React.useRef<DatasourceBasemaps>({})
  // Original basemaps for the views
  const mapViewOriginalBasemaps = React.useRef({})

  // Cache organization basemaps since it is time consuming for getting them.
  const cachedOrgBasemaps: __esri.Basemap[] = React.useMemo(() => mutableStateProps?.cachedOrgBasemaps || null, [mutableStateProps?.cachedOrgBasemaps])
  const setCachedOrgBasemaps = React.useCallback((cachedOrgBasemaps: __esri.Basemap[]) => {
    MutableStoreManager.getInstance().updateStateValue(id, 'cachedOrgBasemaps', cachedOrgBasemaps)
  }, [id])

  // Cache baseMapGallery since recreation is time-consuming and some contain actions do not require recreating it, such as dragging it into/out of Map widget.
  const cachedBaseMapGallery: __esri.BasemapGallery = React.useMemo(() => mutableStateProps?.cachedBaseMapGallery || null, [mutableStateProps?.cachedBaseMapGallery])
  const setCachedBasemapGallery = React.useCallback((cachedBaseMapGallery: __esri.BasemapGallery) => {
    MutableStoreManager.getInstance().updateStateValue(id, 'cachedBaseMapGallery', cachedBaseMapGallery)
  }, [id])

  React.useEffect(() => {
    if (cachedBaseMapGallery !== null) {
      const container: HTMLElement = cachedBaseMapGallery.container as HTMLElement
      if (basemapContainerParent.current) {
        if (basemapContainerParent.current.childElementCount === 0 && container) {
          basemapContainerParent.current.appendChild(container)
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const mapDataSources = ReactRedux.useSelector((state: IMState) => {
    const s = state.appStateInBuilder ?? state
    return useMapWidgetIds ? s.appConfig.widgets[useMapWidgetIds[0]]?.useDataSources : []
  })

  React.useEffect(() => {
    if (mapViewOriginalBasemaps.current && mapDataSources) {
      for (const key in mapViewOriginalBasemaps.current) {
        if (currentJimuMapViewId.current !== key) {
          delete mapViewOriginalBasemaps.current[key]
          mapViewBasemaps.current[key] && (delete mapViewBasemaps.current[key])
        }
      }
    }
  }, [mapDataSources])

  const onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (jimuMapView?.view) {
      const jimuMapViewId = jimuMapView.id
      const webmapOrwebScene: __esri.WebMap | __esri.WebScene = jimuMapView.view.map as any
      activeView.current = jimuMapView.view
      currentJimuMapViewId.current = jimuMapViewId
      bmViewModel.current = new BasemapGalleryViewModel({
        view: jimuMapView.view
      })
      if (jimuMapViewId.match(/widget.*?null/g)) {
        mapViewBasemaps.current = {}
      }
      // Store the original basemap for the view
      if (!mapViewOriginalBasemaps.current[jimuMapViewId]) {
        const originalBasemap = jimuMapView.view.map.basemap
        !originalBasemap.thumbnailUrl && (originalBasemap.thumbnailUrl = webmapOrwebScene.thumbnailUrl)
        mapViewOriginalBasemaps.current[jimuMapViewId] = originalBasemap
      }
      createBasemapGallery(activeView.current)
    } else {
      cachedBaseMapGallery && !cachedBaseMapGallery.destroyed && cachedBaseMapGallery.destroy()
    }
  }

  const getOrgBasemaps = async (): Promise<any> => {
    if (cachedOrgBasemaps !== null) return cachedOrgBasemaps
    let groupBasemapItems = []
    const portalUrl = getAppStore().getState().portalUrl
    const portal = new Portal({
      url: portalUrl
    })
    const portalSelf = await loadPortal(portal)
    if (isModeChanged()) {
      return groupBasemapItems
    }
    const orgDefaultGroup = await getBasemapGroupByDefault(esriRequest, portalUrl, portalSelf, token, false)
    if (isModeChanged()) {
      return groupBasemapItems
    }
    const orgGroupId = orgDefaultGroup.id
    groupBasemapItems = await getBasemapItemsByGroupId(portal, portalUrl, orgGroupId, true)
    const promises = getLoadedBasemapsPromises(groupBasemapItems)
    const loadedGroupBasemaps = await Promise.all(promises)
    setCachedOrgBasemaps(loadedGroupBasemaps)
    return loadedGroupBasemaps
  }

  const loadPortal = (portal: Portal): Promise<any> => {
    return portal.load().then(async () => {
      return Promise.resolve(portal.sourceJSON)
    }, async () => {
      return Promise.reject(null)
    })
  }

  const onRemoveMap = () => {
    activeView.current = null
    currentJimuMapViewId.current = null
    mapViewBasemaps.current = {}
    if (cachedBaseMapGallery != null) {
      !cachedBaseMapGallery.destroyed && cachedBaseMapGallery.destroy()
      setCachedBasemapGallery(null)
    }
  }

  const loadBasemapFunc = async (basemapItem): Promise<any> => {
    const basemap = new Basemap({ portalItem: { id: basemapItem.id } })
    const itemData = await basemap.load()
    return Promise.resolve(itemData)
  }
  const getLoadedBasemapsPromises = (basemapItems): any[] => {
    const promises = []
    basemapItems.forEach(async item => {
      const func = loadBasemapFunc(item)
      promises.push(func)
    })
    return promises
  }

  const getGallerySource = async (): Promise<Basemap[]> => {
    let gallerySource: Basemap[] = []

    const originalBasemap = mapViewOriginalBasemaps.current[currentJimuMapViewId.current]
    if (basemapsType === BasemapsType.Organization) {
      gallerySource = await getOrgBasemaps()
    } else {
      const promises = getLoadedBasemapsPromises(customBasemaps)
      gallerySource = await Promise.all(promises)
    }

    const isCurrentBasemapInclude: boolean = gallerySource.some(item => bmViewModel.current.basemapEquals(originalBasemap, item))

    // if basemap of current webmap or webScene is not include, so add it.
    if (!isCurrentBasemapInclude && originalBasemap) {
      gallerySource = gallerySource.concat(originalBasemap)
    }
    return gallerySource
  }

  const createBasemapGallery = async (activeView: __esri.MapView | __esri.SceneView) => {
    // Previous basemapType is undefined when recreated by contain actions, such as dragging it into/out of Map widget.
    const isCausedByWidgetCreate: boolean = prevBasemapsType === undefined
    if ((isCausedByWidgetCreate && cachedBaseMapGallery != null) || !activeView) {
      setGalleryReady(true)
      return
    }

    setGalleryReady(false)
    const gallerySource = await getGallerySource()
    if (isModeChanged()) {
      setGalleryReady(true)
      return
    }
    // destroy cachedBaseMapGallery and add the container for baseMapGallery
    cachedBaseMapGallery != null && cachedBaseMapGallery.destroy()
    setCachedBasemapGallery(null)
    const container = document && document.createElement('div')
    container.className = 'esri-component h-100'
    if (basemapContainerParent.current) {
      if (basemapContainerParent.current.childElementCount === 0) {
        basemapContainerParent.current.appendChild(container)
      } else {
        basemapContainerParent.current.replaceChildren(container)
      }
    }

    setCachedBasemapGallery(
      new BasemapGallery({
        view: activeView,
        source: gallerySource,
        container: container
      })
    )

    setGalleryReady(true)
  }

  const initCurrentBasemapsToOriginal = () => {
    for (const key in mapViewOriginalBasemaps.current) {
      const item = mapViewOriginalBasemaps.current[key]
      mapViewBasemaps.current[key] = item
    }
  }

  React.useEffect(() => {
    const ismapRemoved: boolean = useMapWidgetIds && useMapWidgetIds?.length <= 0
    //When remove a map, clear basemapGallery and mapview-related content
    if (ismapRemoved) {
      onRemoveMap()
      return
    }

    // When the user switches modes, the view basemap should be restored to the original basemap
    if (prevBasemapsType && prevBasemapsType !== basemapsType && activeView.current && activeView.current.map) {
      initCurrentBasemapsToOriginal()
    }

    createBasemapGallery(activeView.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useMapWidgetIds, customBasemaps, basemapsType])

  React.useEffect(() => {
    if (cachedBaseMapGallery) {
      mapViewBasemaps.current && mapViewBasemaps.current[currentJimuMapViewId.current] && (cachedBaseMapGallery.viewModel.activeBasemap = mapViewBasemaps.current[currentJimuMapViewId.current])
      reactiveUtils.when(
        () => cachedBaseMapGallery.activeBasemap,
        () => {
          mapViewBasemaps.current[currentJimuMapViewId.current] = cachedBaseMapGallery.activeBasemap
        }
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cachedBaseMapGallery])

  const isModeChanged = () => {
    return basemapsType !== basemapsTypeRef.current
  }

  if (!useMapWidgetIds || useMapWidgetIds?.length <= 0) {
    return (
      <WidgetPlaceholder
        icon={BaseMapGalleryIcon} widgetId={id}
        message={props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })}
      />
    )
  } else {
    return (
      <div
        className='jimu-widget jimu-basemap-widget surface-1 border-0'
        css={getStyles(theme)}
      >
        <JimuMapViewComponent
          useMapWidgetId={useMapWidgetIds?.[0]}
          onActiveViewChange={onActiveViewChange}
        />
        <div
         className={classNames('esri-ui-inner-container', 'esri-ui-corner-container', {
           'd-none': !isGalleryReady
         })}
         role="listbox">
          <div className="esri-ui-corner w-100 h-100" ref={basemapContainerParent}>
          </div>
        </div>
        { !isGalleryReady && <div className="jimu-secondary-loading" /> }
      </div>
    )
  }
}

export default Widget
