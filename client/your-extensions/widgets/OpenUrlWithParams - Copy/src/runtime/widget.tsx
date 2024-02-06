import { React, type AllWidgetProps, FormattedMessage } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
// import Query from 'esri/rest/support/Query'
import Query from "@arcgis/core/rest/support/Query.js";
import defaultMessages from './translations/default'
// import FeatureLayer from 'esri/layers/FeatureLayer'
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
// import Graphic from 'esri/Graphic'
import Graphic from "@arcgis/core/Graphic.js";
// import type FeatureLayerView from 'esri/views/layers/FeatureLayerView'
// import type Point from 'esri/geometry/Point'
import Point from "@arcgis/core/geometry/Point.js";
import { Button, Icon, MultiSelect } from 'jimu-ui'
import reactiveUtils from '@arcgis/core/core/reactiveUtils'
import FeaturesSet from 'dist/widgets/arcgis/near-me/src/runtime/components/features-set'
import "../runtime/widget.css"
// import widgetLogic from '../runtime/widgetLogic.tsx'
// import "../runtime/widget.css"

const { useState, useRef, useEffect } = React
const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [layer, setLayer] = useState<FeatureLayer>(null)
  const [featureGeometry, setFeatureGeometry] = useState<Point>(null)
  const [parcelNum, setParcelNum] = useState<string>(null)
  const [gushNum, setGushNum] = useState<string>(null)
  const [dynamicUrl, setDynamicUrl] = useState<string>(null)
  const [settings, setSettings] = useState({
    dataSourceUrl: "",
  });

  const handleSettingsChange = (name: string, value: any) => {
    setSettings((prevSettings) => ({
      ...prevSettings, 
      [name]: value, 
    }))
  }


  // const [dataSourceUrl, setDataSourceUrl] = useState<string>('')
  // Create a graphic and add the geometry and symbol to it
  // Create a symbol for drawing the point
  const parcelPolygonSymbol = {
    type: 'simple-fill',
    color: [199, 117, 117, 1],
    outline: {
      color: 'white',
      width: 0.5
    }
  }
  const featureGraphic = new Graphic({
    symbol: parcelPolygonSymbol
  })

  

  useEffect(() => {
    if (layer) {
      // reactiveUtils.when(
      //   () => !layerView.dataUpdating,
      //   async () => {
      layer.queryFeatures({
        spatialRelationship: 'intersects', // Relationship operation to apply
        geometry: featureGeometry, // The sketch feature geometry
        outFields: ['*'], // Attributes to return
        returnGeometry: true
      }).then((featureSet) => {
        featureGraphic.geometry = featureGeometry
        jimuMapView.view.graphics.add(featureGraphic)
        console.log(featureSet)
        // set graphic location to mouse pointer and add to mapview
        const feature = featureSet.features[0]
        const attributes = feature.attributes
        const parcelNum = feature.attributes.PARCEL
        const gushNum = feature.attributes.GUSH_NUM
        const externalUrl = feature.attributes.externalUrl;
        // const showTitle = feature.attribute.showTitle;
        const showTitle = feature.attributes.showTitle;
        window.location.href = externalUrl;
        console.log('parcelNum=' + parcelNum + 'and gushNum=' + gushNum)
        setParcelNum(parcelNum)
        setGushNum(gushNum)
        const dynamicUrl = `https://www.petah-tikva.muni.il/Engineering/newengine/Pages/building2.aspx#search/GetTikimByGush&siteid=84&g=${gushNum}&h=${parcelNum}&m=&l=true&arguments=siteid,g,h,m,l`
        setDynamicUrl(dynamicUrl)
      })
    }
  }, [jimuMapView, featureGeometry])

  const onActiveViewChange = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv)
      const layer = new FeatureLayer({
        url: 'https://services8.arcgis.com/JcXY3lLZni6BK4El/ArcGIS/rest/services/%d7%97%d7%9c%d7%a7%d7%95%d7%aa/FeatureServer/0'
      })
      // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)
      jmv.view.map.add(layer)
      setLayer(layer)

      jmv.view.on('click', (event) => {
        const featureGeometry = jmv.view.toMap(event)
        setFeatureGeometry(featureGeometry)
      })
    }
  }

  const isConfigured = props.useMapWidgetIds && props.useMapWidgetIds.length === 1

  return (
    <div className="widget-starter jimu-widget">
      {
        props.useMapWidgetIds &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds?.[0]}
            onActiveViewChange={onActiveViewChange}
          />
        )
      }
      <div>
        <h3> Restrict </h3>
        {/* <widgetLogic settings={settings} onSettingChange={handleSettingsChange}/> */}
        {/* <input
          type="text"
          value = {dataSourceUrl}
          onChange = {(e) => setDataSourceUrl(e.target.value)}
        /> */}
        { dynamicUrl ? <a 
                          target="_blank" 
                          href={dynamicUrl} 
                          // target="_blank" 
                          rel="noopener noreferrer"
                        > 
                        open municipality website </a> : null }
      </div>
    </div>
  )
}
export default Widget
