System.register(["jimu-core","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"],(function(e,t){var o={},i={},s={},n={},a={},r={},l={},d={};return Object.defineProperty(s,"__esModule",{value:!0}),{setters:[function(e){o.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.React=e.React,o.ReactDOM=e.ReactDOM,o.ReactRedux=e.ReactRedux,o.WidgetType=e.WidgetType,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash,o.queryString=e.queryString,o.urlUtils=e.urlUtils,o.utils=e.utils},function(e){i.AppResourceManager=e.AppResourceManager,i.AppWidgetManager=e.AppWidgetManager,i.ToBuilderMessage=e.ToBuilderMessage,i.WidgetSettingManager=e.WidgetSettingManager,i.appConfigUtils=e.appConfigUtils,i.appStateActions=e.appStateActions,i.builderActions=e.builderActions,i.builderAppSync=e.builderAppSync,i.getAppConfigAction=e.getAppConfigAction},function(e){Object.keys(e).forEach((function(t){s[t]=e[t]}))},function(e){n.LayoutItemSizeModes=e.LayoutItemSizeModes,n.searchUtils=e.searchUtils,n.utils=e.utils},function(e){a.getTheme=e.getTheme},function(e){r.Button=e.Button,r.Checkbox=e.Checkbox,r.Label=e.Label,r.Loading=e.Loading,r.LoadingType=e.LoadingType,r.Modal=e.Modal,r.ModalBody=e.ModalBody,r.ModalFooter=e.ModalFooter,r.ModalHeader=e.ModalHeader,r.defaultMessages=e.defaultMessages,r.styleUtils=e.styleUtils},function(e){l.DataSourceRemoveWaringReason=e.DataSourceRemoveWaringReason,l.DataSourceRemoveWarningPopup=e.DataSourceRemoveWarningPopup,l.dataComponentsUtils=e.dataComponentsUtils},function(e){d.TemplateList=e.TemplateList,d.WidgetList=e.WidgetList,d.WidgetSelector=e.WidgetSelector}],execute:function(){e((()=>{var e={9964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg>'},8891:e=>{"use strict";e.exports=o},3137:e=>{"use strict";e.exports=i},6262:e=>{"use strict";e.exports=s},4758:e=>{"use strict";e.exports=n},4796:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=l},7756:e=>{"use strict";e.exports=d}},t={};function u(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,u),s.exports}u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var o in t)u.o(t,o)&&!u.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var c={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(c),u.d(c,{__set_webpack_public_path__:()=>z,default:()=>D});var e=u(8891),t=u(3137),o=u(726),i=u(7756);const s=e.css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;function n(t,o,i){return e.css`
    ${t?s:""};
    overflow: auto;

    .content-section {
      height: 100%;
      width: 100%;
      overflow: auto;
    }

    .content {
      padding: 1.5rem;
      margin: 0 auto;
    }

    .top-section {
      margin-top: 5px;
    }

    .page-name {
      color: ${i.colors.palette.dark[200]};
    }

    .body-section {
      width: 100%;
      display: flex;
      margin-top: 5px;
      overflow: visible;
      position: relative;
      align-items: center;
      // box-shadow: 0 2px 5px 1px rgba(0,0,0,0.15);

      .device-frame {
        position: relative;
        overflow: hidden;
        height: ${o>0?`${o}px`:"auto"};
        flex-grow: 0;
        flex-shrink: 0;

        &.center-origin {
          transform-origin: top center;
          align-self: center;
        }
        &.left-origin {
          transform-origin: top left;
          align-self: flex-start;
        }

        iframe {
          width: 100%;
          // height: 100%;
          border: none;
          position: relative;
          overflow: visible;
        }
      }
    }
  `}var a=u(4758),r=function(e,t,o,i){return new(o||(o=Promise))((function(s,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function r(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};function l(o,i,s){var n,l,u,c,p,g;return r(this,void 0,void 0,(function*(){const{layoutId:h,layoutItemId:m}=s,f=null===(l=null===(n=o.layouts[h])||void 0===n?void 0:n.content[m])||void 0===l?void 0:l.widgetId,v=o.widgets[f],y=Object.keys(null!==(u=null==v?void 0:v.layouts)&&void 0!==u?u:{})[0],C=null===(p=null===(c=null==v?void 0:v.layouts)||void 0===c?void 0:c[y])||void 0===p?void 0:p[i];if(!C)return yield Promise.resolve(o);const S=o.layouts[C],b=Object.keys(null!==(g=S.content)&&void 0!==g?g:{}).sort(((e,t)=>parseInt(S.content[e].bbox.left,10)-parseInt(S.content[t].bbox.left,10)));let{embedLayoutId:w,updatedAppConfig:M}=yield function(o,i,s){return r(this,void 0,void 0,(function*(){const n=(0,t.getAppConfigAction)(o),r=t.appConfigUtils.getUniqueId(o,"widget"),l={uri:"widgets/layout/column/",id:r},d=yield t.AppWidgetManager.getInstance().handleNewWidgetJson(l);n.createWidget((0,e.Immutable)(d));const u=(0,e.Immutable)({bbox:{left:0,width:12},id:`${a.utils.getMaximumId(o.layouts[s])+1}`,type:e.LayoutItemType.Widget,widgetId:l.id,setting:{autoProps:{height:a.LayoutItemSizeModes.Auto},autoHeight:!0}}),c=n.appConfig.widgets[r],p=Object.keys(c.layouts)[0],g=c.layouts[p][i],h=o.layouts[s].order;return{widgetId:r,embedLayoutId:g,updatedAppConfig:n.appConfig.setIn(["layouts",s,"content",u.id],u).setIn(["layouts",s,"order"],[].concat(null!=h?h:[],u.id))}}))}(o,i,C);for(let e=0;e<b.length;e+=1){const o=M.layouts[C].content[b[e]],i=a.utils.calHeightOfLayoutItem(200,o),s=d(M,{layoutId:C,layoutItemId:b[e]},w),n=s.layoutInfo;M=s.appConfig;let r=(0,t.getAppConfigAction)(M);r.editLayoutItemBBox(n,{width:"auto",height:i.height}).editLayoutItemSetting(n,i.setting),M=r.appConfig}M=M.setIn(["layouts",h,"content",m,"setting","autoHeight"],!0).setIn(["layouts",h,"content",m,"setting","autoProps","height"],a.LayoutItemSizeModes.Auto);const I=(0,t.getAppConfigAction)(M);return I.clearParentOfContent(s,!0,i),I.setParentOfContent(s,!0,i),Promise.resolve(I.appConfig)}))}function d(e,t,o){var i;const{layoutId:s,layoutItemId:n}=t,r=e.layouts[s].content[n],l=e.layouts[o],d=`${a.utils.getMaximumId(l)+1}`,u=r.set("id",d).setIn(["setting","autoProps","width"],a.LayoutItemSizeModes.Auto);let c=e.setIn(["layouts",o,"content",d],u).setIn(["layouts",o,"order"],[].concat(null!==(i=l.order)&&void 0!==i?i:[],d)),p=e.layouts[s];const g=[].concat(p.order),h=g.indexOf(n);return g.splice(h,1),p=p.set("content",p.content.without(n)).set("order",g),c=c.setIn(["layouts",s],p),{appConfig:c,layoutInfo:{layoutId:o,layoutItemId:d}}}var p=u(9964),g=u.n(p);const h=t=>{const o=window.SVG,{className:i}=t,s=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:n,src:g()},s)):e.React.createElement("svg",Object.assign({className:n},s))};class m extends e.React.PureComponent{constructor(t){super(t),this.handleCloseBtn=()=>{this.isOkClick=!1,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleOkClick=()=>{this.isOkClick=!0,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleToggle=()=>{this.setState({isOpen:!this.state.isOpen});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.onModalClosed=()=>{const{onClosed:e}=this.props;e&&e(this.isOkClick),this.isOkClick=!1},this.formatMessage=e=>this.props.formatMessage(e),this.getStyle=()=>e.css`
      .modal-body{
        overflow-y: auto;
        max-height: 360px;
        padding: 0;
      }
      .modal-content{
        width: auto;
        background: var(--light-300);
        padding: 30px;
        border: none;
      }
      .modal-footer{
        padding: 0;
        margin-top: 30px;
        .btn {
          min-width: 80px;
          + .btn {
            margin-left: 10px;
          }
        }
      }
      &.modal-dialog{
        width: auto;
      }
      .choose-template-description{
        width: 100%;
        font-size: ${14/17}rem;
        user-select:none;
      }

      .title-icon {
        padding: 0 6px;
      }
      .title-label {
        font-size: 1rem;
        color: var(--black);
      }

      .message {
        color: var(--dark-800);
        margin-left: 36px;
        margin-top: 1rem;
      }
    `,this.state={isOpen:!!t.isOpen}}render(){let{isOpen:t}=this.props;return t=void 0===t?this.state.isOpen:t,(0,e.jsx)(o.Modal,{css:this.getStyle(),modalClassName:"toc-add-page-modal",backdropClassName:"toc-add-page-modal",isOpen:t,onClosed:this.onModalClosed,toggle:this.handleToggle,centered:!0},(0,e.jsx)(o.ModalBody,null,(0,e.jsx)("div",{className:"d-flex align-items-center"},(0,e.jsx)("div",{className:"title-icon"},(0,e.jsx)(h,{size:24,color:"var(--warning-600)"})),(0,e.jsx)("div",{className:"title-label"},this.props.title)),(0,e.jsx)("div",{className:"message font-body2"},this.props.children)),(0,e.jsx)(o.ModalFooter,null,(0,e.jsx)(o.Button,{type:"primary",onClick:this.handleOkClick},this.formatMessage("certainly")),(0,e.jsx)(o.Button,{onClick:this.handleCloseBtn},this.formatMessage("cancel"))))}}class f extends e.React.PureComponent{constructor(o){super(o),this.formatMessage=(e,t)=>this.props.formatMessage(e,t),this.toggleLayoutMode=()=>{const{isAuto:e}=this.props;e?this.handleToggleCustomConfirm():this.handleToggleAutoConfirm()},this.handleToggleAutoConfirm=()=>{this.setState({showAutoConfirm:!this.state.showAutoConfirm})},this.autoConfirmClosed=e=>{e&&(this.props.isHeader?this.resetHeader():this.props.isFooter?this.resetFooter():this.props.isDialog?this.resetDialog():this.resetPageBody())},this.handleToggleCustomConfirm=()=>{this.setState({showCustomConfirm:!this.state.showCustomConfirm})},this.customConfirmClosed=e=>{e&&(this.props.isHeader?this.unLockHeaderLayout():this.props.isFooter?this.unLockFooterLayout():this.props.isDialog?this.unLockDialogLayout():this.unLockPageBodyLayout())},this.unLockFooterLayout=()=>{const{browserSizeMode:e,mainSizeMode:o}=this.props;(0,t.getAppConfigAction)().createLayoutForSizeModeForFooter(e,o).exec()},this.unLockHeaderLayout=()=>{const{browserSizeMode:e,mainSizeMode:o}=this.props;(0,t.getAppConfigAction)().createLayoutForSizeModeForHeader(e,o).exec()},this.unLockPageBodyLayout=()=>{return o=this,i=void 0,n=function*(){const{browserSizeMode:o,mainSizeMode:i,pageId:s}=this.props,n=(0,t.getAppConfigAction)(),a=n.appConfig.pages[s];n.createLayoutForSizeModeForPageBody(o,i,s);let d=n.appConfig;if(a.mode===e.PageMode.AutoScroll&&o===e.BrowserSizeMode.Small){const e=d.pages[s].layout[o];d=yield function(e,t,o){return r(this,void 0,void 0,(function*(){const i=[],s=o=>{var n;const a=e.layouts[o],r=null!==(n=a.order)&&void 0!==n?n:[];for(let n=0;n<r.length;n++){const l=a.content[r[n]];if(l.widgetId){const a=e.widgets[l.widgetId];if("widgets/layout/row/"===(null==a?void 0:a.uri)&&i.push({layoutId:o,layoutItemId:r[n]}),null==a?void 0:a.layouts)for(let e in a.layouts){const o=a.layouts[e][t];o&&s(o)}}}};s(o);let n=e;for(let e=0;e<i.length;e++)n=yield l(n,t,i[e]);return Promise.resolve(n)}))}(d,o,e)}(0,t.getAppConfigAction)(d).exec()},new((s=void 0)||(s=Promise))((function(e,t){function a(e){try{l(n.next(e))}catch(e){t(e)}}function r(e){try{l(n.throw(e))}catch(e){t(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof s?o:new s((function(e){e(o)}))).then(a,r)}l((n=n.apply(o,i||[])).next())}));var o,i,s,n},this.unLockDialogLayout=()=>{const{browserSizeMode:e,mainSizeMode:o,dialogId:i}=this.props,s=(0,t.getAppConfigAction)();s.createLayoutForSizeModeForDialog(e,o,i);const n=s.appConfig;(0,t.getAppConfigAction)(n).exec()},this.resetHeader=()=>{const{browserSizeMode:e}=this.props;(0,t.getAppConfigAction)().removeSizeModeLayoutFromHeader(e).exec()},this.resetFooter=()=>{const{browserSizeMode:e}=this.props;(0,t.getAppConfigAction)().removeSizeModeLayoutFromFooter(e).exec()},this.resetPageBody=()=>{const{browserSizeMode:e,pageId:o}=this.props;(0,t.getAppConfigAction)().removeSizeModeLayoutFromPageBody(o,e).exec()},this.resetDialog=()=>{const{browserSizeMode:e,dialogId:o}=this.props;(0,t.getAppConfigAction)().removeSizeModeLayoutFromDialog(o,e).exec()},this.state={showAutoConfirm:!1,showCustomConfirm:!1}}getStyle(){const{isAuto:t,isHeader:o,isFooter:i}=this.props;let s;return i?s=e.css`position: absolute;`:o||i||(s=e.css`
        position: sticky;
        transform: translateZ(1px);
      `),e.css`
      ${s};
      .state-toggle-btn{
        cursor: pointer;
        position: relative;
        padding: 0 1rem;
        overflow: hidden;
        background: var(--light-500);
        border-radius: 2px;
      }
      .toggle-part {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      }
      .toggle-highlight {
        position: absolute;
        height: 30px;
        left: 0;
        right: 0;
        background-color: var(--primary);
        transition: 0.2s;
        top: ${t?0:30}px;
      }
    `}getSizeModeNls(t){switch(t){case e.BrowserSizeMode.Small:return this.formatMessage("smallScreen");case e.BrowserSizeMode.Medium:return this.formatMessage("mediumScreen");default:return this.formatMessage("largeScreen")}}render(){const{isAuto:t,theme:o,mainSizeMode:i}=this.props,s=this.getSizeModeNls(i);return(0,e.jsx)("div",{style:this.props.style,css:this.getStyle()},(0,e.jsx)("div",{className:"d-flex flex-column state-toggle-btn",onClick:this.toggleLayoutMode,title:t?`${this.formatMessage("autoEnabledTip",{label:s})} ${this.formatMessage("customDisabledTip")}`:`${this.formatMessage("customEnabledTip")} ${this.formatMessage("autoDisabledTip")}`},(0,e.jsx)("div",{className:"toggle-part text-nowrap"},this.formatMessage("auto")),(0,e.jsx)("div",{className:"toggle-part text-nowrap"},this.formatMessage("custom")),(0,e.jsx)("div",{className:"toggle-highlight"})),(0,e.jsx)(m,{theme:o,toggle:this.handleToggleAutoConfirm,onClosed:this.autoConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showAutoConfirm,formatMessage:this.props.formatMessage},(0,e.jsx)("div",null,(0,e.jsx)("div",null,this.formatMessage("autoConfirmMsg",{label:s,auto:this.formatMessage("auto").toLocaleLowerCase()})))),(0,e.jsx)(m,{theme:o,toggle:this.handleToggleCustomConfirm,onClosed:this.customConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showCustomConfirm,formatMessage:this.props.formatMessage},(0,e.jsx)("div",null,(0,e.jsx)("div",null,this.formatMessage("customConfirmMsg1",{custom:this.formatMessage("custom").toLocaleLowerCase()})),(0,e.jsx)("div",{css:e.css`margin-top: 1rem;`},this.formatMessage("customConfirmMsg2")))))}}const v={certainly:"OK",autoEnabledTip:"Auto layout is enabled. Widgets are synced with those on the {label} and arranged automatically.",autoDisabledTip:"Click to enable auto layout.",customEnabledTip:"Custom layout is enabled. Widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",customDisabledTip:"Click to enable custom layout.",confirm:"Confirm",enableConfirm:"Are you sure you want to enable it?",autoConfirmMsg:"By enabling {auto}, the widgets will be synced with those on the {label} and arranged automatically.",customConfirmMsg1:"By enabling {custom}, you can manually arrange widgets for this device mode.",customConfirmMsg2:"However, widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",dragToResize:"Drag to resize",largeScreen:"Large screen device",mediumScreen:"Medium screen device",smallScreen:"Small screen device",deleteWarning:'Deleting a widget will remove it from all devices views. Use "Move to the pending list" button to remove it from current device view and preserve it in the others.',confirmDelete:"Are you sure you want to delete this widget from all devices?"},y="confirm-delete-widget";function C(){return`${e.utils.getLocalStorageAppKey()}-${y}`}function S(o,i,s,n){var r,l,d;if(!o)return!1;if("false"===e.utils.readLocalStorage(C()))return!1;if(!function(o){var i;if(!o)return!1;const s=(0,t.getAppConfigAction)().appConfig,{layoutId:n,layoutItemId:a}=o,r=s.layouts[n].content[a];return!!r&&(r.type===e.LayoutItemType.Section||r.type===e.LayoutItemType.ScreenGroup||!(r.type!==e.LayoutItemType.Widget||!r.widgetId)&&(null===(i=s.widgets[r.widgetId].manifest)||void 0===i?void 0:i.widgetType)!==e.WidgetType.Layout)}(o))return!1;const u=(0,t.getAppConfigAction)().appConfig;let c;return c=i===e.PagePart.Header?null===(r=u.header)||void 0===r?void 0:r.layout:i===e.PagePart.Footer?null===(l=u.footer)||void 0===l?void 0:l.layout:i===e.PagePart.Body?u.pages[s].layout:null===(d=u.dialogs[n])||void 0===d?void 0:d.layout,Object.keys(null!=c?c:{}).length>1&&function(o,i){var s,n;const{layoutId:r,layoutItemId:l}=o,d=(0,t.getAppConfigAction)().appConfig,u=d.layouts[r].content[l],c=u.type;let p;c===e.LayoutItemType.Widget?p=u.widgetId:c===e.LayoutItemType.Section?p=u.sectionId:c===e.LayoutItemType.ScreenGroup&&(p=u.screenGroupId);const g=null!==(n=null===(s=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===s?void 0:s.browserSizeMode)&&void 0!==n?n:e.BrowserSizeMode.Large;return Object.keys(i).filter((e=>e!==g)).some((e=>a.searchUtils.getContentsInLayoutRecursive(d,i[e],c,e).includes(p)))}(o,c)}function b(t){const{activePagePart:i,currentPageId:s,currentDialogId:n,formatMessage:a,onConfirmDelete:r,onCancelDelete:l}=t,[d,u]=e.React.useState(!1),c=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete}),e.ReactRedux.shallowEqual),p=e.React.useMemo((()=>S(c,i,s,n)),[c,i,s,n]),g=e.React.useCallback((()=>{r(c)}),[c]);e.React.useEffect((()=>{c&&!p&&g()}),[c,p]);const m=e.React.useCallback((()=>{u(!d)}),[d]),f=e.React.useCallback((()=>{u(!1),l()}),[]),v=e.React.useCallback((()=>{var t;t=!d,e.utils.setLocalStorage(C(),`${t}`),g(),u(!1)}),[c,d]);return p?(0,e.jsx)(o.Modal,{isOpen:!0,centered:!0,css:e.css`
    .modal-body{
      overflow-y: auto;
      max-height: 360px;
      padding: 0;
    }
    .modal-content{
      width: auto;
      background: var(--light-300);
      padding: 30px;
      border: none;
    }
    .modal-footer{
      padding: 0;
      margin-top: 30px;
      .btn {
        min-width: 80px;
        + .btn {
          margin-left: 10px;
        }
      }
    }
    &.modal-dialog{
      width: auto;
    }

    .title-icon {
      padding: 0 6px;
    }
    .title-label {
      font-size: 1rem;
      color: var(--black);
    }

    .message {
      margin-left: 36px;
      margin-top: 1rem;
    }
  `},(0,e.jsx)(o.ModalBody,null,(0,e.jsx)("div",{className:"d-flex align-items-start"},(0,e.jsx)("div",{className:"title-icon"},(0,e.jsx)(h,{size:24,color:"var(--danger)"})),(0,e.jsx)("div",{className:"title-label"},a("confirmDelete"))),(0,e.jsx)("div",{className:"message"},(0,e.jsx)("div",{"data-testid":"confirmDeleteMessage",className:"font-body2",css:e.css`
            color: var(--dark-800);
          `},a("deleteWarning")),(0,e.jsx)("div",{css:e.css`margin-top: 1.5rem;`},(0,e.jsx)(o.Label,{check:!0,className:"justify-content-start align-items-start",css:e.css`
              color: var(--black);
            `},(0,e.jsx)(o.Checkbox,{"data-testid":"dontShowAgain",style:{cursor:"pointer"},className:"mr-2",checked:d,onChange:m}),a("dialogPreventDisplayAgainDefaultText"))))),(0,e.jsx)(o.ModalFooter,null,(0,e.jsx)(o.Button,{"data-testid":"deleteBtn",type:"danger",onClick:v},a("delete")),(0,e.jsx)(o.Button,{"data-testid":"cancelBtn",onClick:f},a("cancel")))):null}var w=u(338);function M(o){var i,s,n;const a=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete}),e.ReactRedux.shallowEqual),r=e.React.useMemo((()=>function(o){var i,s,n,a,r;if(!o)return!1;let l=!1;const{layoutId:d,layoutItemId:u}=o,c=(0,t.getAppConfigAction)().appConfig,p=null===(n=null===(s=null===(i=c.layouts)||void 0===i?void 0:i[d])||void 0===s?void 0:s.content)||void 0===n?void 0:n[u];if((null==p?void 0:p.type)===e.LayoutItemType.Widget&&p.widgetId){const e=null===(a=c.widgets)||void 0===a?void 0:a[p.widgetId];(null===(r=null==e?void 0:e.outputDataSources)||void 0===r?void 0:r.length)>0&&(l=e.outputDataSources.some((e=>w.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(e,c.widgets).length>0)))}return l}(a)),[a]),l=e.React.useCallback((()=>{o.onConfirmDelete(a)}),[a]);e.React.useEffect((()=>{a&&!r&&l()}),[a,r]);const d=e.React.useCallback((()=>{o.onCancelDelete()}),[]);if(!r)return null;const u=(0,t.getAppConfigAction)().appConfig,c=null===(n=null===(s=null===(i=null==u?void 0:u.layouts)||void 0===i?void 0:i[null==a?void 0:a.layoutId])||void 0===s?void 0:s.content)||void 0===n?void 0:n[null==a?void 0:a.layoutItemId];return(0,e.jsx)(w.DataSourceRemoveWarningPopup,{isOpen:!0,toggle:d,widgetId:null==c?void 0:c.widgetId,reason:w.DataSourceRemoveWaringReason.SourceWidgetRemoved,afterRemove:l})}var I=u(6262);function x(t){const{data:o}=t,{templateMethod:s,onSelect:n}=null!=o?o:{},a=e.hooks.useEventCallback((e=>{n(e)}));return null==o?null:(0,e.jsx)(i.TemplateList,{templates:I[s](),onItemSelect:a})}var A=u(4796);function j(t){const{data:o}=t,{isPlaceholder:s,isItemAccepted:n,onSelect:a}=null!=o?o:{},r=e.hooks.useEventCallback((e=>{a(e)}));return null==o?null:(0,e.jsx)(i.WidgetList,{isPlaceholder:s,isAccepted:n,onSelect:r,theme:(0,A.getTheme)()})}const L=e.css`
  justify-content: center;
  .modal-body{
    overflow-y: auto;
    max-height: 360px;
    padding: 0;
  }
  .modal-content{
    width: auto;
    background: var(--light-300);
    border: none;
  }
  .title-label {
    font-size: 1rem;
    color: var(--black);
  }
`;function R(){const[i,s]=e.React.useState(),n=e.hooks.useTranslation(o.defaultMessages),[a,r]=e.React.useState(!1),l=e.React.useCallback((()=>{r(!a)}),[a]),d=e.hooks.useEventCallback((()=>{r(!1)}));let u;return e.hooks.useEffectOnce((()=>{window._builderPubsub.subscribe(`to_builder.${t.ToBuilderMessage.PopperSelector}`,((e,t)=>{s(Object.assign(Object.assign({},t),{onSelect:e=>{var o;null===(o=null==t?void 0:t.onSelect)||void 0===o||o.call(t,e),r(!1)}})),r(!0)}))})),"template"===(null==i?void 0:i.type)?u=n("selectTemplate"):"widget"===(null==i?void 0:i.type)&&(u=n("addWidget")),(0,e.jsx)(o.Modal,{css:L,modalClassName:"template-modal",isOpen:a,onClosed:d,toggle:l,centered:!0},(0,e.jsx)(o.ModalHeader,{toggle:d},u),(0,e.jsx)(o.ModalBody,null,(0,e.jsx)("div",{className:"d-flex align-items-center"},(0,e.jsx)(x,{data:"template"===(null==i?void 0:i.type)?i:null}),(0,e.jsx)(j,{data:"widget"===(null==i?void 0:i.type)?i:null}))))}class D extends e.React.PureComponent{constructor(o){super(o),this.resizeIframe=()=>{const{viewportSize:t,pageMode:o,appMode:i,currentDialogId:s}=this.props;if(i!==e.AppMode.Design||s)return void(this.deviceRef.current.style.height=`${t.height}px`);if(o!==e.PageMode.AutoScroll)return;const n=this.appIframe.contentWindow.document.documentElement.querySelector("div#app > div.page-renderer");if(n){const e=n.getBoundingClientRect(),o=Math.round(Math.max(e.height,t.height));this.deviceRef.current.style.height=`${o}px`}},this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:v[e]},t),this.onChooseWidget=o=>{const i={id:e.appConfigUtils.getUniqueId(this.props.appConfig,"widget"),uri:o,context:e.appConfigUtils.getWidgetContext(o)};t.AppWidgetManager.getInstance().handleNewWidgetJson(i).then((e=>{this.props.dispatch(t.builderActions.closeChooseWidgetPopup())}))},this.clearSelectionInApp=()=>{t.builderAppSync.publishChangeSelectionToApp(null)},this.showConfirmDeleteDsDialog=()=>{this.setState({shouldShowDeleteDsDialog:!0})},this.hideConfirmDeleteDsDialog=()=>{this.setState({shouldShowDeleteDsDialog:!1})},this.removeLayoutItem=o=>{this.resetConfirmDeleteContent(),function(o){var i,s,n,r,l,d;if((null===(s=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.appMode)!==e.AppMode.Design)return;const{layoutId:u,layoutItemId:c}=o,p=(0,t.getAppConfigAction)().appConfig,g=null===(r=null===(n=p.layouts[u])||void 0===n?void 0:n.content)||void 0===r?void 0:r[c];var h;g&&(null!==(d=null===(l=p.forBuilderAttributes)||void 0===l?void 0:l.lockLayout)&&void 0!==d&&d?g.type===e.LayoutItemType.Widget&&g.widgetId&&function(e,o){var i;let s=(0,t.getAppConfigAction)().appConfig;const{layoutId:n,layoutItemId:r}=e,l=a.searchUtils.findLayoutItem(s,e);s=s.setIn(["layouts",n,"content",r],l.without("widgetId"));let d=s.widgets[o];Object.keys(null!==(i=d.parent)&&void 0!==i?i:{}).forEach((e=>{const t=d.parent[e],i=t.filter((e=>e.layoutId!==n||e.layoutItemId!==r));t.length!==i.length&&(s=s.setIn(["widgets",o,"parent",e],i))})),(0,t.getAppConfigAction)(s).removeWidget(o).exec()}(o,g.widgetId):g.type===e.LayoutItemType.Widget?g.widgetId?function(e,o){const i=(0,t.getAppConfigAction)(),s=a.searchUtils.findParentLayoutInfo(e,i.appConfig,a.utils.getCurrentSizeMode());t.builderAppSync.publishChangeSelectionToApp(s),i.removeWidget(o).exec()}(o,g.widgetId):function(e){const o=(0,t.getAppConfigAction)(),i=a.searchUtils.findParentLayoutInfo(e,o.appConfig,a.utils.getCurrentSizeMode());o.removeLayoutItem(e,!1).exec(),t.builderAppSync.publishChangeSelectionToApp(i)}(o):g.type===e.LayoutItemType.Section?function(e,o){const i=(0,t.getAppConfigAction)(),s=a.searchUtils.findParentLayoutInfo(e,i.appConfig,a.utils.getCurrentSizeMode());i.removeSection(o).exec(),t.builderAppSync.publishChangeSelectionToApp(s)}(o,g.sectionId):g.type===e.LayoutItemType.ScreenGroup&&(h=g.screenGroupId,(0,t.getAppConfigAction)().removeScreenGroup(h).exec(),t.builderAppSync.publishChangeSelectionToApp(null)))}({layoutId:null==o?void 0:o.layoutId,layoutItemId:null==o?void 0:o.layoutItemId})},this.resetConfirmDeleteContent=()=>{this.hideConfirmDeleteDsDialog(),(0,e.getAppStore)().dispatch(t.builderActions.confirmDeleteContentChanged(null))},this.state={appUrl:null,isPortrait:!0,shouldShowDeleteDsDialog:!1},this.resizeRef=e.React.createRef(),this.deviceRef=e.React.createRef(),this.contentRef=e.React.createRef(),this.debounceResizeIframe=e.lodash.debounce(this.resizeIframe,200)}componentDidMount(){this.setAppUrl(),e.lodash.defer((()=>{this.resizeIframe()}))}componentDidUpdate(t){this.setAppUrl();const{viewportSize:o,zoomScale:i,appMode:s}=this.props;this.viewportWidth===o.width&&Math.round(10*this.zoomScale)===Math.round(10*i)||(this.viewportWidth=o.width,this.zoomScale=i,this.applyZoomScale(this.props.zoomScale)),s!==t.appMode&&s===e.AppMode.Run&&this.contentRef.current&&(this.contentRef.current.scrollTop=0),this.debounceResizeIframe()}setAppUrl(){const o=e.urlUtils.getAppIdPageIdFromUrl().pageId;if(o&&"default"!==o)return;let i=`${window.jimuConfig.mountPath}experience/`;const s=this.props.queryObject;let n,a={draft:"true"};if(s.id?(n=s.id,n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(0,n.length-1)),window.jimuConfig.useStructuralUrl?i+=this.props.queryObject.id+"/":a.id=this.props.queryObject.id):s.app_config&&(n=s.app_config,a.config=s.app_config),a=Object.assign(a,s.without("id","config","views","theme")),i+="?"+e.queryString.stringify(a),this.state.appUrl!==i){if(this.props.currentAppId!==n){const e=t.AppResourceManager.getInstance();e.clearResources(this.props.currentAppId),e.clearResources(n),t.WidgetSettingManager.getInstance().destoryAllWidgetSettingClasses()}this.setState({appUrl:i})}this.props.currentAppId!==n&&this.props.dispatch(t.appStateActions.inAppAppStateChanged(null))}calAvailableWidth(){const e=this.contentRef.current.getBoundingClientRect();let t=parseFloat(o.styleUtils.remToPixel("3rem"));return isNaN(t)&&(t=48),e.width-t}applyZoomScale(e,t){const{viewportSize:o}=this.props;(null!=t?t:this.calAvailableWidth())<o.width?(this.deviceRef.current.classList.add("left-origin"),this.deviceRef.current.classList.remove("center-origin")):(this.deviceRef.current.classList.add("center-origin"),this.deviceRef.current.classList.remove("left-origin")),this.deviceRef.current.style.transform=`scale(${e})`}getButtonGroupStyle(){return e.css`
      position: absolute !important;
      right: 20px;
      top: 15px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
      button {
        background: white !important;
        border: none !important;
      }

      button:focus {
        box-shadow: none !important;
      }

      button.active {
        background: #00a6b6 !important;
      }
    `}syncLayoutHandler(){var t,o,i,s;const{appConfig:n,appMode:a,currentPageId:r,browserSizeMode:l,viewportSize:d,currentDialogId:u}=this.props;if(!n||a!==e.AppMode.Design)return null;const c=n.mainSizeMode;if(l===c)return null;let p;p=(null===(o=null===(t=this.deviceRef)||void 0===t?void 0:t.current)||void 0===o?void 0:o.classList.contains("center-origin"))?`calc(50% + ${d.width/2+10}px)`:`${d.width+10}px`;const g=null===(i=n.pages)||void 0===i?void 0:i[r],h=null===(s=n.dialogs)||void 0===s?void 0:s[u],m=n.header&&g.header&&(n.header.height[l]||n.header.height[c])||0;return(0,e.jsx)("div",{css:e.css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: ${p};
        `,className:"d-flex flex-column sync-layout-handler"},g.header&&!u&&(0,e.jsx)(f,{isAuto:!n.header.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,pageId:r,browserSizeMode:l,mainSizeMode:n.mainSizeMode,isHeader:!0}),!u&&(0,e.jsx)(f,{isAuto:!g.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:n.mainSizeMode,pageId:r,style:{marginTop:`${Math.max(+m-60,20)}px`,top:20}}),g.footer&&!u&&(0,e.jsx)(f,{isAuto:!n.footer.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:n.mainSizeMode,pageId:r,isFooter:!0,style:{bottom:30}}),u&&(0,e.jsx)(f,{isAuto:!h.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:n.mainSizeMode,dialogId:u,isDialog:!0,style:{top:"calc( 50% - 30px)",position:"fixed"}}))}render(){var s;const{appConfig:a,theme:r,pageMode:l,viewportSize:d,loadAppConfigError:u}=this.props,c=l===e.PageMode.FitWindow,p=this.getScaledViewportSize(),g=null!==(s=null==d?void 0:d.height)&&void 0!==s?s:0,h=a||u;return(0,e.jsx)("div",{css:n(c,g,r),onClick:this.clearSelectionInApp,className:"jimu-widget widget-builder-app-loader"},!h&&e.ReactDOM.createPortal((0,e.jsx)(o.Loading,{type:o.LoadingType.Primary}),document.body),(0,e.jsx)("div",{className:"content-section",ref:this.contentRef},(0,e.jsx)("div",{className:"content",style:{minHeight:c?p.height+100:null,minWidth:"100%",width:`calc(${p.width}px + 3rem)`}},(0,e.jsx)("div",{ref:this.resizeRef,className:(0,e.classNames)("body-section d-flex flex-column justify-content-start")},(0,e.jsx)("div",{ref:this.deviceRef,className:(0,e.classNames)("device-frame shadow d-flex flex-grow-1",{invisible:!h}),style:Object.assign(Object.assign({},this.getDeviceSize()),{overflow:"visible"})},(0,e.jsx)("iframe",{allowFullScreen:!0,name:e.APP_FRAME_NAME_IN_BUILDER,src:this.state.appUrl,className:"config-preview",ref:e=>this.appIframe=e}),this.syncLayoutHandler())),this.props.showChooseWidgetPopup&&(0,e.jsx)(i.WidgetSelector,{onOK:this.onChooseWidget,title:"Choose Widget",onCancel:()=>this.props.dispatch(t.builderActions.closeChooseWidgetPopup())}))),(0,e.jsx)(b,{formatMessage:this.formatMessage,activePagePart:this.props.activePagePart,currentPageId:this.props.currentPageId,currentDialogId:this.props.currentDialogId,onConfirmDelete:this.showConfirmDeleteDsDialog,onCancelDelete:this.resetConfirmDeleteContent}),this.state.shouldShowDeleteDsDialog&&(0,e.jsx)(M,{onConfirmDelete:this.removeLayoutItem,onCancelDelete:this.resetConfirmDeleteContent}),(0,e.jsx)(R,null))}getDeviceSize(){const{pageMode:t,viewportSize:o,appMode:i,currentDialogId:s}=this.props;return t===e.PageMode.FitWindow||i!==e.AppMode.Design||t===e.PageMode.AutoScroll&&s?o:{width:o.width}}getScaledViewportSize(){const{viewportSize:e}=this.props,{zoomScale:t}=this.props;return{width:e.width*t,height:e.height*t}}}function z(e){u.p=e}D.mapExtraStateProps=(t,o)=>{var i,s,n,a,r,l,d,u,c,p,g,h,m,f,v,y,C,S,b,w,M;const I=null===(s=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.currentPageId,x=(null===(n=t.appStateInBuilder)||void 0===n?void 0:n.browserSizeMode)||e.BrowserSizeMode.Large;let A;I&&(A=null===(d=null===(l=null===(r=null===(a=t.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===r?void 0:r.pages)||void 0===l?void 0:l[I])||void 0===d?void 0:d.mode);const j=e.utils.findViewportSize(null===(u=t.appStateInBuilder)||void 0===u?void 0:u.appConfig,x);return{showChooseWidgetPopup:t.builder.showChooseWidgetPopup,currentDialogId:null===(p=null===(c=t.appStateInBuilder)||void 0===c?void 0:c.appRuntimeInfo)||void 0===p?void 0:p.currentDialogId,currentPageId:I,pageMode:A,viewportSize:j,appConfig:null===(g=t.appStateInBuilder)||void 0===g?void 0:g.appConfig,loadAppConfigError:null===(h=t.appStateInBuilder)||void 0===h?void 0:h.loadAppConfigError,currentAppId:t.builder.currentAppId,browserSizeMode:x,appMode:null===(f=null===(m=t.appStateInBuilder)||void 0===m?void 0:m.appRuntimeInfo)||void 0===f?void 0:f.appMode,zoomScale:null!==(C=null===(y=null===(v=t.appStateInBuilder)||void 0===v?void 0:v.appRuntimeInfo)||void 0===y?void 0:y.zoomScale)&&void 0!==C?C:1,widgetsRuntimeInfo:null===(S=t.appStateInBuilder)||void 0===S?void 0:S.widgetsRuntimeInfo,activePagePart:null===(w=null===(b=t.appStateInBuilder)||void 0===b?void 0:b.appRuntimeInfo)||void 0===w?void 0:w.activePagePart,isRTL:null===(M=t.appContext)||void 0===M?void 0:M.isRTL,queryObject:t.queryObject}}})(),c})())}}}));