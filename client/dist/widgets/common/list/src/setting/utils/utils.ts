import { type WidgetJson, type ImmutableObject, type IMAppConfig, getAppStore } from 'jimu-core'
import { getAppConfigAction } from 'jimu-for-builder'
import { type ListLayout, type Status, type IMConfig } from '../../config'
export interface Option {
  layout: ListLayout
  config: IMConfig
  widgetId: string
  appConfig: IMAppConfig
  status: Status
  regularLayoutId?: string
  desLayoutId?: string
  label?: string
}
export const setLayoutAuto = (option: Option) => {
  const { layout, desLayoutId, config, widgetId, appConfig, status } = option
  const action = getAppConfigAction()
  const widgetJson = getWidgetJsonById(appConfig, widgetId)
  action.removeLayout(desLayoutId, false)
  const newConfig = config.setIn(['cardConfigs', status, 'listLayout'], layout)
  let udpateWidgetJson = widgetJson.setIn(['layouts', status], {})
  udpateWidgetJson = udpateWidgetJson.setIn(['config'], newConfig)
  action.editWidget(udpateWidgetJson?.asMutable({ deep: true })).exec()
}

export const setLayoutCustom = (option: Option) => {
  const { layout, regularLayoutId, config, widgetId, appConfig, status, label } = option
  const browserSizeMode = getAppStore().getState().appStateInBuilder.browserSizeMode
  const widgetJson = getWidgetJsonById(appConfig, widgetId)
  const action = getAppConfigAction()

  const newLayoutJson = action.duplicateLayout(regularLayoutId, false)
  action.editLayoutLabel({ layoutId: newLayoutJson.id }, label)

  const preLayoutId = appConfig.widgets[widgetId].layouts[status][browserSizeMode]
  preLayoutId && action.removeLayout(preLayoutId, true)

  const newConfig = config.setIn(['cardConfigs', status, 'listLayout'], layout)
  let udpateWidgetJson = widgetJson.setIn(['layouts', status, browserSizeMode], newLayoutJson.id)

  udpateWidgetJson = udpateWidgetJson.setIn(['config'], newConfig)
  action.editWidget(udpateWidgetJson?.asMutable({ deep: true }))
  //After `duplicateLayoutItems`, the parent of the layout need to update,
  //we need to call the `buildLayoutStructure` method again to reconstruct it
  action.clearLayoutStructure(newLayoutJson.id, browserSizeMode, true)
  action.buildLayoutStructure(newLayoutJson.id, browserSizeMode, true)
  action.exec()
}

export const getWidgetJsonById = (appConfig: IMAppConfig, widgetId: string): ImmutableObject<WidgetJson> => {
  const widgets = appConfig?.widgets
  const widgetJson = widgets?.[widgetId]
  return widgetJson
}
