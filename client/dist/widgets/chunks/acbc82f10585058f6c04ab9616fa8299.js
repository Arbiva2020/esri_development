"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-notice_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-notice.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-notice.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalciteNotice": () => (/* binding */ CalciteNotice),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */









const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
};

const noticeCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-color:var(--calcite-ui-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-color:var(--calcite-ui-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-ui-warning)}";

const Notice = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteNoticeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteNoticeClose", 6);
    this.calciteNoticeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteNoticeOpen", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.close = () => {
      this.open = false;
      this.calciteNoticeClose.emit();
    };
    this.open = false;
    this.kind = "brand";
    this.closable = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.width = "auto";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.f)(_resources_js__WEBPACK_IMPORTED_MODULE_5__.K, this.icon, this.kind);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.f)(_resources_js__WEBPACK_IMPORTED_MODULE_5__.K, this.icon, this.kind);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  render() {
    const { el } = this;
    const closeButton = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("button", { "aria-label": this.messages.close, class: CSS.close, onClick: this.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButton = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const hasActionEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(el, SLOTS.actionsEnd);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.container }, this.requestedIcon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.icon }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }))) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.title }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.message }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.link })), hasActionEnd ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.actionsEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.actionsEnd }))) : null, this.closable ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const noticeLinkEl = this.el.querySelector("calcite-link");
    if (!this.closeButton && !noticeLinkEl) {
      return;
    }
    if (noticeLinkEl) {
      noticeLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "icon": ["updateRequestedIcon"],
    "kind": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return noticeCss; }
}, [1, "calcite-notice", {
    "open": [1540],
    "kind": [513],
    "closable": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "scale": [513],
    "width": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-notice", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-notice":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Notice);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNotice = Notice;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   "d": () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(target);
  });
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KindIcons)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
var KindIcons;
(function (KindIcons) {
  KindIcons["brand"] = "lightbulb";
  KindIcons["danger"] = "exclamationMarkTriangle";
  KindIcons["info"] = "information";
  KindIcons["success"] = "checkCircle";
  KindIcons["warning"] = "exclamationMarkTriangle";
})(KindIcons || (KindIcons = {}));




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYWNiYzgyZjEwNTg1MDU4ZjZjMDRhYjk2MTZmYTgyOTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUc7QUFDWTtBQUNuRDtBQUN5QztBQUM3QjtBQUNvQztBQUNsRTtBQUNPOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxpQkFBaUIsNENBQTRDLDZDQUE2Qyw4R0FBOEcsc0JBQXNCLHNDQUFzQyxrQkFBa0Isa0hBQWtILHNCQUFzQixzQ0FBc0Msa0JBQWtCLHlDQUF5QyxzQkFBc0Isc0NBQXNDLGtCQUFrQiwrQkFBK0IsZUFBZSxpQkFBaUIsNkNBQTZDLDBDQUEwQyw4R0FBOEcsc0JBQXNCLHFDQUFxQyxrQkFBa0Isa0hBQWtILHNCQUFzQixzQ0FBc0Msa0JBQWtCLHlDQUF5QyxzQkFBc0Isc0NBQXNDLGtC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YWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtbm90aWNlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Jlc291cmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IGYgYXMgc2V0UmVxdWVzdGVkSWNvbiwgYiBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBLIGFzIEtpbmRJY29ucyB9IGZyb20gJy4vcmVzb3VyY2VzLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgU0xPVFMgPSB7XG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIG1lc3NhZ2U6IFwibWVzc2FnZVwiLFxuICBsaW5rOiBcImxpbmtcIixcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiXG59O1xuY29uc3QgQ1NTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIGNsb3NlOiBcIm5vdGljZS1jbG9zZVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRlbnQ6IFwibm90aWNlLWNvbnRlbnRcIixcbiAgaWNvbjogXCJub3RpY2UtaWNvblwiXG59O1xuXG5jb25zdCBub3RpY2VDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1zbWFsbDowLjVyZW07LS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLWxhcmdlOjAuNzVyZW19Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVyIHNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXttYXJnaW4tYmxvY2s6MC4xMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXIgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1zXSkgLmNvbnRhaW5lciAqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXttYXJnaW4tYmxvY2s6MC4xMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9c10pIDo6c2xvdHRlZChjYWxjaXRlLWxpbmspe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1zXSkgLm5vdGljZS1jbG9zZXtwYWRkaW5nOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1zbWFsbDowLjc1cmVtOy0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1sYXJnZToxcmVtfTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lciBzbG90W25hbWU9dGl0bGVdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lciAqOjpzbG90dGVkKFtzbG90PXRpdGxlXSl7bWFyZ2luLWJsb2NrOjAuMTI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bV0pIC5jb250YWluZXIgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lciAqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXttYXJnaW4tYmxvY2s6MC4xMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bV0pIDo6c2xvdHRlZChjYWxjaXRlLWxpbmspe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsOjFyZW07LS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLWxhcmdlOjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVyIHNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXttYXJnaW4tYmxvY2s6MC4xMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1sXSkgLmNvbnRhaW5lciBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9bWVzc2FnZV0pe21hcmdpbi1ibG9jazowLjEyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1saW5rKXttYXJnaW4tYmxvY2s6MC4xMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFt3aWR0aD1hdXRvXSl7LS1jYWxjaXRlLW5vdGljZS13aWR0aDphdXRvfTpob3N0KFt3aWR0aD1oYWxmXSl7LS1jYWxjaXRlLW5vdGljZS13aWR0aDo1MCV9Omhvc3QoW3dpZHRoPWZ1bGxdKXstLWNhbGNpdGUtbm90aWNlLXdpZHRoOjEwMCV9Omhvc3R7bWFyZ2luLWlubGluZTphdXRvO2Rpc3BsYXk6bm9uZTttYXgtaW5saW5lLXNpemU6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1ub3RpY2Utd2lkdGgpfS5jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW4tYmxvY2s6MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5Om5vbmU7aW5saW5lLXNpemU6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7bWF4LWJsb2NrLXNpemU6MDt0ZXh0LWFsaWduOnN0YXJ0O2JvcmRlci1pbmxpbmUtc3RhcnQ6MHB4IHNvbGlkO2JveC1zaGFkb3c6MCAwIDAgMCB0cmFuc3BhcmVudH0ubm90aWNlLWNsb3Nle291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Lm5vdGljZS1jbG9zZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3R7ZGlzcGxheTpmbGV4fTpob3N0KFtvcGVuXSkgLmNvbnRhaW5lcntwb2ludGVyLWV2ZW50czphdXRvO2Rpc3BsYXk6ZmxleDttYXgtYmxvY2stc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItd2lkdGg6MnB4O29wYWNpdHk6MTstLXR3LXNoYWRvdzowIDRweCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA0cHggOHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LmNvbnRhaW5lciBzbG90W25hbWU9dGl0bGVdOjpzbG90dGVkKCopLC5jb250YWluZXIgKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe21hcmdpbjowcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY29udGFpbmVyIHNsb3RbbmFtZT1tZXNzYWdlXTo6c2xvdHRlZCgqKSwuY29udGFpbmVyICo6OnNsb3R0ZWQoW3Nsb3Q9bWVzc2FnZV0pe21hcmdpbjowcHg7ZGlzcGxheTppbmxpbmU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsKX0ubm90aWNlLWNvbnRlbnR7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG87ZGlzcGxheTpmbGV4O21pbi1pbmxpbmUtc2l6ZTowcHg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtmbGV4OjEgMSAwO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1ub3RpY2Utc3BhY2luZy10b2tlbi1zbWFsbCk7cGFkZGluZy1pbmxpbmU6MCB2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsKX0ubm90aWNlLWNvbnRlbnQ6Zmlyc3Qtb2YtdHlwZTpub3QoOm9ubHktY2hpbGQpe3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2UpfS5ub3RpY2UtY29udGVudDpvbmx5LW9mLXR5cGV7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLWxhcmdlKX0ubm90aWNlLWljb257ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLW5vdGljZS1zcGFjaW5nLXRva2VuLWxhcmdlKTtmbGV4OjAgMCBhdXRvfS5ub3RpY2UtY2xvc2V7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tc21hbGwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtbm90aWNlLXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG87LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Lm5vdGljZS1jbG9zZTpob3Zlciwubm90aWNlLWNsb3NlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubm90aWNlLWNsb3NlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0uYWN0aW9ucy1lbmR7ZGlzcGxheTpmbGV4O2FsaWduLXNlbGY6c3RyZXRjaH06aG9zdChba2luZD1icmFuZF0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtraW5kPWJyYW5kXSkgLmNvbnRhaW5lciAubm90aWNlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2tpbmQ9aW5mb10pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW5mbyl9Omhvc3QoW2tpbmQ9aW5mb10pIC5jb250YWluZXIgLm5vdGljZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaW5mbyl9Omhvc3QoW2tpbmQ9ZGFuZ2VyXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPWRhbmdlcl0pIC5jb250YWluZXIgLm5vdGljZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChba2luZD1zdWNjZXNzXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX06aG9zdChba2luZD1zdWNjZXNzXSkgLmNvbnRhaW5lciAubm90aWNlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX06aG9zdChba2luZD13YXJuaW5nXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS13YXJuaW5nKX06aG9zdChba2luZD13YXJuaW5nXSkgLmNvbnRhaW5lciAubm90aWNlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS13YXJuaW5nKX1cIjtcblxuY29uc3QgTm90aWNlID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVOb3RpY2VDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU5vdGljZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZU5vdGljZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVOb3RpY2VPcGVuXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGNpdGVOb3RpY2VDbG9zZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmtpbmQgPSBcImJyYW5kXCI7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdXBkYXRlUmVxdWVzdGVkSWNvbigpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKEtpbmRJY29ucywgdGhpcy5pY29uLCB0aGlzLmtpbmQpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oS2luZEljb25zLCB0aGlzLmljb24sIHRoaXMua2luZCk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xvc2UsIGNsYXNzOiBDU1MuY2xvc2UsIG9uQ2xpY2s6IHRoaXMuY2xvc2UsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jbG9zZUJ1dHRvbiA9IGVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJ4XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBoYXNBY3Rpb25FbmQgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5hY3Rpb25zRW5kKTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRhaW5lciB9LCB0aGlzLnJlcXVlc3RlZEljb24gPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaWNvbiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSkgOiBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudGl0bGUgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubWVzc2FnZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5saW5rIH0pKSwgaGFzQWN0aW9uRW5kID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNFbmQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kIH0pKSkgOiBudWxsLCB0aGlzLmNsb3NhYmxlID8gY2xvc2VCdXR0b24gOiBudWxsKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBjb25zdCBub3RpY2VMaW5rRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJjYWxjaXRlLWxpbmtcIik7XG4gICAgaWYgKCF0aGlzLmNsb3NlQnV0dG9uICYmICFub3RpY2VMaW5rRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vdGljZUxpbmtFbCkge1xuICAgICAgbm90aWNlTGlua0VsLnNldEZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiaWNvblwiOiBbXCJ1cGRhdGVSZXF1ZXN0ZWRJY29uXCJdLFxuICAgIFwia2luZFwiOiBbXCJ1cGRhdGVSZXF1ZXN0ZWRJY29uXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBub3RpY2VDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbm90aWNlXCIsIHtcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwia2luZFwiOiBbNTEzXSxcbiAgICBcImNsb3NhYmxlXCI6IFs1MTZdLFxuICAgIFwiaWNvblwiOiBbNTIwXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwid2lkdGhcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1ub3RpY2VcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtbm90aWNlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgTm90aWNlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZU5vdGljZSA9IE5vdGljZTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVOb3RpY2UsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xudmFyIEtpbmRJY29ucztcbihmdW5jdGlvbiAoS2luZEljb25zKSB7XG4gIEtpbmRJY29uc1tcImJyYW5kXCJdID0gXCJsaWdodGJ1bGJcIjtcbiAgS2luZEljb25zW1wiZGFuZ2VyXCJdID0gXCJleGNsYW1hdGlvbk1hcmtUcmlhbmdsZVwiO1xuICBLaW5kSWNvbnNbXCJpbmZvXCJdID0gXCJpbmZvcm1hdGlvblwiO1xuICBLaW5kSWNvbnNbXCJzdWNjZXNzXCJdID0gXCJjaGVja0NpcmNsZVwiO1xuICBLaW5kSWNvbnNbXCJ3YXJuaW5nXCJdID0gXCJleGNsYW1hdGlvbk1hcmtUcmlhbmdsZVwiO1xufSkoS2luZEljb25zIHx8IChLaW5kSWNvbnMgPSB7fSkpO1xuXG5leHBvcnQgeyBLaW5kSWNvbnMgYXMgSyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9