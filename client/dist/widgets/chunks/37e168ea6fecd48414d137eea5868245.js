"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_icon_js-node_modules_esri_calcit-b5b351"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Icon),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl"
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser || !icon || !visible) {
      return;
    }
    this.pathData = await fetchIcon({ icon, scale });
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/key.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/key.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isActivationKey),
/* harmony export */   "n": () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setUpLoadableComponent),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" stencil lifecycle method has been called).
 *
 * Requires "setUpLoadableComponent" and "setComponentLoaded" to be called first.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/locale.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/locale.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ BigDecimal),
/* harmony export */   "a": () => (/* binding */ getDateTimeFormat),
/* harmony export */   "b": () => (/* binding */ defaultNumberingSystem),
/* harmony export */   "c": () => (/* binding */ connectLocalized),
/* harmony export */   "d": () => (/* binding */ disconnectLocalized),
/* harmony export */   "e": () => (/* binding */ getSupportedNumberingSystem),
/* harmony export */   "g": () => (/* binding */ getSupportedLocale),
/* harmony export */   "i": () => (/* binding */ isValidNumber),
/* harmony export */   "n": () => (/* binding */ numberStringFormatter),
/* harmony export */   "p": () => (/* binding */ parseNumberString),
/* harmony export */   "s": () => (/* binding */ sanitizeNumberString)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */




const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
// adopted from https://stackoverflow.com/a/66939244
class BigDecimal {
  constructor(input) {
    if (input instanceof BigDecimal) {
      return input;
    }
    const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
    this.value =
      BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) +
        BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
    this.isNegative = input.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const s = this.value
      .toString()
      .replace("-", "")
      .padStart(BigDecimal.DECIMALS + 1, "0");
    const integers = s.slice(0, -BigDecimal.DECIMALS);
    const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
    return { integers, decimals };
  }
  toString() {
    const { integers, decimals } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
  }
  formatToParts(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
    this.isNegative && parts.unshift({ type: "minusSign", value: formatter.minusSign });
    if (decimals.length) {
      parts.push({ type: "decimal", value: formatter.decimal });
      decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
    }
    return parts;
  }
  format(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
    const decimalsFormatted = decimals.length
      ? `${formatter.decimal}${decimals
        .split("")
        .map((char) => formatter.numberFormatter.format(Number(char)))
        .join("")}`
      : "";
    return `${integersFormatted}${decimalsFormatted}`;
  }
  add(n) {
    return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
  }
  subtract(n) {
    return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
  }
  multiply(n) {
    return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
  }
  divide(n) {
    return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
  }
}
// Configuration: constants
BigDecimal.DECIMALS = 100; // number of decimals on all instances
BigDecimal.ROUNDED = true; // numbers are truncated (false) or rounded (true)
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? ((dividend * BigInt(2)) / divisor) % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString
      .split("")
      .filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/\-/g) && i === 0) {
        return true;
      }
      return _key_js__WEBPACK_IMPORTED_MODULE_1__.n.includes(value);
    })
      .reduce((string, part) => string + part);
    return isValidNumber(result) ? new BigDecimal(result).toString() : "";
  });
}
// regex for number sanitization
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
  const sanitizedValue = nonExpoNumString
    .replace(allHyphensExceptTheStart, "")
    .replace(decimalOnlyAtEndOfString, "")
    .replace(allLeadingZerosOptionallyNegative, "$1");
  return isValidNumber(sanitizedValue)
    ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
      ? sanitizedValue
      : new BigDecimal(sanitizedValue).toString()
    : nonExpoNumString;
});
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  if (!firstE) {
    return func(numberString);
  }
  return numberString
    .replace(/[eE]*$/g, "")
    .substring(0, firstE)
    .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
    .split(/[eE]/)
    .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
    .join("e")
    .replace(/^e/, "1e");
}
/**
 * Converts an exponential notation numberString into decimal notation.
 * BigInt doesn't support exponential notation, so this is required to maintain precision
 *
 * @param {string} numberString - pre-validated exponential or decimal number
 * @returns {string} numberString in decimal notation
 */
