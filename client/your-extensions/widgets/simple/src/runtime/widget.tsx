import {useState} from "react"
import { React, AllWidgetProps, jsx } from 'jimu-core';
import { AllWidgetSettingProps } from "jimu-for-builder";
import { IMConfig } from '../config';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import "../../src/runtime/widget.css"
import * as Legend from 'esri/widgets/BasemapGallery';
import { useEffect } from 'react';
import { Button } from 'jimu-ui';
import Point from "esri/geometry/Point";
import MapView from "@arcgis/core/views/MapView.js";



export default function Widget(props: AllWidgetProps<IMConfig>) {
  const [clickButton, setClickButton] = useState();
  const [openAlert, setOpenAlert] = useState();
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [parcel, setParcel] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [userlocation, setUserLocation] = useState({latitude:0, longitude:0});
  
  let apiWidgetContainer: React.RefObject<HTMLDivElement>;
  let legendWidget: Legend;
  let mapView: __esri.MapView | __esri.SceneView;
  apiWidgetContainer = React.createRef();

//open and close alert 
let handleOpenAlert = (e) => {
  setOpenAlert((openAlert) => !openAlert);
}

  let onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (!(jimuMapView && jimuMapView.view)) {
      return;
    }
    mapView = jimuMapView.view;
    createAPIWidget();
  }

  let createAPIWidget = () => {
    if (!mapView) {
      return;
    }

    if (!legendWidget && apiWidgetContainer && apiWidgetContainer.current) {
      legendWidget = new Legend({
        view: mapView,
        container: apiWidgetContainer.current
      })
    }
  }

  useEffect(() => {
    createAPIWidget();
    return function cleanup() {
      if(legendWidget){
        legendWidget.destroy();
        legendWidget = null;
      }
    };
  });

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      // When the pointer moves, take the pointer location and create a Point
      // Geometry out of it (`view.toMap(...)`), then update the state.
      jmv.view.on("pointer-move", (evt) => {
        const point: Point = jmv.view.toMap({
          x: evt.x,
          y: evt.y
        });
        setLatitude(point.latitude.toFixed(3));
        setLongitude(point.longitude.toFixed(3));
      });
    }
  };

  const handleUserLocation = () => {
    const externalWebsiteUrl = `https://example.com/external-page?lat=${latitude}&lon=${longitude}`
    const externalWebsiteUrlParcel = `https://www.petah-tikva.muni.il/Engineering/newengine/Pages/building2.aspx#search/GetTikimByGush&siteid=84&g=${parcel}&h=${section}&m=&l=true&arguments=siteid,g,h,m,l`
    window.location.href = externalWebsiteUrl;
  }

  
  // mapView.on("click", function (event) {
  //   const lon = event.mapPoint.longitude;
  //   const lat = event.mapPoint.latitude;

  //   const externalWebsiteUrl = `https://example.com/external-page?lat=${latitude}&lon=${longitude}`
    
  //   window.location.href = externalWebsiteUrl;
  // })



  
  // require(["esri/views/MapView"], (MapView) => { 
  //   mapView.on("click", function (event) {
  //     mapView.hitTest(event).then(function(response) {
  //       const graphic = response.result[0].graphic;
  
  //       if(graphic) {
  //         const section = graphic.attribute.section;
  //         const parcel = graphic.attribute.parcel;
  
  //         console.log("Section: ", section)
  //         console.log("Parcel: ", parcel)
  //       }
  //     })
  //   }
  //   )
  //  });


  

  return (
    <div className="widget_box_main">
      <Button
      // {openAlert && <alert className="alertPop"/>}
        onClick={handleOpenAlert}
      >
        Redirect to site
      </Button>
      {openAlert ? <div className="alertPop">A click will redirect to site</div> : null}
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
    )}
      <p>
      Lat/Lon: {latitude} {longitude}
    </p>
    </div>
  );
}

