/** @jsx jsx */
import { React, jsx, css, polished, Immutable, hooks } from 'jimu-core'
import { type SettingChangeFunction } from 'jimu-for-builder'
import { Button, Loading, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { SettingSection } from 'jimu-ui/advanced/setting-components'
import { type JimuMapView } from 'jimu-arcgis'
import TemplateList from './template-list'
import defaultMessage from '../translations/default'
import { checkIsCustomTemplate, mergeTemplateSetting } from '../../utils/utils'
import { getNewTemplateId } from '../util/util'
import { type IMConfig, PrintTemplateType, type PrintTemplateProperties, type IMPrintTemplateProperties, DEFAULT_COMMON_SETTING } from '../../config'
import { PlusOutlined } from 'jimu-icons/outlined/editor/plus'
import CustomSetting from './template-custom-setting'
import PrintServiceSelect from './print-service-select'
const { useState, useRef } = React
interface Props {
  id: string
  config: IMConfig
  portalUrl: string
  jimuMapView: JimuMapView
  onSettingChange: SettingChangeFunction
  handlePropertyChange: (key: string, value) => void
  toggleRemindPopper: (open?: boolean) => void
}

const TemplateSetting = (props: Props) => {
  const templateListRef = useRef<HTMLDivElement>(null)
  const newTemplateButtonRef = useRef<HTMLButtonElement>(null)
  const { config, id, jimuMapView, onSettingChange, handlePropertyChange, toggleRemindPopper } = props

  const nls = hooks.useTranslation(defaultMessage, jimuiDefaultMessage)
  const STYLE = css`
    .radio-con {
      cursor: pointer;
    }
    .loading-con {
      height: ${polished.rem(100)};
    }
  `

  const [activeTemplateId, setActiveTemplateId] = useState(null)
  const [showLoading, setShowLoading] = useState(false)
  const [popperFocusNode, setPopperFocusNode] = useState(null)

  const handelActiveTemplateIdChange = (templateId: string, index?: number) => {
    if (templateId === activeTemplateId) {
      setActiveTemplateId(null)
    } else {
      const node = templateListRef.current?.getElementsByClassName('jimu-tree-item__body')?.[index]
      setActiveTemplateId(templateId)
      node && setPopperFocusNode(node)
    }
  }

  const toggleLoading = (isShowLoading: boolean) => {
    setShowLoading(isShowLoading)
  }

  const handelTemplateListChange = (newTemplate: PrintTemplateProperties[]) => {
    const isCustomTemplate = checkIsCustomTemplate(config?.printServiceType, config?.printTemplateType)
    if (isCustomTemplate) {
      handlePropertyChange('printCustomTemplate', newTemplate)
    } else {
      handlePropertyChange('printOrgTemplate', newTemplate)
    }
  }

  const newCustomTemplate = () => {
    let newPrintCustomTemplate = config?.printCustomTemplate?.[0] || Immutable({}) as IMPrintTemplateProperties
    const newCustomTemplate = config?.printCustomTemplate?.asMutable({ deep: true }) || []

    const newTemplateId = getNewTemplateId(newCustomTemplate, config?.printServiceType, PrintTemplateType.Customize)
    newPrintCustomTemplate = mergeTemplateSetting(newPrintCustomTemplate, Immutable(DEFAULT_COMMON_SETTING as any))
    newPrintCustomTemplate = newPrintCustomTemplate.set('format', config?.defaultFormat).set('templateId', newTemplateId)
    newCustomTemplate.push(newPrintCustomTemplate?.asMutable({ deep: true }))

    handlePropertyChange('printCustomTemplate', newCustomTemplate)

    setPopperFocusNode(newTemplateButtonRef.current)
    setActiveTemplateId(newTemplateId)
  }

  return (
    <SettingSection title={nls('configurePrintTemplate')} css={STYLE} role='group' aria-label={nls('configurePrintTemplate')}>
      <PrintServiceSelect
        id={id}
        config={config}
        showLoading={showLoading}
        onSettingChange={onSettingChange}
        toggleLoading={toggleLoading}
        toggleRemindPopper={toggleRemindPopper}
      />
      {showLoading && <div className='loading-con position-relative'><Loading/></div>}
      {config?.useUtility && <div>

        {config?.printTemplateType === PrintTemplateType.Customize && <Button className='w-100 mt-2' ref={newTemplateButtonRef} type='primary' onClick={newCustomTemplate}>
          {/* If the org template is empty, you need to re-get the template according to the orgurl. By default, the first org template is used as the template, and png32 is used instead of pdf. */}
          <PlusOutlined className='mr-1'/>
          {nls('newTemplate')}
        </Button>}

        <div ref={templateListRef}>
          {!showLoading && <TemplateList
            id={id}
            handelActiveTemplateIdChange={handelActiveTemplateIdChange}
            handelTemplateListChange={handelTemplateListChange}
            showNewTemplateItem={false}
            activeTemplateId={activeTemplateId}
            config={config}
          />}
        </div>

        <CustomSetting
          id={id}
          isOpen={activeTemplateId}
          config={config}
          activeTemplateId={activeTemplateId}
          toggle={() => { handelActiveTemplateIdChange(null) }}
          handelTemplateListChange={handelTemplateListChange}
          jimuMapView={jimuMapView}
          trigger={templateListRef.current}
          popperFocusNode={popperFocusNode}
        />
      </div>}
    </SettingSection>
  )
}

export default TemplateSetting