function expandExponentialNumberString(numberString) {
  const exponentialParts = numberString.split(/[eE]/);
  if (exponentialParts.length === 1) {
    return numberString;
  }
  const number = +numberString;
  if (Number.isSafeInteger(number)) {
    return `${number}`;
  }
  const isNegative = numberString.charAt(0) === "-";
  const magnitude = +exponentialParts[1];
  const decimalParts = exponentialParts[0].split(".");
  const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
  const decimals = decimalParts[1] || "";
  const shiftDecimalLeft = (integers, magnitude) => {
    const magnitudeDelta = Math.abs(magnitude) - integers.length;
    const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers}` : integers;
    const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude)}${"."}${leftPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const shiftDecimalRight = (decimals, magnitude) => {
    const rightPaddedZeros = magnitude > decimals.length ? `${decimals}${"0".repeat(magnitude - decimals.length)}` : decimals;
    const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude)}${"."}${rightPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const expandedNumberString = magnitude > 0
    ? `${integers}${shiftDecimalRight(decimals, magnitude)}`
    : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
  return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString
    .replace(unnecessaryDecimal, "")
    .replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
  return _key_js__WEBPACK_IMPORTED_MODULE_1__.n.some((number) => string.includes(number));
}

const defaultLocale = "en";
const t9nLocales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  defaultLocale,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  defaultLocale,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const numberingSystems = [
  "arab",
  "arabext",
  "bali",
  "beng",
  "deva",
  "fullwide",
  "gujr",
  "guru",
  "hanidec",
  "khmr",
  "knda",
  "laoo",
  "latn",
  "limb",
  "mlym",
  "mong",
  "mymr",
  "orya",
  "tamldec",
  "telu",
  "thai",
  "tibt"
];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem)
  ? "latn"
  : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
/**
 * Gets the locale that best matches the context.
 *
 * @param locale – the BCP 47 locale code
 * @param context - specifies whether the locale code should match in the context of CLDR or T9N (translation)
 */
function getSupportedLocale(locale, context = "cldr") {
  const contextualLocales = context === "cldr" ? locales : t9nLocales;
  if (!locale) {
    return defaultLocale;
  }
  if (contextualLocales.includes(locale)) {
    return locale;
  }
  locale = locale.toLowerCase();
  // we support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
  if (locale === "nb") {
    return "no";
  }
  // we use `pt-BR` as it will have the same translations as `pt`, which has no corresponding bundle
  if (context === "t9n" && locale === "pt") {
    return "pt-BR";
  }
  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!contextualLocales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }
  // we can `zh-CN` as base translation for chinese locales which has no corresponding bundle.
  if (locale === "zh") {
    return "zh-CN";
  }
  if (!contextualLocales.includes(locale)) {
    console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
    return defaultLocale;
  }
  return locale;
}
const connectedComponents = new Set();
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
function connectLocalized(component) {
  updateEffectiveLocale(component);
  if (connectedComponents.size === 0) {
    mutationObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
      subtree: true
    });
  }
  connectedComponents.add(component);
}
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
function updateEffectiveLocale(component) {
  component.effectiveLocale = getLocale(component);
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectLocalized(component) {
  connectedComponents.delete(component);
  if (connectedComponents.size === 0) {
    mutationObserver.disconnect();
  }
}
const mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", (records) => {
  records.forEach((record) => {
    const el = record.target;
    connectedComponents.forEach((component) => {
      const inUnrelatedSubtree = !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.w)(el, component.el);
      if (inUnrelatedSubtree) {
        return;
      }
      const closestLangEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.r)(component.el, "[lang]");
      if (!closestLangEl) {
        component.effectiveLocale = defaultLocale;
        return;
      }
      const closestLang = closestLangEl.lang;
      component.effectiveLocale =
        // user set lang="" means unknown language, so we use default
        closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
    });
  });
});
/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component) {
  return (component.el.lang ||
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.r)(component.el, "[lang]")?.lang ||
    document.documentElement.lang ||
    defaultLocale);
}
/**
 * This util formats and parses numbers for localization
 */
class NumberStringFormat {
  constructor() {
    this.delocalize = (numberString) => 
    // For performance, (de)localization is skipped if the formatter isn't initialized.
    // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
    // `numberFormatOptions` must be set in a component to create and cache the formatter.
    this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString
        .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
        .replace(new RegExp(`[${this._group}]`, "g"), "")
        .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
        .replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex))
      : numberString;
    this.localize = (numberString) => this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim())
        ? new BigDecimal(nonExpoNumString.trim())
          .format(this)
          .replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group)
        : nonExpoNumString)
      : numberString;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(options) {
    options.locale = getSupportedLocale(options?.locale);
    options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
    if (
    // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    (!this._numberFormatOptions &&
      options.locale === defaultLocale &&
      options.numberingSystem === defaultNumberingSystem &&
      // don't skip initialization if any options besides locale/numberingSystem are set
      Object.keys(options).length === 2) ||
      // cache formatter by only recreating when options change
      JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)) {
      return;
    }
    this._numberFormatOptions = options;
    this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
    this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: false,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const index = new Map(this._digits.map((d, i) => [d, i]));
    const parts = new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);
    this._actualGroup = parts.find((d) => d.type === "group").value;
    // change whitespace group characters that don't render correctly
    this._group = this._actualGroup.trim().length === 0 ? " " : this._actualGroup;
    this._decimal = parts.find((d) => d.type === "decimal").value;
    this._minusSign = parts.find((d) => d.type === "minusSign").value;
    this._getDigitIndex = (d) => index.get(d);
  }
}
const numberStringFormatter = new NumberStringFormat();
/**
 * Exported for testing purposes only.
 *
 * @internal
 */
let dateTimeFormatCache;
/**
 * Used to ensure all cached formats are for the same locale.
 *
 * @internal
 */
let previousLocaleUsedForCaching;
/**
 * Generates a cache key for date time format lookups.
 *
 * @internal
 */
function buildDateTimeFormatCacheKey(options = {}) {
  return Object.entries(options)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .map((keyValue) => `${keyValue[0]}-${keyValue[1]}`)
    .flat()
    .join(":");
}
/**
 * Returns an instance of Intl.DateTimeFormat and reuses it if requested with the same locale and options.
 *
 * **Note**: the cache will be cleared if a different locale is provided
 *
 * @internal
 */
function getDateTimeFormat(locale, options) {
  locale = getSupportedLocale(locale);
  if (!dateTimeFormatCache) {
    dateTimeFormatCache = new Map();
  }
  if (previousLocaleUsedForCaching !== locale) {
    dateTimeFormatCache.clear();
    previousLocaleUsedForCaching = locale;
  }
  const key = buildDateTimeFormatCacheKey(options);
  const cached = dateTimeFormatCache.get(key);
  if (cached) {
    return cached;
  }
  const format = new Intl.DateTimeFormat(locale, options);
  dateTimeFormatCache.set(key, format);
  return format;
}




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzdlMTY4ZWE2ZmVjZDQ4NDE0ZDEzN2VlYTU4NjgyNDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VIO0FBQ3JEO0FBQ2I7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBRSxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0ZBQVksa0JBQWtCLEdBQUc7QUFDOUQ7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQSwrQkFBK0IsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFp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VSxHQUFHLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9GQUFZLGFBQWEsVUFBVSxnQkFBZ0IsS0FBSztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtRkFBZTtBQUN0QjtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaWNvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMva2V5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9jYWxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vYnNlcnZlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Q5bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0LCBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgZmxpcFJ0bDogXCJmbGlwLXJ0bFwiXG59O1xuXG4vKipcbiAqIEljb24gZGF0YSBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGljb25DYWNoZSA9IHt9O1xuLyoqXG4gKiBJY29uIHJlcXVlc3QgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCByZXF1ZXN0Q2FjaGUgPSB7fTtcbmNvbnN0IHNjYWxlVG9QeCA9IHtcbiAgczogMTYsXG4gIG06IDI0LFxuICBsOiAzMlxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaWNvbi1jb2xvcil9Omhvc3QoW3NjYWxlPXNdKXtibG9jay1zaXplOjFyZW07aW5saW5lLXNpemU6MXJlbTttaW4taW5saW5lLXNpemU6MXJlbTttaW4tYmxvY2stc2l6ZToxcmVtfTpob3N0KFtzY2FsZT1tXSl7YmxvY2stc2l6ZToxLjVyZW07aW5saW5lLXNpemU6MS41cmVtO21pbi1pbmxpbmUtc2l6ZToxLjVyZW07bWluLWJsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1sXSl7YmxvY2stc2l6ZToycmVtO2lubGluZS1zaXplOjJyZW07bWluLWlubGluZS1zaXplOjJyZW07bWluLWJsb2NrLXNpemU6MnJlbX0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlXG4gICAgICB9LCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBgMCAwICR7c2l6ZX0gJHtzaXplfWAsIHdpZHRoOiBcIjEwMCVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBwYXRocy5tYXAoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gKGgoXCJwYXRoXCIsIHsgZDogcGF0aCB9KSkgOiAoaChcInBhdGhcIiwgeyBkOiBwYXRoLmQsIG9wYWNpdHk6IFwib3BhY2l0eVwiIGluIHBhdGggPyBwYXRoLm9wYWNpdHkgOiAxIH0pKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgbG9hZEljb25QYXRoRGF0YSgpIHtcbiAgICBjb25zdCB7IGljb24sIHNjYWxlLCB2aXNpYmxlIH0gPSB0aGlzO1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyIHx8ICFpY29uIHx8ICF2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBhd2FpdCBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuZnVuY3Rpb24gaXNBY3RpdmF0aW9uS2V5KGtleSkge1xuICByZXR1cm4ga2V5ID09PSBcIkVudGVyXCIgfHwga2V5ID09PSBcIiBcIjtcbn1cbmNvbnN0IG51bWJlcktleXMgPSBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdO1xuXG5leHBvcnQgeyBpc0FjdGl2YXRpb25LZXkgYXMgaSwgbnVtYmVyS2V5cyBhcyBuIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRDb21wb25lbnRMb2FkZWQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHcgYXMgY29udGFpbnNDcm9zc1NoYWRvd0JvdW5kYXJ5LCByIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IHVubmVjZXNzYXJ5RGVjaW1hbCA9IG5ldyBSZWdFeHAoYFxcXFwke1wiLlwifSgwKyk/JGApO1xuY29uc3QgdHJhaWxpbmdaZXJvcyA9IG5ldyBSZWdFeHAoXCIwKyRcIik7XG4vLyBhZG9wdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY2OTM5MjQ0XG5jbGFzcyBCaWdEZWNpbWFsIHtcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBCaWdEZWNpbWFsKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGNvbnN0IFtpbnRlZ2VycywgZGVjaW1hbHNdID0gZXhwYW5kRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcoaW5wdXQpLnNwbGl0KFwiLlwiKS5jb25jYXQoXCJcIik7XG4gICAgdGhpcy52YWx1ZSA9XG4gICAgICBCaWdJbnQoaW50ZWdlcnMgKyBkZWNpbWFscy5wYWRFbmQoQmlnRGVjaW1hbC5ERUNJTUFMUywgXCIwXCIpLnNsaWNlKDAsIEJpZ0RlY2ltYWwuREVDSU1BTFMpKSArXG4gICAgICAgIEJpZ0ludChCaWdEZWNpbWFsLlJPVU5ERUQgJiYgZGVjaW1hbHNbQmlnRGVjaW1hbC5ERUNJTUFMU10gPj0gXCI1XCIpO1xuICAgIHRoaXMuaXNOZWdhdGl2ZSA9IGlucHV0LmNoYXJBdCgwKSA9PT0gXCItXCI7XG4gIH1cbiAgZ2V0SW50ZWdlcnNBbmREZWNpbWFscygpIHtcbiAgICBjb25zdCBzID0gdGhpcy52YWx1ZVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5yZXBsYWNlKFwiLVwiLCBcIlwiKVxuICAgICAgLnBhZFN0YXJ0KEJpZ0RlY2ltYWwuREVDSU1BTFMgKyAxLCBcIjBcIik7XG4gICAgY29uc3QgaW50ZWdlcnMgPSBzLnNsaWNlKDAsIC1CaWdEZWNpbWFsLkRFQ0lNQUxTKTtcbiAgICBjb25zdCBkZWNpbWFscyA9IHMuc2xpY2UoLUJpZ0RlY2ltYWwuREVDSU1BTFMpLnJlcGxhY2UodHJhaWxpbmdaZXJvcywgXCJcIik7XG4gICAgcmV0dXJuIHsgaW50ZWdlcnMsIGRlY2ltYWxzIH07XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgeyBpbnRlZ2VycywgZGVjaW1hbHMgfSA9IHRoaXMuZ2V0SW50ZWdlcnNBbmREZWNpbWFscygpO1xuICAgIHJldHVybiBgJHt0aGlzLmlzTmVnYXRpdmUgPyBcIi1cIiA6IFwiXCJ9JHtpbnRlZ2Vyc30ke2RlY2ltYWxzLmxlbmd0aCA/IFwiLlwiICsgZGVjaW1hbHMgOiBcIlwifWA7XG4gIH1cbiAgZm9ybWF0VG9QYXJ0cyhmb3JtYXR0ZXIpIHtcbiAgICBjb25zdCB7IGludGVnZXJzLCBkZWNpbWFscyB9ID0gdGhpcy5nZXRJbnRlZ2Vyc0FuZERlY2ltYWxzKCk7XG4gICAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIubnVtYmVyRm9ybWF0dGVyLmZvcm1hdFRvUGFydHMoQmlnSW50KGludGVnZXJzKSk7XG4gICAgdGhpcy5pc05lZ2F0aXZlICYmIHBhcnRzLnVuc2hpZnQoeyB0eXBlOiBcIm1pbnVzU2lnblwiLCB2YWx1ZTogZm9ybWF0dGVyLm1pbnVzU2lnbiB9KTtcbiAgICBpZiAoZGVjaW1hbHMubGVuZ3RoKSB7XG4gICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogXCJkZWNpbWFsXCIsIHZhbHVlOiBmb3JtYXR0ZXIuZGVjaW1hbCB9KTtcbiAgICAgIGRlY2ltYWxzLnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXIpID0+IHBhcnRzLnB1c2goeyB0eXBlOiBcImZyYWN0aW9uXCIsIHZhbHVlOiBjaGFyIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG4gIGZvcm1hdChmb3JtYXR0ZXIpIHtcbiAgICBjb25zdCB7IGludGVnZXJzLCBkZWNpbWFscyB9ID0gdGhpcy5nZXRJbnRlZ2Vyc0FuZERlY2ltYWxzKCk7XG4gICAgY29uc3QgaW50ZWdlcnNGb3JtYXR0ZWQgPSBgJHt0aGlzLmlzTmVnYXRpdmUgPyBmb3JtYXR0ZXIubWludXNTaWduIDogXCJcIn0ke2Zvcm1hdHRlci5udW1iZXJGb3JtYXR0ZXIuZm9ybWF0KEJpZ0ludChpbnRlZ2VycykpfWA7XG4gICAgY29uc3QgZGVjaW1hbHNGb3JtYXR0ZWQgPSBkZWNpbWFscy5sZW5ndGhcbiAgICAgID8gYCR7Zm9ybWF0dGVyLmRlY2ltYWx9JHtkZWNpbWFsc1xuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gZm9ybWF0dGVyLm51bWJlckZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKGNoYXIpKSlcbiAgICAgICAgLmpvaW4oXCJcIil9YFxuICAgICAgOiBcIlwiO1xuICAgIHJldHVybiBgJHtpbnRlZ2Vyc0Zvcm1hdHRlZH0ke2RlY2ltYWxzRm9ybWF0dGVkfWA7XG4gIH1cbiAgYWRkKG4pIHtcbiAgICByZXR1cm4gQmlnRGVjaW1hbC5mcm9tQmlnSW50KHRoaXMudmFsdWUgKyBuZXcgQmlnRGVjaW1hbChuKS52YWx1ZSk7XG4gIH1cbiAgc3VidHJhY3Qobikge1xuICAgIHJldHVybiBCaWdEZWNpbWFsLmZyb21CaWdJbnQodGhpcy52YWx1ZSAtIG5ldyBCaWdEZWNpbWFsKG4pLnZhbHVlKTtcbiAgfVxuICBtdWx0aXBseShuKSB7XG4gICAgcmV0dXJuIEJpZ0RlY2ltYWwuX2RpdlJvdW5kKHRoaXMudmFsdWUgKiBuZXcgQmlnRGVjaW1hbChuKS52YWx1ZSwgQmlnRGVjaW1hbC5TSElGVCk7XG4gIH1cbiAgZGl2aWRlKG4pIHtcbiAgICByZXR1cm4gQmlnRGVjaW1hbC5fZGl2Um91bmQodGhpcy52YWx1ZSAqIEJpZ0RlY2ltYWwuU0hJRlQsIG5ldyBCaWdEZWNpbWFsKG4pLnZhbHVlKTtcbiAgfVxufVxuLy8gQ29uZmlndXJhdGlvbjogY29uc3RhbnRzXG5CaWdEZWNpbWFsLkRFQ0lNQUxTID0gMTAwOyAvLyBudW1iZXIgb2YgZGVjaW1hbHMgb24gYWxsIGluc3RhbmNlc1xuQmlnRGVjaW1hbC5ST1VOREVEID0gdHJ1ZTsgLy8gbnVtYmVycyBhcmUgdHJ1bmNhdGVkIChmYWxzZSkgb3Igcm91bmRlZCAodHJ1ZSlcbkJpZ0RlY2ltYWwuU0hJRlQgPSBCaWdJbnQoXCIxXCIgKyBcIjBcIi5yZXBlYXQoQmlnRGVjaW1hbC5ERUNJTUFMUykpOyAvLyBkZXJpdmVkIGNvbnN0YW50XG5CaWdEZWNpbWFsLl9kaXZSb3VuZCA9IChkaXZpZGVuZCwgZGl2aXNvcikgPT4gQmlnRGVjaW1hbC5mcm9tQmlnSW50KGRpdmlkZW5kIC8gZGl2aXNvciArIChCaWdEZWNpbWFsLlJPVU5ERUQgPyAoKGRpdmlkZW5kICogQmlnSW50KDIpKSAvIGRpdmlzb3IpICUgQmlnSW50KDIpIDogQmlnSW50KDApKSk7XG5CaWdEZWNpbWFsLmZyb21CaWdJbnQgPSAoYmlnaW50KSA9PiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoQmlnRGVjaW1hbC5wcm90b3R5cGUpLCB7IHZhbHVlOiBiaWdpbnQsIGlzTmVnYXRpdmU6IGJpZ2ludCA8IEJpZ0ludCgwKSB9KTtcbmZ1bmN0aW9uIGlzVmFsaWROdW1iZXIobnVtYmVyU3RyaW5nKSB7XG4gIHJldHVybiAhKCFudW1iZXJTdHJpbmcgfHwgaXNOYU4oTnVtYmVyKG51bWJlclN0cmluZykpKTtcbn1cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZykge1xuICBpZiAoIW51bWJlclN0cmluZyB8fCAhc3RyaW5nQ29udGFpbnNOdW1iZXJzKG51bWJlclN0cmluZykpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZXR1cm4gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIChub25FeHBvTnVtU3RyaW5nKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5zRGVjaW1hbCA9IGZhbHNlO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5vbkV4cG9OdW1TdHJpbmdcbiAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgLmZpbHRlcigodmFsdWUsIGkpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXFwuL2cpICYmICFjb250YWluc0RlY2ltYWwpIHtcbiAgICAgICAgY29udGFpbnNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubWF0Y2goL1xcLS9nKSAmJiBpID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bWJlcktleXMuaW5jbHVkZXModmFsdWUpO1xuICAgIH0pXG4gICAgICAucmVkdWNlKChzdHJpbmcsIHBhcnQpID0+IHN0cmluZyArIHBhcnQpO1xuICAgIHJldHVybiBpc1ZhbGlkTnVtYmVyKHJlc3VsdCkgPyBuZXcgQmlnRGVjaW1hbChyZXN1bHQpLnRvU3RyaW5nKCkgOiBcIlwiO1xuICB9KTtcbn1cbi8vIHJlZ2V4IGZvciBudW1iZXIgc2FuaXRpemF0aW9uXG5jb25zdCBhbGxMZWFkaW5nWmVyb3NPcHRpb25hbGx5TmVnYXRpdmUgPSAvXihbLTBdKTArKD89XFxkKS87XG5jb25zdCBkZWNpbWFsT25seUF0RW5kT2ZTdHJpbmcgPSAvKD8hXlxcLilcXC4kLztcbmNvbnN0IGFsbEh5cGhlbnNFeGNlcHRUaGVTdGFydCA9IC8oPyFeLSktL2c7XG5jb25zdCBpc05lZ2F0aXZlRGVjaW1hbE9ubHlaZXJvcyA9IC9eLVxcYjBcXGJcXC4/MCokLztcbmNvbnN0IHNhbml0aXplTnVtYmVyU3RyaW5nID0gKG51bWJlclN0cmluZykgPT4gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIChub25FeHBvTnVtU3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFZhbHVlID0gbm9uRXhwb051bVN0cmluZ1xuICAgIC5yZXBsYWNlKGFsbEh5cGhlbnNFeGNlcHRUaGVTdGFydCwgXCJcIilcbiAgICAucmVwbGFjZShkZWNpbWFsT25seUF0RW5kT2ZTdHJpbmcsIFwiXCIpXG4gICAgLnJlcGxhY2UoYWxsTGVhZGluZ1plcm9zT3B0aW9uYWxseU5lZ2F0aXZlLCBcIiQxXCIpO1xuICByZXR1cm4gaXNWYWxpZE51bWJlcihzYW5pdGl6ZWRWYWx1ZSlcbiAgICA/IGlzTmVnYXRpdmVEZWNpbWFsT25seVplcm9zLnRlc3Qoc2FuaXRpemVkVmFsdWUpXG4gICAgICA/IHNhbml0aXplZFZhbHVlXG4gICAgICA6IG5ldyBCaWdEZWNpbWFsKHNhbml0aXplZFZhbHVlKS50b1N0cmluZygpXG4gICAgOiBub25FeHBvTnVtU3RyaW5nO1xufSk7XG5mdW5jdGlvbiBzYW5pdGl6ZUV4cG9uZW50aWFsTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZywgZnVuYykge1xuICBpZiAoIW51bWJlclN0cmluZykge1xuICAgIHJldHVybiBudW1iZXJTdHJpbmc7XG4gIH1cbiAgY29uc3QgZmlyc3RFID0gbnVtYmVyU3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImVcIikgKyAxO1xuICBpZiAoIWZpcnN0RSkge1xuICAgIHJldHVybiBmdW5jKG51bWJlclN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIG51bWJlclN0cmluZ1xuICAgIC5yZXBsYWNlKC9bZUVdKiQvZywgXCJcIilcbiAgICAuc3Vic3RyaW5nKDAsIGZpcnN0RSlcbiAgICAuY29uY2F0KG51bWJlclN0cmluZy5zbGljZShmaXJzdEUpLnJlcGxhY2UoL1tlRV0vZywgXCJcIikpXG4gICAgLnNwbGl0KC9bZUVdLylcbiAgICAubWFwKChzZWN0aW9uLCBpKSA9PiAoaSA9PT0gMSA/IGZ1bmMoc2VjdGlvbi5yZXBsYWNlKC9cXC4vZywgXCJcIikpIDogZnVuYyhzZWN0aW9uKSkpXG4gICAgLmpvaW4oXCJlXCIpXG4gICAgLnJlcGxhY2UoL15lLywgXCIxZVwiKTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gZXhwb25lbnRpYWwgbm90YXRpb24gbnVtYmVyU3RyaW5nIGludG8gZGVjaW1hbCBub3RhdGlvbi5cbiAqIEJpZ0ludCBkb2Vzbid0IHN1cHBvcnQgZXhwb25lbnRpYWwgbm90YXRpb24sIHNvIHRoaXMgaXMgcmVxdWlyZWQgdG8gbWFpbnRhaW4gcHJlY2lzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG51bWJlclN0cmluZyAtIHByZS12YWxpZGF0ZWQgZXhwb25lbnRpYWwgb3IgZGVjaW1hbCBudW1iZXJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IG51bWJlclN0cmluZyBpbiBkZWNpbWFsIG5vdGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEV4cG9uZW50aWFsTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZykge1xuICBjb25zdCBleHBvbmVudGlhbFBhcnRzID0gbnVtYmVyU3RyaW5nLnNwbGl0KC9bZUVdLyk7XG4gIGlmIChleHBvbmVudGlhbFBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBudW1iZXJTdHJpbmc7XG4gIH1cbiAgY29uc3QgbnVtYmVyID0gK251bWJlclN0cmluZztcbiAgaWYgKE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcikpIHtcbiAgICByZXR1cm4gYCR7bnVtYmVyfWA7XG4gIH1cbiAgY29uc3QgaXNOZWdhdGl2ZSA9IG51bWJlclN0cmluZy5jaGFyQXQoMCkgPT09IFwiLVwiO1xuICBjb25zdCBtYWduaXR1ZGUgPSArZXhwb25lbnRpYWxQYXJ0c1sxXTtcbiAgY29uc3QgZGVjaW1hbFBhcnRzID0gZXhwb25lbnRpYWxQYXJ0c1swXS5zcGxpdChcIi5cIik7XG4gIGNvbnN0IGludGVnZXJzID0gKGlzTmVnYXRpdmUgPyBkZWNpbWFsUGFydHNbMF0uc3Vic3RyaW5nKDEpIDogZGVjaW1hbFBhcnRzWzBdKSB8fCBcIlwiO1xuICBjb25zdCBkZWNpbWFscyA9IGRlY2ltYWxQYXJ0c1sxXSB8fCBcIlwiO1xuICBjb25zdCBzaGlmdERlY2ltYWxMZWZ0ID0gKGludGVnZXJzLCBtYWduaXR1ZGUpID0+IHtcbiAgICBjb25zdCBtYWduaXR1ZGVEZWx0YSA9IE1hdGguYWJzKG1hZ25pdHVkZSkgLSBpbnRlZ2Vycy5sZW5ndGg7XG4gICAgY29uc3QgbGVmdFBhZGRlZFplcm9zID0gbWFnbml0dWRlRGVsdGEgPiAwID8gYCR7XCIwXCIucmVwZWF0KG1hZ25pdHVkZURlbHRhKX0ke2ludGVnZXJzfWAgOiBpbnRlZ2VycztcbiAgICBjb25zdCBzaGlmdGVkRGVjaW1hbCA9IGAke2xlZnRQYWRkZWRaZXJvcy5zbGljZSgwLCBtYWduaXR1ZGUpfSR7XCIuXCJ9JHtsZWZ0UGFkZGVkWmVyb3Muc2xpY2UobWFnbml0dWRlKX1gO1xuICAgIHJldHVybiBzaGlmdGVkRGVjaW1hbDtcbiAgfTtcbiAgY29uc3Qgc2hpZnREZWNpbWFsUmlnaHQgPSAoZGVjaW1hbHMsIG1hZ25pdHVkZSkgPT4ge1xuICAgIGNvbnN0IHJpZ2h0UGFkZGVkWmVyb3MgPSBtYWduaXR1ZGUgPiBkZWNpbWFscy5sZW5ndGggPyBgJHtkZWNpbWFsc30ke1wiMFwiLnJlcGVhdChtYWduaXR1ZGUgLSBkZWNpbWFscy5sZW5ndGgpfWAgOiBkZWNpbWFscztcbiAgICBjb25zdCBzaGlmdGVkRGVjaW1hbCA9IGAke3JpZ2h0UGFkZGVkWmVyb3Muc2xpY2UoMCwgbWFnbml0dWRlKX0ke1wiLlwifSR7cmlnaHRQYWRkZWRaZXJvcy5zbGljZShtYWduaXR1ZGUpfWA7XG4gICAgcmV0dXJuIHNoaWZ0ZWREZWNpbWFsO1xuICB9O1xuICBjb25zdCBleHBhbmRlZE51bWJlclN0cmluZyA9IG1hZ25pdHVkZSA+IDBcbiAgICA/IGAke2ludGVnZXJzfSR7c2hpZnREZWNpbWFsUmlnaHQoZGVjaW1hbHMsIG1hZ25pdHVkZSl9YFxuICAgIDogYCR7c2hpZnREZWNpbWFsTGVmdChpbnRlZ2VycywgbWFnbml0dWRlKX0ke2RlY2ltYWxzfWA7XG4gIHJldHVybiBgJHtpc05lZ2F0aXZlID8gXCItXCIgOiBcIlwifSR7ZXhwYW5kZWROdW1iZXJTdHJpbmcuY2hhckF0KDApID09PSBcIi5cIiA/IFwiMFwiIDogXCJcIn0ke2V4cGFuZGVkTnVtYmVyU3RyaW5nXG4gICAgLnJlcGxhY2UodW5uZWNlc3NhcnlEZWNpbWFsLCBcIlwiKVxuICAgIC5yZXBsYWNlKGFsbExlYWRpbmdaZXJvc09wdGlvbmFsbHlOZWdhdGl2ZSwgXCJcIil9YDtcbn1cbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zTnVtYmVycyhzdHJpbmcpIHtcbiAgcmV0dXJuIG51bWJlcktleXMuc29tZSgobnVtYmVyKSA9PiBzdHJpbmcuaW5jbHVkZXMobnVtYmVyKSk7XG59XG5cbmNvbnN0IGRlZmF1bHRMb2NhbGUgPSBcImVuXCI7XG5jb25zdCB0OW5Mb2NhbGVzID0gW1xuICBcImFyXCIsXG4gIFwiYmdcIixcbiAgXCJic1wiLFxuICBcImNhXCIsXG4gIFwiY3NcIixcbiAgXCJkYVwiLFxuICBcImRlXCIsXG4gIFwiZWxcIixcbiAgZGVmYXVsdExvY2FsZSxcbiAgXCJlc1wiLFxuICBcImV0XCIsXG4gIFwiZmlcIixcbiAgXCJmclwiLFxuICBcImhlXCIsXG4gIFwiaHJcIixcbiAgXCJodVwiLFxuICBcImlkXCIsXG4gIFwiaXRcIixcbiAgXCJqYVwiLFxuICBcImtvXCIsXG4gIFwibHRcIixcbiAgXCJsdlwiLFxuICBcIm5vXCIsXG4gIFwibmxcIixcbiAgXCJwbFwiLFxuICBcInB0LUJSXCIsXG4gIFwicHQtUFRcIixcbiAgXCJyb1wiLFxuICBcInJ1XCIsXG4gIFwic2tcIixcbiAgXCJzbFwiLFxuICBcInNyXCIsXG4gIFwic3ZcIixcbiAgXCJ0aFwiLFxuICBcInRyXCIsXG4gIFwidWtcIixcbiAgXCJ2aVwiLFxuICBcInpoLUNOXCIsXG4gIFwiemgtSEtcIixcbiAgXCJ6aC1UV1wiXG5dO1xuY29uc3QgbG9jYWxlcyA9IFtcbiAgXCJhclwiLFxuICBcImJnXCIsXG4gIFwiYnNcIixcbiAgXCJjYVwiLFxuICBcImNzXCIsXG4gIFwiZGFcIixcbiAgXCJkZVwiLFxuICBcImRlLUFUXCIsXG4gIFwiZGUtQ0hcIixcbiAgXCJlbFwiLFxuICBkZWZhdWx0TG9jYWxlLFxuICBcImVuLUFVXCIsXG4gIFwiZW4tQ0FcIixcbiAgXCJlbi1HQlwiLFxuICBcImVzXCIsXG4gIFwiZXMtTVhcIixcbiAgXCJldFwiLFxuICBcImZpXCIsXG4gIFwiZnJcIixcbiAgXCJmci1DSFwiLFxuICBcImhlXCIsXG4gIFwiaGlcIixcbiAgXCJoclwiLFxuICBcImh1XCIsXG4gIFwiaWRcIixcbiAgXCJpdFwiLFxuICBcIml0LUNIXCIsXG4gIFwiamFcIixcbiAgXCJrb1wiLFxuICBcImx0XCIsXG4gIFwibHZcIixcbiAgXCJta1wiLFxuICBcIm5vXCIsXG4gIFwibmxcIixcbiAgXCJwbFwiLFxuICBcInB0XCIsXG4gIFwicHQtUFRcIixcbiAgXCJyb1wiLFxuICBcInJ1XCIsXG4gIFwic2tcIixcbiAgXCJzbFwiLFxuICBcInNyXCIsXG4gIFwic3ZcIixcbiAgXCJ0aFwiLFxuICBcInRyXCIsXG4gIFwidWtcIixcbiAgXCJ2aVwiLFxuICBcInpoLUNOXCIsXG4gIFwiemgtSEtcIixcbiAgXCJ6aC1UV1wiXG5dO1xuY29uc3QgbnVtYmVyaW5nU3lzdGVtcyA9IFtcbiAgXCJhcmFiXCIsXG4gIFwiYXJhYmV4dFwiLFxuICBcImJhbGlcIixcbiAgXCJiZW5nXCIsXG4gIFwiZGV2YVwiLFxuICBcImZ1bGx3aWRlXCIsXG4gIFwiZ3VqclwiLFxuICBcImd1cnVcIixcbiAgXCJoYW5pZGVjXCIsXG4gIFwia2htclwiLFxuICBcImtuZGFcIixcbiAgXCJsYW9vXCIsXG4gIFwibGF0blwiLFxuICBcImxpbWJcIixcbiAgXCJtbHltXCIsXG4gIFwibW9uZ1wiLFxuICBcIm15bXJcIixcbiAgXCJvcnlhXCIsXG4gIFwidGFtbGRlY1wiLFxuICBcInRlbHVcIixcbiAgXCJ0aGFpXCIsXG4gIFwidGlidFwiXG5dO1xuY29uc3QgaXNOdW1iZXJpbmdTeXN0ZW1TdXBwb3J0ZWQgPSAobnVtYmVyaW5nU3lzdGVtKSA9PiBudW1iZXJpbmdTeXN0ZW1zLmluY2x1ZGVzKG51bWJlcmluZ1N5c3RlbSk7XG5jb25zdCBicm93c2VyTnVtYmVyaW5nU3lzdGVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtO1xuY29uc3QgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IGJyb3dzZXJOdW1iZXJpbmdTeXN0ZW0gPT09IFwiYXJhYlwiIHx8ICFpc051bWJlcmluZ1N5c3RlbVN1cHBvcnRlZChicm93c2VyTnVtYmVyaW5nU3lzdGVtKVxuICA/IFwibGF0blwiXG4gIDogYnJvd3Nlck51bWJlcmluZ1N5c3RlbTtcbmNvbnN0IGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSA9IChudW1iZXJpbmdTeXN0ZW0pID0+IGlzTnVtYmVyaW5nU3lzdGVtU3VwcG9ydGVkKG51bWJlcmluZ1N5c3RlbSkgPyBudW1iZXJpbmdTeXN0ZW0gOiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuLyoqXG4gKiBHZXRzIHRoZSBsb2NhbGUgdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIGxvY2FsZSDigJMgdGhlIEJDUCA0NyBsb2NhbGUgY29kZVxuICogQHBhcmFtIGNvbnRleHQgLSBzcGVjaWZpZXMgd2hldGhlciB0aGUgbG9jYWxlIGNvZGUgc2hvdWxkIG1hdGNoIGluIHRoZSBjb250ZXh0IG9mIENMRFIgb3IgVDlOICh0cmFuc2xhdGlvbilcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkTG9jYWxlKGxvY2FsZSwgY29udGV4dCA9IFwiY2xkclwiKSB7XG4gIGNvbnN0IGNvbnRleHR1YWxMb2NhbGVzID0gY29udGV4dCA9PT0gXCJjbGRyXCIgPyBsb2NhbGVzIDogdDluTG9jYWxlcztcbiAgaWYgKCFsb2NhbGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgfVxuICBpZiAoY29udGV4dHVhbExvY2FsZXMuaW5jbHVkZXMobG9jYWxlKSkge1xuICAgIHJldHVybiBsb2NhbGU7XG4gIH1cbiAgbG9jYWxlID0gbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gIC8vIHdlIHN1cHBvcnQgYm90aCAnbmInIGFuZCAnbm8nIChCQ1AgNDcpIGZvciBOb3J3ZWdpYW4gYnV0IG9ubHkgYG5vYCBoYXMgY29ycmVzcG9uZGluZyBidW5kbGVcbiAgaWYgKGxvY2FsZSA9PT0gXCJuYlwiKSB7XG4gICAgcmV0dXJuIFwibm9cIjtcbiAgfVxuICAvLyB3ZSB1c2UgYHB0LUJSYCBhcyBpdCB3aWxsIGhhdmUgdGhlIHNhbWUgdHJhbnNsYXRpb25zIGFzIGBwdGAsIHdoaWNoIGhhcyBubyBjb3JyZXNwb25kaW5nIGJ1bmRsZVxuICBpZiAoY29udGV4dCA9PT0gXCJ0OW5cIiAmJiBsb2NhbGUgPT09IFwicHRcIikge1xuICAgIHJldHVybiBcInB0LUJSXCI7XG4gIH1cbiAgaWYgKGxvY2FsZS5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUucmVwbGFjZSgvKFxcdyspLShcXHcrKS8sIChfbWF0Y2gsIGxhbmd1YWdlLCByZWdpb24pID0+IGAke2xhbmd1YWdlfS0ke3JlZ2lvbi50b1VwcGVyQ2FzZSgpfWApO1xuICAgIGlmICghY29udGV4dHVhbExvY2FsZXMuaW5jbHVkZXMobG9jYWxlKSkge1xuICAgICAgbG9jYWxlID0gbG9jYWxlLnNwbGl0KFwiLVwiKVswXTtcbiAgICB9XG4gIH1cbiAgLy8gd2UgY2FuIGB6aC1DTmAgYXMgYmFzZSB0cmFuc2xhdGlvbiBmb3IgY2hpbmVzZSBsb2NhbGVzIHdoaWNoIGhhcyBubyBjb3JyZXNwb25kaW5nIGJ1bmRsZS5cbiAgaWYgKGxvY2FsZSA9PT0gXCJ6aFwiKSB7XG4gICAgcmV0dXJuIFwiemgtQ05cIjtcbiAgfVxuICBpZiAoIWNvbnRleHR1YWxMb2NhbGVzLmluY2x1ZGVzKGxvY2FsZSkpIHtcbiAgICBjb25zb2xlLndhcm4oYFRyYW5zbGF0aW9ucyBmb3IgdGhlIFwiJHtsb2NhbGV9XCIgbG9jYWxlIGFyZSBub3QgYXZhaWxhYmxlIGFuZCB3aWxsIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCwgRW5nbGlzaCAoZW4pLmApO1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG4gIHJldHVybiBsb2NhbGU7XG59XG5jb25zdCBjb25uZWN0ZWRDb21wb25lbnRzID0gbmV3IFNldCgpO1xuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYmVmb3JlIGFueSBsb2dpYyB0aGF0IGRlcGVuZHMgb24gbG9jYWxlXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TG9jYWxpemVkKGNvbXBvbmVudCkge1xuICB1cGRhdGVFZmZlY3RpdmVMb2NhbGUoY29tcG9uZW50KTtcbiAgaWYgKGNvbm5lY3RlZENvbXBvbmVudHMuc2l6ZSA9PT0gMCkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJsYW5nXCJdLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGNvbm5lY3RlZENvbXBvbmVudHMuYWRkKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgaXMgb25seSBleHBvcnRlZCBmb3IgY29tcG9uZW50cyB0aGF0IGltcGxlbWVudGVkIHRoZSBub3cgZGVwcmVjYXRlZCBgbG9jYWxlYCBwcm9wLlxuICpcbiAqIERvIG5vdCB1c2UgdGhpcyB1dGlscyBmb3IgbmV3IGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB1cGRhdGVFZmZlY3RpdmVMb2NhbGUoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUgPSBnZXRMb2NhbGUoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TG9jYWxpemVkKGNvbXBvbmVudCkge1xuICBjb25uZWN0ZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoY29ubmVjdGVkQ29tcG9uZW50cy5zaXplID09PSAwKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbmNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIChyZWNvcmRzKSA9PiB7XG4gIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgY29uc3QgZWwgPSByZWNvcmQudGFyZ2V0O1xuICAgIGNvbm5lY3RlZENvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICBjb25zdCBpblVucmVsYXRlZFN1YnRyZWUgPSAhY29udGFpbnNDcm9zc1NoYWRvd0JvdW5kYXJ5KGVsLCBjb21wb25lbnQuZWwpO1xuICAgICAgaWYgKGluVW5yZWxhdGVkU3VidHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjbG9zZXN0TGFuZ0VsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudC5lbCwgXCJbbGFuZ11cIik7XG4gICAgICBpZiAoIWNsb3Nlc3RMYW5nRWwpIHtcbiAgICAgICAgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsb3Nlc3RMYW5nID0gY2xvc2VzdExhbmdFbC5sYW5nO1xuICAgICAgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSA9XG4gICAgICAgIC8vIHVzZXIgc2V0IGxhbmc9XCJcIiBtZWFucyB1bmtub3duIGxhbmd1YWdlLCBzbyB3ZSB1c2UgZGVmYXVsdFxuICAgICAgICBjbG9zZXN0TGFuZ0VsLmhhc0F0dHJpYnV0ZShcImxhbmdcIikgJiYgY2xvc2VzdExhbmcgPT09IFwiXCIgPyBkZWZhdWx0TG9jYWxlIDogY2xvc2VzdExhbmc7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vKipcbiAqIFRoaXMgdXRpbCBoZWxwcyByZXNvbHZlIGEgY29tcG9uZW50J3MgbG9jYWxlLlxuICogSXQgd2lsbCBhbHNvIGZhbGwgYmFjayBvbiB0aGUgZGVwcmVjYXRlZCBgbG9jYWxlYCBpZiBhIGNvbXBvbmVudCBpbXBsZW1lbnRlZCB0aGlzIHByZXZpb3VzbHkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMb2NhbGUoY29tcG9uZW50KSB7XG4gIHJldHVybiAoY29tcG9uZW50LmVsLmxhbmcgfHxcbiAgICBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoY29tcG9uZW50LmVsLCBcIltsYW5nXVwiKT8ubGFuZyB8fFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8XG4gICAgZGVmYXVsdExvY2FsZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbCBmb3JtYXRzIGFuZCBwYXJzZXMgbnVtYmVycyBmb3IgbG9jYWxpemF0aW9uXG4gKi9cbmNsYXNzIE51bWJlclN0cmluZ0Zvcm1hdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVsb2NhbGl6ZSA9IChudW1iZXJTdHJpbmcpID0+IFxuICAgIC8vIEZvciBwZXJmb3JtYW5jZSwgKGRlKWxvY2FsaXphdGlvbiBpcyBza2lwcGVkIGlmIHRoZSBmb3JtYXR0ZXIgaXNuJ3QgaW5pdGlhbGl6ZWQuXG4gICAgLy8gSW4gb3JkZXIgdG8gbG9jYWxpemUvZGVsb2NhbGl6ZSwgZS5nLiB3aGVuIGxhbmcvbnVtYmVyaW5nU3lzdGVtIHByb3BzIGFyZSBub3QgZGVmYXVsdCB2YWx1ZXMsXG4gICAgLy8gYG51bWJlckZvcm1hdE9wdGlvbnNgIG11c3QgYmUgc2V0IGluIGEgY29tcG9uZW50IHRvIGNyZWF0ZSBhbmQgY2FjaGUgdGhlIGZvcm1hdHRlci5cbiAgICB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zXG4gICAgICA/IHNhbml0aXplRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcobnVtYmVyU3RyaW5nLCAobm9uRXhwb051bVN0cmluZykgPT4gbm9uRXhwb051bVN0cmluZ1xuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9taW51c1NpZ259XWAsIFwiZ1wiKSwgXCItXCIpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske3RoaXMuX2dyb3VwfV1gLCBcImdcIiksIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske3RoaXMuX2RlY2ltYWx9XWAsIFwiZ1wiKSwgXCIuXCIpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske3RoaXMuX2RpZ2l0cy5qb2luKFwiXCIpfV1gLCBcImdcIiksIHRoaXMuX2dldERpZ2l0SW5kZXgpKVxuICAgICAgOiBudW1iZXJTdHJpbmc7XG4gICAgdGhpcy5sb2NhbGl6ZSA9IChudW1iZXJTdHJpbmcpID0+IHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnNcbiAgICAgID8gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIChub25FeHBvTnVtU3RyaW5nKSA9PiBpc1ZhbGlkTnVtYmVyKG5vbkV4cG9OdW1TdHJpbmcudHJpbSgpKVxuICAgICAgICA/IG5ldyBCaWdEZWNpbWFsKG5vbkV4cG9OdW1TdHJpbmcudHJpbSgpKVxuICAgICAgICAgIC5mb3JtYXQodGhpcylcbiAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9hY3R1YWxHcm91cH1dYCwgXCJnXCIpLCB0aGlzLl9ncm91cClcbiAgICAgICAgOiBub25FeHBvTnVtU3RyaW5nKVxuICAgICAgOiBudW1iZXJTdHJpbmc7XG4gIH1cbiAgZ2V0IGdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cDtcbiAgfVxuICBnZXQgZGVjaW1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVjaW1hbDtcbiAgfVxuICBnZXQgbWludXNTaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9taW51c1NpZ247XG4gIH1cbiAgZ2V0IGRpZ2l0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlnaXRzO1xuICB9XG4gIGdldCBudW1iZXJGb3JtYXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlckZvcm1hdHRlcjtcbiAgfVxuICBnZXQgbnVtYmVyRm9ybWF0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogbnVtYmVyRm9ybWF0T3B0aW9ucyBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIGxvY2FsaXplL2RlbG9jYWxpemUgaXMgY2FsbGVkIHRvIGVuc3VyZSB0aGUgb3B0aW9ucyBhcmUgdXAgdG8gZGF0ZVxuICAgKi9cbiAgc2V0IG51bWJlckZvcm1hdE9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMubG9jYWxlID0gZ2V0U3VwcG9ydGVkTG9jYWxlKG9wdGlvbnM/LmxvY2FsZSk7XG4gICAgb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gPSBnZXRTdXBwb3J0ZWROdW1iZXJpbmdTeXN0ZW0ob3B0aW9ucz8ubnVtYmVyaW5nU3lzdGVtKTtcbiAgICBpZiAoXG4gICAgLy8gTm8gbmVlZCB0byBjcmVhdGUgdGhlIGZvcm1hdHRlciBpZiBgbG9jYWxlYCBhbmQgYG51bWJlcmluZ1N5c3RlbWBcbiAgICAvLyBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzIGFuZCBgbnVtYmVyRm9ybWF0T3B0aW9uc2AgaGFzIG5vdCBiZWVuIHNldFxuICAgICghdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucyAmJlxuICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgIG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtID09PSBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtICYmXG4gICAgICAvLyBkb24ndCBza2lwIGluaXRpYWxpemF0aW9uIGlmIGFueSBvcHRpb25zIGJlc2lkZXMgbG9jYWxlL251bWJlcmluZ1N5c3RlbSBhcmUgc2V0XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPT09IDIpIHx8XG4gICAgICAvLyBjYWNoZSBmb3JtYXR0ZXIgYnkgb25seSByZWNyZWF0aW5nIHdoZW4gb3B0aW9ucyBjaGFuZ2VcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShvcHRpb25zKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9udW1iZXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucy5sb2NhbGUsIHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMpO1xuICAgIHRoaXMuX2RpZ2l0cyA9IFtcbiAgICAgIC4uLm5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zLmxvY2FsZSwge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1cbiAgICAgIH0pLmZvcm1hdCg5ODc2NTQzMjEwKVxuICAgIF0ucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGluZGV4ID0gbmV3IE1hcCh0aGlzLl9kaWdpdHMubWFwKChkLCBpKSA9PiBbZCwgaV0pKTtcbiAgICBjb25zdCBwYXJ0cyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zLmxvY2FsZSkuZm9ybWF0VG9QYXJ0cygtMTIzNDU2NzguOSk7XG4gICAgdGhpcy5fYWN0dWFsR3JvdXAgPSBwYXJ0cy5maW5kKChkKSA9PiBkLnR5cGUgPT09IFwiZ3JvdXBcIikudmFsdWU7XG4gICAgLy8gY2hhbmdlIHdoaXRlc3BhY2UgZ3JvdXAgY2hhcmFjdGVycyB0aGF0IGRvbid0IHJlbmRlciBjb3JyZWN0bHlcbiAgICB0aGlzLl9ncm91cCA9IHRoaXMuX2FjdHVhbEdyb3VwLnRyaW0oKS5sZW5ndGggPT09IDAgPyBcIiBcIiA6IHRoaXMuX2FjdHVhbEdyb3VwO1xuICAgIHRoaXMuX2RlY2ltYWwgPSBwYXJ0cy5maW5kKChkKSA9PiBkLnR5cGUgPT09IFwiZGVjaW1hbFwiKS52YWx1ZTtcbiAgICB0aGlzLl9taW51c1NpZ24gPSBwYXJ0cy5maW5kKChkKSA9PiBkLnR5cGUgPT09IFwibWludXNTaWduXCIpLnZhbHVlO1xuICAgIHRoaXMuX2dldERpZ2l0SW5kZXggPSAoZCkgPT4gaW5kZXguZ2V0KGQpO1xuICB9XG59XG5jb25zdCBudW1iZXJTdHJpbmdGb3JtYXR0ZXIgPSBuZXcgTnVtYmVyU3RyaW5nRm9ybWF0KCk7XG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmxldCBkYXRlVGltZUZvcm1hdENhY2hlO1xuLyoqXG4gKiBVc2VkIHRvIGVuc3VyZSBhbGwgY2FjaGVkIGZvcm1hdHMgYXJlIGZvciB0aGUgc2FtZSBsb2NhbGUuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmxldCBwcmV2aW91c0xvY2FsZVVzZWRGb3JDYWNoaW5nO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBjYWNoZSBrZXkgZm9yIGRhdGUgdGltZSBmb3JtYXQgbG9va3Vwcy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gYnVpbGREYXRlVGltZUZvcm1hdENhY2hlS2V5KG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMob3B0aW9ucylcbiAgICAuc29ydCgoW2tleTFdLCBba2V5Ml0pID0+IGtleTEubG9jYWxlQ29tcGFyZShrZXkyKSlcbiAgICAubWFwKChrZXlWYWx1ZSkgPT4gYCR7a2V5VmFsdWVbMF19LSR7a2V5VmFsdWVbMV19YClcbiAgICAuZmxhdCgpXG4gICAgLmpvaW4oXCI6XCIpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEludGwuRGF0ZVRpbWVGb3JtYXQgYW5kIHJldXNlcyBpdCBpZiByZXF1ZXN0ZWQgd2l0aCB0aGUgc2FtZSBsb2NhbGUgYW5kIG9wdGlvbnMuXG4gKlxuICogKipOb3RlKio6IHRoZSBjYWNoZSB3aWxsIGJlIGNsZWFyZWQgaWYgYSBkaWZmZXJlbnQgbG9jYWxlIGlzIHByb3ZpZGVkXG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGdldERhdGVUaW1lRm9ybWF0KGxvY2FsZSwgb3B0aW9ucykge1xuICBsb2NhbGUgPSBnZXRTdXBwb3J0ZWRMb2NhbGUobG9jYWxlKTtcbiAgaWYgKCFkYXRlVGltZUZvcm1hdENhY2hlKSB7XG4gICAgZGF0ZVRpbWVGb3JtYXRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgfVxuICBpZiAocHJldmlvdXNMb2NhbGVVc2VkRm9yQ2FjaGluZyAhPT0gbG9jYWxlKSB7XG4gICAgZGF0ZVRpbWVGb3JtYXRDYWNoZS5jbGVhcigpO1xuICAgIHByZXZpb3VzTG9jYWxlVXNlZEZvckNhY2hpbmcgPSBsb2NhbGU7XG4gIH1cbiAgY29uc3Qga2V5ID0gYnVpbGREYXRlVGltZUZvcm1hdENhY2hlS2V5KG9wdGlvbnMpO1xuICBjb25zdCBjYWNoZWQgPSBkYXRlVGltZUZvcm1hdENhY2hlLmdldChrZXkpO1xuICBpZiAoY2FjaGVkKSB7XG4gICAgcmV0dXJuIGNhY2hlZDtcbiAgfVxuICBjb25zdCBmb3JtYXQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMpO1xuICBkYXRlVGltZUZvcm1hdENhY2hlLnNldChrZXksIGZvcm1hdCk7XG4gIHJldHVybiBmb3JtYXQ7XG59XG5cbmV4cG9ydCB7IEJpZ0RlY2ltYWwgYXMgQiwgZ2V0RGF0ZVRpbWVGb3JtYXQgYXMgYSwgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSBhcyBiLCBjb25uZWN0TG9jYWxpemVkIGFzIGMsIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgYXMgZCwgZ2V0U3VwcG9ydGVkTnVtYmVyaW5nU3lzdGVtIGFzIGUsIGdldFN1cHBvcnRlZExvY2FsZSBhcyBnLCBpc1ZhbGlkTnVtYmVyIGFzIGksIG51bWJlclN0cmluZ0Zvcm1hdHRlciBhcyBuLCBwYXJzZU51bWJlclN0cmluZyBhcyBwLCBzYW5pdGl6ZU51bWJlclN0cmluZyBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBnZXRBc3NldFBhdGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==