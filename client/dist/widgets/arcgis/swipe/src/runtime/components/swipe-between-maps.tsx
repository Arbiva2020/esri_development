/** @jsx jsx */
import { React, type ImmutableArray, hooks, getAppStore } from 'jimu-core'
import { type JimuMapView, MapViewManager } from 'jimu-arcgis'
import { interact } from 'jimu-core/dnd'
import { type SwipeMode, SwipeStyle } from '../../config'
import { type LinearUnit } from 'jimu-ui'
import { arraysEqual } from '../../utils/utils'
const { useRef, useEffect, useState } = React

const dividerStyle = `
  position: absolute;
  border: 1px solid rgba(110,110,110,.5);
`
const handlerStyle = `
  width: 32px;
  height: 32px;
  border: 1px solid rgba(110,110,110,.5);
  borderRadius: 2px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export interface SwipeBetweenMapsProps {
  widgetId: string
  activeMapView: JimuMapView
  swipeMode: SwipeMode
  sliderPosition: LinearUnit
  swipeStyle: SwipeStyle
  mapUseDataSourcesOrderList: ImmutableArray<string>
  mapUseDataSources: ImmutableArray<string>
  dividerColor: string
  handlerColor: string
  isDesignMode: boolean
}
interface Position {
  x: number
  y: number
}

export function SwipeBetweenMaps (props: SwipeBetweenMapsProps) {
  const { activeMapView, widgetId, swipeMode, swipeStyle, sliderPosition, mapUseDataSourcesOrderList, mapUseDataSources, dividerColor, handlerColor, isDesignMode } = props
  const isRTL = getAppStore().getState()?.appContext?.isRTL
  const mapId = activeMapView.mapWidgetId
  const mapViewWidthRef = useRef(activeMapView.view?.width)
  const mapViewHeightRef = useRef(activeMapView.view?.height)
  const sliderId = `jimu-widget-swipe-${widgetId}-handle-container`
  //If items in useDataSources of a map widget is the same as the in mapUseDataSourcesOrderList but they may be in different order, use mapUseDataSourcesOrderList. If they are not the same, use useDataSources of a map widget(May be a map view is added or deleted from a map widget while swipe is on).
  const mapViewList = arraysEqual(mapUseDataSources, mapUseDataSourcesOrderList) ? mapUseDataSourcesOrderList : mapUseDataSources
  const isLeadingMapActiveRef = useRef(mapViewList?.[0] === activeMapView?.dataSourceId)
  const isMapViewBindClickEventRef = useRef(false)
  const isHasClickInactiveMapRef = useRef(false)
  const defaultPosition = { x: 0, y: 0 } as Position
  const multiMapContainerRef = useRef<HTMLElement>(document.querySelector<HTMLElement>(`div[data-widgetid=${mapId}] .multi-map-container`))
  const activeMapDOMRef = useRef<HTMLDivElement>(multiMapContainerRef.current?.querySelector('.multisourcemap-item-appear-noanimate'))
  const inactiveMapDOMRef = useRef<HTMLDivElement>(multiMapContainerRef.current?.querySelector('.multisourcemap-item-disappear-noanimate'))
  if (swipeStyle === SwipeStyle.SimpleVertical) {
    defaultPosition.y = mapViewHeightRef.current * sliderPosition.distance * 0.01
  } else {
    const rtlPosition = isRTL ? (100 - sliderPosition.distance) : sliderPosition.distance
    defaultPosition.x = mapViewWidthRef.current * rtlPosition * 0.01
  }
  const [position, setPosition] = useState(defaultPosition)
  const interactableRef = useRef<Interact.Interactable>()
  const dividerDomRef = useRef<HTMLElement>()
  const jimuMapViewGroup = MapViewManager.getInstance().getJimuMapViewGroup(mapId)

  useEffect(() => {
    if (activeMapView.isCached()) {
      return
    }
    multiMapContainerRef.current.style.pointerEvents = isDesignMode ? 'none' : null
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesignMode])

  useEffect(() => {
    return () => {
      if (multiMapContainerRef.current) {
        multiMapContainerRef.current.style.pointerEvents = null
      }
    }
  }, [])

  hooks.useUpdateEffect(() => {
    isLeadingMapActiveRef.current = !isLeadingMapActiveRef.current
  }, [activeMapView])

  useEffect(() => {
    if (activeMapView.isCached()) {
      return
    }
    activeMapDOMRef.current = multiMapContainerRef.current.querySelector('.multisourcemap-item-appear-noanimate')
    inactiveMapDOMRef.current = multiMapContainerRef.current.querySelector('.multisourcemap-item-disappear-noanimate')
    isHasClickInactiveMapRef.current = false
    isMapViewBindClickEventRef.current = false
    showInactiveMap()
    clipActiveMap()

    updateSwipeWidget()
    addClickEventForMapView()
    activeMapView.hideMapTools()
    return () => {
      destroySwipeWidget()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMapView, dividerColor, handlerColor])

  useEffect(() => {
    const resizeHandle = activeMapView.view.on('resize', (evt) => {
      mapViewWidthRef.current = evt.width
      mapViewHeightRef.current = evt.height
      destroySwipeWidget()
      showInactiveMap()
      clipActiveMap()
      updateSwipeWidget()
      addClickEventForMapView()
      activeMapView.hideMapTools()
    })
    return () => {
      resizeHandle.remove()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMapView, dividerColor, handlerColor])

  useEffect(() => {
    const cacheListener = () => {
      isMapViewBindClickEventRef.current = false
    }
    const restoreListener = () => {
      multiMapContainerRef.current = document.querySelector<HTMLElement>(`div[data-widgetid=${mapId}] .multi-map-container`)
      activeMapDOMRef.current = multiMapContainerRef.current.querySelector('.multisourcemap-item-appear-noanimate')
      inactiveMapDOMRef.current = multiMapContainerRef.current.querySelector('.multisourcemap-item-disappear-noanimate')
      showInactiveMap()
      clipActiveMap()
      updateSwipeWidget()
      addClickEventForMapView()
      activeMapView.hideMapTools()
    }

    activeMapView.addCacheListener(cacheListener)
    activeMapView.addRestoreListener(restoreListener)

    return () => {
      activeMapView.removeCacheListener(cacheListener)
      activeMapView.removeRestoreListener(restoreListener)
      destroySwipeWidget()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMapView, dividerColor, handlerColor])

  useEffect(() => {
    setPosition(defaultPosition)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swipeMode])

  //Clip the active map when mapViewList in setting is dragged.
  hooks.useUpdateEffect(() => {
    if (activeMapView.isCached()) {
      return
    }
    isLeadingMapActiveRef.current = !isLeadingMapActiveRef.current
    inactiveMapDOMRef.current && (inactiveMapDOMRef.current.style.clipPath = null)
    const isMapLeadingActive: boolean = mapViewList?.[0] === activeMapView?.dataSourceId
    if (swipeStyle === SwipeStyle.SimpleVertical) {
      const clipPosition = isMapLeadingActive ? (mapViewHeightRef.current - position.y) : position.y
      activeMapDOMRef.current && (activeMapDOMRef.current.style.clipPath = isMapLeadingActive
        ? `inset(0px 0px ${clipPosition}px 0px)`
        : `inset(${clipPosition}px 0px 0px 0px)`)
    } else {
      const clipPosition = isMapLeadingActive ? (mapViewWidthRef.current - position.x) : position.x
      activeMapDOMRef.current && (activeMapDOMRef.current.style.clipPath = isMapLeadingActive
        ? `inset(0px ${clipPosition}px 0px 0px)`
        : `inset(0px 0px 0px ${clipPosition}px)`)
    }
  }, [mapViewList])

  useEffect(() => {
    if (activeMapView.isCached()) {
      return
    }
    const position = { x: 0, y: 0 } as Position
    const divider = document.querySelector<HTMLElement>(`.jimu-widget-swipe-${widgetId}-handle-container`)
    if (swipeStyle === SwipeStyle.SimpleVertical) {
      position.y = mapViewHeightRef.current * sliderPosition.distance * 0.01
      divider.style.transform = `translateY(${position.y}px)`
    } else {
      const rtlPosition = isRTL ? (100 - sliderPosition.distance) : sliderPosition.distance
      position.x = mapViewWidthRef.current * rtlPosition * 0.01
      const rtlPositionX = isRTL ? -(mapViewWidthRef.current - position.x) : position.x
      divider.style.transform = `translateX(${rtlPositionX}px)`
    }
    clipActiveMap(position)
    setPosition(position)
    activeMapView.hideMapTools()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderPosition, widgetId, swipeStyle, isRTL])

  /**
   * Use interact.js API to bind the drag divider.
   */
  const bindDragDivider = (swipeHandleRef: HTMLElement): Interact.Interactable => {
    if (swipeHandleRef && swipeStyle === SwipeStyle.SimpleVertical) {
      return interact(swipeHandleRef)
        ?.draggable({
          startAxis: 'y',
          lockAxis: 'y',
          listeners: {
            move (event) {
              position.y += event.dy
              position.y = position.y > mapViewHeightRef.current ? mapViewHeightRef.current : (position.y > 0 ? position.y : 0)
              setPosition(position)
              clipActiveMap(position)
              event.target.style.transform = `translateY(${position.y}px)`
            }
          }
        })
    } else if (swipeHandleRef && swipeStyle === SwipeStyle.SimpleHorizontal) {
      return interact(swipeHandleRef)
        ?.draggable({
          startAxis: 'x',
          lockAxis: 'x',
          listeners: {
            move (event) {
              position.x += event.dx
              position.x = position.x > mapViewWidthRef.current ? mapViewWidthRef.current : (position.x > 0 ? position.x : 0)
              setPosition(position)
              clipActiveMap(position)
              const rtlPositionX = isRTL ? -(mapViewWidthRef.current - position.x) : position.x
              event.target.style.transform = `translateX(${rtlPositionX}px)`
            }
          }
        })
    }
  }
  /**
   * Init the opacity of the invisible map to 1.
   */
  const showInactiveMap = () => {
    if (!inactiveMapDOMRef.current && !activeMapDOMRef.current) {
      return
    }
    inactiveMapDOMRef.current && (inactiveMapDOMRef.current.style.opacity = '1')
  }

  /**
   * Clear the opacity of the invisible map and clipPath of the visible map, and set the position of the divider to default.
   */
  const clearMapViewStyle = () => {
    activeMapView.showMapTools()
    if (!inactiveMapDOMRef.current && !activeMapDOMRef.current) {
      return
    }

    //Clear style if the action is switching Swipe off.
    inactiveMapDOMRef.current && (inactiveMapDOMRef.current.style.opacity = null)
    activeMapDOMRef.current && (activeMapDOMRef.current.style.clipPath = null)

    //Clear style if the action is deleting an active mapview from the map widget.
    inactiveMapDOMRef.current && (inactiveMapDOMRef.current.style.clipPath = null)
    activeMapDOMRef.current && (activeMapDOMRef.current.style.opacity = null)
  }

  /**
   * Change the clip position of activeMapDOMRef according to the position of the divider. It depends on whether the active map is on top or bottom of the container.
  */
  const clipActiveMap = (pos?: Position) => {
    const newPosition = pos || position
    inactiveMapDOMRef.current && (inactiveMapDOMRef.current.style.clipPath = null)
    if (swipeStyle === SwipeStyle.SimpleVertical) {
      const clipPosition = isLeadingMapActiveRef.current ? (mapViewHeightRef.current - newPosition.y) : newPosition.y
      activeMapDOMRef.current && (activeMapDOMRef.current.style.clipPath = isLeadingMapActiveRef.current
        ? `inset(0px 0px ${clipPosition}px 0px)`
        : `inset(${clipPosition}px 0px 0px 0px)`)
    } else {
      const clipPosition = isLeadingMapActiveRef.current ? (mapViewWidthRef.current - newPosition.x) : newPosition.x
      activeMapDOMRef.current && (activeMapDOMRef.current.style.clipPath = isLeadingMapActiveRef.current
        ? `inset(0px ${clipPosition}px 0px 0px)`
        : `inset(0px 0px 0px ${clipPosition}px)`)
    }
  }

  /**
   * Create a divider of the swipe-map widget. Record its position and change it use transform property.
   */
  const createDivider = () => {
    const dividerZIndex = parseInt(activeMapDOMRef.current?.style?.zIndex) + 1
    if (swipeStyle === SwipeStyle.SimpleVertical) {
      dividerDomRef.current = document.createElement('div')
      dividerDomRef.current.className = sliderId
      dividerDomRef.current.setAttribute('style', dividerStyle)
      dividerDomRef.current.style.transform = `translateY(${position.y}px)`
      dividerDomRef.current.style.width = `${mapViewWidthRef.current}px`
      dividerDomRef.current.style.height = '4px'
      dividerDomRef.current.style.backgroundColor = dividerColor
      dividerDomRef.current.style.zIndex = String(dividerZIndex)

      const handler = document.createElement('div')
      handler.className = 'handler esri-swipe__handle-icon esri-icon-drag-horizontal'
      handler.setAttribute('style', handlerStyle)
      handler.style.top = '-13px'
      handler.style.backgroundColor = handlerColor
      handler.style.left = '50%'
      handler.style.marginLeft = '-16px'
      handler.style.cursor = 'row-resize'
      dividerDomRef.current.appendChild(handler)
    } else {
      dividerDomRef.current = document.createElement('div')
      dividerDomRef.current.className = sliderId
      dividerDomRef.current.setAttribute('style', dividerStyle)
      const rtlPosition = isRTL ? -(mapViewWidthRef.current - position.x) : position.x
      dividerDomRef.current.style.transform = `translateX(${rtlPosition}px)`
      dividerDomRef.current.style.height = `${mapViewHeightRef.current}px`
      dividerDomRef.current.style.width = '4px'
      dividerDomRef.current.style.backgroundColor = dividerColor
      dividerDomRef.current.style.zIndex = String(dividerZIndex)

      const handler = document.createElement('div')
      handler.className = 'handler esri-swipe__handle-icon esri-icon-drag-vertical'
      handler.setAttribute('style', handlerStyle)
      handler.style.left = '-13px'
      handler.style.backgroundColor = handlerColor
      handler.style.top = '50%'
      handler.style.marginTop = '-16px'
      handler.style.cursor = 'col-resize'
      dividerDomRef.current.appendChild(handler)
    }
  }

  /**
   * Update the swipe widget, create the divider , bind and append it to the container.
   */
  const updateSwipeWidget = () => {
    const isHasSwipeHandle = document.getElementsByClassName(sliderId)[0]
    if (isHasSwipeHandle) return false
    createDivider()
    multiMapContainerRef.current?.appendChild(dividerDomRef.current)
    interactableRef.current = bindDragDivider(dividerDomRef.current as any)
  }

  /**
   * Destroy the swipe-map widget when map is changed/ swipe type is changed.
   */
  const destroySwipeWidget = () => {
    isMapViewBindClickEventRef.current = false

    const isHasSwipeHandle = document.getElementsByClassName(sliderId)[0]
    if (isHasSwipeHandle) {
      (multiMapContainerRef.current && dividerDomRef.current) && (multiMapContainerRef.current.removeChild(dividerDomRef.current))
    }

    if (interactableRef.current) {
      interactableRef.current.unset()
    }

    clearMapViewStyle()

    //remove EventListener
    activeMapDOMRef.current.removeEventListener('click', clickInactiveMap)
    inactiveMapDOMRef.current.removeEventListener('click', clickInactiveMap)
    activeMapDOMRef.current.removeEventListener('wheel', clickInactiveMap)
    inactiveMapDOMRef.current.removeEventListener('wheel', clickInactiveMap)
  }

  /**
   * Use switchMap API to change the active map.
   */
  const changeActiveMap = () => {
    jimuMapViewGroup.switchMap()
  }

  /**
   * Add a click event for the invisible map.
  */
  const addClickEventForMapView = (isOldMap: boolean = false) => {
    if (inactiveMapDOMRef.current && !isMapViewBindClickEventRef.current) {
      activeMapDOMRef.current.addEventListener('click', clickInactiveMap)
      inactiveMapDOMRef.current.addEventListener('click', clickInactiveMap)
      activeMapDOMRef.current.addEventListener('wheel', clickInactiveMap)
      inactiveMapDOMRef.current.addEventListener('wheel', clickInactiveMap)
      isMapViewBindClickEventRef.current = true
    }
  }

  /**
   * Record click event on invisible map and change active map.
   *
   */
  const clickInactiveMap = (evt) => {
    if (evt.currentTarget.classList.contains('multisourcemap-item-disappear-noanimate')) {
      if (isHasClickInactiveMapRef.current) return
      isHasClickInactiveMapRef.current = true
      changeActiveMap()
    }
  }
  return null
}
