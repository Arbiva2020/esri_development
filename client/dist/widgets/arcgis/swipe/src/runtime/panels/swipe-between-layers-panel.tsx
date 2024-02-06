/** @jsx jsx */
import {
  React,
  jsx,
  Immutable,
  type ImmutableObject,
  css,
  hooks
} from 'jimu-core'
import defaultMessages from '.././translations/default'
import { CollapsablePanel } from 'jimu-ui'
import {
  type LayerInfo,
  type LayersOption
} from '../../config'
import { type JimuMapView } from 'jimu-arcgis'
import { LayerList } from './layer-list'
import { EmptyLayerMessage } from './empty-layer-message'
const { useState, useEffect, useRef } = React

interface SwipeBetweenLayersPanelProps {
  swipeMapViewList: ImmutableObject<{ [mapViewId: string]: LayersOption }>
  activeMapView: JimuMapView
  isAllowDeactivateLayers: boolean
  handlePanelSelectedLeadingLayers: (list) => void
  handlePanelSelectedTrailingLayers: (list) => void
}

export function SwipeBetweenLayersPanel (props: SwipeBetweenLayersPanelProps) {
  const { swipeMapViewList, activeMapView, isAllowDeactivateLayers, handlePanelSelectedLeadingLayers, handlePanelSelectedTrailingLayers } = props
  const [showLeadingLayers, setShowLeadingLayers] = useState(false)
  const [showTrailingLayers, setShowTrailingLayers] = useState(false)
  const [leadingWatchHandles, setLeadingWatchHandles] = useState<__esri.WatchHandle[]>([])
  const [trailingWatchHandles, setTrailingWatchHandles] = useState<__esri.WatchHandle[]>([])
  const translate = hooks.useTranslation(defaultMessages)
  const [leadingLayerList, setLeadingLayerList] = useState<LayerInfo[]>(null)
  const [trailingLayerList, setTrailingLayerList] = useState<LayerInfo[]>(null)

  const leadingLayerListRef = useRef(leadingLayerList)
  const trailingLayerListRef = useRef(trailingLayerList)
  const [selectedLeadingLayerList, setSelectedLeadingLayerList] = useState<Immutable.ImmutableArray<string>>(swipeMapViewList?.[activeMapView?.id]?.leadingLayersId || Immutable([]))
  const [selectedTrailingLayerList, setSelectedTrailingLayerList] = useState<Immutable.ImmutableArray<string>>(swipeMapViewList?.[activeMapView?.id]?.trailingLayersId || Immutable([]))

  const getJimuLayerViewById = async (jimuMapView: JimuMapView, jimuLayerViewId: string) => {
    const jimuLayerView = await jimuMapView.whenJimuLayerViewLoaded(jimuLayerViewId)
    return jimuLayerView
  }

  useEffect(() => {
    const leadingLayersPromiseArray = swipeMapViewList?.[activeMapView?.id]?.leadingLayersId?.asMutable()?.map(jimuLayerViewId => {
      return getJimuLayerViewById(activeMapView, jimuLayerViewId)
    })
    if (leadingLayersPromiseArray) {
      Promise.all(leadingLayersPromiseArray).then(jimuLayerViews => {
        const leadingList: LayerInfo[] = jimuLayerViews.map(jimuLayerView => {
          return {
            layerId: jimuLayerView.id,
            title: jimuLayerView.layer.title,
            selected: true,
            visible: jimuLayerView.layer.visible,
            allowOperation: isAllowDeactivateLayers
          }
        })
        setLeadingLayerList(leadingList)
        leadingLayerListRef.current = leadingList

        //When the setting changes swipeMapViewList, need to update the changes to runtime swipe layers.
        const selectedLeadingList: string[] = []
        leadingList?.forEach(layer => {
          if (layer.selected) {
            selectedLeadingList.push(layer.layerId)
          }
        })
        handlePanelSelectedLeadingLayers(Immutable(selectedLeadingList))
      })
    }

    const trailingLayersPromiseArray = swipeMapViewList?.[activeMapView?.id]?.trailingLayersId?.asMutable()?.map(jimuLayerViewId => {
      return getJimuLayerViewById(activeMapView, jimuLayerViewId)
    })

    if (trailingLayersPromiseArray) {
      Promise.all(trailingLayersPromiseArray).then(jimuLayerViews => {
        const trailingList: LayerInfo[] = jimuLayerViews.map(jimuLayerView => {
          return {
            layerId: jimuLayerView.id,
            title: jimuLayerView.layer.title,
            selected: true,
            visible: jimuLayerView.layer.visible,
            allowOperation: isAllowDeactivateLayers
          }
        })
        setTrailingLayerList(trailingList)
        trailingLayerListRef.current = trailingList

        //When the setting changes swipeMapViewList, need to update the changes to runtime swipe layers.
        const selectedTrailingList: string[] = []
        trailingList?.forEach(layer => {
          if (layer.selected) {
            selectedTrailingList.push(layer.layerId)
          }
        })
        handlePanelSelectedTrailingLayers(Immutable(selectedTrailingList))
      })
    }
  }, [swipeMapViewList, activeMapView, isAllowDeactivateLayers, handlePanelSelectedLeadingLayers, handlePanelSelectedTrailingLayers])

  useEffect(() => {
    const watchLayers = () => {
      const leadingLayersPromiseArray = swipeMapViewList?.[activeMapView?.id]?.leadingLayersId?.asMutable()?.map(jimuLayerViewId => {
        return getJimuLayerViewById(activeMapView, jimuLayerViewId)
      })
      if (leadingLayersPromiseArray) {
        Promise.all(leadingLayersPromiseArray).then(jimuLayerViews => {
          jimuLayerViews.forEach(jimuLayerView => {
            const newList = [...leadingWatchHandles]
            newList.push(jimuLayerView.layer.watch('visible', () => {
              const isVisible = jimuLayerView.layer.visible
              const newList = JSON.parse(JSON.stringify(leadingLayerListRef.current))
              newList.forEach(layerObj => {
                if (layerObj.layerId === jimuLayerView.id) {
                  layerObj.visible = isVisible
                }
              })
              setLeadingLayerList(Immutable(newList))
              leadingLayerListRef.current = Immutable(newList)
            }))
            setLeadingWatchHandles(newList)
          })
        })
      }

      const trailingLayersPromiseArray = swipeMapViewList?.[activeMapView?.id]?.trailingLayersId?.asMutable()?.map(jimuLayerViewId => {
        return getJimuLayerViewById(activeMapView, jimuLayerViewId)
      })
      if (trailingLayersPromiseArray) {
        Promise.all(trailingLayersPromiseArray).then(jimuLayerViews => {
          jimuLayerViews.forEach(jimuLayerView => {
            const newList = [...trailingWatchHandles]
            newList.push(jimuLayerView.layer.watch('visible', () => {
              const isVisible = jimuLayerView.layer.visible
              const newList = JSON.parse(JSON.stringify(trailingLayerListRef.current))
              newList.forEach(layerObj => {
                if (layerObj.layerId === jimuLayerView.id) {
                  layerObj.visible = isVisible
                }
              })
              setTrailingLayerList(Immutable(newList))
              trailingLayerListRef.current = Immutable(newList)
            }))
            setTrailingWatchHandles(newList)
          })
        })
      }
    }
    watchLayers()
    return () => {
      leadingWatchHandles.forEach(handle => {
        handle.remove()
      })
      trailingWatchHandles.forEach(handle => {
        handle.remove()
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swipeMapViewList, activeMapView])

  useEffect(() => {
    handlePanelSelectedLeadingLayers(selectedLeadingLayerList)
  }, [handlePanelSelectedLeadingLayers, selectedLeadingLayerList])

  useEffect(() => {
    handlePanelSelectedTrailingLayers(selectedTrailingLayerList)
  }, [handlePanelSelectedTrailingLayers, selectedTrailingLayerList])

  const handleShowLeadingLayers = () => {
    setShowLeadingLayers(!showLeadingLayers)
  }

  const handleShowTrailingLayers = () => {
    setShowTrailingLayers(!showTrailingLayers)
  }

  const handleSelectedLeadingLayers = (layerId) => {
    const newList = JSON.parse(JSON.stringify(leadingLayerList))
    newList.forEach(layerObj => {
      if (layerObj.layerId === layerId) {
        layerObj.selected = !layerObj.selected
      }
    })
    setLeadingLayerList(Immutable(newList))

    const selectedList: string[] = []
    newList.forEach(layer => {
      if (layer.selected) {
        selectedList.push(layer.layerId)
      }
    })
    setSelectedLeadingLayerList(Immutable(selectedList))
  }

  const handleSelectedTrailingLayers = (layerId) => {
    const newList = JSON.parse(JSON.stringify(trailingLayerList))
    newList.forEach(layerObj => {
      if (layerObj.layerId === layerId) {
        layerObj.selected = !layerObj.selected
      }
    })
    setTrailingLayerList(Immutable(newList))

    const selectedList: string[] = []
    newList.forEach(layer => {
      if (layer.selected) {
        selectedList.push(layer.layerId)
      }
    })
    setSelectedTrailingLayerList(Immutable(selectedList))
  }

  return (
    <div css={style}>
      <CollapsablePanel
          className='swipe-collapse'
          label={translate('leadingLayers')}
          isOpen={showLeadingLayers}
          aria-label={translate('leadingLayers')}
          onRequestOpen={handleShowLeadingLayers}
          onRequestClose={handleShowLeadingLayers}
        >
          {swipeMapViewList?.[activeMapView?.id]?.leadingLayersId.length > 0
            ? <LayerList
              layerList={leadingLayerList}
              onChange={handleSelectedLeadingLayers}
              isAllowDeactivateLayers={isAllowDeactivateLayers}
            />
            : <EmptyLayerMessage swipeLayerMode/>
          }
        </CollapsablePanel>
        <CollapsablePanel
          className='swipe-collapse'
          label={translate('trailingLayers')}
          isOpen={showTrailingLayers}
          aria-label={translate('trailingLayers')}
          onRequestOpen={handleShowTrailingLayers}
          onRequestClose={handleShowTrailingLayers}
        >
          {swipeMapViewList?.[activeMapView?.id]?.trailingLayersId.length > 0
            ? <LayerList
              layerList={trailingLayerList}
              onChange={handleSelectedTrailingLayers}
              isAllowDeactivateLayers={isAllowDeactivateLayers}
            />
            : <EmptyLayerMessage swipeLayerMode/>
          }
        </CollapsablePanel>
    </div>
  )
}

const style = css`
.swipe-collapse {
  margin-top: 16px;
}
.layer-list {
  margin-top: 12px;
  margin-bottom: 16px;
}
.no-layer-placeholder {
  margin-top: 16px;
  margin-bottom: 16px;
}
`
