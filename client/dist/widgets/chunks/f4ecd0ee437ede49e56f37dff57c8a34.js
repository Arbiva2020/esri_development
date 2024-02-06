"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_action_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/action.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Action),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */











const CSS = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  indicatorText: "indicator-text",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible"
};
const SLOTS = {
  tooltip: "tooltip"
};

const actionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1;margin-inline-end:1rem}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";

const Action = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.forceUpdate)(this));
    this.guid = `calcite-action-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.indicatorId = `${this.guid}-indicator`;
    this.buttonId = `${this.guid}-button`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleTooltipSlotChange = (event) => {
      const tooltips = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-tooltip"));
      const tooltip = tooltips[0];
      if (tooltip) {
        tooltip.referenceElement = this.buttonEl;
      }
    };
    this.active = false;
    this.alignment = undefined;
    this.appearance = "solid";
    this.compact = false;
    this.disabled = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.indicator = false;
    this.label = undefined;
    this.loading = false;
    this.scale = "m";
    this.text = undefined;
    this.textEnabled = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Build.isBrowser) {
      await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    this.mutationObserver?.disconnect();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.buttonEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTextContainer() {
    const { text, textEnabled } = this;
    const textContainerClasses = {
      [CSS.textContainer]: true,
      [CSS.textContainerVisible]: textEnabled
    };
    return text ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: textContainerClasses, key: "text-container" }, text)) : null;
  }
  renderIndicatorText() {
    const { indicator, messages, indicatorId, buttonId } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { "aria-labelledby": buttonId, "aria-live": "polite", class: CSS.indicatorText, id: indicatorId, role: "region" }, indicator ? messages.indicator : null));
  }
  renderIconContainer() {
    const { loading, icon, scale, el, iconFlipRtl } = this;
    const iconScale = scale === "l" ? "m" : "s";
    const loaderScale = scale === "l" ? "l" : "m";
    const calciteLoaderNode = loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-loader", { inline: true, label: this.messages.loading, scale: loaderScale })) : null;
    const calciteIconNode = icon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: icon, scale: iconScale })) : null;
    const iconNode = calciteLoaderNode || calciteIconNode;
    const hasIconToDisplay = iconNode || el.children?.length;
    const slotContainerNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: {
        [CSS.slotContainer]: true,
        [CSS.slotContainerHidden]: loading
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", null)));
    return hasIconToDisplay ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { "aria-hidden": "true", class: CSS.iconContainer, key: "icon-container" }, iconNode, slotContainerNode)) : null;
  }
  render() {
    const { active, compact, disabled, loading, textEnabled, label, text, indicator, indicatorId, buttonId, messages } = this;
    const ariaLabel = `${label || text}${indicator ? ` (${messages.indicator})` : ""}`;
    const buttonClasses = {
      [CSS.button]: true,
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("button", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), "aria-controls": indicator ? indicatorId : null, "aria-disabled": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(disabled), "aria-label": ariaLabel, "aria-pressed": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(active), class: buttonClasses, disabled: disabled, id: buttonId,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer()), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.tooltip, onSlotchange: this.handleTooltipSlotChange }), this.renderIndicatorText()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return actionCss; }
}, [1, "calcite-action", {
    "active": [516],
    "alignment": [513],
    "appearance": [513],
    "compact": [516],
    "disabled": [516],
    "icon": [1],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "indicator": [516],
    "label": [1],
    "loading": [516],
    "scale": [513],
    "text": [1],
    "textEnabled": [516, "text-enabled"],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Action);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjRlY2QwZWU0MzdlZGU0OWU1NmYzN2RmZjU3YzhhMzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzSDtBQUN4RTtBQUNSO0FBQ3dCO0FBQzZDO0FBQzdCO0FBQ3pCO0FBQzZEO0FBQzNEO0FBQ0U7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGFBQWEsNkJBQTZCLHlEQUF5RCx5R0FBeUcsVUFBVSxRQUFRLGtCQUFrQixXQUFXLGFBQWEsaUJBQWlCLGVBQWUsbUJBQW1CLDJCQUEyQixrQkFBa0IsZ0RBQWdELDhCQUE4Qix1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Q2xGO0FBQ0E7QUFDQSxZQUFZLDZDQUE2QztBQUN6RCxZQUFZLHlFQUFDLFVBQVUsK0dBQStHO0FBQ3RJO0FBQ0E7QUFDQSxZQUFZLHdDQUF3QztBQUNwRDtBQUNBO0FBQ0EseUNBQXlDLHlFQUFDLHFCQUFxQixnRUFBZ0U7QUFDL0gsb0NBQW9DLHlFQUFDLG1CQUFtQixvREFBb0Q7QUFDNUc7QUFDQTtBQUNBLCtCQUErQix5RUFBQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQSxTQUFTLEVBQUUseUVBQUM7QUFDWiwrQkFBK0IseUVBQUMsVUFBVSx3RUFBd0U7QUFDbEg7QUFDQTtBQUNBLFlBQVksMkdBQTJHO0FBQ3ZILHlCQUF5QixjQUFjLEVBQUUsaUJBQWlCLG1CQUFtQixRQUFRO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsd0VBQUksUUFBUSx5RUFBQyxhQUFhLGFBQWEsMENBQWEsNkVBQTZFLDBDQUFhLHFEQUFxRCwwQ0FBYTtBQUM5TjtBQUNBLHFEQUFxRCwyREFBMkQseUVBQUMsV0FBVyxpRUFBaUU7QUFDN0w7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2FjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgZm9yY2VVcGRhdGUsIEJ1aWxkLCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBidXR0b246IFwiYnV0dG9uXCIsXG4gIGJ1dHRvblRleHRWaXNpYmxlOiBcImJ1dHRvbi0tdGV4dC12aXNpYmxlXCIsXG4gIGJ1dHRvbkNvbXBhY3Q6IFwiYnV0dG9uLS1jb21wYWN0XCIsXG4gIGluZGljYXRvclRleHQ6IFwiaW5kaWNhdG9yLXRleHRcIixcbiAgaWNvbkNvbnRhaW5lcjogXCJpY29uLWNvbnRhaW5lclwiLFxuICBzbG90Q29udGFpbmVyOiBcInNsb3QtY29udGFpbmVyXCIsXG4gIHNsb3RDb250YWluZXJIaWRkZW46IFwic2xvdC1jb250YWluZXItLWhpZGRlblwiLFxuICB0ZXh0Q29udGFpbmVyOiBcInRleHQtY29udGFpbmVyXCIsXG4gIHRleHRDb250YWluZXJWaXNpYmxlOiBcInRleHQtY29udGFpbmVyLS12aXNpYmxlXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgdG9vbHRpcDogXCJ0b29sdGlwXCJcbn07XG5cbmNvbnN0IGFjdGlvbkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstLWNhbGNpdGUtYWN0aW9uLWluZGljYXRvci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmJ1dHRvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZTphdXRvO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RleHQtYWxpZ246dW5zZXQ7ZmxleDoxIDAgYXV0b30uYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uYnV0dG9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmJ1dHRvbiAuaWNvbi1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taW5saW5lLXNpemU6MXJlbTttaW4tYmxvY2stc2l6ZToxcmVtfS5idXR0b24gLnRleHQtY29udGFpbmVye21hcmdpbjowcHg7aW5saW5lLXNpemU6MHB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtsaW5lLWhlaWdodDoxLjVyZW07b3BhY2l0eTowO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTptYXJnaW47dHJhbnNpdGlvbi1wcm9wZXJ0eTppbmxpbmUtc2l6ZX0uYnV0dG9uIC50ZXh0LWNvbnRhaW5lci0tdmlzaWJsZXtpbmxpbmUtc2l6ZTphdXRvO2ZsZXg6MSAxIGF1dG87b3BhY2l0eToxO21hcmdpbi1pbmxpbmUtZW5kOjFyZW19Omhvc3QoW3NjYWxlPXNdKSAuYnV0dG9ue3BhZGRpbmctaW5saW5lOjAuNXJlbTtwYWRkaW5nLWJsb2NrOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKX06aG9zdChbc2NhbGU9c10pIC5idXR0b24tLXRleHQtdmlzaWJsZSAuaWNvbi1jb250YWluZXJ7bWFyZ2luLWlubGluZS1lbmQ6MC41cmVtfTpob3N0KFtzY2FsZT1tXSkgLmJ1dHRvbntwYWRkaW5nLWlubGluZToxcmVtO3BhZGRpbmctYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpfTpob3N0KFtzY2FsZT1tXSkgLmJ1dHRvbi0tdGV4dC12aXNpYmxlIC5pY29uLWNvbnRhaW5lcnttYXJnaW4taW5saW5lLWVuZDowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmJ1dHRvbntwYWRkaW5nOjEuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpfTpob3N0KFtzY2FsZT1sXSkgLmJ1dHRvbi0tdGV4dC12aXNpYmxlIC5pY29uLWNvbnRhaW5lcnttYXJnaW4taW5saW5lLWVuZDoxcmVtfTpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXSkgLmJ1dHRvbntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgLmJ1dHRvbntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Omhvc3QoW2FsaWdubWVudD1jZW50ZXJdKSAuYnV0dG9uIC50ZXh0LWNvbnRhaW5lci0tdmlzaWJsZSw6aG9zdChbYWxpZ25tZW50PWVuZF0pIC5idXR0b24gLnRleHQtY29udGFpbmVyLS12aXNpYmxle2ZsZXg6MCAxIGF1dG99Omhvc3QoW3NjYWxlPXNdW2NvbXBhY3RdKSAuYnV0dG9uLDpob3N0KFtzY2FsZT1tXVtjb21wYWN0XSkgLmJ1dHRvbiw6aG9zdChbc2NhbGU9bF1bY29tcGFjdF0pIC5idXR0b257cGFkZGluZy1pbmxpbmU6MHB4fS5zbG90LWNvbnRhaW5lcntkaXNwbGF5OmZsZXh9LnNsb3QtY29udGFpbmVyLS1oaWRkZW57ZGlzcGxheTpub25lfS5idXR0b24tLXRleHQtdmlzaWJsZXtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFthY3RpdmVdKSAuYnV0dG9uLDpob3N0KFthY3RpdmVdKSAuYnV0dG9uOmhvdmVyLDpob3N0KFthY3RpdmVdKSAuYnV0dG9uOmZvY3VzLDpob3N0KFthY3RpdmVdW2xvYWRpbmddKSAuYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbYWN0aXZlXSkgLmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSAuYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3gtc2hhZG93O3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIC5idXR0b246aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSAuYnV0dG9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSkgaW5zZXR9Omhvc3QoW2FjdGl2ZV1bYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIC5idXR0b24sOmhvc3QoW2FjdGl2ZV1bYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIC5idXR0b246aG92ZXIsOmhvc3QoW2FjdGl2ZV1bYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIC5idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtsb2FkaW5nXSkgLmJ1dHRvbiw6aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1bZGlzYWJsZWRdKSAuYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2xvYWRpbmddKSAuYnV0dG9uLDpob3N0KFtsb2FkaW5nXSkgLmJ1dHRvbjpob3Zlciw6aG9zdChbbG9hZGluZ10pIC5idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2xvYWRpbmddKSAuYnV0dG9uIC50ZXh0LWNvbnRhaW5lciw6aG9zdChbbG9hZGluZ10pIC5idXR0b246aG92ZXIgLnRleHQtY29udGFpbmVyLDpob3N0KFtsb2FkaW5nXSkgLmJ1dHRvbjpmb2N1cyAudGV4dC1jb250YWluZXJ7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtsb2FkaW5nXSkgY2FsY2l0ZS1sb2FkZXJbaW5saW5lXXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7bWFyZ2luLWlubGluZS1lbmQ6MHB4fTpob3N0KFtkaXNhYmxlZF0pIC5idXR0b24sOmhvc3QoW2Rpc2FibGVkXSkgLmJ1dHRvbjpob3Zlciw6aG9zdChbZGlzYWJsZWRdKSAuYnV0dG9uOmZvY3Vze2N1cnNvcjpkZWZhdWx0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdW2FjdGl2ZV0pIC5idXR0b24sOmhvc3QoW2Rpc2FibGVkXVthY3RpdmVdKSAuYnV0dG9uOmhvdmVyLDpob3N0KFtkaXNhYmxlZF1bYWN0aXZlXSkgLmJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2luZGljYXRvcl0pIC5idXR0b246OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7YmxvY2stc2l6ZTowLjVyZW07aW5saW5lLXNpemU6MC41cmVtO2JvcmRlci1yYWRpdXM6OTk5OXB4O2JvcmRlci13aWR0aDoycHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWFjdGlvbi1pbmRpY2F0b3ItY29sb3IpO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7aW5zZXQtYmxvY2stZW5kOjAuNzVyZW07aW5zZXQtaW5saW5lLWVuZDowLjc1cmVtfTpob3N0KFtpbmRpY2F0b3JdKSAuYnV0dG9uLS10ZXh0LXZpc2libGU6OmFmdGVye2luc2V0LWJsb2NrLWVuZDphdXRvfTpob3N0KFtpbmRpY2F0b3JdKSAuYnV0dG9uOmhvdmVyOjphZnRlciw6aG9zdChbaW5kaWNhdG9yXSkgLmJ1dHRvbjpmb2N1czo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbaW5kaWNhdG9yXVtzY2FsZT1zXSkgLmJ1dHRvbjo6YWZ0ZXJ7aW5zZXQtYmxvY2stZW5kOjAuMjVyZW07aW5zZXQtaW5saW5lLWVuZDowLjI1cmVtfTpob3N0KFtpbmRpY2F0b3JdW3NjYWxlPXNdKSAuYnV0dG9uLS10ZXh0LXZpc2libGU6OmFmdGVye2luc2V0LWJsb2NrLWVuZDphdXRvO2luc2V0LWlubGluZS1lbmQ6MC41cmVtfTpob3N0KFtpbmRpY2F0b3JdW2FjdGl2ZV0pIC5idXR0b246OmFmdGVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmluZGljYXRvci10ZXh0e3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9XCI7XG5cbmNvbnN0IEFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiBmb3JjZVVwZGF0ZSh0aGlzKSk7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtYWN0aW9uLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5pbmRpY2F0b3JJZCA9IGAke3RoaXMuZ3VpZH0taW5kaWNhdG9yYDtcbiAgICB0aGlzLmJ1dHRvbklkID0gYCR7dGhpcy5ndWlkfS1idXR0b25gO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlVG9vbHRpcFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRvb2x0aXBzID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS10b29sdGlwXCIpKTtcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSB0b29sdGlwc1swXTtcbiAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgIHRvb2x0aXAucmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuYnV0dG9uRWw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWxpZ25tZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwic29saWRcIjtcbiAgICB0aGlzLmNvbXBhY3QgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmluZGljYXRvciA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHRFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKEJ1aWxkLmlzQnJvd3Nlcikge1xuICAgICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5idXR0b25FbD8uZm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyVGV4dENvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IHRleHQsIHRleHRFbmFibGVkIH0gPSB0aGlzO1xuICAgIGNvbnN0IHRleHRDb250YWluZXJDbGFzc2VzID0ge1xuICAgICAgW0NTUy50ZXh0Q29udGFpbmVyXTogdHJ1ZSxcbiAgICAgIFtDU1MudGV4dENvbnRhaW5lclZpc2libGVdOiB0ZXh0RW5hYmxlZFxuICAgIH07XG4gICAgcmV0dXJuIHRleHQgPyAoaChcImRpdlwiLCB7IGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3Nlcywga2V5OiBcInRleHQtY29udGFpbmVyXCIgfSwgdGV4dCkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJJbmRpY2F0b3JUZXh0KCkge1xuICAgIGNvbnN0IHsgaW5kaWNhdG9yLCBtZXNzYWdlcywgaW5kaWNhdG9ySWQsIGJ1dHRvbklkIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGJ1dHRvbklkLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBjbGFzczogQ1NTLmluZGljYXRvclRleHQsIGlkOiBpbmRpY2F0b3JJZCwgcm9sZTogXCJyZWdpb25cIiB9LCBpbmRpY2F0b3IgPyBtZXNzYWdlcy5pbmRpY2F0b3IgOiBudWxsKSk7XG4gIH1cbiAgcmVuZGVySWNvbkNvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGljb24sIHNjYWxlLCBlbCwgaWNvbkZsaXBSdGwgfSA9IHRoaXM7XG4gICAgY29uc3QgaWNvblNjYWxlID0gc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIjtcbiAgICBjb25zdCBsb2FkZXJTY2FsZSA9IHNjYWxlID09PSBcImxcIiA/IFwibFwiIDogXCJtXCI7XG4gICAgY29uc3QgY2FsY2l0ZUxvYWRlck5vZGUgPSBsb2FkaW5nID8gKGgoXCJjYWxjaXRlLWxvYWRlclwiLCB7IGlubGluZTogdHJ1ZSwgbGFiZWw6IHRoaXMubWVzc2FnZXMubG9hZGluZywgc2NhbGU6IGxvYWRlclNjYWxlIH0pKSA6IG51bGw7XG4gICAgY29uc3QgY2FsY2l0ZUljb25Ob2RlID0gaWNvbiA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogaWNvbkZsaXBSdGwsIGljb246IGljb24sIHNjYWxlOiBpY29uU2NhbGUgfSkpIDogbnVsbDtcbiAgICBjb25zdCBpY29uTm9kZSA9IGNhbGNpdGVMb2FkZXJOb2RlIHx8IGNhbGNpdGVJY29uTm9kZTtcbiAgICBjb25zdCBoYXNJY29uVG9EaXNwbGF5ID0gaWNvbk5vZGUgfHwgZWwuY2hpbGRyZW4/Lmxlbmd0aDtcbiAgICBjb25zdCBzbG90Q29udGFpbmVyTm9kZSA9IChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5zbG90Q29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5zbG90Q29udGFpbmVySGlkZGVuXTogbG9hZGluZ1xuICAgICAgfSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIHJldHVybiBoYXNJY29uVG9EaXNwbGF5ID8gKGgoXCJkaXZcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogQ1NTLmljb25Db250YWluZXIsIGtleTogXCJpY29uLWNvbnRhaW5lclwiIH0sIGljb25Ob2RlLCBzbG90Q29udGFpbmVyTm9kZSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIGNvbXBhY3QsIGRpc2FibGVkLCBsb2FkaW5nLCB0ZXh0RW5hYmxlZCwgbGFiZWwsIHRleHQsIGluZGljYXRvciwgaW5kaWNhdG9ySWQsIGJ1dHRvbklkLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICBjb25zdCBhcmlhTGFiZWwgPSBgJHtsYWJlbCB8fCB0ZXh0fSR7aW5kaWNhdG9yID8gYCAoJHttZXNzYWdlcy5pbmRpY2F0b3J9KWAgOiBcIlwifWA7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3NlcyA9IHtcbiAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgIFtDU1MuYnV0dG9uVGV4dFZpc2libGVdOiB0ZXh0RW5hYmxlZCxcbiAgICAgIFtDU1MuYnV0dG9uQ29tcGFjdF06IGNvbXBhY3RcbiAgICB9O1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWJ1c3lcIjogdG9BcmlhQm9vbGVhbihsb2FkaW5nKSwgXCJhcmlhLWNvbnRyb2xzXCI6IGluZGljYXRvciA/IGluZGljYXRvcklkIDogbnVsbCwgXCJhcmlhLWRpc2FibGVkXCI6IHRvQXJpYUJvb2xlYW4oZGlzYWJsZWQpLCBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLCBcImFyaWEtcHJlc3NlZFwiOiB0b0FyaWFCb29sZWFuKGFjdGl2ZSksIGNsYXNzOiBidXR0b25DbGFzc2VzLCBkaXNhYmxlZDogZGlzYWJsZWQsIGlkOiBidXR0b25JZCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoYnV0dG9uRWwpID0+ICh0aGlzLmJ1dHRvbkVsID0gYnV0dG9uRWwpIH0sIHRoaXMucmVuZGVySWNvbkNvbnRhaW5lcigpLCB0aGlzLnJlbmRlclRleHRDb250YWluZXIoKSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudG9vbHRpcCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVRvb2x0aXBTbG90Q2hhbmdlIH0pLCB0aGlzLnJlbmRlckluZGljYXRvclRleHQoKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGFjdGlvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1hY3Rpb25cIiwge1xuICAgIFwiYWN0aXZlXCI6IFs1MTZdLFxuICAgIFwiYWxpZ25tZW50XCI6IFs1MTNdLFxuICAgIFwiYXBwZWFyYW5jZVwiOiBbNTEzXSxcbiAgICBcImNvbXBhY3RcIjogWzUxNl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImljb25cIjogWzFdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwiaW5kaWNhdG9yXCI6IFs1MTZdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dFwiOiBbMV0sXG4gICAgXCJ0ZXh0RW5hYmxlZFwiOiBbNTE2LCBcInRleHQtZW5hYmxlZFwiXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBBY3Rpb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEFjdGlvbiBhcyBBLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==