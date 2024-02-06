System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/widgets/FeatureForm","esri/widgets/Editor","esri/layers/FeatureLayer","esri/form/FormTemplate","esri/form/elements/FieldElement","esri/form/elements/GroupElement","esri/Graphic","esri/rest/support/Query","esri/core/reactiveUtils"],(function(e,t){var i={},s={},o={},a={},r={},n={},l={},d={},c={},u={},p={},h={};return{setters:[function(e){i.BaseVersionManager=e.BaseVersionManager,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.DataSourceStatus=e.DataSourceStatus,i.Immutable=e.Immutable,i.React=e.React,i.SupportedLayerServiceTypes=e.SupportedLayerServiceTypes,i.appActions=e.appActions,i.classNames=e.classNames,i.css=e.css,i.dataSourceUtils=e.dataSourceUtils,i.defaultMessages=e.defaultMessages,i.esri=e.esri,i.jsx=e.jsx,i.lodash=e.lodash,i.polished=e.polished,i.privilegeUtils=e.privilegeUtils},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.Button=e.Button,o.Select=e.Select,o.TextInput=e.TextInput,o.WidgetPlaceholder=e.WidgetPlaceholder,o.defaultMessages=e.defaultMessages},function(e){a.default=e.default},function(e){r.default=e.default},function(e){n.default=e.default},function(e){l.default=e.default},function(e){d.default=e.default},function(e){c.default=e.default},function(e){u.default=e.default},function(e){p.default=e.default},function(e){h.default=e.default}],execute:function(){e((()=>{var e={94127:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 400 400"><path fill="#A8A8A8" fill-rule="evenodd" d="M193 10H10v28h183V10Zm197 53H10v2h380v-2ZM10 299h380v2H10v-2Zm142-196H25v22h127v-22Zm235.99-11H12.01v44h375.98V92ZM10 90v48h380V90H10Zm348 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14ZM25 171h127v22H25v-22Zm-12.99-11h375.98v44H12.01v-44ZM10 206v-48h380v48H10Zm362-24c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Zm-220 57H25v22h127v-22Zm235.99-11H12.01v44h375.98v-44ZM10 226v48h380v-48H10Zm348 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm-188 62H10v22h160v-22Zm209 2h-18a9 9 0 0 0-9 9 9 9 0 0 0 9 9h18a9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-18-2c-6.075 0-11 4.925-11 11s4.925 11 11 11h18c6.075 0 11-4.925 11-11s-4.925-11-11-11h-18Zm25 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM10 367h160v22H10v-22Zm351 2h18a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-18a9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm-11 9c0-6.075 4.925-11 11-11h18c6.075 0 11 4.925 11 11s-4.925 11-11 11h-18c-6.075 0-11-4.925-11-11Zm29 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" clip-rule="evenodd"></path></svg>'},34750:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z"></path></svg>'},30224:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" clip-rule="evenodd"></path></svg>'},88866:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" clip-rule="evenodd"></path></svg>'},79964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg>'},94129:e=>{"use strict";e.exports=u},135:e=>{"use strict";e.exports=h},48702:e=>{"use strict";e.exports=l},70281:e=>{"use strict";e.exports=d},11668:e=>{"use strict";e.exports=c},99818:e=>{"use strict";e.exports=n},37902:e=>{"use strict";e.exports=p},88359:e=>{"use strict";e.exports=r},27387:e=>{"use strict";e.exports=a},26826:e=>{"use strict";e.exports=s},48891:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=o}},t={};function m(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,m),o.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var i in t)m.o(t,i)&&!m.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.p="";var v={};return m.p=window.jimuConfig.baseUrl,(()=>{"use strict";m.r(v),m.d(v,{__set_webpack_public_path__:()=>G,default:()=>Z});var e,t,i,s=m(48891);!function(e){e.Attribute="ATTRIBUTE",e.Geometry="GEOMETRY"}(e||(e={})),function(e){e.Webmap="WEBMAP",e.Custom="CUSTOM"}(t||(t={})),function(e){e.Added="Added",e.Updated="Updated",e.Deleted="Deleted"}(i||(i={}));var o=m(26826);const a={_widgetLabel:"Edit",initGeoEmptyMessage:"Please add an editable layer.",initAttEmptyMessage:"Please add an editable source.",noRecordTips:"No valid record is selected, select one or add one.",addFeature:"Add feature",selectLayer:"Select layer",selfSnapping:"Geometry guides",featureSnapping:"Feature to feature",update:"Update",deleteRecord:"Delete this record?",deleteRecordTips:"This record will be permanently removed.",keepRecord:"Keep record"};var r=m(30726);function n(e,t,i,o,a){return s.css`
    ${"&.edit-widget-"+t} {
      .editor-white-bg{
        background-color: ${e.colors.white};
      }
      [heading='Edit feature'] .esri-editor__panel-content{
        padding: 0;
        .esri-editor__panel-content--section{
          padding: 8px 16px;
        }
      }
      .esri-editor__content{
        padding: 8px 16px;
      }
      .esri-feature-form{
        ${("empty"===i||"list"===i)&&`border-bottom: 1px solid ${e.colors.palette.light[200]};`}
        background-color: unset;
        .esri-feature-form__form-header{
          margin: 0;
          ${"form"===i&&"display: none;"}
          .esri-feature-form__description-text{
            font-weight: 500;
            font-size: 13px;
          }
        }
      }
      .esri-feature-templates{
        width: 100%;
        height: calc(100% - 40px);
        .esri-item-list{
          height: 100%;
          .esri-item-list__scroller{
            height: 100%;
          }
        }
      }
      .esri-editor__temp-wrapper{
        height: 100%;
      }
      .esri-editor__header{
        min-height: 56px;
        padding-left: ${a&&1!==o?"35px":"15px"};
        .esri-widget__heading{
          font-weight: 600;
          font-size: 16px;
          margin: 0 8px;
          text-align: left;
          padding: 1px 0;
          height: 56px;
          line-height: 54px
        }
      }
      .esri-editor__controls{
        border-top: 1px solid rgba(110,110,110,.3);
        padding: 12px 15px;
        display: flex;
        flex-direction: column;
        ${!a&&"justify-content: space-between !important; flex-direction: row !important;"}
        .esri-editor__control-button:first-of-type{
          color: ${e.colors.white};
          background-color: ${e.colors.palette.primary[500]};
          border: 1px solid ${e.colors.palette.primary[500]};
          :hover{
            background-color: ${e.colors.palette.primary[600]};
          }
        }
        .esri-editor__control-button{
          color: ${e.colors.palette.dark[800]};
          background-color: ${e.colors.white};
          border: 1px solid ${e.colors.palette.light[400]};
          :hover{
            background-color: ${e.colors.palette.light[100]};
          }
        }
        .esri-editor__control-button + .esri-editor__control-button{
          margin-left: 2%;
        }
      }
      .esri-item-list__list-item{
        :focus,
        :focus-visible {
          outline-offset: -2px !important;
        }
      }
      .esri-item-list__list{
        list-style: none;
        margin: 0;
        padding: 0;
        .esri-item-list__list-item{
          cursor: pointer;
          margin-bottom: 6px;
          min-height: 48px;
          transition: border 250ms ease-in-out;
          display: flex;
          justify-content: space-between;
          .esri-item-list__list-item-container{
            display: flex;
            margin: 9px 2px;
            width: 100%;
            .esri-item-list__list-item-label{
              flex: 1;
              margin: 0;
              display: flex;
              align-items: center;
              word-break: break-word;
              padding-left: 20px;
            }
          }
        }
      }
      .esri-item-list__scroller {
        position: relative;
        z-index: 0;
      }

      .esri-editor__feature-list-item,
      .esri-item-list__list-item{
        border-color:  ${e.colors.palette.light[200]};
        box-shadow: unset;
        :hover{
          border-color: ${e.colors.palette.dark[300]};
        }
      }
      .confirm-scrim{
        position: absolute;
        background-color: var(--calcite-scrim-background);
        width: 100%;
        height: 100%;
        top: 0;
      }
      .esri-editor__prompt__actions{
        .esri-editor__warning-option--primary,
        .esri-editor__warning-option--positive{
          text-align: center;
          padding: ${s.polished.rem(4)} ${s.polished.rem(16)};
          line-height: ${s.polished.rem(22)};
          border: 1px solid var(--calcite-ui-danger);
          border-radius: 0;
          flex: 1;
        }
        .esri-editor__warning-option--primary{
          background-color: transparent;
          color: var(--calcite-ui-danger);
          :hover{
            border-color: var(--calcite-ui-danger-hover);
            color: var(--calcite-ui-danger-hover);
            box-shadow: inset 0 0 0 1px var(--calcite-ui-danger-hover);
          }
        }
        .esri-editor__warning-option--positive{
          background-color: var(--calcite-ui-danger);
          color: ${e.colors.white};
          :hover{
            border-color: var(--calcite-ui-danger-hover);
            background-color: var(--calcite-ui-danger-hover);
          }
        }
      }
      .esri-feature-table__loader-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        margin: unset;
        background-color: ${s.polished.rgba(e.colors.palette.secondary[400],.3)};
        .esri-feature-table__loader{
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -16px;
          margin-top: -20px;
          z-index: 2;
        }
      }

      .attr-height{
        overflow-y: auto;
        height: calc(100% - 113px);
      }
      .snapping-option{
        position: absolute;
        top: 170px;
        width: calc(100% - 33px);
        margin: 10px 16px;
        padding: 16px 7px 10px;
        border-top: 1px solid ${e.colors.palette.light[300]};
        .snapping-item{
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }
      }
      .feature-list{
        height: calc(100% - 57px);
        background-color: var(--calcite-ui-background);
        max-height: unset;
        .esri-item-list{
          background-color: unset;
        }
        .esri-item-list__list-item{
          background-color: var(--calcite-ui-foreground-1);
          :hover{
            cursor: pointer;
            background-color: var(--calcite-ui-foreground-2);
          }
        }

        .esri-editor__scroller{
          max-height: unset;
        }
      }
      .esri-editor__scroller{
        max-height: unset;
        .esri-item-list__scroller{
          max-height: unset;
        }
      }
      .esri-item-list__group{
        padding: 0 12px;
      }
      .esri-editor__message{
        margin: auto;
      }
      .form-header-container{
        border-bottom: 1px solid ${e.colors.palette.light[200]};.
      }
      .esri-editor__header{
        padding-left: unset;
      }
      .back-button{
        width: 32px;
        padding-inline: ${s.polished.rem(8)};
        padding-block: ${s.polished.rem(4)};
        line-height: ${s.polished.rem(16)};
        color: ${e.colors.black};
        border-top: 0px !important;
        border-left: 0px !important;
        border-bottom: 0px !important;
        border-style: solid;
        border-color: var(--calcite-ui-border-3);
        border-inline-end-width: 1px;
      }
      .layer-selector{
        padding: 12px 15px;
      }
      .single-buttons{
        flex: 1;
      }
      .multi-buttons{
        width: 49%;
      }
      .add-feature-btn{
        position: absolute;
        right: 15px;
        top: 12px;
        button{
          width: 32px;
          height: 32px;
        }
      }
      .back-list-btn{
        position: absolute;
        left: 15px;
        top: 15px;
      }
      .edit-blank{
        min-height: 300px;
        .placeholder-icon{
          color: ${e.colors.palette.dark[200]};
        }
        & > div{
          top: calc(50% + 20px);
          transform: translateY(-50%);
        }
        p{
          font-size: ${s.polished.rem(14)};
          margin-top: ${s.polished.rem(16)};
          line-height: ${s.polished.rem(19)};
          color: ${e.colors.palette.dark[500]};
        }
      }
    }
  `}class l extends s.React.PureComponent{constructor(){super(...arguments),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onDataSourceInfoChange=(e,t)=>{this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId,null==e?void 0:e.status);const i=null==t?void 0:t.selectedIds,s=null==e?void 0:e.selectedIds,o=i!==s&&(0!==(null==i?void 0:i.length)||0!==(null==s?void 0:s.length)),a=null==t?void 0:t.gdbVersion,r=null==e?void 0:e.gdbVersion;o&&this.props.onDataSourceSelectedChange(this.props.useDataSource.dataSourceId,s),a!==r&&this.props.onDataSourceVersionChange(this.props.useDataSource.dataSourceId)},this.onCreateDataSourceFailed=()=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)}}componentWillUnmount(){this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null),this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId,s.DataSourceStatus.NotReady)}render(){const{useDataSource:e}=this.props;return(0,s.jsx)(s.DataSourceComponent,{useDataSource:e,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed,onDataSourceInfoChange:this.onDataSourceInfoChange})}}var d=m(34750),c=m.n(d);const u=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:c()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var p=m(88866),h=m.n(p);const f=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:h()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var g=m(27387),b=m(88359),y=m(99818),S=m(48702),x=m(70281),w=m(11668),j=m(94129),_=m(37902);const F=["CreationDate","Creator","EditDate","Editor","GlobalID"];var I=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function n(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};class E extends s.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.7.0",description:"Add layerHonorMode to config for support smart form.",upgrader:e=>I(this,void 0,void 0,(function*(){let i=e;const o=(e,t)=>{const i=[],s=e=>(e.forEach((e=>{if(e.groupKey)s(e.children);else{const s=t.find((t=>t.name===e.jimuName));F.includes(e.jimuName)||i.push(Object.assign(Object.assign({},e),{editable:null==s?void 0:s.editable,editAuthority:!!(null==s?void 0:s.editable)&&(null==e?void 0:e.editAuthority)}))}})),i);return s(e)};return yield Promise.all(i.layersConfig.map((e=>new Promise((t=>{s.DataSourceManager.getInstance().createDataSourceByUseDataSource(e.useDataSource).then((i=>{const s=null==i?void 0:i.getLayerDefinition(),a=(null==s?void 0:s.fields)||[],r=e.groupedFields.map((e=>{var t;const i=a.find((t=>t.name===e.jimuName));return e.groupKey?Object.assign(Object.assign({},e),{editable:!0,editAuthority:!(null===(t=null==e?void 0:e.children)||void 0===t?void 0:t.some((e=>!1===e.editAuthority))),children:o(null==e?void 0:e.children,a)}):Object.assign(Object.assign({},e),{editable:null==i?void 0:i.editable,editAuthority:!!(null==i?void 0:i.editable)&&(null==e?void 0:e.editAuthority)})})).filter((e=>!F.includes(e.jimuName)));t(r)}))}))))).then((e=>(e.forEach(((e,o)=>{const a=i.layersConfig[o].showFields.filter((e=>!F.includes(e.jimuName)));let r=[];const n=e.asMutable({deep:!0});e.forEach((e=>{e.groupKey?r=r.concat(e.children):r.push(e)})),a.forEach((e=>{r.find((t=>t.jimuName===e.jimuName))||n.push(e)})),i=i.setIn(["layersConfig",o,"groupedFields"],(0,s.Immutable)(n)),i=i.setIn(["layersConfig",o,"layerHonorMode"],t.Custom)})),Promise.resolve(i))))}))},{version:"1.10.0",description:"Set old app default snapping to true",upgrader:e=>I(this,void 0,void 0,(function*(){let t=e;return t=t.set("selfSnapping",!0).set("featureSnapping",!0),t}))},{version:"1.12.0",description:'Set "undefined" option to "false", and remove not editable layer',upgrader:t=>I(this,void 0,void 0,(function*(){var i,o,a;let r=t;const n=r.editMode===e.Geometry,l=s.DataSourceManager.getInstance(),d=[];for(const e of r.layersConfig){let t;try{t=yield l.createDataSourceByUseDataSource(null==e?void 0:e.useDataSource)}catch(e){console.error(e)}if(!t){d.push(e);continue}const r=null==t?void 0:t.getLayerDefinition(),c=(null===(i=null==t?void 0:t.layer)||void 0===i?void 0:i.isTable)||(null==r?void 0:r.type)===s.SupportedLayerServiceTypes.Table;if(n&&c)continue;const u=null==r?void 0:r.allowGeometryUpdates;if(null===(a=null===(o=null==t?void 0:t.layer)||void 0===o?void 0:o.editingEnabled)||void 0===a||a){let t;t=e.updateGeometries?Object.assign(Object.assign({},e),{updateRecords:!0,updateAttributes:!0,updateGeometries:u&&!0}):Object.assign(Object.assign({},e),{updateRecords:!1,updateAttributes:!1,updateGeometries:!1}),d.push(t)}}return r=r.setIn(["layersConfig"],d),r}))}]}}const C=new E;var M=m(79964),N=m.n(M);const D=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:N()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var O=m(135),k=m(30224),A=m.n(k);const L=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(e,["className"]),a=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?s.React.createElement(t,Object.assign({className:a,src:A()},o)):s.React.createElement("svg",Object.assign({className:a},o))};var R=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function n(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};const $=m(94127),T="esri-feature-form__form-header",P="esri-feature-form__description-text",B="esri-widget__heading",U="esri-feature-form",H="esri-editor__scroller",V="esri-item-list__list-item-label",W="esri-editor__warning-option";class Z extends s.React.PureComponent{constructor(o){super(o),this.handleActiveViewChange=e=>{this.setState({jimuMapView:e},(()=>{const t=null==e?void 0:e.view;null==t||t.when((()=>{null==t||t.on("layerview-create",(t=>{var i;const s=t.layer;if(null===(i=null==s?void 0:s.id)||void 0===i?void 0:i.includes("jimu-draw-measurements-layer")){const t=this.edit;(null==t?void 0:t.layerInfos)?this.setupEditLayerInfos(e):this.createEditor(e)}}))})),e?this.createEditor(e):this.destoryEdit()}))},this.formatMessage=(e,t)=>{const i=Object.assign({},a,r.defaultMessages,s.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.destoryEdit=()=>{this.edit&&!this.edit.destroyed&&this.edit.destroy()},this.flatMapArray=e=>{const t=[];for(const i in e)(null==e?void 0:e[i])&&t.push(...e[i]);return t},this.flatMapArrayWithView=(e,t)=>{const i=[],s=null==t?void 0:t.dataSourceId;for(const t in e)0===t.indexOf(s)&&(null==e?void 0:e[t])&&i.push(...e[t]);return i},this.createEditForm=(e,t,i)=>R(this,void 0,void 0,(function*(){var o,a,r,n;const{dataSources:l,editFeatures:d}=this.state,{id:c,config:u}=this.props,{layersConfig:p}=u,h=l[e],m=this.getInLayersConfigFeatures(d,p),v=this.flatMapArray(m).length;if(1===v){const e=null===(o=h.getSelectedRecords())||void 0===o?void 0:o[0];if(!e)return;if(t||!this.edit||(null===(a=this.edit)||void 0===a?void 0:a.destroyed))this.renderFeatureForm(h,e,i);else{null===(r=document.getElementById(`edit-container-${c}`))||void 0===r||r.classList.remove("esri-hidden"),this.createOrUpdateheader(h,e.feature);const t=this.edit;if(!t)return;const i=yield s.dataSourceUtils.changeToJSAPIGraphic(null==e?void 0:e.feature);t.feature=i}}else(v>1||0===v)&&(null===(n=document.getElementById(`edit-container-${c}`))||void 0===n||n.classList.add("esri-hidden"))})),this.getDsAccessibleInfo=e=>e?(0,s.esri.restRequest.request)(`${e}?f=json`).then((e=>!Object.keys(e).includes("error"))).catch((e=>{console.error(e)})):Promise.resolve(!1),this.getPrivilege=()=>s.privilegeUtils.checkExbAccess(s.privilegeUtils.CheckTarget.Experience).then((e=>{var t;return null===(t=null==e?void 0:e.capabilities)||void 0===t?void 0:t.canEditFeature})),this.sendSparkMsg=(e,t)=>{var i,s,o;const a=null===(o=null===(s=null===(i=null===window||void 0===window?void 0:window.Capacitor)||void 0===i?void 0:i.Plugins)||void 0===s?void 0:s.Spark)||void 0===o?void 0:o.sendDiscussionAsync;a&&a({title:`${e} data to ${t}`,content:window.location.href})},this.renderFeatureForm=(o,a,r)=>{this.setState({loading:!0});const{activeId:n}=this.state,{config:l,id:d}=this.props,{editMode:c,layersConfig:u}=l,p=u.asMutable({deep:!0}).find((e=>e.id===n));this.destoryEdit(),this.getFeatureLayer(o).then((n=>R(this,void 0,void 0,(function*(){var l;if(r&&r!==this.currentRequestId)return void this.setState({loading:!1});if(this.removeLayerOnce=!1,!n)return void this.setState({loading:!1});const u=document&&document.createElement("div");let h;u.id=`edit-container-${d}`,u.className=`edit-container-${d}`,this.refs.editContainer.appendChild(u),h=n.layer?n.layer:n;const m=yield this.getDsAccessibleInfo(null==h?void 0:h.url),v=yield this.getPrivilege(),f=m||v;if(this.setState({formEditable:f}),c===e.Attribute){const e=this.constructFormElements(o.id),r=new S.default({elements:e}),n=((null==a?void 0:a.feature)?yield s.dataSourceUtils.changeToJSAPIGraphic(null==a?void 0:a.feature):void 0)||new j.default({layer:h}),d=p.layerHonorMode===t.Webmap&&(null===(l=null==o?void 0:o.layer)||void 0===l?void 0:l.formTemplate)||r;this.edit=new g.default({container:u,feature:n,layer:h,formTemplate:d}),this.createOrUpdateheader(o,n),a&&this.setState({featureFormStep:"form"});const c=this.edit;c.on("submit",(()=>{const e=(null==c?void 0:c.feature)||n;if(e){(null==e?void 0:e.geometry)&&(e.geometry=null);const t=c.getValues();Object.keys(t).forEach((i=>{e.attributes[i]=t[i]}));const i={updateFeatures:[e]};this.applyAttributeUpdates(i)}})),c.on("value-change",(e=>{var t,i;const{feature:s,fieldName:o,value:a}=e,r=null===(t=this.edit.viewModel)||void 0===t?void 0:t.submittable;this.setState({formSubmittable:r}),a!==(null===(i=null==s?void 0:s.attributes)||void 0===i?void 0:i[o])?this.setState({formChange:!0}):this.setState({formChange:!1})})),h.on("edits",(e=>{var t,s,a,r,n,l,d,c;const{addedFeatures:u,updatedFeatures:p,deletedFeatures:m}=e,v=u&&u.length>0,f=p&&p.length>0,g=m&&m.length>0;let b=i.Added;if(v){b=i.Added;const n=null===(s=null===(t=null==e?void 0:e.edits)||void 0===t?void 0:t.addFeatures)||void 0===s?void 0:s[0];if(n){const e=o.getIdField(),t=o.buildRecord(n,o),i=(null==t?void 0:t.getData())||{};t.setData(Object.assign(Object.assign({},i),{[e]:null===(r=null===(a=u[0])||void 0===a?void 0:a.objectId)||void 0===r?void 0:r.toString()})),o.afterAddRecord(t),o.selectRecordById(t.getId(),t)}}if(f){b=i.Updated;const t=null===(l=null===(n=null==e?void 0:e.edits)||void 0===n?void 0:n.updateFeatures)||void 0===l?void 0:l[0];if(t){const e=o.buildRecord(t,o);o.afterUpdateRecord(e)}}if(g){b=i.Deleted;const t=null===(c=null===(d=null==e?void 0:e.edits)||void 0===d?void 0:d.deleteFeatures)||void 0===c?void 0:c[0];if(t){const e=o.buildRecord(t,o);o.afterDeleteRecordById(e.getId())}}(v||f||g)&&this.sendSparkMsg(b,h.title)})),this.setState({loading:!1})}})))).catch((e=>{this.setState({loading:!1}),this.removeLayerOnce=!1,console.error(e)}))},this.createOrUpdateheader=(e,t)=>{var i,o;const{id:a}=this.props,{featureFormStep:r}=this.state,n=this.getLayerDisplayField(e),l="new"===r?this.formatMessage("addFeature"):null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i[n];if(null===document||void 0===document?void 0:document.getElementById(`form_heading_${a}`))document.getElementById(`form_heading_${a}`).innerText=l;else{const e=document&&document.createElement("div");e.className="d-flex",e.innerHTML=`\n        <button id='back_home_${a}' class='back-button surface-1 ${(0,s.classNames)("esri-editor__back-button")}' title='${this.formatMessage("back")}'><</button>\n        <header class='${(0,s.classNames)("esri-editor__header")}'>\n          <h4 id='form_heading_${a}' class='text-truncate ${(0,s.classNames)(B)}' title='${l}'>${l}</h4>\n        </header>\n      `,this.refs.formHeaderContainer.appendChild(e),null===(o=document.getElementById(`back_home_${a}`))||void 0===o||o.addEventListener("click",this.handleBack)}},this.deleteChangeDataSource=e=>{const{config:t}=this.props,{layersConfig:i}=t,{activeId:s,editFeatures:o}=this.state,a=Object.assign({},o);a[s]=e;const r=this.getInLayersConfigFeatures(a,i),n=this.flatMapArray(r).length,l=n>1?"list":1===n?"form":"empty";this.setState({editFeatures:a,featureFormStep:l},(()=>{this.createEditForm(s,!1)}))},this.applyAttributeUpdates=e=>{const{dataSources:t,editFeatures:i,activeId:s}=this.state,o=this.edit,a=t[s],r=a.getGDBVersion();o.layer.applyEdits(e,{gdbVersion:r}).then((t=>{if(null==e?void 0:e.deleteFeatures){const t=(null==a?void 0:a.getSelectedRecords()).filter((t=>t.feature.attributes!==(null==e?void 0:e.deleteFeatures[0].attributes)));if(t.length>0)this.deleteChangeDataSource(t);else{const e=Object.assign({},i);delete e[s];const t=this.refs.formHeaderContainer;(null==t?void 0:t.innerHTML)&&(t.innerHTML=""),this.destoryEdit(),this.setState({editFeatures:e,featureFormStep:"empty",activeId:""})}}else(null==e?void 0:e.updateFeatures)&&this.setState({attrUpdating:!1});this.setState({formChange:!1,formSubmittable:!0})})).catch((t=>{(null==e?void 0:e.updateFeatures)&&this.setState({attrUpdating:!1}),console.error(t)}))},this.constructFormElements=e=>{let{activeId:t}=this.state;e&&(t=e);const{config:i}=this.props,{layersConfig:s}=i,o=s.asMutable({deep:!0}).find((e=>e.id===t));if(!o)return[];const{groupedFields:a}=o;return a.map((e=>(null==e?void 0:e.children)?new w.default({label:e.name,description:e.subDescription||(null==e?void 0:e.description),elements:null==e?void 0:e.children.map((e=>new x.default({fieldName:e.jimuName,label:null==e?void 0:e.alias,description:e.subDescription||(null==e?void 0:e.description),editable:e.editAuthority})))}):new x.default({fieldName:e.jimuName,label:null==e?void 0:e.alias,description:e.subDescription||(null==e?void 0:e.description),editable:e.editAuthority})))},this.onFilterChange=e=>{this.setState({filterText:e.target.value})},this.renderListItems=e=>{var t,i,o;const{filterText:a}=this.state,r=[];for(const s in e){const n=e[s],l=null===(t=null==n?void 0:n[0])||void 0===t?void 0:t.dataSource,d=null==l?void 0:l.belongToDataSource,c=null==d?void 0:d.jimuChildId,u=(null===(i=null==d?void 0:d.layerDefinition)||void 0===i?void 0:i.name)||(null===(o=null==d?void 0:d.layerDefinition)||void 0===o?void 0:o.description),p=this.getLayerDisplayField(l),h=this.getLayerObjectIdField(l),m={id:c,label:u,dsId:s,items:n.filter((e=>{var t,i,s,o;const r=(null===(t=e.feature.attributes)||void 0===t?void 0:t[p])||(null===(i=e.feature.attributes)||void 0===i?void 0:i[h])||(null===(s=e.feature.attributes)||void 0===s?void 0:s.objectid),n=a.toLowerCase();return!n||(null===(o=null==r?void 0:r.toString())||void 0===o?void 0:o.toLowerCase().indexOf(n))>-1})).map((e=>{var t,i,o;const a=(null===(t=e.feature.attributes)||void 0===t?void 0:t[p])||(null===(i=e.feature.attributes)||void 0===i?void 0:i[h])||(null===(o=e.feature.attributes)||void 0===o?void 0:o.objectid);return{id:a,dsId:s,label:a,data:e.feature}}))};r.push(m)}let n=0;return r.forEach((e=>{n+=e.items.length})),0===n?(0,s.jsx)("div",{className:"esri-item-list__no-matches-message",key:"no-matches"},"No items found"):(0,s.jsx)("div",{key:"item-container"},r.map((e=>this.renderGroup(e))))},this.renderGroup=e=>{if(0!==e.items.length)return(0,s.jsx)("div",{role:"group","aria-label":e.label,className:"esri-item-list__group",key:e.label},(0,s.jsx)("h4",{className:(0,s.classNames)("esri-item-list__group-header",B)},(0,s.jsx)("span",{className:V},e.label)),(0,s.jsx)("div",{className:"esri-item-list__list",role:"listbox"},e.items.map((e=>this.renderItem(e)))))},this.renderItem=e=>{const t=`${e.id}__${e.label}`,{dataSources:i}=this.state;return(0,s.jsx)(r.Button,{role:"option",className:(0,s.classNames)("w-100 border-0 esri-item-list__list-item"),key:t,onClick:()=>{clearTimeout(this.timerFn),this.timerFn=setTimeout((()=>{this.renderFeatureForm(i[e.dsId],{feature:e.data})}),200)},onDoubleClick:()=>{clearTimeout(this.timerFn)}},(0,s.jsx)("div",{className:"esri-item-list__list-item-container"},(0,s.jsx)("span",{className:V},e.label)))},this.getLayerDisplayField=e=>{var t,i,s,o,a,r,n,l;return(null===(t=null==e?void 0:e.layer)||void 0===t?void 0:t.displayField)||(null===(i=null==e?void 0:e.layerDefinition)||void 0===i?void 0:i.displayField)||(null===(o=null===(s=null==e?void 0:e.belongToDataSource)||void 0===s?void 0:s.layerDefinition)||void 0===o?void 0:o.displayField)||(null===(a=null==e?void 0:e.layer)||void 0===a?void 0:a.objectIdField)||(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.objectIdField)||(null===(l=null===(n=null==e?void 0:e.belongToDataSource)||void 0===n?void 0:n.layerDefinition)||void 0===l?void 0:l.objectIdField)||"OBJECTID"},this.getLayerObjectIdField=e=>{var t,i,s;return(null===(t=null==e?void 0:e.layer)||void 0===t?void 0:t.objectIdField)||(null===(s=null===(i=null==e?void 0:e.belongToDataSource)||void 0===i?void 0:i.layerDefinition)||void 0===s?void 0:s.objectIdField)||"OBJECTID"},this.renderFeatureList=(e,t)=>{const{id:i,label:o,theme:a}=this.props,{filterText:n}=this.state,l=`${i}-placeholder`,d=this.refs.formHeaderContainer;return(null==d?void 0:d.innerHTML)&&(d.innerHTML=""),(0,s.jsx)("div",{className:"surface-1 border-0 h-100"},(0,s.jsx)("div",{className:U},(0,s.jsx)("div",{className:T},(0,s.jsx)("h2",{className:B},o),(0,s.jsx)("p",{className:(0,s.classNames)(`text-truncate ${P}`),key:"description",title:t},t))),(0,s.jsx)("div",{className:(0,s.classNames)(`feature-list esri-editor__content ${H}`)},(0,s.jsx)("div",{className:(0,s.classNames)("esri-item-list","esri-widget")},(0,s.jsx)("div",{className:"d-flex align-items-center m-2"},(0,s.jsx)(r.TextInput,{"aria-labelledby":l,className:"w-100",placeholder:this.formatMessage("search"),onChange:this.onFilterChange,value:n,prefix:(0,s.jsx)(L,{color:a.colors.palette.light[800]}),allowClear:!0,title:n})),(0,s.jsx)("div",{key:"content",className:(0,s.classNames)(H)},this.renderListItems(e)))))},this.renderFormEmpty=t=>{const{id:i,label:o,config:a}=this.props,{noDataMessage:r,layersConfig:n,editMode:l}=a,d=this.refs.formHeaderContainer;(null==d?void 0:d.innerHTML)&&(d.innerHTML="");const c=n.length>0,u=l===e.Attribute?this.formatMessage("initAttEmptyMessage"):this.formatMessage("initGeoEmptyMessage"),p=c?r||this.formatMessage("noRecordTips"):u,h=document.getElementById(`edit-container-${i}`);return h&&(null==h||h.classList.add("esri-hidden")),(0,s.jsx)("div",{className:"surface-1 border-0 h-100"},(0,s.jsx)("div",{className:(0,s.classNames)(`editor-white-bg ${U}`)},(0,s.jsx)("div",{className:T},(0,s.jsx)("h2",{className:B},o),c&&(0,s.jsx)("p",{className:(0,s.classNames)(`text-truncate ${P}`),key:"description",title:t},t))),(0,s.jsx)("div",{className:"w-100 text-center edit-blank"},(0,s.jsx)("div",{className:"position-absolute edit-blank-content w-100"},(0,s.jsx)(f,{size:32,className:"placeholder-icon"}),(0,s.jsx)("p",null,p))))},this.renderControlButtons=e=>(0,s.jsx)("div",{className:(0,s.classNames)("flex-row justify-content-between esri-editor__controls"),key:"controls"},e.map((({disabled:t=!1,label:i,type:o,clickHandler:a},r)=>this.renderButton({label:i,class:(0,s.classNames)({"single-buttons":1===e.length},{"multi-buttons":e.length>1},t?"esri-button--disabled":null),type:o,disabled:t,clickHandler:a,key:r})))),this.handleNew=()=>{var e;const{dataSources:t}=this.state,{config:i}=this.props,{layersConfig:s}=i,o=null===(e=s.find((e=>null==e?void 0:e.addRecords)))||void 0===e?void 0:e.id;o&&this.setState({featureFormStep:"new",activeId:o},(()=>{this.renderFeatureForm(t[o])}))},this.handleAdd=()=>{var e;const t=null===(e=this.edit.viewModel)||void 0===e?void 0:e.feature;if(t){const e=this.edit.getValues();t.attributes=e;const i={addFeatures:[t]};this.applyAttributeUpdates(i)}},this.handleSave=()=>{var e,t;null===(t=null===(e=this.edit)||void 0===e?void 0:e.viewModel)||void 0===t||t.submit(),this.setState({attrUpdating:!0})},this.handleDeleteConfirm=()=>{this.setState({delConfirm:!0})},this.cancleDelete=()=>{this.setState({delConfirm:!1})},this.handleDelete=()=>{const e=this.edit.viewModel.feature;if(e){const t={deleteFeatures:[e]};this.applyAttributeUpdates(t)}this.setState({delConfirm:!1})},this.renderButton=e=>(0,s.jsx)(r.Button,{className:e.class,disabled:e.disabled,key:e.key,onClick:e.clickHandler,type:e.type},e.label),this.constructFieldConfig=e=>(null==e?void 0:e.asMutable({deep:!0})).map((e=>(null==e?void 0:e.children)?new w.default({label:e.name,description:e.subDescription||(null==e?void 0:e.description),elements:null==e?void 0:e.children.map((e=>new x.default({fieldName:e.jimuName,label:null==e?void 0:e.alias,description:e.subDescription||(null==e?void 0:e.description),editable:e.editAuthority})))}):new x.default({fieldName:e.jimuName,label:null==e?void 0:e.alias,description:e.subDescription||(null==e?void 0:e.description),editable:e.editAuthority}))),this.editorLayerWatcher=(e,t,s)=>{var o,a,r,n,l,d;const{dataSources:c}=this.state,u=c[t],{addedFeatures:p,updatedFeatures:h,deletedFeatures:m}=e,v=p&&p.length>0,f=h&&h.length>0,g=m&&m.length>0;let b=i.Added;if(v){b=i.Added;const t=null===(a=null===(o=null==e?void 0:e.edits)||void 0===o?void 0:o.addFeatures)||void 0===a?void 0:a[0];if(t){const e=u.buildRecord(t);u.afterAddRecord(e)}}if(f){b=i.Updated;const t=null===(n=null===(r=null==e?void 0:e.edits)||void 0===r?void 0:r.updateFeatures)||void 0===n?void 0:n[0];if(t){const e=u.buildRecord(t);u.afterUpdateRecord(e)}}if(g){b=i.Deleted;const t=null===(d=null===(l=null==e?void 0:e.edits)||void 0===l?void 0:l.deleteFeatures)||void 0===d?void 0:d[0];if(t){const e=u.buildRecord(t);u.afterDeleteRecordById(e.getId())}}(v||f||g)&&this.sendSparkMsg(b,s)},this.setupEditLayerInfos=e=>{var i,s;const{config:o}=this.props,{layersConfig:a}=o,r=[];let n=0;const l=(null===(s=null===(i=e.view)||void 0===i?void 0:i.map)||void 0===s?void 0:s.allLayers)||[],d=l.filter((e=>"feature"===e.type)),c=[];l.forEach((e=>{(null==e?void 0:e.id.includes("jimu-draw-measurements-layer"))&&c.push(e)})),c.length>0&&c.forEach((e=>{r.push({layer:e,enabled:!1,addEnabled:!1,updateEnabled:!1,deleteEnabled:!1})})),d.forEach((e=>R(this,void 0,void 0,(function*(){const i=a.find((t=>t.layerId===e.id)),s=e;if(s)if(i){const{groupedFields:o,addRecords:a,deleteRecords:n,updateRecords:l,updateAttributes:d,updateGeometries:c,layerHonorMode:u,id:p}=i,h=u===t.Webmap,m=yield this.getDsAccessibleInfo(null==e?void 0:e.url),v=yield this.getPrivilege(),f=m||v,g=new S.default({elements:this.constructFieldConfig(o)});r.push(Object.assign(Object.assign({layer:s},h?{}:{formTemplate:g}),{enabled:f&&(a||l||n),addEnabled:a,updateEnabled:l,deleteEnabled:n,attributeUpdatesEnabled:d,geometryUpdatesEnabled:c}));const b=s;b.on("edits",(e=>{this.editorLayerWatcher(e,p,b.title)}))}else r.push({layer:s,enabled:!1,addEnabled:!1,updateEnabled:!1,deleteEnabled:!1});n++,n===d.length&&(this.edit.layerInfos=r)}))))},this.createEditor=e=>{var i,s;let{jimuMapView:o}=this.state;const{useMapWidgetIds:a}=this.props;if(!a||0===a.length)return;if(e&&(o=e),!o)return;const{id:r,config:n}=this.props,{layersConfig:l,selfSnapping:d,featureSnapping:c}=n;if(0===(null==l?void 0:l.length))return;if(void 0!==this.edit&&!e&&this.edit&&!this.edit.destroyed)return void this.setupEditLayerInfos(o);this.destoryEdit();let u=null;const p=document.getElementById(`edit-container-${r}`);p&&p.remove(),u=document&&document.createElement("div"),u.id=`edit-container-${r}`,u.className=`h-100 edit-container-${r}`,this.refs.editContainer.appendChild(u);const h=[];let m=0;const v=d||c,f=()=>{this.edit=new b.default({container:u,view:o.view,layerInfos:h,snappingOptions:{enabled:v,selfEnabled:d,featureEnabled:c},visibleElements:{snappingControls:v,snappingControlsElements:{enabledToggle:!0,selfEnabledToggle:d,featureEnabledToggle:c}}});const e=this;O.default.watch((()=>this.edit.viewModel.state),(t=>{var i,s;if("editing-existing-feature"===t){const t=null===(s=null===(i=e.edit.viewModel)||void 0===i?void 0:i.featureFormViewModel)||void 0===s?void 0:s.feature;if(!t)return;const{dataSources:o,selectionStartWorkflow:a}=e.state,r=t.layer.id,n=l.find((e=>e.layerId===r)),d=o[n.id],c=d.buildRecord(t);a?e.setState({selectionStartWorkflow:!1}):this.editorSelectFeature=!0,d.selectRecordById(c.getId(),c)}}))},g=(null===(s=null===(i=o.view)||void 0===i?void 0:i.map)||void 0===s?void 0:s.allLayers)||[],y=g.filter((e=>"feature"===e.type)),x=[];g.forEach((e=>{(null==e?void 0:e.id.includes("jimu-draw-measurements-layer"))&&x.push(e)})),x.length>0&&x.forEach((e=>{h.push({layer:e,enabled:!1,addEnabled:!1,updateEnabled:!1,deleteEnabled:!1})})),y.forEach((e=>R(this,void 0,void 0,(function*(){const i=l.find((t=>t.layerId===e.id)),s=e;if(s)if(i){const{groupedFields:o,addRecords:a,deleteRecords:r,updateRecords:n,updateAttributes:l,updateGeometries:d,layerHonorMode:c,id:u}=i,p=c===t.Webmap,m=yield this.getDsAccessibleInfo(null==e?void 0:e.url),v=yield this.getPrivilege(),f=m||v,g=new S.default({elements:this.constructFieldConfig(o)});h.push(Object.assign(Object.assign({layer:s},p?{}:{formTemplate:g}),{enabled:f&&(a||n||r),addEnabled:a,updateEnabled:n,deleteEnabled:r,attributeUpdatesEnabled:l,geometryUpdatesEnabled:d}));const b=s;b.on("edits",(e=>{this.editorLayerWatcher(e,u,b.title)}))}else h.push({layer:s,enabled:!1,addEnabled:!1,updateEnabled:!1,deleteEnabled:!1});m++,m===y.length&&f()}))))},this.getFeatureLayer=e=>{var t;const{id:i}=this.props,o=e,a=null===(t=null==e?void 0:e.getDataSourceJson())||void 0===t?void 0:t.isDataInDataSourceInstance;let r;const n=e&&e.getCurrentQueryParams();if(a)return o.load({returnGeometry:!0},{widgetId:i}).then((e=>R(this,void 0,void 0,(function*(){const t=yield Promise.resolve(e);return s.dataSourceUtils.createFeatureLayerByRecords(o,t)})))).catch((e=>{console.error(e)}));if(!y.default)return Promise.resolve(r);if(null==o?void 0:o.itemId){const e=parseInt(o.layerId),t={portalItem:{id:o.itemId,portal:{url:o.portalUrl}},definitionExpression:n.where,layerId:e||void 0};o.url&&(t.url=o.url),r=new y.default(t)}else{if(!o.url)return o.layer?o.load({returnGeometry:!0},{widgetId:i}).then((e=>R(this,void 0,void 0,(function*(){const t=yield Promise.resolve(e);return s.dataSourceUtils.createFeatureLayerByRecords(o,t)})))).catch((e=>{console.error(e)})):Promise.resolve(r);r=new y.default({definitionExpression:n.where,url:o.url})}return a?Promise.resolve(r):r.load().then((()=>R(this,void 0,void 0,(function*(){return yield Promise.resolve(r)})))).catch((e=>{console.error(e)}))},this.getCurrentEditLayer=e=>{const{activeId:t,jimuMapView:i}=this.state,{config:s}=this.props,{layersConfig:o}=s,a=i.view.map.layers,r=o.asMutable({deep:!0}).find((e=>e.id===t)),{id:n}=r;let l=a.find((t=>t.id===e));return l||a.forEach((t=>{const i=null==t?void 0:t.layers;i&&((null==n?void 0:n.includes(t.id))||(null==n?void 0:n.includes(e)))&&(l=i.find((t=>{var i;return(null===(i=t.layerId)||void 0===i?void 0:i.toString())===e||t.id===e})))})),l},this.startWorkFlowWhenAwait=(e,t)=>R(this,void 0,void 0,(function*(){var i,s;const{activeId:o,dataSources:a,editFeatures:r,jimuMapView:n}=this.state,l=this.edit,d=e||r,c=this.flatMapArrayWithView(d,n).length;if(1===c){const e=t||o,r=this.getLayerObjectIdField(a[e]),n=null===(s=null===(i=null==d?void 0:d[e])||void 0===i?void 0:i[0])||void 0===s?void 0:s.feature,c=this.getCurrentEditLayer(null==n?void 0:n.layer.id);if(!c)return;const u=new _.default({where:`${r} = ${n.attributes[r]}`,outFields:["*"],returnGeometry:!0});c.queryFeatures(u).then((e=>{const t=null==e?void 0:e.features[0];null==l||l.startUpdateWorkflowAtFeatureEdit(t)})).catch((e=>{console.error(e)}))}else if(c>1){const e=()=>R(this,void 0,void 0,(function*(){var e;let t=[];const i=[];for(const t in d){const s=this.getLayerObjectIdField(a[t]),o=null==d?void 0:d[t];if((null==o?void 0:o.length)>0){const a=`${s} IN (${d[t].map((e=>(null==e?void 0:e.feature).attributes[s])).join()})`,r=null===(e=o[0])||void 0===e?void 0:e.feature,n=this.getCurrentEditLayer(null==r?void 0:r.layer.id),l=new _.default({where:a,outFields:["*"],returnGeometry:!0});i.push(n.queryFeatures(l))}}const s=yield Promise.all(i);return Object.keys(d).forEach(((e,i)=>{var o;t=t.concat((null===(o=s[i])||void 0===o?void 0:o.features)||[])})),t})),t=yield e();null==l||l.startUpdateWorkflowAtMultipleFeatureSelection(t)}else(null==l?void 0:l.activeWorkflow)&&(null==l||l.cancelWorkflow())})),this.idsArrayEquals=(e,t)=>{var i,s;if(!t)return!1;if((null===(i=this.selectedIds[e])||void 0===i?void 0:i.length)!==t.length)return!1;let o=!0;return null===(s=this.selectedIds[e])||void 0===s||s.forEach(((e,i)=>{e!==t[i]&&(o=!1)})),o},this.onDataSourceSelectedChange=(t,i)=>R(this,void 0,void 0,(function*(){var s,o;if(this.idsArrayEquals(t,i))return;if(this.editorSelectFeature)return void(this.editorSelectFeature=!1);const a=this.currentRequestId+1;this.currentRequestId++,this.selectedIds[t]=i;const{config:r}=this.props,{editMode:n,layersConfig:l}=r,{activeId:d,dataSources:c,editFeatures:u,jimuMapView:p}=this.state;let h=t;const m=Object.assign({},u);if(!c[h]){const e=this.dsManager.getDataSource(h);e&&(c[h]=e)}const v=null===(s=c[h])||void 0===s?void 0:s.getSelectedRecords();m[h]=v;const f=this.getInLayersConfigFeatures(m,l),g=this.flatMapArray(f).length,b=g>1?"list":1===g?"form":"empty";if(0===(null==v?void 0:v.length)&&1===g){let e;for(const t in m)1===(null===(o=null==m?void 0:m[t])||void 0===o?void 0:o.length)&&(e=t);h=e}if(n===e.Geometry&&0===(null==v?void 0:v.length)){const e=this.edit;(null==e?void 0:e.activeWorkflow)&&(null==e||e.cancelWorkflow())}const y=d!==t;if(n===e.Attribute&&this.setState({editFeatures:m,activeId:h,featureFormStep:b},(()=>{this.createEditForm(h,y,a)})),n===e.Geometry){if(!p)return;this.setState({editFeatures:m,activeId:t,selectionStartWorkflow:!0},(()=>{this.startWorkFlowWhenAwait(m,h)}))}})),this.onIsDataSourceNotReady=(e,t)=>{this.setState((i=>{var o;if(!(null===(o=i.dataSources[e])||void 0===o?void 0:o.getDataSourceJson().isOutputFromWidget))return;const a=Object.assign({},i.outputDataSourceIsNotReady);return a[e]=t===s.DataSourceStatus.NotReady,{outputDataSourceIsNotReady:a}}))},this.onCreateDataSourceCreatedOrFailed=(e,t)=>{this.setState((i=>{const s=Object.assign({},i.dataSources);return s[e]=t,{dataSources:s}}))},this.onDataSourceVersionChange=t=>{const{config:i}=this.props,{editMode:s}=i;s===e.Attribute&&this.setState({activeId:t},(()=>{this.createEditForm(t,!0)}))},this.onLayerChange=e=>{var t;const{dataSources:i}=this.state,s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.setState({activeId:s},(()=>{this.renderFeatureForm(i[s])}))},this.handleBack=()=>{const{id:e,config:t}=this.props,{layersConfig:i}=t,{editFeatures:s}=this.state,o=this.getInLayersConfigFeatures(s,i),a=this.flatMapArray(o).length;a<=1?this.setState({featureFormStep:"empty"}):a>1&&this.setState({featureFormStep:"list"}),document.getElementById(`edit-container-${e}`).classList.add("esri-hidden")},this.getInLayersConfigFeatures=(e,t)=>{const i=Object.assign({},e);return Object.keys(e).forEach((e=>{t.some((t=>e.includes(t.id)))||delete i[e]})),i},this.state={jimuMapView:void 0,dataSources:{},outputDataSourceIsNotReady:{},editFeatures:{},activeId:void 0,featureFormStep:"empty",filterText:"",formEditable:!1,delConfirm:!1,attrUpdating:!1,formChange:!1,formSubmittable:!0,loading:!1,selectionStartWorkflow:!1},this.dsManager=s.DataSourceManager.getInstance(),this.removeLayerOnce=!1,this.selectedIds={},this.currentRequestId=0,this.timerFn=null,this.editorSelectFeature=!1}componentDidUpdate(i,o){var a,r,n,l,d,c,u,p,h,m,v,f,g;const{id:b,config:y}=this.props,{editFeatures:x,dataSources:w,activeId:j}=this.state,{editMode:_,layersConfig:F,selfSnapping:I,featureSnapping:E}=y,{config:C}=i,{editMode:M,layersConfig:N,selfSnapping:D,featureSnapping:O}=C,k=!s.lodash.isDeepEqual(N,F);if(0===F.length&&this.destoryEdit(),M!==_&&this.destoryEdit(),k)if(_===e.Geometry)this.createEditor();else{const e=this.edit,i=Object.keys(x),s=F.some((e=>i.includes(e.id))),o=this.getInLayersConfigFeatures(x,F),u=this.flatMapArray(o).length;if((null==e?void 0:e.formTemplate)&&0!==F.length){const i=F.asMutable({deep:!0}).find((e=>e.id===j));if((null==i?void 0:i.layerHonorMode)===t.Webmap){const t=w[j];e.formTemplate=null===(a=null==t?void 0:t.layer)||void 0===a?void 0:a.formTemplate}else if(null==e?void 0:e.formTemplate){const t=this.constructFormElements(),i=new S.default({elements:t});e.formTemplate=i}const s=null===(r=null==e?void 0:e.formTemplate)||void 0===r?void 0:r.elements;0===(null==s?void 0:s.length)?null===(n=document.getElementById(`edit-container-${b}`))||void 0===n||n.classList.add("esri-hidden"):0!==u&&(null===(l=document.getElementById(`edit-container-${b}`))||void 0===l||l.classList.remove("esri-hidden"))}else if(0!==F.length&&s)if(1===u){const e=null==w?void 0:w[i[0]],t=null===(d=e.getSelectedRecords())||void 0===d?void 0:d[0];if(!t)return;this.renderFeatureForm(e,t)}else(u>1||0===u)&&(null===(c=document.getElementById(`edit-container-${b}`))||void 0===c||c.classList.add("esri-hidden"))}if(I!==D||E!==O){const t=I||E;this.edit&&_===e.Geometry&&(this.edit.visibleElements={snappingControls:t,snappingControlsElements:{enabledToggle:!0,selfEnabledToggle:I,featureEnabledToggle:E}})}if((null===(p=null===(u=this.props)||void 0===u?void 0:u.stateProps)||void 0===p?void 0:p.removeLayerFlag)&&!this.removeLayerOnce){this.props.dispatch(s.appActions.widgetStatePropChange(b,"removeLayerFlag",!1));const e=Object.assign({},x);Object.keys(e).forEach((t=>{F.find((e=>e.id===t))||delete e[t]}));const t=this.getInLayersConfigFeatures(e,F),i=this.flatMapArray(t),o=i.length,a=o>1?"list":1===o?"form":"empty";if("form"===a){this.removeLayerOnce=!0;const e=null===(v=null===(m=null===(h=i[0])||void 0===h?void 0:h.dataSource)||void 0===m?void 0:m.belongToDataSource)||void 0===v?void 0:v.id;null===(f=document.getElementById(`edit-container-${b}`))||void 0===f||f.classList.remove("esri-hidden"),this.renderFeatureForm(w[e],i[0])}else"list"===a&&(null===(g=document.getElementById(`edit-container-${b}`))||void 0===g||g.classList.add("esri-hidden"));this.setState({editFeatures:e,featureFormStep:a})}}componentWillUnmount(){const{config:t}=this.props,{editMode:i}=t,s=i===e.Geometry;if(this.edit&&!this.edit.destroyed&&s){const e=this.edit;(null==e?void 0:e.cancelWorkflow)&&e.cancelWorkflow()}}render(){var t,i;const{activeId:a,editFeatures:d,featureFormStep:c,formEditable:p,delConfirm:h,attrUpdating:m,formChange:v,formSubmittable:f,loading:g}=this.state,{id:b,theme:y,config:S,useDataSources:x,useMapWidgetIds:w}=this.props,{editMode:j,description:_,layersConfig:F}=S,I=F.asMutable({deep:!0}).find((e=>e.id===a)),E=null!==(t=null==I?void 0:I.updateRecords)&&void 0!==t&&t,C=null!==(i=null==I?void 0:I.deleteRecords)&&void 0!==i&&i,M=this.getInLayersConfigFeatures(d,F),N=this.flatMapArray(M).length,O=F.some((e=>null==e?void 0:e.addRecords)),k=[];E&&k.push({label:this.formatMessage("update"),type:"primary",disabled:!(v&&f),clickHandler:this.handleSave}),C&&k.push({label:this.formatMessage("delete"),type:"default",clickHandler:this.handleDeleteConfirm});const A=[{label:this.formatMessage("add"),type:"primary",disabled:!1,clickHandler:this.handleAdd}],L=j===e.Attribute,R=L&&("form"===c||"new"===c)||!L&&0!==F.length,T=L&&"list"!==c&&"empty"!==c||!L&&0!==F.length,P=L&&"list"!==c&&"empty"!==c;return L||w&&0!==w.length?(0,s.jsx)("div",{className:(0,s.classNames)(`jimu-widget widget-edit esri-widget edit-widget-${b}`),css:n(y,b,c,N,L)},L&&m&&(0,s.jsx)("div",{className:"esri-editor__progress-bar"}),(0,s.jsx)("div",{className:(0,s.classNames)("edit-con",{"surface-1 border-0":R,"h-100":T})},(0,s.jsx)("div",{ref:"formHeaderContainer",className:(0,s.classNames)({"form-header-container":P})}),(0,s.jsx)("div",{ref:"editContainer",className:(0,s.classNames)({"h-100":!L,"attr-height":L&&T})},L&&"new"===c&&(0,s.jsx)("div",{className:"layer-selector"},(0,s.jsx)("label",{className:"esri-feature-form__label"},this.formatMessage("selectLayer")),(0,s.jsx)(r.Select,{value:a,onChange:this.onLayerChange},F.filter((e=>e.addRecords)).map((e=>(0,s.jsx)("option",{key:e.id,value:e.id},e.name)))))),L&&N>0&&"form"===c&&p&&(null==k?void 0:k.length)>0&&this.renderControlButtons(k),L&&"new"===c&&this.renderControlButtons(A)),!L&&(0,s.jsx)(o.JimuMapViewComponent,{useMapWidgetId:null==w?void 0:w[0],onActiveViewChange:this.handleActiveViewChange}),L&&N>1&&"list"===c&&this.renderFeatureList(M,_),g&&(0,s.jsx)("div",{className:"esri-feature-table__loader-container"},(0,s.jsx)("div",{className:"esri-feature-table__loader",key:"loader"})),L&&("empty"===c||0===F.length)&&this.renderFormEmpty(_),!L&&0===F.length&&this.renderFormEmpty(),L&&h&&(0,s.jsx)(s.React.Fragment,null,(0,s.jsx)("div",{className:"confirm-scrim"}),(0,s.jsx)("div",{className:"esri-editor__prompt--danger"},(0,s.jsx)("div",{className:"esri-editor__prompt__header"},(0,s.jsx)(D,null),(0,s.jsx)("h4",{className:(0,s.classNames)("esri-widget__heading","esri-editor__prompt__header__heading")},this.formatMessage("deleteRecord"))),(0,s.jsx)("div",{className:"esri-editor__prompt__message"},this.formatMessage("deleteRecordTips")),(0,s.jsx)("div",{className:"esri-editor__prompt__divider"}),(0,s.jsx)("div",{className:"esri-editor__prompt__actions"},(0,s.jsx)(r.Button,{className:(0,s.classNames)(W,"esri-editor__warning-option--primary"),onClick:this.cancleDelete},this.formatMessage("keepRecord")),(0,s.jsx)(r.Button,{className:(0,s.classNames)(W,"esri-editor__warning-option--positive"),onClick:this.handleDelete},this.formatMessage("delete"))))),L&&O&&"form"!==c&&"new"!==c&&(0,s.jsx)(r.Button,{size:"sm",icon:!0,type:"tertiary",className:"add-feature-btn",onClick:this.handleNew,title:this.formatMessage("addFeature"),"aria-label":this.formatMessage("addFeature")},(0,s.jsx)(u,{className:"mr-1"}),this.formatMessage("add")),(0,s.jsx)("div",{className:"ds-container"},null==x?void 0:x.map(((e,t)=>(0,s.jsx)(l,{key:t,useDataSource:e,onIsDataSourceNotReady:this.onIsDataSourceNotReady,onDataSourceSelectedChange:this.onDataSourceSelectedChange,onCreateDataSourceCreatedOrFailed:this.onCreateDataSourceCreatedOrFailed,onDataSourceVersionChange:this.onDataSourceVersionChange}))))):(0,s.jsx)(r.WidgetPlaceholder,{widgetId:b,autoFlip:!0,iconSize:"large",style:{position:"absolute",left:0,top:0},icon:$,"data-testid":"editPlaceholder"})}}function G(e){m.p=e}Z.mapExtraStateProps=(e,t)=>{var i;return{appMode:null===(i=null==e?void 0:e.appRuntimeInfo)||void 0===i?void 0:i.appMode}},Z.versionManager=C})(),v})())}}}));