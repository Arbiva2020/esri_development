/** @jsx jsx */
import { React, css, jsx, getAppStore, Immutable, appActions, type IMLayoutJson, ReactRedux, type IMState, hooks } from 'jimu-core'
import { Popper, type Size, type Placement } from 'jimu-ui'
import { CONTAINER_LAYOUT_NAME } from '../../../common/consts'
import { getAppConfigAction } from 'jimu-for-builder'
import { LayoutBuilder } from 'jimu-layouts/layout-builder'
import { useWidgetChildLayoutJson } from '../../common/layout-utils'
import { useControlledWidgetsSelected } from '../utils'

export interface DummyLayoutProps {
  reference: HTMLDivElement
  placement?: Placement
  disableResize?: boolean
  widgetId: string
  controllerId: string
  version?: number
  onClose: () => void
  size: Size
  onSizeChange?: (widgetId: string, size: Size) => void
}

const style = css`
  max-width: 100vw !important;
  /* hide rnd-resize bar for the outermost layout item */
  .controller-configuration-container > * > * > .builder-layout-item > .select-wrapper > .action-area {
      > .rnd-resize-top,
      > .rnd-resize-right,
      > .rnd-resize-bottom,
      > .rnd-resize-left {
        display: none;
      }
    }

    .controller-configuration-container .builder-layout-item > .select-wrapper > .lock-layout-tip {
      display: none;
    }

  .selectable {
    > div {
      cursor: default;
    }
  }

  .widget-container {
    height: 100%;
    overflow: auto;
  }
`

const MIN_SIZE = { width: 150, height: 150 }
const DEFAULT_SIZE = { width: 300, height: 300 }

const elementId = '0'

const getLayoutElementJson = (widgetId: string) => {
  return {
    type: 'WIDGET',
    widgetId: widgetId,
    bbox: {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    id: elementId
  }
}

const createLayoutElement = (widgetId: string, layout: IMLayoutJson) => {
  if (layout) {
    let appConfig = getAppConfigAction().appConfig
    const elementJson = getLayoutElementJson(widgetId)

    appConfig = appConfig.setIn(['layouts', layout.id, 'content', elementJson.id], elementJson)
      .setIn(['layouts', layout.id, 'order'], [elementJson.id])
    getAppConfigAction(appConfig).exec()
    getAppStore().dispatch(appActions.selectionChanged((Immutable({ layoutId: layout.id, layoutItemId: elementId }))))
  }
}

const clearLayoutElement = (layout: IMLayoutJson) => {
  if (layout) {
    let appConfig = getAppConfigAction().appConfig
    appConfig = appConfig.setIn(['layouts', layout.id, 'content'], {}).setIn(['layouts', layout.id, 'order'], [])
    getAppConfigAction(appConfig).exec()
  }
}

const isItemAccepted = () => {
  return false
}

export const DummyLayout = (props: DummyLayoutProps) => {
  const {
    reference,
    placement,
    disableResize = false,
    widgetId,
    controllerId,
    onClose,
    onSizeChange,
    size,
    version
  } = props

  const nodeRef = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(!!widgetId)

  const layoutJson = useWidgetChildLayoutJson(controllerId, CONTAINER_LAYOUT_NAME)
  const sizeMode = ReactRedux.useSelector((state: IMState) => state.browserSizeMode)
  const layouts = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets?.[controllerId]?.layouts?.[CONTAINER_LAYOUT_NAME])
  const widgetLayoutId = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets[controllerId].parent?.[sizeMode]?.[0]?.layoutId)
  const controllerLayoutId = layouts?.[sizeMode]

  const selected = useControlledWidgetsSelected(widgetLayoutId, controllerLayoutId, nodeRef)
  const title = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets?.[widgetId]?.label)

  hooks.useUpdateEffect(() => {
    setOpen(false)
    setTimeout(() => {
      setOpen(!!widgetId)
    }, 100)
  }, [widgetId])

  React.useEffect(() => {
    if (!selected) {
      onClose?.()
    }
  }, [selected, onClose])

  const handleEscape = (evt) => {
    if (evt?.key === 'Escape') {
      onClose?.()
      const button = reference?.querySelector('button')
      button?.focus()
    }
  }

  const layoutRef = hooks.useLatest(layoutJson)
  React.useEffect(() => {
    if (widgetId) {
      createLayoutElement(widgetId, layoutRef.current)
    }
  }, [widgetId, layoutRef])

  hooks.useUnmount(() => { clearLayoutElement(layoutRef.current) })

  const handleResize = (size) => {
    onSizeChange(widgetId, size)
  }

  return <React.Fragment>
    {open && <Popper
      floating={true}
      open={true}
      headerTitle={title}
      onHeaderClose={onClose}
      minSize={MIN_SIZE}
      onResize={handleResize}
      dragBounds="body"
      defaultSize={size || DEFAULT_SIZE}
      css={style}
      version={version}
      className="flex-grow-1"
      reference={reference}
      disableResize={disableResize}
      toggle={handleEscape}
      placement={placement}>
      <div className="widget-container controller-configuration-container d-flex p-1" ref={nodeRef}>
        <LayoutBuilder isItemAccepted={isItemAccepted} layouts={layouts} itemDraggable={false} itemResizable={true} showDefaultTools={false} />
      </div>
    </Popper>}
  </React.Fragment>
}
