"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_calcite-flow_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-flow.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-flow.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalciteFlow": () => (/* binding */ CalciteFlow),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const CSS = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
};

const flowCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}";

const Flow = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.itemMutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", () => this.updateFlowProps());
    this.getFlowDirection = (oldFlowItemCount, newFlowItemCount) => {
      const allowRetreatingDirection = oldFlowItemCount > 1;
      const allowAdvancingDirection = oldFlowItemCount && newFlowItemCount > 1;
      if (!allowAdvancingDirection && !allowRetreatingDirection) {
        return null;
      }
      return newFlowItemCount < oldFlowItemCount ? "retreating" : "advancing";
    };
    this.updateFlowProps = () => {
      const { el, items } = this;
      const newItems = Array.from(el.querySelectorAll("calcite-flow-item")).filter((flowItem) => flowItem.closest("calcite-flow") === el);
      const oldItemCount = items.length;
      const newItemCount = newItems.length;
      const activeItem = newItems[newItemCount - 1];
      const previousItem = newItems[newItemCount - 2];
      if (newItemCount && activeItem) {
        newItems.forEach((itemNode) => {
          itemNode.showBackButton = itemNode === activeItem && newItemCount > 1;
          itemNode.hidden = itemNode !== activeItem;
        });
      }
      if (previousItem) {
        previousItem.menuOpen = false;
      }
      this.items = newItems;
      if (oldItemCount !== newItemCount) {
        const flowDirection = this.getFlowDirection(oldItemCount, newItemCount);
        this.itemCount = newItemCount;
        this.flowDirection = flowDirection;
      }
    };
    this.flowDirection = null;
    this.itemCount = 0;
    this.items = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-flow-item`.
   */
  async back() {
    const { items } = this;
    const lastItem = items[items.length - 1];
    if (!lastItem) {
      return;
    }
    const beforeBack = lastItem.beforeBack
      ? lastItem.beforeBack
      : () => Promise.resolve();
    return beforeBack.call(lastItem).then(() => {
      lastItem.remove();
      return lastItem;
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.itemMutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateFlowProps();
  }
  disconnectedCallback() {
    this.itemMutationObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleItemBackClick() {
    this.back();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection } = this;
    const frameDirectionClasses = {
      [CSS.frame]: true,
      [CSS.frameAdvancing]: flowDirection === "advancing",
      [CSS.frameRetreating]: flowDirection === "retreating"
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: frameDirectionClasses }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
  get el() { return this; }
  static get style() { return flowCss; }
}, [1, "calcite-flow", {
    "flowDirection": [32],
    "itemCount": [32],
    "items": [32],
    "back": [64]
  }, [[0, "calciteFlowItemBack", "handleItemBackClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-flow"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-flow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Flow);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteFlow = Flow;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return undefined;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZTBkOTlhOTFkYzE0ODY1OTM2NTM1MDVjNTA2NjBjNzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEY7QUFDdkM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxrQkFBa0IsYUFBYSxpQkFBaUIsY0FBYyxvQkFBb0IsZ0JBQWdCLDZCQUE2QixhQUFhLGtCQUFrQixXQUFXLGFBQWEsaUJBQWlCLGNBQWMsc0JBQXNCLG9CQUFvQixZQUFZLGtFQUFrRSxnQkFBZ0Isa0RBQWtELGFBQWEsY0FBYyxnQkFBZ0Isd0JBQXdCLGdFQUFnRSx5QkFBeUIsZ0VBQWdFLGlDQUFpQyxHQUFHLG9CQUFvQixrQ0FBa0MsS0FBSyxrQkFBa0IsZ0NBQWdDLGlDQUFpQyxHQUFHLG9CQUFvQixtQ0FBbUMsS0FBSyxrQkFBa0IsZ0NBQWdDOztBQUV4dUYsMkJBQTJCLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLFVBQVUsOEJBQThCLEVBQUUseUVBQUM7QUFDeEQ7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzNJNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQWU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtZmxvdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvb2JzZXJ2ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBmcmFtZTogXCJmcmFtZVwiLFxuICBmcmFtZUFkdmFuY2luZzogXCJmcmFtZS0tYWR2YW5jaW5nXCIsXG4gIGZyYW1lUmV0cmVhdGluZzogXCJmcmFtZS0tcmV0cmVhdGluZ1wiXG59O1xuXG5jb25zdCBmbG93Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCAuZnJhbWV7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO3BhZGRpbmc6MHB4fTpob3N0IDo6c2xvdHRlZChjYWxjaXRlLWZsb3ctaXRlbSksOmhvc3QgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2Jsb2NrLXNpemU6MTAwJX06aG9zdCA6OnNsb3R0ZWQoLmNhbGNpdGUtbWF0Y2gtaGVpZ2h0Omxhc3QtY2hpbGQpe2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbn06aG9zdCAuZnJhbWUtLWFkdmFuY2luZ3thbmltYXRpb246Y2FsY2l0ZS1mcmFtZS1hZHZhbmNlIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9Omhvc3QgLmZyYW1lLS1yZXRyZWF0aW5ne2FuaW1hdGlvbjpjYWxjaXRlLWZyYW1lLXJldHJlYXQgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX1Aa2V5ZnJhbWVzIGNhbGNpdGUtZnJhbWUtYWR2YW5jZXswJXstLXR3LWJnLW9wYWNpdHk6MC41O3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MHB4LCAwLCAwKX0xMDAley0tdHctYmctb3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX19QGtleWZyYW1lcyBjYWxjaXRlLWZyYW1lLXJldHJlYXR7MCV7LS10dy1iZy1vcGFjaXR5OjAuNTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwcHgsIDAsIDApfTEwMCV7LS10dy1iZy1vcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApfX1cIjtcblxuY29uc3QgRmxvdyA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pdGVtTXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVGbG93UHJvcHMoKSk7XG4gICAgdGhpcy5nZXRGbG93RGlyZWN0aW9uID0gKG9sZEZsb3dJdGVtQ291bnQsIG5ld0Zsb3dJdGVtQ291bnQpID0+IHtcbiAgICAgIGNvbnN0IGFsbG93UmV0cmVhdGluZ0RpcmVjdGlvbiA9IG9sZEZsb3dJdGVtQ291bnQgPiAxO1xuICAgICAgY29uc3QgYWxsb3dBZHZhbmNpbmdEaXJlY3Rpb24gPSBvbGRGbG93SXRlbUNvdW50ICYmIG5ld0Zsb3dJdGVtQ291bnQgPiAxO1xuICAgICAgaWYgKCFhbGxvd0FkdmFuY2luZ0RpcmVjdGlvbiAmJiAhYWxsb3dSZXRyZWF0aW5nRGlyZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0Zsb3dJdGVtQ291bnQgPCBvbGRGbG93SXRlbUNvdW50ID8gXCJyZXRyZWF0aW5nXCIgOiBcImFkdmFuY2luZ1wiO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVGbG93UHJvcHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBpdGVtcyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG5ld0l0ZW1zID0gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1mbG93LWl0ZW1cIikpLmZpbHRlcigoZmxvd0l0ZW0pID0+IGZsb3dJdGVtLmNsb3Nlc3QoXCJjYWxjaXRlLWZsb3dcIikgPT09IGVsKTtcbiAgICAgIGNvbnN0IG9sZEl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgIGNvbnN0IG5ld0l0ZW1Db3VudCA9IG5ld0l0ZW1zLmxlbmd0aDtcbiAgICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSBuZXdJdGVtc1tuZXdJdGVtQ291bnQgLSAxXTtcbiAgICAgIGNvbnN0IHByZXZpb3VzSXRlbSA9IG5ld0l0ZW1zW25ld0l0ZW1Db3VudCAtIDJdO1xuICAgICAgaWYgKG5ld0l0ZW1Db3VudCAmJiBhY3RpdmVJdGVtKSB7XG4gICAgICAgIG5ld0l0ZW1zLmZvckVhY2goKGl0ZW1Ob2RlKSA9PiB7XG4gICAgICAgICAgaXRlbU5vZGUuc2hvd0JhY2tCdXR0b24gPSBpdGVtTm9kZSA9PT0gYWN0aXZlSXRlbSAmJiBuZXdJdGVtQ291bnQgPiAxO1xuICAgICAgICAgIGl0ZW1Ob2RlLmhpZGRlbiA9IGl0ZW1Ob2RlICE9PSBhY3RpdmVJdGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgcHJldmlvdXNJdGVtLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXM7XG4gICAgICBpZiAob2xkSXRlbUNvdW50ICE9PSBuZXdJdGVtQ291bnQpIHtcbiAgICAgICAgY29uc3QgZmxvd0RpcmVjdGlvbiA9IHRoaXMuZ2V0Rmxvd0RpcmVjdGlvbihvbGRJdGVtQ291bnQsIG5ld0l0ZW1Db3VudCk7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gbmV3SXRlbUNvdW50O1xuICAgICAgICB0aGlzLmZsb3dEaXJlY3Rpb24gPSBmbG93RGlyZWN0aW9uO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mbG93RGlyZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLml0ZW1Db3VudCA9IDA7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgY3VycmVudGx5IGFjdGl2ZSBgY2FsY2l0ZS1mbG93LWl0ZW1gLlxuICAgKi9cbiAgYXN5bmMgYmFjaygpIHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxhc3RJdGVtID0gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFsYXN0SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBiZWZvcmVCYWNrID0gbGFzdEl0ZW0uYmVmb3JlQmFja1xuICAgICAgPyBsYXN0SXRlbS5iZWZvcmVCYWNrXG4gICAgICA6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHJldHVybiBiZWZvcmVCYWNrLmNhbGwobGFzdEl0ZW0pLnRoZW4oKCkgPT4ge1xuICAgICAgbGFzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gbGFzdEl0ZW07XG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLml0ZW1NdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIHRoaXMudXBkYXRlRmxvd1Byb3BzKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pdGVtTXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGFuZGxlSXRlbUJhY2tDbGljaygpIHtcbiAgICB0aGlzLmJhY2soKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmxvd0RpcmVjdGlvbiB9ID0gdGhpcztcbiAgICBjb25zdCBmcmFtZURpcmVjdGlvbkNsYXNzZXMgPSB7XG4gICAgICBbQ1NTLmZyYW1lXTogdHJ1ZSxcbiAgICAgIFtDU1MuZnJhbWVBZHZhbmNpbmddOiBmbG93RGlyZWN0aW9uID09PSBcImFkdmFuY2luZ1wiLFxuICAgICAgW0NTUy5mcmFtZVJldHJlYXRpbmddOiBmbG93RGlyZWN0aW9uID09PSBcInJldHJlYXRpbmdcIlxuICAgIH07XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IGZyYW1lRGlyZWN0aW9uQ2xhc3NlcyB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGZsb3dDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtZmxvd1wiLCB7XG4gICAgXCJmbG93RGlyZWN0aW9uXCI6IFszMl0sXG4gICAgXCJpdGVtQ291bnRcIjogWzMyXSxcbiAgICBcIml0ZW1zXCI6IFszMl0sXG4gICAgXCJiYWNrXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVGbG93SXRlbUJhY2tcIiwgXCJoYW5kbGVJdGVtQmFja0NsaWNrXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWZsb3dcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtZmxvd1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEZsb3cpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUZsb3cgPSBGbG93O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUZsb3csIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=