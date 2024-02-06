/** @jsx jsx */
import {
  React,
  jsx,
  css,
  hooks,
  Immutable,
  type ImmutableObject,
  type ImmutableArray,
  DataSourceManager,
  classNames
} from 'jimu-core'
import { CollapsablePanel } from 'jimu-ui'
import {
  type LayerInfo
} from '../../config'
import { type JimuMapView, type JimuLayerView } from 'jimu-arcgis'
import Legend from 'esri/widgets/Legend'
import { LayerList } from './layer-list'
import { EmptyLayerMessage } from './empty-layer-message'
import { isWebMap } from '../../utils/utils'

const { useState, useEffect, useRef } = React

interface ScrollLayersPanelProps {
  scrollMapViewList: ImmutableObject<{ [mapViewId: string]: string[] }>
  activeMapView: JimuMapView
  inactiveMapView: JimuMapView
  handlePanelSelectedFirstScrollLayer: (list: ImmutableArray<string>) => void
  handlePanelSelectedSecondScrollLayer: (list: ImmutableArray<string>) => void
  isAllowDeactivateLayers: boolean
  scrollingLayerOfFirstMapView: JimuLayerView
  scrollingLayerOfSecondMapView: JimuLayerView
  scrollFirstMapView: boolean
  showSwipeOnMap: boolean
}

