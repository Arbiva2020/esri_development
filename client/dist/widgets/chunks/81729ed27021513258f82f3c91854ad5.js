"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-flow-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/Heading.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/Heading.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/action-menu.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action-menu.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ActionMenu),
/* harmony export */   "S": () => (/* binding */ SLOTS),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/@esri/calcite-components/dist/components/array.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */











const CSS = {
  menu: "menu",
  defaultTrigger: "default-trigger"
};
const SLOTS = {
  tooltip: "tooltip",
  trigger: "trigger"
};
const ICONS = {
  menu: "ellipsis"
};

const actionMenuCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";

const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
const ActionMenu = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionMenuOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteActionMenuOpen", 6);
    this.actionElements = [];
    this.guid = `calcite-action-menu-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    this.connectMenuButtonEl = () => {
      const { menuButtonId, menuId, open, label } = this;
      const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(open));
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
    };
    this.disconnectMenuButtonEl = () => {
      const { menuButtonEl } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
    };
    this.setMenuButtonEl = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-action"));
      this.slottedMenuButtonEl = actions[0];
      this.connectMenuButtonEl();
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      this.toggleOpen();
    };
    this.updateTooltip = (event) => {
      const tooltips = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-tooltip"));
      this.tooltipEl = tooltips[0];
      this.setTooltipReferenceElement();
    };
    this.setTooltipReferenceElement = () => {
      const { tooltipEl, expanded, menuButtonEl, open } = this;
      if (tooltipEl) {
        tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const { guid, activeMenuItemIndex } = this;
      const id = `${guid}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.active = index === activeMenuItemIndex;
    };
    this.updateActions = (actions) => {
      actions?.forEach(this.updateAction);
    };
    this.handleDefaultSlotChange = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-action"));
      this.actionElements = actions;
    };
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      const { actionElements, activeMenuItemIndex, open } = this;
      if (!actionElements.length) {
        return;
      }
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_3__.i)(key)) {
        event.preventDefault();
        if (!open) {
          this.toggleOpen();
          return;
        }
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
      }
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === "Escape") {
        this.toggleOpen(false);
        event.preventDefault();
        return;
      }
      this.handleActionNavigation(event, key, actionElements);
    };
    this.handleActionNavigation = (event, key, actions) => {
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!this.open) {
        this.toggleOpen();
        if (key === "Home" || key === "ArrowDown") {
          this.activeMenuItemIndex = 0;
        }
        if (key === "End" || key === "ArrowUp") {
          this.activeMenuItemIndex = actions.length - 1;
        }
        return;
      }
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      const currentIndex = this.activeMenuItemIndex;
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
    this.expanded = false;
    this.flipPlacements = undefined;
    this.label = undefined;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.scale = undefined;
    this.menuButtonEl = undefined;
    this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpen.emit();
    this.setTooltipReferenceElement();
  }
  closeCalciteActionMenuOnClick(event) {
    if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
      return;
    }
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el)) {
      return;
    }
    this.open = false;
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.menuButtonEl);
  }
  renderMenuButton() {
    const { label, scale, expanded } = this;
    const menuButtonSlot = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.trigger, onSlotchange: this.setMenuButtonEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-action", { class: CSS.defaultTrigger, icon: ICONS.menu, scale: scale, text: label, textEnabled: expanded,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setDefaultMenuButtonEl })));
    return menuButtonSlot;
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = activeAction?.id || null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-popover", { flipPlacements: flipPlacements, focusTrapDisabled: true, label: label, offsetDistance: 0, open: open, overlayPositioning: overlayPositioning, placement: placement, pointerDisabled: true, referenceElement: menuButtonEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl?.id, class: CSS.menu, id: menuId, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, this.renderMenuButton(), this.renderMenuItems(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.tooltip, onSlotchange: this.updateTooltip })));
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "open": ["openHandler"],
    "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
  }; }
  static get style() { return actionMenuCss; }
}, [1, "calcite-action-menu", {
    "expanded": [516],
    "flipPlacements": [16],
    "label": [1],
    "open": [1540],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "scale": [513],
    "menuButtonEl": [32],
    "activeMenuItemIndex": [32],
    "setFocus": [64]
  }, [[9, "pointerdown", "closeCalciteActionMenuOnClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionMenu);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/array.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-flow-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-flow-item.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalciteFlowItem": () => (/* binding */ CalciteFlowItem),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel.js */ "./node_modules/@esri/calcite-components/dist/components/panel.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tooltip.js */ "./node_modules/@esri/calcite-components/dist/components/tooltip.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */















const CSS = {
  backButton: "back-button"
};
const ICONS = {
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
const SLOTS = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
};

const flowItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-flow-item-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding)}";

const FlowItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteFlowItemBack = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calciteFlowItemBack", 6);
    this.calciteFlowItemScroll = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calciteFlowItemScroll", 6);
    this.calciteFlowItemClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calciteFlowItemClose", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handlePanelScroll = (event) => {
      event.stopPropagation();
      this.calciteFlowItemScroll.emit();
    };
    this.handlePanelClose = (event) => {
      event.stopPropagation();
      this.calciteFlowItemClose.emit();
    };
    this.backButtonClick = () => {
      this.calciteFlowItemBack.emit();
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.closable = false;
    this.closed = false;
    this.beforeBack = undefined;
    this.description = undefined;
    this.disabled = false;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.showBackButton = false;
    this.backButtonEl = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
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
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const { backButtonEl, containerEl } = this;
    if (backButtonEl) {
      backButtonEl.setFocus();
      return;
    }
    containerEl?.setFocus();
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options
   */
  async scrollContentTo(options) {
    await this.containerEl?.scrollContentTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el } = this;
    const rtl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(el) === "rtl";
    const { showBackButton, backButtonClick, messages } = this;
    const label = messages.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;
    return showBackButton ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "flow-back-button", onClick: backButtonClick, scale: "s", slot: "header-actions-start", text: label,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setBackRef })) : null;
  }
  render() {
    const { closable, closed, description, disabled, heading, headingLevel, loading, menuOpen, messages, backButtonEl } = this;
    const label = messages.back;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-panel", { closable: closable, closed: closed, description: description, disabled: disabled, heading: heading, headingLevel: headingLevel, loading: loading, menuOpen: menuOpen, messageOverrides: messages, onCalcitePanelClose: this.handlePanelClose, onCalcitePanelScroll: this.handlePanelScroll,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerRef }, this.renderBackButton(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.actionBar, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.actionBar }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerActionsStart, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerActionsStart }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerActionsEnd, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerActionsEnd }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerContent, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerContent }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerMenuActions, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerMenuActions }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.fab, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.fab }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.footerActions, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footerActions }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.footer, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footer }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", null)), backButtonEl ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-tooltip", { closeOnClick: true, label: label, overlayPositioning: "fixed", placement: "top", referenceElement: backButtonEl }, label)) : null));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return flowItemCss; }
}, [1, "calcite-flow-item", {
    "closable": [516],
    "closed": [516],
    "beforeBack": [16],
    "description": [1],
    "disabled": [516],
    "heading": [1],
    "headingLevel": [514, "heading-level"],
    "loading": [516],
    "menuOpen": [516, "menu-open"],
    "messageOverrides": [1040],
    "messages": [1040],
    "showBackButton": [4, "show-back-button"],
    "backButtonEl": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "setFocus": [64],
    "scrollContentTo": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-flow-item", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-panel", "calcite-popover", "calcite-scrim", "calcite-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-flow-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FlowItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-panel":
      if (!customElements.get(tagName)) {
        (0,_panel_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-tooltip":
      if (!customElements.get(tagName)) {
        (0,_tooltip_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteFlowItem = FlowItem;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ activateFocusTrap),
/* harmony export */   "c": () => (/* binding */ connectFocusTrap),
/* harmony export */   "d": () => (/* binding */ deactivateFocusTrap),
/* harmony export */   "u": () => (/* binding */ updateFocusTrapElements)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


/*!
* focus-trap 7.4.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap.pause();
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0) {
      trapStack[trapStack.length - 1].unpause();
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};
var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

// Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });

  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event]
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined) {
      // option not specified: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.x)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes
      var focusableNodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.y)(container, config.tabbableOptions);
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          // NOTE: If tabindex is positive (in order to manipulate the tab order separate
          //  from the DOM order), this __will not work__ because the list of focusableNodes,
          //  while it contains tabbable nodes, does not sort its nodes in any order other
          //  than DOM order, because it can't: Where would you place focusable (but not
          //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
          // Support for positive tabindex is already broken and hard to manage (possibly
          //  not supportable, TBD), so this isn't going to make things worse than they
          //  already are, and at least makes things better for the majority of cases where
          //  tabindex is either 0/unset or negative.
          // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
          var nodeIdx = focusableNodes.findIndex(function (n) {
            return n === node;
          });
          if (nodeIdx < 0) {
            return undefined;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function (n) {
              return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.z)(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
            return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.z)(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };
  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target, e) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var target = getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.A)(target, config.tabbableOptions) && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.z)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.A)(target, config.tabbableOptions) && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.z)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };

  var checkKey = function checkKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
      return;
    }
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 ? void 0 : onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        onPostActivate === null || onPostActivate === void 0 ? void 0 : onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 ? void 0 : onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 ? void 0 : onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 ? void 0 : onPause();
      removeListeners();
      onPostPause === null || onPostPause === void 0 ? void 0 : onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 ? void 0 : onUnpause();
      updateTabbableNodes();
      addListeners();
      onPostUnpause === null || onPostUnpause === void 0 ? void 0 : onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};

const trapStack = [];
/**
 * Helper to set up the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param options
 */
function connectFocusTrap(component, options) {
  const { el } = component;
  const focusTrapNode = options?.focusTrapEl || el;
  if (!focusTrapNode) {
    return;
  }
  const focusTrapOptions = {
    clickOutsideDeactivates: true,
    escapeDeactivates: false,
    fallbackFocus: focusTrapNode,
    setReturnFocus: (el) => {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.j)(el);
      return false;
    },
    ...options?.focusTrapOptions,
    // the following options are not overrideable
    document: el.ownerDocument,
    tabbableOptions: _dom_js__WEBPACK_IMPORTED_MODULE_0__.B,
    trapStack
  };
  component.focusTrap = createFocusTrap(focusTrapNode, focusTrapOptions);
}
/**
 * Helper to activate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap activate options.
 */
function activateFocusTrap(component, options) {
  if (!component.focusTrapDisabled) {
    component.focusTrap?.activate(options);
  }
}
/**
 * Helper to deactivate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap deactivate options.
 */
function deactivateFocusTrap(component, options) {
  component.focusTrap?.deactivate(options);
}
/**
 * Helper to update the element(s) that are used within the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @example
 * const modal = document.querySelector("calcite-modal");
 * const input = document.createElement("calcite-input");
 * content.appendChild(input);
 * await input.componentOnReady();
 * await modal.updateFocusTrapElements();
 * requestAnimationFrame(() => input.setFocus());
 */
function updateFocusTrapElements(component) {
  component.focusTrap?.updateContainerElements(component.el);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/panel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/panel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Panel),
/* harmony export */   "S": () => (/* binding */ SLOTS),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */















const CSS = {
  actionBarContainer: "action-bar-container",
  backButton: "back-button",
  container: "container",
  header: "header",
  heading: "heading",
  summary: "summary",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  contentContainer: "content-container",
  contentHeight: "content-height",
  fabContainer: "fab-container",
  footer: "footer"
};
const ICONS = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
const SLOTS = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
};

const panelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.action-bar-container{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;border-block-end-color:var(--calcite-ui-border-3)}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;padding:var(--calcite-panel-footer-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";

const Panel = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePanelClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calcitePanelClose", 6);
    this.calcitePanelScroll = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calcitePanelScroll", 6);
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => this.resizeHandler());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.resizeHandler = () => {
      const { panelScrollEl } = this;
      if (!panelScrollEl ||
        typeof panelScrollEl.scrollHeight !== "number" ||
        typeof panelScrollEl.offsetHeight !== "number") {
        return;
      }
      panelScrollEl.tabIndex = panelScrollEl.scrollHeight > panelScrollEl.offsetHeight ? 0 : -1;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.setCloseRef = (node) => {
      this.closeButtonEl = node;
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.panelKeyDownHandler = (event) => {
      if (this.closable && event.key === "Escape" && !event.defaultPrevented) {
        this.close();
        event.preventDefault();
      }
    };
    this.close = () => {
      this.closed = true;
      this.calcitePanelClose.emit();
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.handleHeaderActionsStartSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasStartActions = !!elements.length;
    };
    this.handleHeaderActionsEndSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasEndActions = !!elements.length;
    };
    this.handleHeaderMenuActionsSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasMenuItems = !!elements.length;
    };
    this.handleActionBarSlotChange = (event) => {
      const actionBars = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
      actionBars.forEach((actionBar) => (actionBar.layout = "horizontal"));
      this.hasActionBar = !!actionBars.length;
    };
    this.handleHeaderContentSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasHeaderContent = !!elements.length;
    };
    this.handleFooterSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFooterContent = !!elements.length;
    };
    this.handleFooterActionsSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFooterActions = !!elements.length;
    };
    this.handleFabSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFab = !!elements.length;
    };
    this.setPanelScrollEl = (el) => {
      this.panelScrollEl = el;
      this.resizeObserver?.disconnect();
      if (el) {
        this.resizeObserver?.observe(el);
        this.resizeHandler();
      }
    };
    this.closed = false;
    this.disabled = false;
    this.closable = false;
    this.headingLevel = undefined;
    this.loading = false;
    this.heading = undefined;
    this.description = undefined;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.hasStartActions = false;
    this.hasEndActions = false;
    this.hasMenuItems = false;
    this.hasHeaderContent = false;
    this.hasActionBar = false;
    this.hasFooterContent = false;
    this.hasFooterActions = false;
    this.hasFab = false;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.resizeObserver?.disconnect();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(this.containerEl);
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options
   */
  async scrollContentTo(options) {
    this.panelScrollEl?.scrollTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading, headingLevel, description, hasHeaderContent } = this;
    const headingNode = heading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
    const descriptionNode = description ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("span", { class: CSS.description }, description) : null;
    return !hasHeaderContent && (headingNode || descriptionNode) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.headerContent, key: "header-content" }, headingNode, descriptionNode)) : null;
  }
  renderActionBar() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.actionBarContainer, hidden: !this.hasActionBar }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.actionBar, onSlotchange: this.handleActionBarSlotChange })));
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerContent, onSlotchange: this.handleHeaderContentSlotChange })));
  }
  renderHeaderStartActions() {
    const { hasStartActions } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: { [CSS.headerActionsStart]: true, [CSS.headerActions]: true }, hidden: !hasStartActions, key: "header-actions-start" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange })));
  }
  renderHeaderActionsEnd() {
    const { close, hasEndActions, messages, closable, hasMenuItems } = this;
    const text = messages.close;
    const closableNode = closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action", { "aria-label": text, "data-test": "close", icon: ICONS.close, onClick: close, text: text,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCloseRef })) : null;
    const slotNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }));
    const showContainer = hasEndActions || closableNode || hasMenuItems;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: { [CSS.headerActionsEnd]: true, [CSS.headerActions]: true }, hidden: !showContainer, key: "header-actions-end" }, slotNode, this.renderMenu(), closableNode));
  }
  renderMenu() {
    const { hasMenuItems, messages, menuOpen } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !hasMenuItems, key: "menu", label: messages.options, open: menuOpen, placement: "bottom-end" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action", { icon: ICONS.menu, slot: _action_menu_js__WEBPACK_IMPORTED_MODULE_4__.S.trigger, text: messages.options }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange })));
  }
  renderHeaderNode() {
    const { hasHeaderContent, hasStartActions, hasEndActions, closable, hasMenuItems } = this;
    const headerContentNode = this.renderHeaderContent();
    const showHeader = hasHeaderContent ||
      headerContentNode ||
      hasStartActions ||
      hasEndActions ||
      closable ||
      hasMenuItems;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("header", { class: CSS.header, hidden: !showHeader }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), headerContentNode, this.renderHeaderActionsEnd()));
  }
  renderFooterNode() {
    const { hasFooterContent, hasFooterActions } = this;
    const showFooter = hasFooterContent || hasFooterActions;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("footer", { class: CSS.footer, hidden: !showFooter }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { key: "footer-slot", name: SLOTS.footer, onSlotchange: this.handleFooterSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { key: "footer-actions-slot", name: SLOTS.footerActions, onSlotchange: this.handleFooterActionsSlotChange })));
  }
  renderContent() {
    const { hasFab } = this;
    const defaultSlotNode = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { key: "default-slot" });
    const containerNode = hasFab ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("section", { class: CSS.contentContainer }, defaultSlotNode)) : (defaultSlotNode);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: {
        [CSS.contentWrapper]: true,
        [CSS.contentContainer]: !hasFab,
        [CSS.contentHeight]: hasFab
      }, onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setPanelScrollEl }, containerNode, this.renderFab()));
  }
  renderFab() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.fabContainer, hidden: !this.hasFab }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.fab, onSlotchange: this.handleFabSlotChange })));
  }
  render() {
    const { loading, panelKeyDownHandler, closed, closable } = this;
    const panelNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("article", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), class: CSS.container, hidden: closed, onKeyDown: panelKeyDownHandler, tabIndex: closable ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerRef }, this.renderHeaderNode(), this.renderActionBar(), this.renderContent(), this.renderFooterNode()));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.Fragment, null, loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-scrim", { loading: loading }) : null, panelNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return panelCss; }
}, [1, "calcite-panel", {
    "closed": [1540],
    "disabled": [516],
    "closable": [516],
    "headingLevel": [514, "heading-level"],
    "loading": [516],
    "heading": [1],
    "description": [1],
    "menuOpen": [516, "menu-open"],
    "messageOverrides": [1040],
    "messages": [1040],
    "hasStartActions": [32],
    "hasEndActions": [32],
    "hasMenuItems": [32],
    "hasHeaderContent": [32],
    "hasActionBar": [32],
    "hasFooterContent": [32],
    "hasFooterActions": [32],
    "hasFab": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "setFocus": [64],
    "scrollContentTo": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Panel);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/popover.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/popover.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Popover),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _FloatingArrow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FloatingArrow.js */ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */

















