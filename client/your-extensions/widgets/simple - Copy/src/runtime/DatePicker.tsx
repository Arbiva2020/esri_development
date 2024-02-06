// import React, { useState } from 'react';
// import { DatePicker as CalectiteDatePicker } from '@arcgis/calectite-react';
// import "@esri/calcite-components/dist/calcite/calcite.css";
// import "@esri/calcite-components/dist/components/calcite-button";
// import "@esri/calcite-components/dist/components/calcite-icon";
// import "@esri/calcite-components/dist/components/calcite-slider";
// import { setAssetPath } from "@esri/calcite-components/dist/components";
// // CDN hosted assets
// setAssetPath("https://js.arcgis.com/calcite-components/1.11.0/assets");

// // Local assets
// // setAssetPath(PATH); // PATH depends on framework, more info below

// import { defineCustomElements } from "@esri/calcite-components/dist/loader";
// // CDN hosted assets
// defineCustomElements(window, {
//   resourcesUrl: "https://js.arcgis.com/calcite-components/1.11.0/assets"
// });

// // Local assets
// // defineCustomElements(window);

// const DatePicker = ({ onChange }) => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     onChange(date);
//   };

//   return (
//     // <CalectiteDatePicker
//     //   value={selectedDate}
//     //   onChange={handleDateChange}
//     // ></CalectiteDatePicker>
//   <select>
//   <option value="platypus">Platypus</option>
//   <option value="sloth">Sloth</option>
//   <option value="armadillo">Nine-banded armadillo</option>
// </select>
//   );
// };

// export default DatePicker;


// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const CustomDatePicker = ({ onChange, targetLayer }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterLayerByDate(targetLayer, date);
    onChange(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    filterLayerByDate(targetLayer, date);
    onChange(date);
  };

  const filterLayerByDate = (layer, date) => {
    // Assuming layer is a FeatureLayer
    // Adjust this logic based on the layer type and API version
    if (layer) {
      const definitionExpression = `DateField = '${date.toISOString()}'`;
      layer.definitionExpression = definitionExpression;
    }
  };
  

  return (
    <DatePicker
      className='datepicker'
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
    />
  );
};

export default CustomDatePicker;
