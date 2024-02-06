import React, {useState} from "react"
import { AllWidgetProps, BaseWidget, jsx, FormattedMessage } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis"
import { BaseWidgetSetting } from "jimu-for-builder"
import { type IMConfig } from '../config'
import defaultMiessages from './translations/default'
import "../../src/runtime/widget.css"


interface _Props {
  jmuMapView: JimuMapView; 
}

const Widget: React.FC<_Props> = (props) => {
  const [selectedOptionA, setSelectedOptionA] = useState<string>('');
  const [selectedOptionB, setSelectedOptionB] = useState<string>('');
  const [selectedOptionC, setSelectedOptionC] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const handleOptionChangeA = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionA(event.target.value);
  };

  const handleOptionChangeB = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionB(event.target.value);
  };

  const handleOptionChangeC = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionC(event.target.value);
  };

  return (
    <div className="filter_box">
      <img className="filter_logo" src="https://serviced.co.il/wp-content/uploads/2021/12/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%A9%D7%99%D7%91%D7%90-%D7%AA%D7%9C-%D7%94%D7%A9%D7%95%D7%9E%D7%A8-min.png"/>
      <select className="main_filter" value={selectedOptionA} onChange={handleOptionChangeA}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>
      <select className="main_filter" value={selectedOptionB} onChange={handleOptionChangeB}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>
      <select className="main_filter" value={selectedOptionC} onChange={handleOptionChangeC}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>
      <p className="filter_selected">Selected Option: {selectedOptionA}</p>
    </div>
  );
};

export default Widget;


// BaseWidget<AllWidgetProps<IMConfig>, any> {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className='widget-demo jimu-widget m-2'>
//         <p>Simple :::</p>
//         <p><FormattedMessage id="latLon" defaultMessage={defaultMiessages.latLon} /></p>
//       </div>
//     );
//   }
// }