const CSS = {
  container: "container",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContent: "header-content",
  heading: "heading"
};
const defaultPopoverPlacement = "auto";
const ARIA_CONTROLS = "aria-controls";
const ARIA_EXPANDED = "aria-expanded";

class PopoverManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new Map();
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryPopover = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.togglePopovers = (event) => {
      const composedPath = event.composedPath();
      const togglePopover = this.queryPopover(composedPath);
      if (togglePopover && !togglePopover.triggerDisabled) {
        togglePopover.open = !togglePopover.open;
      }
      Array.from(this.registeredElements.values())
        .filter((popover) => popover !== togglePopover && popover.autoClose && popover.open && !composedPath.includes(popover))
        .forEach((popover) => (popover.open = false));
    };
    this.keyHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === "Escape") {
        this.closeAllPopovers();
      }
      else if ((0,_key_js__WEBPACK_IMPORTED_MODULE_8__.i)(event.key)) {
        this.togglePopovers(event);
      }
    };
    this.clickHandler = (event) => {
      if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
        this.togglePopovers(event);
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, popover) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, popover);
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((popover) => (popover.open = false));
  }
  addListeners() {
    document.addEventListener("pointerdown", this.clickHandler, { capture: true });
    document.addEventListener("keydown", this.keyHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("pointerdown", this.clickHandler, { capture: true });
    document.removeEventListener("keydown", this.keyHandler, { capture: true });
  }
}

const popoverCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}";

