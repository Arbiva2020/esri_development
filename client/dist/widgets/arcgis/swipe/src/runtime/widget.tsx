/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  css,
  polished,
  type IMState,
  ReactRedux,
  Immutable,
  hooks,
  type ImmutableArray,
  AppMode,
  classNames
} from 'jimu-core'
import {
  type JimuMapView,
  type JimuLayerView,
  JimuMapViewComponent,
  MapViewManager
} from 'jimu-arcgis'
import {
  defaultMessages as jimuUIMessages,
  Icon,
  WidgetPlaceholder,
  Switch,
  Alert
} from 'jimu-ui'
import defaultMessages from './translations/default'
import iconSrc from '../../icon.svg'
import {
  type IMConfig,
  SwipeMode,
  SwipeStyle
} from '../config'
import { SwipeBetweenLayers } from './components/swipe-between-layers'
import { SwipeBetweenLayersPanel } from './panels/swipe-between-layers-panel'
import { SwipeBetweenMaps } from './components/swipe-between-maps'
import { SwipeBetweenMapsPanel } from './panels/swipe-between-maps-panel'
import { ScrollLayers } from './components/scroll-layers'
import { ScrollLayersPanel } from './panels/scroll-layers-panel'
import { WebScenePanel } from './panels/web-scene-panel'
import { DEFAULT_SLIDER_POSITION } from '../constants'
import { getJimuMapViewId } from '../utils/utils'

const STYLE = css`
  &{
    .widget-container {
      overflow: auto;
    }
    .swipe-panel {
      padding: ${polished.rem(16)};
    }
    .swipe-title {
      .swipe-label {
        font-size: ${polished.rem(14)};
        color: var(--black);
        span {
          margin-left: 0.5rem;
        }
      }
    }
    .error-alert {
      position: absolute;
      bottom: 4px;
      left: 4px;
      z-index: 1;
    }
  }
`

