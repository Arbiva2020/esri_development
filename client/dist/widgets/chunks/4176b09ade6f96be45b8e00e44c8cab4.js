"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-list-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-list-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-list-item.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalciteListItem": () => (/* binding */ CalciteListItem),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _utils3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils3.js */ "./node_modules/@esri/calcite-components/dist/components/utils3.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */











const listItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:var(--calcite-app-z-index-sticky);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand))}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
const ListItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteListItemSelect", 6);
    this.calciteListItemClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteListItemClose", 6);
    this.calciteInternalListItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemActive = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalFocusPreviousItem", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.closeClickHandler = () => {
      this.closed = true;
      this.calciteListItemClose.emit();
    };
    this.handleContentSlotChange = (event) => {
      this.hasCustomContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleDefaultSlotChange = (event) => {
      const { parentListEl } = this;
      const listItemChildren = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.g)(event);
      (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.u)(listItemChildren);
      const openable = !!listItemChildren.length;
      if (openable && parentListEl && !parentListEl.openable) {
        parentListEl.openable = true;
      }
      this.openable = openable;
      if (!openable) {
        this.open = false;
      }
    };
    this.toggleOpen = () => {
      this.open = !this.open;
    };
    this.itemClicked = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      this.toggleSelected();
      this.calciteInternalListItemActive.emit();
    };
    this.toggleSelected = () => {
      const { selectionMode, selected } = this;
      if (this.disabled) {
        return;
      }
      if (selectionMode === "multiple" || selectionMode === "single") {
        this.selected = !selected;
      }
      else if (selectionMode === "single-persist") {
        this.selected = true;
      }
      this.calciteListItemSelect.emit();
    };
    this.handleItemKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { key } = event;
      const composedPath = event.composedPath();
      const { containerEl, contentEl, actionsStartEl, actionsEndEl, open, openable } = this;
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
      if (key === "Enter") {
        event.preventDefault();
        this.toggleSelected();
      }
      else if (key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (currentIndex === -1) {
          if (!open && openable) {
            this.open = true;
            this.focusCell(null);
          }
          else if (cells[0]) {
            this.focusCell(cells[0]);
          }
        }
        else if (cells[currentIndex] && cells[nextIndex]) {
          this.focusCell(cells[nextIndex]);
        }
      }
      else if (key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (currentIndex === -1) {
          this.focusCell(null);
          if (open && openable) {
            this.open = false;
          }
          else {
            this.calciteInternalFocusPreviousItem.emit();
          }
        }
        else if (currentIndex === 0) {
          this.focusCell(null);
          containerEl.focus();
        }
        else if (cells[currentIndex] && cells[prevIndex]) {
          this.focusCell(cells[prevIndex]);
        }
      }
    };
    this.focusCellNull = () => {
      this.focusCell(null);
    };
    this.focusCell = (focusEl, saveFocusIndex = true) => {
      const { contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
      if (saveFocusIndex) {
        focusMap.set(parentListEl, null);
      }
      [actionsStartEl, contentEl, actionsEndEl].filter(Boolean).forEach((tableCell, cellIndex) => {
        const tabIndexAttr = "tabindex";
        if (tableCell === focusEl) {
          tableCell.setAttribute(tabIndexAttr, "0");
          saveFocusIndex && focusMap.set(parentListEl, cellIndex);
        }
        else {
          tableCell.removeAttribute(tabIndexAttr);
        }
      });
      focusEl?.focus();
    };
    this.active = false;
    this.closable = false;
    this.closed = false;
    this.description = undefined;
    this.disabled = false;
    this.label = undefined;
    this.metadata = undefined;
    this.open = false;
    this.setSize = null;
    this.setPosition = null;
    this.selected = false;
    this.value = undefined;
    this.selectionMode = null;
    this.selectionAppearance = null;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.level = null;
    this.visualLevel = null;
    this.parentListEl = undefined;
    this.openable = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasCustomContent = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
  }
  activeHandler(active) {
    if (!active) {
      this.focusCell(null, false);
    }
  }
  handleSelectedChange(value) {
    if (value) {
      this.calciteInternalListItemSelect.emit();
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    const { el } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.a)(el) + 1;
    this.visualLevel = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, true);
    this.setSelectionDefaults();
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, "managed");
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    const { containerEl, contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
    const focusIndex = focusMap.get(parentListEl);
    if (typeof focusIndex === "number") {
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      if (cells[focusIndex]) {
        this.focusCell(cells[focusIndex]);
      }
      else {
        containerEl?.focus();
      }
      return;
    }
    containerEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const { selected, selectionMode, selectionAppearance } = this;
    if (selectionMode === "none" || selectionAppearance === "border") {
      return null;
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("td", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.selectionContainer, key: "selection-container", onClick: this.itemClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: selected
        ? selectionMode === "multiple"
          ? _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.selectedMultiple
          : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.selectedSingle
        : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.unselected, scale: "s" })));
  }
  renderOpen() {
    const { el, open, openable, parentListEl } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(el);
    return openable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("td", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.openContainer, key: "open-container", onClick: this.toggleOpen }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: open ? _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.open : dir === "rtl" ? _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.closedRTL : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.closedLTR, scale: "s" }))) : parentListEl?.openable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("td", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.openContainer, key: "open-container", onClick: this.itemClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.blank, scale: "s" }))) : null;
  }
  renderActionsStart() {
    const { label, hasActionsStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("td", { "aria-label": label, class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsStartEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { label, hasActionsEnd, closable, messages } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("td", { "aria-label": label, class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.actionsEnd, hidden: !(hasActionsEnd || closable), key: "actions-end-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsEndEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-action", { appearance: "transparent", icon: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.close, key: "close-action", label: messages.close, onClick: this.closeClickHandler, text: messages.close })) : null));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentStart, hidden: !hasContentStart }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderCustomContent() {
    const { hasCustomContent } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.customContent, hidden: !hasCustomContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.content, onSlotchange: this.handleContentSlotChange })));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentEnd, hidden: !hasContentEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  renderContentProperties() {
    const { label, description, hasCustomContent } = this;
    return !hasCustomContent && (!!label || !!description) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.content, key: "content" }, label ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.label, key: "label" }, label)) : null, description ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.description, key: "description" }, description)) : null)) : null;
  }
  renderContentContainer() {
    const { description, label, selectionMode, hasCustomContent } = this;
    const hasCenterContent = hasCustomContent || !!label || !!description;
    const content = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderContentProperties(),
      this.renderContentEnd()
    ];
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("td", { "aria-label": label, class: {
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentContainer]: true,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentContainerSelectable]: selectionMode !== "none",
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentContainerHasCenterContent]: hasCenterContent
      }, key: "content-container", onClick: this.itemClicked, role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.contentEl = el) }, content));
  }
  render() {
    const { openable, open, level, setPosition, setSize, active, label, selected, selectionAppearance, selectionMode, closed } = this;
    const showBorder = selectionMode !== "none" && selectionAppearance === "border";
    const borderSelected = showBorder && selected;
    const borderUnselected = showBorder && !selected;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("tr", { "aria-expanded": openable ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(selected), "aria-setsize": setSize, class: {
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.container]: true,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.containerBorderSelected]: borderSelected,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.containerBorderUnselected]: borderUnselected
      }, hidden: closed, onFocus: this.focusCellNull, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${this.visualLevel}` }, tabIndex: active ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.containerEl = el) }, this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: {
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.nestedContainer]: true,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.nestedContainerHidden]: openable && !open
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  setSelectionDefaults() {
    const { parentListEl, selectionMode, selectionAppearance } = this;
    if (!parentListEl) {
      return;
    }
    if (!selectionMode) {
      this.selectionMode = parentListEl.selectionMode;
    }
    if (!selectionAppearance) {
      this.selectionAppearance = parentListEl.selectionAppearance;
    }
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "active": ["activeHandler"],
    "selected": ["handleSelectedChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return listItemCss; }
}, [1, "calcite-list-item", {
    "active": [4],
    "closable": [516],
    "closed": [1540],
    "description": [1],
    "disabled": [516],
    "label": [1],
    "metadata": [16],
    "open": [1540],
    "setSize": [2, "set-size"],
    "setPosition": [2, "set-position"],
    "selected": [1540],
    "value": [8],
    "selectionMode": [1025, "selection-mode"],
    "selectionAppearance": [1025, "selection-appearance"],
    "messageOverrides": [1040],
    "messages": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "level": [32],
    "visualLevel": [32],
    "parentListEl": [32],
    "openable": [32],
    "hasActionsStart": [32],
    "hasActionsEnd": [32],
    "hasCustomContent": [32],
    "hasContentStart": [32],
    "hasContentEnd": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list-item", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_6__.d)();
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
defineCustomElement$1();

const CalciteListItem = ListItem;
const defineCustomElement = defineCustomElement$1;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDE3NmIwOWFkZTZmOTZiZTQ1YjhlMDBlNDRjOGNhYjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNWO0FBQ3ZDO0FBQ3VFO0FBQ3ZEO0FBQ29DO0FBQ1A7QUFDbEQ7QUFDRjtBQUNFOztBQUV6RCxtQ0FBbUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sYUFBYSxzQkFBc0IsdURBQXVELHdDQUF3Qyx5R0FBeUcsVUFBVSxXQUFXLHNCQUFzQixhQUFhLFlBQVksZ0RBQWdELHVDQUF1Qyx3SEFBd0gsYUFBYSxzQkFBc0IsaUJBQWlCLGVBQWUsZ0RBQWdELDRCQUE0QixzREFBc0QsOEJBQThCLDBDQUEwQyxrQkFBa0IsYUFBYSxzQkFBc0IsZ0RBQWdELDBCQUEwQixhQUFhLG1CQUFtQixhQUFhLGNBQWMsb0JBQW9CLFlBQVksdUNBQXVDLDhDQUE4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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3V0aWxzMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBlIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIGMgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0TGlzdEl0ZW1DaGlsZHJlbiwgdSBhcyB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuLCBhIGFzIGdldERlcHRoLCBDIGFzIENTUywgSSBhcyBJQ09OUywgUyBhcyBTTE9UUyB9IGZyb20gJy4vdXRpbHMzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgbGlzdEl0ZW1Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uOy0tY2FsY2l0ZS1saXN0LWl0ZW0taWNvbi1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTstLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50OjFyZW19Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtwYWRkaW5nLWlubGluZS1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50KSAqIHZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpKX0uY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fS5jb250YWluZXI6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9LmNvbnRhaW5lci0tYm9yZGVyLXNlbGVjdGVke2JvcmRlci1pbmxpbmUtc3RhcnQ6NHB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jb250YWluZXItLWJvcmRlci11bnNlbGVjdGVke2JvcmRlci1pbmxpbmUtc3RhcnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50fS5uZXN0ZWQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Lm5lc3RlZC1jb250YWluZXItLWhpZGRlbntkaXNwbGF5Om5vbmV9LmNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7cGFkZGluZzowcHg7Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX10cix0ZHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fXRyOmZvY3VzLHRkOmZvY3Vze3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1zdGlja3kpO291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKX0uY29udGVudCwuY3VzdG9tLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1pbmxpbmU6MC43NXJlbTtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fS5sYWJlbCwuZGVzY3JpcHRpb257Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfS5sYWJlbDpvbmx5LWNoaWxkLC5kZXNjcmlwdGlvbjpvbmx5LWNoaWxke21hcmdpbjowcHg7cGFkZGluZy1ibG9jazowLjI1cmVtfS5sYWJlbHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmRlc2NyaXB0aW9ue21hcmdpbi1ibG9jay1zdGFydDowLjEyNXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LmNvbnRlbnQtc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmNvbnRlbnQtZW5ke2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uY29udGVudC1zdGFydCwuY29udGVudC1lbmR7ZmxleDoxIDEgYXV0b30uY29udGVudC1jb250YWluZXItLWhhcy1jZW50ZXItY29udGVudCAuY29udGVudC1zdGFydCwuY29udGVudC1jb250YWluZXItLWhhcy1jZW50ZXItY29udGVudCAuY29udGVudC1lbmR7ZmxleDowIDEgYXV0b30uc2VsZWN0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7cGFkZGluZy1pbmxpbmU6MC43NXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLWxpc3QtaXRlbS1pY29uLWNvbG9yKX0uYWN0aW9ucy1zdGFydCwuYWN0aW9ucy1lbmQsLmNvbnRlbnQtc3RhcnQsLmNvbnRlbnQtZW5kLC5zZWxlY3Rpb24tY29udGFpbmVyLC5vcGVuLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5vcGVuLWNvbnRhaW5lciwuc2VsZWN0aW9uLWNvbnRhaW5lcntjdXJzb3I6cG9pbnRlcn0uY29udGVudC1zdGFydCA6OnNsb3R0ZWQoY2FsY2l0ZS1pY29uKSwuY29udGVudC1lbmQgOjpzbG90dGVkKGNhbGNpdGUtaWNvbil7bWFyZ2luLWlubGluZTowLjc1cmVtO2FsaWduLXNlbGY6Y2VudGVyfS5hY3Rpb25zLXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbiksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbil7YWxpZ24tc2VsZjpzdHJldGNoO2NvbG9yOmluaGVyaXR9OjpzbG90dGVkKGNhbGNpdGUtbGlzdC1pdGVtKXtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IGZvY3VzTWFwID0gbmV3IE1hcCgpO1xuY29uc3QgbGlzdFNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3RcIjtcbmNvbnN0IExpc3RJdGVtID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RJdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0SXRlbUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW0gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEZvY3VzUHJldmlvdXNJdGVtXCIsIDYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY2xvc2VDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbUNsb3NlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29udGVudFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ3VzdG9tQ29udGVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zU3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0FjdGlvbnNTdGFydCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNBY3Rpb25zRW5kID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRTdGFydFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudFN0YXJ0ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRFbmRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnRFbmQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IGdldExpc3RJdGVtQ2hpbGRyZW4oZXZlbnQpO1xuICAgICAgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IG9wZW5hYmxlID0gISFsaXN0SXRlbUNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGlmIChvcGVuYWJsZSAmJiBwYXJlbnRMaXN0RWwgJiYgIXBhcmVudExpc3RFbC5vcGVuYWJsZSkge1xuICAgICAgICBwYXJlbnRMaXN0RWwub3BlbmFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuYWJsZSA9IG9wZW5hYmxlO1xuICAgICAgaWYgKCFvcGVuYWJsZSkge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbiA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfTtcbiAgICB0aGlzLml0ZW1DbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkIH0gPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCBzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZS1wZXJzaXN0XCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbVNlbGVjdC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUl0ZW1LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgb3Blbiwgb3BlbmFibGUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBjZWxscyA9IFthY3Rpb25zU3RhcnRFbCwgY29udGVudEVsLCBhY3Rpb25zRW5kRWxdLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNlbGxzLmZpbmRJbmRleCgoY2VsbCkgPT4gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNlbGwpKTtcbiAgICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaWYgKCFvcGVuICYmIG9wZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGNlbGxzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChjZWxsc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNlbGxzW2N1cnJlbnRJbmRleF0gJiYgY2VsbHNbbmV4dEluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzW25leHRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChudWxsKTtcbiAgICAgICAgICBpZiAob3BlbiAmJiBvcGVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxGb2N1c1ByZXZpb3VzSXRlbS5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwpO1xuICAgICAgICAgIGNvbnRhaW5lckVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2VsbHNbY3VycmVudEluZGV4XSAmJiBjZWxsc1twcmV2SW5kZXhdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c0NlbGwoY2VsbHNbcHJldkluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZm9jdXNDZWxsTnVsbCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwpO1xuICAgIH07XG4gICAgdGhpcy5mb2N1c0NlbGwgPSAoZm9jdXNFbCwgc2F2ZUZvY3VzSW5kZXggPSB0cnVlKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgICAgaWYgKHNhdmVGb2N1c0luZGV4KSB7XG4gICAgICAgIGZvY3VzTWFwLnNldChwYXJlbnRMaXN0RWwsIG51bGwpO1xuICAgICAgfVxuICAgICAgW2FjdGlvbnNTdGFydEVsLCBjb250ZW50RWwsIGFjdGlvbnNFbmRFbF0uZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goKHRhYmxlQ2VsbCwgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkluZGV4QXR0ciA9IFwidGFiaW5kZXhcIjtcbiAgICAgICAgaWYgKHRhYmxlQ2VsbCA9PT0gZm9jdXNFbCkge1xuICAgICAgICAgIHRhYmxlQ2VsbC5zZXRBdHRyaWJ1dGUodGFiSW5kZXhBdHRyLCBcIjBcIik7XG4gICAgICAgICAgc2F2ZUZvY3VzSW5kZXggJiYgZm9jdXNNYXAuc2V0KHBhcmVudExpc3RFbCwgY2VsbEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0YWJsZUNlbGwucmVtb3ZlQXR0cmlidXRlKHRhYkluZGV4QXR0cik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZm9jdXNFbD8uZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1ldGFkYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U2l6ZSA9IG51bGw7XG4gICAgdGhpcy5zZXRQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBudWxsO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxldmVsID0gbnVsbDtcbiAgICB0aGlzLnZpc3VhbExldmVsID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudExpc3RFbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW5hYmxlID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBY3Rpb25zU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FjdGlvbnNFbmQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0N1c3RvbUNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0NvbnRlbnRTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29udGVudEVuZCA9IGZhbHNlO1xuICB9XG4gIGFjdGl2ZUhhbmRsZXIoYWN0aXZlKSB7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHRoaXMucGFyZW50TGlzdEVsID0gZWwuY2xvc2VzdChsaXN0U2VsZWN0b3IpO1xuICAgIHRoaXMubGV2ZWwgPSBnZXREZXB0aChlbCkgKyAxO1xuICAgIHRoaXMudmlzdWFsTGV2ZWwgPSBnZXREZXB0aChlbCwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb25EZWZhdWx0cygpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsIFwibWFuYWdlZFwiKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZvY3VzSW5kZXggPSBmb2N1c01hcC5nZXQocGFyZW50TGlzdEVsKTtcbiAgICBpZiAodHlwZW9mIGZvY3VzSW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gW2FjdGlvbnNTdGFydEVsLCBjb250ZW50RWwsIGFjdGlvbnNFbmRFbF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNlbGxzW2ZvY3VzSW5kZXhdKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzW2ZvY3VzSW5kZXhdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250YWluZXJFbD8uZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udGFpbmVyRWw/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIHNlbGVjdGlvbk1vZGUsIHNlbGVjdGlvbkFwcGVhcmFuY2UgfSA9IHRoaXM7XG4gICAgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiIHx8IHNlbGVjdGlvbkFwcGVhcmFuY2UgPT09IFwiYm9yZGVyXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IGNsYXNzOiBDU1Muc2VsZWN0aW9uQ29udGFpbmVyLCBrZXk6IFwic2VsZWN0aW9uLWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLml0ZW1DbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBzZWxlY3RlZFxuICAgICAgICA/IHNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIlxuICAgICAgICAgID8gSUNPTlMuc2VsZWN0ZWRNdWx0aXBsZVxuICAgICAgICAgIDogSUNPTlMuc2VsZWN0ZWRTaW5nbGVcbiAgICAgICAgOiBJQ09OUy51bnNlbGVjdGVkLCBzY2FsZTogXCJzXCIgfSkpKTtcbiAgfVxuICByZW5kZXJPcGVuKCkge1xuICAgIGNvbnN0IHsgZWwsIG9wZW4sIG9wZW5hYmxlLCBwYXJlbnRMaXN0RWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcihlbCk7XG4gICAgcmV0dXJuIG9wZW5hYmxlID8gKGgoXCJ0ZFwiLCB7IGNsYXNzOiBDU1Mub3BlbkNvbnRhaW5lciwga2V5OiBcIm9wZW4tY29udGFpbmVyXCIsIG9uQ2xpY2s6IHRoaXMudG9nZ2xlT3BlbiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogb3BlbiA/IElDT05TLm9wZW4gOiBkaXIgPT09IFwicnRsXCIgPyBJQ09OUy5jbG9zZWRSVEwgOiBJQ09OUy5jbG9zZWRMVFIsIHNjYWxlOiBcInNcIiB9KSkpIDogcGFyZW50TGlzdEVsPy5vcGVuYWJsZSA/IChoKFwidGRcIiwgeyBjbGFzczogQ1NTLm9wZW5Db250YWluZXIsIGtleTogXCJvcGVuLWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLml0ZW1DbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBJQ09OUy5ibGFuaywgc2NhbGU6IFwic1wiIH0pKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckFjdGlvbnNTdGFydCgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBoYXNBY3Rpb25zU3RhcnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiBDU1MuYWN0aW9uc1N0YXJ0LCBoaWRkZW46ICFoYXNBY3Rpb25zU3RhcnQsIGtleTogXCJhY3Rpb25zLXN0YXJ0LWNvbnRhaW5lclwiLCByb2xlOiBcImdyaWRjZWxsXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5hY3Rpb25zU3RhcnRFbCA9IGVsKSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbnNTdGFydCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbnNTdGFydFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJBY3Rpb25zRW5kKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGhhc0FjdGlvbnNFbmQsIGNsb3NhYmxlLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgY2xhc3M6IENTUy5hY3Rpb25zRW5kLCBoaWRkZW46ICEoaGFzQWN0aW9uc0VuZCB8fCBjbG9zYWJsZSksIGtleTogXCJhY3Rpb25zLWVuZC1jb250YWluZXJcIiwgcm9sZTogXCJncmlkY2VsbFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aW9uc0VuZEVsID0gZWwpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbnNFbmRTbG90Q2hhbmdlIH0pLCBjbG9zYWJsZSA/IChoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGljb246IElDT05TLmNsb3NlLCBrZXk6IFwiY2xvc2UtYWN0aW9uXCIsIGxhYmVsOiBtZXNzYWdlcy5jbG9zZSwgb25DbGljazogdGhpcy5jbG9zZUNsaWNrSGFuZGxlciwgdGV4dDogbWVzc2FnZXMuY2xvc2UgfSkpIDogbnVsbCkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRTdGFydCgpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnRTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRTdGFydCwgaGlkZGVuOiAhaGFzQ29udGVudFN0YXJ0IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFN0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckN1c3RvbUNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoYXNDdXN0b21Db250ZW50IH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY3VzdG9tQ29udGVudCwgaGlkZGVuOiAhaGFzQ3VzdG9tQ29udGVudCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRFbmQoKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50RW5kIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEVuZCwgaGlkZGVuOiAhaGFzQ29udGVudEVuZCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGRlc2NyaXB0aW9uLCBoYXNDdXN0b21Db250ZW50IH0gPSB0aGlzO1xuICAgIHJldHVybiAhaGFzQ3VzdG9tQ29udGVudCAmJiAoISFsYWJlbCB8fCAhIWRlc2NyaXB0aW9uKSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50LCBrZXk6IFwiY29udGVudFwiIH0sIGxhYmVsID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxhYmVsLCBrZXk6IFwibGFiZWxcIiB9LCBsYWJlbCkpIDogbnVsbCwgZGVzY3JpcHRpb24gPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuZGVzY3JpcHRpb24sIGtleTogXCJkZXNjcmlwdGlvblwiIH0sIGRlc2NyaXB0aW9uKSkgOiBudWxsKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckNvbnRlbnRDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgbGFiZWwsIHNlbGVjdGlvbk1vZGUsIGhhc0N1c3RvbUNvbnRlbnQgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzQ2VudGVyQ29udGVudCA9IGhhc0N1c3RvbUNvbnRlbnQgfHwgISFsYWJlbCB8fCAhIWRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnRTdGFydCgpLFxuICAgICAgdGhpcy5yZW5kZXJDdXN0b21Db250ZW50KCksXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnRQcm9wZXJ0aWVzKCksXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnRFbmQoKVxuICAgIF07XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGVudENvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuY29udGVudENvbnRhaW5lclNlbGVjdGFibGVdOiBzZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIixcbiAgICAgICAgW0NTUy5jb250ZW50Q29udGFpbmVySGFzQ2VudGVyQ29udGVudF06IGhhc0NlbnRlckNvbnRlbnRcbiAgICAgIH0sIGtleTogXCJjb250ZW50LWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLml0ZW1DbGlja2VkLCByb2xlOiBcImdyaWRjZWxsXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250ZW50RWwgPSBlbCkgfSwgY29udGVudCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW5hYmxlLCBvcGVuLCBsZXZlbCwgc2V0UG9zaXRpb24sIHNldFNpemUsIGFjdGl2ZSwgbGFiZWwsIHNlbGVjdGVkLCBzZWxlY3Rpb25BcHBlYXJhbmNlLCBzZWxlY3Rpb25Nb2RlLCBjbG9zZWQgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2hvd0JvcmRlciA9IHNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiICYmIHNlbGVjdGlvbkFwcGVhcmFuY2UgPT09IFwiYm9yZGVyXCI7XG4gICAgY29uc3QgYm9yZGVyU2VsZWN0ZWQgPSBzaG93Qm9yZGVyICYmIHNlbGVjdGVkO1xuICAgIGNvbnN0IGJvcmRlclVuc2VsZWN0ZWQgPSBzaG93Qm9yZGVyICYmICFzZWxlY3RlZDtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInRyXCIsIHsgXCJhcmlhLWV4cGFuZGVkXCI6IG9wZW5hYmxlID8gdG9BcmlhQm9vbGVhbihvcGVuKSA6IG51bGwsIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgXCJhcmlhLWxldmVsXCI6IGxldmVsLCBcImFyaWEtcG9zaW5zZXRcIjogc2V0UG9zaXRpb24sIFwiYXJpYS1zZWxlY3RlZFwiOiB0b0FyaWFCb29sZWFuKHNlbGVjdGVkKSwgXCJhcmlhLXNldHNpemVcIjogc2V0U2l6ZSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lckJvcmRlclNlbGVjdGVkXTogYm9yZGVyU2VsZWN0ZWQsXG4gICAgICAgIFtDU1MuY29udGFpbmVyQm9yZGVyVW5zZWxlY3RlZF06IGJvcmRlclVuc2VsZWN0ZWRcbiAgICAgIH0sIGhpZGRlbjogY2xvc2VkLCBvbkZvY3VzOiB0aGlzLmZvY3VzQ2VsbE51bGwsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVJdGVtS2V5RG93biwgcm9sZTogXCJyb3dcIiwgc3R5bGU6IHsgXCItLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXJcIjogYCR7dGhpcy52aXN1YWxMZXZlbH1gIH0sIHRhYkluZGV4OiBhY3RpdmUgPyAwIDogLTEsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250YWluZXJFbCA9IGVsKSB9LCB0aGlzLnJlbmRlclNlbGVjdGVkKCksIHRoaXMucmVuZGVyT3BlbigpLCB0aGlzLnJlbmRlckFjdGlvbnNTdGFydCgpLCB0aGlzLnJlbmRlckNvbnRlbnRDb250YWluZXIoKSwgdGhpcy5yZW5kZXJBY3Rpb25zRW5kKCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5uZXN0ZWRDb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLm5lc3RlZENvbnRhaW5lckhpZGRlbl06IG9wZW5hYmxlICYmICFvcGVuXG4gICAgICB9IH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pKSkpO1xuICB9XG4gIHNldFNlbGVjdGlvbkRlZmF1bHRzKCkge1xuICAgIGNvbnN0IHsgcGFyZW50TGlzdEVsLCBzZWxlY3Rpb25Nb2RlLCBzZWxlY3Rpb25BcHBlYXJhbmNlIH0gPSB0aGlzO1xuICAgIGlmICghcGFyZW50TGlzdEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghc2VsZWN0aW9uTW9kZSkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gcGFyZW50TGlzdEVsLnNlbGVjdGlvbk1vZGU7XG4gICAgfVxuICAgIGlmICghc2VsZWN0aW9uQXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25BcHBlYXJhbmNlID0gcGFyZW50TGlzdEVsLnNlbGVjdGlvbkFwcGVhcmFuY2U7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJhY3RpdmVcIjogW1wiYWN0aXZlSGFuZGxlclwiXSxcbiAgICBcInNlbGVjdGVkXCI6IFtcImhhbmRsZVNlbGVjdGVkQ2hhbmdlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsaXN0SXRlbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1saXN0LWl0ZW1cIiwge1xuICAgIFwiYWN0aXZlXCI6IFs0XSxcbiAgICBcImNsb3NhYmxlXCI6IFs1MTZdLFxuICAgIFwiY2xvc2VkXCI6IFsxNTQwXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFsxXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibWV0YWRhdGFcIjogWzE2XSxcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwic2V0U2l6ZVwiOiBbMiwgXCJzZXQtc2l6ZVwiXSxcbiAgICBcInNldFBvc2l0aW9uXCI6IFsyLCBcInNldC1wb3NpdGlvblwiXSxcbiAgICBcInNlbGVjdGVkXCI6IFsxNTQwXSxcbiAgICBcInZhbHVlXCI6IFs4XSxcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogWzEwMjUsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzZWxlY3Rpb25BcHBlYXJhbmNlXCI6IFsxMDI1LCBcInNlbGVjdGlvbi1hcHBlYXJhbmNlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwibGV2ZWxcIjogWzMyXSxcbiAgICBcInZpc3VhbExldmVsXCI6IFszMl0sXG4gICAgXCJwYXJlbnRMaXN0RWxcIjogWzMyXSxcbiAgICBcIm9wZW5hYmxlXCI6IFszMl0sXG4gICAgXCJoYXNBY3Rpb25zU3RhcnRcIjogWzMyXSxcbiAgICBcImhhc0FjdGlvbnNFbmRcIjogWzMyXSxcbiAgICBcImhhc0N1c3RvbUNvbnRlbnRcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRTdGFydFwiOiBbMzJdLFxuICAgIFwiaGFzQ29udGVudEVuZFwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbGlzdC1pdGVtXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1saXN0LWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBMaXN0SXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUxpc3RJdGVtID0gTGlzdEl0ZW07XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlTGlzdEl0ZW0sIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lckJvcmRlclNlbGVjdGVkOiBcImNvbnRhaW5lci0tYm9yZGVyLXNlbGVjdGVkXCIsXG4gIGNvbnRhaW5lckJvcmRlclVuc2VsZWN0ZWQ6IFwiY29udGFpbmVyLS1ib3JkZXItdW5zZWxlY3RlZFwiLFxuICBjb250ZW50Q29udGFpbmVyOiBcImNvbnRlbnQtY29udGFpbmVyXCIsXG4gIGNvbnRlbnRDb250YWluZXJTZWxlY3RhYmxlOiBcImNvbnRlbnQtY29udGFpbmVyLS1zZWxlY3RhYmxlXCIsXG4gIGNvbnRlbnRDb250YWluZXJIYXNDZW50ZXJDb250ZW50OiBcImNvbnRlbnQtY29udGFpbmVyLS1oYXMtY2VudGVyLWNvbnRlbnRcIixcbiAgbmVzdGVkQ29udGFpbmVyOiBcIm5lc3RlZC1jb250YWluZXJcIixcbiAgbmVzdGVkQ29udGFpbmVySGlkZGVuOiBcIm5lc3RlZC1jb250YWluZXItLWhpZGRlblwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY3VzdG9tQ29udGVudDogXCJjdXN0b20tY29udGVudFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBjb250ZW50RW5kOiBcImNvbnRlbnQtZW5kXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgc2VsZWN0aW9uQ29udGFpbmVyOiBcInNlbGVjdGlvbi1jb250YWluZXJcIixcbiAgb3BlbkNvbnRhaW5lcjogXCJvcGVuLWNvbnRhaW5lclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCIsXG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50RW5kOiBcImNvbnRlbnQtZW5kXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIlxufTtcbmNvbnN0IE1BWF9DT0xVTU5TID0gNTtcbmNvbnN0IElDT05TID0ge1xuICBzZWxlY3RlZE11bHRpcGxlOiBcImNoZWNrLWNpcmNsZS1mXCIsXG4gIHNlbGVjdGVkU2luZ2xlOiBcImNpcmNsZS1mXCIsXG4gIHVuc2VsZWN0ZWQ6IFwiYmxhbmtcIixcbiAgY2xvc2VkTFRSOiBcImNhcmV0LXJpZ2h0XCIsXG4gIGNsb3NlZFJUTDogXCJjYXJldC1sZWZ0XCIsXG4gIG9wZW46IFwiY2FyZXQtZG93blwiLFxuICBibGFuazogXCJibGFua1wiLFxuICBjbG9zZTogXCJ4XCJcbn07XG5cbmNvbnN0IGxpc3RJdGVtR3JvdXBTZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW0tZ3JvdXBcIjtcbmNvbnN0IGxpc3RJdGVtU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtXCI7XG5mdW5jdGlvbiBnZXRMaXN0SXRlbUNoaWxkcmVuKGV2ZW50KSB7XG4gIGNvbnN0IGFzc2lnbmVkRWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGNvbnN0IGxpc3RJdGVtR3JvdXBDaGlsZHJlbiA9IGFzc2lnbmVkRWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMobGlzdEl0ZW1Hcm91cFNlbGVjdG9yKSlcbiAgICAubWFwKChncm91cCkgPT4gQXJyYXkuZnJvbShncm91cC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IpKSlcbiAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IFsuLi5wcmV2aW91c1ZhbHVlLCAuLi5jdXJyZW50VmFsdWVdLCBbXSk7XG4gIGNvbnN0IGxpc3RJdGVtQ2hpbGRyZW4gPSBhc3NpZ25lZEVsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKGxpc3RJdGVtU2VsZWN0b3IpKTtcbiAgcmV0dXJuIFsuLi5saXN0SXRlbUdyb3VwQ2hpbGRyZW4sIC4uLmxpc3RJdGVtQ2hpbGRyZW5dO1xufVxuZnVuY3Rpb24gdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUNoaWxkcmVuKSB7XG4gIGxpc3RJdGVtQ2hpbGRyZW4uZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICBsaXN0SXRlbS5zZXRQb3NpdGlvbiA9IGxpc3RJdGVtQ2hpbGRyZW4uaW5kZXhPZihsaXN0SXRlbSkgKyAxO1xuICAgIGxpc3RJdGVtLnNldFNpemUgPSBsaXN0SXRlbUNoaWxkcmVuLmxlbmd0aDtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXREZXB0aChlbGVtZW50LCBpbmNsdWRlR3JvdXAgPSBmYWxzZSkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBpbmNsdWRlR3JvdXBcbiAgICA/IFwiYW5jZXN0b3I6OmNhbGNpdGUtbGlzdC1pdGVtIHwgYW5jZXN0b3I6OmNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwXCJcbiAgICA6IFwiYW5jZXN0b3I6OmNhbGNpdGUtbGlzdC1pdGVtXCI7XG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmV2YWx1YXRlKGV4cHJlc3Npb24sIGVsZW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xuICByZXR1cm4gcmVzdWx0LnNuYXBzaG90TGVuZ3RoO1xufVxuXG5leHBvcnQgeyBDU1MgYXMgQywgSUNPTlMgYXMgSSwgTUFYX0NPTFVNTlMgYXMgTSwgU0xPVFMgYXMgUywgZ2V0RGVwdGggYXMgYSwgZ2V0TGlzdEl0ZW1DaGlsZHJlbiBhcyBnLCB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==