const manager = new PopoverManager();
const Popover = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePopoverBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calcitePopoverBeforeClose", 6);
    this.calcitePopoverClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calcitePopoverClose", 6);
    this.calcitePopoverBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calcitePopoverBeforeOpen", 6);
    this.calcitePopoverOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.createEvent)(this, "calcitePopoverOpen", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_10__.c)("mutation", () => this.updateFocusTrapElements());
    this.guid = `calcite-popover-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    this.openTransitionProp = "opacity";
    this.hasLoaded = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.f)(flipPlacements, el)
        : null;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, this.effectiveReferenceElement, this.el);
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (warn && referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_EXPANDED, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(open));
      }
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
        effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.hide = () => {
      this.open = false;
    };
    this.storeArrowEl = (el) => {
      this.arrowEl = el;
      this.reposition(true);
    };
    this.autoClose = false;
    this.closable = false;
    this.flipDisabled = false;
    this.focusTrapDisabled = false;
    this.pointerDisabled = false;
    this.flipPlacements = undefined;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.offsetDistance = _floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.b;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = defaultPopoverPlacement;
    this.referenceElement = undefined;
    this.scale = "m";
    this.triggerDisabled = false;
    this.effectiveLocale = "";
    this.floatingLayout = "vertical";
    this.effectiveReferenceElement = undefined;
    this.defaultMessages = undefined;
  }
  handlefocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  offsetDistanceOffsetHandler() {
    this.reposition(true);
  }
  offsetSkiddingHandler() {
    this.reposition(true);
  }
  openHandler(value) {
    if (value) {
      this.reposition(true);
    }
    this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
    this.reposition(true);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setFilteredPlacements();
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    this.setUpReferenceElement(this.hasLoaded);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_9__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition();
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { el, effectiveReferenceElement, placement, overlayPositioning, flipDisabled, filteredFlipPlacements, offsetDistance, offsetSkidding, arrowEl } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      flipDisabled,
      flipPlacements: filteredFlipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "popover"
    }, delayed);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.forceUpdate)(this.el);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.k)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.u)(el, { id: referenceElement })
      : referenceElement) || null);
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages, closable } = this;
    return closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.closeButtonContainer, key: CSS.closeButtonContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-action", { appearance: "transparent", class: CSS.closeButton, onClick: this.hide, scale: this.scale, text: messages.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : this.scale })))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
    return headingNode ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.header, key: CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, pointerDisabled, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !pointerDisabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)(_FloatingArrow_js__WEBPACK_IMPORTED_MODULE_11__.F, { floatingLayout: floatingLayout, key: "floating-arrow",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeArrowEl })) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: {
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.F.animation]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.F.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, arrowNode, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: {
        [CSS.hasHeader]: !!heading,
        [CSS.container]: true
      } }, this.renderHeader(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_15__.h)("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "focusTrapDisabled": ["handlefocusTrapDisabled"],
    "flipPlacements": ["flipPlacementsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return popoverCss; }
}, [1, "calcite-popover", {
    "autoClose": [516, "auto-close"],
    "closable": [516],
    "flipDisabled": [516, "flip-disabled"],
    "focusTrapDisabled": [516, "focus-trap-disabled"],
    "pointerDisabled": [516, "pointer-disabled"],
    "flipPlacements": [16],
    "heading": [1],
    "headingLevel": [514, "heading-level"],
    "label": [1],
    "messageOverrides": [1040],
    "messages": [1040],
    "offsetDistance": [514, "offset-distance"],
    "offsetSkidding": [514, "offset-skidding"],
    "open": [1540],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "referenceElement": [1, "reference-element"],
    "scale": [513],
    "triggerDisabled": [516, "trigger-disabled"],
    "effectiveLocale": [32],
    "floatingLayout": [32],
    "effectiveReferenceElement": [32],
    "defaultMessages": [32],
    "reposition": [64],
    "setFocus": [64],
    "updateFocusTrapElements": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-popover", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Popover);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_13__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_14__.d)();
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODE3MjllZDI3MDIxNTEzMjU4ZjgyZjNjOTE4NTRhZDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMseUVBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21IO0FBQzlEO0FBQ3lDO0FBQ3hEO0FBQ1U7QUFDMkQ7QUFDbEQ7QUFDRjtBQUNFO0FBQ0M7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxzQkFBc0IsYUFBYSxzQkFBc0IsZ0RBQWdELHFDQUFxQywrQkFBK0IsZ0NBQWdDLGdCQUFnQixhQUFhLDBCQUEwQix3Q0FBd0MseUVB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O0FBQ0E7QUFDQSxxQkFBcUIsMENBQVU7QUFDL0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQkFBbUIsMENBQVU7QUFDN0IsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZFQUE2RSwwQ0FBVyxxQ0FBcUMsMENBQVU7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRFQUE0RSwwQ0FBVyxxQ0FBcUMsMENBQVU7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFhO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLDZDQUFtQjtBQUN2QixJQUFJLDBDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EsaUNBQWlDLHlFQUFDLHFCQUFxQix5QkFBeUI7QUFDaEYsc0NBQXNDLHlFQUFDLFVBQVUsb0JBQW9CLEVBQUUseUVBQUM7QUFDeEUsWUFBWSx5RUFBQyxVQUFVLGtCQUFrQjtBQUN6QztBQUNBLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVnRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9IZWFkaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9hY3Rpb24tbWVudS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtZmxvdy1pdGVtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9mb2N1c1RyYXBDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3BhbmVsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9wb3BvdmVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9zY3JpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gY29uc3RyYWluSGVhZGluZ0xldmVsKGxldmVsKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwobGV2ZWwpLCAxKSwgNik7XG59XG5jb25zdCBIZWFkaW5nID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuICBjb25zdCBIZWFkaW5nVGFnID0gcHJvcHMubGV2ZWwgPyBgaCR7cHJvcHMubGV2ZWx9YCA6IFwiZGl2XCI7XG4gIGRlbGV0ZSBwcm9wcy5sZXZlbDtcbiAgcmV0dXJuIGgoSGVhZGluZ1RhZywgeyAuLi5wcm9wcyB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBIZWFkaW5nIGFzIEgsIGNvbnN0cmFpbkhlYWRpbmdMZXZlbCBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEZyYWdtZW50IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRSb3VuZFJvYmluSW5kZXggfSBmcm9tICcuL2FycmF5LmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBqIGFzIGZvY3VzRWxlbWVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vYWN0aW9uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3BvcG92ZXIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIG1lbnU6IFwibWVudVwiLFxuICBkZWZhdWx0VHJpZ2dlcjogXCJkZWZhdWx0LXRyaWdnZXJcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgdHJpZ2dlcjogXCJ0cmlnZ2VyXCJcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgbWVudTogXCJlbGxpcHNpc1wiXG59O1xuXG5jb25zdCBhY3Rpb25NZW51Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0ubWVudSA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24pe21hcmdpbjowLjEyNXJlbTtkaXNwbGF5OmZsZXg7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0ubWVudSA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb25bYWN0aXZlXSl7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7b3V0bGluZS1vZmZzZXQ6MHB4fS5kZWZhdWx0LXRyaWdnZXJ7cG9zaXRpb246cmVsYXRpdmU7YmxvY2stc2l6ZToxMDAlO2ZsZXg6MCAxIGF1dG87YWxpZ24tc2VsZjpzdHJldGNofXNsb3RbbmFtZT10cmlnZ2VyXTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbiksY2FsY2l0ZS1hY3Rpb246OnNsb3R0ZWQoW3Nsb3Q9dHJpZ2dlcl0pe3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6MTAwJTtmbGV4OjAgMSBhdXRvO2FsaWduLXNlbGY6c3RyZXRjaH0ubWVudXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9XCI7XG5cbmNvbnN0IFNVUFBPUlRFRF9NRU5VX05BVl9LRVlTID0gW1wiQXJyb3dVcFwiLCBcIkFycm93RG93blwiLCBcIkVuZFwiLCBcIkhvbWVcIl07XG5jb25zdCBBY3Rpb25NZW51ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVBY3Rpb25NZW51T3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFjdGlvbk1lbnVPcGVuXCIsIDYpO1xuICAgIHRoaXMuYWN0aW9uRWxlbWVudHMgPSBbXTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1hY3Rpb24tbWVudS0ke2d1aWQoKX1gO1xuICAgIHRoaXMubWVudUlkID0gYCR7dGhpcy5ndWlkfS1tZW51YDtcbiAgICB0aGlzLm1lbnVCdXR0b25JZCA9IGAke3RoaXMuZ3VpZH0tbWVudS1idXR0b25gO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgQ29tcG9uZW50IE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5jb25uZWN0TWVudUJ1dHRvbkVsID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBtZW51QnV0dG9uSWQsIG1lbnVJZCwgb3BlbiwgbGFiZWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBtZW51QnV0dG9uRWwgPSB0aGlzLnNsb3R0ZWRNZW51QnV0dG9uRWwgfHwgdGhpcy5kZWZhdWx0TWVudUJ1dHRvbkVsO1xuICAgICAgaWYgKHRoaXMubWVudUJ1dHRvbkVsID09PSBtZW51QnV0dG9uRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXNjb25uZWN0TWVudUJ1dHRvbkVsKCk7XG4gICAgICB0aGlzLm1lbnVCdXR0b25FbCA9IG1lbnVCdXR0b25FbDtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICAgIGlmICghbWVudUJ1dHRvbkVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1lbnVCdXR0b25FbC5hY3RpdmUgPSBvcGVuO1xuICAgICAgbWVudUJ1dHRvbkVsLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgbWVudUlkKTtcbiAgICAgIG1lbnVCdXR0b25FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRvQXJpYUJvb2xlYW4ob3BlbikpO1xuICAgICAgbWVudUJ1dHRvbkVsLnNldEF0dHJpYnV0ZShcImFyaWEtaGFzcG9wdXBcIiwgXCJ0cnVlXCIpO1xuICAgICAgaWYgKCFtZW51QnV0dG9uRWwuaWQpIHtcbiAgICAgICAgbWVudUJ1dHRvbkVsLmlkID0gbWVudUJ1dHRvbklkO1xuICAgICAgfVxuICAgICAgaWYgKCFtZW51QnV0dG9uRWwubGFiZWwpIHtcbiAgICAgICAgbWVudUJ1dHRvbkVsLmxhYmVsID0gbGFiZWw7XG4gICAgICB9XG4gICAgICBpZiAoIW1lbnVCdXR0b25FbC50ZXh0KSB7XG4gICAgICAgIG1lbnVCdXR0b25FbC50ZXh0ID0gbGFiZWw7XG4gICAgICB9XG4gICAgICBtZW51QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMubWVudUJ1dHRvbkNsaWNrKTtcbiAgICAgIG1lbnVCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm1lbnVCdXR0b25LZXlEb3duKTtcbiAgICB9O1xuICAgIHRoaXMuZGlzY29ubmVjdE1lbnVCdXR0b25FbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgbWVudUJ1dHRvbkVsIH0gPSB0aGlzO1xuICAgICAgaWYgKCFtZW51QnV0dG9uRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbWVudUJ1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLm1lbnVCdXR0b25DbGljayk7XG4gICAgICBtZW51QnV0dG9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5tZW51QnV0dG9uS2V5RG93bik7XG4gICAgfTtcbiAgICB0aGlzLnNldE1lbnVCdXR0b25FbCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IGV2ZW50LnRhcmdldFxuICAgICAgICAuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtYWN0aW9uXCIpKTtcbiAgICAgIHRoaXMuc2xvdHRlZE1lbnVCdXR0b25FbCA9IGFjdGlvbnNbMF07XG4gICAgICB0aGlzLmNvbm5lY3RNZW51QnV0dG9uRWwoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RGVmYXVsdE1lbnVCdXR0b25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5kZWZhdWx0TWVudUJ1dHRvbkVsID0gZWw7XG4gICAgICB0aGlzLmNvbm5lY3RNZW51QnV0dG9uRWwoKTtcbiAgICB9O1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlQ2FsY2l0ZUFjdGlvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLm1lbnVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZU9wZW4oKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlVG9vbHRpcCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdG9vbHRpcHMgPSBldmVudC50YXJnZXRcbiAgICAgICAgLmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KVxuICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLXRvb2x0aXBcIikpO1xuICAgICAgdGhpcy50b29sdGlwRWwgPSB0b29sdGlwc1swXTtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VG9vbHRpcFJlZmVyZW5jZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHRvb2x0aXBFbCwgZXhwYW5kZWQsIG1lbnVCdXR0b25FbCwgb3BlbiB9ID0gdGhpcztcbiAgICAgIGlmICh0b29sdGlwRWwpIHtcbiAgICAgICAgdG9vbHRpcEVsLnJlZmVyZW5jZUVsZW1lbnQgPSAhZXhwYW5kZWQgJiYgIW9wZW4gPyBtZW51QnV0dG9uRWwgOiBudWxsO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVBY3Rpb24gPSAoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBndWlkLCBhY3RpdmVNZW51SXRlbUluZGV4IH0gPSB0aGlzO1xuICAgICAgY29uc3QgaWQgPSBgJHtndWlkfS1hY3Rpb24tJHtpbmRleH1gO1xuICAgICAgYWN0aW9uLnRhYkluZGV4ID0gLTE7XG4gICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm1lbnVpdGVtXCIpO1xuICAgICAgaWYgKCFhY3Rpb24uaWQpIHtcbiAgICAgICAgYWN0aW9uLmlkID0gaWQ7XG4gICAgICB9XG4gICAgICBhY3Rpb24uYWN0aXZlID0gaW5kZXggPT09IGFjdGl2ZU1lbnVJdGVtSW5kZXg7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMgPSAoYWN0aW9ucykgPT4ge1xuICAgICAgYWN0aW9ucz8uZm9yRWFjaCh0aGlzLnVwZGF0ZUFjdGlvbik7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb25cIikpO1xuICAgICAgdGhpcy5hY3Rpb25FbGVtZW50cyA9IGFjdGlvbnM7XG4gICAgfTtcbiAgICB0aGlzLm1lbnVCdXR0b25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCB7IGFjdGlvbkVsZW1lbnRzLCBhY3RpdmVNZW51SXRlbUluZGV4LCBvcGVuIH0gPSB0aGlzO1xuICAgICAgaWYgKCFhY3Rpb25FbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShrZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghb3Blbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlT3BlbigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25FbGVtZW50c1thY3RpdmVNZW51SXRlbUluZGV4XTtcbiAgICAgICAgYWN0aW9uID8gYWN0aW9uLmNsaWNrKCkgOiB0aGlzLnRvZ2dsZU9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4oZmFsc2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZUFjdGlvbk5hdmlnYXRpb24oZXZlbnQsIGtleSwgYWN0aW9uRWxlbWVudHMpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25OYXZpZ2F0aW9uID0gKGV2ZW50LCBrZXksIGFjdGlvbnMpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkS2V5KGtleSwgU1VQUE9SVEVEX01FTlVfTkFWX0tFWVMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4oKTtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJIb21lXCIgfHwga2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSBcIkVuZFwiIHx8IGtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSBhY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJIb21lXCIpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiRW5kXCIpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gYWN0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4O1xuICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gZ2V0Um91bmRSb2JpbkluZGV4KE1hdGgubWF4KGN1cnJlbnRJbmRleCAtIDEsIC0xKSwgYWN0aW9ucy5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSBnZXRSb3VuZFJvYmluSW5kZXgoY3VycmVudEluZGV4ICsgMSwgYWN0aW9ucy5sZW5ndGgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVPcGVuRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FsY2l0ZVBvcG92ZXJPcGVuXCIsIHRoaXMudG9nZ2xlT3BlbkVuZCk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZU9wZW4gPSAodmFsdWUgPSAhdGhpcy5vcGVuKSA9PiB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlUG9wb3Zlck9wZW5cIiwgdGhpcy50b2dnbGVPcGVuRW5kKTtcbiAgICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnBsYWNlbWVudCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZW51QnV0dG9uRWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gLTE7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZGlzY29ubmVjdE1lbnVCdXR0b25FbCgpO1xuICB9XG4gIGV4cGFuZGVkSGFuZGxlcigpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gIH1cbiAgb3BlbkhhbmRsZXIob3Blbikge1xuICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IHRoaXMub3BlbiA/IDAgOiAtMTtcbiAgICBpZiAodGhpcy5tZW51QnV0dG9uRWwpIHtcbiAgICAgIHRoaXMubWVudUJ1dHRvbkVsLmFjdGl2ZSA9IG9wZW47XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUFjdGlvbk1lbnVPcGVuLmVtaXQoKTtcbiAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlQWN0aW9uTWVudU9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIGlmIChjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgYWN0aXZlTWVudUl0ZW1JbmRleEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKHRoaXMuYWN0aW9uRWxlbWVudHMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBmb2N1c0VsZW1lbnQodGhpcy5tZW51QnV0dG9uRWwpO1xuICB9XG4gIHJlbmRlck1lbnVCdXR0b24oKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgc2NhbGUsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1lbnVCdXR0b25TbG90ID0gKGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudHJpZ2dlciwgb25TbG90Y2hhbmdlOiB0aGlzLnNldE1lbnVCdXR0b25FbCB9LCBoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBjbGFzczogQ1NTLmRlZmF1bHRUcmlnZ2VyLCBpY29uOiBJQ09OUy5tZW51LCBzY2FsZTogc2NhbGUsIHRleHQ6IGxhYmVsLCB0ZXh0RW5hYmxlZDogZXhwYW5kZWQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXREZWZhdWx0TWVudUJ1dHRvbkVsIH0pKSk7XG4gICAgcmV0dXJuIG1lbnVCdXR0b25TbG90O1xuICB9XG4gIHJlbmRlck1lbnVJdGVtcygpIHtcbiAgICBjb25zdCB7IGFjdGlvbkVsZW1lbnRzLCBhY3RpdmVNZW51SXRlbUluZGV4LCBvcGVuLCBtZW51SWQsIG1lbnVCdXR0b25FbCwgbGFiZWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICBjb25zdCBhY3RpdmVBY3Rpb24gPSBhY3Rpb25FbGVtZW50c1thY3RpdmVNZW51SXRlbUluZGV4XTtcbiAgICBjb25zdCBhY3RpdmVEZXNjZW5kYW50SWQgPSBhY3RpdmVBY3Rpb24/LmlkIHx8IG51bGw7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1wb3BvdmVyXCIsIHsgZmxpcFBsYWNlbWVudHM6IGZsaXBQbGFjZW1lbnRzLCBmb2N1c1RyYXBEaXNhYmxlZDogdHJ1ZSwgbGFiZWw6IGxhYmVsLCBvZmZzZXREaXN0YW5jZTogMCwgb3Blbjogb3Blbiwgb3ZlcmxheVBvc2l0aW9uaW5nOiBvdmVybGF5UG9zaXRpb25pbmcsIHBsYWNlbWVudDogcGxhY2VtZW50LCBwb2ludGVyRGlzYWJsZWQ6IHRydWUsIHJlZmVyZW5jZUVsZW1lbnQ6IG1lbnVCdXR0b25FbCB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogYWN0aXZlRGVzY2VuZGFudElkLCBcImFyaWEtbGFiZWxsZWRieVwiOiBtZW51QnV0dG9uRWw/LmlkLCBjbGFzczogQ1NTLm1lbnUsIGlkOiBtZW51SWQsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2FsY2l0ZUFjdGlvbkNsaWNrLCByb2xlOiBcIm1lbnVcIiwgdGFiSW5kZXg6IC0xIH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pKSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIHRoaXMucmVuZGVyTWVudUJ1dHRvbigpLCB0aGlzLnJlbmRlck1lbnVJdGVtcygpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRvb2x0aXAsIG9uU2xvdGNoYW5nZTogdGhpcy51cGRhdGVUb29sdGlwIH0pKSk7XG4gIH1cbiAgaXNWYWxpZEtleShrZXksIHN1cHBvcnRlZEtleXMpIHtcbiAgICByZXR1cm4gISFzdXBwb3J0ZWRLZXlzLmZpbmQoKGspID0+IGsgPT09IGtleSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZXhwYW5kZWRcIjogW1wiZXhwYW5kZWRIYW5kbGVyXCJdLFxuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcImFjdGl2ZU1lbnVJdGVtSW5kZXhcIjogW1wiYWN0aXZlTWVudUl0ZW1JbmRleEhhbmRsZXJcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gYWN0aW9uTWVudUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1hY3Rpb24tbWVudVwiLCB7XG4gICAgXCJleHBhbmRlZFwiOiBbNTE2XSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFsxNl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbNTEzLCBcIm92ZXJsYXktcG9zaXRpb25pbmdcIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogWzUxM10sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcIm1lbnVCdXR0b25FbFwiOiBbMzJdLFxuICAgIFwiYWN0aXZlTWVudUl0ZW1JbmRleFwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzksIFwicG9pbnRlcmRvd25cIiwgXCJjbG9zZUNhbGNpdGVBY3Rpb25NZW51T25DbGlja1wiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1wb3BvdmVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQWN0aW9uTWVudSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcG9wb3ZlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQWN0aW9uTWVudSBhcyBBLCBTTE9UUyBhcyBTLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5mdW5jdGlvbiBnZXRSb3VuZFJvYmluSW5kZXgoaW5kZXgsIHRvdGFsKSB7XG4gIHJldHVybiAoaW5kZXggKyB0b3RhbCkgJSB0b3RhbDtcbn1cblxuZXhwb3J0IHsgZ2V0Um91bmRSb2JpbkluZGV4IGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMkMSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL3BhbmVsLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ5IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDggfSBmcm9tICcuL2FjdGlvbi1tZW51LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ3IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL3BvcG92ZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL3NjcmltLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi90b29sdGlwLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBiYWNrQnV0dG9uOiBcImJhY2stYnV0dG9uXCJcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgYmFja0xlZnQ6IFwiY2hldnJvbi1sZWZ0XCIsXG4gIGJhY2tSaWdodDogXCJjaGV2cm9uLXJpZ2h0XCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uQmFyOiBcImFjdGlvbi1iYXJcIixcbiAgaGVhZGVyQWN0aW9uc1N0YXJ0OiBcImhlYWRlci1hY3Rpb25zLXN0YXJ0XCIsXG4gIGhlYWRlckFjdGlvbnNFbmQ6IFwiaGVhZGVyLWFjdGlvbnMtZW5kXCIsXG4gIGhlYWRlck1lbnVBY3Rpb25zOiBcImhlYWRlci1tZW51LWFjdGlvbnNcIixcbiAgaGVhZGVyQ29udGVudDogXCJoZWFkZXItY29udGVudFwiLFxuICBmYWI6IFwiZmFiXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgZm9vdGVyQWN0aW9uczogXCJmb290ZXItYWN0aW9uc1wiXG59O1xuXG5jb25zdCBmbG93SXRlbUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbjstLWNhbGNpdGUtZmxvdy1pdGVtLWZvb3Rlci1wYWRkaW5nOjAuNXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmJhY2stYnV0dG9ue2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHh9Y2FsY2l0ZS1wYW5lbHstLWNhbGNpdGUtcGFuZWwtZm9vdGVyLXBhZGRpbmc6dmFyKC0tY2FsY2l0ZS1mbG93LWl0ZW0tZm9vdGVyLXBhZGRpbmcpfVwiO1xuXG5jb25zdCBGbG93SXRlbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1CYWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRmxvd0l0ZW1CYWNrXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUZsb3dJdGVtU2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRmxvd0l0ZW1TY3JvbGxcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1DbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUZsb3dJdGVtQ2xvc2VcIiwgNik7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVQYW5lbFNjcm9sbCA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNhbGNpdGVGbG93SXRlbVNjcm9sbC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVBhbmVsQ2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1DbG9zZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmJhY2tCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUZsb3dJdGVtQmFjay5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEJhY2tSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5iYWNrQnV0dG9uRWwgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5zZXRDb250YWluZXJSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXJFbCA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJlZm9yZUJhY2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dCYWNrQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5iYWNrQnV0dG9uRWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgY29uc3QgeyBiYWNrQnV0dG9uRWwsIGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGlmIChiYWNrQnV0dG9uRWwpIHtcbiAgICAgIGJhY2tCdXR0b25FbC5zZXRGb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250YWluZXJFbD8uc2V0Rm9jdXMoKTtcbiAgfVxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0byBhIHNwZWNpZmllZCBzZXQgb2YgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIG15Q2FsY2l0ZUZsb3dJdGVtLnNjcm9sbENvbnRlbnRUbyh7XG4gICAqICAgbGVmdDogMCwgLy8gU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGFsb25nIHRoZSBYIGF4aXMgdG8gc2Nyb2xsIHRoZSB3aW5kb3cgb3IgZWxlbWVudC5cbiAgICogICB0b3A6IDAsIC8vIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBpeGVscyBhbG9uZyB0aGUgWSBheGlzIHRvIHNjcm9sbCB0aGUgd2luZG93IG9yIGVsZW1lbnRcbiAgICogICBiZWhhdmlvcjogXCJhdXRvXCIgLy8gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYW5pbWF0ZSBzbW9vdGhseSAoc21vb3RoKSwgb3IgaGFwcGVuIGluc3RhbnRseSBpbiBhIHNpbmdsZSBqdW1wIChhdXRvLCB0aGUgZGVmYXVsdCB2YWx1ZSkuXG4gICAqIH0pO1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgYXN5bmMgc2Nyb2xsQ29udGVudFRvKG9wdGlvbnMpIHtcbiAgICBhd2FpdCB0aGlzLmNvbnRhaW5lckVsPy5zY3JvbGxDb250ZW50VG8ob3B0aW9ucyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckJhY2tCdXR0b24oKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBydGwgPSBnZXRFbGVtZW50RGlyKGVsKSA9PT0gXCJydGxcIjtcbiAgICBjb25zdCB7IHNob3dCYWNrQnV0dG9uLCBiYWNrQnV0dG9uQ2xpY2ssIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxhYmVsID0gbWVzc2FnZXMuYmFjaztcbiAgICBjb25zdCBpY29uID0gcnRsID8gSUNPTlMuYmFja1JpZ2h0IDogSUNPTlMuYmFja0xlZnQ7XG4gICAgcmV0dXJuIHNob3dCYWNrQnV0dG9uID8gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgY2xhc3M6IENTUy5iYWNrQnV0dG9uLCBpY29uOiBpY29uLCBrZXk6IFwiZmxvdy1iYWNrLWJ1dHRvblwiLCBvbkNsaWNrOiBiYWNrQnV0dG9uQ2xpY2ssIHNjYWxlOiBcInNcIiwgc2xvdDogXCJoZWFkZXItYWN0aW9ucy1zdGFydFwiLCB0ZXh0OiBsYWJlbCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEJhY2tSZWYgfSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbG9zYWJsZSwgY2xvc2VkLCBkZXNjcmlwdGlvbiwgZGlzYWJsZWQsIGhlYWRpbmcsIGhlYWRpbmdMZXZlbCwgbG9hZGluZywgbWVudU9wZW4sIG1lc3NhZ2VzLCBiYWNrQnV0dG9uRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgbGFiZWwgPSBtZXNzYWdlcy5iYWNrO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiY2FsY2l0ZS1wYW5lbFwiLCB7IGNsb3NhYmxlOiBjbG9zYWJsZSwgY2xvc2VkOiBjbG9zZWQsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBoZWFkaW5nOiBoZWFkaW5nLCBoZWFkaW5nTGV2ZWw6IGhlYWRpbmdMZXZlbCwgbG9hZGluZzogbG9hZGluZywgbWVudU9wZW46IG1lbnVPcGVuLCBtZXNzYWdlT3ZlcnJpZGVzOiBtZXNzYWdlcywgb25DYWxjaXRlUGFuZWxDbG9zZTogdGhpcy5oYW5kbGVQYW5lbENsb3NlLCBvbkNhbGNpdGVQYW5lbFNjcm9sbDogdGhpcy5oYW5kbGVQYW5lbFNjcm9sbCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENvbnRhaW5lclJlZiB9LCB0aGlzLnJlbmRlckJhY2tCdXR0b24oKSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25CYXIsIHNsb3Q6IFNMT1RTJDEuYWN0aW9uQmFyIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckFjdGlvbnNTdGFydCwgc2xvdDogU0xPVFMkMS5oZWFkZXJBY3Rpb25zU3RhcnQgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyQWN0aW9uc0VuZCwgc2xvdDogU0xPVFMkMS5oZWFkZXJBY3Rpb25zRW5kIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckNvbnRlbnQsIHNsb3Q6IFNMT1RTJDEuaGVhZGVyQ29udGVudCB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJNZW51QWN0aW9ucywgc2xvdDogU0xPVFMkMS5oZWFkZXJNZW51QWN0aW9ucyB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mYWIsIHNsb3Q6IFNMT1RTJDEuZmFiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3RlckFjdGlvbnMsIHNsb3Q6IFNMT1RTJDEuZm9vdGVyQWN0aW9ucyB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mb290ZXIsIHNsb3Q6IFNMT1RTJDEuZm9vdGVyIH0pLCBoKFwic2xvdFwiLCBudWxsKSksIGJhY2tCdXR0b25FbCA/IChoKFwiY2FsY2l0ZS10b29sdGlwXCIsIHsgY2xvc2VPbkNsaWNrOiB0cnVlLCBsYWJlbDogbGFiZWwsIG92ZXJsYXlQb3NpdGlvbmluZzogXCJmaXhlZFwiLCBwbGFjZW1lbnQ6IFwidG9wXCIsIHJlZmVyZW5jZUVsZW1lbnQ6IGJhY2tCdXR0b25FbCB9LCBsYWJlbCkpIDogbnVsbCkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGZsb3dJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWZsb3ctaXRlbVwiLCB7XG4gICAgXCJjbG9zYWJsZVwiOiBbNTE2XSxcbiAgICBcImNsb3NlZFwiOiBbNTE2XSxcbiAgICBcImJlZm9yZUJhY2tcIjogWzE2XSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFsxXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiaGVhZGluZ1wiOiBbMV0sXG4gICAgXCJoZWFkaW5nTGV2ZWxcIjogWzUxNCwgXCJoZWFkaW5nLWxldmVsXCJdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm1lbnVPcGVuXCI6IFs1MTYsIFwibWVudS1vcGVuXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJzaG93QmFja0J1dHRvblwiOiBbNCwgXCJzaG93LWJhY2stYnV0dG9uXCJdLFxuICAgIFwiYmFja0J1dHRvbkVsXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XSxcbiAgICBcInNjcm9sbENvbnRlbnRUb1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1mbG93LWl0ZW1cIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiLCBcImNhbGNpdGUtcGFuZWxcIiwgXCJjYWxjaXRlLXBvcG92ZXJcIiwgXCJjYWxjaXRlLXNjcmltXCIsIFwiY2FsY2l0ZS10b29sdGlwXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWZsb3ctaXRlbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEZsb3dJdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ5KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb24tbWVudVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ4KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDcoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wYW5lbFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wb3BvdmVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXNjcmltXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXRvb2x0aXBcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUZsb3dJdGVtID0gRmxvd0l0ZW07XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlRmxvd0l0ZW0sIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyB4IGFzIHRhYmJhYmxlLCB5IGFzIGZvY3VzYWJsZSwgeiBhcyBpc1RhYmJhYmxlLCBBIGFzIGlzRm9jdXNhYmxlLCBqIGFzIGZvY3VzRWxlbWVudCwgQiBhcyB0YWJiYWJsZU9wdGlvbnMgfSBmcm9tICcuL2RvbS5qcyc7XG5cbi8qIVxuKiBmb2N1cy10cmFwIDcuNC4yXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSB7XG4gIGFjdGl2YXRlVHJhcDogZnVuY3Rpb24gYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCkge1xuICAgIGlmICh0cmFwU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwU3RhY2tbdHJhcFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFN0YWNrLmluZGV4T2YodHJhcCk7XG4gICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRyYXBTdGFjay5wdXNoKHRyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICB0cmFwU3RhY2suc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB0cmFwU3RhY2sucHVzaCh0cmFwKTtcbiAgICB9XG4gIH0sXG4gIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBkZWFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApIHtcbiAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFN0YWNrLmluZGV4T2YodHJhcCk7XG4gICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRyYXBTdGFjay5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICB9XG4gICAgaWYgKHRyYXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB0cmFwU3RhY2tbdHJhcFN0YWNrLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICB9XG4gIH1cbn07XG52YXIgaXNTZWxlY3RhYmxlSW5wdXQgPSBmdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiYgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBpc0VzY2FwZUV2ZW50ID0gZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59O1xudmFyIGlzVGFiRXZlbnQgPSBmdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59O1xuXG4vLyBjaGVja3MgZm9yIFRBQiBieSBkZWZhdWx0XG52YXIgaXNLZXlGb3J3YXJkID0gZnVuY3Rpb24gaXNLZXlGb3J3YXJkKGUpIHtcbiAgcmV0dXJuIGlzVGFiRXZlbnQoZSkgJiYgIWUuc2hpZnRLZXk7XG59O1xuXG4vLyBjaGVja3MgZm9yIFNISUZUK1RBQiBieSBkZWZhdWx0XG52YXIgaXNLZXlCYWNrd2FyZCA9IGZ1bmN0aW9uIGlzS2V5QmFja3dhcmQoZSkge1xuICByZXR1cm4gaXNUYWJFdmVudChlKSAmJiBlLnNoaWZ0S2V5O1xufTtcbnZhciBkZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn07XG5cbi8vIEFycmF5LmZpbmQvZmluZEluZGV4KCkgYXJlIG5vdCBzdXBwb3J0ZWQgb24gSUU7IHRoaXMgcmVwbGljYXRlcyBlbm91Z2hcbi8vICBvZiBBcnJheS5maW5kSW5kZXgoKSBmb3Igb3VyIG5lZWRzXG52YXIgZmluZEluZGV4ID0gZnVuY3Rpb24gZmluZEluZGV4KGFyciwgZm4pIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBhcnIuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgaWYgKGZuKHZhbHVlKSkge1xuICAgICAgaWR4ID0gaTtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTsgLy8gbmV4dFxuICB9KTtcblxuICByZXR1cm4gaWR4O1xufTtcblxuLyoqXG4gKiBHZXQgYW4gb3B0aW9uJ3MgdmFsdWUgd2hlbiBpdCBjb3VsZCBiZSBhIHBsYWluIHZhbHVlLCBvciBhIGhhbmRsZXIgdGhhdCBwcm92aWRlc1xuICogIHRoZSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT3B0aW9uJ3MgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0gey4uLip9IFtwYXJhbXNdIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGhhbmRsZXIsIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHsqfSBUaGUgYHZhbHVlYCwgb3IgdGhlIGhhbmRsZXIncyByZXR1cm5lZCB2YWx1ZS5cbiAqL1xudmFyIHZhbHVlT3JIYW5kbGVyID0gZnVuY3Rpb24gdmFsdWVPckhhbmRsZXIodmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkodm9pZCAwLCBwYXJhbXMpIDogdmFsdWU7XG59O1xudmFyIGdldEFjdHVhbFRhcmdldCA9IGZ1bmN0aW9uIGdldEFjdHVhbFRhcmdldChldmVudCkge1xuICAvLyBOT1RFOiBJZiB0aGUgdHJhcCBpcyBfaW5zaWRlXyBhIHNoYWRvdyBET00sIGV2ZW50LnRhcmdldCB3aWxsIGFsd2F5cyBiZSB0aGVcbiAgLy8gIHNoYWRvdyBob3N0LiBIb3dldmVyLCBldmVudC50YXJnZXQuY29tcG9zZWRQYXRoKCkgd2lsbCBiZSBhbiBhcnJheSBvZlxuICAvLyAgbm9kZXMgXCJjbGlja2VkXCIgZnJvbSBpbm5lci1tb3N0ICh0aGUgYWN0dWFsIGVsZW1lbnQgaW5zaWRlIHRoZSBzaGFkb3cpIHRvXG4gIC8vICBvdXRlci1tb3N0ICh0aGUgaG9zdCBIVE1MIGRvY3VtZW50KS4gSWYgd2UgaGF2ZSBhY2Nlc3MgdG8gY29tcG9zZWRQYXRoKCksXG4gIC8vICB0aGVuIHVzZSBpdHMgZmlyc3QgZWxlbWVudDsgb3RoZXJ3aXNlLCBmYWxsIGJhY2sgdG8gZXZlbnQudGFyZ2V0IChhbmRcbiAgLy8gIHRoaXMgb25seSB3b3JrcyBmb3IgYW4gX29wZW5fIHNoYWRvdyBET007IG90aGVyd2lzZSxcbiAgLy8gIGNvbXBvc2VkUGF0aCgpWzBdID09PSBldmVudC50YXJnZXQgYWx3YXlzKS5cbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5zaGFkb3dSb290ICYmIHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09ICdmdW5jdGlvbicgPyBldmVudC5jb21wb3NlZFBhdGgoKVswXSA6IGV2ZW50LnRhcmdldDtcbn07XG5cbi8vIE5PVEU6IHRoaXMgbXVzdCBiZSBfb3V0c2lkZV8gYGNyZWF0ZUZvY3VzVHJhcCgpYCB0byBtYWtlIHN1cmUgYWxsIHRyYXBzIGluIHRoaXNcbi8vICBjdXJyZW50IGluc3RhbmNlIHVzZSB0aGUgc2FtZSBzdGFjayBpZiBgdXNlck9wdGlvbnMudHJhcFN0YWNrYCBpc24ndCBzcGVjaWZpZWRcbnZhciBpbnRlcm5hbFRyYXBTdGFjayA9IFtdO1xudmFyIGNyZWF0ZUZvY3VzVHJhcCA9IGZ1bmN0aW9uIGNyZWF0ZUZvY3VzVHJhcChlbGVtZW50cywgdXNlck9wdGlvbnMpIHtcbiAgLy8gU1NSOiBhIGxpdmUgdHJhcCBzaG91bGRuJ3QgYmUgY3JlYXRlZCBpbiB0aGlzIHR5cGUgb2YgZW52aXJvbm1lbnQgc28gdGhpc1xuICAvLyAgc2hvdWxkIGJlIHNhZmUgY29kZSB0byBleGVjdXRlIGlmIHRoZSBgZG9jdW1lbnRgIG9wdGlvbiBpc24ndCBzcGVjaWZpZWRcbiAgdmFyIGRvYyA9ICh1c2VyT3B0aW9ucyA9PT0gbnVsbCB8fCB1c2VyT3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlck9wdGlvbnMuZG9jdW1lbnQpIHx8IGRvY3VtZW50O1xuICB2YXIgdHJhcFN0YWNrID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy50cmFwU3RhY2spIHx8IGludGVybmFsVHJhcFN0YWNrO1xuICB2YXIgY29uZmlnID0gX29iamVjdFNwcmVhZDIoe1xuICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiB0cnVlLFxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgIGRlbGF5SW5pdGlhbEZvY3VzOiB0cnVlLFxuICAgIGlzS2V5Rm9yd2FyZDogaXNLZXlGb3J3YXJkLFxuICAgIGlzS2V5QmFja3dhcmQ6IGlzS2V5QmFja3dhcmRcbiAgfSwgdXNlck9wdGlvbnMpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gY29udGFpbmVycyBnaXZlbiB0byBjcmVhdGVGb2N1c1RyYXAoKVxuICAgIC8vIEB0eXBlIHtBcnJheTxIVE1MRWxlbWVudD59XG4gICAgY29udGFpbmVyczogW10sXG4gICAgLy8gbGlzdCBvZiBvYmplY3RzIGlkZW50aWZ5aW5nIHRhYmJhYmxlIG5vZGVzIGluIGBjb250YWluZXJzYCBpbiB0aGUgdHJhcFxuICAgIC8vIE5PVEU6IGl0J3MgcG9zc2libGUgdGhhdCBhIGdyb3VwIGhhcyBubyB0YWJiYWJsZSBub2RlcyBpZiBub2RlcyBnZXQgcmVtb3ZlZCB3aGlsZSB0aGUgdHJhcFxuICAgIC8vICBpcyBhY3RpdmUsIGJ1dCB0aGUgdHJhcCBzaG91bGQgbmV2ZXIgZ2V0IHRvIGEgc3RhdGUgd2hlcmUgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGdyb3VwXG4gICAgLy8gIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgKHRoYXQgd291bGQgbGVhZCB0byBhbiBlcnJvciBjb25kaXRpb24gdGhhdCB3b3VsZFxuICAgIC8vICByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmcgdGhyb3duKVxuICAgIC8vIEB0eXBlIHtBcnJheTx7XG4gICAgLy8gICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIC8vICAgdGFiYmFibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmb2N1c2FibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmaXJzdFRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8bnVsbCxcbiAgICAvLyAgIGxhc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsXG4gICAgLy8gICBuZXh0VGFiYmFibGVOb2RlOiAobm9kZTogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IGJvb2xlYW4pID0+IEhUTUxFbGVtZW50fHVuZGVmaW5lZFxuICAgIC8vIH0+fVxuICAgIGNvbnRhaW5lckdyb3VwczogW10sXG4gICAgLy8gc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbnRhaW5lcnNgIGxpc3RcblxuICAgIC8vIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiBgY29udGFpbmVyR3JvdXBzYCwgYnV0IG9ubHkgdGhvc2UgdGhhdCBhY3R1YWxseSBoYXZlXG4gICAgLy8gIHRhYmJhYmxlIG5vZGVzIGluIHRoZW1cbiAgICAvLyBOT1RFOiBzYW1lIG9yZGVyIGFzIGBjb250YWluZXJzYCBhbmQgYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBfX25vdCBuZWNlc3NhcmlseV9fXG4gICAgLy8gIHRoZSBzYW1lIGxlbmd0aFxuICAgIHRhYmJhYmxlR3JvdXBzOiBbXSxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIC8vIHRpbWVyIElEIGZvciB3aGVuIGRlbGF5SW5pdGlhbEZvY3VzIGlzIHRydWUgYW5kIGluaXRpYWwgZm9jdXMgaW4gdGhpcyB0cmFwXG4gICAgLy8gIGhhcyBiZWVuIGRlbGF5ZWQgZHVyaW5nIGFjdGl2YXRpb25cbiAgICBkZWxheUluaXRpYWxGb2N1c1RpbWVyOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIHRyYXA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0IC0tIHNvbWUgcHJpdmF0ZSBmdW5jdGlvbnMgcmVmZXJlbmNlIGl0LCBhbmQgaXRzIG1ldGhvZHMgcmVmZXJlbmNlIHByaXZhdGUgZnVuY3Rpb25zLCBzbyB3ZSBtdXN0IGRlY2xhcmUgaGVyZSBhbmQgZGVmaW5lIGxhdGVyXG5cbiAgLyoqXG4gICAqIEdldHMgYSBjb25maWd1cmF0aW9uIG9wdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtPYmplY3R8dW5kZWZpbmVkfSBjb25maWdPdmVycmlkZU9wdGlvbnMgSWYgdHJ1ZSwgYW5kIG9wdGlvbiBpcyBkZWZpbmVkIGluIHRoaXMgc2V0LFxuICAgKiAgdmFsdWUgd2lsbCBiZSB0YWtlbiBmcm9tIHRoaXMgb2JqZWN0LiBPdGhlcndpc2UsIHZhbHVlIHdpbGwgYmUgdGFrZW4gZnJvbSBiYXNlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIE5hbWUgb2YgdGhlIG9wdGlvbiB3aG9zZSB2YWx1ZSBpcyBzb3VnaHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gW2NvbmZpZ09wdGlvbk5hbWVdIE5hbWUgb2Ygb3B0aW9uIHRvIHVzZSBfX2luc3RlYWQgb2ZfXyBgb3B0aW9uTmFtZWBcbiAgICogIElJRiBgY29uZmlnT3ZlcnJpZGVPcHRpb25zYCBpcyBub3QgZGVmaW5lZC4gT3RoZXJ3aXNlLCBgb3B0aW9uTmFtZWAgaXMgdXNlZC5cbiAgICovXG4gIHZhciBnZXRPcHRpb24gPSBmdW5jdGlvbiBnZXRPcHRpb24oY29uZmlnT3ZlcnJpZGVPcHRpb25zLCBvcHRpb25OYW1lLCBjb25maWdPcHRpb25OYW1lKSB7XG4gICAgcmV0dXJuIGNvbmZpZ092ZXJyaWRlT3B0aW9ucyAmJiBjb25maWdPdmVycmlkZU9wdGlvbnNbb3B0aW9uTmFtZV0gIT09IHVuZGVmaW5lZCA/IGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSA6IGNvbmZpZ1tjb25maWdPcHRpb25OYW1lIHx8IG9wdGlvbk5hbWVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudF1cbiAgICogQHJldHVybnMge251bWJlcn0gSW5kZXggb2YgdGhlIGNvbnRhaW5lciBpbiBlaXRoZXIgYHN0YXRlLmNvbnRhaW5lcnNgIG9yXG4gICAqICBgc3RhdGUuY29udGFpbmVyR3JvdXBzYCAodGhlIG9yZGVyL2xlbmd0aCBvZiB0aGVzZSBsaXN0cyBhcmUgdGhlIHNhbWUpOyAtMVxuICAgKiAgaWYgdGhlIGVsZW1lbnQgaXNuJ3QgZm91bmQuXG4gICAqL1xuICB2YXIgZmluZENvbnRhaW5lckluZGV4ID0gZnVuY3Rpb24gZmluZENvbnRhaW5lckluZGV4KGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgdmFyIGNvbXBvc2VkUGF0aCA9IHR5cGVvZiAoZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LmNvbXBvc2VkUGF0aCkgPT09ICdmdW5jdGlvbicgPyBldmVudC5jb21wb3NlZFBhdGgoKSA6IHVuZGVmaW5lZDtcbiAgICAvLyBOT1RFOiBzZWFyY2ggYGNvbnRhaW5lckdyb3Vwc2AgYmVjYXVzZSBpdCdzIHBvc3NpYmxlIGEgZ3JvdXAgY29udGFpbnMgbm8gdGFiYmFibGVcbiAgICAvLyAgbm9kZXMsIGJ1dCBzdGlsbCBjb250YWlucyBmb2N1c2FibGUgbm9kZXMgKGUuZy4gaWYgdGhleSBhbGwgaGF2ZSBgdGFiaW5kZXg9LTFgKVxuICAgIC8vICBhbmQgd2Ugc3RpbGwgbmVlZCB0byBmaW5kIHRoZSBlbGVtZW50IGluIHRoZXJlXG4gICAgcmV0dXJuIHN0YXRlLmNvbnRhaW5lckdyb3Vwcy5maW5kSW5kZXgoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBfcmVmLmNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlcyA9IF9yZWYudGFiYmFibGVOb2RlcztcbiAgICAgIHJldHVybiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCkgfHwgKCAvLyBmYWxsIGJhY2sgdG8gZXhwbGljaXQgdGFiYmFibGUgc2VhcmNoIHdoaWNoIHdpbGwgdGFrZSBpbnRvIGNvbnNpZGVyYXRpb24gYW55XG4gICAgICAvLyAgd2ViIGNvbXBvbmVudHMgaWYgdGhlIGB0YWJiYWJsZU9wdGlvbnMuZ2V0U2hhZG93Um9vdGAgb3B0aW9uIHdhcyB1c2VkIGZvclxuICAgICAgLy8gIHRoZSB0cmFwLCBlbmFibGluZyBzaGFkb3cgRE9NIHN1cHBvcnQgaW4gdGFiYmFibGUgKGBOb2RlLmNvbnRhaW5zKClgIGRvZXNuJ3RcbiAgICAgIC8vICBsb29rIGluc2lkZSB3ZWIgY29tcG9uZW50cyBldmVuIGlmIG9wZW4pXG4gICAgICBjb21wb3NlZFBhdGggPT09IG51bGwgfHwgY29tcG9zZWRQYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGFpbmVyKSkgfHwgdGFiYmFibGVOb2Rlcy5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG5vZGUgZm9yIHRoZSBnaXZlbiBvcHRpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIGJlIGFuIG9wdGlvbiB0aGF0XG4gICAqICBjYW4gYmUgZWl0aGVyIGEgRE9NIG5vZGUsIGEgc3RyaW5nIHRoYXQgaXMgYSBzZWxlY3RvciB0byBnZXQgYSBub2RlLCBgZmFsc2VgXG4gICAqICAoaWYgYSBub2RlIGlzIGV4cGxpY2l0bHkgTk9UIGdpdmVuKSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW55IG9mIHRoZXNlXG4gICAqICB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWQgfCBmYWxzZSB8IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudH0gUmV0dXJuc1xuICAgKiAgYHVuZGVmaW5lZGAgaWYgdGhlIG9wdGlvbiBpcyBub3Qgc3BlY2lmaWVkOyBgZmFsc2VgIGlmIHRoZSBvcHRpb25cbiAgICogIHJlc29sdmVkIHRvIGBmYWxzZWAgKG5vZGUgZXhwbGljaXRseSBub3QgZ2l2ZW4pOyBvdGhlcndpc2UsIHRoZSByZXNvbHZlZFxuICAgKiAgRE9NIG5vZGUuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgb3B0aW9uIGlzIHNldCwgbm90IGBmYWxzZWAsIGFuZCBpcyBub3QsIG9yIGRvZXMgbm90XG4gICAqICByZXNvbHZlIHRvIGEgbm9kZS5cbiAgICovXG4gIHZhciBnZXROb2RlRm9yT3B0aW9uID0gZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgcGFyYW1zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uVmFsdWUgPSB1bmRlZmluZWQ7IC8vIHVzZSBkZWZhdWx0IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgaWYgKG9wdGlvblZhbHVlID09PSB1bmRlZmluZWQgfHwgb3B0aW9uVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25WYWx1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UsIGVtcHR5IHN0cmluZyAoaW52YWxpZCksIG51bGwgKGludmFsaWQpLCAwIChpbnZhbGlkKVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCB3YXMgc3BlY2lmaWVkIGJ1dCB3YXMgbm90IGEgbm9kZSwgb3IgZGlkIG5vdCByZXR1cm4gYSBub2RlXCIpKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTsgLy8gY291bGQgYmUgSFRNTEVsZW1lbnQsIFNWR0VsZW1lbnQsIG9yIG5vbi1lbXB0eSBzdHJpbmcgYXQgdGhpcyBwb2ludFxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2MucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7IC8vIHJlc29sdmUgdG8gbm9kZSwgb3IgbnVsbCBpZiBmYWlsc1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIGFzIHNlbGVjdG9yIHJlZmVycyB0byBubyBrbm93biBub2RlXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciBnZXRJbml0aWFsRm9jdXNOb2RlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuXG4gICAgLy8gZmFsc2UgZXhwbGljaXRseSBpbmRpY2F0ZXMgd2Ugd2FudCBubyBpbml0aWFsRm9jdXMgYXQgYWxsXG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIG9wdGlvbiBub3Qgc3BlY2lmaWVkOiB1c2UgZmFsbGJhY2sgb3B0aW9uc1xuICAgICAgaWYgKGZpbmRDb250YWluZXJJbmRleChkb2MuYWN0aXZlRWxlbWVudCkgPj0gMCkge1xuICAgICAgICBub2RlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZUdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbMF07XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlTm9kZSA9IGZpcnN0VGFiYmFibGVHcm91cCAmJiBmaXJzdFRhYmJhYmxlR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG5cbiAgICAgICAgLy8gTk9URTogYGZhbGxiYWNrRm9jdXNgIG9wdGlvbiBmdW5jdGlvbiBjYW5ub3QgcmV0dXJuIGBmYWxzZWAgKG5vdCBzdXBwb3J0ZWQpXG4gICAgICAgIG5vZGUgPSBmaXJzdFRhYmJhYmxlTm9kZSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGZvY3VzLXRyYXAgbmVlZHMgdG8gaGF2ZSBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciB1cGRhdGVUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICBzdGF0ZS5jb250YWluZXJHcm91cHMgPSBzdGF0ZS5jb250YWluZXJzLm1hcChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG5cbiAgICAgIC8vIE5PVEU6IGlmIHdlIGhhdmUgdGFiYmFibGUgbm9kZXMsIHdlIG11c3QgaGF2ZSBmb2N1c2FibGUgbm9kZXM7IGZvY3VzYWJsZSBub2Rlc1xuICAgICAgLy8gIGFyZSBhIHN1cGVyc2V0IG9mIHRhYmJhYmxlIG5vZGVzXG4gICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICB0YWJiYWJsZU5vZGVzOiB0YWJiYWJsZU5vZGVzLFxuICAgICAgICBmb2N1c2FibGVOb2RlczogZm9jdXNhYmxlTm9kZXMsXG4gICAgICAgIGZpcnN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzWzBdIDogbnVsbCxcbiAgICAgICAgbGFzdFRhYmJhYmxlTm9kZTogdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBfX3RhYmJhYmxlX18gbm9kZSB0aGF0IGZvbGxvd3MgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24sXG4gICAgICAgICAqICBpbiB0aGlzIGNvbnRhaW5lciwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcndhcmRdIFRydWUgaWYgZ29pbmcgaW4gZm9yd2FyZCB0YWIgb3JkZXI7IGZhbHNlIGlmIGdvaW5nXG4gICAgICAgICAqICBpbiByZXZlcnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBUaGUgbmV4dCB0YWJiYWJsZSBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGFiYmFibGVOb2RlOiBmdW5jdGlvbiBuZXh0VGFiYmFibGVOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgZm9yd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgICAvLyBOT1RFOiBJZiB0YWJpbmRleCBpcyBwb3NpdGl2ZSAoaW4gb3JkZXIgdG8gbWFuaXB1bGF0ZSB0aGUgdGFiIG9yZGVyIHNlcGFyYXRlXG4gICAgICAgICAgLy8gIGZyb20gdGhlIERPTSBvcmRlciksIHRoaXMgX193aWxsIG5vdCB3b3JrX18gYmVjYXVzZSB0aGUgbGlzdCBvZiBmb2N1c2FibGVOb2RlcyxcbiAgICAgICAgICAvLyAgd2hpbGUgaXQgY29udGFpbnMgdGFiYmFibGUgbm9kZXMsIGRvZXMgbm90IHNvcnQgaXRzIG5vZGVzIGluIGFueSBvcmRlciBvdGhlclxuICAgICAgICAgIC8vICB0aGFuIERPTSBvcmRlciwgYmVjYXVzZSBpdCBjYW4ndDogV2hlcmUgd291bGQgeW91IHBsYWNlIGZvY3VzYWJsZSAoYnV0IG5vdFxuICAgICAgICAgIC8vICB0YWJiYWJsZSkgbm9kZXMgaW4gdGhhdCBvcmRlcj8gVGhleSBoYXZlIG5vIG9yZGVyLCBiZWNhdXNlIHRoZXkgYXJlbid0IHRhYmJhbGUuLi5cbiAgICAgICAgICAvLyBTdXBwb3J0IGZvciBwb3NpdGl2ZSB0YWJpbmRleCBpcyBhbHJlYWR5IGJyb2tlbiBhbmQgaGFyZCB0byBtYW5hZ2UgKHBvc3NpYmx5XG4gICAgICAgICAgLy8gIG5vdCBzdXBwb3J0YWJsZSwgVEJEKSwgc28gdGhpcyBpc24ndCBnb2luZyB0byBtYWtlIHRoaW5ncyB3b3JzZSB0aGFuIHRoZXlcbiAgICAgICAgICAvLyAgYWxyZWFkeSBhcmUsIGFuZCBhdCBsZWFzdCBtYWtlcyB0aGluZ3MgYmV0dGVyIGZvciB0aGUgbWFqb3JpdHkgb2YgY2FzZXMgd2hlcmVcbiAgICAgICAgICAvLyAgdGFiaW5kZXggaXMgZWl0aGVyIDAvdW5zZXQgb3IgbmVnYXRpdmUuXG4gICAgICAgICAgLy8gRllJLCBwb3NpdGl2ZSB0YWJpbmRleCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9pc3N1ZXMvMzc1XG4gICAgICAgICAgdmFyIG5vZGVJZHggPSBmb2N1c2FibGVOb2Rlcy5maW5kSW5kZXgoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBuID09PSBub2RlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChub2RlSWR4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2N1c2FibGVOb2Rlcy5zbGljZShub2RlSWR4ICsgMSkuZmluZChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShuLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2UoMCwgbm9kZUlkeCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBpc1RhYmJhYmxlKG4sIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHN0YXRlLnRhYmJhYmxlR3JvdXBzID0gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBncm91cC50YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDA7XG4gICAgfSk7XG5cbiAgICAvLyB0aHJvdyBpZiBubyBncm91cHMgaGF2ZSB0YWJiYWJsZSBub2RlcyBhbmQgd2UgZG9uJ3QgaGF2ZSBhIGZhbGxiYWNrIGZvY3VzIG5vZGUgZWl0aGVyXG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA8PSAwICYmICFnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJykgLy8gcmV0dXJuaW5nIGZhbHNlIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgb3B0aW9uXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNvbnRhaW5lciB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0IGF0IGFsbCB0aW1lcycpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRyeUZvY3VzID0gZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldFJldHVybkZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldFJldHVybkZvY3VzTm9kZShwcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICB2YXIgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ3NldFJldHVybkZvY3VzJywgcHJldmlvdXNBY3RpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gbm9kZSA/IG5vZGUgOiBub2RlID09PSBmYWxzZSA/IGZhbHNlIDogcHJldmlvdXNBY3RpdmVFbGVtZW50O1xuICB9O1xuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgdmFyIGNoZWNrUG9pbnRlckRvd24gPSBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwKSB7XG4gICAgICAvLyBhbGxvdyB0aGUgY2xpY2sgc2luY2UgaXQgb2N1cnJlZCBpbnNpZGUgdGhlIHRyYXBcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcywgZSkpIHtcbiAgICAgIC8vIGltbWVkaWF0ZWx5IGRlYWN0aXZhdGUgdGhlIHRyYXBcbiAgICAgIHRyYXAuZGVhY3RpdmF0ZSh7XG4gICAgICAgIC8vIE5PVEU6IGJ5IHNldHRpbmcgYHJldHVybkZvY3VzOiBmYWxzZWAsIGRlYWN0aXZhdGUoKSB3aWxsIGRvIG5vdGhpbmcsXG4gICAgICAgIC8vICB3aGljaCB3aWxsIHJlc3VsdCBpbiB0aGUgb3V0c2lkZSBjbGljayBzZXR0aW5nIGZvY3VzIHRvIHRoZSBub2RlXG4gICAgICAgIC8vICB0aGF0IHdhcyBjbGlja2VkIChhbmQgaWYgbm90IGZvY3VzYWJsZSwgdG8gXCJub3RoaW5nXCIpOyBieSBzZXR0aW5nXG4gICAgICAgIC8vICBgcmV0dXJuRm9jdXM6IHRydWVgLCB3ZSdsbCBhdHRlbXB0IHRvIHJlLWZvY3VzIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgb24gYWN0aXZhdGlvbiAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKSwgd2hldGhlciB0aGVcbiAgICAgICAgLy8gIG91dHNpZGUgY2xpY2sgd2FzIG9uIGEgZm9jdXNhYmxlIG5vZGUgb3Igbm90XG4gICAgICAgIHJldHVybkZvY3VzOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICAvLyAoSWYgd2UnbGwgb25seSBsZXQgYGNsaWNrYCBldmVudHMgdGhyb3VnaCxcbiAgICAvLyB0aGVuIG9uIG1vYmlsZSB0aGV5IHdpbGwgYmUgYmxvY2tlZCBhbnl3YXlzIGlmIGB0b3VjaHN0YXJ0YCBpcyBibG9ja2VkLilcbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgLy8gYWxsb3cgdGhlIGNsaWNrIG91dHNpZGUgdGhlIHRyYXAgdG8gdGFrZSBwbGFjZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSwgcHJldmVudCB0aGUgY2xpY2tcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIHZhciBjaGVja0ZvY3VzSW4gPSBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lZCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGUpID49IDA7XG5cbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lZCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgaWYgKHRhcmdldENvbnRhaW5lZCkge1xuICAgICAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNjYXBlZCEgcHVsbCBpdCBiYWNrIGluIHRvIHdoZXJlIGl0IGp1c3QgbGVmdFxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhpamFjayBrZXkgbmF2IGV2ZW50cyBvbiB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzIG9mIHRoZSB0cmFwLFxuICAvLyBpbiBvcmRlciB0byBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcuIElmIGl0IGVzY2FwZXMgZm9yIGV2ZW4gYVxuICAvLyBtb21lbnQgaXQgY2FuIGVuZCB1cCBzY3JvbGxpbmcgdGhlIHBhZ2UgYW5kIGNhdXNpbmcgY29uZnVzaW9uIHNvIHdlXG4gIC8vIGtpbmQgb2YgbmVlZCB0byBjYXB0dXJlIHRoZSBhY3Rpb24gYXQgdGhlIGtleWRvd24gcGhhc2UuXG4gIHZhciBjaGVja0tleU5hdiA9IGZ1bmN0aW9uIGNoZWNrS2V5TmF2KGV2ZW50KSB7XG4gICAgdmFyIGlzQmFja3dhcmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZXZlbnQpO1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICB2YXIgZGVzdGluYXRpb25Ob2RlID0gbnVsbDtcbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoZSB0YXJnZXQgaXMgYWN0dWFsbHkgY29udGFpbmVkIGluIGEgZ3JvdXBcbiAgICAgIC8vIE5PVEU6IHRoZSB0YXJnZXQgbWF5IGFsc28gYmUgdGhlIGNvbnRhaW5lciBpdHNlbGYgaWYgaXQncyBmb2N1c2FibGVcbiAgICAgIC8vICB3aXRoIHRhYkluZGV4PSctMScgYW5kIHdhcyBnaXZlbiBpbml0aWFsIGZvY3VzXG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBldmVudCk7XG4gICAgICB2YXIgY29udGFpbmVyR3JvdXAgPSBjb250YWluZXJJbmRleCA+PSAwID8gc3RhdGUuY29udGFpbmVyR3JvdXBzW2NvbnRhaW5lckluZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChjb250YWluZXJJbmRleCA8IDApIHtcbiAgICAgICAgLy8gdGFyZ2V0IG5vdCBmb3VuZCBpbiBhbnkgZ3JvdXA6IHF1aXRlIHBvc3NpYmxlIGZvY3VzIGhhcyBlc2NhcGVkIHRoZSB0cmFwLFxuICAgICAgICAvLyAgc28gYnJpbmcgaXQgYmFjayBpbnRvLi4uXG4gICAgICAgIGlmIChpc0JhY2t3YXJkKSB7XG4gICAgICAgICAgLy8gLi4udGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGFzdCBncm91cFxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW3N0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDFdLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gLi4udGhlIGZpcnN0IG5vZGUgaW4gdGhlIGZpcnN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbMF0uZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNCYWNrd2FyZCkge1xuICAgICAgICAvLyBSRVZFUlNFXG5cbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBpbiBhIGdyb3VwP1xuICAgICAgICB2YXIgc3RhcnRPZkdyb3VwSW5kZXggPSBmaW5kSW5kZXgoc3RhdGUudGFiYmFibGVHcm91cHMsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBmaXJzdFRhYmJhYmxlTm9kZSA9IF9yZWYyLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IGZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCwgZmFsc2UpKSkge1xuICAgICAgICAgIC8vIGFuIGV4Y2VwdGlvbiBjYXNlIHdoZXJlIHRoZSB0YXJnZXQgaXMgZWl0aGVyIHRoZSBjb250YWluZXIgaXRzZWxmLCBvclxuICAgICAgICAgIC8vICBhIG5vbi10YWJiYWJsZSBub2RlIHRoYXQgd2FzIGdpdmVuIGZvY3VzIChpLmUuIHRhYmluZGV4IGlzIG5lZ2F0aXZlXG4gICAgICAgICAgLy8gIGFuZCB1c2VyIGNsaWNrZWQgb24gaXQgb3Igbm9kZSB3YXMgcHJvZ3JhbW1hdGljYWxseSBnaXZlbiBmb2N1cylcbiAgICAgICAgICAvLyAgYW5kIGlzIG5vdCBmb2xsb3dlZCBieSBhbnkgb3RoZXIgdGFiYmFibGUgbm9kZSwgaW4gd2hpY2hcbiAgICAgICAgICAvLyAgY2FzZSwgd2Ugc2hvdWxkIGhhbmRsZSBzaGlmdCt0YWIgYXMgaWYgZm9jdXMgd2VyZSBvbiB0aGUgY29udGFpbmVyJ3NcbiAgICAgICAgICAvLyAgZmlyc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIExBU1QgZ3JvdXBcbiAgICAgICAgICBzdGFydE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gWUVTOiB0aGVuIHNoaWZ0K3RhYiBzaG91bGQgZ28gdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBpbiB0aGVcbiAgICAgICAgICAvLyAgcHJldmlvdXMgZ3JvdXAgKGFuZCB3cmFwIGFyb3VuZCB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mXG4gICAgICAgICAgLy8gIHRoZSBMQVNUIGdyb3VwIGlmIGl0J3MgdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIEZJUlNUIGdyb3VwKVxuICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkdyb3VwSW5kZXggPSBzdGFydE9mR3JvdXBJbmRleCA9PT0gMCA/IHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDEgOiBzdGFydE9mR3JvdXBJbmRleCAtIDE7XG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tkZXN0aW5hdGlvbkdyb3VwSW5kZXhdO1xuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGRlc3RpbmF0aW9uR3JvdXAubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgICAvLyB1c2VyIG11c3QgaGF2ZSBjdXN0b21pemVkIHRoZSBuYXYga2V5cyBzbyB3ZSBoYXZlIHRvIG1vdmUgZm9jdXMgbWFudWFsbHkgX3dpdGhpbl9cbiAgICAgICAgICAvLyAgdGhlIGFjdGl2ZSBncm91cDogZG8gdGhpcyBiYXNlZCBvbiB0aGUgb3JkZXIgZGV0ZXJtaW5lZCBieSB0YWJiYWJsZSgpXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRk9SV0FSRFxuXG4gICAgICAgIC8vIGlzIHRoZSB0YXJnZXQgdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBpbiBhIGdyb3VwP1xuICAgICAgICB2YXIgbGFzdE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIGxhc3RUYWJiYWJsZU5vZGUgPSBfcmVmMy5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IGxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA8IDAgJiYgKGNvbnRhaW5lckdyb3VwLmNvbnRhaW5lciA9PT0gdGFyZ2V0IHx8IGlzRm9jdXNhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWlzVGFiYmFibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQpKSkge1xuICAgICAgICAgIC8vIGFuIGV4Y2VwdGlvbiBjYXNlIHdoZXJlIHRoZSB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBpdHNlbGYsIG9yXG4gICAgICAgICAgLy8gIGEgbm9uLXRhYmJhYmxlIG5vZGUgdGhhdCB3YXMgZ2l2ZW4gZm9jdXMgKGkuZS4gdGFiaW5kZXggaXMgbmVnYXRpdmVcbiAgICAgICAgICAvLyAgYW5kIHVzZXIgY2xpY2tlZCBvbiBpdCBvciBub2RlIHdhcyBwcm9ncmFtbWF0aWNhbGx5IGdpdmVuIGZvY3VzKVxuICAgICAgICAgIC8vICBhbmQgaXMgbm90IGZvbGxvd2VkIGJ5IGFueSBvdGhlciB0YWJiYWJsZSBub2RlLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHRhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBsYXN0IHRhYmJhYmxlIG5vZGUsIGFuZCBnbyB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXBcbiAgICAgICAgICBsYXN0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RPZkdyb3VwSW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vIFlFUzogdGhlbiB0YWIgc2hvdWxkIGdvIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIGluIHRoZSBuZXh0XG4gICAgICAgICAgLy8gIGdyb3VwIChhbmQgd3JhcCBhcm91bmQgdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIEZJUlNUXG4gICAgICAgICAgLy8gIGdyb3VwIGlmIGl0J3MgdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgTEFTVCBncm91cClcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXBJbmRleCA9IGxhc3RPZkdyb3VwSW5kZXggPT09IHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDEgPyAwIDogbGFzdE9mR3JvdXBJbmRleCArIDE7XG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbX2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gX2Rlc3RpbmF0aW9uR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzVGFiRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgLy8gdXNlciBtdXN0IGhhdmUgY3VzdG9taXplZCB0aGUgbmF2IGtleXMgc28gd2UgaGF2ZSB0byBtb3ZlIGZvY3VzIG1hbnVhbGx5IF93aXRoaW5fXG4gICAgICAgICAgLy8gIHRoZSBhY3RpdmUgZ3JvdXA6IGRvIHRoaXMgYmFzZWQgb24gdGhlIG9yZGVyIGRldGVybWluZWQgYnkgdGFiYmFibGUoKVxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBubyBncm91cHMgYXZhaWxhYmxlXG4gICAgICAvLyBOT1RFOiB0aGUgZmFsbGJhY2tGb2N1cyBvcHRpb24gZG9lcyBub3Qgc3VwcG9ydCByZXR1cm5pbmcgZmFsc2UgdG8gb3B0LW91dFxuICAgICAgZGVzdGluYXRpb25Ob2RlID0gZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cbiAgICBpZiAoZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICBpZiAoaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgLy8gc2luY2UgdGFiIG5hdGl2ZWx5IG1vdmVzIGZvY3VzLCB3ZSB3b3VsZG4ndCBoYXZlIGEgZGVzdGluYXRpb24gbm9kZSB1bmxlc3Mgd2VcbiAgICAgICAgLy8gIHdlcmUgb24gdGhlIGVkZ2Ugb2YgYSBjb250YWluZXIgYW5kIGhhZCB0byBtb3ZlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVkZ2UsIGluXG4gICAgICAgIC8vICB3aGljaCBjYXNlIHdlIHdhbnQgdG8gcHJldmVudCBkZWZhdWx0IHRvIGtlZXAgdGhlIGJyb3dzZXIgZnJvbSBtb3ZpbmcgZm9jdXNcbiAgICAgICAgLy8gIHRvIHdoZXJlIGl0IG5vcm1hbGx5IHdvdWxkXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB0cnlGb2N1cyhkZXN0aW5hdGlvbk5vZGUpO1xuICAgIH1cbiAgICAvLyBlbHNlLCBsZXQgdGhlIGJyb3dzZXIgdGFrZSBjYXJlIG9mIFtzaGlmdCtddGFiIGFuZCBtb3ZlIHRoZSBmb2N1c1xuICB9O1xuXG4gIHZhciBjaGVja0tleSA9IGZ1bmN0aW9uIGNoZWNrS2V5KGV2ZW50KSB7XG4gICAgaWYgKGlzRXNjYXBlRXZlbnQoZXZlbnQpICYmIHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcywgZXZlbnQpICE9PSBmYWxzZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzS2V5Rm9yd2FyZChldmVudCkgfHwgY29uZmlnLmlzS2V5QmFja3dhcmQoZXZlbnQpKSB7XG4gICAgICBjaGVja0tleU5hdihldmVudCwgY29uZmlnLmlzS2V5QmFja3dhcmQoZXZlbnQpKTtcbiAgICB9XG4gIH07XG4gIHZhciBjaGVja0NsaWNrID0gZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICAvL1xuICAvLyBFVkVOVCBMSVNURU5FUlNcbiAgLy9cblxuICB2YXIgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyID0gY29uZmlnLmRlbGF5SW5pdGlhbEZvY3VzID8gZGVsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KSA6IHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiB0cmFwO1xuICB9O1xuICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcblxuICAvL1xuICAvLyBUUkFQIERFRklOSVRJT05cbiAgLy9cblxuICB0cmFwID0ge1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYWN0aXZlO1xuICAgIH0sXG4gICAgZ2V0IHBhdXNlZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wYXVzZWQ7XG4gICAgfSxcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uQWN0aXZhdGUgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnb25BY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uUG9zdEFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5Gb2N1c1RyYXAgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnY2hlY2tDYW5Gb2N1c1RyYXAnKTtcbiAgICAgIGlmICghY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBvbkFjdGl2YXRlID09PSBudWxsIHx8IG9uQWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQWN0aXZhdGUoKTtcbiAgICAgIHZhciBmaW5pc2hBY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICBvblBvc3RBY3RpdmF0ZSA9PT0gbnVsbCB8fCBvblBvc3RBY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0QWN0aXZhdGUoKTtcbiAgICAgIH07XG4gICAgICBpZiAoY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgY2hlY2tDYW5Gb2N1c1RyYXAoc3RhdGUuY29udGFpbmVycy5jb25jYXQoKSkudGhlbihmaW5pc2hBY3RpdmF0aW9uLCBmaW5pc2hBY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmaW5pc2hBY3RpdmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIG9uRGVhY3RpdmF0ZTogY29uZmlnLm9uRGVhY3RpdmF0ZSxcbiAgICAgICAgb25Qb3N0RGVhY3RpdmF0ZTogY29uZmlnLm9uUG9zdERlYWN0aXZhdGUsXG4gICAgICAgIGNoZWNrQ2FuUmV0dXJuRm9jdXM6IGNvbmZpZy5jaGVja0NhblJldHVybkZvY3VzXG4gICAgICB9LCBkZWFjdGl2YXRlT3B0aW9ucyk7XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lcik7IC8vIG5vb3AgaWYgdW5kZWZpbmVkXG4gICAgICBzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApO1xuICAgICAgdmFyIG9uRGVhY3RpdmF0ZSA9IGdldE9wdGlvbihvcHRpb25zLCAnb25EZWFjdGl2YXRlJyk7XG4gICAgICB2YXIgb25Qb3N0RGVhY3RpdmF0ZSA9IGdldE9wdGlvbihvcHRpb25zLCAnb25Qb3N0RGVhY3RpdmF0ZScpO1xuICAgICAgdmFyIGNoZWNrQ2FuUmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgJ2NoZWNrQ2FuUmV0dXJuRm9jdXMnKTtcbiAgICAgIHZhciByZXR1cm5Gb2N1cyA9IGdldE9wdGlvbihvcHRpb25zLCAncmV0dXJuRm9jdXMnLCAncmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUnKTtcbiAgICAgIG9uRGVhY3RpdmF0ZSA9PT0gbnVsbCB8fCBvbkRlYWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRGVhY3RpdmF0ZSgpO1xuICAgICAgdmFyIGZpbmlzaERlYWN0aXZhdGlvbiA9IGZ1bmN0aW9uIGZpbmlzaERlYWN0aXZhdGlvbigpIHtcbiAgICAgICAgZGVsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgICAgICAgdHJ5Rm9jdXMoZ2V0UmV0dXJuRm9jdXNOb2RlKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvblBvc3REZWFjdGl2YXRlID09PSBudWxsIHx8IG9uUG9zdERlYWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUG9zdERlYWN0aXZhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKHJldHVybkZvY3VzICYmIGNoZWNrQ2FuUmV0dXJuRm9jdXMpIHtcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSkudGhlbihmaW5pc2hEZWFjdGl2YXRpb24sIGZpbmlzaERlYWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoRGVhY3RpdmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZShwYXVzZU9wdGlvbnMpIHtcbiAgICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvblBhdXNlID0gZ2V0T3B0aW9uKHBhdXNlT3B0aW9ucywgJ29uUGF1c2UnKTtcbiAgICAgIHZhciBvblBvc3RQYXVzZSA9IGdldE9wdGlvbihwYXVzZU9wdGlvbnMsICdvblBvc3RQYXVzZScpO1xuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIG9uUGF1c2UgPT09IG51bGwgfHwgb25QYXVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25QYXVzZSgpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICBvblBvc3RQYXVzZSA9PT0gbnVsbCB8fCBvblBvc3RQYXVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0UGF1c2UoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdW5wYXVzZTogZnVuY3Rpb24gdW5wYXVzZSh1bnBhdXNlT3B0aW9ucykge1xuICAgICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvblVucGF1c2UgPSBnZXRPcHRpb24odW5wYXVzZU9wdGlvbnMsICdvblVucGF1c2UnKTtcbiAgICAgIHZhciBvblBvc3RVbnBhdXNlID0gZ2V0T3B0aW9uKHVucGF1c2VPcHRpb25zLCAnb25Qb3N0VW5wYXVzZScpO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICBvblVucGF1c2UgPT09IG51bGwgfHwgb25VbnBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblVucGF1c2UoKTtcbiAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgb25Qb3N0VW5wYXVzZSA9PT0gbnVsbCB8fCBvblBvc3RVbnBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3RVbnBhdXNlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzOiBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJFbGVtZW50cyhjb250YWluZXJFbGVtZW50cykge1xuICAgICAgdmFyIGVsZW1lbnRzQXNBcnJheSA9IFtdLmNvbmNhdChjb250YWluZXJFbGVtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgc3RhdGUuY29udGFpbmVycyA9IGVsZW1lbnRzQXNBcnJheS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgLy8gaW5pdGlhbGl6ZSBjb250YWluZXIgZWxlbWVudHNcbiAgdHJhcC51cGRhdGVDb250YWluZXJFbGVtZW50cyhlbGVtZW50cyk7XG4gIHJldHVybiB0cmFwO1xufTtcblxuY29uc3QgdHJhcFN0YWNrID0gW107XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgdGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtGb2N1c1RyYXBDb21wb25lbnR9IGNvbXBvbmVudCBUaGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RGb2N1c1RyYXAoY29tcG9uZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgZm9jdXNUcmFwTm9kZSA9IG9wdGlvbnM/LmZvY3VzVHJhcEVsIHx8IGVsO1xuICBpZiAoIWZvY3VzVHJhcE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZm9jdXNUcmFwT3B0aW9ucyA9IHtcbiAgICBjbGlja091dHNpZGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgZmFsbGJhY2tGb2N1czogZm9jdXNUcmFwTm9kZSxcbiAgICBzZXRSZXR1cm5Gb2N1czogKGVsKSA9PiB7XG4gICAgICBmb2N1c0VsZW1lbnQoZWwpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLi4ub3B0aW9ucz8uZm9jdXNUcmFwT3B0aW9ucyxcbiAgICAvLyB0aGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIG5vdCBvdmVycmlkZWFibGVcbiAgICBkb2N1bWVudDogZWwub3duZXJEb2N1bWVudCxcbiAgICB0YWJiYWJsZU9wdGlvbnMsXG4gICAgdHJhcFN0YWNrXG4gIH07XG4gIGNvbXBvbmVudC5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAoZm9jdXNUcmFwTm9kZSwgZm9jdXNUcmFwT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byBhY3RpdmF0ZSB0aGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0ZvY3VzVHJhcENvbXBvbmVudH0gY29tcG9uZW50IFRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICogQHBhcmFtIFtvcHRpb25zXSBUaGUgRm9jdXNUcmFwIGFjdGl2YXRlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlRm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBpZiAoIWNvbXBvbmVudC5mb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5mb2N1c1RyYXA/LmFjdGl2YXRlKG9wdGlvbnMpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byBkZWFjdGl2YXRlIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAcGFyYW0gW29wdGlvbnNdIFRoZSBGb2N1c1RyYXAgZGVhY3RpdmF0ZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBkZWFjdGl2YXRlRm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBjb21wb25lbnQuZm9jdXNUcmFwPy5kZWFjdGl2YXRlKG9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdXBkYXRlIHRoZSBlbGVtZW50KHMpIHRoYXQgYXJlIHVzZWQgd2l0aGluIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS1tb2RhbFwiKTtcbiAqIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbGNpdGUtaW5wdXRcIik7XG4gKiBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAqIGF3YWl0IGlucHV0LmNvbXBvbmVudE9uUmVhZHkoKTtcbiAqIGF3YWl0IG1vZGFsLnVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKCk7XG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5wdXQuc2V0Rm9jdXMoKSk7XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZm9jdXNUcmFwPy51cGRhdGVDb250YWluZXJFbGVtZW50cyhjb21wb25lbnQuZWwpO1xufVxuXG5leHBvcnQgeyBhY3RpdmF0ZUZvY3VzVHJhcCBhcyBhLCBjb25uZWN0Rm9jdXNUcmFwIGFzIGMsIGRlYWN0aXZhdGVGb2N1c1RyYXAgYXMgZCwgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBGcmFnbWVudCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHMgYXMgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMsIGsgYXMgZm9jdXNGaXJzdFRhYmJhYmxlLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBTIGFzIFNMT1RTJDEsIGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9hY3Rpb24tbWVudS5qcyc7XG5pbXBvcnQgeyBIIGFzIEhlYWRpbmcgfSBmcm9tICcuL0hlYWRpbmcuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vcG9wb3Zlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vc2NyaW0uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbkJhckNvbnRhaW5lcjogXCJhY3Rpb24tYmFyLWNvbnRhaW5lclwiLFxuICBiYWNrQnV0dG9uOiBcImJhY2stYnV0dG9uXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBoZWFkaW5nOiBcImhlYWRpbmdcIixcbiAgc3VtbWFyeTogXCJzdW1tYXJ5XCIsXG4gIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIsXG4gIGhlYWRlckNvbnRlbnQ6IFwiaGVhZGVyLWNvbnRlbnRcIixcbiAgaGVhZGVyQWN0aW9uczogXCJoZWFkZXItYWN0aW9uc1wiLFxuICBoZWFkZXJBY3Rpb25zRW5kOiBcImhlYWRlci1hY3Rpb25zLS1lbmRcIixcbiAgaGVhZGVyQWN0aW9uc1N0YXJ0OiBcImhlYWRlci1hY3Rpb25zLS1zdGFydFwiLFxuICBjb250ZW50V3JhcHBlcjogXCJjb250ZW50LXdyYXBwZXJcIixcbiAgY29udGVudENvbnRhaW5lcjogXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICBjb250ZW50SGVpZ2h0OiBcImNvbnRlbnQtaGVpZ2h0XCIsXG4gIGZhYkNvbnRhaW5lcjogXCJmYWItY29udGFpbmVyXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBjbG9zZTogXCJ4XCIsXG4gIG1lbnU6IFwiZWxsaXBzaXNcIixcbiAgYmFja0xlZnQ6IFwiY2hldnJvbi1sZWZ0XCIsXG4gIGJhY2tSaWdodDogXCJjaGV2cm9uLXJpZ2h0XCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uQmFyOiBcImFjdGlvbi1iYXJcIixcbiAgaGVhZGVyQWN0aW9uc1N0YXJ0OiBcImhlYWRlci1hY3Rpb25zLXN0YXJ0XCIsXG4gIGhlYWRlckFjdGlvbnNFbmQ6IFwiaGVhZGVyLWFjdGlvbnMtZW5kXCIsXG4gIGhlYWRlck1lbnVBY3Rpb25zOiBcImhlYWRlci1tZW51LWFjdGlvbnNcIixcbiAgaGVhZGVyQ29udGVudDogXCJoZWFkZXItY29udGVudFwiLFxuICBmYWI6IFwiZmFiXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgZm9vdGVyQWN0aW9uczogXCJmb290ZXItYWN0aW9uc1wiXG59O1xuXG5jb25zdCBwYW5lbENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bztvdmVyZmxvdzpoaWRkZW47LS1jYWxjaXRlLW1pbi1oZWFkZXItaGVpZ2h0OmNhbGModmFyKC0tY2FsY2l0ZS1pY29uLXNpemUpICogMyk7LS1jYWxjaXRlLXBhbmVsLWZvb3Rlci1wYWRkaW5nOjAuNXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmhlYWRlcnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uaGVhZGluZ3ttYXJnaW46MHB4O3BhZGRpbmc6MHB4O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0uaGVhZGVyIC5oZWFkaW5ne2ZsZXg6MSAxIGF1dG87cGFkZGluZzowLjVyZW19LmNvbnRhaW5lcnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO3BhZGRpbmc6MHB4O3RyYW5zaXRpb246bWF4LWJsb2NrLXNpemUgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgaW5saW5lLXNpemUgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY29udGFpbmVyW2hpZGRlbl17ZGlzcGxheTpub25lfS5oZWFkZXJ7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7aW5saW5lLXNpemU6MTAwJTthbGlnbi1pdGVtczpzdHJldGNoO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7ZmxleDowIDAgYXV0b30uYWN0aW9uLWJhci1jb250YWluZXJ7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7aW5saW5lLXNpemU6MTAwJTtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5hY3Rpb24tYmFyLWNvbnRhaW5lciA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tYmFyKXtpbmxpbmUtc2l6ZToxMDAlfS5oZWFkZXItY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLWlubGluZTowLjc1cmVtO3BhZGRpbmctYmxvY2s6MC44NzVyZW07bWFyZ2luLWlubGluZS1lbmQ6YXV0b30uaGVhZGVyLWNvbnRlbnQgLmhlYWRpbmcsLmhlYWRlci1jb250ZW50IC5kZXNjcmlwdGlvbntkaXNwbGF5OmJsb2NrO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtwYWRkaW5nOjBweH0uaGVhZGVyLWNvbnRlbnQgLmhlYWRpbmd7bWFyZ2luLWlubGluZTowcHg7bWFyZ2luLWJsb2NrOjBweCAwLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0uaGVhZGVyLWNvbnRlbnQgLmhlYWRpbmc6b25seS1jaGlsZHttYXJnaW4tYmxvY2stZW5kOjBweH0uaGVhZGVyLWNvbnRlbnQgLmRlc2NyaXB0aW9ue2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmJhY2stYnV0dG9ue2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHh9LmhlYWRlci1hY3Rpb25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpzdHJldGNofS5oZWFkZXItYWN0aW9ucy0tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b30uY29udGVudC13cmFwcGVye292ZXJmbG93OmF1dG99LmNvbnRlbnQtaGVpZ2h0e2Jsb2NrLXNpemU6MTAwJX0uY29udGVudC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCl9LmZvb3Rlcntib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2ZsZXg6MCAwIGF1dG87cGFkZGluZzp2YXIoLS1jYWxjaXRlLXBhbmVsLWZvb3Rlci1wYWRkaW5nKX0uZmFiLWNvbnRhaW5lcntwb3NpdGlvbjpzdGlja3k7aW5zZXQtYmxvY2stZW5kOjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtc3RpY2t5KTttYXJnaW4tYmxvY2s6MHB4O21hcmdpbi1pbmxpbmU6YXV0bztkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MC41cmVtO2luc2V0LWlubGluZTowO2lubGluZS1zaXplOi1tb3otZml0LWNvbnRlbnQ7aW5saW5lLXNpemU6Zml0LWNvbnRlbnR9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBQYW5lbCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlUGFuZWxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBhbmVsQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUGFuZWxTY3JvbGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQYW5lbFNjcm9sbFwiLCA2KTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5yZXNpemVIYW5kbGVyKCkpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMucmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcGFuZWxTY3JvbGxFbCB9ID0gdGhpcztcbiAgICAgIGlmICghcGFuZWxTY3JvbGxFbCB8fFxuICAgICAgICB0eXBlb2YgcGFuZWxTY3JvbGxFbC5zY3JvbGxIZWlnaHQgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIHBhbmVsU2Nyb2xsRWwub2Zmc2V0SGVpZ2h0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhbmVsU2Nyb2xsRWwudGFiSW5kZXggPSBwYW5lbFNjcm9sbEVsLnNjcm9sbEhlaWdodCA+IHBhbmVsU2Nyb2xsRWwub2Zmc2V0SGVpZ2h0ID8gMCA6IC0xO1xuICAgIH07XG4gICAgdGhpcy5zZXRDb250YWluZXJSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXJFbCA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnNldENsb3NlUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b25FbCA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnNldEJhY2tSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5iYWNrQnV0dG9uRWwgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5wYW5lbEtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9zYWJsZSAmJiBldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsY2l0ZVBhbmVsQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5wYW5lbFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVQYW5lbFNjcm9sbC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlckFjdGlvbnNTdGFydFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzU3RhcnRBY3Rpb25zID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlckFjdGlvbnNFbmRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSGVhZGVyTWVudUFjdGlvbnNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc01lbnVJdGVtcyA9ICEhZWxlbWVudHMubGVuZ3RoO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25CYXJTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25CYXJzID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb24tYmFyXCIpKTtcbiAgICAgIGFjdGlvbkJhcnMuZm9yRWFjaCgoYWN0aW9uQmFyKSA9PiAoYWN0aW9uQmFyLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiKSk7XG4gICAgICB0aGlzLmhhc0FjdGlvbkJhciA9ICEhYWN0aW9uQmFycy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlckNvbnRlbnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc0hlYWRlckNvbnRlbnQgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRm9vdGVyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNGb290ZXJDb250ZW50ID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUZvb3RlckFjdGlvbnNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc0Zvb3RlckFjdGlvbnMgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRmFiU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNGYWIgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuc2V0UGFuZWxTY3JvbGxFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5wYW5lbFNjcm9sbEVsID0gZWw7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZShlbCk7XG4gICAgICAgIHRoaXMucmVzaXplSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc1N0YXJ0QWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRW5kQWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzTWVudUl0ZW1zID0gZmFsc2U7XG4gICAgdGhpcy5oYXNIZWFkZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBY3Rpb25CYXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0Zvb3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0Zvb3RlckFjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0ZhYiA9IGZhbHNlO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgfVxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0byBhIHNwZWNpZmllZCBzZXQgb2YgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIG15Q2FsY2l0ZUZsb3dJdGVtLnNjcm9sbENvbnRlbnRUbyh7XG4gICAqICAgbGVmdDogMCwgLy8gU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGFsb25nIHRoZSBYIGF4aXMgdG8gc2Nyb2xsIHRoZSB3aW5kb3cgb3IgZWxlbWVudC5cbiAgICogICB0b3A6IDAsIC8vIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBpeGVscyBhbG9uZyB0aGUgWSBheGlzIHRvIHNjcm9sbCB0aGUgd2luZG93IG9yIGVsZW1lbnRcbiAgICogICBiZWhhdmlvcjogXCJhdXRvXCIgLy8gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYW5pbWF0ZSBzbW9vdGhseSAoc21vb3RoKSwgb3IgaGFwcGVuIGluc3RhbnRseSBpbiBhIHNpbmdsZSBqdW1wIChhdXRvLCB0aGUgZGVmYXVsdCB2YWx1ZSkuXG4gICAqIH0pO1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgYXN5bmMgc2Nyb2xsQ29udGVudFRvKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBhbmVsU2Nyb2xsRWw/LnNjcm9sbFRvKG9wdGlvbnMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJIZWFkZXJDb250ZW50KCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgaGVhZGluZ0xldmVsLCBkZXNjcmlwdGlvbiwgaGFzSGVhZGVyQ29udGVudCB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGhlYWRpbmcgPyAoaChIZWFkaW5nLCB7IGNsYXNzOiBDU1MuaGVhZGluZywgbGV2ZWw6IGhlYWRpbmdMZXZlbCB9LCBoZWFkaW5nKSkgOiBudWxsO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRlc2NyaXB0aW9uID8gaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGw7XG4gICAgcmV0dXJuICFoYXNIZWFkZXJDb250ZW50ICYmIChoZWFkaW5nTm9kZSB8fCBkZXNjcmlwdGlvbk5vZGUpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlckNvbnRlbnQsIGtleTogXCJoZWFkZXItY29udGVudFwiIH0sIGhlYWRpbmdOb2RlLCBkZXNjcmlwdGlvbk5vZGUpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uQmFyKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uQmFyQ29udGFpbmVyLCBoaWRkZW46ICF0aGlzLmhhc0FjdGlvbkJhciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbkJhciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gb3ZlcnJpZGUgdGhlIGVudGlyZSBoZWFkZXItY29udGVudCBub2RlLlxuICAgKi9cbiAgcmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXJDb250ZW50LCBoaWRkZW46ICF0aGlzLmhhc0hlYWRlckNvbnRlbnQsIGtleTogXCJzbG90dGVkLWhlYWRlci1jb250ZW50XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJDb250ZW50LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyQ29udGVudFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJIZWFkZXJTdGFydEFjdGlvbnMoKSB7XG4gICAgY29uc3QgeyBoYXNTdGFydEFjdGlvbnMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5oZWFkZXJBY3Rpb25zU3RhcnRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIWhhc1N0YXJ0QWN0aW9ucywga2V5OiBcImhlYWRlci1hY3Rpb25zLXN0YXJ0XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJBY3Rpb25zU3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zU3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGNsb3NlLCBoYXNFbmRBY3Rpb25zLCBtZXNzYWdlcywgY2xvc2FibGUsIGhhc01lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZXMuY2xvc2U7XG4gICAgY29uc3QgY2xvc2FibGVOb2RlID0gY2xvc2FibGUgPyAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRleHQsIFwiZGF0YS10ZXN0XCI6IFwiY2xvc2VcIiwgaWNvbjogSUNPTlMuY2xvc2UsIG9uQ2xpY2s6IGNsb3NlLCB0ZXh0OiB0ZXh0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q2xvc2VSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBzbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zRW5kU2xvdENoYW5nZSB9KSk7XG4gICAgY29uc3Qgc2hvd0NvbnRhaW5lciA9IGhhc0VuZEFjdGlvbnMgfHwgY2xvc2FibGVOb2RlIHx8IGhhc01lbnVJdGVtcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhlYWRlckFjdGlvbnNFbmRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIXNob3dDb250YWluZXIsIGtleTogXCJoZWFkZXItYWN0aW9ucy1lbmRcIiB9LCBzbG90Tm9kZSwgdGhpcy5yZW5kZXJNZW51KCksIGNsb3NhYmxlTm9kZSkpO1xuICB9XG4gIHJlbmRlck1lbnUoKSB7XG4gICAgY29uc3QgeyBoYXNNZW51SXRlbXMsIG1lc3NhZ2VzLCBtZW51T3BlbiB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIHsgZmxpcFBsYWNlbWVudHM6IFtcInRvcFwiLCBcImJvdHRvbVwiXSwgaGlkZGVuOiAhaGFzTWVudUl0ZW1zLCBrZXk6IFwibWVudVwiLCBsYWJlbDogbWVzc2FnZXMub3B0aW9ucywgb3BlbjogbWVudU9wZW4sIHBsYWNlbWVudDogXCJib3R0b20tZW5kXCIgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgaWNvbjogSUNPTlMubWVudSwgc2xvdDogU0xPVFMkMS50cmlnZ2VyLCB0ZXh0OiBtZXNzYWdlcy5vcHRpb25zIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlck1lbnVBY3Rpb25zLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyTWVudUFjdGlvbnNTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhhc0hlYWRlckNvbnRlbnQsIGhhc1N0YXJ0QWN0aW9ucywgaGFzRW5kQWN0aW9ucywgY2xvc2FibGUsIGhhc01lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJDb250ZW50Tm9kZSA9IHRoaXMucmVuZGVySGVhZGVyQ29udGVudCgpO1xuICAgIGNvbnN0IHNob3dIZWFkZXIgPSBoYXNIZWFkZXJDb250ZW50IHx8XG4gICAgICBoZWFkZXJDb250ZW50Tm9kZSB8fFxuICAgICAgaGFzU3RhcnRBY3Rpb25zIHx8XG4gICAgICBoYXNFbmRBY3Rpb25zIHx8XG4gICAgICBjbG9zYWJsZSB8fFxuICAgICAgaGFzTWVudUl0ZW1zO1xuICAgIHJldHVybiAoaChcImhlYWRlclwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyLCBoaWRkZW46ICFzaG93SGVhZGVyIH0sIHRoaXMucmVuZGVySGVhZGVyU3RhcnRBY3Rpb25zKCksIHRoaXMucmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSwgaGVhZGVyQ29udGVudE5vZGUsIHRoaXMucmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpKSk7XG4gIH1cbiAgcmVuZGVyRm9vdGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhhc0Zvb3RlckNvbnRlbnQsIGhhc0Zvb3RlckFjdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2hvd0Zvb3RlciA9IGhhc0Zvb3RlckNvbnRlbnQgfHwgaGFzRm9vdGVyQWN0aW9ucztcbiAgICByZXR1cm4gKGgoXCJmb290ZXJcIiwgeyBjbGFzczogQ1NTLmZvb3RlciwgaGlkZGVuOiAhc2hvd0Zvb3RlciB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJmb290ZXItc2xvdFwiLCBuYW1lOiBTTE9UUy5mb290ZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGb290ZXJTbG90Q2hhbmdlIH0pLCBoKFwic2xvdFwiLCB7IGtleTogXCJmb290ZXItYWN0aW9ucy1zbG90XCIsIG5hbWU6IFNMT1RTLmZvb3RlckFjdGlvbnMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGb290ZXJBY3Rpb25zU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoYXNGYWIgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmYXVsdFNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwiZGVmYXVsdC1zbG90XCIgfSk7XG4gICAgY29uc3QgY29udGFpbmVyTm9kZSA9IGhhc0ZhYiA/IChoKFwic2VjdGlvblwiLCB7IGNsYXNzOiBDU1MuY29udGVudENvbnRhaW5lciB9LCBkZWZhdWx0U2xvdE5vZGUpKSA6IChkZWZhdWx0U2xvdE5vZGUpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGVudFdyYXBwZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRlbnRDb250YWluZXJdOiAhaGFzRmFiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRIZWlnaHRdOiBoYXNGYWJcbiAgICAgIH0sIG9uU2Nyb2xsOiB0aGlzLnBhbmVsU2Nyb2xsSGFuZGxlcixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFBhbmVsU2Nyb2xsRWwgfSwgY29udGFpbmVyTm9kZSwgdGhpcy5yZW5kZXJGYWIoKSkpO1xuICB9XG4gIHJlbmRlckZhYigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmZhYkNvbnRhaW5lciwgaGlkZGVuOiAhdGhpcy5oYXNGYWIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mYWIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGYWJTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcGFuZWxLZXlEb3duSGFuZGxlciwgY2xvc2VkLCBjbG9zYWJsZSB9ID0gdGhpcztcbiAgICBjb25zdCBwYW5lbE5vZGUgPSAoaChcImFydGljbGVcIiwgeyBcImFyaWEtYnVzeVwiOiB0b0FyaWFCb29sZWFuKGxvYWRpbmcpLCBjbGFzczogQ1NTLmNvbnRhaW5lciwgaGlkZGVuOiBjbG9zZWQsIG9uS2V5RG93bjogcGFuZWxLZXlEb3duSGFuZGxlciwgdGFiSW5kZXg6IGNsb3NhYmxlID8gMCA6IC0xLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q29udGFpbmVyUmVmIH0sIHRoaXMucmVuZGVySGVhZGVyTm9kZSgpLCB0aGlzLnJlbmRlckFjdGlvbkJhcigpLCB0aGlzLnJlbmRlckNvbnRlbnQoKSwgdGhpcy5yZW5kZXJGb290ZXJOb2RlKCkpKTtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGxvYWRpbmcgPyBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGxvYWRpbmc6IGxvYWRpbmcgfSkgOiBudWxsLCBwYW5lbE5vZGUpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwYW5lbENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1wYW5lbFwiLCB7XG4gICAgXCJjbG9zZWRcIjogWzE1NDBdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJjbG9zYWJsZVwiOiBbNTE2XSxcbiAgICBcImhlYWRpbmdMZXZlbFwiOiBbNTE0LCBcImhlYWRpbmctbGV2ZWxcIl0sXG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwiaGVhZGluZ1wiOiBbMV0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBbMV0sXG4gICAgXCJtZW51T3BlblwiOiBbNTE2LCBcIm1lbnUtb3BlblwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwiaGFzU3RhcnRBY3Rpb25zXCI6IFszMl0sXG4gICAgXCJoYXNFbmRBY3Rpb25zXCI6IFszMl0sXG4gICAgXCJoYXNNZW51SXRlbXNcIjogWzMyXSxcbiAgICBcImhhc0hlYWRlckNvbnRlbnRcIjogWzMyXSxcbiAgICBcImhhc0FjdGlvbkJhclwiOiBbMzJdLFxuICAgIFwiaGFzRm9vdGVyQ29udGVudFwiOiBbMzJdLFxuICAgIFwiaGFzRm9vdGVyQWN0aW9uc1wiOiBbMzJdLFxuICAgIFwiaGFzRmFiXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XSxcbiAgICBcInNjcm9sbENvbnRlbnRUb1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtcGFuZWxcIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiLCBcImNhbGNpdGUtcG9wb3ZlclwiLCBcImNhbGNpdGUtc2NyaW1cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtcGFuZWxcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBQYW5lbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcG9wb3ZlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1zY3JpbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgUGFuZWwgYXMgUCwgU0xPVFMgYXMgUywgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGZvcmNlVXBkYXRlLCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZiBhcyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMsIGMgYXMgY29ubmVjdEZsb2F0aW5nVUksIGIgYXMgZGVmYXVsdE9mZnNldERpc3RhbmNlLCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCByIGFzIHJlcG9zaXRpb24sIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLmpzJztcbmltcG9ydCB7IGQgYXMgZGVhY3RpdmF0ZUZvY3VzVHJhcCwgYSBhcyBhY3RpdmF0ZUZvY3VzVHJhcCwgYyBhcyBjb25uZWN0Rm9jdXNUcmFwLCB1IGFzIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzIH0gZnJvbSAnLi9mb2N1c1RyYXBDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB0IGFzIHRvQXJpYUJvb2xlYW4sIGsgYXMgZm9jdXNGaXJzdFRhYmJhYmxlLCB1IGFzIHF1ZXJ5RWxlbWVudFJvb3RzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgSCBhcyBIZWFkaW5nIH0gZnJvbSAnLi9IZWFkaW5nLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgRiBhcyBGbG9hdGluZ0Fycm93IH0gZnJvbSAnLi9GbG9hdGluZ0Fycm93LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBpbWFnZUNvbnRhaW5lcjogXCJpbWFnZS1jb250YWluZXJcIixcbiAgY2xvc2VCdXR0b25Db250YWluZXI6IFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclwiLFxuICBjbG9zZUJ1dHRvbjogXCJjbG9zZS1idXR0b25cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGhhc0hlYWRlcjogXCJoYXMtaGVhZGVyXCIsXG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgaGVhZGVyQ29udGVudDogXCJoZWFkZXItY29udGVudFwiLFxuICBoZWFkaW5nOiBcImhlYWRpbmdcIlxufTtcbmNvbnN0IGRlZmF1bHRQb3BvdmVyUGxhY2VtZW50ID0gXCJhdXRvXCI7XG5jb25zdCBBUklBX0NPTlRST0xTID0gXCJhcmlhLWNvbnRyb2xzXCI7XG5jb25zdCBBUklBX0VYUEFOREVEID0gXCJhcmlhLWV4cGFuZGVkXCI7XG5cbmNsYXNzIFBvcG92ZXJNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFByb3BlcnRpZXNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID0gMDtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnF1ZXJ5UG9wb3ZlciA9IChjb21wb3NlZFBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVnaXN0ZXJlZEVsZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmVnaXN0ZXJlZEVsZW1lbnQgPSBjb21wb3NlZFBhdGguZmluZCgocGF0aEVsKSA9PiByZWdpc3RlcmVkRWxlbWVudHMuaGFzKHBhdGhFbCkpO1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRFbGVtZW50cy5nZXQocmVnaXN0ZXJlZEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVQb3BvdmVycyA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBjb25zdCB0b2dnbGVQb3BvdmVyID0gdGhpcy5xdWVyeVBvcG92ZXIoY29tcG9zZWRQYXRoKTtcbiAgICAgIGlmICh0b2dnbGVQb3BvdmVyICYmICF0b2dnbGVQb3BvdmVyLnRyaWdnZXJEaXNhYmxlZCkge1xuICAgICAgICB0b2dnbGVQb3BvdmVyLm9wZW4gPSAhdG9nZ2xlUG9wb3Zlci5vcGVuO1xuICAgICAgfVxuICAgICAgQXJyYXkuZnJvbSh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy52YWx1ZXMoKSlcbiAgICAgICAgLmZpbHRlcigocG9wb3ZlcikgPT4gcG9wb3ZlciAhPT0gdG9nZ2xlUG9wb3ZlciAmJiBwb3BvdmVyLmF1dG9DbG9zZSAmJiBwb3BvdmVyLm9wZW4gJiYgIWNvbXBvc2VkUGF0aC5pbmNsdWRlcyhwb3BvdmVyKSlcbiAgICAgICAgLmZvckVhY2goKHBvcG92ZXIpID0+IChwb3BvdmVyLm9wZW4gPSBmYWxzZSkpO1xuICAgIH07XG4gICAgdGhpcy5rZXlIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxQb3BvdmVycygpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy50b2dnbGVQb3BvdmVycyhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUG9wb3ZlcnMoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlZ2lzdGVyRWxlbWVudChyZWZlcmVuY2VFbCwgcG9wb3Zlcikge1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCsrO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLnNldChyZWZlcmVuY2VFbCwgcG9wb3Zlcik7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbiAgdW5yZWdpc3RlckVsZW1lbnQocmVmZXJlbmNlRWwpIHtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudHMuZGVsZXRlKHJlZmVyZW5jZUVsKSkge1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50LS07XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG4gIGNsb3NlQWxsUG9wb3ZlcnMoKSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy52YWx1ZXMoKSkuZm9yRWFjaCgocG9wb3ZlcikgPT4gKHBvcG92ZXIub3BlbiA9IGZhbHNlKSk7XG4gIH1cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLmNsaWNrSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5jbGlja0hhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxufVxuXG5jb25zdCBwb3BvdmVyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1wb3BvdmVyLXotaW5kZXgsIHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtcG9wdXApKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49dG9wXSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49bGVmdF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW2NhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXSl7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93e3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDpjYWxjKHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpICogLTEpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93X19zdHJva2V7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFtzY2FsZT1zXSkgLmhlYWRpbmd7cGFkZGluZy1pbmxpbmU6MC43NXJlbTtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1tXSkgLmhlYWRpbmd7cGFkZGluZy1pbmxpbmU6MXJlbTtwYWRkaW5nLWJsb2NrOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1sXSkgLmhlYWRpbmd7cGFkZGluZy1pbmxpbmU6MS4yNXJlbTtwYWRkaW5nLWJsb2NrOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0e3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW29wZW5dKXtwb2ludGVyLWV2ZW50czppbml0aWFsfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17Ym9yZGVyLXJhZGl1czowLjI1cmVtO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uYXJyb3c6OmJlZm9yZXtvdXRsaW5lOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX0uaGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX0uaGVhZGluZ3ttYXJnaW46MHB4O2Rpc3BsYXk6YmxvY2s7ZmxleDoxIDEgYXV0bzthbGlnbi1zZWxmOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3JtYWw7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6bm93cmFwO2JvcmRlci1yYWRpdXM6MC4yNXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNvbnRhaW5lci5oYXMtaGVhZGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uY29udGVudHtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24tc2VsZjpjZW50ZXI7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfS5jbG9zZS1idXR0b24tY29udGFpbmVye2Rpc3BsYXk6ZmxleDtvdmVyZmxvdzpoaWRkZW47ZmxleDowIDAgYXV0bztib3JkZXItc3RhcnQtZW5kLXJhZGl1czowLjI1cmVtO2JvcmRlci1lbmQtZW5kLXJhZGl1czowLjI1cmVtfTo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSw6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KXtibG9jay1zaXplOjEwMCV9XCI7XG5cbmNvbnN0IG1hbmFnZXIgPSBuZXcgUG9wb3Zlck1hbmFnZXIoKTtcbmNvbnN0IFBvcG92ZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBvcG92ZXJCZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQb3BvdmVyQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckJlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQb3BvdmVyQmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBvcG92ZXJPcGVuXCIsIDYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBQcm9wZXJ0aWVzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVGb2N1c1RyYXBFbGVtZW50cygpKTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1wb3BvdmVyLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICB0aGlzLmhhc0xvYWRlZCA9IGZhbHNlO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbkVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbCA9IGVsO1xuICAgICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlbCwgZmxpcFBsYWNlbWVudHMgfSA9IHRoaXM7XG4gICAgICB0aGlzLmZpbHRlcmVkRmxpcFBsYWNlbWVudHMgPSBmbGlwUGxhY2VtZW50c1xuICAgICAgICA/IGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyhmbGlwUGxhY2VtZW50cywgZWwpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50ID0gKHdhcm4gPSB0cnVlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMoKTtcbiAgICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuZ2V0UmVmZXJlbmNlRWxlbWVudCgpO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICAgIGNvbnN0IHsgZWwsIHJlZmVyZW5jZUVsZW1lbnQsIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAod2FybiAmJiByZWZlcmVuY2VFbGVtZW50ICYmICFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlbC50YWdOYW1lfTogcmVmZXJlbmNlLWVsZW1lbnQgaWQgXCIke3JlZmVyZW5jZUVsZW1lbnR9XCIgd2FzIG5vdCBmb3VuZC5gLCB7XG4gICAgICAgICAgZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZFJlZmVyZW5jZXMoKTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0SWQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQ7XG4gICAgfTtcbiAgICB0aGlzLnNldEV4cGFuZGVkQXR0ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgb3BlbiB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoXCJzZXRBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQuc2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQsIHRvQXJpYUJvb2xlYW4ob3BlbikpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hZGRSZWZlcmVuY2VzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCgpO1xuICAgICAgaWYgKFwic2V0QXR0cmlidXRlXCIgaW4gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0NPTlRST0xTLCBpZCk7XG4gICAgICB9XG4gICAgICBtYW5hZ2VyLnJlZ2lzdGVyRWxlbWVudChlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICAgIHRoaXMuc2V0RXhwYW5kZWRBdHRyKCk7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFwicmVtb3ZlQXR0cmlidXRlXCIgaW4gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShBUklBX0NPTlRST0xTKTtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRCk7XG4gICAgICB9XG4gICAgICBtYW5hZ2VyLnVucmVnaXN0ZXJFbGVtZW50KGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy5oaWRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlQXJyb3dFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5hcnJvd0VsID0gZWw7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmF1dG9DbG9zZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2FibGUgPSBmYWxzZTtcbiAgICB0aGlzLmZsaXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBvaW50ZXJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vZmZzZXREaXN0YW5jZSA9IGRlZmF1bHRPZmZzZXREaXN0YW5jZTtcbiAgICB0aGlzLm9mZnNldFNraWRkaW5nID0gMDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnBsYWNlbWVudCA9IGRlZmF1bHRQb3BvdmVyUGxhY2VtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50cmlnZ2VyRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5mbG9hdGluZ0xheW91dCA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaGFuZGxlZm9jdXNUcmFwRGlzYWJsZWQoZm9jdXNUcmFwRGlzYWJsZWQpIHtcbiAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb2N1c1RyYXBEaXNhYmxlZCA/IGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcykgOiBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBmbGlwUGxhY2VtZW50c0hhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIG9mZnNldERpc3RhbmNlT2Zmc2V0SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgb2Zmc2V0U2tpZGRpbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnNldEV4cGFuZGVkQXR0cigpO1xuICB9XG4gIG92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHBsYWNlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHJlZmVyZW5jZUVsZW1lbnRIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQodGhpcy5oYXNMb2FkZWQpO1xuICAgIGNvbm5lY3RGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGlmICh0aGlzLnJlZmVyZW5jZUVsZW1lbnQgJiYgIXRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICB9XG4gICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgdGhpcy5oYXNMb2FkZWQgPSB0cnVlO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlUmVmZXJlbmNlcygpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgdGhpcy5lbCk7XG4gICAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5ZWRcbiAgICovXG4gIGFzeW5jIHJlcG9zaXRpb24oZGVsYXllZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBlbCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgcGxhY2VtZW50LCBvdmVybGF5UG9zaXRpb25pbmcsIGZsaXBEaXNhYmxlZCwgZmlsdGVyZWRGbGlwUGxhY2VtZW50cywgb2Zmc2V0RGlzdGFuY2UsIG9mZnNldFNraWRkaW5nLCBhcnJvd0VsIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWw6IGVsLFxuICAgICAgcmVmZXJlbmNlRWw6IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsXG4gICAgICBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBmbGlwRGlzYWJsZWQsXG4gICAgICBmbGlwUGxhY2VtZW50czogZmlsdGVyZWRGbGlwUGxhY2VtZW50cyxcbiAgICAgIG9mZnNldERpc3RhbmNlLFxuICAgICAgb2Zmc2V0U2tpZGRpbmcsXG4gICAgICBhcnJvd0VsLFxuICAgICAgdHlwZTogXCJwb3BvdmVyXCJcbiAgICB9LCBkZWxheWVkKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgZm9yY2VVcGRhdGUodGhpcy5lbCk7XG4gICAgZm9jdXNGaXJzdFRhYmJhYmxlKHRoaXMuZWwpO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50KHMpIHRoYXQgYXJlIHVzZWQgd2l0aGluIHRoZSBmb2N1cy10cmFwIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBhc3luYyB1cGRhdGVGb2N1c1RyYXBFbGVtZW50cygpIHtcbiAgICB1cGRhdGVGb2N1c1RyYXBFbGVtZW50cyh0aGlzKTtcbiAgfVxuICBnZXRSZWZlcmVuY2VFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlRWxlbWVudCwgZWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuICgodHlwZW9mIHJlZmVyZW5jZUVsZW1lbnQgPT09IFwic3RyaW5nXCJcbiAgICAgID8gcXVlcnlFbGVtZW50Um9vdHMoZWwsIHsgaWQ6IHJlZmVyZW5jZUVsZW1lbnQgfSlcbiAgICAgIDogcmVmZXJlbmNlRWxlbWVudCkgfHwgbnVsbCk7XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3Zlck9wZW4uZW1pdCgpO1xuICAgIGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJDbG9zZS5lbWl0KCk7XG4gICAgZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyQ2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcywgY2xvc2FibGUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGNsb3NhYmxlID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNsb3NlQnV0dG9uQ29udGFpbmVyLCBrZXk6IENTUy5jbG9zZUJ1dHRvbkNvbnRhaW5lciB9LCBoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGNsYXNzOiBDU1MuY2xvc2VCdXR0b24sIG9uQ2xpY2s6IHRoaXMuaGlkZSwgc2NhbGU6IHRoaXMuc2NhbGUsIHRleHQ6IG1lc3NhZ2VzLmNsb3NlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChjbG9zZUJ1dHRvbkVsKSA9PiAodGhpcy5jbG9zZUJ1dHRvbkVsID0gY2xvc2VCdXR0b25FbCkgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IHRoaXMuc2NhbGUgfSkpKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICBjb25zdCB7IGhlYWRpbmcsIGhlYWRpbmdMZXZlbCB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGhlYWRpbmcgPyAoaChIZWFkaW5nLCB7IGNsYXNzOiBDU1MuaGVhZGluZywgbGV2ZWw6IGhlYWRpbmdMZXZlbCB9LCBoZWFkaW5nKSkgOiBudWxsO1xuICAgIHJldHVybiBoZWFkaW5nTm9kZSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXIsIGtleTogQ1NTLmhlYWRlciB9LCBoZWFkaW5nTm9kZSwgdGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIGhlYWRpbmcsIGxhYmVsLCBvcGVuLCBwb2ludGVyRGlzYWJsZWQsIGZsb2F0aW5nTGF5b3V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgJiYgb3BlbjtcbiAgICBjb25zdCBoaWRkZW4gPSAhZGlzcGxheWVkO1xuICAgIGNvbnN0IGFycm93Tm9kZSA9ICFwb2ludGVyRGlzYWJsZWQgPyAoaChGbG9hdGluZ0Fycm93LCB7IGZsb2F0aW5nTGF5b3V0OiBmbG9hdGluZ0xheW91dCwga2V5OiBcImZsb2F0aW5nLWFycm93XCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZUFycm93RWwgfSkpIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oaGlkZGVuKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgaWQ6IHRoaXMuZ2V0SWQoKSwgcm9sZTogXCJkaWFsb2dcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiBkaXNwbGF5ZWRcbiAgICAgIH0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgYXJyb3dOb2RlLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5oYXNIZWFkZXJdOiAhIWhlYWRpbmcsXG4gICAgICAgIFtDU1MuY29udGFpbmVyXTogdHJ1ZVxuICAgICAgfSB9LCB0aGlzLnJlbmRlckhlYWRlcigpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSwgIWhlYWRpbmcgPyB0aGlzLnJlbmRlckNsb3NlQnV0dG9uKCkgOiBudWxsKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZm9jdXNUcmFwRGlzYWJsZWRcIjogW1wiaGFuZGxlZm9jdXNUcmFwRGlzYWJsZWRcIl0sXG4gICAgXCJmbGlwUGxhY2VtZW50c1wiOiBbXCJmbGlwUGxhY2VtZW50c0hhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJvZmZzZXREaXN0YW5jZVwiOiBbXCJvZmZzZXREaXN0YW5jZU9mZnNldEhhbmRsZXJcIl0sXG4gICAgXCJvZmZzZXRTa2lkZGluZ1wiOiBbXCJvZmZzZXRTa2lkZGluZ0hhbmRsZXJcIl0sXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFtcIm92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXJcIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogW1wicGxhY2VtZW50SGFuZGxlclwiXSxcbiAgICBcInJlZmVyZW5jZUVsZW1lbnRcIjogW1wicmVmZXJlbmNlRWxlbWVudEhhbmRsZXJcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHBvcG92ZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtcG9wb3ZlclwiLCB7XG4gICAgXCJhdXRvQ2xvc2VcIjogWzUxNiwgXCJhdXRvLWNsb3NlXCJdLFxuICAgIFwiY2xvc2FibGVcIjogWzUxNl0sXG4gICAgXCJmbGlwRGlzYWJsZWRcIjogWzUxNiwgXCJmbGlwLWRpc2FibGVkXCJdLFxuICAgIFwiZm9jdXNUcmFwRGlzYWJsZWRcIjogWzUxNiwgXCJmb2N1cy10cmFwLWRpc2FibGVkXCJdLFxuICAgIFwicG9pbnRlckRpc2FibGVkXCI6IFs1MTYsIFwicG9pbnRlci1kaXNhYmxlZFwiXSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFsxNl0sXG4gICAgXCJoZWFkaW5nXCI6IFsxXSxcbiAgICBcImhlYWRpbmdMZXZlbFwiOiBbNTE0LCBcImhlYWRpbmctbGV2ZWxcIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm9mZnNldERpc3RhbmNlXCI6IFs1MTQsIFwib2Zmc2V0LWRpc3RhbmNlXCJdLFxuICAgIFwib2Zmc2V0U2tpZGRpbmdcIjogWzUxNCwgXCJvZmZzZXQtc2tpZGRpbmdcIl0sXG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbNTEzLCBcIm92ZXJsYXktcG9zaXRpb25pbmdcIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogWzUxM10sXG4gICAgXCJyZWZlcmVuY2VFbGVtZW50XCI6IFsxLCBcInJlZmVyZW5jZS1lbGVtZW50XCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ0cmlnZ2VyRGlzYWJsZWRcIjogWzUxNiwgXCJ0cmlnZ2VyLWRpc2FibGVkXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJmbG9hdGluZ0xheW91dFwiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudFwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJyZXBvc2l0aW9uXCI6IFs2NF0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwidXBkYXRlRm9jdXNUcmFwRWxlbWVudHNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXBvcG92ZXJcIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXBvcG92ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBQb3BvdmVyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgUG9wb3ZlciBhcyBQLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHNjcmltOiBcInNjcmltXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiXG59O1xuXG5jb25zdCBzY3JpbUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtb3ZlcmxheSk7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNofUBrZXlmcmFtZXMgY2FsY2l0ZS1zY3JpbS1mYWRlLWluezAley0tdHctYmctb3BhY2l0eTowfTEwMCV7LS10dy10ZXh0LW9wYWNpdHk6MX19LnNjcmlte3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93OmhpZGRlbjthbmltYXRpb246Y2FsY2l0ZS1zY3JpbS1mYWRlLWluIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UtaW4tb3V0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1zY3JpbS1iYWNrZ3JvdW5kLCB2YXIoLS1jYWxjaXRlLXNjcmltLWJhY2tncm91bmQtaW50ZXJuYWwpKX0uY29udGVudHtwYWRkaW5nOjFyZW19XCI7XG5cbmNvbnN0IFNjcmltID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgbG9hZGluZywgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzQ29udGVudCA9IGVsLmlubmVySFRNTC50cmltKCkubGVuZ3RoID4gMDtcbiAgICBjb25zdCBsb2FkZXJOb2RlID0gbG9hZGluZyA/IGgoXCJjYWxjaXRlLWxvYWRlclwiLCB7IGxhYmVsOiBtZXNzYWdlcy5sb2FkaW5nIH0pIDogbnVsbDtcbiAgICBjb25zdCBjb250ZW50Tm9kZSA9IGhhc0NvbnRlbnQgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCB9LCBoKFwic2xvdFwiLCBudWxsKSkpIDogbnVsbDtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnNjcmltIH0sIGxvYWRlck5vZGUsIGNvbnRlbnROb2RlKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gc2NyaW1Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtc2NyaW1cIiwge1xuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNjcmltXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBTY3JpbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFNjcmltIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9