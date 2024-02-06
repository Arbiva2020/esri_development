"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-list_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-list.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-list.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalciteList": () => (/* binding */ CalciteList),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _utils3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils3.js */ "./node_modules/@esri/calcite-components/dist/components/utils3.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.js */ "./node_modules/@esri/calcite-components/dist/components/filter.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */














const CSS = {
  container: "container",
  table: "table",
  scrim: "scrim",
  tableContainer: "table-container",
  sticky: "sticky-pos"
};
const debounceTimeout = 0;

const listCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{position:relative;z-index:var(--calcite-app-z-index);box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}calcite-filter{margin-block-end:1px}";

const listItemSelector = "calcite-list-item";
const parentSelector = "calcite-list-item-group, calcite-list-item";
const List = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteListChange", 6);
    this.calciteListFilter = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteListFilter", 6);
    this.listItems = [];
    this.enabledListItems = [];
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", () => this.updateListItems());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = (event) => {
      (0,_utils3_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_utils3_js__WEBPACK_IMPORTED_MODULE_3__.g)(event));
    };
    this.setActiveListItem = () => {
      const { enabledListItems } = this;
      if (!enabledListItems.some((item) => item.active)) {
        if (enabledListItems[0]) {
          enabledListItems[0].active = true;
        }
      }
    };
    this.updateSelectedItems = (emit = false) => {
      this.selectedItems = this.enabledListItems.filter((item) => item.selected);
      if (emit) {
        this.calciteListChange.emit();
      }
    };
    this.updateFilteredItems = (emit = false) => {
      const { listItems, filteredData, filterText } = this;
      const values = filteredData.map((item) => item.value);
      const lastDescendantItems = listItems?.filter((listItem) => listItems.every((li) => li === listItem || !listItem.contains(li)));
      const filteredItems = listItems.filter((item) => !filterText || values.includes(item.value)) || [];
      const visibleParents = new WeakSet();
      lastDescendantItems.forEach((listItem) => this.filterElements({ el: listItem, filteredItems, visibleParents }));
      this.filteredItems = filteredItems;
      if (emit) {
        this.calciteListFilter.emit();
      }
    };
    this.handleFilter = (event) => {
      event.stopPropagation();
      const { filteredItems, value } = event.currentTarget;
      this.filteredData = filteredItems;
      this.filterText = value;
      this.updateListItems(true);
    };
    this.getItemData = () => {
      return this.listItems.map((item) => ({
        label: item.label,
        description: item.description,
        metadata: item.metadata,
        value: item.value
      }));
    };
    this.updateListItems = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_11__.d)((emit = false) => {
      const { selectionAppearance, selectionMode } = this;
      const items = this.queryListItems();
      items.forEach((item) => {
        item.selectionAppearance = selectionAppearance;
        item.selectionMode = selectionMode;
      });
      this.listItems = items;
      if (this.filterEnabled) {
        this.dataForFilter = this.getItemData();
        if (this.filterEl) {
          this.filterEl.items = this.dataForFilter;
        }
      }
      this.updateFilteredItems(emit);
      this.enabledListItems = items.filter((item) => !item.disabled && !item.closed);
      this.setActiveListItem();
      this.updateSelectedItems(emit);
    }, debounceTimeout);
    this.queryListItems = () => {
      return Array.from(this.el.querySelectorAll(listItemSelector));
    };
    this.focusRow = (focusEl) => {
      const { enabledListItems } = this;
      if (!focusEl) {
        return;
      }
      enabledListItems.forEach((listItem) => (listItem.active = listItem === focusEl));
      focusEl.setFocus();
    };
    this.isNavigable = (listItem) => {
      const parentListItemEl = listItem.parentElement?.closest(listItemSelector);
      if (!parentListItemEl) {
        return true;
      }
      return parentListItemEl.open && this.isNavigable(parentListItemEl);
    };
    this.handleListKeydown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { key } = event;
      const filteredItems = this.enabledListItems.filter((listItem) => this.isNavigable(listItem));
      const currentIndex = filteredItems.findIndex((listItem) => listItem.active);
      if (key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (filteredItems[nextIndex]) {
          this.focusRow(filteredItems[nextIndex]);
        }
      }
      else if (key === "ArrowUp") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (filteredItems[prevIndex]) {
          this.focusRow(filteredItems[prevIndex]);
        }
      }
      else if (key === "Home") {
        event.preventDefault();
        const homeItem = filteredItems[0];
        if (homeItem) {
          this.focusRow(homeItem);
        }
      }
      else if (key === "End") {
        event.preventDefault();
        const endItem = filteredItems[filteredItems.length - 1];
        if (endItem) {
          this.focusRow(endItem);
        }
      }
    };
    this.disabled = false;
    this.filterEnabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.label = undefined;
    this.loading = false;
    this.openable = false;
    this.selectedItems = [];
    this.selectionMode = "none";
    this.selectionAppearance = "icon";
    this.dataForFilter = [];
  }
  handleFilterEnabledChange() {
    this.updateListItems();
  }
  handleSelectionAppearanceChange() {
    this.updateListItems();
  }
  handleCalciteInternalFocusPreviousItem(event) {
    event.stopPropagation();
    const { enabledListItems } = this;
    const currentIndex = enabledListItems.findIndex((listItem) => listItem.active);
    const prevIndex = currentIndex - 1;
    if (enabledListItems[prevIndex]) {
      this.focusRow(enabledListItems[prevIndex]);
    }
  }
  handleCalciteInternalListItemActive(event) {
    const target = event.target;
    const { listItems } = this;
    listItems.forEach((listItem) => {
      listItem.active = listItem === target;
    });
  }
  handleCalciteListItemSelect() {
    this.updateSelectedItems(true);
  }
  handleCalciteInternalListItemSelect(event) {
    const target = event.target;
    const { listItems, selectionMode } = this;
    listItems.forEach((listItem) => {
      if (selectionMode === "single" || selectionMode === "single-persist") {
        listItem.selected = listItem === target;
      }
    });
    this.updateSelectedItems();
  }
  handleCalciteListItemClose() {
    this.updateListItems(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateListItems();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    const { filterEl } = this;
    const filteredItems = filterEl?.filteredItems;
    if (filteredItems) {
      this.filteredData = filteredItems;
    }
    this.updateListItems();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    this.enabledListItems.find((listItem) => listItem.active)?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading, label, disabled, dataForFilter, filterEnabled, filterPlaceholder, filterText } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.container }, loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-scrim", { class: CSS.scrim, loading: loading }) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("table", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), "aria-label": label || "", class: CSS.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, filterEnabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("thead", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("tr", { class: { [CSS.sticky]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("th", { colSpan: _utils3_js__WEBPACK_IMPORTED_MODULE_3__.M }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: this.handleFilter, placeholder: filterPlaceholder, value: filterText,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.filterEl = el) }))))) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("tbody", { class: CSS.tableContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { onSlotchange: this.handleDefaultSlotChange })))));
  }
  filterElements({ el, filteredItems, visibleParents }) {
    const hidden = !visibleParents.has(el) && !filteredItems.includes(el);
    el.hidden = hidden;
    const closestParent = el.parentElement.closest(parentSelector);
    if (!closestParent) {
      return;
    }
    if (!hidden) {
      visibleParents.add(closestParent);
    }
    this.filterElements({
      el: closestParent,
      filteredItems,
      visibleParents
    });
  }
  get el() { return this; }
  static get watchers() { return {
    "filterEnabled": ["handleFilterEnabledChange"],
    "selectionMode": ["handleSelectionAppearanceChange"],
    "selectionAppearance": ["handleSelectionAppearanceChange"]
  }; }
  static get style() { return listCss; }
}, [1, "calcite-list", {
    "disabled": [516],
    "filterEnabled": [516, "filter-enabled"],
    "filteredItems": [1040],
    "filteredData": [1040],
    "filterPlaceholder": [513, "filter-placeholder"],
    "filterText": [1537, "filter-text"],
    "label": [1],
    "loading": [516],
    "openable": [4],
    "selectedItems": [1040],
    "selectionMode": [513, "selection-mode"],
    "selectionAppearance": [513, "selection-appearance"],
    "dataForFilter": [32],
    "setFocus": [64]
  }, [[0, "calciteInternalFocusPreviousItem", "handleCalciteInternalFocusPreviousItem"], [0, "calciteInternalListItemActive", "handleCalciteInternalListItemActive"], [0, "calciteListItemSelect", "handleCalciteListItemSelect"], [0, "calciteInternalListItemSelect", "handleCalciteInternalListItemSelect"], [0, "calciteListItemClose", "handleCalciteListItemClose"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, List);
      }
      break;
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        (0,_filter_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteList = List;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/filter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/filter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Filter),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _filter2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter2.js */ "./node_modules/@esri/calcite-components/dist/components/filter2.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */











const CSS = {
  container: "container",
  searchIcon: "search-icon"
};
const ICONS = {
  search: "search",
  close: "x"
};
const DEBOUNCE_TIMEOUT = 250;

const filterCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";

const Filter = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteFilterChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteFilterChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_8__.d)((value, emit = false) => this.updateFiltered((0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.items, value), emit), DEBOUNCE_TIMEOUT);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
      this.filter(target.value, true);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.clear();
        event.preventDefault();
      }
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    this.clear = () => {
      this.value = "";
      this.filter("", true);
      this.setFocus();
    };
    this.items = [];
    this.disabled = false;
    this.filteredItems = [];
    this.placeholder = undefined;
    this.scale = "m";
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueHandler(value) {
    this.filter(value);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.updateFiltered((0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.items, this.value));
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el?.focus();
  }
  updateFiltered(filtered, emit = false) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    if (emit) {
      this.calciteFilterChange.emit();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, scale } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("label", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-input", { "aria-label": this.messages.label, clearable: true, disabled: disabled, icon: ICONS.search, messageOverrides: { clear: this.messages.clear }, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, scale: scale, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => {
        this.textInput = el;
      } })))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "items": ["watchItemsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return filterCss; }
}, [17, "calcite-filter", {
    "items": [16],
    "disabled": [516],
    "filteredItems": [1040],
    "placeholder": [1],
    "scale": [513],
    "value": [1025],
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
  const components = ["calcite-filter", "calcite-icon", "calcite-input", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Filter);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/filter2.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/filter2.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _debounce_js__WEBPACK_IMPORTED_MODULE_0__.S ? _debounce_js__WEBPACK_IMPORTED_MODULE_0__.S.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if ((0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.a)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.i)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.b)(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) && (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.b)(value) == argsTag$1;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? _debounce_js__WEBPACK_IMPORTED_MODULE_0__.r.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) &&
    isLength(value.length) && !!typedArrayTags[(0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.b)(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _debounce_js__WEBPACK_IMPORTED_MODULE_0__.f.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.i)(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

const filter = (data, value) => {
  const escapedValue = escapeRegExp(value);
  const regex = new RegExp(escapedValue, "i");
  if (data.length === 0) {
    console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  }
  const find = (input, RE) => {
    if (input?.constant || input?.filterDisabled) {
      return true;
    }
    let found = false;
    forIn(input, (val) => {
      if (typeof val === "function" || val == null /* intentional == to catch undefined */) {
        return;
      }
      if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
        if (find(val, RE)) {
          found = true;
        }
      }
      else if (RE.test(val)) {
        found = true;
      }
    });
    return found;
  };
  const result = data.filter((item) => {
    return find(item, regex);
  });
  return result;
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/form.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/form.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ HiddenFormInputSlot),
/* harmony export */   "a": () => (/* binding */ afterConnectDefaultValueSet),
/* harmony export */   "c": () => (/* binding */ connectForm),
/* harmony export */   "d": () => (/* binding */ disconnectForm),
/* harmony export */   "f": () => (/* binding */ findAssociatedForm),
/* harmony export */   "r": () => (/* binding */ resetForm),
/* harmony export */   "s": () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



(function(prototype) {
  if (typeof prototype.requestSubmit == "function") return

  prototype.requestSubmit = function(submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name)
  }
})(HTMLFormElement.prototype);

/**
 * Exported for testing purposes.
 */
const hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
  return "checked" in component;
}
const onFormResetMap = new WeakMap();
const formComponentSet = new WeakSet();
/**
 * This helps determine if our form component is part of a composite form-associated component.
 *
 * @param form
 * @param formComponentEl
 */
function hasRegisteredFormComponentParent(form, formComponentEl) {
  // if we have a parent component using the form ID attribute, we assume it is form-associated
  const hasParentComponentWithFormIdSet = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.r)(formComponentEl.parentElement, "[form]");
  if (hasParentComponentWithFormIdSet) {
    return true;
  }
  // we use events as a way to test for nested form-associated components across shadow bounds
  const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
  let hasRegisteredFormComponentParent = false;
  form.addEventListener(formComponentRegisterEventName, (event) => {
    hasRegisteredFormComponentParent = event
      .composedPath()
      .some((element) => formComponentSet.has(element));
    event.stopPropagation();
  }, { once: true });
  formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
    bubbles: true,
    composed: true
  }));
  return hasRegisteredFormComponentParent;
}
/**
 * Helper to submit a form.
 *
 * @param component
 * @returns true if its associated form was submitted, false otherwise.
 */
function submitForm(component) {
  const { formEl } = component;
  if (!formEl) {
    return false;
  }
  formEl.requestSubmit();
  return true;
}
/**
 * Helper to reset a form.
 *
 * @param component
 */
function resetForm(component) {
  component.formEl?.reset();
}
/**
 * Helper to set up form interactions on connectedCallback.
 *
 * @param component
 */
function connectForm(component) {
  const { el, value } = component;
  const associatedForm = findAssociatedForm(component);
  if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
    return;
  }
  component.formEl = associatedForm;
  component.defaultValue = value;
  if (isCheckable(component)) {
    component.defaultChecked = component.checked;
  }
  const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
  associatedForm.addEventListener("reset", boundOnFormReset);
  onFormResetMap.set(component.el, boundOnFormReset);
  formComponentSet.add(el);
}
/**
 * Utility method to find a form-component's associated form element.
 *
 * @param component
 */
