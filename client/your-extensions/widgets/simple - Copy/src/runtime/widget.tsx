// import {useState} from "react";
// import { React, AllWidgetProps, jsx } from 'jimu-core';
// import { AllWidgetSettingProps } from "jimu-for-builder";
// import { IMConfig } from '../config';
// import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
// import "../../src/runtime/widget.css";
// // import * as Legend from 'esri/widgets/BasemapGallery';
// import { useEffect } from 'react';
// import { Button } from 'jimu-ui';
// // import Point from "esri/geometry/Point";
// import MapView from "@arcgis/core/views/MapView.js";
// import { loadCss } from 'esri-loader';
// import DatePicker from './DatePicker.jsx';


// export default function Widget(props: AllWidgetProps<IMConfig>) {
//   loadCss('https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css');

//   // const handleDateChange = (date) => {
//   //   // Handle the selected date change
//   //   console.log('Selected Date:', date);
//   // };
  


//   return (
//     <div>
//       <h3>My Custom Widget</h3>
//       {/* <DatePicker></DatePicker> */}
//     </div>
//   );
// }

// Widget.js
import React from 'react';
import { loadCss } from 'esri-loader';
import CustomDatePicker from './DatePicker';
import "./widget.css"

const MyWidget = (props) => {
  // Load required CSS for the date picker
  loadCss('https://unpkg.com/react-datepicker/dist/react-datepicker.css');

  const layers = [
    { id: 'layer1', name: 'Layer 1' },
    { id: 'layer2', name: 'Layer 2' },
    // Add more layers as needed
  ];
  // Mockup selected layer (replace with your logic to determine the target layer)
  const selectedLayer = layers[0]; // For example, selecting the first layer

  const handleDateChange = (date) => {
    // Handle the selected date change
    console.log('Selected Date:', date);
  };

  const handleEnd=DateChange = (date) => {
    // Handle the selected date change
    console.log('Selected Date:', date);
  };

  return (
    <div className='datepicker_container'>
      <h3>Filter layer by date</h3>
      <CustomDatePicker onChange={handleDateChange} targetLayer={selectedLayer} />
      <CustomDatePicker onChange={handleEndDateChange} targetLayer={selectedLayer} />
    </div>
  );
};

export default MyWidget;


