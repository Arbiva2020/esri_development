System.register(["jimu-core","jimu-for-builder","jimu-for-builder/service","jimu-for-builder/templates","jimu-theme","jimu-ui"],(function(e,t){var s={},i={},a={},r={},o={},n={};return{setters:[function(e){s.React=e.React,s.SessionManager=e.SessionManager,s.classNames=e.classNames,s.css=e.css,s.defaultMessages=e.defaultMessages,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.jimuHistory=e.jimuHistory,s.jsx=e.jsx,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.privilegeUtils=e.privilegeUtils,s.queryString=e.queryString,s.semver=e.semver,s.urlUtils=e.urlUtils,s.utils=e.utils,s.version=e.version},function(e){i.builderActions=e.builderActions},function(e){a.SearchType=e.SearchType,a.appServices=e.appServices},function(e){r.getAppTemplates=e.getAppTemplates},function(e){o.useTheme=e.useTheme},function(e){n.AlertPopup=e.AlertPopup,n.Button=e.Button,n.ButtonGroup=e.ButtonGroup,n.Image=e.Image,n.Nav=e.Nav,n.NavItem=e.NavItem,n.NavLink=e.NavLink,n.Navbar=e.Navbar,n.TextInput=e.TextInput,n.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={5907:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" d="M11.569 4.808 10.5 6.683v2.79a.668.668 0 0 1-.667.652h-.458V2.906a.285.285 0 0 0-.281-.281H4.5V.491a.105.105 0 0 1 .158-.093L6.566 1.5h3.267a.667.667 0 0 1 .667.668v1.657l.953.551a.31.31 0 0 1 .116.432ZM4.5 6.75h3V4.5h-3v2.25Zm2.858 1.875H2.906a.285.285 0 0 1-.281-.281V1.5h-.457a.668.668 0 0 0-.668.668v2.707L.416 6.75a.319.319 0 0 0 .117.431l.967.54V9.45a.668.668 0 0 0 .668.675H5.4l1.943 1.125a.105.105 0 0 0 .143-.038.105.105 0 0 0 .014-.052V8.764a.143.143 0 0 0-.142-.139Z"></path></svg>'},5339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z"></path></svg>'},8450:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13 1a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-1 0V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.5a.5.5 0 0 1 0 1H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10Zm-1.849 10.151a.517.517 0 0 1 .73 0l2.923 2.923a.517.517 0 0 1-.73.73l-2.923-2.922a.517.517 0 0 1 0-.73ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" clip-rule="evenodd"></path></svg>'},224:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" clip-rule="evenodd"></path></svg>'},9964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg>'},3007:e=>{e.exports="data:image/png;base64,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"},62:e=>{e.exports="data:image/png;base64,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"},8891:e=>{"use strict";e.exports=s},3137:e=>{"use strict";e.exports=i},6325:e=>{"use strict";e.exports=a},6262:e=>{"use strict";e.exports=r},4796:e=>{"use strict";e.exports=o},726:e=>{"use strict";e.exports=n}},t={};function l(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,l),a.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var c={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(c),l.d(c,{__set_webpack_public_path__:()=>L,default:()=>E});var e=l(8891);const t="3b5fbfab35f149a7992a7bde10d8ad9e";var s,i,a;!function(e){e.Default="Default",e.My="My",e.Favorites="Favorites",e.MyGroup="MyGroup",e.ArcGisOnline="ArcGisOnline",e.LivingAtlas="LivingAtlas",e.MyOrganization="MyOrganization"}(s||(s={})),function(e){e.MyPortalTemplate="MyPortalTemplate",e.MyTemplate="MyTemplate",e.EsriGroup="EsriGroup",e.ArcGISOnline="ArcGISOnline",e.Favorites="Favorites",e.LivingAtlas="LivingAtlas",e.MyGroup="MyGroup",e.MyOrganization="MyOrganization"}(i||(i={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed"}(a||(a={}));var r=l(3137),o=l(6325),n=l(726);const p={_widgetLabel:"Create a new experience",untitledExperience:"Untitled experience",telplateListTitle:"Templates",searchPlaceholder:"Search",create:"Create",chooseTemplateDefault:"Default",my:"My templates",shared:"Shared templates",choseTemplate:"Select a template to start",templateSummary:"This is the summary of the item.",publicTemplate:"Public",noTemplatesAvailable:"No templates available. ",myFavorites:"My favorites",createError:"There was a problem when create new application.",noResource:"Resource does not exist or is inaccessible",warningPopUpTitle:"Warning",templateMultiPages:"Multi-pages",viewTemplateDetail:"View details",newTemplateMark:"New",createdByESRI:"Created by ESRI"};var h=l(8450),A=l.n(h);const m=t=>{const s=window.SVG,{className:i}=t,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return s?e.React.createElement(s,Object.assign({className:r,src:A()},a)):e.React.createElement("svg",Object.assign({className:r},a))};var d=l(9964),u=l.n(d);const g=t=>{const s=window.SVG,{className:i}=t,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return s?e.React.createElement(s,Object.assign({className:r,src:u()},a)):e.React.createElement("svg",Object.assign({className:r},a))};var f=l(5907),v=l.n(f);const w=t=>{const s=window.SVG,{className:i}=t,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return s?e.React.createElement(s,Object.assign({className:r,src:v()},a)):e.React.createElement("svg",Object.assign({className:r},a))},{AppHigherVersionStateType:b,checkAppHigherVersionState:y}=e.utils;class T extends e.React.PureComponent{constructor(t){super(t),this.onCreateClick=()=>{const{name:e,isExperiencesTemplate:t}=this.props.info;if(t)return this.props.crateAppByTemplate(this.props.info),!1;this.props.onCreateClick(e)},this.clickThumbnailToCreate=()=>{const{name:e}=this.props.info;this.checkThumbnailIsAdd()&&this.props.onCreateClick(e)},this.checkThumbnailIsAdd=()=>{const{name:e,isExperiencesTemplate:t}=this.props.info;return!(t||"default"!==e&&"default2"!==e)},this.nls=e=>{const t=Object.assign({},p,n.defaultMessages);return this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:t[e]}):e},this.getStyle=()=>{var t,s,i,a;const{theme:r}=this.props,o=r?r.colors.palette.dark[300]:"",n=r?r.colors.white:"";return e.css`
      width: ${e.polished.rem(240)};
      height: ${e.polished.rem(260)};
      margin: 0 ${e.polished.rem(14)}  ${e.polished.rem(30)}  ${e.polished.rem(14)};
      display: flex;
      flex-direction: column;
      .app-version-remind {
        color: var(--warning-600);
        .jimu-icon {
          margin-right: 0;
        }
      }
      .item-icon-con {
        height: ${e.polished.rem(30)};
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
        padding-left: ${e.polished.rem(8)};
        padding-right: ${e.polished.rem(8)};
        .esri-mark {
          background: var(--primary-600);
          border-radius: 50%;
          text-align: center;
          height: ${e.polished.rem(18)};
          width: ${e.polished.rem(18)};
          line-height: ${e.polished.rem(17)};
          box-sizing: border-box;
          padding: 0 ${e.polished.rem(3)};
        }
        .right-icon-con {

        }
      }
      .new-oblique-filled {
        height: ${e.polished.rem(18)};
        line-height: ${e.polished.rem(18)};
        padding: 0 ${e.polished.rem(6)};
        font-size: 10px;
        color: var(--white);
        z-index: 10;
        background: var(--warning);
        font-weight: bold;
        border-radius: 0 ${e.polished.rem(3)} ${e.polished.rem(3)} ${e.polished.rem(3)};
        text-align: center;
      }
      .image-container {
        position: relative;
        height: ${e.polished.rem(160)};
        width: ${e.polished.rem(240)};
        > img {
          width: 100%;
          max-width: 100%;
          max-height: 100%;
        }
        flex-shrink: 0;
        flex-grow: 0;

        .flip-image{
          transform: scaleX(-1);
        }
        .description {
          display: none;
          position: absolute;
          padding: ${e.polished.rem(16)};
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: ${e.polished.rgba(n,.5)};
          color: ${r.colors.black};
          font-size: 13px;
          .content {
            overflow: hidden;
            width: 100%;
            height: 100%;
            overflow-y:auto;
          }
        }
        &:hover .description{
          display: block;
        }
        .description-cursor {
          cursor: pointer;
        }
        .padding-top {
          padding-top: ${e.polished.rem(30)};
        }
        .multi-pages {
          height: ${e.polished.rem(26)};
          line-height: ${e.polished.rem(26)};
          color: ${null===(t=null==r?void 0:r.colors)||void 0===t?void 0:t.black};
          font-size: ${e.polished.rem(13)};
          padding: 0 ${e.polished.rem(14)};
          bottom: 0;
          right: 0;
          background: ${null===(a=null===(i=null===(s=null==r?void 0:r.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.primary)||void 0===a?void 0:a[100]};
        }
      }
      .action-button {
        max-width:${e.polished.rem(154)};
        color:${r.colors.black};
        display: block;
      }
      .template-info-con {
        padding: 0;
        border: none;
        background: transparent;
        flex-shrink: 1;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        text-align: left;
        &:focus {
          .description {
            display: block;
          }
        }
        .title {
          padding: ${e.polished.rem(16)} ${e.polished.rem(12)} 0 ${e.polished.rem(12)};
          ${Object.assign({},e.polished.ellipsis())}
          font-size: ${e.polished.rem(16)};
          color:${r.colors.palette.dark[800]};
          text-align: left;
          .text-truncate {
            width: 0;
          }
        }
      }
      .info{
        padding: 0 ${e.polished.rem(12)} ${e.polished.rem(12)} ${e.polished.rem(12)};
        display: flex;
        flex-shrink: 1;
        flex-direction: column;
        justify-content: space-between;
        .tools-con {
          border-top: 1px solid var(--light-800);
          padding-top: ${e.polished.rem(12)};
        }
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-btn:first-of-type {
          margin-left: -4px;
        }
      }
      &.disabled {
        > img {
          opacity: 0.6;
        }
        .jimu-icon {
          color: ${o};
          cursor: default;
        }
        .info{
          .title {
            color: ${r.colors.palette.dark[600]};
          }
        }
      }
    `},this.getPublishStatus=e=>{let t;return(e.typeKeywords||[]).forEach((e=>{if(null==e?void 0:e.includes("status:"))switch(e.split(": ")[1]){case a.Published:case a.Changed:t=a.Published;break;case a.Draft:t=a.Draft}})),t},this.showDesc=()=>{this.setState({showDesc:!0})},this.hideDesc=()=>{this.setState({showDesc:!1})},this.initPreviewUrl=()=>{const{isExperiencesTemplate:t,id:s,name:i,isPortalRequest:a,isArcGisOnlineRequest:r}=this.props.info;let o="";if(t||r||a)o=e.urlUtils.getAppUrl({appId:s,isTemplate:!0,isArcGisOnlineTemplate:r,isPortalRequest:a});else{o=e.urlUtils.getAppUrl({appId:s,isTemplate:!0,isArcGisOnlineTemplate:r,isPortalRequest:!1,isDraft:!1,defaultTemplateName:i});const t=(0,e.getAppStore)().getState().queryObject,a=null==t?void 0:t.webmap,n=null==t?void 0:t.webscene,l=a?`&webmap=${a}`:n?`&webscene=${n}`:"";o=`${o}${l}`,l&&(o=o.replace("/../",encodeURIComponent("/../")))}this.setState({previewUrl:o})},this.getVersionRemindString=()=>{const{info:e}=this.props;switch(y(e)){case b.Both:return this.nls("templateVersionRemind");case b.Draft:return this.nls("draftTemplateVersionRemind");case b.Published:return this.nls("publishedTemplateVersionRemind")}},this.checkIsShowItemMarkContent=()=>{const{isNewTemplate:e,isArcGisOnlineRequest:t,isEsriGroupTemplate:s}=this.props.info;return e||s&&t},this.checkIsAppCanCreate=()=>{const{capabilities:e,info:t}=this.props,s=this.getPublishStatus(t);return!(null==t?void 0:t.origin)&&e.canCreateExperience&&s!==a.Draft},this.isRTL=(0,e.getAppStore)().getState().appContext.isRTL,this.state={showDesc:!1,previewUrl:"",thumbnail:""}}componentDidMount(){this.initPreviewUrl()}componentDidUpdate(){this.initPreviewUrl()}render(){const{disabled:t,style:s}=this.props,{title:i,image:a,snippet:r,flipThumbnail:o,isMultiplePage:l,isNewTemplate:c,isArcGisOnlineRequest:p,isEsriGroupTemplate:h}=this.props.info,{showDesc:A,previewUrl:d}=this.state,{capabilities:u,info:f}=this.props,v=A&&(null==a?void 0:a.gifSrc),T=y(f),x=h&&p,O=this.checkIsAppCanCreate();return(0,e.jsx)("div",{css:this.getStyle(),className:(0,e.classNames)("template bg-secondary",{disabled:t}),style:s},(0,e.jsx)(n.Button,{className:"template-info-con flex-grow-1"},(0,e.jsx)("div",{className:"image-container position-relative",onMouseEnter:this.showDesc,onMouseLeave:this.hideDesc},(0,e.jsx)("div",{className:"item-icon-con position-absolute w-100 d-flex align-items-center"},(0,e.jsx)("div",{className:"left-icon-con flex-grow-1"},c&&(0,e.jsx)("div",{className:"new-oblique-filled d-inline-block mr-1",title:this.nls("newTemplateMark")},this.nls("newTemplateMark")),x&&(0,e.jsx)("div",{className:"d-flex align-items-center esri-mark mr-1",title:this.nls("createdByESRI")},(0,e.jsx)(w,{size:"s"}))),(0,e.jsx)("div",{className:"right-icon-con"})),(0,e.jsx)(n.Image,{src:v?a.gifSrc:a.src,alt:i,className:this.isRTL&&o?"flip-image":""}),l&&(0,e.jsx)("div",{className:"multi-pages position-absolute"},this.nls("templateMultiPages")),(0,e.jsx)("div",{className:(0,e.classNames)("description",{"description-cursor":this.checkThumbnailIsAdd(),"padding-top":this.checkIsShowItemMarkContent()}),onClick:this.clickThumbnailToCreate},(0,e.jsx)("div",{tabIndex:-1,className:"content"},(0,e.jsx)("div",null,r||this.nls("templateSummary"))))),(0,e.jsx)("div",{className:"title d-flex flex-grow-1 w-100"},(0,e.jsx)("div",{className:"flex-grow-1 text-truncate",title:i},i),T!==b.None&&(0,e.jsx)("div",{className:"ml-2 app-version-remind",title:this.getVersionRemindString()},(0,e.jsx)(g,null)))),(0,e.jsx)("div",{className:"info"},(0,e.jsx)("div",{className:"buttons tools-con d-flex"},(0,e.jsx)("div",{className:"flex-grow-1"},O&&(0,e.jsx)(n.Button,{disabled:t,size:"sm",className:"action-button text-truncate",type:"primary",onClick:this.onCreateClick,title:this.nls("create")},this.nls("create")," ")),u.canViewExperience&&(0,e.jsx)(n.Button,{size:"sm",icon:!0,type:"tertiary",title:this.nls("preview"),href:d,target:"_blank"},(0,e.jsx)(m,{size:16})))))}}T.defaultProps={disabled:!1};class x extends e.React.PureComponent{constructor(){super(...arguments),this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:p[e]}):e,this.getStyle=()=>{var t;const{theme:s}=this.props,i=null===(t=null==s?void 0:s.colors)||void 0===t?void 0:t.palette;return e.css`
      & {
        width: 100%;
        top: 25%;
        left: 0;
      }
      .empty-message {
        text-align: center;
        font-size: ${e.polished.rem(22)};
        line-height: ${e.polished.rem(22)};
        color: ${null==i?void 0:i.dark[600]};
        margin-top: ${e.polished.rem(30)};
      }
      .icon-con img{
        display: block;
        text-align: center;
        width: 26.7%;
        margin: 0 auto;
        opacity: 0.6;
      }
      @media (min-width: 1600px) {
        .icon-con img{
          width: 20%;
        }
      }
    `}}render(){return(0,e.jsx)("div",{css:this.getStyle(),className:"choose-template-empty-con position-absolute","data-testid":"empty"},(0,e.jsx)("div",{className:"icon-con"},(0,e.jsx)(n.Image,{src:l(62),"data-testid":"empty-icon"})),(0,e.jsx)("p",{className:"empty-message"},this.nls("noTemplatesAvailable")))}}function O(e){console&&console.warn&&console.warn.apply(console,[e])}var B=function(){function e(e){void 0===e&&(e=""),this.termStack=[],this.rangeStack=[],this.openGroups=0,this.q=e}return e.prototype.match=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.termStack=this.termStack.concat(e),this},e.prototype.in=function(e){var t="`in("+(e?'"'+e+'"':"")+")`";return this.hasRange||this.hasTerms?(e&&"*"!==e&&(this.q+=e+":"),this.commit()):(O(t+" was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified."),this)},e.prototype.startGroup=function(){return this.commit(),this.openGroups>0&&(this.q+=" "),this.openGroups++,this.q+="(",this},e.prototype.endGroup=function(){return this.openGroups<=0?(O("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified."),this):(this.commit(),this.openGroups--,this.q+=")",this)},e.prototype.and=function(){return this.addModifier("and")},e.prototype.or=function(){return this.addModifier("or")},e.prototype.not=function(){return this.addModifier("not")},e.prototype.from=function(e){return this.hasTerms?(O('`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date("2020-01-01").  Your query was not modified.'),this):(this.rangeStack[0]=e,this)},e.prototype.to=function(e){return this.hasTerms?(O('`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date("2020-01-01"). Your query was not modified.'),this):(this.rangeStack[1]=e,this)},e.prototype.boost=function(e){return this.commit(),this.q+="^"+e,this},e.prototype.toParam=function(){return this.commit(),this.cleanup(),this.q},e.prototype.clone=function(){return this.commit(),this.cleanup(),new e(this.q+"")},e.prototype.addModifier=function(e){return this.currentModifer?(O("You have called `"+this.currentModifer+"()` after `"+e+"()`. Your current query was not modified."),this):(this.commit(),""===this.q&&"not"!==e?(O("You have called `"+e+"()` without calling another method to modify your query first. Try calling `match()` first."),this):(this.currentModifer=e,this.q+=""===this.q?"":" ",this.q+=e.toUpperCase()+" ",this))},e.prototype.needsQuotes=function(e){return/\s|:/g.test(e)},e.prototype.formatTerm=function(e){return e instanceof Date?e.getTime():"string"==typeof e&&this.needsQuotes(e)?'"'+e+'"':e},e.prototype.commit=function(){var e=this;return this.currentModifer=void 0,this.hasRange&&(this.q+="["+this.formatTerm(this.rangeStack[0])+" TO "+this.formatTerm(this.rangeStack[1])+"]",this.rangeStack=[void 0,void 0]),this.hasTerms&&(this.q+=this.termStack.map((function(t){return e.formatTerm(t)})).join(" "),this.termStack=[]),this},Object.defineProperty(e.prototype,"hasTerms",{get:function(){return this.termStack.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasRange",{get:function(){return this.rangeStack.length&&this.rangeStack[0]&&this.rangeStack[1]},enumerable:!1,configurable:!0}),e.prototype.cleanup=function(){if(this.openGroups>0)for(O("Automatically closing "+this.openGroups+" group(s). You can use `endGroup(...)` to remove this warning.");this.openGroups>0;)this.q+=")",this.openGroups--;var e=this.q;this.q=e.replace(/( AND ?| NOT ?| OR ?)*$/,""),e!==this.q&&O("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified."),this.q=this.q.replace(/(\(\))*/,"")},e}(),k=l(6262),j=l(5339),S=l.n(j);const D=t=>{const s=window.SVG,{className:i}=t,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return s?e.React.createElement(s,Object.assign({className:r,src:S()},a)):e.React.createElement("svg",Object.assign({className:r},a))};var M=l(224),C=l.n(M);const N=t=>{const s=window.SVG,{className:i}=t,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",i);return s?e.React.createElement(s,Object.assign({className:r,src:C()},a)):e.React.createElement("svg",Object.assign({className:r},a))};var P=l(4796);const G=Object.assign({},p,n.defaultMessages),I=t=>{var s,i;const a=e.hooks.useTranslation(G),r=(0,P.useTheme)(),{onTagsChange:o,selectedTags:l}=t,c=[{value:null,label:a("all")},{value:"Blank",label:a("blankTemplate")},{value:"WAB classic",label:a("wabClassicTemplate")},{value:"Map centric",label:a("mapCentricTemplate")},{value:"Dashboard",label:a("dashboardTemplate")},{value:"Web page",label:a("webPageTemplate")},{value:"Website",label:a("websiteTemplate")}],p=e.css`
    & {
      padding-top: ${e.polished.rem(20)};
      padding-bottom: ${e.polished.rem(25)};
      button.template-tag {
        & {
          margin-right: ${e.polished.rem(10)};
          padding-left: ${e.polished.rem(16)};
          padding-right: ${e.polished.rem(16)};
        }
        &:active, &:hover, &:not(:disabled):not(.disabled).active {
          background-color: ${null===(s=r.colors)||void 0===s?void 0:s.primary};
          border-color: ${null===(i=r.colors)||void 0===i?void 0:i.primary};
        }
      }
    }
  `,h=e=>{const t=!l||0===(null==l?void 0:l.length);return e?l.includes(e):t};return(0,e.jsx)(n.ButtonGroup,{className:"top-padding default-template-button-con",css:p},c.map((t=>(0,e.jsx)(n.Button,{className:"template-tag",type:"secondary",key:t.value,title:t.label,active:h(t.value),onClick:()=>{var e;e=t.value,o(e?[e]:[])}},t.label))))};class E extends e.React.PureComponent{constructor(a){super(a),this.onDefaultTemplateTagChange=e=>{this.setState({selectedTags:e},(()=>{this.getDefaultTemplate()}))},this.getDefaultTemplate=()=>{const{selectedTags:t}=this.state,s=(0,k.getAppTemplates)(t).map((t=>{const s=!!t.templateCreateVersion&&e.semver.eq(e.version,t.templateCreateVersion);return{isExperiencesTemplate:!1,name:t.name,title:t.label,image:{src:t.thumbnail,gifSrc:null==t?void 0:t.gifThumbnail},description:t.description,isMapAware:t.isMapAware,snippet:t.description,flipThumbnail:t.flipThumbnail,isNewTemplate:s,isMultiplePage:t.isMultiplePage}}));this.setState({defaultTemplate:s,templates:s})},this.nls=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Object.assign(Object.assign(Object.assign({},p),n.defaultMessages),e.defaultMessages)[t]}):t,this.createAppByDefaultTemplate=t=>{this.setState({loading:!0});const s=this.nls("untitledExperience"),i=this.getQueryString("folderId"),a=(0,e.getAppStore)().getState().queryObject;o.appServices.createAppByDefaultTemplate(s,t,i,null==a?void 0:a.webmap,null==a?void 0:a.webscene).then((t=>{this.setState({loading:!1}),this.props.dispatch(r.builderActions.refreshAppListAction(!0)),e.jimuHistory.browserHistory.push(this.getBuilderLink(t.id))}),(e=>{this.setState({loading:!1}),console.error(e)})).catch((e=>{this.setState({loading:!1,isShowAlertPopup:!0,alertPopupMessage:this.nls("createError")})}))},this.searchLivingAtlasGroups=()=>{const t=(0,e.getAppStore)().getState().portalSelf,s=null==t?void 0:t.livingAtlasGroupQuery;if(!s)return!1;const i={num:1,start:0,sortField:"title",sortOrder:"asc",q:s};o.appServices.searchGroups(i).then((e=>{const t=null==e?void 0:e.results.map((e=>null==e?void 0:e.id)),s=t.length>0?t.join(" OR "):null;this.setState({esriLivingAtlasGroupId:s})}))},this.checkIsShowLivingAtlas=()=>{const t=(0,e.getAppStore)().getState().portalSelf;this.setState({isShowLivingAtlas:!!(null==t?void 0:t.livingAtlasGroupQuery)})},this.onCreateClick=e=>{this.selectTemplate(e),this.createAppByDefaultTemplate(e)},this.selectTemplate=e=>{this.props.dispatch(r.builderActions.selectTemplate(e))},this._matchearchText=e=>{const{searchTextForRequest:t}=this.state;return!t||!e||e.toLowerCase().indexOf(t.toLowerCase())>-1},this.getBuilderLink=t=>{let s=window.jimuConfig.mountPath+"builder/?id="+t;return this.getQueryString("locale")&&(s=e.urlUtils.appendQueryParam(s,"locale",this.getQueryString("locale"))),this.getQueryString("__env__")&&(s=e.urlUtils.appendQueryParam(s,"__env__",this.getQueryString("__env__"))),s},this.crateAppByTemplate=e=>{this.setState({loading:!0});const t=this.getQueryString("folderId");o.appServices.createAppByItemTemplate(e,t).then((e=>{e&&(window.location.href=this.getBuilderLink(e)),this.setState({loading:!1})}),(e=>{const t=e&&(null==e?void 0:e.indexOf("Resource does not exist"))>-1?this.nls("noResource"):this.nls("createError");this.setState({loading:!1,isShowAlertPopup:!0,alertPopupMessage:t})}))},this.checkIsOwner=t=>{const s=(0,e.getAppStore)().getState().user;return!(!s||!t||s.username!==t)},this.filterTemplateChange=e=>{const{defaultTemplate:t}=this.state;e!==this.state.accessType&&(e===s.Default?this.setState({templates:t,accessType:e,isMyLocalTemplateLoadAll:!1},(()=>{this.filterDefaultTemplate()})):this.setState({templates:[],accessType:e,isMyLocalTemplateLoadAll:!1},(()=>{this.refreshTemplate()})))},this.refreshTemplate=()=>{this.setState({templates:[],esriGroupTemplates:[],otherTemplate:[]},(()=>{this.refreshAction()}))},this.refreshAction=(e=!1)=>{const{accessType:t,esriLivingAtlasGroupId:a,isMyLocalTemplateLoadAll:r}=this.state,o=window.jimuConfig.isDevEdition&&r;let n=i.MyTemplate;if(t===s.ArcGisOnline){const t=this.getRequestOption(i.EsriGroup,e);this.searchTemplate(t,e,i.EsriGroup)}switch(t){case s.My:n=o?i.MyPortalTemplate:i.MyTemplate;break;case s.ArcGisOnline:n=i.ArcGISOnline;break;case s.MyGroup:n=i.MyGroup;break;case s.MyOrganization:n=i.MyOrganization;break;case s.Favorites:n=i.Favorites;break;case s.LivingAtlas:n=i.LivingAtlas}if(t===s.LivingAtlas&&!a)return!1;const l=this.getRequestOption(n,e);this.searchTemplate(l,e,n)},this.getSearchType=e=>{const t=e===i.LivingAtlas||e===i.MyPortalTemplate,s=e===i.EsriGroup||e===i.ArcGISOnline;let a;return a=t?o.SearchType.Portal:s?o.SearchType.AGOL:o.SearchType.Other,a},this.getAppPortalUrl=e=>{},this.setTemplateData=(e,t,s)=>{s===i.MyPortalTemplate?this.setMyPortalTemplateData(e,t):this.setTemplateListData(e,t,s)},this.searchMyPortalTemplate=(e,t=!1)=>{this.isSearchMyPortalTemplate(e,t)&&this.setState({isMyLocalTemplateLoadAll:t,myPortaltemplates:[]},(()=>{this.refreshAction()}))},this.isSearchMyPortalTemplate=(e,t)=>{const{accessType:a,myTemplatesInDevEdtion:r}=this.state;let o=!0;return a===s.My&&e!==i.MyPortalTemplate||(o=!1),r.length>=this.pageNumber&&(o=!1),t||(o=!1),o},this.initTemplateInfo=(t,s)=>{const{portalUrl:a}=this.props,r=s===i.LivingAtlas||s===i.MyPortalTemplate,o=s===i.EsriGroup||s===i.ArcGISOnline,n=window.jimuConfig.isDevEdition&&s===i.MyTemplate,l=e.portalUrlUtils.isAGOLDomain(a),c=o&&!l?"https://maps.arcgis.com":a;return t.map((e=>Object.assign(Object.assign({},e),{isExperiencesTemplate:!0,isEsriGroupTemplate:s===i.EsriGroup,image:{src:this.thumbnail(e.thumbnail,e.id,o,r)},isArcGisOnlineRequest:o,isPortalRequest:r,portalUrl:c,isLocalApp:n})))},this.setTemplateListData=(e,t,s)=>{let{otherTemplate:a,esriGroupTemplates:r,templates:o}=this.state;a=t?a:[],r=t?r:[],o=t?o:[],t?(a=a.concat(e),r=r.concat(e)):(a=e,r=e),s===i.MyTemplate&&window.jimuConfig.isDevEdition&&this.setState({myTemplatesInDevEdtion:e}),s===i.EsriGroup?this.setState({esriGroupTemplates:r}):this.setState({otherTemplate:a,templates:o.concat(e)})},this.setMyPortalTemplateData=(e,t=!1)=>{let{myPortaltemplates:s}=this.state;const{templates:i}=this.state;s=t?s:[],s=t?s.concat(e):e,this.setState({myPortaltemplates:s,templates:i.concat(e)})},this.checkMyLocalTemplateIsLoadAll=(e,t,a=i.MyPortalTemplate)=>{const{accessType:r}=this.state;return r===s.My&&(a===i.MyPortalTemplate||r===s.My&&e>t)},this.getRequestOption=(t,a=!1)=>{if(this.state.accessType===s.Default)return null;const r=e.SessionManager.getInstance().getMainSession(),o={start:1,q:'type: "Web Experience Template"',sortField:t===i.EsriGroup?"created":"modified",sortOrder:"desc",num:30};if(r){o.q=this.getRequestOptionParamsQ(t);const e=this.getPageStartAndNum(a,t);o.num=e.num,o.start=e.start}return window.jimuConfig.isDevEdition&&t===i.MyTemplate&&(o.portalUrl=this.props.portalUrl),o},this.getRequestOptionParamsQ=(s=i.ArcGISOnline)=>{var a;const{esriLivingAtlasGroupId:r}=this.state,o=e.SessionManager.getInstance().getMainSession(),n=(0,e.getAppStore)().getState().user,l=(null==n?void 0:n.favGroupId)||"";let c=(new B).match("Web Experience Template").in("type");const{searchTextForRequest:p}=this.state;if(p&&(c=c.and().startGroup().match(this.state.searchTextForRequest).endGroup()),c=c.startGroup().not().match("status: Draft").in("typekeywords").endGroup(),!o)return c.toParam();const h=null===(a=null==n?void 0:n.groups)||void 0===a?void 0:a.map((e=>e.id)),A=(null==o?void 0:o.username)||"";switch(s){case i.EsriGroup:return c.and().match(t).in("group").toParam();case i.MyTemplate:case i.MyPortalTemplate:return c.and().match(null==n?void 0:n.orgId).in("orgid").and().match(A).in("owner").toParam();case i.MyGroup:return c=c.and().startGroup().match("shared").in("access").or().match("public").in("access").or().match("org").in("access").endGroup(),(null==h?void 0:h.length)>0&&(c.and().startGroup(),h.forEach(((e,t)=>{c=c.match(e).in("group"),t<(null==h?void 0:h.length)-1&&(c=c.or())})),c.endGroup()),c.toParam();case i.MyOrganization:return c.and().match(null==n?void 0:n.orgId).in("orgid").toParam();case i.Favorites:return c.and().match(l).in("group").toParam();case i.ArcGISOnline:return c.not().startGroup().match(t).in("group").endGroup().toParam();case i.LivingAtlas:return r?c.and().match(r).in("group").toParam():c.toParam()}},this.getPageStartAndNum=(e,t)=>{const{otherTemplate:s,esriGroupTemplates:a,myPortaltemplates:r}=this.state,o={num:this.getPageNumber(e,t),start:1};if(!e)return o;switch(t){case i.EsriGroup:o.start=a.length+1;break;case i.MyPortalTemplate:o.start=r.length+1;break;default:o.start=s.length+1}return o},this.getPageNumber=(e,t)=>{const{myTemplatesInDevEdtion:s}=this.state,a=this.contentNode.clientWidth,r=this.contentNode.clientHeight;let o=Math.ceil(r/260)*Math.ceil(a/238)||30;return t!==i.MyPortalTemplate||e||(o=o-s.length||0),this.pageNumber=o,o},this.thumbnail=(t,i,a=!1,r=!1)=>{const{accessType:o}=this.state,n=o===s.My,c=e.portalUrlUtils.isAGOLDomain(this.props.portalUrl),p=window.jimuConfig.isDevEdition&&n&&!r,h=a?e.urlUtils.getArcgisOnlineUrl():this.props.portalUrl,A=e.SessionManager.getInstance().getSessionByUrl(h),m=a&&!c?"":`?token=${null==A?void 0:A.token}`;let d;if(t){const e=window.location.origin+"/apps/"+i+"/"+d;d=p?e:h+"/sharing/rest/content/items/"+i+"/info/"+t+m}else d=l(3007);return d},this.getMyTemplateThumbnail=(t,s)=>{let i;const a=e.SessionManager.getInstance().getSessionByUrl(this.props.portalUrl),r=a&&a.token?"?token="+a.token:"";return i=window.jimuConfig.isDevEdition?window.location.origin+"/apps/"+s+"/"+t:this.props.portalUrl+"/sharing/rest/content/items/"+s+"/info/"+t+r,i},this.getStyle=()=>{var t,s;const{theme:i}=this.props,a=i?i.colors.palette.light[800]:"";return e.css`
      height: 100%;
      .header-bar {
        width: 100%;
        height: ${e.polished.rem(60)};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${e.polished.rem(30)};
        font-size: 20px;
        border-bottom: 1px solid ${a};
        color:${i.colors.palette.dark[600]};
        font-weight:500;
        background:${i.colors.palette.light[400]};
        svg {
          margin-right: 0;
        }
        &>div {
          color: ${i.colors.palette.dark[600]};
        }
        &>div:hover {
          color: ${i.colors.black};
        }
        .jimu-icon {
          cursor: pointer;
        }
      }
      .loading-con {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${e.polished.rgba(i.colors.white,.2)};
      }
      .homescreen {
        width:${e.polished.rem(810)};
        margin: 0 auto;
      }
      .top-padding{
        padding-right: ${e.polished.rem(32)};
        padding-left: ${e.polished.rem(16)};
      }
      .header {
        width: 100%;
        padding-bottom: ${e.polished.rem(20)};
        padding-top: ${e.polished.rem(24)};
        align-items: flex-end;
        .filterbar-input {
          width:${e.polished.rem(160)};
          margin-right:${e.polished.rem(20)};
        }
      }
      .search-con {
        &{
          padding-top: ${e.polished.rem(30)};
        }
        &>span {
          font-size: ${e.polished.rem(20)};
          line-height: ${e.polished.rem(20)};
          color: ${null===(s=null===(t=null==i?void 0:i.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.dark[600]};
        }
        .banner {
          position: relative;
          .jimu-icon {
            color: ${i.colors.palette.dark[600]};
            cursor: pointer;
          }
          .searchbox {
            padding-left:${e.polished.rem(28)};
            font-size:${e.polished.rem(14)};
            height: ${e.polished.rem(32)};
            width:${e.polished.rem(228)};
            cursor: text;
            box-sizing: border-box;
            padding-right: ${e.polished.rem(20)};
            input {
              flex: 1;
            }
          }
          .searchbox::-ms-clear{
            display: none;
          }
          .icon-close-con {
            color: ${i.colors.palette.dark[600]};
          }
        }
      }

      .section {
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: auto;
        align-content: flex-start;
        height: calc(100% - ${e.polished.rem(165)});
        min-width: ${e.polished.rem(822)};
        padding-bottom: ${e.polished.rem(30)};
        padding-top: ${e.polished.rem(5)};
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
        .bottom_space {
          width: 100%;
          height: ${e.polished.rem(80)};
        }
      }
      .template-con {
        flex-wrap:wrap;
        align-content: flex-start;
      }
      .template-title {
        font-size: ${e.polished.rem(14)};
        color:${i.colors.palette.dark[400]};
        .navbar-nav button.nav-link {
          & {
            color:${i.colors.palette.dark[400]};
          }
          &:hover, &:focus {
            color:${i.colors.black};
          }
        }
        .tap-link a.active {
          font-weight:500;
        }
        .header-nav-bar-con {
          padding:0;
          .navbar-nav {
            border: none;
          }
          .nav-item {
            flex: auto;
          }
        }
        a {
          width:auto;
        }
        .nav-item a.nav-link {
          width: auto;
          white-space: nowrap;
          color: inherit;
        }
        .nav-item a.nav-link:hover, .nav-item a.nav-link:focus {
          color: ${i.colors.black};
        }
        .tap-margin-r {
          margin-right:${e.polished.rem(12)};
        }
      }
      @media only screen and (min-width: 1280px) {
        .homescreen {
          width:${e.polished.rem(1090)};
        }
        .top-padding{
          padding-right: ${e.polished.rem(32)};
          padding-left: ${e.polished.rem(16)};
        }
        .search-con .banner .searchbox {
          width:${e.polished.rem(400)};
        }
        .template-title  .tap-margin-r {
          margin-right:${e.polished.rem(22)};
        }
      }
      @media only screen and (min-width: 1400px) {
        .top-padding{
          padding-right: ${e.polished.rem(37)};
          padding-left: ${e.polished.rem(16)};
        }
        .homescreen {
            width:${e.polished.rem(1360)};
        }
        .template-title  .tap-margin-r {
          margin-right:${e.polished.rem(32)};
        }
      }
      @media only screen and (min-width: 1680px) {
        .homescreen {
            width:${e.polished.rem(1630)};
        }
      }

    `},this.close=()=>{"back"===this.getQueryString("redirect")?e.jimuHistory.browserHistory.back():window.location.href=window.jimuConfig.mountPath},this.isTemplateDisabled=e=>!1,this.onSearch=e=>{const{accessType:t}=this.state,i=t===s.Default,a=0===e.length||e.length>2?e:this.state.searchTextForRequest;this.setState({searchText:e,searchTextForRequest:a,isMyLocalTemplateLoadAll:!1},(()=>{if(e.length>0&&e.length<3)return!1;clearTimeout(this.onSearchTextInputed),this.onSearchTextInputed=setTimeout((()=>{i?this.filterDefaultTemplate():this.refreshAction()}),500)}))},this.handleKeydown=e=>{const t=e.target.value,{accessType:i}=this.state,a=i===s.Default;"Enter"===e.key&&t&&this.setState({searchTextForRequest:t},(()=>{clearTimeout(this.onSearchTextInputed),a?this.filterDefaultTemplate():this.refreshAction()}))},this.clearSearchText=()=>{const{accessType:e,searchTextForRequest:t}=this.state,i=e===s.Default;this.setState({searchText:"",searchTextForRequest:""},(()=>{t&&(clearTimeout(this.onSearchTextInputed),i?this.filterDefaultTemplate():this.refreshAction())}))},this.filterDefaultTemplate=()=>{const{defaultTemplate:e}=this.state,t=e.filter((e=>this._matchearchText(e.title)));this.setState({templates:t})},this.checkUserPrivilege=()=>{const{CheckTarget:t}=e.privilegeUtils;e.privilegeUtils.checkExbAccess(t.AppList).then((e=>{(null==e?void 0:e.capabilities)&&this.setState({capabilities:e.capabilities})}))},this.toggleAlertPopup=()=>{this.setState({isShowAlertPopup:!this.state.isShowAlertPopup,alertPopupMessage:""})},this.filterTemplateByWebmapOrWebsceneUrlParam=e=>this.hasWebmapOrWebsceneUrlParam?e.filter((e=>e.isMapAware)):e,this.state={loading:!1,isShowAlertPopup:!1,alertPopupMessage:"",searchText:"",searchTextForRequest:"",accessType:s.Default,defaultTemplate:[],templates:[],esriGroupTemplates:[],otherTemplate:[],livingAtlasTemplate:[],myPortaltemplates:[],myTemplatesInDevEdtion:[],capabilities:{canCreateExperience:!1,canDeleteExperience:!1,canShareExperience:!1,canUpdateExperience:!1,canViewExperience:!1},esriLivingAtlasGroupId:null,isMyLocalTemplateLoadAll:!1,isShowLivingAtlas:!1,selectedTags:[]};const c=(0,e.getAppStore)().getState().queryObject;this.hasWebmapOrWebsceneUrlParam=!(!(null==c?void 0:c.webmap)&&!(null==c?void 0:c.webscene))}componentDidMount(){this.getDefaultTemplate(),this.checkUserPrivilege(),this.contentNode&&this.contentNode.addEventListener("scroll",this.onScrollHandle.bind(this))}componentDidUpdate(){var t;const{isShowLivingAtlas:s}=this.state;s!==!!(null===(t=(0,e.getAppStore)().getState().portalSelf)||void 0===t?void 0:t.livingAtlasGroupQuery)&&(this.searchLivingAtlasGroups(),this.checkIsShowLivingAtlas())}onScrollHandle(e){const t=e.target.clientHeight,s=e.target.scrollHeight,i=t+e.target.scrollTop+1>s;!this.state.loading&&i&&this.refreshAction(!0)}getQueryString(t){return e.queryString.parse(window.location.search)[t]||""}searchTemplate(e,t=!1,s=i.ArcGISOnline){if(!e)return;let a=null;this.setState({loading:!0});const r=this.getSearchType(s);a=o.appServices.searchApp(e,r),a.then((e=>{const i=e.results;if(!a)return void this.setState({loading:!1});const r=this.initTemplateInfo(i,s);if(this.setTemplateData(r,t,s),this.setState({loading:!1}),window.jimuConfig.isDevEdition){const t=this.checkMyLocalTemplateIsLoadAll(e.nextStart,e.total,s);this.searchMyPortalTemplate(s,t)}}),(()=>{this.setState({loading:!1})}))}render(){const{templates:t,searchText:i,capabilities:a,isShowAlertPopup:r,alertPopupMessage:o,esriGroupTemplates:l,accessType:c,isShowLivingAtlas:p,selectedTags:h}=this.state,{theme:A,intl:m}=this.props,d=this.filterTemplateByWebmapOrWebsceneUrlParam(c===s.ArcGisOnline?l.concat(t):t);return(0,e.jsx)("div",{css:this.getStyle(),className:"widget-choose-template bg-light-300","data-testid":"widget-choose-template"},!this.hasWebmapOrWebsceneUrlParam&&(0,e.jsx)("div",{className:"header-bar"},this.nls("template"),(0,e.jsx)(n.Button,{type:"tertiary","data-testid":"close-button",onClick:this.close,title:this.nls("back")},(0,e.jsx)(D,{size:20}))),(0,e.jsx)("div",{className:"homescreen"},(0,e.jsx)("div",{className:"d-flex search-con top-padding align-items-center"},(0,e.jsx)("span",{className:"flex-grow-1"},this.nls("choseTemplate")),(0,e.jsx)("div",{className:"d-flex"},(0,e.jsx)("div",{className:"banner d-flex position-relative"},(0,e.jsx)(n.TextInput,{prefix:(0,e.jsx)(N,{className:"search-icon position-relative",size:16}),className:"searchbox",placeholder:this.nls("searchPlaceholder"),value:i,allowClear:!0,onKeyDown:e=>{this.handleKeydown(e)},onChange:e=>{this.onSearch(e.target.value)}})))),(0,e.jsx)("div",{className:"header d-flex top-padding"},!this.hasWebmapOrWebsceneUrlParam&&(0,e.jsx)("div",{className:"template-title flex-grow-1"},(0,e.jsx)(n.Navbar,{className:"header-nav-bar-con",border:!1,color:"false",light:!0},(0,e.jsx)(n.Nav,{underline:!0,navbar:!0,justified:!0,fill:!0,"data-testid":"template-menu"},(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:this.nls("chooseTemplateDefault"),onClick:()=>{this.filterTemplateChange(s.Default)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.Default},this.nls("chooseTemplateDefault"))),(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:this.nls("my"),onClick:()=>{this.filterTemplateChange(s.My)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.My},this.nls("my"))),!window.jimuConfig.isDevEdition&&(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:this.nls("myFavorites"),onClick:()=>{this.filterTemplateChange(s.Favorites)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.Favorites},this.nls("myFavorites"))),!window.jimuConfig.isDevEdition&&(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:this.nls("myGroup"),onClick:()=>{this.filterTemplateChange(s.MyGroup)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.MyGroup},this.nls("myGroup"))),!window.jimuConfig.isDevEdition&&(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:this.nls("myOrganization"),onClick:()=>{this.filterTemplateChange(s.MyOrganization)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.MyOrganization},this.nls("myOrganization"))),(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:"ArcGIS Online",onClick:()=>{this.filterTemplateChange(s.ArcGisOnline)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.ArcGisOnline},"ArcGIS Online")),p&&(0,e.jsx)(n.NavItem,{className:"tap-link tap-margin-r",title:this.nls("livingAtlas"),onClick:()=>{this.filterTemplateChange(s.LivingAtlas)}},(0,e.jsx)(n.NavLink,{tag:"button",active:c===s.LivingAtlas},this.nls("livingAtlas"))))))),c===s.Default&&(0,e.jsx)(I,{selectedTags:h,onTagsChange:this.onDefaultTemplateTagChange})),(0,e.jsx)("div",{className:"section position-relative",tabIndex:-1,ref:e=>{this.contentNode=e}},(0,e.jsx)("div",{className:"d-flex template-con homescreen",ref:e=>{this.appListContainer=e}},d.length>0&&d.map(((t,s)=>(0,e.jsx)(T,{key:s,theme:A,info:t,intl:m,accessType:this.state.accessType,disabled:this.isTemplateDisabled(t),onCreateClick:this.onCreateClick,capabilities:a,crateAppByTemplate:this.crateAppByTemplate}))),0===d.length&&!this.state.loading&&(0,e.jsx)(x,{theme:A,intl:m})),(0,e.jsx)("div",{className:"bottom_space"})),this.state.loading&&(0,e.jsx)("div",{className:"loading-con"},(0,e.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-primary-loading"})),(0,e.jsx)(n.AlertPopup,{isOpen:r,title:this.nls("warningPopUpTitle"),hideCancel:!0,toggle:this.toggleAlertPopup},(0,e.jsx)("div",{style:{fontSize:"1rem"}},o)))}}function L(e){l.p=e}E.scrollTop=0})(),c})())}}}));