function findAssociatedForm(component) {
  const { el, form } = component;
  return form
    ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.u)(el, { id: form })
    : (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.r)(el, "form");
}
function onFormReset() {
  if (isCheckable(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
}
/**
 * Helper to tear down form interactions on disconnectedCallback.
 *
 * @param component
 */
function disconnectForm(component) {
  const { el, formEl } = component;
  if (!formEl) {
    return;
  }
  const boundOnFormReset = onFormResetMap.get(el);
  formEl.removeEventListener("reset", boundOnFormReset);
  onFormResetMap.delete(el);
  component.formEl = null;
  formComponentSet.delete(el);
}
/**
 * Helper for setting the default value on initialization after connectedCallback.
 *
 * Note that this is only needed if the default value cannot be determined on connectedCallback.
 *
 * @param component
 * @param value
 */
function afterConnectDefaultValueSet(component, value) {
  component.defaultValue = value;
}
const hiddenInputChangeHandler = (event) => {
  event.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange", { bubbles: true }));
};
const removeHiddenInputChangeEventListener = (input) => input.removeEventListener("change", hiddenInputChangeHandler);
/**
 * Helper for maintaining a form-associated's hidden input in sync with the component.
 *
 * Based on Ionic's approach: https://github.com/ionic-team/ionic-framework/blob/e4bf052794af9aac07f887013b9250d2a045eba3/core/src/utils/helpers.ts#L198
 *
 * @param component
 */
function syncHiddenFormInput(component) {
  const { el, formEl, name, value } = component;
  const { ownerDocument } = el;
  const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
  if (!formEl || !name) {
    inputs.forEach((input) => {
      removeHiddenInputChangeEventListener(input);
      input.remove();
    });
    return;
  }
  const values = Array.isArray(value) ? value : [value];
  const extra = [];
  const seen = new Set();
  inputs.forEach((input) => {
    const valueMatch = values.find((val) => 
    /* intentional non-strict equality check */
    val == input.value);
    if (valueMatch != null) {
      seen.add(valueMatch);
      defaultSyncHiddenFormInput(component, input, valueMatch);
    }
    else {
      extra.push(input);
    }
  });
  let docFrag;
  values.forEach((value) => {
    if (seen.has(value)) {
      return;
    }
    let input = extra.pop();
    if (!input) {
      input = ownerDocument.createElement("input");
      input.slot = hiddenFormInputSlotName;
    }
    if (!docFrag) {
      docFrag = ownerDocument.createDocumentFragment();
    }
    docFrag.append(input);
    // emits when hidden input is autofilled
    input.addEventListener("change", hiddenInputChangeHandler);
    defaultSyncHiddenFormInput(component, input, value);
  });
  if (docFrag) {
    el.append(docFrag);
  }
  extra.forEach((input) => {
    removeHiddenInputChangeEventListener(input);
    input.remove();
  });
}
function defaultSyncHiddenFormInput(component, input, value) {
  const { defaultValue, disabled, form, name, required } = component;
  // keep in sync to prevent losing reset value
  input.defaultValue = defaultValue;
  input.disabled = disabled;
  input.name = name;
  input.required = required;
  input.tabIndex = -1;
  // we set the attr as the prop is read-only
  if (form) {
    input.setAttribute("form", form);
  }
  else {
    input.removeAttribute("form");
  }
  if (isCheckable(component)) {
    input.checked = component.checked;
    // keep in sync to prevent losing reset value
    input.defaultChecked = component.defaultChecked;
    // heuristic to support default/on mode from https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
    input.value = component.checked ? value || "on" : "";
  }
  else {
    input.value = value || "";
  }
  component.syncHiddenFormInput?.(input);
}
/**
 * Helper to render the slot for form-associated component's hidden input.
 *
 * If the component has a default slot, this must be placed at the bottom of the component's root container to ensure it is the last child.
 *
 * render(): VNode {
 *   <Host>
 *     <div class={CSS.container}>
 *     // ...
 *     <HiddenFormInputSlot component={this} />
 *     </div>
 *   </Host>
 * }
 *
 * Note that the hidden-form-input Sass mixin must be added to the component's style to apply specific styles.
 *
 * @param root0
 * @param root0.component
 */
const HiddenFormInputSlot = ({ component }) => {
  syncHiddenFormInput(component);
  return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: hiddenFormInputSlotName });
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/input.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */













const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
};
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
const SLOTS = {
  action: "action"
};

const inputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-app-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Input = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalInputFocus = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInternalInputFocus", 6);
    this.calciteInternalInputBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInternalInputBlur", 6);
    this.calciteInputInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInputInput", 7);
    this.calciteInputChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInputChange", 6);
    /** keep track of the rendered child type */
    this.childElType = "input";
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.setDisabledAction());
    this.userChangedValue = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if ((0,_form_js__WEBPACK_IMPORTED_MODULE_1__.s)(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputBlurHandler = () => {
      this.calciteInternalInputBlur.emit();
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      if (this.disabled) {
        return;
      }
      const slottedActionEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
    };
    this.inputFocusHandler = () => {
      this.calciteInternalInputFocus.emit();
    };
    this.inputChangeHandler = () => {
      if (this.type === "file") {
        this.files = this.childEl.files;
      }
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value
      });
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const delocalizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.delocalize(value);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.p)(delocalizedValue)
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
        event.preventDefault();
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ..._key_js__WEBPACK_IMPORTED_MODULE_3__.n,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.emitChangeIfUserModified();
        }
        return;
      }
      _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      if (event.key === _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(_locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key)) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
          return;
        }
      }
      if (event.key === "-") {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.split("-").length <= 2) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 150;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      if (this.nudgeNumberValueIntervalId) {
        window.clearInterval(this.nudgeNumberValueIntervalId);
      }
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.numberButtonPointerUpAndOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonPointerDownHandler = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(event)) {
        return;
      }
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      if (!this.disabled) {
        this.nudgeNumberValue(direction, event);
      }
    };
    this.hiddenInputChangeHandler = (event) => {
      if (event.target.name === this.name) {
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      event.stopPropagation();
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (this.type === "text" && !this.childEl) {
        return;
      }
      if (this.type === "number" && !this.childNumberEl) {
        return;
      }
      this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = this.normalizeValue(value);
    };
    this.setPreviousValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      if (this.type === "number") {
        _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: "never"
        };
        const sanitizedValue = (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.s)(
        // no need to delocalize a string that ia already in latn numerals
        (this.numberingSystem && this.numberingSystem !== "latn") ||
          _locale_js__WEBPACK_IMPORTED_MODULE_6__.b !== "latn"
          ? _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.delocalize(value)
          : value);
        const newValue = value && !sanitizedValue
          ? (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.previousValue)
            ? this.previousValue
            : ""
          : sanitizedValue;
        const newLocalizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(newValue);
        this.localizedValue = newLocalizedValue;
        this.userChangedValue = origin === "user" && this.value !== newValue;
        // don't sanitize the start of negative/decimal numbers, but
        // don't set value to an invalid number
        this.value = ["-", "."].includes(newValue) ? "" : newValue;
      }
      else {
        this.userChangedValue = origin === "user" && this.value !== value;
        this.value = value;
      }
      if (origin === "direct") {
        this.setInputValue(value);
        this.previousEmittedValue = value;
      }
      if (nativeEvent) {
        const calciteInputInputEvent = this.calciteInputInput.emit();
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue =
            this.type === "number"
              ? _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(this.previousValue)
              : this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.numberingSystem = undefined;
    this.localeFormat = false;
    this.max = undefined;
    this.min = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.numberButtonType = "vertical";
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.step = undefined;
    this.autocomplete = undefined;
    this.pattern = undefined;
    this.accept = undefined;
    this.multiple = false;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.type = "text";
    this.value = "";
    this.files = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.localizedValue = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    this.maxString = this.max?.toString() || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    this.minString = this.min?.toString() || null;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : this.type === "number"
            ? (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)
              ? newValue
              : this.previousValue || ""
            : newValue
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.f)(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    if (this.type === "number") {
      this.warnAboutInvalidNumberValue(this.value);
      this.setValue({
        origin: "connected",
        value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.value) ? this.value : ""
      });
    }
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  disconnectedCallback() {
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.f)(INPUT_TYPE_ICONS, this.icon, this.type);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)) {
      this.setValue({
        origin: "reset",
        value: oldValue
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    if (this.type === "number") {
      this.childNumberEl?.focus();
    }
    else {
      this.childEl?.focus();
    }
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    if (this.type === "number") {
      this.childNumberEl?.select();
    }
    else {
      this.childEl?.select();
    }
  }
  // TODO: refactor so we don't need to sync the internals in color-picker
  // https://github.com/Esri/calcite-components/issues/6100
  /** @internal */
  async internalSyncChildElValue() {
    if (this.type === "number") {
      this.childNumberEl.value = this.value;
    }
    else {
      this.childEl.value = this.value;
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const adjustment = direction === "up" ? 1 : -1;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = new _locale_js__WEBPACK_IMPORTED_MODULE_6__.B(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
      !isNaN(inputMin) &&
      nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
      !isNaN(inputMax) &&
      !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin()
      ? `${inputMin}`
      : nudgedValueAboveInputMax()
        ? `${inputMax}`
        : nudgedValue.toString();
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    const { type } = this;
    input.type = type;
    if (type === "number") {
      input.min = this.min?.toString(10) ?? "";
      input.max = this.max?.toString(10) ?? "";
    }
    else if (type === "text") {
      if (this.minLength != null) {
        input.minLength = this.minLength;
      }
      if (this.maxLength != null) {
        input.maxLength = this.maxLength;
      }
    }
  }
  setDisabledAction() {
    const slottedActionEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    if (this.disabled) {
      if (slottedActionEl.getAttribute("disabled") == null) {
        this.slottedActionElDisabledInternally = true;
      }
      slottedActionEl.setAttribute("disabled", "");
    }
    else if (this.slottedActionElDisabledInternally) {
      slottedActionEl.removeAttribute("disabled");
      this.slottedActionElDisabledInternally = false;
    }
  }
  normalizeValue(value) {
    return this.type === "number" ? ((0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value) ? value : "") : value;
  }
  warnAboutInvalidNumberValue(value) {
    if (this.type === "number" && value && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(this.el);
    const loader = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.loader }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { icon: "chevron-up", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsHorizontalDown = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsVertical = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("input", { accept: this.accept, "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildNumberElRef })) : null;
    const childEl = this.type !== "number"
      ? [
        (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(this.childElType, { accept: this.accept, "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
            [CSS.editingEnabled]: this.editingEnabled,
            [CSS.inlineChild]: !!this.inlineEditableEl
          }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value,
          // eslint-disable-next-line react/jsx-sort-props
          ref: this.setChildElRef }),
        this.isTextarea ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.resizeIconWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" }))) : null
      ]
      : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: { [CSS.inputWrapper]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.actionWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
      ? numberButtonsVertical
      : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "type": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return inputCss; }
}, [1, "calcite-input", {
    "alignment": [513],
    "autofocus": [516],
    "clearable": [516],
    "disabled": [516],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "hidden": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [1],
    "loading": [516],
    "numberingSystem": [513, "numbering-system"],
    "localeFormat": [4, "locale-format"],
    "max": [514],
    "min": [514],
    "maxLength": [514, "max-length"],
    "minLength": [514, "min-length"],
    "name": [513],
    "numberButtonType": [513, "number-button-type"],
    "placeholder": [1],
    "prefixText": [1, "prefix-text"],
    "readOnly": [516, "read-only"],
    "required": [516],
    "scale": [513],
    "status": [513],
    "step": [520],
    "autocomplete": [1],
    "pattern": [1],
    "accept": [1],
    "multiple": [4],
    "inputMode": [1, "input-mode"],
    "enterKeyHint": [1, "enter-key-hint"],
    "suffixText": [1, "suffix-text"],
    "editingEnabled": [1540, "editing-enabled"],
    "type": [513],
    "value": [1025],
    "files": [16],
    "messages": [1040],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "localizedValue": [32],
    "slottedActionElDisabledInternally": [32],
    "setFocus": [64],
    "selectText": [64],
    "internalSyncChildElValue": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input", "calcite-icon", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Input);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/label2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   "c": () => (/* binding */ connectLabel),
/* harmony export */   "d": () => (/* binding */ disconnectLabel),
/* harmony export */   "g": () => (/* binding */ getLabelText),
/* harmony export */   "l": () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternaLabelDisconnected";
const labelTagName = "calcite-label";
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new Set();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.u)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.r)(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if (onLabelClickMap.has(labelEl) || (!labelEl && unlabeledComponents.has(component))) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const boundOnLabelClick = onLabelClick.bind(component);
    onLabelClickMap.set(component.labelEl, boundOnLabelClick);
    component.labelEl.addEventListener(labelClickEvent, boundOnLabelClick);
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const boundOnLabelClick = onLabelClickMap.get(component.labelEl);
  component.labelEl.removeEventListener(labelClickEvent, boundOnLabelClick);
  onLabelClickMap.delete(component.labelEl);
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  if (this.disabled) {
    return;
  }
  const containedLabelableChildClicked = this.el.contains(event.detail.sourceEvent.target);
  if (containedLabelableChildClicked) {
    return;
  }
  this.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/progress.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Progress),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


const progressCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}";

const Progress = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "determinate";
    this.value = 0;
    this.label = undefined;
    this.text = undefined;
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "track" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        reversed: this.reversed
      }, style: barStyles })), this.text ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.text) : null));
  }
  get el() { return this; }
  static get style() { return progressCss; }
}, [1, "calcite-progress", {
    "type": [513],
    "value": [2],
    "label": [1],
    "text": [1],
    "reversed": [516]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Progress);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/scrim.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/scrim.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Scrim),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */





const CSS = {
  scrim: "scrim",
  content: "content"
};

const scrimCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}";