export function ScrollLayersPanel (props: ScrollLayersPanelProps) {
  const { scrollMapViewList, activeMapView, inactiveMapView, handlePanelSelectedFirstScrollLayer, handlePanelSelectedSecondScrollLayer, isAllowDeactivateLayers, scrollingLayerOfFirstMapView, scrollingLayerOfSecondMapView, scrollFirstMapView, showSwipeOnMap } = props
  const [showFirstMapViewLayers, setShowFirstMapViewLayers] = useState(false)
  const [showSecondMapViewLayers, setShowSecondMapViewLayers] = useState(false)
  const scrollLegendRef = useRef<HTMLDivElement>(null)
  const [scrollFirstWatchHandles, setScrollFirstWatchHandles] = useState<__esri.WatchHandle[]>([])
  const [scrollSecondWatchHandles, setScrollSecondWatchHandles] = useState<__esri.WatchHandle[]>([])

  useEffect(() => {
    if (!inactiveMapView) {
      handlePanelSelectedSecondScrollLayer(Immutable([]))
    }
  }, [handlePanelSelectedSecondScrollLayer, inactiveMapView])

  //active map view list
  const [scrollFirstMapViewLayerList, setScrollFirstMapViewLayerList] = useState<LayerInfo[]>(null)
  const scrollFirstMapViewLayerListRef = useRef(scrollFirstMapViewLayerList)
  const [selectedFirstMapViewLayerList, setSelectedFirstMapViewLayerList] = useState<Immutable.ImmutableArray<string>>(Immutable([]))

  //inactive map view list
  const [scrollSecondMapViewLayerList, setScrollSecondMapViewLayerList] = useState<LayerInfo[]>(null)
  const scrollSecondMapViewLayerListRef = useRef(scrollSecondMapViewLayerList)
  const [selectedSecondMapViewLayerList, setSelectedSecondMapViewLayerList] = useState<Immutable.ImmutableArray<string>>(Immutable([]))

  useEffect(() => {
    const list = scrollMapViewList?.[activeMapView?.id]
    setSelectedFirstMapViewLayerList(list)
  }, [scrollMapViewList, activeMapView])

  useEffect(() => {
    const list = scrollMapViewList?.[inactiveMapView?.id]
    setSelectedSecondMapViewLayerList(list)
  }, [scrollMapViewList, inactiveMapView])

  const getJimuLayerViewById = async (jimuMapView: JimuMapView, jimuLayerViewId: string) => {
    const jimuLayerView = await jimuMapView.whenJimuLayerViewLoaded(jimuLayerViewId)
    return jimuLayerView
  }

  const renderLegend = hooks.useEventCallback(() => {
    const scrollContainer = scrollLegendRef.current
    const previousLegendDiv: HTMLDivElement = document.querySelector('.currentLegend')
    previousLegendDiv && previousLegendDiv.remove()
    if (showSwipeOnMap && (selectedFirstMapViewLayerList?.length > 0 || selectedSecondMapViewLayerList?.length > 0)) {
      const legendDiv = document.createElement('div')
      legendDiv.className = 'currentLegend'
      const legend = new Legend({
        view: scrollFirstMapView ? activeMapView?.view : inactiveMapView?.view,
        style: 'classic',
        layerInfos: [{
          layer: scrollFirstMapView ? scrollingLayerOfFirstMapView?.layer : scrollingLayerOfSecondMapView?.layer
        }]
      })
      legend.container = legendDiv
      scrollContainer.appendChild(legendDiv)
    }
  })

  useEffect(() => {
    const scrollFirstMapViewListPromiseArray = scrollMapViewList?.[activeMapView?.id]?.asMutable()?.map(jimuLayerViewId => {
      return getJimuLayerViewById(activeMapView, jimuLayerViewId)
    })
    if (scrollFirstMapViewListPromiseArray) {
      Promise.all(scrollFirstMapViewListPromiseArray).then(jimuLayerViews => {
        const scrollFirstMapViewList: LayerInfo[] = jimuLayerViews.map(jimuLayerView => {
          return {
            layerId: jimuLayerView.id,
            title: jimuLayerView?.layer.title,
            selected: true,
            visible: jimuLayerView?.layer.visible,
            allowOperation: isAllowDeactivateLayers
          }
        })
        setScrollFirstMapViewLayerList(scrollFirstMapViewList)
        scrollFirstMapViewLayerListRef.current = scrollFirstMapViewList

        //When the setting changes scrollMapViewList, need to update the changes to runtime scroll layers.
        const selectedFirstMapViewList: string[] = []
        scrollFirstMapViewList?.forEach(layer => {
          if (layer.selected && layer.visible) {
            selectedFirstMapViewList.push(layer.layerId)
          }
        })
        setSelectedFirstMapViewLayerList(Immutable(selectedFirstMapViewList))
        handlePanelSelectedFirstScrollLayer(Immutable(selectedFirstMapViewList))
      }).catch(err => {
        console.error(err)
      })
    }

    const scrollSecondMapViewListPromiseArray = scrollMapViewList?.[inactiveMapView?.id]?.asMutable()?.map(jimuLayerViewId => {
      return getJimuLayerViewById(inactiveMapView, jimuLayerViewId)
    })
    if (scrollSecondMapViewListPromiseArray) {
      Promise.all(scrollSecondMapViewListPromiseArray).then(jimuLayerViews => {
        const scrollSecondMapViewList: LayerInfo[] = jimuLayerViews.map(jimuLayerView => {
          return {
            layerId: jimuLayerView.id,
            title: jimuLayerView?.layer.title,
            selected: true,
            visible: jimuLayerView?.layer.visible,
            allowOperation: isAllowDeactivateLayers
          }
        })
        setScrollSecondMapViewLayerList(scrollSecondMapViewList)
        scrollSecondMapViewLayerListRef.current = scrollSecondMapViewList

        //When the setting changes scrollMapViewList, need to update the changes to runtime scroll layers.
        const selectedSecondMapViewList: string[] = []
        scrollSecondMapViewList?.forEach(layer => {
          if (layer.selected && layer.visible) {
            selectedSecondMapViewList.push(layer.layerId)
          }
        })
        setSelectedSecondMapViewLayerList(Immutable(selectedSecondMapViewList))
        handlePanelSelectedSecondScrollLayer(Immutable(selectedSecondMapViewList))
      }).catch(err => {
        console.error(err)
      })
    }
  }, [scrollMapViewList, activeMapView, inactiveMapView, isAllowDeactivateLayers, handlePanelSelectedFirstScrollLayer, handlePanelSelectedSecondScrollLayer])

  useEffect(() => {
    const watchFirstMapLayers = () => {
      const scrollFirstMapViewListPromiseArray = scrollMapViewList?.[activeMapView?.id]?.asMutable()?.map(jimuLayerViewId => {
        return getJimuLayerViewById(activeMapView, jimuLayerViewId)
      })
      if (scrollFirstMapViewListPromiseArray) {
        Promise.all(scrollFirstMapViewListPromiseArray).then(jimuLayerViews => {
          jimuLayerViews.forEach(jimuLayerView => {
            const newList = [...scrollFirstWatchHandles]
            newList.push(jimuLayerView?.layer.watch('visible', () => {
              const isVisible = jimuLayerView?.layer.visible
              const newList = JSON.parse(JSON.stringify(scrollFirstMapViewLayerListRef.current))
              newList.forEach(layerObj => {
                if (layerObj.layerId === jimuLayerView.id) {
                  layerObj.visible = isVisible
                }
              })
              setScrollFirstMapViewLayerList(newList)
              scrollFirstMapViewLayerListRef.current = (newList)

              //If the layer visibility is changed, update handlePanelSelectedFirstScrollLayer so that the runtime scroll layers can changed.
              const selectedFirstMapViewList: string[] = []
              newList?.forEach(layer => {
                if (layer.selected && layer.visible) {
                  selectedFirstMapViewList.push(layer.layerId)
                }
              })
              handlePanelSelectedFirstScrollLayer(Immutable(selectedFirstMapViewList))
            }))
            setScrollFirstWatchHandles(newList)
          })
        })
      }
    }

    const watchSecondMapLayers = () => {
      const scrollSecondMapViewListPromiseArray = scrollMapViewList?.[inactiveMapView?.id]?.asMutable()?.map(jimuLayerViewId => {
        return getJimuLayerViewById(inactiveMapView, jimuLayerViewId)
      })
      if (scrollSecondMapViewListPromiseArray) {
        Promise.all(scrollSecondMapViewListPromiseArray).then(jimuLayerViews => {
          jimuLayerViews.forEach(jimuLayerView => {
            const newList = [...scrollSecondWatchHandles]
            newList.push(jimuLayerView?.layer.watch('visible', () => {
              const isVisible = jimuLayerView?.layer.visible
              const newList = JSON.parse(JSON.stringify(scrollSecondMapViewLayerListRef.current))
              newList.forEach(layerObj => {
                if (layerObj.layerId === jimuLayerView.id) {
                  layerObj.visible = isVisible
                }
              })
              setScrollSecondMapViewLayerList(newList)
              scrollSecondMapViewLayerListRef.current = (newList)

              //If the layer visibility is changed, update handlePanelSelectedFirstScrollLayer so that the runtime scroll layers can changed.
              const selectedSecondMapViewList: string[] = []
              newList?.forEach(layer => {
                if (layer.selected && layer.visible) {
                  selectedSecondMapViewList.push(layer.layerId)
                }
              })
              handlePanelSelectedSecondScrollLayer(Immutable(selectedSecondMapViewList))
            }))
            setScrollSecondWatchHandles(newList)
          })
        })
      }
    }

    watchFirstMapLayers()
    watchSecondMapLayers()
    return () => {
      scrollFirstWatchHandles.forEach(handle => {
        handle?.remove()
      })
      scrollSecondWatchHandles.forEach(handle => {
        handle?.remove()
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollMapViewList, activeMapView, inactiveMapView])

  useEffect(() => {
    handlePanelSelectedFirstScrollLayer(selectedFirstMapViewLayerList)
  }, [handlePanelSelectedFirstScrollLayer, selectedFirstMapViewLayerList])

  useEffect(() => {
    handlePanelSelectedSecondScrollLayer(selectedSecondMapViewLayerList)
  }, [handlePanelSelectedSecondScrollLayer, selectedSecondMapViewLayerList])

  useEffect(() => {
    if (scrollingLayerOfFirstMapView || scrollingLayerOfSecondMapView) {
      renderLegend()
    }
  }, [renderLegend, scrollingLayerOfFirstMapView, scrollingLayerOfSecondMapView, activeMapView, inactiveMapView, showSwipeOnMap, scrollFirstMapView, scrollMapViewList, selectedFirstMapViewLayerList, selectedSecondMapViewLayerList])

  const handleShowFirstMapLayers = () => {
    setShowFirstMapViewLayers(!showFirstMapViewLayers)
  }

  const handleShowSecondMapLayers = () => {
    setShowSecondMapViewLayers(!showSecondMapViewLayers)
  }

  const handleSelectedFirstMapViewLayers = (layerId) => {
    const newList = JSON.parse(JSON.stringify(scrollFirstMapViewLayerList))
    newList.forEach(layerObj => {
      if (layerObj.layerId === layerId) {
        layerObj.selected = !layerObj.selected
      }
    })
    setScrollFirstMapViewLayerList(newList)

    const selectedFirstMapViewList: string[] = []
    newList.forEach(layer => {
      if (layer.selected && layer.visible) {
        selectedFirstMapViewList.push(layer.layerId)
      }
    })
    setSelectedFirstMapViewLayerList(Immutable(selectedFirstMapViewList))
  }

  const handleSelectedSecondMapViewLayers = (layerId) => {
    const newList = JSON.parse(JSON.stringify(scrollSecondMapViewLayerList))
    newList.forEach(layerObj => {
      if (layerObj.layerId === layerId) {
        layerObj.selected = !layerObj.selected
      }
    })
    setScrollSecondMapViewLayerList(newList)

    const selectedSecondMapViewList: string[] = []
    newList.forEach(layer => {
      if (layer.selected && layer.visible) {
        selectedSecondMapViewList.push(layer.layerId)
      }
    })
    setSelectedSecondMapViewLayerList(Immutable(selectedSecondMapViewList))
  }

  //Get the name of the data source.
  const getDataSourceLabel = (dataSourceId: string): string => {
    if (!dataSourceId) {
      return ''
    }
    const dsObj = DataSourceManager.getInstance().getDataSource(dataSourceId)
    const label = dsObj?.getLabel()
    return label || dsObj?.getDataSourceJson().sourceLabel || dataSourceId
  }

  const getLayerIndex = (scrollMapViewList: ImmutableObject<{ [mapViewId: string]: string[] }>, showSwipeOnMap: boolean, mapView: JimuMapView, scrollingLayerOfMapView: JimuLayerView): number => {
    if (showSwipeOnMap) {
      const index = scrollMapViewList?.[mapView?.id]?.indexOf(scrollingLayerOfMapView?.id) + 1
      return index
    } else {
      return -1
    }
  }

  return (
    <div ref={scrollLegendRef} css={style}>
       <CollapsablePanel
          className={classNames(`swipe-collapse ${showSwipeOnMap && scrollFirstMapView ? 'scroll-now' : ''}`)}
          label={getDataSourceLabel(activeMapView.dataSourceId)}
          isOpen={showFirstMapViewLayers}
          aria-label={getDataSourceLabel(activeMapView.dataSourceId)}
          onRequestOpen={handleShowFirstMapLayers}
          onRequestClose={handleShowFirstMapLayers}
        >
        {scrollMapViewList?.[activeMapView?.id]?.length > 0
          ? <LayerList
            layerList={scrollFirstMapViewLayerList}
            onChange={handleSelectedFirstMapViewLayers}
            isAllowDeactivateLayers={isAllowDeactivateLayers}
            highlightIndex={scrollFirstMapView ? getLayerIndex(scrollMapViewList, showSwipeOnMap, activeMapView, scrollingLayerOfFirstMapView) : -1}
          />
          : <EmptyLayerMessage swipeLayerMode />
        }
        </CollapsablePanel>
        {inactiveMapView && isWebMap(inactiveMapView.dataSourceId) && <CollapsablePanel
          className={classNames(`swipe-collapse ${showSwipeOnMap && (!scrollFirstMapView && scrollingLayerOfSecondMapView) ? 'scroll-now' : ''}`)}
          label={getDataSourceLabel(inactiveMapView.dataSourceId)}
          isOpen={showSecondMapViewLayers}
          aria-label={getDataSourceLabel(inactiveMapView.dataSourceId)}
          onRequestOpen={handleShowSecondMapLayers}
          onRequestClose={handleShowSecondMapLayers}
        >
        {scrollMapViewList?.[inactiveMapView?.id]?.length > 0
          ? <LayerList
            layerList={scrollSecondMapViewLayerList}
            onChange={handleSelectedSecondMapViewLayers}
            isAllowDeactivateLayers={isAllowDeactivateLayers}
            highlightIndex={scrollFirstMapView ? -1 : getLayerIndex(scrollMapViewList, showSwipeOnMap, inactiveMapView, scrollingLayerOfSecondMapView)}
          />
          : <EmptyLayerMessage swipeLayerMode />
        }
        </CollapsablePanel> }
    </div>
  )
}

const style = css`
  .swipe-collapse {
    margin-top: 16px;
    .layer-list {
      margin-top: 12px;
      margin-bottom: 16px;
    }
    .no-layer-placeholder {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
  .currentLegend {
    margin-top: 8px;
    .esri-legend__message, .esri-legend__service{
      padding-left: 0px;
    }
  }
  .scroll-now {
    .collapse-label {
      position: relative;
      &:after {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        content: "";
        display: block;
        position: absolute;
        right: -10px;
        background-color: var(--primary);
      }
    }
  }
`
