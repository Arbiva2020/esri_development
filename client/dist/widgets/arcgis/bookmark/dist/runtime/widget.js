System.register(["jimu-core","jimu-ui","jimu-core/react","jimu-arcgis","jimu-layouts/layout-runtime"],(function(e,t){var i={},o={},a={},s={},r={};return{setters:[function(e){i.AppMode=e.AppMode,i.BaseVersionManager=e.BaseVersionManager,i.BrowserSizeMode=e.BrowserSizeMode,i.React=e.React,i.TransitionContainer=e.TransitionContainer,i.appActions=e.appActions,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.jsx=e.jsx,i.polished=e.polished,i.utils=e.utils},function(e){o.Button=e.Button,o.Card=e.Card,o.CardBody=e.CardBody,o.Dropdown=e.Dropdown,o.DropdownButton=e.DropdownButton,o.DropdownItem=e.DropdownItem,o.DropdownMenu=e.DropdownMenu,o.ImageFillMode=e.ImageFillMode,o.ImageWithParam=e.ImageWithParam,o.NavButtonGroup=e.NavButtonGroup,o.Select=e.Select,o.TextInput=e.TextInput,o.defaultMessages=e.defaultMessages},function(e){a.Fragment=e.Fragment},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){r.LayoutEntry=e.LayoutEntry,r.ViewVisibilityContext=e.ViewVisibilityContext,r.ViewportVisibilityContext=e.ViewportVisibilityContext}],execute:function(){e((()=>{var e={74138:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.25 5.621a.6.6 0 0 1 .933-.5l3.568 2.38a.6.6 0 0 1 0 .998l-3.568 2.38a.6.6 0 0 1-.933-.5V5.62Z" clip-rule="evenodd"></path></svg>'},25603:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2.556 4.75.297 9.75c0 .398.164.78.455 1.06.292.282.688.44 1.1.44h7.184c.412 0 .808-.158 1.1-.44.291-.28.455-.662.455-1.06l.297-9.75H2.556Zm4.333 8.222a.778.778 0 1 1-1.556 0V7.778a.778.778 0 1 1 1.556 0v5.194Zm3.667 0a.778.778 0 1 1-1.556 0V7.778a.778.778 0 1 1 1.556 0v5.194ZM12.058 2.5a1 1 0 0 1-.766-.357l-.659-.786A1 1 0 0 0 9.867 1H6.133a1 1 0 0 0-.766.357l-.659.786a1 1 0 0 1-.766.357H2a1 1 0 0 0-1 1V4h14v-.5a1 1 0 0 0-1-1h-1.942Z"></path></svg>'},20864:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13 6.133c0 .598-.28 1.46-.825 2.51-.53 1.02-1.247 2.102-1.981 3.102A45.718 45.718 0 0 1 8 14.492a48.01 48.01 0 0 1-2.194-2.747c-.734-1-1.451-2.081-1.98-3.102C3.28 7.593 3 6.731 3 6.133 3 3.277 5.26 1 8 1s5 2.277 5 5.133Zm1 0c0 2.685-3.768 7.311-5.332 9.115C8.258 15.722 8 16 8 16s-.258-.279-.668-.752C5.768 13.444 2 8.819 2 6.133 2 2.746 4.686 0 8 0s6 2.746 6 6.133ZM10 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg>'},59788:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" clip-rule="evenodd"></path></svg>'},11407:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" clip-rule="evenodd"></path></svg>'},3273:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" clip-rule="evenodd"></path></svg>'},96009:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" clip-rule="evenodd"></path></svg>'},57986:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5 1H4v14h1V1Zm7 0h-1v14h1V1Z" clip-rule="evenodd"></path></svg>'},34750:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z"></path></svg>'},25153:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.5-.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1-4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8A.5.5 0 0 1 5 8Zm.5 3.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Z" clip-rule="evenodd"></path></svg>'},42231:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjAwMDAwMCwgLTY1Ny4wMDAwMDApIiBmaWxsPSIjQzVDNUM1Ij4NCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2Ny4wMDAwMDAsIDY1Ny4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTczLjcxNDI4Niw4OSBMMjU2LDE5OCBMMCwxOTggTDY0LDExNi4yNSBMMTA5LjcxNDI4NiwxNzAuNzUgTDE3My43MTQyODYsODkgWiBNOTksNTggQzEwNy44MzY1NTYsNTggMTE1LDY1LjE2MzQ0NCAxMTUsNzQgQzExNSw4Mi44MzY1NTYgMTA3LjgzNjU1Niw5MCA5OSw5MCBDOTAuMTYzNDQ0LDkwIDgzLDgyLjgzNjU1NiA4Myw3NCBDODMsNjUuMTYzNDQ0IDkwLjE2MzQ0NCw1OCA5OSw1OCBaIi8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},26826:e=>{"use strict";e.exports=s},48891:e=>{"use strict";e.exports=i},51315:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=o}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var l={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(l),n.d(l,{Widget:()=>U,__set_webpack_public_path__:()=>K,default:()=>Z});var e,t,i,o,a,s,r=n(48891),d=n(30726);!function(e){e.Horizon="HORIZON",e.Vertical="VERTICAL"}(e||(e={})),function(e){e.Scroll="SCROLL",e.Paging="PAGING"}(t||(t={})),function(e){e.All="ALL",e.Selected="SELECTED"}(i||(i={})),function(e){e.Card="CARD",e.List="LIST",e.Slide1="SLIDE1",e.Slide2="SLIDE2",e.Slide3="SLIDE3",e.Gallery="GALLERY",e.Navigator="NAVIGATOR",e.Custom1="CUSTOM1",e.Custom2="CUSTOM2"}(o||(o={})),function(e){e.Default="DEFAULT",e.Regular="REGULAR",e.Hover="HOVER"}(a||(a={})),function(e){e.Snapshot="SNAPSHOT",e.Custom="CUSTOM"}(s||(s={}));const p={_widgetLabel:"Bookmark",_widgetDescription:"A widget identify specific geographic locations and save to refer later.",addBookmark:"Add bookmark",layoutTips:"This is the customizable area",bookmarkList:"Bookmark list",graphicLayer:"Bookmark graphics layer"};var c=n(51315),m=n(26826),u=n(74758);class g extends r.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.2.0",description:"1.2.0",upgrader:e=>{let t=e;return t.bookmarks?(t.bookmarks.forEach(((e,i)=>{Object.keys(e.layersConfig||{}).forEach((o=>{const a=e.layersConfig[o];t=t.setIn(["bookmarks",i,"layersConfig",o],{visibility:a})}))})),t):t}}]}}const h=new g;var y=n(25153),v=n.n(y);const k=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:v()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var x=n(74138),b=n.n(x);const w=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:b()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var f=n(57986),j=n.n(f);const N=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:j()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var S=n(20864),I=n.n(S);const C=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:I()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var M=n(34750),O=n.n(M);const P=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:O()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var B=n(59788),A=n.n(B);const L=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:A()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var V=n(96009),T=n.n(V);const R=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:T()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var z=n(3273),$=n.n(z);const E=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:$()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var D=n(11407),F=n.n(D);const G=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:F()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var H=n(25603),W=n.n(H);const J=e=>{const t=window.SVG,{className:i}=e,o=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(i[o[a]]=e[o[a]])}return i}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",i);return t?r.React.createElement(t,Object.assign({className:a,src:W()},o)):r.React.createElement("svg",Object.assign({className:a},o))};class U extends r.React.PureComponent{constructor(l){var m;super(l),this.Graphic=null,this.GraphicsLayer=null,this.Extent=null,this.Viewpoint=null,this.Basemap=null,this.autoOffCondition=e=>{var i,o;const{config:a,appMode:s,browserSizeMode:n}=this.props,{pageStyle:l,autoPlayAllow:d,autoInterval:p,autoLoopAllow:c}=a,m=n!==e.browserSizeMode,u=p!==(null===(i=e.config)||void 0===i?void 0:i.autoInterval)||c!==(null===(o=e.config)||void 0===o?void 0:o.autoLoopAllow);return s===r.AppMode.Design||l===t.Scroll||!d||u||m},this.getRuntimeUuid=()=>{const{id:e,mapWidgetId:t}=this.props;return`${r.utils.getLocalStorageAppKey()}-${e}-${t||"default"}-RtBmArray`},this.settingLayout=()=>{const{layoutId:e,layoutItemId:t,id:i,selectionIsSelf:o}=this.props,{isSetLayout:a}=this.state;e&&i&&t&&!a&&o&&(this.props.dispatch(r.appActions.widgetStatePropChange(i,"layoutInfo",{layoutId:e,layoutItemId:t})),this.setState({isSetLayout:!0}))},this.formatMessage=(e,t)=>{const i=Object.assign({},p,d.defaultMessages,r.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.isEditing=()=>{const{appMode:e,config:t,selectionIsSelf:i,selectionIsInSelf:o}=this.props;return!!window.jimuConfig.isInBuilder&&(i||o)&&window.jimuConfig.isInBuilder&&e!==r.AppMode.Run&&t.isTemplateConfirm},this.handleRuntimeAdd=()=>{this.rtBookmarkId++;const{jimuMapView:e}=this.state;if(!e)return;const t=e.view,{appMode:i,id:o}=this.props;if(i===r.AppMode.Run){const i=t.map.layers.toArray(),a=JSON.parse(JSON.stringify(t.map)).operationalLayers,s=[];i.forEach((e=>{for(const t in a){const i=a[t];if(e.id===i.id){s.push(e);break}}}));const n=this.getLayersConfig(s),l=`RtBm-${r.utils.getUUID()}`,d={id:l,name:`${this.formatMessage("_widgetLabel")}(${this.rtBookmarkId})`,title:`${this.formatMessage("_widgetLabel")}-${this.rtBookmarkId}`,type:t.type,extent:t.extent.toJSON(),viewpoint:t.viewpoint.toJSON(),showFlag:!0,runTimeFlag:!0,mapViewId:e.id,mapDataSourceId:e.dataSourceId,layersConfig:n},p=this.getRuntimeUuid(),c=JSON.parse(r.utils.readLocalStorage(p))||[];r.utils.setLocalStorage(p,JSON.stringify(c.concat(`${o}-${l}`))),r.utils.setLocalStorage(`${o}-${l}`,JSON.stringify(d)),this.setState({runtimeBmArray:c.concat(`${o}-${l}`)})}},this.getLayersConfig=e=>{const t=(e,i)=>(e.forEach((e=>{i[e.id]={layers:{}};const o=void 0===(null==e?void 0:e.visibility)&&!!(null==e?void 0:e.visible);i[e.id].visibility=o;const a=e.layers||e.sublayers||e.allSublayers;a&&a.length>0&&t(a,i[e.id].layers)})),i);return t(e,{})},this.showLayersConfig=(e,t,i=[],o=!1)=>{if(o)return;const a=(e,t)=>{e.forEach((e=>{var o,s,r;const n=!(i.findIndex((t=>t.id===e.id))>-1);e.visible=void 0===(null===(o=t[e.id])||void 0===o?void 0:o.visibility)?n:null===(s=t[e.id])||void 0===s?void 0:s.visibility;const l=e.layers||e.sublayers||e.allSublayers,d=null===(r=null==t?void 0:t[e.id])||void 0===r?void 0:r.layers;l&&l.length>0&&d&&Object.keys(d).length>0&&a(l.toArray(),d)}))};a(e,t)},this.showMapOrgLayer=(e,t)=>{const i=(e,t)=>{e.forEach((e=>{for(const i in t){const o=t[i];if(e.visible=!1,e.id===o.id){e.visible=!0;break}}e.layers&&e.layers.length>0&&i(e.layers.toArray(),t)}))};i(e,t)},this.onViewBookmark=e=>{var t,i;if(!e)return;const{jimuMapView:o,viewGroup:a}=this.state,{id:s,useMapWidgetIds:n}=this.props,l=(null===(i=null===(t=this.props)||void 0===t?void 0:t.stateProps)||void 0===i?void 0:i.activeBookmarkId)||0;e&&!e.runTimeFlag&&l!==e.id&&this.props.dispatch(r.appActions.widgetStatePropChange(s,"activeBookmarkId",e.id)),n&&0!==n.length&&(0,r.getAppStore)().dispatch(r.appActions.requestAutoControlMapWidget(n[0],s)),o&&(e&&o.dataSourceId!==e.mapDataSourceId?a&&a.switchMap().then((()=>{this.viewBookmark(e)})):this.viewBookmark(e))},this.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e)&&"[object Number]"===Object.prototype.toString.call(e),this.viewBookmark=e=>{var t,o,a;const{appMode:s,config:n}=this.props,{jimuMapView:l}=this.state,{extent:d,viewpoint:p}=e,c={duration:1e3};if(s===r.AppMode.Run&&l&&l.view){"3d"===l.view.type?l.view.goTo({target:this.Viewpoint.fromJSON(p)},c):l.view.goTo({extent:this.Extent.fromJSON(d)},c),e.baseMap&&(l.view.map.basemap=this.Basemap.fromJSON(e.baseMap));const s=null===(t=null==e?void 0:e.ground)||void 0===t?void 0:t.transparency;(null==e?void 0:e.ground)&&this.isNumber(s)?l.view.map.ground.opacity=(100-s)/100:l.view.map.ground.opacity=this.mapOpacity;const r=l.view.map.layers.toArray(),m=(null===(a=null===(o=l.view.map)||void 0===o?void 0:o.resourceInfo)||void 0===a?void 0:a.operationalLayers)||[],u=l.dataSourceId!==e.mapDataSourceId;e.mapOriginFlag?this.showMapOrgLayer(r,e.visibleLayers):this.showLayersConfig(r,e.layersConfig,m,u);const g=e.graphics&&e.graphics.length>0;if(this.graphicsLayerCreated[l.id]){const t=l.view.map.findLayerById(this.graphicsLayerId[l.id]);n.displayType===i.Selected?(null==t||t.removeAll(),g&&t&&e.graphics.forEach((e=>{t.graphics.push(this.Graphic.fromJSON(e))}))):this.graphicsPainted[l.id][e.id]?g&&(e.graphics.forEach((e=>{const i=t.graphics.find((t=>t.attributes.id===e.attributes.id));t.remove(i)})),e.graphics.forEach((e=>{t.graphics.push(this.Graphic.fromJSON(e))}))):(g&&e.graphics.forEach((e=>{t.graphics.push(this.Graphic.fromJSON(e))})),this.graphicsPainted[l.id][e.id]=!0)}else{const t=(new Date).getTime(),i=`bookmark-layer-${l.id}-${t}`,o=new this.GraphicsLayer({id:i,listMode:"hide",title:this.formatMessage("graphicLayer"),elevationInfo:{mode:"relative-to-scene"}});g&&e.graphics.forEach((e=>{o.graphics.push(this.Graphic.fromJSON(e))})),l.view.map.add(o),this.graphicsPainted[l.id]={},this.graphicsPainted[l.id][e.id]=!0,this.graphicsLayerId[l.id]=o.id,this.graphicsLayerCreated[l.id]=!0}}},this.getStyle=i=>{const{id:a,appMode:s,config:l}=this.props,d=[o.Custom1,o.Custom2];return r.css`
      ${"&.bookmark-widget-"+a} {
        overflow: ${window.jimuConfig.isInBuilder&&s!==r.AppMode.Run?"hidden":"auto"};
        height: 100%;
        width: 100%;
        .bookmark-title-height{
          height: 45px;
        }
        .bookmark-list-height {
          height: calc(100% - 45px);
          overflow-y: ${window.jimuConfig.isInBuilder&&s!==r.AppMode.Run?"hidden !important":"auto"};
        }
        .bookmark-title {
          flex-grow: 1;
          padding: 0 15px;
          line-height: 45px;
          font-size: ${r.polished.rem(16)};
        }
        .bookmark-btn-container {
          width: 32px;
          height: 32px;
        }
        .bookmark-btn {
          font-weight: bold;
          font-size: ${r.polished.rem(12)};
        }
        .bookmark-view-auto {
          overflow-y: ${window.jimuConfig.isInBuilder&&s!==r.AppMode.Run&&!d.includes(l.templateType)?"hidden":"auto"};
        }
        .gallery-card-add {
          cursor: pointer;
          min-width: 200px;
          height: 189px;
          display: grid;
          border: 1px solid ${i.colors.secondary};
          background: ${i.colors.white};
          margin: ${l.direction===e.Horizon?r.polished.rem(12):r.polished.rem(16)};
        }
        .card-add {
          cursor: pointer;
          height: 159px;
          display: inline-flex;
          border: 1px solid ${i.colors.palette.light[400]};
          background: ${i.colors.white};
          width: 150px;
          margin: 15px 10px;
          position: relative;
          .add-placeholder {
            height: 120px;
          }
        }
        .list-add {
          cursor: pointer;
          height: 37px;
          display: inline-flex;
          border: 1px solid ${i.colors.palette.light[400]};
          background: ${i.colors.white};
          width: calc(100% - 30px);
          margin: 0 15px 15px;
          position: relative;
        }
        .gallery-add-icon {
          position: relative;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin-top: -${r.polished.rem(10)};
          margin-left: -${r.polished.rem(10)};
        }
        .bookmark-container {
          ${l.templateType!==o.Card&&l.templateType!==o.List&&"height: 100%"};
          width: 100%;
          color: ${i.colors.black};
          .bookmark-runtimeSeparator {
            margin: 10px 15px 15px;
            border: 1px dashed ${i.colors.secondary};
          }
          .widget-card-content {
            padding: 8px 9px !important;
          }
          .bookmark-card-col {
            width: 170px;
            padding: 10px 10px 0;
            position: relative;
            .widget-card-image-inner {
              width: 148px;
              height: 120px;
            }
            .card-inner {
              transition: all 0.5s;
            }
          }
          .bookmark-list-col {
            padding: ${r.polished.rem(8)} 0;
            align-items: center !important;
            margin: 8px 15px 0;
          }
          .bookmark-pointer {
            cursor: pointer;
            &:hover {
              background: ${i.colors.palette.light[200]};
            }
          }
          .bookmark-only-pointer {
            cursor: pointer;
          }
          .bookmark-custom-pointer {
            cursor: pointer;
            border: 1px solid ${i.colors.light};
            width: 100%;
            ${l.direction===e.Vertical&&"position: absolute;"}
            ${l.direction===e.Vertical&&`height: calc(100% - ${l.space}px) !important;`}
          }
          .layout-height{
            height: ${l.pageStyle===t.Paging?"calc(100% - 49px)":"100%"} !important;
          }
          .border-none {
            border: none !important;
          }
          .runtime-bookmarkCard {
            .runtimeBookmarkCard-upload,
            .runtimeBookmarkCard-operation {
              display: none;
            }
            &:hover {
              .runtimeBookmarkCard-operation {
                display: block;
                position: absolute;
                right: 10px;
                background: ${i.colors.secondary};
                opacity: 0.9;
              }
              .runtimeBookmarkCard-upload {
                display: block;
                position: absolute;
                right: 10px;
                bottom: 48px;
                background: ${i.colors.secondary};
                opacity: 0.9;
              }
            }
          }
          .runtime-bookmarkList {
            display: inline-block !important;
            width: calc(100% - 30px);
            padding: ${r.polished.rem(4)} 0;
            margin: 0 15px 6px;
            align-items: center !important;
            .runtimeBookmarkList-operation {
              margin-right: 15px;
              display: none;
              height: 28px;
            }
            &:hover {
              .runtimeBookmarkList-operation {
                display: block;
              }
            }
          }
          .runtime-title-con {
            padding: 4px 0 !important;
          }
          .runtime-title {
            width: auto;
            border: none;
            background-color: transparent;
            display: inline-block !important;
            height: 29px;
            &:focus {
              border: 1px solid ${i.colors.secondary};
            }
            &:hover {
              border: 1px solid ${i.colors.secondary};
            }
          }
          .suspension-drop-btn{
            border-radius: 12px;
            border: 0;
          }
          .suspension-drop-placeholder{
            width: 32px;
          }
          .suspension-nav-placeholder1{
            height: 32px;
            width: 60px;
          }
          .suspension-nav-placeholder2{
            height: 24px;
            width: 100px;
          }
          .suspension-noborder-btn{
            border: 0;
            padding-left: ${r.polished.rem(7)};
          }
          .suspension-tools-top {
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: 1;
            .jimu-dropdown {
              width: 32px;
            }
            .caret-icon {
              margin-left: ${r.polished.rem(2)};
            }
          }
          .suspension-top-number {
            position: absolute;
            top: 5px;
            right: 5px;
            background: ${i.colors.white};
            border-radius: 10px;
            opacity: 0.8;
            width: 40px;
            text-align: center;
            z-index: 1;
          }
          .suspension-tools-middle {
            display: flex;
            width: 100%;
            padding: 0 ${r.polished.rem(8)};
            position: absolute;
            top: 50%;
            margin-top: ${l.direction===e.Horizon?"-13px":"-26px"};
            z-index: 1;
            .middle-nav-group button {
              background: ${i.colors.white};
              opacity: 0.8;
              border-radius: 50%;
            }
          }
          .suspension-middle-play {
            position: absolute;
            right: 5px;
            bottom: 20px;
            z-index: 2;
          }
          .suspension-navbar {
            display: flex;
            width: 100%;
            padding: 0 ${r.polished.rem(8)};
            position: absolute;
            top: 50%;
            z-index: 1;
            .navbar-btn-pre{
              position: absolute;
              left: 5px;
              border-radius: 50%;
            }
            .navbar-btn-next{
              position: absolute;
              right: 5px;
              border-radius: 50%;
            }
          }
          .suspension-navbar-verticle {
            display: flex;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            z-index: 1;
            margin-left: -13px;
            .navbar-btn-pre{
              position: absolute;
              top: 5px;
              border-radius: 50%;
            }
            .navbar-btn-next{
              position: absolute;
              bottom: 5px;
              border-radius: 50%;
            }
          }
          .suspension-tools-text {
            display: flex;
            width: 100%;
            padding: ${r.polished.rem(8)};
            position: absolute;
            border-top: 1px solid ${i.colors.secondary};
            bottom: 0;
            z-index: 1;
            .jimu-dropdown {
              width: 32px;
            }
            .caret-icon {
              margin-left: ${r.polished.rem(2)};
            }
            .nav-btn-text {
              width: 100px;
            }
          }
          .suspension-tools-bottom {
            display: flex;
            width: 100%;
            padding: 0 ${r.polished.rem(8)};
            position: absolute;
            bottom: 5px;
            z-index: 1;
            .jimu-dropdown {
              width: 32px;
            }
            .caret-icon {
              margin-left: ${r.polished.rem(3)};
            }
            .scroll-navigator {
              .btn {
                border-radius: ${i.borderRadiuses.circle};
              }
            }
            .nav-btn-bottom {
              width: ${l.autoPlayAllow?"100px":"60px"};
              border-radius: 16px;
              opacity: 0.8;
              background: ${i.colors.white};
            }
            .number-count {
              border-radius: 10px;
              opacity: 0.8;
              background: ${i.colors.white};
              width: 40px;
              text-align: center;
            }
          }
          .bookmark-slide {
            position: absolute;
            bottom: ${l.templateType===o.Slide3?"1px":"unset"};
            opacity: 0.8;
            background: ${i.colors.white};
            width: calc(100% - 2px);
            z-index: 1;
            padding: ${r.polished.rem(8)};
            .bookmark-slide-title {
              font-size: ${r.polished.rem(16)};
              font-weight: bold;
            }
            .bookmark-slide-description {
              font-size: ${r.polished.rem(13)};
              max-height: 80px;
              overflow-y: auto;
            }
          }
          .bookmark-slide-gallery {
            position: absolute;
            bottom: ${l.templateType===o.Slide3?0:"unset"};
            opacity: 0.8;
            background: ${i.colors.white};
            width: 100%;
            z-index: 1;
            padding: ${r.polished.rem(8)};
            .bookmark-slide-title {
              font-size: ${r.polished.rem(16)};
              font-weight: bold;
            }
            .bookmark-slide-description {
              max-height: 60px;
              overflow-y: auto;
              font-size: ${r.polished.rem(13)};
            }
          }
          .bookmark-text {
            background: ${i.colors.white};
            width: calc(100% - 2px);
            height: 60%;
            z-index: 1;
            padding: ${r.polished.rem(8)};
            .bookmark-text-title {
              font-size: ${r.polished.rem(16)};
              font-weight: bold;
            }
            .bookmark-text-description {
              height: calc(100% - 75px);
              overflow-y: auto;
              font-size: ${r.polished.rem(14)};
            }
          }
          .gallery-card {
            min-width: 200px;
            min-height: 180px;
            height: auto;
            position: relative;
            padding: ${l.direction===e.Horizon?"unset":r.polished.rem(16)};
            margin: ${l.direction===e.Horizon?r.polished.rem(12):"unset"};
            .gallery-card-inner {
              transition: all 0.5s;
              &:hover {
                transform: scale(1.05);
              }
            }
            .gallery-card-operation {
              display: none;
            }
            &:hover {
              .gallery-card-operation {
                display: block;
                position: absolute;
                top: ${l.direction===e.Horizon?0:r.polished.rem(20)};
                right: ${l.direction===e.Horizon?0:r.polished.rem(20)};
                background: ${i.colors.light};
                opacity: 0.9;
              }
            }
            .gallery-img {
              width: 198px;
              height: 150px;
              display: inline-flex;
            }
            .gallery-img-vertical {
              width: 100%;
              height: 200px;
            }
          }
          .gallery-slide-card {
            ${l.direction===e.Horizon&&`width: ${l.itemWidth}px !important`};
            ${l.direction===e.Horizon?`min-width: ${l.itemWidth}px !important`:`height: ${l.itemHeight}px !important`};
            height: calc(100% - ${r.polished.rem(32)});
            position: relative;
            margin: ${l.direction===e.Horizon?`${r.polished.rem(16)} 0`:`0 ${r.polished.rem(16)}`};
            padding-top: ${l.direction===e.Horizon?"unset":r.polished.rem(l.space)};
            ${l.direction===e.Horizon&&`margin-left: ${r.polished.rem(l.space)}`};
            &:first-of-type {
              margin-top: ${l.direction===e.Horizon?r.polished.rem(16):r.polished.rem(10)};
              padding-top: ${l.direction===e.Horizon?"unset":r.polished.rem(10)};
            }
            &:last-of-type {
              ${l.direction===e.Horizon?`padding-right: ${r.polished.rem(16)}`:`margin-bottom: ${r.polished.rem(20)}`};
            }
            .gallery-slide-inner {
              transition: all 0.5s;
              &:hover {
                transform: scale(1.05);
                .bookmark-slide-gallery {
                  width: 100%;
                }
              }
            }
          }
          .gallery-slide-lastItem {
            padding-right: 16px;
            margin-bottom: 16px;
          }
          .nav-bar {
            height: 48px;
            width: 280px;
            min-width: 280px;
            border: 1px solid ${i.colors.secondary};
            background: ${i.colors.light};
            padding: 0 ${r.polished.rem(8)};
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -24px;
            margin-left: -140px;
            .scroll-navigator {
              .btn {
                border-radius: ${i.borderRadiuses.circle};
              }
            }
            .navbtn {
              width: 100px;
            }
          }
          .example-tips {
            margin-top: -10px;
            top: 50%;
            position: relative;
            text-align: center;
          }
        }
        .bookmark-container::-webkit-scrollbar {
          display: none;
        }
        .gallery-container {
          display: inline-flex !important;
          overflow-x: ${window.jimuConfig.isInBuilder&&s!==r.AppMode.Run&&!d.includes(l.templateType)?"hidden":"auto"};
        }
        .gallery-container-ver {
          overflow-y: ${window.jimuConfig.isInBuilder&&s!==r.AppMode.Run&&!d.includes(l.templateType)?"hidden":"auto"};
        }
        .horizon-line {
          margin: 10px 15px;
          border-bottom: 1px solid ${i.colors.secondary};
        }
        .vertical-line {
          margin: 10px 15px;
          border-right: 1px solid ${i.colors.secondary};
        }
        .vertical-border {
          padding-right: ${r.polished.rem(16)};
        }
        .default-img {
          width: 100%;
          height: 100%;
          background: ${i.colors.palette.light[200]} url(${n(42231)}) center center no-repeat;
          background-size: 50% 50%;
        }
        .edit-mask {
          height: calc(100% - 49px);
          z-index: 2;
        }
      }
    `},this.onActiveViewChange=e=>{var t,i,o;const{appMode:a,config:s}=this.props;if(this.setState({jimuMapView:e}),this.mapOpacity=(null===(o=null===(i=null===(t=null==e?void 0:e.view)||void 0===t?void 0:t.map)||void 0===i?void 0:i.ground)||void 0===o?void 0:o.opacity)||1,e&&a===r.AppMode.Run&&s.initBookmark&&!this.alreadyActiveLoading){const t=this.getMapBookmarks(e)||[],i=s.displayFromWeb?s.bookmarks.concat(t):s.bookmarks;i.length>0&&(this.alreadyActiveLoading=!0,e.view.when((()=>{this.setState({bookmarkOnViewId:i[0].id}),this.onViewBookmark(i[0])})))}},this.handleViewGroupCreate=e=>{this.setState({viewGroup:e})},this.typedImgExist=e=>{var t,i;return e.imgSourceType===s.Snapshot?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url},this.renderSlideViewTop=e=>{var t,i;const o=e.imgSourceType===s.Snapshot,a=o?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url;return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0",onClick:()=>{this.onViewBookmark(e)},key:e.id||`webmap-${e.name}`,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:"bookmark-slide"},(0,r.jsx)("div",{className:"bookmark-slide-title"},e.name),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)),a?(0,r.jsx)(d.ImageWithParam,{imageParam:o?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"}))},this.renderSlideViewText=e=>{var t,i;const o=e.imgSourceType===s.Snapshot,a=o?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url;return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1 border-0",onClick:()=>{this.onViewBookmark(e)},key:e.id||`webmap-${e.name}`,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:"w-100",style:{height:"40%"}},a?(0,r.jsx)(d.ImageWithParam,{imageParam:o?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)("div",{className:"bookmark-text"},(0,r.jsx)("div",{className:"bookmark-text-title"},e.name),(0,r.jsx)("div",{className:"bookmark-text-description"},e.description)))},this.renderSlideViewBottom=e=>{var t,i;const o=e.imgSourceType===s.Snapshot,a=o?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url;return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0",onClick:()=>{this.onViewBookmark(e)},key:e.id||`webmap-${e.name}`},a?(0,r.jsx)(d.ImageWithParam,{imageParam:o?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"}),(0,r.jsx)("div",{className:"bookmark-slide"},(0,r.jsx)("div",{className:"bookmark-slide-title"},e.name),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)))},this.renderCustomContents=e=>{const{LayoutEntry:t}=this.state,{layouts:i}=this.props;return e.layoutName?(0,r.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1 border-0",onClick:()=>{this.onViewBookmark(e)},key:e.id,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)(t,{isRepeat:!0,layouts:i[e.layoutName],isInWidget:!0,className:"layout-height"})):(0,r.jsx)("div",null)},this.renderCustomExample=()=>{const{LayoutEntry:e}=this.state,{layouts:t}=this.props;if(t[a.Regular])return(0,r.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1 border-0"},(0,r.jsx)(e,{isRepeat:!0,layouts:t[a.Regular],isInWidget:!0,className:"layout-height"}))},this.handleArrowChange=e=>{const{config:t}=this.props,{jimuMapView:i}=this.state,o=this.getMapBookmarks(i)||[],a=t.displayFromWeb?t.bookmarks.concat(o):t.bookmarks,s=a.length;if(0===s)return;const{bookmarkOnViewId:r}=this.state;let n=a.findIndex((e=>e.id===r))>-1?a.findIndex((e=>e.id===r)):0;n!==s-1||e?0===n&&e?n=s-1:e&&n>0?n--:e||n++:n=0,this.setState({bookmarkOnViewId:a[n].id}),this.onViewBookmark(a[n])},this.handleOnViewChange=e=>{const{appMode:t,config:i}=this.props,{jimuMapView:o}=this.state,a=this.getMapBookmarks(o)||[],s=i.displayFromWeb?i.bookmarks.concat(a):i.bookmarks,n=s.findIndex((t=>t.id===e))>-1?s.findIndex((t=>t.id===e)):0;this.setState({bookmarkOnViewId:e}),t===r.AppMode.Run&&this.onViewBookmark(s[n])},this.getBookmarksOptions=e=>{const t=[];return e.forEach((e=>{t.push((0,r.jsx)("option",{key:e.id,value:e.id},e.name))})),t},this.getBookmarksDropdownItems=e=>{const{bookmarkOnViewId:t}=this.state,i=[];return e.forEach((e=>{i.push((0,r.jsx)(d.DropdownItem,{key:e.id,active:e.id===t},e.name))})),i},this.handleAutoPlay=()=>{const{config:e,useMapWidgetIds:t,id:i}=this.props,{bookmarkOnViewId:o,autoPlayStart:a,playTimer:s,jimuMapView:n}=this.state,l=this.getMapBookmarks(n)||[],d=e.displayFromWeb?e.bookmarks.concat(l):e.bookmarks;if(0===d.length)return;if(a)return s&&clearInterval(s),void this.setState({autoPlayStart:!1,playTimer:void 0});t&&0!==t.length&&(0,r.getAppStore)().dispatch(r.appActions.requestAutoControlMapWidget(t[0],i));const{autoInterval:p,autoLoopAllow:c}=e;let m=d.findIndex((e=>e.id===o));-1!==m&&m!==d.length-1||(m=0),this.setState({bookmarkOnViewId:d[m].id}),this.onViewBookmark(d[m]);const u=setInterval((()=>{if(m++,c)m>=d.length&&(m=0);else if(m>=d.length)return clearInterval(u),s&&clearInterval(s),void this.setState({autoPlayStart:!1,playTimer:void 0});this.setState({bookmarkOnViewId:d[m].id}),this.onViewBookmark(d[m])}),1e3*p+1e3);this.setState({autoPlayStart:!0,playTimer:u})},this.renderBottomTools=e=>{const{config:t}=this.props,{jimuMapView:i}=this.state,a=this.getMapBookmarks(i)||[],s=t.displayFromWeb?t.bookmarks.concat(a):t.bookmarks,n=s.length,{bookmarkOnViewId:l,autoPlayStart:p}=this.state;let m=1;return m=e?0:s.findIndex((e=>e.id===l))>-1?s.findIndex((e=>e.id===l))+1:1,(e=>{let i;switch(e){case o.Slide1:i=(0,r.jsx)("div",{className:"suspension-tools-bottom align-items-center justify-content-around"},s.length>1?(0,r.jsx)(d.Dropdown,{size:"sm",activeIcon:!0},(0,r.jsx)(d.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"default",className:"suspension-drop-btn",title:this.formatMessage("bookmarkList")},(0,r.jsx)(k,{className:"suspension-drop-btn"})),(0,r.jsx)(d.DropdownMenu,null,s.map((e=>{const t=e.id===l;return(0,r.jsx)(d.DropdownItem,{key:e.id,active:t,onClick:()=>{this.handleOnViewChange(e.id)}},e.name)})))):(0,r.jsx)("div",{className:"suspension-drop-placeholder"}),s.length>1?(0,r.jsx)(d.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"nav-btn-bottom",previousTitle:this.formatMessage("previous"),nextTitle:this.formatMessage("next")},(0,r.jsx)("div",{className:"bookmark-btn-container"},t.autoPlayAllow&&(0,r.jsx)(d.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:this.formatMessage("autoPlay"),"data-testid":"triggerAuto"},p?(0,r.jsx)(N,{className:"mr-1",size:"l"}):(0,r.jsx)(w,{className:"mr-1",size:"l"})))):(0,r.jsx)("div",{className:"suspension-nav-placeholder1"}),(0,r.jsx)("span",{className:"number-count"},this.isRTL?`${n}/${m}`:`${m}/${n}`));break;case o.Slide2:case o.Custom1:case o.Custom2:i=s.length>1?(0,r.jsx)("div",{className:"suspension-tools-text align-items-center justify-content-around"},(0,r.jsx)(d.Dropdown,{size:"sm",activeIcon:!0},(0,r.jsx)(d.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"default",className:"suspension-drop-btn",title:this.formatMessage("bookmarkList")},(0,r.jsx)(k,{className:"suspension-drop-btn"})),(0,r.jsx)(d.DropdownMenu,null,s.map((e=>{const t=e.id===l;return(0,r.jsx)(d.DropdownItem,{key:e.id,active:t,onClick:()=>{this.handleOnViewChange(e.id)}},e.name)})))),(0,r.jsx)(d.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"nav-btn-text",previousTitle:this.formatMessage("previous"),nextTitle:this.formatMessage("next")},(0,r.jsx)("span",null,m,"/",n)),(0,r.jsx)("div",{className:"bookmark-btn-container"},t.autoPlayAllow&&(0,r.jsx)(d.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:this.formatMessage("autoPlay")},p?(0,r.jsx)(N,{className:"mr-1",size:"l"}):(0,r.jsx)(w,{className:"mr-1",size:"l"})))):(0,r.jsx)("div",{className:"align-items-center"});break;case o.Slide3:i=(0,r.jsx)(c.Fragment,null,(0,r.jsx)("div",{className:"suspension-tools-top align-items-center justify-content-around"},s.length>1?(0,r.jsx)(d.Dropdown,{size:"sm",activeIcon:!0},(0,r.jsx)(d.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"default",className:"suspension-drop-btn",title:this.formatMessage("bookmarkList")},(0,r.jsx)(k,{className:"suspension-drop-btn"})),(0,r.jsx)(d.DropdownMenu,null,s.map((e=>{const t=e.id===l;return(0,r.jsx)(d.DropdownItem,{key:e.id,active:t,onClick:()=>{this.handleOnViewChange(e.id)}},e.name)})))):(0,r.jsx)("div",{className:"suspension-drop-placeholder"})),(0,r.jsx)("span",{className:"suspension-top-number"},m,"/",n),(0,r.jsx)("div",{className:"suspension-tools-middle"},s.length>1&&(0,r.jsx)(d.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"middle-nav-group",previousTitle:this.formatMessage("previous"),nextTitle:this.formatMessage("next")})),t.autoPlayAllow&&(0,r.jsx)("div",{className:"suspension-middle-play"},(0,r.jsx)(d.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:this.formatMessage("autoPlay")},p?(0,r.jsx)(N,{className:"mr-1",size:30}):(0,r.jsx)(w,{className:"mr-1",size:30}))))}return i})(t.templateType)},this.renderSlideScroll=e=>{const t=e.map(((e,t)=>{var i,o;const a=e.imgSourceType===s.Snapshot,n=a?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(o=e.imgParam)||void 0===o?void 0:o.url;return(0,r.jsx)("div",{className:"gallery-slide-card",key:t},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer gallery-slide-inner surface-1 border-0",onClick:()=>{this.onViewBookmark(e)},role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:"bookmark-slide-gallery"},(0,r.jsx)("div",{className:"bookmark-slide-title"},e.name),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)),n?(0,r.jsx)(d.ImageWithParam,{imageParam:a?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})))})),i=(0,r.jsx)("div",{className:"gallery-slide-lastItem",key:"last"});return t.asMutable({deep:!0}).concat(i)},this.renderCustomScroll=e=>{const{LayoutEntry:t}=this.state,{layouts:i}=this.props,o=e.map(((e,o)=>(0,r.jsx)("div",{className:"gallery-slide-card",key:o},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-custom-pointer surface-1 border-0",onClick:()=>{this.onViewBookmark(e)}},(0,r.jsx)(t,{isRepeat:!0,layouts:i[e.layoutName],isInWidget:!0,className:"layout-height"}))))),a=(0,r.jsx)("div",{className:"gallery-slide-lastItem",key:"last"});return o.asMutable({deep:!0}).concat(a)},this.scrollContainer=e=>{this.containerRef.current.scrollBy(e)},this.handleScroll=(t="next")=>{const{config:i}=this.props,{itemHeight:o=280,itemWidth:a=210,space:s=0}=i,r=i.direction===e.Horizon;if(this.containerRef.current&&"next"===t){const e=r?{top:0,left:this.isRTL?-(a+s):a+s,behavior:"smooth"}:{top:o,left:0,behavior:"smooth"};this.scrollContainer(e)}else if(this.containerRef.current&&"previous"===t){const e=r?{top:0,left:this.isRTL?a+s:-(a+s),behavior:"smooth"}:{top:-o,left:0,behavior:"smooth"};this.scrollContainer(e)}},this.renderNavbar=t=>{const{config:i}=this.props;return(0,r.jsx)("div",{key:"navBar",className:(i.direction===e.Horizon?"suspension-navbar":"suspension-navbar-verticle")+" align-items-center justify-content-between"},(0,r.jsx)(d.Button,{title:this.formatMessage("previous"),type:"primary",size:"sm",icon:!0,onClick:()=>{this.handleScroll("previous")},className:"navbar-btn-pre"},t?(0,r.jsx)(G,{autoFlip:!0,size:"s"}):(0,r.jsx)(R,{autoFlip:!0,size:"s"})),(0,r.jsx)(d.Button,{title:this.formatMessage("next"),type:"primary",size:"sm",icon:!0,onClick:()=>{this.handleScroll("next")},className:"navbar-btn-next"},t?(0,r.jsx)(E,{autoFlip:!0,size:"s"}):(0,r.jsx)(L,{autoFlip:!0,size:"s"})))},this.getMapBookmarks=e=>{var t,i;if(e&&(null==e?void 0:e.dataSourceId)){const o=e.view;if(!o)return;const a=null===(t=e.view)||void 0===t?void 0:t.map;let s=[];return"3d"===o.type?s=(null===(i=a.presentation)||void 0===i?void 0:i.slides)?JSON.parse(JSON.stringify(a.presentation.slides)):[]:"2d"===o.type&&(s=(null==a?void 0:a.bookmarks)?JSON.parse(JSON.stringify(a.bookmarks)):[]),s.map(((t,i)=>{var o,a;return t.id=`maporigin-${i}`,t.runTimeFlag=!0,t.mapOriginFlag=!0,t.mapDataSourceId=e.dataSourceId,(null===(o=t.thumbnail)||void 0===o?void 0:o.url)?t.imgParam={url:t.thumbnail.url}:t.imgParam={},(null===(a=t.title)||void 0===a?void 0:a.text)&&(t.name=t.title.text),t.imagePosition=d.ImageFillMode.Fill,t}))}},this.renderBookmarkList=i=>{const{appMode:a,config:n,selectionIsSelf:l,selectionIsInSelf:p}=this.props,{transitionInfo:m}=n,{bookmarkOnViewId:u,autoPlayStart:g,jimuMapView:h}=this.state,y=this.getMapBookmarks(h)||[];n.displayFromWeb&&(i=i.concat(y));const v=i.findIndex((e=>e.id===u))>-1?i.findIndex((e=>e.id===u)):0,k=0===v?1:Math.max(0,v-1),x=n.direction===e.Horizon,b=[o.Slide1,o.Slide2,o.Slide3,o.Custom1,o.Custom2],f=(l||p?null==m?void 0:m.previewId:null)||null,j=n.templateType===o.Gallery||b.includes(n.templateType)&&n.pageStyle===t.Scroll;return(0,r.jsx)("div",{className:"bookmark-container "+(j?x?"gallery-container":"gallery-container-ver":""),ref:this.containerRef},(l=>{var p,h,y,b,j,S,I,M;let O;switch(l){case o.Card:O=i.map(((e,t)=>{var i,o;const n=e.imgSourceType===s.Snapshot,l=n?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(o=e.imgParam)||void 0===o?void 0:o.url;return(0,r.jsx)(c.Fragment,{key:t},(0,r.jsx)("div",{className:"d-inline-flex bookmark-card-col"},(0,r.jsx)(d.Card,{onClick:()=>{this.onViewBookmark(e)},className:(a===r.AppMode.Run?"bookmark-pointer":"")+" card-inner surface-1",button:!0,tabIndex:"0",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)("div",{className:"widget-card-image"},(0,r.jsx)("div",{className:"widget-card-image-inner"},l?(0,r.jsx)(d.ImageWithParam,{imageParam:n?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"}))),(0,r.jsx)(d.CardBody,{className:"widget-card-content text-truncate"},(0,r.jsx)("span",{className:"text-capitalize",title:e.name},e.name)))))}));break;case o.List:O=i.map(((e,t)=>(0,r.jsx)("div",{key:t,onClick:()=>{this.onViewBookmark(e)},className:(a===r.AppMode.Run?"bookmark-pointer":"")+" d-flex bookmark-list-col surface-1",role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))}},(0,r.jsx)(C,{className:"ml-3"}),(0,r.jsx)("div",{className:"ml-2"},e.name))));break;case o.Slide1:const l=i.map((e=>this.renderSlideViewTop(e)));return(0,r.jsx)(c.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(p=null==m?void 0:m.transition)||void 0===p?void 0:p.type,direction:null===(h=null==m?void 0:m.transition)||void 0===h?void 0:h.direction,playId:f},l):this.renderSlideScroll(i),n.pageStyle===t.Scroll&&this.renderNavbar(n.direction===e.Horizon),n.pageStyle===t.Paging&&this.renderBottomTools());case o.Slide2:const B=i.map((e=>this.renderSlideViewText(e)));return(0,r.jsx)(c.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(y=null==m?void 0:m.transition)||void 0===y?void 0:y.type,direction:null===(b=null==m?void 0:m.transition)||void 0===b?void 0:b.direction,playId:f},B):this.renderSlideScroll(i),n.pageStyle===t.Scroll&&this.renderNavbar(n.direction===e.Horizon),n.pageStyle===t.Paging&&this.renderBottomTools());case o.Slide3:const A=i.map((e=>this.renderSlideViewBottom(e)));return(0,r.jsx)(c.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(j=null==m?void 0:m.transition)||void 0===j?void 0:j.type,direction:null===(S=null==m?void 0:m.transition)||void 0===S?void 0:S.direction,playId:f},A):this.renderSlideScroll(i),n.pageStyle===t.Scroll&&this.renderNavbar(n.direction===e.Horizon),n.pageStyle===t.Paging&&this.renderBottomTools());case o.Gallery:const L=this.getRuntimeUuid(),V=JSON.parse(r.utils.readLocalStorage(L))||[],T=i.map(((e,t)=>{var i,o;const n=e.imgSourceType===s.Snapshot,l=n?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(o=e.imgParam)||void 0===o?void 0:o.url;return(0,r.jsx)("div",{className:"gallery-card",key:t},(0,r.jsx)(d.Card,{onClick:()=>{this.onViewBookmark(e)},button:!0,tabIndex:"0",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:t=>{"Enter"!==t.key&&" "!==t.key||(t.stopPropagation(),this.onViewBookmark(e))},className:(a===r.AppMode.Run?"bookmark-pointer":"")+" gallery-card-inner surface-1"},(0,r.jsx)("div",{className:"widget-card-image bg-light-300 "+(x?"gallery-img":"gallery-img-vertical")},l?(0,r.jsx)(d.ImageWithParam,{imageParam:n?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)(d.CardBody,{className:"widget-card-content text-truncate"},(0,r.jsx)("span",{className:"text-capitalize",title:e.name},e.name))))})),R=V.map(((e,t)=>{const i=JSON.parse(r.utils.readLocalStorage(e)),o=r.React.createRef();return(0,r.jsx)("div",{className:"gallery-card",key:`RuntimeGallery-${t}`},(0,r.jsx)(d.Card,{onClick:()=>{this.onViewBookmark(i)},className:(a===r.AppMode.Run?"bookmark-pointer":"")+" gallery-card-inner surface-1",button:!0,tabIndex:"0",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),this.onViewBookmark(i))}},(0,r.jsx)("div",{className:"widget-card-image bg-light-300 "+(x?"gallery-img":"gallery-img-vertical")},(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)(d.CardBody,{className:"widget-card-content text-truncate runtime-title-con"},(0,r.jsx)(d.TextInput,{className:"runtime-title w-100",ref:o,size:"sm",title:i.name,defaultValue:i.name||"",onClick:e=>{e.stopPropagation()},onKeyDown:e=>{this.handleKeydown(e,o)},onAcceptValue:t=>{this.onRuntimeBookmarkNameChange(e,t)}}))),(0,r.jsx)("span",{className:"gallery-card-operation float-right"},(0,r.jsx)(d.Button,{title:this.formatMessage("deleteOption"),onClick:()=>{this.handleRuntimeDelete(e)},type:"tertiary",icon:!0},(0,r.jsx)(J,{size:"s"}))))})),z=n.runtimeAddAllow?(0,r.jsx)(c.Fragment,{key:"galleryAdd"},(0,r.jsx)("div",{className:"gallery-card-add",onClick:this.handleRuntimeAdd,title:this.formatMessage("addBookmark"),role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),this.handleRuntimeAdd())}},(0,r.jsx)("div",{className:"gallery-add-icon"},(0,r.jsx)(P,{className:"mr-1",size:"l"}))),(0,r.jsx)("div",{className:"vertical-border"})):(0,r.jsx)("div",{className:"vertical-border",key:"last"}),$=T.asMutable({deep:!0}).concat(R),E=this.renderNavbar(n.direction===e.Horizon);$.push(z),$.push(E),O=$;break;case o.Navigator:const D=n.bookmarks.length,F=n.bookmarks.findIndex((e=>e.id===u))>-1?n.bookmarks.findIndex((e=>e.id===u))+1:1;return(0,r.jsx)("div",{className:"nav-bar d-flex align-items-center justify-content-around"},(0,r.jsx)(d.Select,{size:"sm",value:u,onChange:this.handleOnViewChange,style:{width:32}},this.getBookmarksOptions(i)),(0,r.jsx)(d.Button,{icon:!0,className:"bookmark-btn",type:"tertiary",onClick:this.handleRuntimeAdd},(0,r.jsx)(P,{className:"mr-1",size:"l"})),(0,r.jsx)(d.NavButtonGroup,{type:"tertiary",circle:!0,vertical:!1,onChange:this.handleArrowChange,className:"navbtn"},(0,r.jsx)("span",null,F,"/",D)),(0,r.jsx)(d.Button,{icon:!0,className:"bookmark-btn",type:"tertiary",onClick:this.handleAutoPlay,disabled:!n.autoPlayAllow},g?(0,r.jsx)(N,{className:"mr-1",size:"l"}):(0,r.jsx)(w,{className:"mr-1",size:"l"})));case o.Custom1:case o.Custom2:const G=this.isEditing(),H=i.map((e=>this.renderCustomContents(e)));return(0,r.jsx)(c.Fragment,null,n.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(I=null==m?void 0:m.transition)||void 0===I?void 0:I.type,direction:null===(M=null==m?void 0:m.transition)||void 0===M?void 0:M.direction,playId:f},H):this.renderCustomScroll(i),n.pageStyle===t.Scroll&&this.renderNavbar(n.direction===e.Horizon),n.pageStyle===t.Paging&&this.renderBottomTools(),!G&&n.pageStyle===t.Paging&&a===r.AppMode.Design&&(0,r.jsx)("div",{className:"edit-mask position-absolute w-100"}))}return O})(n.templateType))},this.renderExampleSlideScroll=e=>(0,r.jsx)("div",{className:"gallery-slide-card"},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"bookmark-slide-gallery"},(0,r.jsx)("div",{className:"bookmark-slide-title"},e.title),(0,r.jsx)("div",{className:"bookmark-slide-description"},e.description)),(0,r.jsx)("div",{className:"default-img"}))),this.renderBookmarkExample=i=>{const{appMode:a,config:s}=this.props,n=s.direction===e.Horizon,l=s.templateType===o.Gallery;return(0,r.jsx)("div",{className:"bookmark-container "+(l?n?"gallery-container":"gallery-container-ver":""),ref:this.containerRef},(l=>{let p;switch(l){case o.Card:p=new Array(3).fill(1).map(((e,t)=>(0,r.jsx)("div",{className:"d-inline-flex bookmark-card-col",key:t},(0,r.jsx)(d.Card,{className:"surface-1"},(0,r.jsx)("div",{className:"widget-card-image bg-light-300"},(0,r.jsx)("div",{className:"widget-card-image-inner"},(0,r.jsx)("div",{className:"default-img"}))),(0,r.jsx)(d.CardBody,{className:"widget-card-content text-truncate"},(0,r.jsx)("span",{className:"text-capitalize",title:i.name},i.name))))));break;case o.List:p=new Array(3).fill(1).map(((e,t)=>(0,r.jsx)("div",{className:"d-flex bookmark-list-col surface-1",key:t},(0,r.jsx)(C,{className:"ml-3"}),(0,r.jsx)("div",{className:"ml-2"},i.name))));break;case o.Slide1:p=(0,r.jsx)(c.Fragment,null,s.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:s.transition,direction:s.transitionDirection},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"bookmark-slide"},(0,r.jsx)("div",{className:"bookmark-slide-title"},i.title),(0,r.jsx)("div",{className:"bookmark-slide-description"},i.description)),(0,r.jsx)("div",{className:"default-img"}))):this.renderExampleSlideScroll(i),s.pageStyle===t.Scroll&&this.renderNavbar(s.direction===e.Horizon),s.pageStyle===t.Paging&&this.renderBottomTools(!0));break;case o.Slide2:p=(0,r.jsx)(c.Fragment,null,s.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:s.transition,direction:s.transitionDirection},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"w-100",style:{height:"40%"}},(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)("div",{className:"bookmark-text"},(0,r.jsx)("div",{className:"bookmark-text-title"},i.title),(0,r.jsx)("div",{className:"bookmark-text-description"},i.description)))):this.renderExampleSlideScroll(i),s.pageStyle===t.Scroll&&this.renderNavbar(s.direction===e.Horizon),s.pageStyle===t.Paging&&this.renderBottomTools(!0));break;case o.Slide3:p=(0,r.jsx)(c.Fragment,null,s.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:s.transition,direction:s.transitionDirection},(0,r.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1 border-0"},(0,r.jsx)("div",{className:"default-img"}),(0,r.jsx)("div",{className:"bookmark-slide"},(0,r.jsx)("div",{className:"bookmark-slide-title"},i.title),(0,r.jsx)("div",{className:"bookmark-slide-description"},i.description)))):this.renderExampleSlideScroll(i),s.pageStyle===t.Scroll&&this.renderNavbar(s.direction===e.Horizon),s.pageStyle===t.Paging&&this.renderBottomTools(!0));break;case o.Gallery:p=new Array(3).fill(1).map(((e,t)=>(0,r.jsx)("div",{className:"gallery-card",key:t},(0,r.jsx)(d.Card,{className:(a===r.AppMode.Run?"bookmark-pointer":"")+" surface-1"},(0,r.jsx)("div",{className:"widget-card-image bg-light-300 "+(n?"gallery-img":"gallery-img-vertical")},(0,r.jsx)("div",{className:"default-img"})),(0,r.jsx)(d.CardBody,{className:"widget-card-content text-truncate"},(0,r.jsx)("span",{className:"text-capitalize",title:i.name},i.name))))));break;case o.Custom1:case o.Custom2:const l=this.isEditing(),m=this.renderCustomExample();p=(0,r.jsx)(c.Fragment,null,s.pageStyle===t.Paging?(0,r.jsx)(r.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:s.transition,direction:s.transitionDirection},m):(0,r.jsx)("div",{className:"gallery-slide-card"},m),s.pageStyle===t.Scroll&&this.renderNavbar(s.direction===e.Horizon),s.pageStyle===t.Paging&&this.renderBottomTools(!0),!l&&s.pageStyle===t.Paging&&a===r.AppMode.Design&&(0,r.jsx)("div",{className:"edit-mask position-absolute w-100 h-100"}))}return p})(s.templateType))},this.onRuntimeBookmarkNameChange=(e,t)=>{const i=JSON.parse(r.utils.readLocalStorage(e));i.name=t,r.utils.setLocalStorage(e,JSON.stringify(i))},this.handleKeydown=(e,t)=>{"Enter"===e.key&&t.current.blur()},this.handleRuntimeDelete=e=>{const t=this.getRuntimeUuid(),i=JSON.parse(r.utils.readLocalStorage(t))||[],o=i.findIndex((t=>t===e));o>-1&&i.splice(o,1),r.utils.setLocalStorage(t,JSON.stringify(i)),r.utils.removeFromLocalStorage(e),this.setState({runtimeBmArray:i})},this.renderRuntimeBookmarkList=()=>{const{appMode:e,config:t}=this.props,i=this.getRuntimeUuid(),a=JSON.parse(r.utils.readLocalStorage(i))||[];return(0,r.jsx)("div",{className:"bookmark-container"},(a&&a.length>0&&t.templateType!==o.Gallery||t.runtimeAddAllow)&&(0,r.jsx)("div",{className:"bookmark-runtimeSeparator"}),(()=>{let i;switch(t.templateType){case o.Card:i=a.map((t=>{const i=JSON.parse(r.utils.readLocalStorage(t)),o=r.React.createRef();return(0,r.jsx)(c.Fragment,{key:t},(0,r.jsx)("div",{className:"d-inline-flex bookmark-card-col runtime-bookmarkCard"},(0,r.jsx)(d.Card,{onClick:()=>{this.onViewBookmark(i)},className:(e===r.AppMode.Run?"bookmark-pointer":"")+" surface-1",button:!0,tabIndex:"0",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),this.onViewBookmark(i))}},(0,r.jsx)("div",{className:"widget-card-image bg-light-300"},(0,r.jsx)("div",{className:"widget-card-image-inner"},(0,r.jsx)("div",{className:"default-img"}))),(0,r.jsx)(d.CardBody,{className:"widget-card-content runtime-title-con"},(0,r.jsx)(d.TextInput,{className:"runtime-title w-100",ref:o,size:"sm",title:i.name,defaultValue:i.name||"",onClick:e=>{e.stopPropagation()},onKeyDown:e=>{this.handleKeydown(e,o)},onAcceptValue:e=>{this.onRuntimeBookmarkNameChange(t,e)}}))),(0,r.jsx)("span",{className:"runtimeBookmarkCard-operation float-right"},(0,r.jsx)(d.Button,{title:this.formatMessage("deleteOption"),onClick:()=>{this.handleRuntimeDelete(t)},type:"tertiary",icon:!0},(0,r.jsx)(J,{size:"s"})))))}));const s=(0,r.jsx)(c.Fragment,{key:"card-add"},(0,r.jsx)("div",{className:"card-add",onClick:this.handleRuntimeAdd,title:this.formatMessage("addBookmark"),role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),this.handleRuntimeAdd())}},(0,r.jsx)("div",{className:"add-placeholder"}),(0,r.jsx)("div",{className:"gallery-add-icon"},(0,r.jsx)(P,{className:"mr-1",size:"l"}))),(0,r.jsx)("div",{className:"vertical-border"}));t.runtimeAddAllow&&i.push(s);break;case o.List:i=a.map((t=>{const i=JSON.parse(r.utils.readLocalStorage(t)),o=r.React.createRef();return(0,r.jsx)("div",{key:t,onClick:()=>{this.onViewBookmark(i)},className:(e===r.AppMode.Run?"bookmark-pointer":"")+" d-flex runtime-bookmarkList surface-1"},(0,r.jsx)(C,{className:"ml-3"}),(0,r.jsx)(d.TextInput,{className:"runtime-title",ref:o,size:"sm",title:i.name,defaultValue:i.name||"",onKeyDown:e=>{this.handleKeydown(e,o)},onAcceptValue:e=>{this.onRuntimeBookmarkNameChange(t,e)}}),(0,r.jsx)("span",{className:"runtimeBookmarkList-operation float-right"},(0,r.jsx)(d.Button,{title:this.formatMessage("deleteOption"),onClick:()=>{this.handleRuntimeDelete(t)},type:"tertiary",icon:!0},(0,r.jsx)(J,{size:"s"}))))}));const n=(0,r.jsx)(c.Fragment,{key:"list-add"},(0,r.jsx)("div",{className:"list-add",onClick:this.handleRuntimeAdd,title:this.formatMessage("addBookmark")},(0,r.jsx)("div",{className:"gallery-add-icon"},(0,r.jsx)(P,{className:"mr-1",size:"l"}))),(0,r.jsx)("div",{className:"vertical-border"}));t.runtimeAddAllow&&i.push(n)}return i})())};const g=(0,r.getAppStore)().getState(),h=this.getRuntimeUuid(),y=JSON.parse(r.utils.readLocalStorage(h))||[],v={jimuMapView:void 0,widgetRect:void 0,apiLoaded:!1,viewGroup:void 0,bookmarkOnViewId:1,autoPlayStart:!1,LayoutEntry:null,runtimeBmArray:y,playTimer:void 0,isSetLayout:!1,isSuspendMode:!1};window.jimuConfig.isInBuilder?v.LayoutEntry=this.props.builderSupportModules.LayoutEntry:v.LayoutEntry=u.LayoutEntry;let x=0;if(y.length>0){const e=y[y.length-1],{title:t}=JSON.parse(r.utils.readLocalStorage(e)),i=t.lastIndexOf("-");x=parseInt(t.substring(i+1))}this.state=v,this.graphicsLayerCreated={},this.graphicsPainted={},this.graphicsLayerId={},this.runtimeReference=void 0,this.containerRef=r.React.createRef(),this.rtBookmarkId=x,this.showInView=!1,this.alreadyActiveLoading=!1,this.mapOpacity=1,this.isRTL=null===(m=null==g?void 0:g.appContext)||void 0===m?void 0:m.isRTL}static getDerivedStateFromProps(e,t){if(!e||0===Object.keys(e).length||!t||0===Object.keys(t).length)return null;const{autoPlayStart:i,playTimer:o}=t;return e.autoplayActiveId!==e.id?(i&&o&&clearInterval(o),{autoPlayStart:!1,playTimer:void 0}):null}componentDidMount(){this.state.apiLoaded||(0,m.loadArcGISJSAPIModules)(["esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/Extent","esri/Viewpoint","esri/Basemap"]).then((e=>{[this.Graphic,this.GraphicsLayer,this.Extent,this.Viewpoint,this.Basemap]=e,this.setState({apiLoaded:!0})}))}componentDidUpdate(e){var t,i,o,a,s,n;const{config:l,appMode:d,id:p,autoplayActiveId:c,isPrintPreview:m}=this.props,{autoPlayStart:u,playTimer:g,jimuMapView:h,isSuspendMode:y}=this.state,v=(null===(i=null===(t=this.props)||void 0===t?void 0:t.stateProps)||void 0===i?void 0:i.activeBookmarkId)||0;if(c&&h&&p!==c){const e=this.graphicsLayerId[h.id];if(!e)return;const t=h.view.map.findLayerById(e);t&&t.removeAll(),this.graphicsPainted[h.id]={}}if(e.appMode===r.AppMode.Design&&d===r.AppMode.Run&&h&&l.initBookmark){const e=this.getMapBookmarks(h)||[],t=l.displayFromWeb?l.bookmarks.concat(e):l.bookmarks;t.length>0&&this.showInView&&h.view.when((()=>{this.setState({bookmarkOnViewId:t[0].id}),this.onViewBookmark(t[0])}))}if(this.autoOffCondition(e)&&u)return g&&clearInterval(g),void this.setState({autoPlayStart:!1,playTimer:void 0});if(e.isPrintPreview!==m&&(u?(this.setState({isSuspendMode:!0}),this.handleAutoPlay()):y&&!u&&(this.setState({isSuspendMode:!1}),this.handleAutoPlay())),(null===(a=null===(o=this.props)||void 0===o?void 0:o.stateProps)||void 0===a?void 0:a.settingChangeBookmark)&&v){const e=l.bookmarks.findIndex((e=>e.id===v))>-1?l.bookmarks.findIndex((e=>e.id===v)):0;this.setState({bookmarkOnViewId:v}),this.props.dispatch(r.appActions.widgetStatePropChange(p,"settingChangeBookmark",!1)),d===r.AppMode.Run&&this.onViewBookmark(l.bookmarks[e])}if(null===(n=null===(s=this.props)||void 0===s?void 0:s.stateProps)||void 0===n?void 0:n.lastFlag){this.props.dispatch(r.appActions.widgetStatePropChange(p,"lastFlag",!1));const e=h.view.map.findLayerById(this.graphicsLayerId[h.id]);e&&e.removeAll()}this.settingLayout()}componentWillUnmount(){var e,t;const{jimuMapView:i}=this.state;if(!(0,r.getAppStore)().getState().appConfig.widgets[this.props.id]&&i){const o=null===(t=null===(e=null==i?void 0:i.view)||void 0===e?void 0:e.map)||void 0===t?void 0:t.findLayerById(this.graphicsLayerId[i.id]);o&&o.removeAll();const a=this.getRuntimeUuid();(JSON.parse(r.utils.readLocalStorage(a))||[]).forEach((e=>{r.utils.removeFromLocalStorage(e)})),r.utils.removeFromLocalStorage(a)}}render(){const{config:e,id:t,useMapWidgetIds:i,theme:a,isPrintPreview:s}=this.props,{jimuMapView:n,apiLoaded:l}=this.state,{runtimeAddAllow:d}=e,p=(0,r.classNames)("jimu-widget","widget-bookmark","bookmark-widget-"+t),g=this.getMapBookmarks(n)||[],h=e.displayFromWeb?e.bookmarks.concat(g).length:e.bookmarks.length,y=this.getRuntimeUuid(),v=(JSON.parse(r.utils.readLocalStorage(y))||[]).length,k={id:99999,name:this.formatMessage("_widgetLabel"),title:this.formatMessage("_widgetLabel"),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",type:"2d",mapViewId:"widget_egeditor-dataSource_eg",mapDataSourceId:"dataSource_eg"},x=[o.Slide1,o.Slide2,o.Slide3,o.Gallery,o.Custom1,o.Custom2];return(0,r.jsx)(u.ViewVisibilityContext.Consumer,null,(({isInView:t,isInCurrentView:n})=>{let g=!0;return g=!t||n,g||(this.alreadyActiveLoading=!1),(0,r.jsx)(c.Fragment,null,g&&(0,r.jsx)(u.ViewportVisibilityContext.Consumer,null,(t=>(t||(this.alreadyActiveLoading=!1),this.showInView=t,(0,r.jsx)("div",{className:p,css:this.getStyle(a)},(s||t)&&l&&(0,r.jsx)(c.Fragment,null,(0,r.jsx)(m.JimuMapViewComponent,{useMapWidgetId:null==i?void 0:i[0],onActiveViewChange:this.onActiveViewChange,onViewGroupCreate:this.handleViewGroupCreate}),d||0!==v||0!==h?(0,r.jsx)(c.Fragment,null,(0,r.jsx)("div",{className:"h-100 d-flex flex-wrap bookmark-view-auto"},(h>0||e.templateType===o.Gallery)&&this.renderBookmarkList(e.bookmarks),(v>0||d)&&!x.includes(e.templateType)&&this.renderRuntimeBookmarkList())):(0,r.jsx)(c.Fragment,null,(0,r.jsx)("div",{className:"h-100 d-flex flex-wrap bookmark-view-auto"},this.renderBookmarkExample(k)))))))))}))}}U.mapExtraStateProps=(e,t)=>{var i,o,a,s,n;const l=null==e?void 0:e.appConfig,{layouts:d,layoutId:p,layoutItemId:c,builderSupportModules:m,id:u,useMapWidgetIds:g}=t,h=null===(i=null==e?void 0:e.appRuntimeInfo)||void 0===i?void 0:i.selection,y=h&&m&&m.widgetModules&&m.widgetModules.selectionInBookmark(h,u,l,!1),v=null==e?void 0:e.mapWidgetsInfo,k=g&&0!==g.length?g[0]:void 0,x=(null==e?void 0:e.browserSizeMode)||r.BrowserSizeMode.Large;return{appMode:null===(o=null==e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.appMode,appConfig:l,layouts:d,selectionIsSelf:h&&h.layoutId===p&&h.layoutItemId===c,selectionIsInSelf:y,autoplayActiveId:k?null===(a=v[k])||void 0===a?void 0:a.autoControlWidgetId:void 0,mapWidgetId:k,browserSizeMode:x,isPrintPreview:null!==(n=null===(s=null==e?void 0:e.appRuntimeInfo)||void 0===s?void 0:s.isPrintPreview)&&void 0!==n&&n}},U.versionManager=h;const Z=U;function K(e){n.p=e}})(),l})())}}}));