const Scrim = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.loading = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, loading, messages } = this;
    const hasContent = el.innerHTML.trim().length > 0;
    const loaderNode = loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-loader", { label: messages.loading }) : null;
    const contentNode = hasContent ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot", null))) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("div", { class: CSS.scrim }, loaderNode, contentNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return scrimCss; }
}, [1, "calcite-scrim", {
    "loading": [516],
    "messages": [1040],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Scrim);
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/utils3.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils3.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "M": () => (/* binding */ MAX_COLUMNS),
/* harmony export */   "S": () => (/* binding */ SLOTS),
/* harmony export */   "a": () => (/* binding */ getDepth),
/* harmony export */   "g": () => (/* binding */ getListItemChildren),
/* harmony export */   "u": () => (/* binding */ updateListItemChildren)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


const CSS = {
  container: "container",
  containerBorderSelected: "container--border-selected",
  containerBorderUnselected: "container--border-unselected",
  contentContainer: "content-container",
  contentContainerSelectable: "content-container--selectable",
  contentContainerHasCenterContent: "content-container--has-center-content",
  nestedContainer: "nested-container",
  nestedContainerHidden: "nested-container--hidden",
  content: "content",
  customContent: "custom-content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
  selectionContainer: "selection-container",
  openContainer: "open-container"
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};
const MAX_COLUMNS = 5;
const ICONS = {
  selectedMultiple: "check-circle-f",
  selectedSingle: "circle-f",
  unselected: "blank",
  closedLTR: "caret-right",
  closedRTL: "caret-left",
  open: "caret-down",
  blank: "blank",
  close: "x"
};

const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector = "calcite-list-item";
function getListItemChildren(event) {
  const assignedElements = event.target.assignedElements({ flatten: true });
  const listItemGroupChildren = assignedElements.filter((el) => el?.matches(listItemGroupSelector))
    .map((group) => Array.from(group.querySelectorAll(listItemSelector)))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector));
  return [...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
  listItemChildren.forEach((listItem) => {
    listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
    listItem.setSize = listItemChildren.length;
  });
}
function getDepth(element, includeGroup = false) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return 0;
  }
  const expression = includeGroup
    ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
    : "ancestor::calcite-list-item";
  const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZmZjY2RhYWE2ZDZmYWMzNDkzOWI2NGI3ZmI5NGFlMTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUMzRDtBQUNnQjtBQUNUO0FBQ2lEO0FBQ0s7QUFDbEQ7QUFDRjtBQUNDO0FBQ0M7QUFDRTtBQUNIO0FBQ1Y7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMseUdBQXlHLFVBQVUsV0FBVyxrQkFBa0IsaUJBQWlCLGtCQUFrQixtQ0FBbUMsc0JBQXNCLGFBQWEsaUJBQWlCLHNCQUFzQiw2QkFBNkIsbUJBQW1CLHNCQUFzQixPQUFPLGlCQUFpQiw2QkFBNkIscUJBQXFCLCtDQUErQyxtREFBbUQsdUdBQXVHLHdDQUF3QyxzQkFBc0IsOEJB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGVBQWU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE9BQU8sbUZBQWU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1saXN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ZpbHRlcjIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sYWJlbDIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Byb2dyZXNzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9zY3JpbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdXRpbHMzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuLCBnIGFzIGdldExpc3RJdGVtQ2hpbGRyZW4sIE0gYXMgTUFYX0NPTFVNTlMgfSBmcm9tICcuL3V0aWxzMy5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDcgfSBmcm9tICcuL2ZpbHRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNiB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vaW5wdXQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vcHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL3NjcmltLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIHRhYmxlOiBcInRhYmxlXCIsXG4gIHNjcmltOiBcInNjcmltXCIsXG4gIHRhYmxlQ29udGFpbmVyOiBcInRhYmxlLWNvbnRhaW5lclwiLFxuICBzdGlja3k6IFwic3RpY2t5LXBvc1wiXG59O1xuY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gMDtcblxuY29uc3QgbGlzdENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LnRhYmxlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udGFibGUtY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fS50YWJsZXtpbmxpbmUtc2l6ZToxMDAlfTo6c2xvdHRlZChjYWxjaXRlLWxpc3QtaXRlbSl7bWFyZ2luLWJsb2NrLWVuZDoxcHg7LS10dy1zaGFkb3c6MCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMXB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9OjpzbG90dGVkKGNhbGNpdGUtbGlzdC1pdGVtOmxhc3QtY2hpbGQpey0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LnN0aWNreS1wb3N7cG9zaXRpb246c3RpY2t5O2luc2V0LWJsb2NrLXN0YXJ0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtc3RpY2t5KX1jYWxjaXRlLWZpbHRlcnttYXJnaW4tYmxvY2stZW5kOjFweH1cIjtcblxuY29uc3QgbGlzdEl0ZW1TZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW1cIjtcbmNvbnN0IHBhcmVudFNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3QtaXRlbS1ncm91cCwgY2FsY2l0ZS1saXN0LWl0ZW1cIjtcbmNvbnN0IExpc3QgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0Q2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0RmlsdGVyXCIsIDYpO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5lbmFibGVkTGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnVwZGF0ZUxpc3RJdGVtcygpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuKGdldExpc3RJdGVtQ2hpbGRyZW4oZXZlbnQpKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0QWN0aXZlTGlzdEl0ZW0gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVuYWJsZWRMaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVuYWJsZWRMaXN0SXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5hY3RpdmUpKSB7XG4gICAgICAgIGlmIChlbmFibGVkTGlzdEl0ZW1zWzBdKSB7XG4gICAgICAgICAgZW5hYmxlZExpc3RJdGVtc1swXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMgPSAoZW1pdCA9IGZhbHNlKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmVuYWJsZWRMaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKTtcbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUxpc3RDaGFuZ2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJlZEl0ZW1zID0gKGVtaXQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgeyBsaXN0SXRlbXMsIGZpbHRlcmVkRGF0YSwgZmlsdGVyVGV4dCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xuICAgICAgY29uc3QgbGFzdERlc2NlbmRhbnRJdGVtcyA9IGxpc3RJdGVtcz8uZmlsdGVyKChsaXN0SXRlbSkgPT4gbGlzdEl0ZW1zLmV2ZXJ5KChsaSkgPT4gbGkgPT09IGxpc3RJdGVtIHx8ICFsaXN0SXRlbS5jb250YWlucyhsaSkpKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBsaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiAhZmlsdGVyVGV4dCB8fCB2YWx1ZXMuaW5jbHVkZXMoaXRlbS52YWx1ZSkpIHx8IFtdO1xuICAgICAgY29uc3QgdmlzaWJsZVBhcmVudHMgPSBuZXcgV2Vha1NldCgpO1xuICAgICAgbGFzdERlc2NlbmRhbnRJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSkgPT4gdGhpcy5maWx0ZXJFbGVtZW50cyh7IGVsOiBsaXN0SXRlbSwgZmlsdGVyZWRJdGVtcywgdmlzaWJsZVBhcmVudHMgfSkpO1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgeyBmaWx0ZXJlZEl0ZW1zLCB2YWx1ZSB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gZmlsdGVyZWRJdGVtcztcbiAgICAgIHRoaXMuZmlsdGVyVGV4dCA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVMaXN0SXRlbXModHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmdldEl0ZW1EYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICBtZXRhZGF0YTogaXRlbS5tZXRhZGF0YSxcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgIH0pKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zID0gZGVib3VuY2UoKGVtaXQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgeyBzZWxlY3Rpb25BcHBlYXJhbmNlLCBzZWxlY3Rpb25Nb2RlIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnF1ZXJ5TGlzdEl0ZW1zKCk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9uQXBwZWFyYW5jZSA9IHNlbGVjdGlvbkFwcGVhcmFuY2U7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9uTW9kZSA9IHNlbGVjdGlvbk1vZGU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdEl0ZW1zID0gaXRlbXM7XG4gICAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IHRoaXMuZ2V0SXRlbURhdGEoKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyRWwpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlckVsLml0ZW1zID0gdGhpcy5kYXRhRm9yRmlsdGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkSXRlbXMoZW1pdCk7XG4gICAgICB0aGlzLmVuYWJsZWRMaXN0SXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmNsb3NlZCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZUxpc3RJdGVtKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMoZW1pdCk7XG4gICAgfSwgZGVib3VuY2VUaW1lb3V0KTtcbiAgICB0aGlzLnF1ZXJ5TGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNSb3cgPSAoZm9jdXNFbCkgPT4ge1xuICAgICAgY29uc3QgeyBlbmFibGVkTGlzdEl0ZW1zIH0gPSB0aGlzO1xuICAgICAgaWYgKCFmb2N1c0VsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVuYWJsZWRMaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IChsaXN0SXRlbS5hY3RpdmUgPSBsaXN0SXRlbSA9PT0gZm9jdXNFbCkpO1xuICAgICAgZm9jdXNFbC5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5pc05hdmlnYWJsZSA9IChsaXN0SXRlbSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50TGlzdEl0ZW1FbCA9IGxpc3RJdGVtLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QobGlzdEl0ZW1TZWxlY3Rvcik7XG4gICAgICBpZiAoIXBhcmVudExpc3RJdGVtRWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50TGlzdEl0ZW1FbC5vcGVuICYmIHRoaXMuaXNOYXZpZ2FibGUocGFyZW50TGlzdEl0ZW1FbCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxpc3RLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5lbmFibGVkTGlzdEl0ZW1zLmZpbHRlcigobGlzdEl0ZW0pID0+IHRoaXMuaXNOYXZpZ2FibGUobGlzdEl0ZW0pKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGZpbHRlcmVkSXRlbXMuZmluZEluZGV4KChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uYWN0aXZlKTtcbiAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXNbbmV4dEluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coZmlsdGVyZWRJdGVtc1tuZXh0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICBpZiAoZmlsdGVyZWRJdGVtc1twcmV2SW5kZXhdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1JvdyhmaWx0ZXJlZEl0ZW1zW3ByZXZJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhvbWVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcbiAgICAgICAgaWYgKGhvbWVJdGVtKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1Jvdyhob21lSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbmRJdGVtID0gZmlsdGVyZWRJdGVtc1tmaWx0ZXJlZEl0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoZW5kSXRlbSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coZW5kSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIHRoaXMuZmlsdGVyUGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibm9uZVwiO1xuICAgIHRoaXMuc2VsZWN0aW9uQXBwZWFyYW5jZSA9IFwiaWNvblwiO1xuICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IFtdO1xuICB9XG4gIGhhbmRsZUZpbHRlckVuYWJsZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXMoKTtcbiAgfVxuICBoYW5kbGVTZWxlY3Rpb25BcHBlYXJhbmNlQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW0oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7IGVuYWJsZWRMaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gZW5hYmxlZExpc3RJdGVtcy5maW5kSW5kZXgoKGxpc3RJdGVtKSA9PiBsaXN0SXRlbS5hY3RpdmUpO1xuICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgaWYgKGVuYWJsZWRMaXN0SXRlbXNbcHJldkluZGV4XSkge1xuICAgICAgdGhpcy5mb2N1c1JvdyhlbmFibGVkTGlzdEl0ZW1zW3ByZXZJbmRleF0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUFjdGl2ZShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGxpc3RJdGVtcyB9ID0gdGhpcztcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGxpc3RJdGVtLmFjdGl2ZSA9IGxpc3RJdGVtID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUxpc3RJdGVtU2VsZWN0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJdGVtcyh0cnVlKTtcbiAgfVxuICBoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGxpc3RJdGVtcywgc2VsZWN0aW9uTW9kZSB9ID0gdGhpcztcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGlmIChzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIikge1xuICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGxpc3RJdGVtID09PSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUxpc3RJdGVtQ2xvc2UoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXModHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGNvbnN0IHsgZmlsdGVyRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IGZpbHRlckVsPy5maWx0ZXJlZEl0ZW1zO1xuICAgIGlmIChmaWx0ZXJlZEl0ZW1zKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkSXRlbXM7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZW5hYmxlZExpc3RJdGVtcy5maW5kKChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uYWN0aXZlKT8uc2V0Rm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgbGFiZWwsIGRpc2FibGVkLCBkYXRhRm9yRmlsdGVyLCBmaWx0ZXJFbmFibGVkLCBmaWx0ZXJQbGFjZWhvbGRlciwgZmlsdGVyVGV4dCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRhaW5lciB9LCBsb2FkaW5nID8gaChcImNhbGNpdGUtc2NyaW1cIiwgeyBjbGFzczogQ1NTLnNjcmltLCBsb2FkaW5nOiBsb2FkaW5nIH0pIDogbnVsbCwgaChcInRhYmxlXCIsIHsgXCJhcmlhLWJ1c3lcIjogdG9BcmlhQm9vbGVhbihsb2FkaW5nKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsIHx8IFwiXCIsIGNsYXNzOiBDU1MudGFibGUsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVMaXN0S2V5ZG93biwgcm9sZTogXCJ0cmVlZ3JpZFwiIH0sIGZpbHRlckVuYWJsZWQgPyAoaChcInRoZWFkXCIsIG51bGwsIGgoXCJ0clwiLCB7IGNsYXNzOiB7IFtDU1Muc3RpY2t5XTogdHJ1ZSB9IH0sIGgoXCJ0aFwiLCB7IGNvbFNwYW46IE1BWF9DT0xVTU5TIH0sIGgoXCJjYWxjaXRlLWZpbHRlclwiLCB7IFwiYXJpYS1sYWJlbFwiOiBmaWx0ZXJQbGFjZWhvbGRlciwgZGlzYWJsZWQ6IGxvYWRpbmcgfHwgZGlzYWJsZWQsIGl0ZW1zOiBkYXRhRm9yRmlsdGVyLCBvbkNhbGNpdGVGaWx0ZXJDaGFuZ2U6IHRoaXMuaGFuZGxlRmlsdGVyLCBwbGFjZWhvbGRlcjogZmlsdGVyUGxhY2Vob2xkZXIsIHZhbHVlOiBmaWx0ZXJUZXh0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuZmlsdGVyRWwgPSBlbCkgfSkpKSkpIDogbnVsbCwgaChcInRib2R5XCIsIHsgY2xhc3M6IENTUy50YWJsZUNvbnRhaW5lciB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKSk7XG4gIH1cbiAgZmlsdGVyRWxlbWVudHMoeyBlbCwgZmlsdGVyZWRJdGVtcywgdmlzaWJsZVBhcmVudHMgfSkge1xuICAgIGNvbnN0IGhpZGRlbiA9ICF2aXNpYmxlUGFyZW50cy5oYXMoZWwpICYmICFmaWx0ZXJlZEl0ZW1zLmluY2x1ZGVzKGVsKTtcbiAgICBlbC5oaWRkZW4gPSBoaWRkZW47XG4gICAgY29uc3QgY2xvc2VzdFBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQuY2xvc2VzdChwYXJlbnRTZWxlY3Rvcik7XG4gICAgaWYgKCFjbG9zZXN0UGFyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICB2aXNpYmxlUGFyZW50cy5hZGQoY2xvc2VzdFBhcmVudCk7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyRWxlbWVudHMoe1xuICAgICAgZWw6IGNsb3Nlc3RQYXJlbnQsXG4gICAgICBmaWx0ZXJlZEl0ZW1zLFxuICAgICAgdmlzaWJsZVBhcmVudHNcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmaWx0ZXJFbmFibGVkXCI6IFtcImhhbmRsZUZpbHRlckVuYWJsZWRDaGFuZ2VcIl0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFtcImhhbmRsZVNlbGVjdGlvbkFwcGVhcmFuY2VDaGFuZ2VcIl0sXG4gICAgXCJzZWxlY3Rpb25BcHBlYXJhbmNlXCI6IFtcImhhbmRsZVNlbGVjdGlvbkFwcGVhcmFuY2VDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gbGlzdENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1saXN0XCIsIHtcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZmlsdGVyRW5hYmxlZFwiOiBbNTE2LCBcImZpbHRlci1lbmFibGVkXCJdLFxuICAgIFwiZmlsdGVyZWRJdGVtc1wiOiBbMTA0MF0sXG4gICAgXCJmaWx0ZXJlZERhdGFcIjogWzEwNDBdLFxuICAgIFwiZmlsdGVyUGxhY2Vob2xkZXJcIjogWzUxMywgXCJmaWx0ZXItcGxhY2Vob2xkZXJcIl0sXG4gICAgXCJmaWx0ZXJUZXh0XCI6IFsxNTM3LCBcImZpbHRlci10ZXh0XCJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm9wZW5hYmxlXCI6IFs0XSxcbiAgICBcInNlbGVjdGVkSXRlbXNcIjogWzEwNDBdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbNTEzLCBcInNlbGVjdGlvbi1tb2RlXCJdLFxuICAgIFwic2VsZWN0aW9uQXBwZWFyYW5jZVwiOiBbNTEzLCBcInNlbGVjdGlvbi1hcHBlYXJhbmNlXCJdLFxuICAgIFwiZGF0YUZvckZpbHRlclwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzAsIFwiY2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW1cIiwgXCJoYW5kbGVDYWxjaXRlSW50ZXJuYWxGb2N1c1ByZXZpb3VzSXRlbVwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmVcIiwgXCJoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUFjdGl2ZVwiXSwgWzAsIFwiY2FsY2l0ZUxpc3RJdGVtU2VsZWN0XCIsIFwiaGFuZGxlQ2FsY2l0ZUxpc3RJdGVtU2VsZWN0XCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdFwiLCBcImhhbmRsZUNhbGNpdGVJbnRlcm5hbExpc3RJdGVtU2VsZWN0XCJdLCBbMCwgXCJjYWxjaXRlTGlzdEl0ZW1DbG9zZVwiLCBcImhhbmRsZUNhbGNpdGVMaXN0SXRlbUNsb3NlXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWxpc3RcIiwgXCJjYWxjaXRlLWZpbHRlclwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtaW5wdXRcIiwgXCJjYWxjaXRlLWxvYWRlclwiLCBcImNhbGNpdGUtcHJvZ3Jlc3NcIiwgXCJjYWxjaXRlLXNjcmltXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxpc3RcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBMaXN0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWZpbHRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ3KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWlucHV0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wcm9ncmVzc1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1zY3JpbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlTGlzdCA9IExpc3Q7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlTGlzdCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBGcmFnbWVudCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyIH0gZnJvbSAnLi9maWx0ZXIyLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vcHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgc2VhcmNoSWNvbjogXCJzZWFyY2gtaWNvblwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIHNlYXJjaDogXCJzZWFyY2hcIixcbiAgY2xvc2U6IFwieFwiXG59O1xuY29uc3QgREVCT1VOQ0VfVElNRU9VVCA9IDI1MDtcblxuY29uc3QgZmlsdGVyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uY29udGFpbmVye2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO3BhZGRpbmc6MC41cmVtfWxhYmVse3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1pbmxpbmU6MC4yNXJlbTttYXJnaW4tYmxvY2s6MHB4O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW59aW5wdXRbdHlwZT10ZXh0XXttYXJnaW4tYmxvY2stZW5kOjAuMjVyZW07aW5saW5lLXNpemU6MTAwJTtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7cGFkZGluZy1pbmxpbmUtZW5kOjAuMjVyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS41cmVtO3RyYW5zaXRpb246cGFkZGluZyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBib3gtc2hhZG93IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9aW5wdXRbdHlwZT10ZXh0XTo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX1jYWxjaXRlLWlucHV0e2lubGluZS1zaXplOjEwMCV9LnNlYXJjaC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7aW5zZXQtaW5saW5lLXN0YXJ0OjA7dHJhbnNpdGlvbjppbnNldC1pbmxpbmUtc3RhcnQgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgaW5zZXQtaW5saW5lLWVuZCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9aW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW19aW5wdXRbdHlwZT10ZXh0XTpmb2N1c34uc2VhcmNoLWljb257aW5zZXQtaW5saW5lLXN0YXJ0OmNhbGMoMXJlbSAqIC0xKTtvcGFjaXR5OjB9LmNsZWFyLWJ1dHRvbntkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci13aWR0aDowcHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmNsZWFyLWJ1dHRvbjpob3ZlciwuY2xlYXItYnV0dG9uOmZvY3Vze2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1cIjtcblxuY29uc3QgRmlsdGVyID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVGaWx0ZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVGaWx0ZXJDaGFuZ2VcIiwgNik7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5maWx0ZXIgPSBkZWJvdW5jZSgodmFsdWUsIGVtaXQgPSBmYWxzZSkgPT4gdGhpcy51cGRhdGVGaWx0ZXJlZChmaWx0ZXIodGhpcy5pdGVtcywgdmFsdWUpLCBlbWl0KSwgREVCT1VOQ0VfVElNRU9VVCk7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlcih0YXJnZXQudmFsdWUsIHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIHRoaXMuZmlsdGVyKFwiXCIsIHRydWUpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICB3YXRjaEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLmZpbHRlcih0aGlzLnZhbHVlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgdGhpcy5maWx0ZXIodmFsdWUpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkKGZpbHRlcih0aGlzLml0ZW1zLCB0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbD8uZm9jdXMoKTtcbiAgfVxuICB1cGRhdGVGaWx0ZXJlZChmaWx0ZXJlZCwgZW1pdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmNvbmNhdChmaWx0ZXJlZCk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUZpbHRlckNoYW5nZS5lbWl0KCk7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgc2NhbGUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgaChcImxhYmVsXCIsIG51bGwsIGgoXCJjYWxjaXRlLWlucHV0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubGFiZWwsIGNsZWFyYWJsZTogdHJ1ZSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpY29uOiBJQ09OUy5zZWFyY2gsIG1lc3NhZ2VPdmVycmlkZXM6IHsgY2xlYXI6IHRoaXMubWVzc2FnZXMuY2xlYXIgfSwgb25DYWxjaXRlSW5wdXRJbnB1dDogdGhpcy5pbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIHNjYWxlOiBzY2FsZSwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4ge1xuICAgICAgICB0aGlzLnRleHRJbnB1dCA9IGVsO1xuICAgICAgfSB9KSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIml0ZW1zXCI6IFtcIndhdGNoSXRlbXNIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVIYW5kbGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBmaWx0ZXJDc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLWZpbHRlclwiLCB7XG4gICAgXCJpdGVtc1wiOiBbMTZdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmaWx0ZXJlZEl0ZW1zXCI6IFsxMDQwXSxcbiAgICBcInBsYWNlaG9sZGVyXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzEwMjVdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWZpbHRlclwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtaW5wdXRcIiwgXCJjYWxjaXRlLXByb2dyZXNzXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWZpbHRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEZpbHRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWlucHV0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBGaWx0ZXIgYXMgRiwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgYSBhcyBpc1N5bWJvbCwgUyBhcyBTeW1ib2wsIGkgYXMgaXNPYmplY3QsIGIgYXMgYmFzZUdldFRhZywgYyBhcyBpc09iamVjdExpa2UsIHIgYXMgcm9vdCwgZiBhcyBmcmVlR2xvYmFsIH0gZnJvbSAnLi9kZWJvdW5jZS5qcyc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyQxID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyQxIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiQxID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiQxIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDMgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvJDM7XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWckMSA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnJDE7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byQyID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkkMiA9IG9iamVjdFByb3RvJDIuaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8kMi5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkkMi5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzJDEgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlJDEgPSBmcmVlRXhwb3J0cyQxICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMkMSA9IGZyZWVNb2R1bGUkMSAmJiBmcmVlTW9kdWxlJDEuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHMkMTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyQxID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byQxID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkkMSA9IG9iamVjdFByb3RvJDEuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkkMS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGBpZGVudGl0eWAgaWYgaXQncyBub3QgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBjYXN0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYXN0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBpZGVudGl0eTtcbn1cblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcbiAgICByZUhhc1JlZ0V4cENoYXIgPSBSZWdFeHAocmVSZWdFeHBDaGFyLnNvdXJjZSk7XG5cbi8qKlxuICogRXNjYXBlcyB0aGUgYFJlZ0V4cGAgc3BlY2lhbCBjaGFyYWN0ZXJzIFwiXlwiLCBcIiRcIiwgXCJcXFwiLCBcIi5cIiwgXCIqXCIsIFwiK1wiLFxuICogXCI/XCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCIsIGFuZCBcInxcIiBpbiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBlc2NhcGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5lc2NhcGVSZWdFeHAoJ1tsb2Rhc2hdKGh0dHBzOi8vbG9kYXNoLmNvbS8pJyk7XG4gKiAvLyA9PiAnXFxbbG9kYXNoXFxdXFwoaHR0cHM6Ly9sb2Rhc2hcXC5jb20vXFwpJ1xuICovXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiAoc3RyaW5nICYmIHJlSGFzUmVnRXhwQ2hhci50ZXN0KHN0cmluZykpXG4gICAgPyBzdHJpbmcucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAgIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBhblxuICogb2JqZWN0IGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkXG4gKiB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBrZXksIG9iamVjdCkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdFxuICogaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjMuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5mb3JJblJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uZm9ySW4obmV3IEZvbywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICBjb25zb2xlLmxvZyhrZXkpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzICdhJywgJ2InLCB0aGVuICdjJyAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKS5cbiAqL1xuZnVuY3Rpb24gZm9ySW4ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGxcbiAgICA/IG9iamVjdFxuICAgIDogYmFzZUZvcihvYmplY3QsIGNhc3RGdW5jdGlvbihpdGVyYXRlZSksIGtleXNJbik7XG59XG5cbmNvbnN0IGZpbHRlciA9IChkYXRhLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBlc2NhcGVkVmFsdWUgPSBlc2NhcGVSZWdFeHAodmFsdWUpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoZXNjYXBlZFZhbHVlLCBcImlcIik7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnNvbGUud2FybihgTm8gZGF0YSB3YXMgcGFzc2VkIHRvIHRoZSBmaWx0ZXIgZnVuY3Rpb24uXG4gICAgVGhlIGRhdGEgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IG9mIG9iamVjdHNgKTtcbiAgfVxuICBjb25zdCBmaW5kID0gKGlucHV0LCBSRSkgPT4ge1xuICAgIGlmIChpbnB1dD8uY29uc3RhbnQgfHwgaW5wdXQ/LmZpbHRlckRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgZm9ySW4oaW5wdXQsICh2YWwpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIgfHwgdmFsID09IG51bGwgLyogaW50ZW50aW9uYWwgPT0gdG8gY2F0Y2ggdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgdmFsICE9PSBudWxsKSkge1xuICAgICAgICBpZiAoZmluZCh2YWwsIFJFKSkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoUkUudGVzdCh2YWwpKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGZpbmQoaXRlbSwgcmVnZXgpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7IGZpbHRlciBhcyBmIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgdSBhcyBxdWVyeUVsZW1lbnRSb290cywgciBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4oZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLnJlcXVlc3RTdWJtaXQgPT0gXCJmdW5jdGlvblwiKSByZXR1cm5cblxuICBwcm90b3R5cGUucmVxdWVzdFN1Ym1pdCA9IGZ1bmN0aW9uKHN1Ym1pdHRlcikge1xuICAgIGlmIChzdWJtaXR0ZXIpIHtcbiAgICAgIHZhbGlkYXRlU3VibWl0dGVyKHN1Ym1pdHRlciwgdGhpcyk7XG4gICAgICBzdWJtaXR0ZXIuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VibWl0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgc3VibWl0dGVyLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgc3VibWl0dGVyLmhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHN1Ym1pdHRlcik7XG4gICAgICBzdWJtaXR0ZXIuY2xpY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc3VibWl0dGVyKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVTdWJtaXR0ZXIoc3VibWl0dGVyLCBmb3JtKSB7XG4gICAgc3VibWl0dGVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmFpc2UoVHlwZUVycm9yLCBcInBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdIVE1MRWxlbWVudCdcIik7XG4gICAgc3VibWl0dGVyLnR5cGUgPT0gXCJzdWJtaXRcIiB8fCByYWlzZShUeXBlRXJyb3IsIFwiVGhlIHNwZWNpZmllZCBlbGVtZW50IGlzIG5vdCBhIHN1Ym1pdCBidXR0b25cIik7XG4gICAgc3VibWl0dGVyLmZvcm0gPT0gZm9ybSB8fCByYWlzZShET01FeGNlcHRpb24sIFwiVGhlIHNwZWNpZmllZCBlbGVtZW50IGlzIG5vdCBvd25lZCBieSB0aGlzIGZvcm0gZWxlbWVudFwiLCBcIk5vdEZvdW5kRXJyb3JcIik7XG4gIH1cblxuICBmdW5jdGlvbiByYWlzZShlcnJvckNvbnN0cnVjdG9yLCBtZXNzYWdlLCBuYW1lKSB7XG4gICAgdGhyb3cgbmV3IGVycm9yQ29uc3RydWN0b3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAncmVxdWVzdFN1Ym1pdCcgb24gJ0hUTUxGb3JtRWxlbWVudCc6IFwiICsgbWVzc2FnZSArIFwiLlwiLCBuYW1lKVxuICB9XG59KShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqL1xuY29uc3QgaGlkZGVuRm9ybUlucHV0U2xvdE5hbWUgPSBcImhpZGRlbi1mb3JtLWlucHV0XCI7XG5mdW5jdGlvbiBpc0NoZWNrYWJsZShjb21wb25lbnQpIHtcbiAgcmV0dXJuIFwiY2hlY2tlZFwiIGluIGNvbXBvbmVudDtcbn1cbmNvbnN0IG9uRm9ybVJlc2V0TWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGZvcm1Db21wb25lbnRTZXQgPSBuZXcgV2Vha1NldCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBzIGRldGVybWluZSBpZiBvdXIgZm9ybSBjb21wb25lbnQgaXMgcGFydCBvZiBhIGNvbXBvc2l0ZSBmb3JtLWFzc29jaWF0ZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSBmb3JtXG4gKiBAcGFyYW0gZm9ybUNvbXBvbmVudEVsXG4gKi9cbmZ1bmN0aW9uIGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50KGZvcm0sIGZvcm1Db21wb25lbnRFbCkge1xuICAvLyBpZiB3ZSBoYXZlIGEgcGFyZW50IGNvbXBvbmVudCB1c2luZyB0aGUgZm9ybSBJRCBhdHRyaWJ1dGUsIHdlIGFzc3VtZSBpdCBpcyBmb3JtLWFzc29jaWF0ZWRcbiAgY29uc3QgaGFzUGFyZW50Q29tcG9uZW50V2l0aEZvcm1JZFNldCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShmb3JtQ29tcG9uZW50RWwucGFyZW50RWxlbWVudCwgXCJbZm9ybV1cIik7XG4gIGlmIChoYXNQYXJlbnRDb21wb25lbnRXaXRoRm9ybUlkU2V0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gd2UgdXNlIGV2ZW50cyBhcyBhIHdheSB0byB0ZXN0IGZvciBuZXN0ZWQgZm9ybS1hc3NvY2lhdGVkIGNvbXBvbmVudHMgYWNyb3NzIHNoYWRvdyBib3VuZHNcbiAgY29uc3QgZm9ybUNvbXBvbmVudFJlZ2lzdGVyRXZlbnROYW1lID0gXCJjYWxjaXRlSW50ZXJuYWxGb3JtQ29tcG9uZW50UmVnaXN0ZXJcIjtcbiAgbGV0IGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50ID0gZmFsc2U7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihmb3JtQ29tcG9uZW50UmVnaXN0ZXJFdmVudE5hbWUsIChldmVudCkgPT4ge1xuICAgIGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50ID0gZXZlbnRcbiAgICAgIC5jb21wb3NlZFBhdGgoKVxuICAgICAgLnNvbWUoKGVsZW1lbnQpID0+IGZvcm1Db21wb25lbnRTZXQuaGFzKGVsZW1lbnQpKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICBmb3JtQ29tcG9uZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZm9ybUNvbXBvbmVudFJlZ2lzdGVyRXZlbnROYW1lLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjb21wb3NlZDogdHJ1ZVxuICB9KSk7XG4gIHJldHVybiBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudDtcbn1cbi8qKlxuICogSGVscGVyIHRvIHN1Ym1pdCBhIGZvcm0uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgdHJ1ZSBpZiBpdHMgYXNzb2NpYXRlZCBmb3JtIHdhcyBzdWJtaXR0ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gc3VibWl0Rm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBmb3JtRWwgfSA9IGNvbXBvbmVudDtcbiAgaWYgKCFmb3JtRWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9ybUVsLnJlcXVlc3RTdWJtaXQoKTtcbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEhlbHBlciB0byByZXNldCBhIGZvcm0uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZXNldEZvcm0oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5mb3JtRWw/LnJlc2V0KCk7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgZm9ybSBpbnRlcmFjdGlvbnMgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0Rm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBlbCwgdmFsdWUgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgYXNzb2NpYXRlZEZvcm0gPSBmaW5kQXNzb2NpYXRlZEZvcm0oY29tcG9uZW50KTtcbiAgaWYgKCFhc3NvY2lhdGVkRm9ybSB8fCBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudChhc3NvY2lhdGVkRm9ybSwgZWwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5mb3JtRWwgPSBhc3NvY2lhdGVkRm9ybTtcbiAgY29tcG9uZW50LmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICBpZiAoaXNDaGVja2FibGUoY29tcG9uZW50KSkge1xuICAgIGNvbXBvbmVudC5kZWZhdWx0Q2hlY2tlZCA9IGNvbXBvbmVudC5jaGVja2VkO1xuICB9XG4gIGNvbnN0IGJvdW5kT25Gb3JtUmVzZXQgPSAoY29tcG9uZW50Lm9uRm9ybVJlc2V0IHx8IG9uRm9ybVJlc2V0KS5iaW5kKGNvbXBvbmVudCk7XG4gIGFzc29jaWF0ZWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCBib3VuZE9uRm9ybVJlc2V0KTtcbiAgb25Gb3JtUmVzZXRNYXAuc2V0KGNvbXBvbmVudC5lbCwgYm91bmRPbkZvcm1SZXNldCk7XG4gIGZvcm1Db21wb25lbnRTZXQuYWRkKGVsKTtcbn1cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdG8gZmluZCBhIGZvcm0tY29tcG9uZW50J3MgYXNzb2NpYXRlZCBmb3JtIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBmaW5kQXNzb2NpYXRlZEZvcm0oY29tcG9uZW50KSB7XG4gIGNvbnN0IHsgZWwsIGZvcm0gfSA9IGNvbXBvbmVudDtcbiAgcmV0dXJuIGZvcm1cbiAgICA/IHF1ZXJ5RWxlbWVudFJvb3RzKGVsLCB7IGlkOiBmb3JtIH0pXG4gICAgOiBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoZWwsIFwiZm9ybVwiKTtcbn1cbmZ1bmN0aW9uIG9uRm9ybVJlc2V0KCkge1xuICBpZiAoaXNDaGVja2FibGUodGhpcykpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gZm9ybSBpbnRlcmFjdGlvbnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Rm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBlbCwgZm9ybUVsIH0gPSBjb21wb25lbnQ7XG4gIGlmICghZm9ybUVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25Gb3JtUmVzZXQgPSBvbkZvcm1SZXNldE1hcC5nZXQoZWwpO1xuICBmb3JtRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsIGJvdW5kT25Gb3JtUmVzZXQpO1xuICBvbkZvcm1SZXNldE1hcC5kZWxldGUoZWwpO1xuICBjb21wb25lbnQuZm9ybUVsID0gbnVsbDtcbiAgZm9ybUNvbXBvbmVudFNldC5kZWxldGUoZWwpO1xufVxuLyoqXG4gKiBIZWxwZXIgZm9yIHNldHRpbmcgdGhlIGRlZmF1bHQgdmFsdWUgb24gaW5pdGlhbGl6YXRpb24gYWZ0ZXIgY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgaXMgb25seSBuZWVkZWQgaWYgdGhlIGRlZmF1bHQgdmFsdWUgY2Fubm90IGJlIGRldGVybWluZWQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldChjb21wb25lbnQsIHZhbHVlKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbn1cbmNvbnN0IGhpZGRlbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xufTtcbmNvbnN0IHJlbW92ZUhpZGRlbklucHV0Q2hhbmdlRXZlbnRMaXN0ZW5lciA9IChpbnB1dCkgPT4gaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuLyoqXG4gKiBIZWxwZXIgZm9yIG1haW50YWluaW5nIGEgZm9ybS1hc3NvY2lhdGVkJ3MgaGlkZGVuIGlucHV0IGluIHN5bmMgd2l0aCB0aGUgY29tcG9uZW50LlxuICpcbiAqIEJhc2VkIG9uIElvbmljJ3MgYXBwcm9hY2g6IGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL2U0YmYwNTI3OTRhZjlhYWMwN2Y4ODcwMTNiOTI1MGQyYTA0NWViYTMvY29yZS9zcmMvdXRpbHMvaGVscGVycy50cyNMMTk4XG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCkge1xuICBjb25zdCB7IGVsLCBmb3JtRWwsIG5hbWUsIHZhbHVlIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWw7XG4gIGNvbnN0IGlucHV0cyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3Nsb3Q9XCIke2hpZGRlbkZvcm1JbnB1dFNsb3ROYW1lfVwiXWApO1xuICBpZiAoIWZvcm1FbCB8fCAhbmFtZSkge1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRDaGFuZ2VFdmVudExpc3RlbmVyKGlucHV0KTtcbiAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgY29uc3QgZXh0cmEgPSBbXTtcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgY29uc3QgdmFsdWVNYXRjaCA9IHZhbHVlcy5maW5kKCh2YWwpID0+IFxuICAgIC8qIGludGVudGlvbmFsIG5vbi1zdHJpY3QgZXF1YWxpdHkgY2hlY2sgKi9cbiAgICB2YWwgPT0gaW5wdXQudmFsdWUpO1xuICAgIGlmICh2YWx1ZU1hdGNoICE9IG51bGwpIHtcbiAgICAgIHNlZW4uYWRkKHZhbHVlTWF0Y2gpO1xuICAgICAgZGVmYXVsdFN5bmNIaWRkZW5Gb3JtSW5wdXQoY29tcG9uZW50LCBpbnB1dCwgdmFsdWVNYXRjaCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXh0cmEucHVzaChpbnB1dCk7XG4gICAgfVxuICB9KTtcbiAgbGV0IGRvY0ZyYWc7XG4gIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGlucHV0ID0gZXh0cmEucG9wKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgaW5wdXQgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0LnNsb3QgPSBoaWRkZW5Gb3JtSW5wdXRTbG90TmFtZTtcbiAgICB9XG4gICAgaWYgKCFkb2NGcmFnKSB7XG4gICAgICBkb2NGcmFnID0gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuICAgIGRvY0ZyYWcuYXBwZW5kKGlucHV0KTtcbiAgICAvLyBlbWl0cyB3aGVuIGhpZGRlbiBpbnB1dCBpcyBhdXRvZmlsbGVkXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuICAgIGRlZmF1bHRTeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCwgaW5wdXQsIHZhbHVlKTtcbiAgfSk7XG4gIGlmIChkb2NGcmFnKSB7XG4gICAgZWwuYXBwZW5kKGRvY0ZyYWcpO1xuICB9XG4gIGV4dHJhLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgcmVtb3ZlSGlkZGVuSW5wdXRDaGFuZ2VFdmVudExpc3RlbmVyKGlucHV0KTtcbiAgICBpbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkZWZhdWx0U3luY0hpZGRlbkZvcm1JbnB1dChjb21wb25lbnQsIGlucHV0LCB2YWx1ZSkge1xuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQsIGZvcm0sIG5hbWUsIHJlcXVpcmVkIH0gPSBjb21wb25lbnQ7XG4gIC8vIGtlZXAgaW4gc3luYyB0byBwcmV2ZW50IGxvc2luZyByZXNldCB2YWx1ZVxuICBpbnB1dC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICBpbnB1dC5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICBpbnB1dC50YWJJbmRleCA9IC0xO1xuICAvLyB3ZSBzZXQgdGhlIGF0dHIgYXMgdGhlIHByb3AgaXMgcmVhZC1vbmx5XG4gIGlmIChmb3JtKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZm9ybVwiLCBmb3JtKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJmb3JtXCIpO1xuICB9XG4gIGlmIChpc0NoZWNrYWJsZShjb21wb25lbnQpKSB7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGNvbXBvbmVudC5jaGVja2VkO1xuICAgIC8vIGtlZXAgaW4gc3luYyB0byBwcmV2ZW50IGxvc2luZyByZXNldCB2YWx1ZVxuICAgIGlucHV0LmRlZmF1bHRDaGVja2VkID0gY29tcG9uZW50LmRlZmF1bHRDaGVja2VkO1xuICAgIC8vIGhldXJpc3RpYyB0byBzdXBwb3J0IGRlZmF1bHQvb24gbW9kZSBmcm9tIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2lucHV0Lmh0bWwjZG9tLWlucHV0LXZhbHVlLWRlZmF1bHQtb25cbiAgICBpbnB1dC52YWx1ZSA9IGNvbXBvbmVudC5jaGVja2VkID8gdmFsdWUgfHwgXCJvblwiIDogXCJcIjtcbiAgfVxuICBlbHNlIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlIHx8IFwiXCI7XG4gIH1cbiAgY29tcG9uZW50LnN5bmNIaWRkZW5Gb3JtSW5wdXQ/LihpbnB1dCk7XG59XG4vKipcbiAqIEhlbHBlciB0byByZW5kZXIgdGhlIHNsb3QgZm9yIGZvcm0tYXNzb2NpYXRlZCBjb21wb25lbnQncyBoaWRkZW4gaW5wdXQuXG4gKlxuICogSWYgdGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHNsb3QsIHRoaXMgbXVzdCBiZSBwbGFjZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29tcG9uZW50J3Mgcm9vdCBjb250YWluZXIgdG8gZW5zdXJlIGl0IGlzIHRoZSBsYXN0IGNoaWxkLlxuICpcbiAqIHJlbmRlcigpOiBWTm9kZSB7XG4gKiAgIDxIb3N0PlxuICogICAgIDxkaXYgY2xhc3M9e0NTUy5jb250YWluZXJ9PlxuICogICAgIC8vIC4uLlxuICogICAgIDxIaWRkZW5Gb3JtSW5wdXRTbG90IGNvbXBvbmVudD17dGhpc30gLz5cbiAqICAgICA8L2Rpdj5cbiAqICAgPC9Ib3N0PlxuICogfVxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaGlkZGVuLWZvcm0taW5wdXQgU2FzcyBtaXhpbiBtdXN0IGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQncyBzdHlsZSB0byBhcHBseSBzcGVjaWZpYyBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHJvb3QwXG4gKiBAcGFyYW0gcm9vdDAuY29tcG9uZW50XG4gKi9cbmNvbnN0IEhpZGRlbkZvcm1JbnB1dFNsb3QgPSAoeyBjb21wb25lbnQgfSkgPT4ge1xuICBzeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCk7XG4gIHJldHVybiBoKFwic2xvdFwiLCB7IG5hbWU6IGhpZGRlbkZvcm1JbnB1dFNsb3ROYW1lIH0pO1xufTtcblxuZXhwb3J0IHsgSGlkZGVuRm9ybUlucHV0U2xvdCBhcyBILCBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQgYXMgYSwgY29ubmVjdEZvcm0gYXMgYywgZGlzY29ubmVjdEZvcm0gYXMgZCwgZmluZEFzc29jaWF0ZWRGb3JtIGFzIGYsIHJlc2V0Rm9ybSBhcyByLCBzdWJtaXRGb3JtIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0U2xvdHRlZCwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBmIGFzIHNldFJlcXVlc3RlZEljb24sIGMgYXMgZ2V0RWxlbWVudERpciwgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlcktleXMgfSBmcm9tICcuL2tleS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbDIuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBpIGFzIGlzVmFsaWROdW1iZXIsIHAgYXMgcGFyc2VOdW1iZXJTdHJpbmcsIHMgYXMgc2FuaXRpemVOdW1iZXJTdHJpbmcsIGIgYXMgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIEIgYXMgQmlnRGVjaW1hbCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9wcm9ncmVzcy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbG9hZGVyOiBcImxvYWRlclwiLFxuICBjbGVhckJ1dHRvbjogXCJjbGVhci1idXR0b25cIixcbiAgZWRpdGluZ0VuYWJsZWQ6IFwiZWRpdGluZy1lbmFibGVkXCIsXG4gIGlubGluZUNoaWxkOiBcImlubGluZS1jaGlsZFwiLFxuICBpbnB1dEljb246IFwiaWNvblwiLFxuICBwcmVmaXg6IFwicHJlZml4XCIsXG4gIHN1ZmZpeDogXCJzdWZmaXhcIixcbiAgbnVtYmVyQnV0dG9uV3JhcHBlcjogXCJudW1iZXItYnV0dG9uLXdyYXBwZXJcIixcbiAgYnV0dG9uSXRlbUhvcml6b250YWw6IFwibnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsXCIsXG4gIHdyYXBwZXI6IFwiZWxlbWVudC13cmFwcGVyXCIsXG4gIGlucHV0V3JhcHBlcjogXCJ3cmFwcGVyXCIsXG4gIGFjdGlvbldyYXBwZXI6IFwiYWN0aW9uLXdyYXBwZXJcIixcbiAgcmVzaXplSWNvbldyYXBwZXI6IFwicmVzaXplLWljb24td3JhcHBlclwiLFxuICBudW1iZXJCdXR0b25JdGVtOiBcIm51bWJlci1idXR0b24taXRlbVwiXG59O1xuY29uc3QgSU5QVVRfVFlQRV9JQ09OUyA9IHtcbiAgdGVsOiBcInBob25lXCIsXG4gIHBhc3N3b3JkOiBcImxvY2tcIixcbiAgZW1haWw6IFwiZW1haWwtYWRkcmVzc1wiLFxuICBkYXRlOiBcImNhbGVuZGFyXCIsXG4gIHRpbWU6IFwiY2xvY2tcIixcbiAgc2VhcmNoOiBcInNlYXJjaFwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbjogXCJhY3Rpb25cIlxufTtcblxuY29uc3QgaW5wdXRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KFtzY2FsZT1zXSkgaW5wdXQsOmhvc3QoW3NjYWxlPXNdKSAucHJlZml4LDpob3N0KFtzY2FsZT1zXSkgLnN1ZmZpeHtibG9jay1zaXplOjEuNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgdGV4dGFyZWF7YmxvY2stc2l6ZToxLjVyZW07bWluLWJsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9c10pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9c10pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSBpbnB1dFt0eXBlPWZpbGVde2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToxLjVyZW07bWluLWlubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIHRleHRhcmVhe2Jsb2NrLXNpemU6YXV0bztwYWRkaW5nLWJsb2NrOjAuMjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0LDpob3N0KFtzY2FsZT1tXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bV0pIC5zdWZmaXh7YmxvY2stc2l6ZToycmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWF7bWluLWJsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPW1dKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPW1dKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0W3R5cGU9ZmlsZV17YmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToycmVtO21pbi1pbmxpbmUtc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWF7YmxvY2stc2l6ZTphdXRvO3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1sXSkgaW5wdXQsOmhvc3QoW3NjYWxlPWxdKSAucHJlZml4LDpob3N0KFtzY2FsZT1sXSkgLnN1ZmZpeHtibG9jay1zaXplOjIuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIHRleHRhcmVhe21pbi1ibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSBpbnB1dFt0eXBlPWZpbGVde2Jsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6Mi43NXJlbTttaW4taW5saW5lLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIHRleHRhcmVhe2Jsb2NrLXNpemU6YXV0bztwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbZGlzYWJsZWRdKSB0ZXh0YXJlYXtyZXNpemU6bm9uZX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgdGV4dGFyZWEsOmhvc3QgaW5wdXR7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBibG9jay1zaXplIDAsIG91dGxpbmUtb2Zmc2V0IDBzOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgMCU7Ym9yZGVyLXJhZGl1czowcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06aG9zdCBpbnB1dCw6aG9zdCB0ZXh0YXJlYXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dDo6cGxhY2Vob2xkZXIsOmhvc3QgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLDpob3N0IGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QgdGV4dGFyZWE6OnBsYWNlaG9sZGVyLDpob3N0IHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdCB0ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QgaW5wdXQ6Zm9jdXMsOmhvc3QgdGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dFtyZWFkb25seV0sOmhvc3QgdGV4dGFyZWFbcmVhZG9ubHlde2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9Omhvc3QgaW5wdXRbcmVhZG9ubHldOmZvY3VzLDpob3N0IHRleHRhcmVhW3JlYWRvbmx5XTpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdCB0ZXh0YXJlYSw6aG9zdCBpbnB1dHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0IHRleHRhcmVhOmZvY3VzLDpob3N0IGlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dCw6aG9zdChbc3RhdHVzPWludmFsaWRdKSB0ZXh0YXJlYXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0OmZvY3VzLDpob3N0KFtzdGF0dXM9aW52YWxpZF0pIHRleHRhcmVhOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc2NhbGU9c10pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDoxcmVtfTpob3N0KFtpY29uXVtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX06aG9zdChbaWNvbl1bc2NhbGU9bV0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjIuNXJlbX06aG9zdChbaWNvbl1bc2NhbGU9bF0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjMuNXJlbX0uZWxlbWVudC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO29yZGVyOjM7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4OjEgMSAwJTthbGlnbi1pdGVtczpjZW50ZXJ9Lmljb257cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5pY29uLC5yZXNpemUtaWNvbi13cmFwcGVye3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCl9aW5wdXRbdHlwZT10ZXh0XTo6LW1zLWNsZWFyLGlucHV0W3R5cGU9dGV4dF06Oi1tcy1yZXZlYWx7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MHB4O2lubGluZS1zaXplOjBweH1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24saW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jbGVhci1idXR0b24saW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1jbGVhci1idXR0b257ZGlzcGxheTpub25lfS5jbGVhci1idXR0b257cG9pbnRlci1ldmVudHM6aW5pdGlhbDtvcmRlcjo0O21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttaW4tYmxvY2stc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9LmNsZWFyLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY2xlYXItYnV0dG9uOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmNsZWFyLWJ1dHRvbjphY3RpdmUgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY2xlYXItYnV0dG9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2xlYXItYnV0dG9uOmRpc2FibGVke29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX0ubG9hZGVye2luc2V0LWJsb2NrLXN0YXJ0OjFweDtpbnNldC1pbmxpbmU6MXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9ja30uYWN0aW9uLXdyYXBwZXJ7b3JkZXI6NztkaXNwbGF5OmZsZXh9LnByZWZpeCwuc3VmZml4e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZTphdXRvO21pbi1ibG9jay1zaXplOjEwMCU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7bGluZS1oZWlnaHQ6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LnByZWZpeHtvcmRlcjoyO2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweH0uc3VmZml4e29yZGVyOjU7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Omhvc3QoW2FsaWdubWVudD1zdGFydF0pIHRleHRhcmVhLDpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSBpbnB1dHt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgdGV4dGFyZWEsOmhvc3QoW2FsaWdubWVudD1lbmRdKSBpbnB1dHt0ZXh0LWFsaWduOmVuZH06aG9zdCBpbnB1dFt0eXBlPW51bWJlcl17LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH06aG9zdCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sOmhvc3QgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7bWFyZ2luOjBweH0ubnVtYmVyLWJ1dHRvbi13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7b3JkZXI6Njtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc306aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLndyYXBwZXJ7ZmxleC1kaXJlY3Rpb246cm93O2Rpc3BsYXk6ZmxleH06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgaW5wdXQsOmhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIHRleHRhcmVhe29yZGVyOjJ9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT1ob3Jpem9udGFsXSkgLmNhbGNpdGUtLXJ0bCAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9aG9yaXpvbnRhbF0pIC5jYWxjaXRlLS1ydGwgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dLC5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF17b3JkZXI6MTttYXgtYmxvY2stc2l6ZToxMDAlO21pbi1ibG9jay1zaXplOjEwMCU7YWxpZ24tc2VsZjpzdHJldGNofS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb24sLm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25de2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBde29yZGVyOjV9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXXtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW17bWF4LWJsb2NrLXNpemU6NTAlO21pbi1ibG9jay1zaXplOjUwJTtwb2ludGVyLWV2ZW50czppbml0aWFsO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjVyZW07dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbSBjYWxjaXRlLWljb257cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30ubnVtYmVyLWJ1dHRvbi1pdGVtOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW06Zm9jdXMgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QgaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcntkaXNwbGF5Om5vbmV9Omhvc3QgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcnt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50fTpob3N0IHRleHRhcmVhOjotd2Via2l0LXJlc2l6ZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stZW5kOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC4yNXJlbTtpbnNldC1pbmxpbmUtZW5kOjB9LnJlc2l6ZS1pY29uLXdyYXBwZXJ7aW5zZXQtYmxvY2stZW5kOjJweDtpbnNldC1pbmxpbmUtZW5kOjJweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Jsb2NrLXNpemU6MC43NXJlbTtpbmxpbmUtc2l6ZTowLjc1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0ucmVzaXplLWljb24td3JhcHBlciBjYWxjaXRlLWljb257aW5zZXQtYmxvY2stZW5kOjAuMjVyZW07aW5zZXQtaW5saW5lLWVuZDowLjI1cmVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uY2FsY2l0ZS0tcnRsIC5yZXNpemUtaWNvbi13cmFwcGVyIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX06aG9zdChbdHlwZT1jb2xvcl0pIGlucHV0e3BhZGRpbmc6MC4yNXJlbX06aG9zdChbdHlwZT1maWxlXSkgaW5wdXR7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6ZGFzaGVkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QoW3R5cGU9ZmlsZV1bc2NhbGU9c10pIGlucHV0e3BhZGRpbmctYmxvY2s6MXB4O3BhZGRpbmctaW5saW5lOjAuNXJlbX06aG9zdChbdHlwZT1maWxlXVtzY2FsZT1tXSkgaW5wdXR7cGFkZGluZy1ibG9jazowLjI1cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QoW3R5cGU9ZmlsZV1bc2NhbGU9bF0pIGlucHV0e3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjFyZW19Omhvc3QoLm5vLWJvdHRvbS1ib3JkZXIpIGlucHV0e2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fTpob3N0KC5ib3JkZXItdG9wLWNvbG9yLW9uZSkgaW5wdXR7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0IC5pbmxpbmUtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc306aG9zdCAuaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fTpob3N0IC5pbmxpbmUtY2hpbGQ6bm90KC5lZGl0aW5nLWVuYWJsZWQpe2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWlubGluZS1zdGFydDowfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fVwiO1xuXG5jb25zdCBJbnB1dCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRJbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0SW5wdXRcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dENoYW5nZVwiLCA2KTtcbiAgICAvKioga2VlcCB0cmFjayBvZiB0aGUgcmVuZGVyZWQgY2hpbGQgdHlwZSAqL1xuICAgIHRoaXMuY2hpbGRFbFR5cGUgPSBcImlucHV0XCI7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldERpc2FibGVkQWN0aW9uKCkpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2xlYXJhYmxlICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZShldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgIGNvbW1pdHRpbmc6IHRydWUsXG4gICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dEJsdXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXIuZW1pdCgpO1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXMuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcImZpbGVcIikge1xuICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5jaGlsZEVsLmZpbGVzO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dElucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBuYXRpdmVFdmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dEtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlbG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZSh2YWx1ZSk7XG4gICAgICBpZiAobmF0aXZlRXZlbnQuaW5wdXRUeXBlID09PSBcImluc2VydEZyb21QYXN0ZVwiKSB7XG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihkZWxvY2FsaXplZFZhbHVlKSkge1xuICAgICAgICAgIG5hdGl2ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogcGFyc2VOdW1iZXJTdHJpbmcoZGVsb2NhbGl6ZWRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IHRoaXMubG9jYWxpemVkVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogZGVsb2NhbGl6ZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gXCJudW1iZXJcIiB8fCB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgLyogcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIG9mIG1vdmluZyBjdXJzb3IgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgaW5wdXQgd2hlbiBob2xkaW5nIGRvd24gQXJyb3dVcCAqL1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoXCJ1cFwiLCBldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKFwiZG93blwiLCBldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN1cHBvcnRlZEtleXMgPSBbXG4gICAgICAgIC4uLm51bWJlcktleXMsXG4gICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICBcIkJhY2tzcGFjZVwiLFxuICAgICAgICBcIkRlbGV0ZVwiLFxuICAgICAgICBcIkVudGVyXCIsXG4gICAgICAgIFwiRXNjYXBlXCIsXG4gICAgICAgIFwiVGFiXCJcbiAgICAgIF07XG4gICAgICBpZiAoZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc1NoaWZ0VGFiRXZlbnQgPSBldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXkgPT09IFwiVGFiXCI7XG4gICAgICBpZiAoc3VwcG9ydGVkS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpICYmICghZXZlbnQuc2hpZnRLZXkgfHwgaXNTaGlmdFRhYkV2ZW50KSkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgICAgfTtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZS5pbmRleE9mKG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgvW2VFXS8udGVzdChldmVudC5rZXkpKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmICEvW2VFXS8udGVzdCh0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIi1cIikge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuc3BsaXQoXCItXCIpLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZU51bWJlclZhbHVlID0gKGRpcmVjdGlvbiwgbmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmICgobmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIG5hdGl2ZUV2ZW50LnJlcGVhdCkgfHwgdGhpcy50eXBlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlucHV0TWF4ID0gdGhpcy5tYXhTdHJpbmcgPyBwYXJzZUZsb2F0KHRoaXMubWF4U3RyaW5nKSA6IG51bGw7XG4gICAgICBjb25zdCBpbnB1dE1pbiA9IHRoaXMubWluU3RyaW5nID8gcGFyc2VGbG9hdCh0aGlzLm1pblN0cmluZykgOiBudWxsO1xuICAgICAgY29uc3QgdmFsdWVOdWRnZURlbGF5SW5NcyA9IDE1MDtcbiAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgaWYgKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgICBsZXQgZmlyc3RWYWx1ZU51ZGdlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoZmlyc3RWYWx1ZU51ZGdlKSB7XG4gICAgICAgICAgZmlyc3RWYWx1ZU51ZGdlID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgfSwgdmFsdWVOdWRnZURlbGF5SW5Ncyk7XG4gICAgfTtcbiAgICB0aGlzLm51bWJlckJ1dHRvblBvaW50ZXJVcEFuZE91dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICB9O1xuICAgIHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5hZGp1c3RtZW50O1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5zZXRDaGlsZEVsUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpbGROdW1iZXJFbFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUgPSAobmV3SW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJ0ZXh0XCIgJiYgIXRoaXMuY2hpbGRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiICYmICF0aGlzLmNoaWxkTnVtYmVyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpc1tgY2hpbGQke3RoaXMudHlwZSA9PT0gXCJudW1iZXJcIiA/IFwiTnVtYmVyXCIgOiBcIlwifUVsYF0udmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c0VtaXR0ZWRWYWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VmFsdWUgPSAoeyBjb21taXR0aW5nID0gZmFsc2UsIG5hdGl2ZUV2ZW50LCBvcmlnaW4sIHByZXZpb3VzVmFsdWUsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZShwcmV2aW91c1ZhbHVlID8/IHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gb3JpZ2luO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgICAgICAgc2lnbkRpc3BsYXk6IFwibmV2ZXJcIlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzYW5pdGl6ZWRWYWx1ZSA9IHNhbml0aXplTnVtYmVyU3RyaW5nKFxuICAgICAgICAvLyBubyBuZWVkIHRvIGRlbG9jYWxpemUgYSBzdHJpbmcgdGhhdCBpYSBhbHJlYWR5IGluIGxhdG4gbnVtZXJhbHNcbiAgICAgICAgKHRoaXMubnVtYmVyaW5nU3lzdGVtICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIikgfHxcbiAgICAgICAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIlxuICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUodmFsdWUpXG4gICAgICAgICAgOiB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgJiYgIXNhbml0aXplZFZhbHVlXG4gICAgICAgICAgPyBpc1ZhbGlkTnVtYmVyKHRoaXMucHJldmlvdXNWYWx1ZSlcbiAgICAgICAgICAgID8gdGhpcy5wcmV2aW91c1ZhbHVlXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICA6IHNhbml0aXplZFZhbHVlO1xuICAgICAgICBjb25zdCBuZXdMb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBuZXdMb2NhbGl6ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gb3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgICAgLy8gZG9uJ3Qgc2FuaXRpemUgdGhlIHN0YXJ0IG9mIG5lZ2F0aXZlL2RlY2ltYWwgbnVtYmVycywgYnV0XG4gICAgICAgIC8vIGRvbid0IHNldCB2YWx1ZSB0byBhbiBpbnZhbGlkIG51bWJlclxuICAgICAgICB0aGlzLnZhbHVlID0gW1wiLVwiLCBcIi5cIl0uaW5jbHVkZXMobmV3VmFsdWUpID8gXCJcIiA6IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IG9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvcmlnaW4gPT09IFwiZGlyZWN0XCIpIHtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0VtaXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hdGl2ZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNhbGNpdGVJbnB1dElucHV0RXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dElucHV0LmVtaXQoKTtcbiAgICAgICAgaWYgKGNhbGNpdGVJbnB1dElucHV0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByZXZpb3VzVmFsdWU7XG4gICAgICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy5wcmV2aW91c1ZhbHVlKVxuICAgICAgICAgICAgICA6IHRoaXMucHJldmlvdXNWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21taXR0aW5nKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dEtleVVwSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5hbGlnbm1lbnQgPSBcInN0YXJ0XCI7XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFyYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cFNlcGFyYXRvciA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxlRm9ybWF0ID0gZmFsc2U7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhMZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJlZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnN0YXR1cyA9IFwiaWRsZVwiO1xuICAgIHRoaXMuc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdHRlcm4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY2NlcHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRNb2RlID0gXCJ0ZXh0XCI7XG4gICAgdGhpcy5lbnRlcktleUhpbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdWZmaXhUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWRpdGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLmZpbGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsaXplZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gIH1cbiAgZGlzYWJsZWRXYXRjaGVyKCkge1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgfVxuICAvKiogd2F0Y2hlciB0byB1cGRhdGUgbnVtYmVyLXRvLXN0cmluZyBmb3IgbWF4ICovXG4gIG1heFdhdGNoZXIoKSB7XG4gICAgdGhpcy5tYXhTdHJpbmcgPSB0aGlzLm1heD8udG9TdHJpbmcoKSB8fCBudWxsO1xuICB9XG4gIC8qKiB3YXRjaGVyIHRvIHVwZGF0ZSBudW1iZXItdG8tc3RyaW5nIGZvciBtaW4gKi9cbiAgbWluV2F0Y2hlcigpIHtcbiAgICB0aGlzLm1pblN0cmluZyA9IHRoaXMubWluPy50b1N0cmluZygpIHx8IG51bGw7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIHZhbHVlV2F0Y2hlcihuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgIGlmICghdGhpcy51c2VyQ2hhbmdlZFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcImRpcmVjdFwiLFxuICAgICAgICBwcmV2aW91c1ZhbHVlLFxuICAgICAgICB2YWx1ZTogbmV3VmFsdWUgPT0gbnVsbCB8fCBuZXdWYWx1ZSA9PSBcIlwiXG4gICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgOiB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgID8gaXNWYWxpZE51bWJlcihuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgPyBuZXdWYWx1ZVxuICAgICAgICAgICAgICA6IHRoaXMucHJldmlvdXNWYWx1ZSB8fCBcIlwiXG4gICAgICAgICAgICA6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdXBkYXRlUmVxdWVzdGVkSWNvbigpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKElOUFVUX1RZUEVfSUNPTlMsIHRoaXMuaWNvbiwgdGhpcy50eXBlKTtcbiAgfVxuICBnZXQgaXNDbGVhcmFibGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzVGV4dGFyZWEgJiYgKHRoaXMuY2xlYXJhYmxlIHx8IHRoaXMudHlwZSA9PT0gXCJzZWFyY2hcIikgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICB9XG4gIGdldCBpc1RleHRhcmVhKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxUeXBlID09PSBcInRleHRhcmVhXCI7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLmlubGluZUVkaXRhYmxlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLWlubGluZS1lZGl0YWJsZVwiKTtcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0YWJsZUVsKSB7XG4gICAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gdGhpcy5pbmxpbmVFZGl0YWJsZUVsLmVkaXRpbmdFbmFibGVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnNldFByZXZpb3VzVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcImNvbm5lY3RlZFwiLFxuICAgICAgICB2YWx1ZTogaXNWYWxpZE51bWJlcih0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiBcIlwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuY2hpbGRFbFR5cGUgPSB0aGlzLnR5cGUgPT09IFwidGV4dGFyZWFcIiA/IFwidGV4dGFyZWFcIiA6IFwiaW5wdXRcIjtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpO1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihJTlBVVF9UWVBFX0lDT05TLCB0aGlzLmljb24sIHRoaXMudHlwZSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRTaG91bGRVcGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHkgPT09IFwidmFsdWVcIiAmJiBuZXdWYWx1ZSAmJiAhaXNWYWxpZE51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgICAgdmFsdWU6IG9sZFZhbHVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LmZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGlsZEVsPy5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvKiogU2VsZWN0cyB0aGUgdGV4dCBvZiB0aGUgY29tcG9uZW50J3MgYHZhbHVlYC4gKi9cbiAgYXN5bmMgc2VsZWN0VGV4dCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LnNlbGVjdCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hpbGRFbD8uc2VsZWN0KCk7XG4gICAgfVxuICB9XG4gIC8vIFRPRE86IHJlZmFjdG9yIHNvIHdlIGRvbid0IG5lZWQgdG8gc3luYyB0aGUgaW50ZXJuYWxzIGluIGNvbG9yLXBpY2tlclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvaXNzdWVzLzYxMDBcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBpbnRlcm5hbFN5bmNDaGlsZEVsVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoaWxkRWwudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIGluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBhZGp1c3RtZW50ID0gZGlyZWN0aW9uID09PSBcInVwXCIgPyAxIDogLTE7XG4gICAgY29uc3QgaW5wdXRTdGVwID0gdGhpcy5zdGVwID09PSBcImFueVwiID8gMSA6IE1hdGguYWJzKHRoaXMuc3RlcCB8fCAxKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IG5ldyBCaWdEZWNpbWFsKHZhbHVlICE9PSBcIlwiID8gdmFsdWUgOiBcIjBcIik7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWUgPSBpbnB1dFZhbC5hZGQoYCR7aW5wdXRTdGVwICogYWRqdXN0bWVudH1gKTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZUJlbG93SW5wdXRNaW4gPSAoKSA9PiB0eXBlb2YgaW5wdXRNaW4gPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICFpc05hTihpbnB1dE1pbikgJiZcbiAgICAgIG51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWlufWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4ID0gKCkgPT4gdHlwZW9mIGlucHV0TWF4ID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNYXgpICYmXG4gICAgICAhbnVkZ2VkVmFsdWUuc3VidHJhY3QoYCR7aW5wdXRNYXh9YCkuaXNOZWdhdGl2ZTtcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluKClcbiAgICAgID8gYCR7aW5wdXRNaW59YFxuICAgICAgOiBudWRnZWRWYWx1ZUFib3ZlSW5wdXRNYXgoKVxuICAgICAgICA/IGAke2lucHV0TWF4fWBcbiAgICAgICAgOiBudWRnZWRWYWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgIHZhbHVlOiBmaW5hbFZhbHVlXG4gICAgfSk7XG4gIH1cbiAgb25Gb3JtUmVzZXQoKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgIHZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZVxuICAgIH0pO1xuICB9XG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlucHV0Lm1pbiA9IHRoaXMubWluPy50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICAgIGlucHV0Lm1heCA9IHRoaXMubWF4Py50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgIGlmICh0aGlzLm1pbkxlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IHRoaXMubWluTGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldERpc2FibGVkQWN0aW9uKCkge1xuICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgaWYgKCFzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChzbG90dGVkQWN0aW9uRWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IHRydWU7XG4gICAgICB9XG4gICAgICBzbG90dGVkQWN0aW9uRWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5KSB7XG4gICAgICBzbG90dGVkQWN0aW9uRWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgPyAoaXNWYWxpZE51bWJlcih2YWx1ZSkgPyB2YWx1ZSA6IFwiXCIpIDogdmFsdWU7XG4gIH1cbiAgd2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSAmJiAhaXNWYWxpZE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHNwZWNpZmllZCB2YWx1ZSBcIiR7dmFsdWV9XCIgY2Fubm90IGJlIHBhcnNlZCwgb3IgaXMgb3V0IG9mIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbG9hZGVyID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxvYWRlciB9LCBoKFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7IGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmxvYWRpbmcsIHR5cGU6IFwiaW5kZXRlcm1pbmF0ZVwiIH0pKSk7XG4gICAgY29uc3QgaW5wdXRDbGVhckJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xlYXIsIGNsYXNzOiBDU1MuY2xlYXJCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uQ2xpY2s6IHRoaXMuY2xlYXJJbnB1dFZhbHVlLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgaWNvbkVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmlucHV0SWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBpc0hvcml6b250YWxOdW1iZXJCdXR0b24gPSB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXAgPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b25cbiAgICAgIH0sIFwiZGF0YS1hZGp1c3RtZW50XCI6IFwidXBcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm51bWJlckJ1dHRvbkl0ZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkl0ZW1Ib3Jpem9udGFsXTogaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcImRvd25cIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zVmVydGljYWwgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubnVtYmVyQnV0dG9uV3JhcHBlciB9LCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwLCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd24pKTtcbiAgICBjb25zdCBwcmVmaXhUZXh0ID0gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucHJlZml4IH0sIHRoaXMucHJlZml4VGV4dCk7XG4gICAgY29uc3Qgc3VmZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnN1ZmZpeCB9LCB0aGlzLnN1ZmZpeFRleHQpO1xuICAgIGNvbnN0IGxvY2FsZU51bWJlcklucHV0ID0gdGhpcy50eXBlID09PSBcIm51bWJlclwiID8gKGgoXCJpbnB1dFwiLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwga2V5OiBcImxvY2FsaXplZC1pbnB1dFwiLCBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoLCBtaW5MZW5ndGg6IHRoaXMubWluTGVuZ3RoLCBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSwgbmFtZTogdW5kZWZpbmVkLCBvbkJsdXI6IHRoaXMuaW5wdXRCbHVySGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5sb2NhbGl6ZWRWYWx1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBjaGlsZEVsID0gdGhpcy50eXBlICE9PSBcIm51bWJlclwiXG4gICAgICA/IFtcbiAgICAgICAgaCh0aGlzLmNoaWxkRWxUeXBlLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgY2xhc3M6IHtcbiAgICAgICAgICAgIFtDU1MuZWRpdGluZ0VuYWJsZWRdOiB0aGlzLmVkaXRpbmdFbmFibGVkLFxuICAgICAgICAgICAgW0NTUy5pbmxpbmVDaGlsZF06ICEhdGhpcy5pbmxpbmVFZGl0YWJsZUVsXG4gICAgICAgICAgfSwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwgbWF4OiB0aGlzLm1heFN0cmluZywgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluOiB0aGlzLm1pblN0cmluZywgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUsIG5hbWU6IHRoaXMubmFtZSwgb25CbHVyOiB0aGlzLmlucHV0Qmx1ckhhbmRsZXIsIG9uQ2hhbmdlOiB0aGlzLmlucHV0Q2hhbmdlSGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dElucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0S2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkID8gdHJ1ZSA6IG51bGwsIHN0ZXA6IHRoaXMuc3RlcCwgdGFiSW5kZXg6IHRoaXMuZGlzYWJsZWQgfHwgKHRoaXMuaW5saW5lRWRpdGFibGVFbCAmJiAhdGhpcy5lZGl0aW5nRW5hYmxlZCkgPyAtMSA6IG51bGwsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICAgICAgcmVmOiB0aGlzLnNldENoaWxkRWxSZWYgfSksXG4gICAgICAgIHRoaXMuaXNUZXh0YXJlYSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5yZXNpemVJY29uV3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpIDogbnVsbFxuICAgICAgXVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuaW5wdXRXcmFwcGVyXTogdHJ1ZSwgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIiB9IH0sIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsRG93blxuICAgICAgOiBudWxsLCB0aGlzLnByZWZpeFRleHQgPyBwcmVmaXhUZXh0IDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Mud3JhcHBlciB9LCBsb2NhbGVOdW1iZXJJbnB1dCwgY2hpbGRFbCwgdGhpcy5pc0NsZWFyYWJsZSA/IGlucHV0Q2xlYXJCdXR0b24gOiBudWxsLCB0aGlzLnJlcXVlc3RlZEljb24gPyBpY29uRWwgOiBudWxsLCB0aGlzLmxvYWRpbmcgPyBsb2FkZXIgOiBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uV3JhcHBlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbiB9KSksIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwidmVydGljYWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zVmVydGljYWxcbiAgICAgIDogbnVsbCwgdGhpcy5zdWZmaXhUZXh0ID8gc3VmZml4VGV4dCA6IG51bGwsIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXBcbiAgICAgIDogbnVsbCwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRXYXRjaGVyXCJdLFxuICAgIFwibWF4XCI6IFtcIm1heFdhdGNoZXJcIl0sXG4gICAgXCJtaW5cIjogW1wibWluV2F0Y2hlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcImljb25cIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcInR5cGVcIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaW5wdXRDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtaW5wdXRcIiwge1xuICAgIFwiYWxpZ25tZW50XCI6IFs1MTNdLFxuICAgIFwiYXV0b2ZvY3VzXCI6IFs1MTZdLFxuICAgIFwiY2xlYXJhYmxlXCI6IFs1MTZdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtXCI6IFs1MTNdLFxuICAgIFwiZ3JvdXBTZXBhcmF0b3JcIjogWzUxNiwgXCJncm91cC1zZXBhcmF0b3JcIl0sXG4gICAgXCJoaWRkZW5cIjogWzUxNl0sXG4gICAgXCJpY29uXCI6IFs1MjBdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbNTEzLCBcIm51bWJlcmluZy1zeXN0ZW1cIl0sXG4gICAgXCJsb2NhbGVGb3JtYXRcIjogWzQsIFwibG9jYWxlLWZvcm1hdFwiXSxcbiAgICBcIm1heFwiOiBbNTE0XSxcbiAgICBcIm1pblwiOiBbNTE0XSxcbiAgICBcIm1heExlbmd0aFwiOiBbNTE0LCBcIm1heC1sZW5ndGhcIl0sXG4gICAgXCJtaW5MZW5ndGhcIjogWzUxNCwgXCJtaW4tbGVuZ3RoXCJdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcIm51bWJlckJ1dHRvblR5cGVcIjogWzUxMywgXCJudW1iZXItYnV0dG9uLXR5cGVcIl0sXG4gICAgXCJwbGFjZWhvbGRlclwiOiBbMV0sXG4gICAgXCJwcmVmaXhUZXh0XCI6IFsxLCBcInByZWZpeC10ZXh0XCJdLFxuICAgIFwicmVhZE9ubHlcIjogWzUxNiwgXCJyZWFkLW9ubHlcIl0sXG4gICAgXCJyZXF1aXJlZFwiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RhdHVzXCI6IFs1MTNdLFxuICAgIFwic3RlcFwiOiBbNTIwXSxcbiAgICBcImF1dG9jb21wbGV0ZVwiOiBbMV0sXG4gICAgXCJwYXR0ZXJuXCI6IFsxXSxcbiAgICBcImFjY2VwdFwiOiBbMV0sXG4gICAgXCJtdWx0aXBsZVwiOiBbNF0sXG4gICAgXCJpbnB1dE1vZGVcIjogWzEsIFwiaW5wdXQtbW9kZVwiXSxcbiAgICBcImVudGVyS2V5SGludFwiOiBbMSwgXCJlbnRlci1rZXktaGludFwiXSxcbiAgICBcInN1ZmZpeFRleHRcIjogWzEsIFwic3VmZml4LXRleHRcIl0sXG4gICAgXCJlZGl0aW5nRW5hYmxlZFwiOiBbMTU0MCwgXCJlZGl0aW5nLWVuYWJsZWRcIl0sXG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzEwMjVdLFxuICAgIFwiZmlsZXNcIjogWzE2XSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImxvY2FsaXplZFZhbHVlXCI6IFszMl0sXG4gICAgXCJzbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHlcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJzZWxlY3RUZXh0XCI6IFs2NF0sXG4gICAgXCJpbnRlcm5hbFN5bmNDaGlsZEVsVmFsdWVcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWlucHV0XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIElucHV0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcHJvZ3Jlc3NcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IElucHV0IGFzIEksIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHUgYXMgcXVlcnlFbGVtZW50Um9vdHMsIHIgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IH0gZnJvbSAnLi9kb20uanMnO1xuXG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgbGFiZWxDbGlja0V2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrXCI7XG5jb25zdCBsYWJlbENvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFMYWJlbERpc2Nvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxUYWdOYW1lID0gXCJjYWxjaXRlLWxhYmVsXCI7XG5jb25zdCBvbkxhYmVsQ2xpY2tNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVubGFiZWxlZENvbXBvbmVudHMgPSBuZXcgU2V0KCk7XG5jb25zdCBmaW5kTGFiZWxGb3JDb21wb25lbnQgPSAoY29tcG9uZW50RWwpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gY29tcG9uZW50RWw7XG4gIGNvbnN0IGZvckxhYmVsID0gaWQgJiYgcXVlcnlFbGVtZW50Um9vdHMoY29tcG9uZW50RWwsIHsgc2VsZWN0b3I6IGAke2xhYmVsVGFnTmFtZX1bZm9yPVwiJHtpZH1cIl1gIH0pO1xuICBpZiAoZm9yTGFiZWwpIHtcbiAgICByZXR1cm4gZm9yTGFiZWw7XG4gIH1cbiAgY29uc3QgcGFyZW50TGFiZWwgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoY29tcG9uZW50RWwsIGxhYmVsVGFnTmFtZSk7XG4gIGlmICghcGFyZW50TGFiZWwgfHxcbiAgICAvLyBsYWJlbGFibGUgY29tcG9uZW50cyB3aXRoaW4gb3RoZXIgY3VzdG9tIGVsZW1lbnRzIGFyZSBub3QgY29uc2lkZXJlZCBsYWJlbGFibGVcbiAgICBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKHBhcmVudExhYmVsLCBjb21wb25lbnRFbCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcGFyZW50TGFiZWw7XG59O1xuZnVuY3Rpb24gaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhsYWJlbCwgY29tcG9uZW50RWwpIHtcbiAgbGV0IHRyYXZlcnNlZEVsZW1lbnRzO1xuICBjb25zdCBjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSA9IFwiY3VzdG9tLWVsZW1lbnQtYW5jZXN0b3ItY2hlY2tcIjtcbiAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICB0cmF2ZXJzZWRFbGVtZW50cyA9IGNvbXBvc2VkUGF0aC5zbGljZShjb21wb3NlZFBhdGguaW5kZXhPZihjb21wb25lbnRFbCksIGNvbXBvc2VkUGF0aC5pbmRleE9mKGxhYmVsKSk7XG4gIH07XG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIGNvbXBvbmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCB7IGNvbXBvc2VkOiB0cnVlLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICBjb25zdCBhbmNlc3RvckN1c3RvbUVsZW1lbnRzID0gdHJhdmVyc2VkRWxlbWVudHNcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwgIT09IGNvbXBvbmVudEVsICYmIGVsICE9PSBsYWJlbClcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwudGFnTmFtZT8uaW5jbHVkZXMoXCItXCIpKTtcbiAgcmV0dXJuIGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMubGVuZ3RoID4gMDtcbn1cbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBsYWJlbCBpbnRlcmFjdGlvbnMgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TGFiZWwoY29tcG9uZW50KSB7XG4gIGNvbnN0IGxhYmVsRWwgPSBmaW5kTGFiZWxGb3JDb21wb25lbnQoY29tcG9uZW50LmVsKTtcbiAgaWYgKG9uTGFiZWxDbGlja01hcC5oYXMobGFiZWxFbCkgfHwgKCFsYWJlbEVsICYmIHVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCA9IG9uTGFiZWxEaXNjb25uZWN0ZWQuYmluZChjb21wb25lbnQpO1xuICBpZiAobGFiZWxFbCkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsID0gbGFiZWxFbDtcbiAgICBjb25zdCBib3VuZE9uTGFiZWxDbGljayA9IG9uTGFiZWxDbGljay5iaW5kKGNvbXBvbmVudCk7XG4gICAgb25MYWJlbENsaWNrTWFwLnNldChjb21wb25lbnQubGFiZWxFbCwgYm91bmRPbkxhYmVsQ2xpY2spO1xuICAgIGNvbXBvbmVudC5sYWJlbEVsLmFkZEV2ZW50TGlzdGVuZXIobGFiZWxDbGlja0V2ZW50LCBib3VuZE9uTGFiZWxDbGljayk7XG4gICAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICAgIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuc2V0KGNvbXBvbmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gIH1cbiAgZWxzZSBpZiAoIXVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIGxhYmVsYWJsZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudC5sYWJlbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25MYWJlbENsaWNrID0gb25MYWJlbENsaWNrTWFwLmdldChjb21wb25lbnQubGFiZWxFbCk7XG4gIGNvbXBvbmVudC5sYWJlbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDbGlja0V2ZW50LCBib3VuZE9uTGFiZWxDbGljayk7XG4gIG9uTGFiZWxDbGlja01hcC5kZWxldGUoY29tcG9uZW50LmxhYmVsRWwpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZ2V0IHRoZSBsYWJlbCB0ZXh0IGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMYWJlbFRleHQoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQubGFiZWwgfHwgY29tcG9uZW50LmxhYmVsRWw/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDbGljayhldmVudCkge1xuICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb250YWluZWRMYWJlbGFibGVDaGlsZENsaWNrZWQgPSB0aGlzLmVsLmNvbnRhaW5zKGV2ZW50LmRldGFpbC5zb3VyY2VFdmVudC50YXJnZXQpO1xuICBpZiAoY29udGFpbmVkTGFiZWxhYmxlQ2hpbGRDbGlja2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMub25MYWJlbENsaWNrKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDb25uZWN0ZWQoKSB7XG4gIGlmICh1bmxhYmVsZWRDb21wb25lbnRzLmhhcyh0aGlzKSkge1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25MYWJlbERpc2Nvbm5lY3RlZCgpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5hZGQodGhpcyk7XG4gIGNvbnN0IGJvdW5kT25MYWJlbENvbm5lY3RlZCA9IG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KHRoaXMpIHx8IG9uTGFiZWxDb25uZWN0ZWQuYmluZCh0aGlzKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5zZXQodGhpcywgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xufVxuXG5leHBvcnQgeyBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50IGFzIGEsIGNvbm5lY3RMYWJlbCBhcyBjLCBkaXNjb25uZWN0TGFiZWwgYXMgZCwgZ2V0TGFiZWxUZXh0IGFzIGcsIGxhYmVsQ29ubmVjdGVkRXZlbnQgYXMgbCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IHByb2dyZXNzQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9QGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxMDAlfS50cmFjaywuYmFye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDtibG9jay1zaXplOjJweH0udHJhY2t7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5iYXJ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsudHJhY2t7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHRUZXh0fS5iYXJ7YmFja2dyb3VuZC1jb2xvcjpsaW5rVGV4dH19LmluZGV0ZXJtaW5hdGV7aW5saW5lLXNpemU6MjAlO2FuaW1hdGlvbjpsb29waW5nLXByb2dyZXNzLWJhci1hbmkgY2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDExIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgaW5maW5pdGV9LnJldmVyc2Vke2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX0udGV4dHtwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazoxcmVtIDBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX1Aa2V5ZnJhbWVzIGxvb3BpbmctcHJvZ3Jlc3MtYmFyLWFuaXswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApfTUwJXtpbmxpbmUtc2l6ZTo0MCV9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjAwJSwgMCwgMCl9fVwiO1xuXG5jb25zdCBQcm9ncmVzcyA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy50eXBlID0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmV2ZXJzZWQgPSBmYWxzZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHRoaXMudHlwZSA9PT0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIGNvbnN0IGJhclN0eWxlcyA9IGlzRGV0ZXJtaW5hdGUgPyB7IHdpZHRoOiBgJHt0aGlzLnZhbHVlICogMTAwfSVgIH0gOiB7fTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbCB8fCB0aGlzLnRleHQsIFwiYXJpYS12YWx1ZW1heFwiOiAxLCBcImFyaWEtdmFsdWVtaW5cIjogMCwgXCJhcmlhLXZhbHVlbm93XCI6IHRoaXMudmFsdWUsIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhY2tcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgYmFyOiB0cnVlLFxuICAgICAgICBpbmRldGVybWluYXRlOiB0aGlzLnR5cGUgPT09IFwiaW5kZXRlcm1pbmF0ZVwiLFxuICAgICAgICByZXZlcnNlZDogdGhpcy5yZXZlcnNlZFxuICAgICAgfSwgc3R5bGU6IGJhclN0eWxlcyB9KSksIHRoaXMudGV4dCA/IGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZXh0XCIgfSwgdGhpcy50ZXh0KSA6IG51bGwpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwcm9ncmVzc0NzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7XG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwidGV4dFwiOiBbMV0sXG4gICAgXCJyZXZlcnNlZFwiOiBbNTE2XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXByb2dyZXNzXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFByb2dyZXNzIGFzIFAsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgY29udGVudDogXCJjb250ZW50XCJcbn07XG5cbmNvbnN0IHNjcmltQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1vdmVybGF5KTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2h9QGtleWZyYW1lcyBjYWxjaXRlLXNjcmltLWZhZGUtaW57MCV7LS10dy1iZy1vcGFjaXR5OjB9MTAwJXstLXR3LXRleHQtb3BhY2l0eToxfX0uc2NyaW17cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO2FuaW1hdGlvbjpjYWxjaXRlLXNjcmltLWZhZGUtaW4gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZS1pbi1vdXQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNjcmltLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbCkpfS5jb250ZW50e3BhZGRpbmc6MXJlbX1cIjtcblxuY29uc3QgU2NyaW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBsb2FkaW5nLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNDb250ZW50ID0gZWwuaW5uZXJIVE1MLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgIGNvbnN0IGxvYWRlck5vZGUgPSBsb2FkaW5nID8gaChcImNhbGNpdGUtbG9hZGVyXCIsIHsgbGFiZWw6IG1lc3NhZ2VzLmxvYWRpbmcgfSkgOiBudWxsO1xuICAgIGNvbnN0IGNvbnRlbnROb2RlID0gaGFzQ29udGVudCA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSkgOiBudWxsO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1Muc2NyaW0gfSwgbG9hZGVyTm9kZSwgY29udGVudE5vZGUpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzY3JpbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zY3JpbVwiLCB7XG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtc2NyaW1cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zY3JpbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFNjcmltKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgU2NyaW0gYXMgUywgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250YWluZXJCb3JkZXJTZWxlY3RlZDogXCJjb250YWluZXItLWJvcmRlci1zZWxlY3RlZFwiLFxuICBjb250YWluZXJCb3JkZXJVbnNlbGVjdGVkOiBcImNvbnRhaW5lci0tYm9yZGVyLXVuc2VsZWN0ZWRcIixcbiAgY29udGVudENvbnRhaW5lcjogXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICBjb250ZW50Q29udGFpbmVyU2VsZWN0YWJsZTogXCJjb250ZW50LWNvbnRhaW5lci0tc2VsZWN0YWJsZVwiLFxuICBjb250ZW50Q29udGFpbmVySGFzQ2VudGVyQ29udGVudDogXCJjb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50XCIsXG4gIG5lc3RlZENvbnRhaW5lcjogXCJuZXN0ZWQtY29udGFpbmVyXCIsXG4gIG5lc3RlZENvbnRhaW5lckhpZGRlbjogXCJuZXN0ZWQtY29udGFpbmVyLS1oaWRkZW5cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGN1c3RvbUNvbnRlbnQ6IFwiY3VzdG9tLWNvbnRlbnRcIixcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgY29udGVudFN0YXJ0OiBcImNvbnRlbnQtc3RhcnRcIixcbiAgbGFiZWw6IFwibGFiZWxcIixcbiAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHNlbGVjdGlvbkNvbnRhaW5lcjogXCJzZWxlY3Rpb24tY29udGFpbmVyXCIsXG4gIG9wZW5Db250YWluZXI6IFwib3Blbi1jb250YWluZXJcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCJcbn07XG5jb25zdCBNQVhfQ09MVU1OUyA9IDU7XG5jb25zdCBJQ09OUyA9IHtcbiAgc2VsZWN0ZWRNdWx0aXBsZTogXCJjaGVjay1jaXJjbGUtZlwiLFxuICBzZWxlY3RlZFNpbmdsZTogXCJjaXJjbGUtZlwiLFxuICB1bnNlbGVjdGVkOiBcImJsYW5rXCIsXG4gIGNsb3NlZExUUjogXCJjYXJldC1yaWdodFwiLFxuICBjbG9zZWRSVEw6IFwiY2FyZXQtbGVmdFwiLFxuICBvcGVuOiBcImNhcmV0LWRvd25cIixcbiAgYmxhbms6IFwiYmxhbmtcIixcbiAgY2xvc2U6IFwieFwiXG59O1xuXG5jb25zdCBsaXN0SXRlbUdyb3VwU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwXCI7XG5jb25zdCBsaXN0SXRlbVNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3QtaXRlbVwiO1xuZnVuY3Rpb24gZ2V0TGlzdEl0ZW1DaGlsZHJlbihldmVudCkge1xuICBjb25zdCBhc3NpZ25lZEVsZW1lbnRzID0gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBjb25zdCBsaXN0SXRlbUdyb3VwQ2hpbGRyZW4gPSBhc3NpZ25lZEVsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKGxpc3RJdGVtR3JvdXBTZWxlY3RvcikpXG4gICAgLm1hcCgoZ3JvdXApID0+IEFycmF5LmZyb20oZ3JvdXAucXVlcnlTZWxlY3RvckFsbChsaXN0SXRlbVNlbGVjdG9yKSkpXG4gICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXSwgW10pO1xuICBjb25zdCBsaXN0SXRlbUNoaWxkcmVuID0gYXNzaWduZWRFbGVtZW50cy5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhsaXN0SXRlbVNlbGVjdG9yKSk7XG4gIHJldHVybiBbLi4ubGlzdEl0ZW1Hcm91cENoaWxkcmVuLCAuLi5saXN0SXRlbUNoaWxkcmVuXTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1DaGlsZHJlbikge1xuICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGlzdEl0ZW0uc2V0UG9zaXRpb24gPSBsaXN0SXRlbUNoaWxkcmVuLmluZGV4T2YobGlzdEl0ZW0pICsgMTtcbiAgICBsaXN0SXRlbS5zZXRTaXplID0gbGlzdEl0ZW1DaGlsZHJlbi5sZW5ndGg7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCwgaW5jbHVkZUdyb3VwID0gZmFsc2UpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBleHByZXNzaW9uID0gaW5jbHVkZUdyb3VwXG4gICAgPyBcImFuY2VzdG9yOjpjYWxjaXRlLWxpc3QtaXRlbSB8IGFuY2VzdG9yOjpjYWxjaXRlLWxpc3QtaXRlbS1ncm91cFwiXG4gICAgOiBcImFuY2VzdG9yOjpjYWxjaXRlLWxpc3QtaXRlbVwiO1xuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZShleHByZXNzaW9uLCBlbGVtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLCBudWxsKTtcbiAgcmV0dXJuIHJlc3VsdC5zbmFwc2hvdExlbmd0aDtcbn1cblxuZXhwb3J0IHsgQ1NTIGFzIEMsIElDT05TIGFzIEksIE1BWF9DT0xVTU5TIGFzIE0sIFNMT1RTIGFzIFMsIGdldERlcHRoIGFzIGEsIGdldExpc3RJdGVtQ2hpbGRyZW4gYXMgZywgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbiBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=