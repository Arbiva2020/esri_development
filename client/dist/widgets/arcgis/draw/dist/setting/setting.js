System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/map"],(function(e,t){var s={},a={},i={},n={};return{setters:[function(e){s.React=e.React,s.classNames=e.classNames,s.css=e.css,s.jsx=e.jsx,s.polished=e.polished,s.useIntl=e.useIntl},function(e){a.MapWidgetSelector=e.MapWidgetSelector,a.SettingCollapse=e.SettingCollapse,a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection},function(e){i.Button=e.Button,i.Checkbox=e.Checkbox,i.Icon=e.Icon,i.Label=e.Label,i.NumericInput=e.NumericInput,i.Radio=e.Radio,i.Switch=e.Switch,i.defaultMessages=e.defaultMessages},function(e){n.DrawingElevationMode3D=e.DrawingElevationMode3D,n.useMeasurementsUnitsInfos=e.useMeasurementsUnitsInfos}],execute:function(){e((()=>{var e={748:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z" clip-rule="evenodd"></path></svg>'},86567:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm1 0a7 7 0 0 0 7 7 7.009 7.009 0 0 0 7-7A7 7 0 1 0 1 8Z" clip-rule="evenodd"></path></svg>'},29786:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7 2h2a2 2 0 0 1 2 2v7.817l-3 2.812-3-2.812V4a2 2 0 0 1 2-2Zm5 2v8.25L8 16l-4-3.75V4a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3ZM9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clip-rule="evenodd"></path></svg>'},87783:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 3.429V16h14V0L6.833 6.857 1 3.43ZM14 2v13H2V5.114l4.182 2.51a1.2 1.2 0 0 0 1.398-.118L14 2Z" clip-rule="evenodd"></path></svg>'},43126:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M14.582 5 11 10.949V12H9v-1.274L5.316 7h-.515L2 12.383V14H0v-2h1.073L4 6.374V5h2v1.27L9.688 10h.716L14 4.029V3h2v2h-1.418Z"></path></svg>'},45859:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.002 1H14a1 1 0 0 1 1 1.002v11.997A1 1 0 0 1 14 15H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1.002-1ZM2 14h12V2H2v12Z" clip-rule="evenodd"></path></svg>'},34363:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjU2IiBmaWxsPSIjMjgyODI4Ii8+DQo8cmVjdCB4PSIxMyIgeT0iNDAiIHdpZHRoPSI1MyIgaGVpZ2h0PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIxMyIgeT0iMzIiIHdpZHRoPSI4MSIgaGVpZ2h0PSIxIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSIxMyIgeT0iNTIiIHdpZHRoPSI4MSIgaGVpZ2h0PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIxMyIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjI5IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iNDUiIHk9IjE0IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSI2MSIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9Ijc3IiB5PSIxNCIgd2lkdGg9IjEiIGhlaWdodD0iMTIiIGZpbGw9IiM0NDQ0NDQiLz4NCjxyZWN0IHg9IjgyIiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzZBNkE2QSIvPg0KPC9zdmc+DQo="},59481:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iMjYiIHdpZHRoPSI5MiIgaGVpZ2h0PSIyMCIgZmlsbD0iIzI4MjgyOCIvPg0KPHJlY3QgeD0iMTQiIHk9IjMwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIzMCIgeT0iMzAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjQ2IiB5PSIzMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iNjIiIHk9IjMwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSI3OCIgeT0iMzAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSI4MyIgeT0iMzAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjwvc3ZnPg0K"},48891:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=i},58290:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=a}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var l={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(l),o.d(l,{__set_webpack_public_path__:()=>R,default:()=>Z});var e,t,s,a=o(48891),i=o(77756),n=o(30726);!function(e){e.Panel="Panel",e.Toolbar="Toolbar"}(e||(e={})),function(e){e.Continuous="continuous",e.Update="update"}(t||(t={})),function(e){e.Point="point",e.Polyline="polyline",e.Polygon="polygon",e.Rectangle="rectangle",e.Circle="circle"}(s||(s={}));var r=o(58290),c=o(29786),d=o.n(c);const g=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s}(e,["className"]),n=(0,a.classNames)("jimu-icon jimu-icon-component",s);return t?a.React.createElement(t,Object.assign({className:n,src:d()},i)):a.React.createElement("svg",Object.assign({className:n},i))};var p=o(43126),m=o.n(p);const u=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s}(e,["className"]),n=(0,a.classNames)("jimu-icon jimu-icon-component",s);return t?a.React.createElement(t,Object.assign({className:n,src:m()},i)):a.React.createElement("svg",Object.assign({className:n},i))};var h=o(87783),f=o.n(h);const I=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s}(e,["className"]),n=(0,a.classNames)("jimu-icon jimu-icon-component",s);return t?a.React.createElement(t,Object.assign({className:n,src:f()},i)):a.React.createElement("svg",Object.assign({className:n},i))};var w=o(45859),x=o.n(w);const M=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s}(e,["className"]),n=(0,a.classNames)("jimu-icon jimu-icon-component",s);return t?a.React.createElement(t,Object.assign({className:n,src:x()},i)):a.React.createElement("svg",Object.assign({className:n},i))};var j=o(86567),b=o.n(j);const v=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s}(e,["className"]),n=(0,a.classNames)("jimu-icon jimu-icon-component",s);return t?a.React.createElement(t,Object.assign({className:n,src:b()},i)):a.React.createElement("svg",Object.assign({className:n},i))},S=a.React.memo((e=>{const t=a.React.useRef(null),i=[{id:s.Point,icon:g,des:e.intl.formatMessage({id:"drawModePoint",defaultMessage:n.defaultMessages.drawModePoint})},{id:s.Polyline,icon:u,des:e.intl.formatMessage({id:"drawModeLine",defaultMessage:n.defaultMessages.drawModeLine})},{id:s.Polygon,icon:I,des:e.intl.formatMessage({id:"drawModePolygon",defaultMessage:n.defaultMessages.drawModePolygon})},{id:s.Rectangle,icon:M,des:e.intl.formatMessage({id:"drawModeRectangle",defaultMessage:n.defaultMessages.drawModeRectangle})},{id:s.Circle,icon:v,des:e.intl.formatMessage({id:"drawModeCircle",defaultMessage:n.defaultMessages.drawModeCircle})}],o=t=>{if(!e.items||!e.items.length)return!1;for(let s=0,a=e.items.length;s<a;s++)if(t===e.items[s])return!0;return!1},l=()=>{r()},r=()=>{const s=[],a=t.current.querySelectorAll("input");for(let e=0,t=a.length;e<t;e++){const t=a[e];t.checked&&s.push(t.getAttribute("data-itemid"))}e.onDrawingToolsChange(s)};return(0,a.jsx)("div",{ref:t,css:(()=>{const t=e.theme;return a.css`
      font-size: 13px;
      font-weight: lighter;
      color: ${t.colors.palette.dark[800]};

      .items-option{
        padding: 0;
        margin: 0;
        list-style: none;
        list-style-type: none;
        /*background: ${t.colors.palette.light[200]};*/

        .item{
          margin: 6px 0;

          .icon{
            color: ${t.colors.palette.dark[600]};
          }

          .item-label{
            margin: 0;
          }
        }
      }
    `})()},(0,a.jsx)("ul",{className:"items-option",role:"group","aria-label":e.title},(()=>{const e=[];for(let t=0,s=i.length;t<s;t++){const s=i[t],r=o(s.id);e.push((0,a.jsx)("li",{className:"d-flex item",key:"key-"+t},(0,a.jsx)(s.icon,{className:"icon mr-2"}),(0,a.jsx)(n.Label,{className:"d-flex item-label justify-content-between flex-grow-1 text-break","aria-label":s.des},s.des,(0,a.jsx)(n.Switch,{className:"d-flex","data-itemid":s.id,checked:r,onChange:l,"aria-label":s.des}))))}return e})()))})),y=a.React.memo((e=>{const t=a.React.useRef(null),s=(0,r.useMeasurementsUnitsInfos)(),[o,l]=a.React.useState((()=>{const t=[];return s.forEach((s=>{const a=s.value;let i=Object.assign({},s);const n=e.measurementsUnitsInfos.find((e=>e.value===a));n&&(i=Object.assign(Object.assign({},i),n)),t.push(i)})),t})),c=e=>{const t=o.find((t=>t.value===e));return t&&t.actived},d=t=>{const s=o.map((e=>(t===e.value&&(e.actived=!e.actived),e)));l(s),e.onUnitsSettingChange(s)},g=e.intl.formatMessage({id:"drawUnits",defaultMessage:n.defaultMessages.drawUnits});return(0,a.jsx)(i.SettingRow,null,(0,a.jsx)("div",{className:"d-block w-100",role:"group","aria-label":g},(0,a.jsx)(i.SettingRow,{label:g,className:"w-100 mb-2"}),(0,a.jsx)("div",{ref:t,className:"w-100",css:(()=>{const t=e.theme;return a.css`
      font-size: 13px;
      font-weight: lighter;
      width: 100%;
      height: 154px;
      overflow-y: scroll;
      background: ${t.colors.palette.light[200]};

      .dotdotdot{
        text-align: left;
        justify-content: start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .util-iteams{
        list-style: none;
        list-style-type: none;
        /*background: ${t.colors.palette.light[200]};*/

        .item{
          margin: 10px 0;
          align-items: center;

          .item-note-wapper{
            /*width: 80px;*/
            .item-note{
              display: inline-block;
              width: 100%;
            }
          }

          .item-label{
            width: 105px;
          }
        }
      }
    `})()},(0,a.jsx)("ul",{className:"util-iteams p-0 mx-2 mb-0",role:"group","aria-label":g},(()=>{const e=[];for(let t=0,s=o.length;t<s;t++){const s=o[t],i=c(s.value),l=s.note;e.push((0,a.jsx)("li",{className:"d-flex item",key:"key-"+t},(0,a.jsx)(n.Checkbox,{className:"d-flex mr-2","data-itemid":s.value,checked:i,onChange:()=>{d(s.value)},"aria-label":l}),(0,a.jsx)("div",{className:"d-flex mr-3 item-note-wapper dotdotdot"},(0,a.jsx)(n.Label,{className:"item-note dotdotdot",title:l,"aria-label":l},l))))}return e})()))))})),N=a.React.memo((e=>{const t=(t,s)=>{let a;switch(s){case"point":a=Object.assign(Object.assign({},e.decimalPlaces),{point:t});break;case"line":a=Object.assign(Object.assign({},e.decimalPlaces),{line:t});break;case"area":a=Object.assign(Object.assign({},e.decimalPlaces),{area:t});break;default:throw new Error}e.onDecimalPlacesChange(a)},s=(0,a.useIntl)().formatMessage({id:"decimalPlaces",defaultMessage:n.defaultMessages.decimalPlaces}),o=(0,a.useIntl)().formatMessage({id:"drawModePoint",defaultMessage:n.defaultMessages.drawModePoint}),l=(0,a.useIntl)().formatMessage({id:"drawModeLine",defaultMessage:n.defaultMessages.drawModeLine}),r=(0,a.useIntl)().formatMessage({id:"drawToolAreaTip",defaultMessage:n.defaultMessages.drawToolAreaTip});return(0,a.jsx)("div",{css:a.css`
      .decimal-title {
        .jimu-widget-setting--row-label{
          max-width: 100%;
        }
      }

      .inputs {
        .jimu-widget-setting--row-label{
          width: auto !important;
          margin-bottom: 0;
        }
        .numeric-input {
          width: 56px;
        }
      }
    `,className:"d-block w-100",role:"group","aria-label":s},(0,a.jsx)(i.SettingRow,{label:s,className:"w-100 mb-2 mt-2 decimal-title bold-font-label"}),(0,a.jsx)("div",{className:"inputs"},(0,a.jsx)(i.SettingRow,{flow:"wrap",label:o,className:"w-100"},(0,a.jsx)(n.NumericInput,{size:"sm",className:"numeric-input","aria-label":o,precision:0,min:0,max:10,value:e.decimalPlaces.point,onChange:e=>{t(e,"point")}})),(0,a.jsx)(i.SettingRow,{flow:"wrap",label:l,className:"w-100 mt-2"},(0,a.jsx)(n.NumericInput,{size:"sm",className:"numeric-input","aria-label":l,precision:0,min:0,max:10,value:e.decimalPlaces.line,onChange:e=>{t(e,"line")}})),(0,a.jsx)(i.SettingRow,{flow:"wrap",label:r,className:"w-100 mt-2"},(0,a.jsx)(n.NumericInput,{size:"sm",className:"numeric-input","aria-label":r,precision:0,min:0,max:10,value:e.decimalPlaces.area,onChange:e=>{t(e,"area")}}))))}));function P(e,t){const s=e.colors.palette.light[200],i=e.colors.palette.dark[600];return a.css`
      font-size: 13px;
      font-weight: lighter;

      .jimu-widget-setting--section {
        padding: 18px 16px;
      }

      .ui-mode-setting {
        display: flex;
      }

      /* ui-mode */
      .ui-mode-card-chooser{
        display: flex;
        align-items: start;

        .ui-mode-card-wapper {
          width: calc((100% - ${10}px - ${8}px) / 2);
        }

        .ui-mode-card-separator {
          width: ${10}px
        }
        .ui-mode-card {
          flex: 1;
          width: 100%;
          background: ${s};
          border: ${2}px solid ${s};
          margin: 0 0 0.5rem 0;

          .jimu-icon {
            margin: 0
          }
        }
        .ui-mode-card.active {
          border: ${2}px solid #00D8ED;
          background-color: ${s} !important;
        }
        .ui-mode-label {
          overflow: hidden;
          text-align: center;
        }
      }

      .placeholder-container{
        height: calc(100% - 180px);

        .placeholder{
          flex-direction: column;

          .icon{
            color: var(--dark-200);
          }
          .hint{
            font-size: ${t.rem(14)};
            font-weight: 500;
            color: var(--dark-500);
            max-width: ${t.rem(160)};
          }
        }

      }

      /* UI for #13051 */
      .bold-font-label {
        .jimu-widget-setting--row-label,
        .setting-text-level-1 {
          font-weight: 600 !important;
          color: ${i} !important;
        }
      }

  `}var O=o(748),C=o.n(O);const D=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s}(e,["className"]),n=(0,a.classNames)("jimu-icon jimu-icon-component",s);return t?a.React.createElement(t,Object.assign({className:n,src:C()},i)):a.React.createElement("svg",Object.assign({className:n},i))};class Z extends a.React.PureComponent{constructor(e){var t;super(e),this.handleMapWidgetChange=e=>{const t=!!(null==e?void 0:e[0]);this.setState({isSelectedMap:t}),this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.handleIsDisplayCanvasLayerChange=()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("isDisplayCanvasLayer",!this.props.config.isDisplayCanvasLayer)})},this.handleArrangementChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("arrangement",e)})},this.handleShowAdvancedSettingClick=()=>{this.setState({isShowAdvancedSetting:!this.state.isShowAdvancedSetting})},this.handleDrawToolsChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("drawingTools",e)})},this.handleIsEnableMeasurementChange=()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["measurementsInfo","enableMeasurements"],!this.props.config.measurementsInfo.enableMeasurements)})},this.handleMeasurementUnitsInfoChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("measurementsUnitsInfos",e)})},this.handleMDecimalChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["measurementsInfo","decimalPlaces"],e)})},this.handleDrawingElevationMode3DChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("drawingElevationMode3D",e)})},this.state={isSelectedMap:!!(null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t[0]),isShowAdvancedSetting:!1}}render(){var t;const s=this.props.id+"-uimode-description",l=this.props.id+"-uimode-0",c=this.props.id+"-uimode-1",d=this.props.intl.formatMessage({id:"selectMapWidget",defaultMessage:"Select a Map widget"}),g=this.props.intl.formatMessage({id:"selectMapHint",defaultMessage:n.defaultMessages.selectMapHint}),p=this.props.intl.formatMessage({id:"arrangementTips",defaultMessage:"Arrangement"}),m=this.props.intl.formatMessage({id:"panelTips",defaultMessage:"Panel"}),u=this.props.intl.formatMessage({id:"toolbarTips",defaultMessage:"Toolbar"}),h=this.props.intl.formatMessage({id:"advance",defaultMessage:n.defaultMessages.advance}),f=this.props.intl.formatMessage({id:"drawingToolsTips",defaultMessage:"Drawing tools"}),I=this.props.intl.formatMessage({id:"isEnableMeasurementsTips",defaultMessage:"Enable measurement"}),w=this.props.intl.formatMessage({id:"drawingElevationMode3DTips",defaultMessage:"3D drawing effect"}),x=this.props.intl.formatMessage({id:"relativeToGroundTips",defaultMessage:"Relative to ground"}),M=this.props.intl.formatMessage({id:"onTheGroundTips",defaultMessage:"On the ground"});return(0,a.jsx)("div",{css:P(this.props.theme,a.polished),className:"widget-setting-menu jimu-widget-setting"},(0,a.jsx)(i.SettingSection,{title:d,className:(0,a.classNames)("map-selector-section",{"border-0":!this.state.isSelectedMap})},(0,a.jsx)(i.SettingRow,null,(0,a.jsx)(i.MapWidgetSelector,{onSelect:this.handleMapWidgetChange,useMapWidgetIds:this.props.useMapWidgetIds}))),!this.state.isSelectedMap&&(0,a.jsx)("div",{className:"d-flex placeholder-container justify-content-center align-items-center"},(0,a.jsx)("div",{className:"d-flex text-center placeholder justify-content-center align-items-center "},(0,a.jsx)(D,{size:48,className:"d-flex icon mb-2"}),(0,a.jsx)("p",{className:"hint"},g))),this.state.isSelectedMap&&(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)(i.SettingSection,{title:p},(0,a.jsx)(i.SettingRow,{role:"group","aria-label":p},(0,a.jsx)("div",{className:"ui-mode-card-chooser"},(0,a.jsx)(n.Label,{className:"d-flex flex-column ui-mode-card-wapper"},(0,a.jsx)(n.Button,{icon:!0,className:(0,a.classNames)("ui-mode-card",{active:this.props.config.arrangement===e.Panel}),onClick:()=>{this.handleArrangementChange(e.Panel)},"aria-labelledby":l,"aria-describedby":s,title:m},(0,a.jsx)(n.Icon,{width:100,height:72,icon:o(34363),autoFlip:!0})),(0,a.jsx)("div",{id:l,className:"mx-1 text-break ui-mode-label"},m)),(0,a.jsx)("div",{className:"ui-mode-card-separator"}),(0,a.jsx)(n.Label,{className:"d-flex flex-column ui-mode-card-wapper"},(0,a.jsx)(n.Button,{icon:!0,className:(0,a.classNames)("ui-mode-card",{active:this.props.config.arrangement===e.Toolbar}),onClick:()=>{this.handleArrangementChange(e.Toolbar)},"aria-labelledby":c,"aria-describedby":s,title:u},(0,a.jsx)(n.Icon,{width:100,height:72,icon:o(59481),autoFlip:!0})),(0,a.jsx)("div",{id:c,className:"mx-1 text-break ui-mode-label"},u))))),(0,a.jsx)(i.SettingSection,null,(0,a.jsx)(i.SettingCollapse,{label:h,isOpen:this.state.isShowAdvancedSetting,onRequestOpen:this.handleShowAdvancedSettingClick,onRequestClose:this.handleShowAdvancedSettingClick},(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)(i.SettingSection,{title:f,className:"px-0 bold-font-label",role:"group","aria-label":f},(0,a.jsx)(S,{items:this.props.config.drawingTools.asMutable(),theme:this.props.theme,intl:this.props.intl,title:"Drawing tools",onDrawingToolsChange:this.handleDrawToolsChange})),(0,a.jsx)(i.SettingSection,{className:"px-0"},(0,a.jsx)(i.SettingRow,{label:I,className:"bold-font-label"},(0,a.jsx)(n.Switch,{checked:this.props.config.measurementsInfo.enableMeasurements,onChange:this.handleIsEnableMeasurementChange,"aria-label":I})),this.props.config.measurementsInfo.enableMeasurements&&(0,a.jsx)(y,{theme:this.props.theme,intl:this.props.intl,measurementsUnitsInfos:null===(t=this.props.config.measurementsUnitsInfos)||void 0===t?void 0:t.asMutable(),onUnitsSettingChange:this.handleMeasurementUnitsInfoChange}),this.props.config.measurementsInfo.enableMeasurements&&(0,a.jsx)(N,{decimalPlaces:this.props.config.measurementsInfo.decimalPlaces,onDecimalPlacesChange:this.handleMDecimalChange})),(0,a.jsx)(i.SettingSection,{title:w,className:"px-0",role:"group","aria-label":w},(0,a.jsx)(i.SettingRow,{flow:"wrap"},(0,a.jsx)("div",{role:"radiogroup",className:"mb-3"},(0,a.jsx)(n.Label,{className:"d-flex align-items-center",style:{cursor:"pointer"},title:x},(0,a.jsx)(n.Radio,{style:{cursor:"pointer"},className:"m-0 mr-2",title:x,name:"drawingElevationMode3D",onChange:()=>{this.handleDrawingElevationMode3DChange(r.DrawingElevationMode3D.RelativeToGround)},checked:this.props.config.drawingElevationMode3D===r.DrawingElevationMode3D.RelativeToGround}),x),(0,a.jsx)(n.Label,{className:"d-flex align-items-center",style:{cursor:"pointer"},title:M},(0,a.jsx)(n.Radio,{style:{cursor:"pointer"},className:"m-0 mr-2",title:M,name:"drawingElevationMode3D",onChange:()=>{this.handleDrawingElevationMode3DChange(r.DrawingElevationMode3D.OnTheGround)},checked:this.props.config.drawingElevationMode3D===r.DrawingElevationMode3D.OnTheGround}),M)))))))))}}function R(e){o.p=e}})(),l})())}}}));