const { useState, useEffect, useCallback, useRef } = React

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const { id, label, config } = props
  const { styleConfig, scrollMapViewList, swipeMapViewList, mapUseDataSourcesOrderList, swipeStyle, swipeMode } = config
  const { isAllowDeactivateLayers = true, sliderPosition = DEFAULT_SLIDER_POSITION, dividerColor = 'var(--light)', handleColor = 'var(--light)' } = styleConfig || {}
  const useMapWidgetId = props.useMapWidgetIds?.[0]
  const [activeMapView, setActiveMapView] = useState<JimuMapView>(null)
  const [inactiveMapView, setInactiveMapView] = useState<JimuMapView>(null)
  const [mapViewGroup, setMapViewGroup] = useState<{ [id: string]: JimuMapView }>(null || {})
  const [showSwipeOnMap, setShowSwipeOnMap] = useState(false)
  const [scrollingLayerOfFirstMapView, setScrollingLayerOfFirstMapView] = useState<JimuLayerView>(null)
  const [scrollingLayerOfSecondMapView, setScrollingLayerOfSecondMapView] = useState<JimuLayerView>(null)
  const [scrollFirstMapView, setScrollFirstMapView] = useState(true)
  const [selectedFirstScrollLayerList, setSelectedFirstScrollLayerList] = useState(Immutable([]))
  const [selectedSecondScrollLayerList, setSelectedSecondScrollLayerList] = useState(Immutable([]))
  const [selectedLeadingLayerList, setSelectedLeadingLayerList] = useState(Immutable([]))
  const [selectedTrailingLayerList, setSelectedTrailingLayerList] = useState(Immutable([]))
  const [mapUseDataSources, setMapUseDataSources] = useState<ImmutableArray<string>>(Immutable([]))
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false)
  const [isLayerUpdated, setIsLayerUpdated] = useState<boolean>(true)
  const hideErrorMsgTimer = useRef<NodeJS.Timeout>(null)
  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)

  const simpleSwipeStyle = swipeStyle === SwipeStyle.SimpleHorizontal || swipeStyle === SwipeStyle.SimpleVertical

  const useDataSources = ReactRedux.useSelector((state: IMState) => {
    const s = state.appStateInBuilder ?? state
    return s.appConfig.widgets[useMapWidgetId]?.useDataSources
  })

  const isDesignMode = ReactRedux.useSelector((state: IMState) => state.appRuntimeInfo.appMode === AppMode.Design)

  useEffect(() => {
    if (showErrorMsg && !hideErrorMsgTimer.current) {
      hideErrorMsgTimer.current = setTimeout(() => {
        setShowErrorMsg(false)
        hideErrorMsgTimer.current = null
      }, 3000)
    }
  }, [showErrorMsg])

  useEffect(() => {
    const newDsIds = useDataSources?.map(ds => ds.dataSourceId)
    setMapUseDataSources(newDsIds)
  }, [useDataSources])

  useEffect(() => {
    setShowSwipeOnMap(false)
  }, [swipeStyle, useMapWidgetId])

  const onViewsCreate = (views: { [viewId: string]: JimuMapView }) => {
    const jimuMapViewGroup = MapViewManager.getInstance().getJimuMapViewGroup(useMapWidgetId)
    setMapViewGroup(jimuMapViewGroup.jimuMapViews)
  }

  const onActiveMapViewChange = (activeView: JimuMapView) => {
    if (activeView?.view) {
      setActiveMapView(activeView)
      setIsLayerUpdated(false)
    } else {
      setActiveMapView(null)
    }
  }

  useEffect(() => {
    const inactiveDs = useDataSources?.filter(ds => {
      return ds.dataSourceId !== activeMapView?.dataSourceId
    })
    const jimuMapViewId = getJimuMapViewId(activeMapView?.mapWidgetId, inactiveDs?.[0]?.dataSourceId)
    const mapView = MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId)
    setInactiveMapView(mapView)
  }, [activeMapView, useDataSources])

  const handleShowSwipeOnMap = () => {
    if (!showSwipeOnMap) {
      const switchButton = document.querySelector(`.jimu-widget-swipe .useMapWidgetId-${useMapWidgetId} .swipe-title .checked:not(.${id})`)
      if (switchButton) {
        setShowErrorMsg(true)
        switchButton.getElementsByTagName('input')[0].click()
      }
    }
    setShowSwipeOnMap(!showSwipeOnMap)
  }

  const handleScrollingLayerOfFirstMapView = useCallback((layer: JimuLayerView) => {
    setScrollingLayerOfFirstMapView(layer)
  }, [])
  const handleScrollingLayerOfSecondMapView = useCallback((layer: JimuLayerView) => {
    setScrollingLayerOfSecondMapView(layer)
  }, [])
  const handleScrollFirstMapView = useCallback((isFirstMap: boolean) => {
    setScrollFirstMapView(isFirstMap)
  }, [])

  const handleSelectedFirstScrollLayer = useCallback((list: ImmutableArray<string>) => {
    setSelectedFirstScrollLayerList(list)
  }, [])
  const handleSelectedSecondScrollLayer = useCallback((list: ImmutableArray<string>) => {
    setSelectedSecondScrollLayerList(list)
  }, [])
  const handleSelectedLeadingLayers = useCallback((list: ImmutableArray<string>) => {
    setSelectedLeadingLayerList(list)
    setIsLayerUpdated(true)
  }, [])
  const handleSelectedTrailingLayers = useCallback((list: ImmutableArray<string>) => {
    setSelectedTrailingLayerList(list)
    setIsLayerUpdated(true)
  }, [])

  const showScrollLayersPanel = !simpleSwipeStyle && !!activeMapView && mapUseDataSources?.length > 0 && activeMapView?.view?.type === '2d' && mapViewGroup && Object.keys(mapViewGroup).length > 0

  const showSwipeBetweenLayersPanel = simpleSwipeStyle && !!activeMapView && activeMapView.status === 'LOADED' && activeMapView?.view?.type === '2d' && swipeMode === SwipeMode.SwipeBetweenLayers

  const showSwipeBetweenMapsPanel = simpleSwipeStyle && swipeMode === SwipeMode.SwipeBetweenMaps && mapViewGroup && Object.keys(mapViewGroup).length === 2 && mapUseDataSources.length === 2

  const showScrollLayers = showSwipeOnMap && swipeStyle && !simpleSwipeStyle && (activeMapView?.view?.type === '2d') && mapUseDataSources?.length > 0 && mapViewGroup && Object.keys(mapViewGroup).length > 0

  const showSwipeBetweenLayers = activeMapView?.view?.type === '2d' && (selectedLeadingLayerList?.length > 0 || selectedTrailingLayerList?.length > 0)

  const showSwipeBetweenMaps = mapUseDataSources?.length === 2 && !!activeMapView

  const SwipePanel = () => {
    return (
      <div className={classNames(`swipe-panel useMapWidgetId-${useMapWidgetId}`)}>
        <div className='swipe-title d-flex justify-content-between'>
          <div className='swipe-label'>
            <Icon icon={iconSrc} />
            <span>{label}</span>
          </div>
          <div>
            <Switch
              aria-label={label}
              title={label}
              className={id}
              checked={showSwipeOnMap}
              onChange={handleShowSwipeOnMap}
            />
          </div>
        </div>
        {showScrollLayersPanel &&
          <ScrollLayersPanel
            scrollMapViewList={scrollMapViewList}
            activeMapView={activeMapView}
            inactiveMapView={inactiveMapView}
            handlePanelSelectedFirstScrollLayer={handleSelectedFirstScrollLayer}
            handlePanelSelectedSecondScrollLayer={handleSelectedSecondScrollLayer}
            isAllowDeactivateLayers={isAllowDeactivateLayers}
            scrollingLayerOfFirstMapView={scrollingLayerOfFirstMapView}
            scrollingLayerOfSecondMapView={scrollingLayerOfSecondMapView}
            scrollFirstMapView={scrollFirstMapView}
            showSwipeOnMap={showSwipeOnMap}
          />
        }
        {!simpleSwipeStyle && activeMapView?.view?.type === '3d' &&
          <WebScenePanel />
        }
        { simpleSwipeStyle && activeMapView?.view?.type === '3d' && swipeMode === SwipeMode.SwipeBetweenLayers &&
          <WebScenePanel />
        }
        { showSwipeBetweenLayersPanel &&
           <SwipeBetweenLayersPanel
            swipeMapViewList={swipeMapViewList}
            activeMapView={activeMapView}
            isAllowDeactivateLayers={isAllowDeactivateLayers}
            handlePanelSelectedLeadingLayers={handleSelectedLeadingLayers}
            handlePanelSelectedTrailingLayers={handleSelectedTrailingLayers}
           />}
         { showSwipeBetweenMapsPanel &&
         <SwipeBetweenMapsPanel
          mapUseDataSourcesOrderList={mapUseDataSourcesOrderList}
          mapUseDataSources={mapUseDataSources}
         />}
          {showErrorMsg && <Alert
          className='w-100 error-alert'
          form='basic'
          open
          withIcon
          type='warning'
          text={translate('mapOccupiedMsg')}
        />}
      </div>
    )
  }

  return (
    <div className='jimu-widget jimu-widget-swipe' css={STYLE}>
      {
        useMapWidgetId && swipeStyle
          ? <div className='widget-container surface-1 border-0 w-100 h-100'>
              <JimuMapViewComponent useMapWidgetId={useMapWidgetId} onActiveViewChange={onActiveMapViewChange} onViewsCreate={onViewsCreate}/>
              {SwipePanel()}
            </div>
          : <WidgetPlaceholder icon={iconSrc} message={translate('_widgetLabel')} />
      }
      {showSwipeOnMap && swipeStyle && simpleSwipeStyle &&
        (swipeMode === SwipeMode.SwipeBetweenLayers
          ? (showSwipeBetweenLayers && isLayerUpdated && <SwipeBetweenLayers
            widgetId={id}
            activeMapView={activeMapView}
            leadingLayersId={selectedLeadingLayerList}
            trailingLayersId={selectedTrailingLayerList}
            swipeStyle={swipeStyle}
            sliderPosition={sliderPosition}
            dividerColor={dividerColor}
            handlerColor={handleColor}
            isDesignMode={isDesignMode}
          />)
          : (showSwipeBetweenMaps && <SwipeBetweenMaps
            swipeMode={swipeMode}
            widgetId={id}
            activeMapView={activeMapView}
            sliderPosition={sliderPosition}
            swipeStyle={swipeStyle}
            mapUseDataSourcesOrderList={mapUseDataSourcesOrderList}
            mapUseDataSources={mapUseDataSources}
            dividerColor={dividerColor}
            handlerColor={handleColor}
            isDesignMode={isDesignMode}
          />)
        )
      }
      { showScrollLayers &&
        <ScrollLayers
              widgetId={id}
              activeMapView={activeMapView}
              inactiveMapView={inactiveMapView}
              firstTrailingLayersId={selectedFirstScrollLayerList}
              secondTrailingLayersId={selectedSecondScrollLayerList}
              swipeStyle={swipeStyle}
              handleScrollingLayerOfFirstMapView={handleScrollingLayerOfFirstMapView}
              handleScrollingLayerOfSecondMapView={handleScrollingLayerOfSecondMapView}
              handleScrollFirstMapView={handleScrollFirstMapView}
              dividerColor={dividerColor}
              isDesignMode={isDesignMode}
            />
      }
    </div>
  )
}

export default Widget
