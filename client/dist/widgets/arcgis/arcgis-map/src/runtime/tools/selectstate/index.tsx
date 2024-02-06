/** @jsx jsx */
import { css, jsx, React, DataSourceManager } from 'jimu-core'
import { type JimuFeatureLayerView, type JimuSceneLayerView } from 'jimu-arcgis'
import { Button, Icon, defaultMessages } from 'jimu-ui'
import { BaseTool, type BaseToolProps, type IconType } from '../../layout/base/base-tool'
import { SelectedNumber } from './selected-number'

const SelectZoomtoIcon = require('../../assets/icons/select-tool/select-zoomto.svg')
const SelectClearIcon = require('../../assets/icons/select-tool/select-clear.svg')

interface States {
  selectedGraphicCount: number
}

export default class SelectState extends BaseTool<BaseToolProps, States> {
  toolName = 'SelectState'

  constructor (props) {
    super(props)

    this.state = {
      selectedGraphicCount: 0
    }
  }

  getStyle () {
    return css`
      background-color: ${this.props.theme.arcgis.components.button.variants.default.default.bg};

      .divide-line {
        border-right: 1px solid ${this.props.theme.colors.palette.dark[400]};
        height: 100%;
      }
    `
  }

  getTitle () {
    return ''
  }

  getIcon (): IconType {
    return null
  }

  handleSelectedGraphicsChanged = (selectedGraphicCount: number) => {
    this.setState({
      selectedGraphicCount
    })
  }

  zoomToSelectedFeatures = async () => {
    const view = this.props.jimuMapView?.view

    if (view) {
      const graphics = await this.getSelectedGraphics()

      if (graphics.length > 0) {
        view.goTo(graphics)
      }
    }
  }

  async getSelectedGraphics () {
    const selectedGraphics = []

    if (!this.props.jimuMapView) {
      return selectedGraphics
    }

    const jimuLayerViews = this.props.jimuMapView.jimuLayerViews
    const jimuLayerViewIds = Object.keys(jimuLayerViews)
    const dataSourceManager = DataSourceManager.getInstance()
    const promises: Array<Promise<__esri.Graphic[]>> = []

    for (let i = 0; i < jimuLayerViewIds.length; i++) {
      const jimuLayerView = jimuLayerViews[jimuLayerViewIds[i]]
      const dsId = jimuLayerView.layerDataSourceId
      const ds = dataSourceManager.getDataSource(dsId)

      let dsSelectedRecords = []

      // If dataSource exist, we get selected features from dataSource, otherwise we get selected features from JimuLayerView.
      if (ds) {
        dsSelectedRecords = ds.getSelectedRecords()

        for (let j = 0; j < dsSelectedRecords.length; j++) {
          const tempFeature = (dsSelectedRecords[j]).feature.clone()
          selectedGraphics.push(tempFeature)
        }
      }

      if (dsSelectedRecords.length === 0 && (jimuLayerView as (JimuFeatureLayerView | JimuSceneLayerView)).querySelectedFeaturesFromClient) {
        // Typically, this is the case that we highlight a feature by popup click, but the data source is not used and not created.
        const p = (jimuLayerView as (JimuFeatureLayerView | JimuSceneLayerView)).querySelectedFeaturesFromClient()
        promises.push(p)
      }
    }

    if (promises.length > 0) {
      const results = await Promise.all(promises)

      if (results.length > 0) {
        results.forEach(graphics => {
          if (graphics && graphics.length > 0) {
            graphics.forEach(graphic => {
              const clonedGraphic = graphic.clone()
              selectedGraphics.push(clonedGraphic)
            })
          }
        })
      }
    }

    return selectedGraphics
  }

  clearSelectedFeatures = () => {
    this.props.jimuMapView.clearSelectedFeatures()
  }

  getExpandPanel (): JSX.Element {
    const selectedFeaturesTip = this.props.intl.formatMessage({ id: 'SelectionSelectedFeatures', defaultMessage: defaultMessages.SelectionSelectedFeatures })
    const clearSelectionTitle = this.props.intl.formatMessage({ id: 'clearSelection', defaultMessage: defaultMessages.clearSelection })
    const zoomToSelectedFeaturesTip = this.props.intl.formatMessage({ id: 'SelectionZoomToSelectedFeatures', defaultMessage: defaultMessages.SelectionZoomToSelectedFeatures })

    if (this.props.isMobile) {
      return (
        <div css={this.getStyle()} className='w-100 d-flex justify-content-between align-items-center' style={{ height: '40px' }}>
          <div className='ml-2'>
            {`${selectedFeaturesTip}: ${this.state.selectedGraphicCount}`}
          </div>
          <div className='d-flex'>
            <div
              title={zoomToSelectedFeaturesTip}
              className='h-100 border border-top-0 border-bottom-0 d-flex justify-content-center align-items-center' style={{ width: '40px', cursor: 'pointer' }}
              onClick={this.zoomToSelectedFeatures}
            >
              <Icon width={18} height={18} icon={SelectZoomtoIcon} />
            </div>
            <div
              className='h-100 d-flex justify-content-center align-items-center' style={{ width: '40px', cursor: 'pointer' }}
              onClick={this.clearSelectedFeatures}
              title={clearSelectionTitle}
            >
              <Icon width={18} height={18} icon={SelectClearIcon} />
            </div>
          </div>
          <SelectedNumber jimuMapView={this.props.jimuMapView} onSelectedGraphicsChanged={this.handleSelectedGraphicsChanged} />
        </div>
      )
    } else {
      return (
        <React.Fragment>
          <Button onClick={this.zoomToSelectedFeatures} title={zoomToSelectedFeaturesTip}>
            <Icon width={16} height={16} icon={SelectZoomtoIcon} className='mr-2' />
            {`${selectedFeaturesTip}: ${this.state.selectedGraphicCount}`}
          </Button>
          <SelectedNumber jimuMapView={this.props.jimuMapView} onSelectedGraphicsChanged={this.handleSelectedGraphicsChanged} />
        </React.Fragment>
      )
    }
  }
}
