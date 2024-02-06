import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import reactiveUtils from 'esri/core/reactiveUtils'
import './widget.css'
const { useState } = React

const Widget = (props: AllWidgetProps<any>) => {
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      reactiveUtils.when(
        () => jmv.view.stationary === true,
        () => {
          console.log(jmv.view.zoom)
          if (jmv.view.zoom > 20) {
            jmv.view.goTo({ zoom: 19 })
          }
        }
      )
    }
  }
 
  return (
    <div className="widget_box">
      {
        props.useMapWidgetIds &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds?.[0]}
            onActiveViewChange={activeViewChangeHandler}
          />
        )
      }
    </div>
  )
}

export default Widget
