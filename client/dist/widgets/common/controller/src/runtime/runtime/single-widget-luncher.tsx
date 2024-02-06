import { React, classNames, WidgetState, type IMRuntimeInfos, Immutable, type IMState, ReactRedux, getAppStore, appActions } from 'jimu-core'
import { type IMSizeMap } from '../../config'
import { Popper, type Placement } from 'jimu-ui'
import { WidgetRenderer } from './widget-renderer'
import { BASE_LAYOUT_NAME, DEFAULT_PANEL_SIZE, MIN_PANEL_SIZE } from '../../common/consts'
import { getWidgetCardNode } from './utils'
import { getLayoutItemId, useWidgetChildLayoutJson } from '../common/layout-utils'

export interface SingleWidgetsLuncherProps {
  root?: HTMLDivElement
  placement?: Placement
  sizes: IMSizeMap
  controllerId: string
  widgets: IMRuntimeInfos
  onClose?: (id?: string) => any
}

const MODIFIERS = [
  {
    name: 'preventOverflow',
    options: {
      boundary: document.body,
      rootBoundary: document
    }
  }
]

const DefaultWidgets = Immutable({}) as IMRuntimeInfos
export const SingleWidgetsLuncher = (props: SingleWidgetsLuncherProps) => {
  const { controllerId, widgets = DefaultWidgets, root, placement, sizes: propSizes, onClose } = props
  const widgetJsons = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets)
  const openingWidget = Object.keys(widgets).find((widgetId) => widgets[widgetId].state === WidgetState.Opened) ?? ''
  const [reference, setReference] = React.useState(() => getWidgetCardNode(openingWidget) ?? root)

  const layout = useWidgetChildLayoutJson(controllerId, BASE_LAYOUT_NAME)
  const handleClick = React.useCallback((evt: React.MouseEvent<HTMLDivElement>, widgetId: string) => {
    evt.stopPropagation()
    const layoutId = layout?.id
    const layoutItemId = getLayoutItemId(layout, widgetId)
    const selection = getAppStore().getState().appRuntimeInfo?.selection

    if (!selection || selection.layoutId !== layoutId || selection.layoutItemId !== layoutItemId) {
      getAppStore().dispatch(appActions.selectionChanged({ layoutId, layoutItemId }))
    }
  }, [layout])

  React.useEffect(() => {
    setReference(getWidgetCardNode(openingWidget) ?? root)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openingWidget])

  const [sizes, setSizes] = React.useState<IMSizeMap>(propSizes)

  const onResizeing = (widgetId: string, value) => {
    setSizes((sizes) => sizes.set(widgetId, value))
  }

  const handleClose = (widgetId: string, evt: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>) => {
    evt.stopPropagation()
    onClose?.(widgetId)
    const button = reference?.querySelector('button')
    button?.focus()
  }

  const handleEscape = (widgetId: string, evt) => {
    if (evt?.key === 'Escape') {
      handleClose(widgetId, evt)
    }
  }

  return <React.Fragment>
    {Object.entries(widgets).map(([id, runtimeInfo]) => {
      const opened = runtimeInfo.state !== undefined
      if (!opened) return null
      const opening = runtimeInfo.state === WidgetState.Opened
      const size = sizes[id] ?? DEFAULT_PANEL_SIZE
      const title = widgetJsons?.[id]?.label

      return <Popper
        key={id}
        style={{ maxWidth: '100vw' }}
        modifiers={MODIFIERS}
        className={classNames({ 'd-none': !opening }, 'single-widget-launcher')}
        headerTitle={title}
        activateOnlyForHeader={true}
        minSize={MIN_PANEL_SIZE}
        dragBounds="body"
        defaultSize={size}
        onResize={(size) => { onResizeing(id, size) }}
        onHeaderClose={evt => { handleClose(id, evt) }}
        floating={true}
        open={true}
        autoFocus={opening}
        reference={reference}
        toggle={evt => { handleEscape(id, evt) }}
        onClick={(evt) => { handleClick(evt, id) }}
        placement={placement}>
        <WidgetRenderer widgetId={id}></WidgetRenderer>
      </Popper>
    })}
  </React.Fragment>
}
