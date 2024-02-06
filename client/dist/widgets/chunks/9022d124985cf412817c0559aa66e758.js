"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_arcgis_core_identity_IdentityManager_js"],{

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFocusTrap": () => (/* binding */ createFocusTrap)
/* harmony export */ });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 7.4.3
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
    if (node === undefined || !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
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
      var tabbableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes
      var focusableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(container, config.tabbableOptions);
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
              return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
            return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(n, config.tabbableOptions);
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
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
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
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
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
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
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
        updateObservedNodes();
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
      updateObservedNodes();
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
      updateObservedNodes();
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
      updateObservedNodes();
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
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusable": () => (/* binding */ focusable),
/* harmony export */   "isFocusable": () => (/* binding */ isFocusable),
/* harmony export */   "isTabbable": () => (/* binding */ isTabbable),
/* harmony export */   "tabbable": () => (/* binding */ tabbable)
/* harmony export */ });
/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var getTabindex = function getTabindex(node, isScope) {
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    //
    // isScope is positive for custom element with shadow root or slot that by default
    // have tabIndex -1, but need to be sorted by document order in order for their
    // content to be inserted in the correct position
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && isNaN(parseInt(node.getAttribute('tabindex'), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityForm.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intl/substitute.js */ "./node_modules/@arcgis/core/intl/substitute.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "./node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a="esri-identity-form",p={base:a,group:`${a}__group`,label:`${a}__label`,footer:`${a}__footer`,esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},l="ArcGIS Online";let d=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n,messages:a}=this,d=(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:p.group},(0,_intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__.substitute)(n?a.oAuthInfo:a.info,{server:e&&/\.arcgis\.com/i.test(e)?l:e,resource:`(${t||a.lblItem})`})),c=n?null:(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:p.group,key:"username"},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("label",{class:p.label},a.lblUser,(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__.storeNode,"data-node-ref":"_usernameInputNode",class:p.esriInput}))),m=n?null:(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:p.group,key:"password"},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("label",{class:p.label},a.lblPwd,(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("input",{value:"",required:!0,type:"password",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__.storeNode,"data-node-ref":"_passwordInputNode",class:p.esriInput}))),h=(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:this.classes(p.group,p.footer)},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("input",{type:"submit",disabled:!!o,value:o?a.lblSigning:a.lblOk,class:p.esriButton}),(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("input",{type:"button",value:a.lblCancel,bind:this,onclick:this._cancel,class:this.classes(p.esriButton,p.esriButtonSecondary)})),b=s?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",null,s.details&&s.details.httpStatus?a.invalidUser:a.noAuthService):null;return (0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("form",{class:p.base,bind:this,onsubmit:this._submit},d,b,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)(),(0,_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__.messageBundle)("esri/identity/t9n/identity")],d.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],d.prototype,"signingIn",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],d.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],d.prototype,"resource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],d.prototype,"error",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],d.prototype,"oAuthPrompt",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.identity.IdentityForm")],d);const c=d;


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManager.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityManagerBase.js */ "./node_modules/@arcgis/core/identity/IdentityManagerBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__.IdentityManagerBase{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;(0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__.setId)(s);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityManagerBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManagerBase.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Credential": () => (/* binding */ L),
/* harmony export */   "IdentityManagerBase": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _IdentityForm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IdentityForm.js */ "./node_modules/@arcgis/core/identity/IdentityForm.js");
/* harmony import */ var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IdentityModal.js */ "./node_modules/@arcgis/core/identity/IdentityModal.js");
/* harmony import */ var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./OAuthCredential.js */ "./node_modules/@arcgis/core/identity/OAuthCredential.js");
/* harmony import */ var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./OAuthInfo.js */ "./node_modules/@arcgis/core/identity/OAuthInfo.js");
/* harmony import */ var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServerInfo.js */ "./node_modules/@arcgis/core/identity/ServerInfo.js");
/* harmony import */ var _portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../portal/support/urlUtils.js */ "./node_modules/@arcgis/core/portal/support/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const C={},b=e=>{const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(e.owningSystemUrl).host,r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},D=(e,t)=>!!(b(e)&&t&&t.some((t=>t.test(e.server))));let q=null,j=null;try{q=window.localStorage,j=window.sessionStorage}catch{}class E extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this._defaultOAuthInfo=null,this._defaultTokenValidity=60,this.dialog=null,this.formConstructor=_IdentityForm_js__WEBPACK_IMPORTED_MODULE_15__["default"],this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.urlToObject)(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthLocationParams(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t);let s,i=this.findServerInfo(t),o=!0;i||(i=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_19__["default"],i.server=this._getServerInstanceRoot(t),r?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),o=!1):(s=new L({userId:e.userId,server:i.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),o||s.refreshServerTokens()}toJSON(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.fixJson)({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_19__["default"](t))})),e.length&&this.registerServers(e)}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"](t))})),e.length&&this.registerOAuthInfos(e)}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new L(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){if(!e)return;let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r}getCredential(e,t){let r,s,o=!0;t&&(r=!!t.token,s=t.error,o=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const n=new AbortController,a=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)();if(t.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(t.signal,(()=>{n.abort()})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(n,(()=>{a.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAborted)(n))return a.promise;t.signal=n.signal;const h=this._isAdminResource(e),u=r?this.findCredential(e):null;let p;if(u&&s&&s.details&&498===s.details.httpStatus)u.destroy();else if(u)return p=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized","You are currently signed in as: '"+u.userId+"'. You do not have access to this resource: "+e,{error:s}),a.reject(p),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let g=this.findServerInfo(e);if(g)!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return p=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(p),a.promise;g=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_19__["default"],g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g])}return g.hasPortal&&void 0===g._selfReq&&(o||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const o=this._rePortalTokenSvc.test(e.tokenServiceUrl),n=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,p,g,m;t&&(m=this.tokenValidity||a||this._defaultTokenValidity,m>a&&a>0&&(m=a)),r&&(h=r.isAdmin,l=r.serverUrl,c=r.token,p=r.signal,g=r.ssl,e.customParameters=r.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(d.toLowerCase()),e.webTierAuth&&r?.serverUrl&&!g&&"http"===n.scheme&&((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(n.uri,d,!0)||"https"===u.scheme&&n.host===u.host&&"7080"===n.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:t?.username,password:t?.password,serverUrl:l,token:c,expiration:m,referer:h||o?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:p,...r?.ioArgs};o||(v.withCredentials=!1);return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d,v).then((r=>{const s=r.data;if(!s||!s.token)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:authentication-failed","Unable to generate token");const o=e.server;return C[o]||(C[o]={}),t&&(C[o][t.username]=t.password),s.validity=m,s}))}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,r){let o=!1;return this.getCredential(e,{prompt:!1}).then((n=>{let a;const h={f:"json"};if("portal"===n.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))a=n.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!n.token)return{credential:n};a=n.server+"/sharing/rest"}else{if(!n.token)return{credential:n};a=n.server+"/rest/services"}return n.token&&(h.token=n.token),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized",`You are currently signed in as: '${n.userId}'.`,e.data);return o=!!e.data.viewOnlyUserTypeApp,{credential:n}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw n.destroy(),new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:invalid-request");return{credential:n}}))})).then((e=>({credential:e.credential,viewOnly:o})))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.queryToObject)(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const s=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)(),o=()=>{h?.remove(),d?.remove(),p?.remove(),a?.destroy(),this.dialog?.destroy(),this.dialog=a=h=d=p=null},n=()=>{o(),this._oAuthDfd=null,s.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))};r.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(r.signal,(()=>{n()}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_16__["default"],this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h=a.on("cancel",n),d=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__.watch)((()=>this.dialog.open),n),p=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((i=>{o();const n=new L({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity});s.resolve(n)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)();const o=this._oAuthDfd;let n;s?.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&f()})),o.resUrl_=e,o.sinfo_=t,o.oinfo_=r;const a=r._oAuthCred;if(a.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&!r.popup&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32));n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.base64UrlEncode)(e),a.codeVerifier=n,e=crypto.getRandomValues(new Uint8Array(32)),a.stateUID=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.base64UrlEncode)(e),a.save()||(a.codeVerifier=n=null)}else a.codeVerifier=null;let h,d,p,_;this._getCodeChallenge(n).then((i=>{const o=!s||!1!==s.oAuthPopupConfirmation;r.popup&&o?(h=new this.formConstructor,h.oAuthPrompt=!0,h.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_16__["default"],this.dialog.content=h,this.dialog.open=!0,this.emit("dialog-create"),d=h.on("cancel",f),p=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__.watch)((()=>this.dialog.open),f),_=h.on("submit",(()=>{g(),this._doOAuthSignIn(e,t,r,i)}))):this._doOAuthSignIn(e,t,r,i)}));const f=()=>{g(),this._oAuthDfd=null,o.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))},g=()=>{d?.remove(),p?.remove(),_?.remove(),h?.destroy(),this.dialog?.destroy(),this.dialog=null};return o.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_6__.on)(window,"message",(t=>{if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===t.data?.type){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.queryToObject)(e);let r=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),t.state.portalUrl&&(this._oAuthLocationParams=t,r=!0)}catch{}else if(t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0,t.state)))try{t.state=JSON.parse(t.state)}catch{}r&&(window.location.hash=t.state?.hash||"")}let t=window.location.search;if(t){"?"===t.charAt(0)&&(t=t.substring(1));const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.queryToObject)(t);let r=!1;if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,r=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(r=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(r){const t={...e};["code","error","error_description","message_code","persist","state"].forEach((e=>{delete t[e]}));const r=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.objectToQuery)(t),s=window.location.pathname+(r?`?${r}`:"")+(e.state?.hash||"");window.history.replaceState(window.history.state,"",s)}}}_getOAuthToken(e,t,r,i,o){return e=e.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:i&&o?{grant_type:"authorization_code",code:t,redirect_uri:i,client_id:r,code_verifier:o}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then((e=>e.data))}_getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e);return crypto.subtle.digest("SHA-256",t).then((e=>(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.base64UrlEncode)(new Uint8Array(e))))}return Promise.resolve(null)}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let r,s,i,o,n=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],i=this.findServerInfo(r.server),s=i&&i.owningSystemUrl,o=s?this.findCredential(s,r.userId):void 0,n=this._getIdenticalSvcIdx(e,r),!a)return-1===n&&r.resources.push(e),this._addResource(e,o),r;-1!==n&&(r.resources.splice(n,1),this._removeResource(e,o))}else{let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,i=this.findServerInfo(t.server),s=i&&i.owningSystemUrl,o=s?this.findCredential(s,t.userId):void 0,n=r,!0)))),a)t&&(t.resources.splice(n,1),this._removeResource(e,o));else if(t)return this._addResource(e,o),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t&&t.isAdmin&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1!==r||(0,_portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_20__.isSecureProxyService)(t)||(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const r=(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.proxyUrl||"").toLowerCase(),s=r?e.toLowerCase().indexOf(r+"?"):-1;return-1!==s&&(e=e.substring(s+r.length+1)),e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.normalize)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.urlToObject)(e).path}_isRESTService(e){return e.includes(this._agsRest)}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r=!1;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replaceAll(e,"$1")===i.replaceAll(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(e.toLowerCase()),s=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(r.uri)));return!i&&s&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),r.uri)),i||_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl&&(i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(r,_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,r.uri)))),i=i||this._agsPortal.test(r.path),i}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,o)=>{-1===r&&i.regex.test(e)&&(r=o),-1===s&&i.regex.test(t)&&(s=o)}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl;s&&b(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",r=(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.Url(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(e.toLowerCase().includes("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred;if(e.code){const i=s.codeVerifier;return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then((i=>{const o=new L({userId:i.username,server:r.server,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=o.userId,s.storage=i.persist?q:j,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=o.userId,s.ssl=o.ssl,s.save(),o}))}const i=new L({userId:e.username,server:r.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=i.userId,s.storage=e.persist?q:j,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){const t=this._oAuthDfd;if(this._oAuthDfd=null,t)if(clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle?.remove(),e.error){const r="access_denied"===e.error,s=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"](r?"identity-manager:user-aborted":"identity-manager:authentication-failed",r?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);t.reject(s)}else this._processOAuthResponseParams(e,t.oinfo_,t.sinfo_).then((e=>{t.resolve(e)})).catch((e=>{t.reject(e)}))}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.queryToObject)(e)))}_exchangeToken(e,t,r){return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(r,e,!0)))}_checkProtocol(e,t,r,s){let o=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.getProxyRule)(n)&&(o=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!o)){r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return o}_enqueue(e,t,r,s,i,o){return s||(s=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=o,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e.options_&&e.options_.resource,s=e.resUrl_,i=e.refresh_;let o=!1;this.credentials.includes(t)||(i&&this.credentials.includes(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,o=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const n=this._soReqs,a={};this._soReqs=[],n.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),n.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,o||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=(o,a,h,l)=>{const d=e.sinfo_,u=!e.options_||!1!==e.options_.prompt,p=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let f,g;if(o)t(new L({userId:o,server:d.server,token:h||null,expires:null!=l?Number(l):null,ssl:!!a}));else if(window!==window.parent&&this._appUrlObj.query?.["arcgis-auth-origin"]&&this._appUrlObj.query?.["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const s=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_6__.on)(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new L(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:credential-request-failed","Parent application's token has expired.")):r(_core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e.data.error))))}));(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(e.options_?.signal,(()=>{s.remove()}))}else if(p){let o=p._oAuthCred;if(!o){const e=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_17__["default"](p,q),t=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_17__["default"](p,j);e.isValid()&&t.isValid()?e.expires>t.expires?(o=e,t.destroy()):(o=t,e.destroy()):o=e.isValid()?e:t,p._oAuthCred=o}if(o.isValid()){f=new L({userId:o.userId,server:d.server,token:o.token,expires:o.expires,ssl:o.ssl,_oAuthCred:o});const r=p.appId!==o.appId&&this._doPortalSignIn(e.resUrl_);r||o.refreshToken?(e._pendingDfd=o.refreshToken?this._getOAuthToken(d.server,o.refreshToken,o.appId).then((e=>(f.expires=Date.now()+1e3*e.expires_in,f.token=e.access_token,f))):Promise.resolve(f),e._pendingDfd.then((e=>r?this._exchangeToken(e.server,p.appId,e.token).then((t=>(e.token=t,e))).catch((()=>e)):e)).then((e=>{t(e)})).catch((()=>{o?.destroy(),s()}))):t(f)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(p.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===o.stateUID&&o.codeVerifier)){const s=this._oAuthLocationParams;this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(s,p,d).then((e=>{t(e)})).catch(r)}else{const s=()=>{u?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,p,e.options_).then(t,r):(g=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),r(g))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,p.appId).then((e=>{(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(e.portalUrl,this._appOrigin,!0)?(f=new L({userId:e.username,server:d.server,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(f)):s()})).catch(s):s()}}else if(u){if(this._checkProtocol(e.resUrl_,d,r,e.admin_)){let s=e.options_;e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,s).then(t,r)}}else g=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),r(g)},o=()=>{const s=e.sinfo_,i=s.owningSystemUrl,o=e.options_;let n,a,h,l;if(o&&(n=o.token,a=o.error,h=o.prompt),l=this._findCredential(i,{token:n,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(D(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new L(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((r=>{t(new L({userId:l?.userId,server:s.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))}),r)}}else{this._busy=null,n&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:n,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)}))}};this._errbackFunc=r;const a=e.sinfo_.owningSystemUrl,l=this._isServerRsrc(e.resUrl_),d=e.sinfo_._restInfoPms;d?d.promise.then((t=>{const r=e.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=((0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("authInfo.tokenServicesUrl",t)||(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("authInfo.tokenServiceUrl",t)||(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("tokenServiceUrl",t))??null,r.shortLivedTokenValidity=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("authInfo.shortLivedTokenValidity",t)??null,r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}l&&r.owningSystemUrl?o():s()}),(()=>{e.sinfo_._restInfoPms=null;const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t)})):l&&a?o():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,o,n;return t&&(s=t.user&&t.user.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e.sinfo_.currentVersion=n),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r))):!s&&i&&n>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s()})):s()}_generateOAuthInfo(e){let t,r=null,i=e.portalUrl;const o=e.customBaseUrl,n=e.owningTenant,a=!this._defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this._defaultOAuthInfo=new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this._defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this._defaultOAuthInfo.appId,redirect_uri:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.makeAbsolute)(this._defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this._defaultOAuthInfo.clone();e.data.urlKey&&o?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+o:t.portalUrl=i,t.popup=window!==window.top||!((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.hasSameOrigin)(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,r,s){const o=r._oAuthCred,a={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),o.stateUID&&(a.uid=o.stateUID);const h={client_id:r.appId,response_type:o.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!o.codeVerifier)};r.forceLogin&&(h.force_login=!0),r.forceUserId&&r.userId&&(h.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(h.redirectToUserOrgUrl=!0),o.codeVerifier&&(h.code_challenge=s||o.codeVerifier,h.code_challenge_method=s?"S256":"plain");const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",c=l+"?"+(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.objectToQuery)(h);if(r.popup){const e=window.open(c,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove();const e=this._oAuthDfd;if(e){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnPopupHandle=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_6__.on)(window,["arcgis:auth:hash","arcgis:auth:location:search"],(e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)}));else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:h,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=c}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"");if(e.popup)return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.makeAbsolute)(e.popupCallbackUrl);if(t){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.urlToObject)(r);return e.query&&["code","error","error_description","message_code","persist","state"].forEach((t=>{delete e.query[t]})),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.addQueryParameters)(e.path,e.query)}return r}}E.prototype.declaredClass="esri.identity.IdentityManagerBase";let L=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"].EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.server),t=e&&e.owningSystemUrl,s=!!t&&"server"===this.scope,i=s&&D(e,_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._legacyFed),o=e.webTierAuth,n=o&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.normalizeWebTierAuth,a=C[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=s?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(t):null,u={username:this.userId,password:h};if(o&&!n)return;s&&!d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.serverInfos.some((e=>(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findCredential(d.server,this.userId):null;if(!s||p){if(!i){if(s)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(n)u=null,l={ssl:this.ssl};else{if(!h){let t;return c&&(c=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._sanitizeUrl(c),this._enqueued=1,t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),t}this.isAdmin&&(l={isAdmin:!0})}return _kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.generateToken(s?d:e,s?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}p?.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.credentials.forEach((e=>{const t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(e.server),s=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&s&&"server"===e.scope&&(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._hasSameServerInstance(this.server,s)||_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._isIdProvider(s,this.server))&&(D(t,_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())}))}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.server),s=t&&t.owningSystemUrl,i=s&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(s);!1===e||s&&"portal"!==this.scope&&(!i||!i.webTierAuth||_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.credentials.indexOf(this);e>-1&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.fixJson)({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"creationTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"expires",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"isAdmin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"oAuthState",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"resources",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"scope",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"ssl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"token",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"tokenRefreshBuffer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"userId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()],L.prototype,"validity",void 0),L=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.identity.Credential")],L);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityModal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityModal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/Widget.js */ "./node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/support/widget.js */ "./node_modules/@arcgis/core/widgets/support/widget.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d="esri-identity-modal",p={base:d,open:`${d}--open`,closed:`${d}--closed`,title:`${d}__title`,dialog:`${d}__dialog`,content:`${d}__content`,closeButton:`${d}__close-button`,iconClose:"esri-icon-close"};let u=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._focusTrap=null,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.watch)((()=>this.open),(()=>this._toggleFocusTrap())))}destroy(){this._destroyFocusTrap()}get title(){return this.messages?.auth.signIn}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n={[p.open]:r,[p.closed]:!r},a=(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("button",{class:p.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close,type:"button"},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("span",{"aria-hidden":"true",class:p.iconClose})),l=`${t}_title`,d=`${t}_content`,u=s?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("h1",{id:l,class:p.title},s):null,h=r?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{bind:this,class:p.dialog,role:"dialog","aria-labelledby":l,"aria-describedby":d,afterCreate:this._createFocusTrap},a,u,this._renderContent(d)):null;return (0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{tabIndex:-1,class:this.classes(p.base,n)},h)}_destroyFocusTrap(){this._focusTrap?.deactivate({onDeactivate:()=>{}}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate())}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=(0,focus_trap__WEBPACK_IMPORTED_MODULE_12__.createFocusTrap)(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.addHandles((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeHandle)((()=>cancelAnimationFrame(o))))}_renderContent(t){const e=this.content;return"string"==typeof e?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:p.content,id:t,innerHTML:e}):(0,_widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_9__.isWidget)(e)?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:p.content,id:t},e.render()):e instanceof HTMLElement?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__.tsx)("div",{class:p.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],u.prototype,"container",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],u.prototype,"content",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],u.prototype,"open",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(),(0,_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__.messageBundle)("esri/t9n/common")],u.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],u.prototype,"title",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.identity.IdentityModal")],u);const h=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/OAuthCredential.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthCredential.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class e{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)t=!0;else if(this.expires){const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return!1;const e=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let r=e[s.authNamespace];r||(r=e[s.authNamespace]={}),this.appId||(this.appId=s.appId),r[s.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(e))}catch(i){return console.warn(i),!1}return!0}return!1}destroy(){const e=this._load(),s=this.oAuthInfo;if(s&&s.appId&&s.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const t=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;if(e.append("f","json"),e.append("auth_token",this.refreshToken||this.token),e.append("client_id",s.appId),e.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,e);else{const s=new XMLHttpRequest;s.open("POST",t),s.send(e)}}if(s&&s.authNamespace&&s.portalUrl&&this.storage){const r=e[s.authNamespace];if(r){delete r[s.portalUrl];try{this.storage.setItem(t,JSON.stringify(e))}catch(i){console.log(i)}}}s&&(s._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId))}}_load(){let e={};if(this.storage){const i=this.storage.getItem(t);if(i)try{e=JSON.parse(i)}catch(s){console.warn(s)}}return e}}e.prototype.declaredClass="esri.identity.OAuthCredential";


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/OAuthInfo.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthInfo.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var p;let s=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return p.fromJSON(this.toJSON())}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"appId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"authNamespace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"expiration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"flowType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"forceLogin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"forceUserId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"locale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"popup",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"portalUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"userId",void 0),s=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.identity.OAuthInfo")],s);const i=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/ServerInfo.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/ServerInfo.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"adminTokenServiceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"currentVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"hasPortal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"hasServer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"owningSystemUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"owningTenant",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"shortLivedTokenValidity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"tokenServiceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"webTierAuth",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.identity.ServerInfo")],s);const i=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/decorators/vmEvent.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/decorators/vmEvent.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vmEvent": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);const n=a._delegatedEventNames,r=Array.isArray(e)?e:t(e);n.push(...r)}}function t(e){return e.split(",").map((e=>e.trim()))}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/widget.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/widget.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accessibleHandler": () => (/* reexport safe */ _decorators_accessibleHandler_js__WEBPACK_IMPORTED_MODULE_0__.accessibleHandler),
/* harmony export */   "additionalAllowedTags": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.additionalAllowedTags),
/* harmony export */   "classes": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.classes),
/* harmony export */   "cssTransition": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.cssTransition),
/* harmony export */   "discardNode": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.discardNode),
/* harmony export */   "getCalciteThemeClass": () => (/* reexport safe */ _support_themeUtils_js__WEBPACK_IMPORTED_MODULE_5__.getCalciteThemeClass),
/* harmony export */   "getDir": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.getDir),
/* harmony export */   "hasDomNode": () => (/* binding */ t),
/* harmony export */   "isActivationKey": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.isActivationKey),
/* harmony export */   "isDarkTheme": () => (/* reexport safe */ _support_themeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isDarkTheme),
/* harmony export */   "isRTL": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.isRTL),
/* harmony export */   "isWidget": () => (/* binding */ e),
/* harmony export */   "keepMenuItemWithinView": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.keepMenuItemWithinView),
/* harmony export */   "messageBundle": () => (/* reexport safe */ _decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_1__.messageBundle),
/* harmony export */   "onResize": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.onResize),
/* harmony export */   "renderingSanitizer": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.renderingSanitizer),
/* harmony export */   "safeAttrs": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.safeAttrs),
/* harmony export */   "setCalciteThemeClass": () => (/* reexport safe */ _support_themeUtils_js__WEBPACK_IMPORTED_MODULE_5__.setCalciteThemeClass),
/* harmony export */   "storeNode": () => (/* reexport safe */ _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__.storeNode),
/* harmony export */   "tsx": () => (/* reexport safe */ _jsxFactory_js__WEBPACK_IMPORTED_MODULE_3__.tsx),
/* harmony export */   "tsxFragment": () => (/* reexport safe */ _jsxFactory_js__WEBPACK_IMPORTED_MODULE_3__.tsxFragment),
/* harmony export */   "vmEvent": () => (/* reexport safe */ _decorators_vmEvent_js__WEBPACK_IMPORTED_MODULE_2__.vmEvent)
/* harmony export */ });
/* harmony import */ var _decorators_accessibleHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/accessibleHandler.js */ "./node_modules/@arcgis/core/widgets/support/decorators/accessibleHandler.js");
/* harmony import */ var _decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/* harmony import */ var _decorators_vmEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/vmEvent.js */ "./node_modules/@arcgis/core/widgets/support/decorators/vmEvent.js");
/* harmony import */ var _jsxFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/* harmony import */ var _widgetUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony import */ var _support_themeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/themeUtils.js */ "./node_modules/@arcgis/core/support/themeUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){return e&&"function"==typeof e.render}function t(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTAyMmQxMjQ5ODVjZjQxMjgxN2MwNTU5YWE2NmU3NTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakIsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsTUFBTTtBQUNqQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBLDJGQUEyRixhQUFhO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxPQUFPO0FBQ3BCLGVBQWUsUUFBUTtBQUN2Qiw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSw4Q0FBOEM7QUFDN0Qsa0RBQWtEO0FBQ2xELHVEQUF1RDtBQUN2RDtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLGVBQWU7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBUTs7QUFFbEMsd0VBQXdFO0FBQ3hFO0FBQ0EsMkJBQTJCLG1EQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDLG1CQUFtQixTQUFTLDhDQUE4QztBQUMxRTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVU7QUFDN0IsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZFQUE2RSxxREFBVyxxQ0FBcUMsb0RBQVU7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRFQUE0RSxxREFBVyxxQ0FBcUMsb0RBQVU7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QXlDLHVEQUFDLEVBQUUsc0ZBQUMsRUFBRSxNQUFNLFVBQVUsdUNBQXVDLHVEQUFDLEVBQUUsc0ZBQUMsaUNBQWlDLFVBQStCOzs7Ozs7Ozs7Ozs7Ozs7QUNKdnlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXLDRIQUE0SCx5REFBeUQsY0FBYyxjQUFjLHVDQUE0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnRTO0FBQ0E7QUFDQTtBQUNBO0FBQzZlLGNBQWMsc0NBQXNDLGNBQWMsdUpBQTZMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2Rpc3QvZm9jdXMtdHJhcC5lc20uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9pZGVudGl0eS9JZGVudGl0eUZvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlckJhc2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvSWRlbnRpdHlNb2RhbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9pZGVudGl0eS9PQXV0aENyZWRlbnRpYWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvT0F1dGhJbmZvLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L1NlcnZlckluZm8uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvd2lkZ2V0cy9zdXBwb3J0L2RlY29yYXRvcnMvdm1FdmVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBmb2N1cy10cmFwIDcuNC4zXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuaW1wb3J0IHsgaXNGb2N1c2FibGUsIHRhYmJhYmxlLCBmb2N1c2FibGUsIGlzVGFiYmFibGUgfSBmcm9tICd0YWJiYWJsZSc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxuXG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IHtcbiAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKSB7XG4gICAgaWYgKHRyYXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBTdGFja1t0cmFwU3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0cmFwSW5kZXggPSB0cmFwU3RhY2suaW5kZXhPZih0cmFwKTtcbiAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgdHJhcFN0YWNrLnB1c2godHJhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgIHRyYXBTdGFjay5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIHRyYXBTdGFjay5wdXNoKHRyYXApO1xuICAgIH1cbiAgfSxcbiAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uIGRlYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCkge1xuICAgIHZhciB0cmFwSW5kZXggPSB0cmFwU3RhY2suaW5kZXhPZih0cmFwKTtcbiAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgdHJhcFN0YWNrLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpZiAodHJhcFN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyYXBTdGFja1t0cmFwU3RhY2subGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgIH1cbiAgfVxufTtcbnZhciBpc1NlbGVjdGFibGVJbnB1dCA9IGZ1bmN0aW9uIGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJiB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzRXNjYXBlRXZlbnQgPSBmdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXlDb2RlID09PSAyNztcbn07XG52YXIgaXNUYWJFdmVudCA9IGZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn07XG5cbi8vIGNoZWNrcyBmb3IgVEFCIGJ5IGRlZmF1bHRcbnZhciBpc0tleUZvcndhcmQgPSBmdW5jdGlvbiBpc0tleUZvcndhcmQoZSkge1xuICByZXR1cm4gaXNUYWJFdmVudChlKSAmJiAhZS5zaGlmdEtleTtcbn07XG5cbi8vIGNoZWNrcyBmb3IgU0hJRlQrVEFCIGJ5IGRlZmF1bHRcbnZhciBpc0tleUJhY2t3YXJkID0gZnVuY3Rpb24gaXNLZXlCYWNrd2FyZChlKSB7XG4gIHJldHVybiBpc1RhYkV2ZW50KGUpICYmIGUuc2hpZnRLZXk7XG59O1xudmFyIGRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuLy8gQXJyYXkuZmluZC9maW5kSW5kZXgoKSBhcmUgbm90IHN1cHBvcnRlZCBvbiBJRTsgdGhpcyByZXBsaWNhdGVzIGVub3VnaFxuLy8gIG9mIEFycmF5LmZpbmRJbmRleCgpIGZvciBvdXIgbmVlZHNcbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBmbikge1xuICB2YXIgaWR4ID0gLTE7XG4gIGFyci5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICBpZiAoZm4odmFsdWUpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlOyAvLyBuZXh0XG4gIH0pO1xuXG4gIHJldHVybiBpZHg7XG59O1xuXG4vKipcbiAqIEdldCBhbiBvcHRpb24ncyB2YWx1ZSB3aGVuIGl0IGNvdWxkIGJlIGEgcGxhaW4gdmFsdWUsIG9yIGEgaGFuZGxlciB0aGF0IHByb3ZpZGVzXG4gKiAgdGhlIHZhbHVlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPcHRpb24ncyB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgaGFuZGxlciwgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSBgdmFsdWVgLCBvciB0aGUgaGFuZGxlcidzIHJldHVybmVkIHZhbHVlLlxuICovXG52YXIgdmFsdWVPckhhbmRsZXIgPSBmdW5jdGlvbiB2YWx1ZU9ySGFuZGxlcih2YWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcykgOiB2YWx1ZTtcbn07XG52YXIgZ2V0QWN0dWFsVGFyZ2V0ID0gZnVuY3Rpb24gZ2V0QWN0dWFsVGFyZ2V0KGV2ZW50KSB7XG4gIC8vIE5PVEU6IElmIHRoZSB0cmFwIGlzIF9pbnNpZGVfIGEgc2hhZG93IERPTSwgZXZlbnQudGFyZ2V0IHdpbGwgYWx3YXlzIGJlIHRoZVxuICAvLyAgc2hhZG93IGhvc3QuIEhvd2V2ZXIsIGV2ZW50LnRhcmdldC5jb21wb3NlZFBhdGgoKSB3aWxsIGJlIGFuIGFycmF5IG9mXG4gIC8vICBub2RlcyBcImNsaWNrZWRcIiBmcm9tIGlubmVyLW1vc3QgKHRoZSBhY3R1YWwgZWxlbWVudCBpbnNpZGUgdGhlIHNoYWRvdykgdG9cbiAgLy8gIG91dGVyLW1vc3QgKHRoZSBob3N0IEhUTUwgZG9jdW1lbnQpLiBJZiB3ZSBoYXZlIGFjY2VzcyB0byBjb21wb3NlZFBhdGgoKSxcbiAgLy8gIHRoZW4gdXNlIGl0cyBmaXJzdCBlbGVtZW50OyBvdGhlcndpc2UsIGZhbGwgYmFjayB0byBldmVudC50YXJnZXQgKGFuZFxuICAvLyAgdGhpcyBvbmx5IHdvcmtzIGZvciBhbiBfb3Blbl8gc2hhZG93IERPTTsgb3RoZXJ3aXNlLFxuICAvLyAgY29tcG9zZWRQYXRoKClbMF0gPT09IGV2ZW50LnRhcmdldCBhbHdheXMpLlxuICByZXR1cm4gZXZlbnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgdHlwZW9mIGV2ZW50LmNvbXBvc2VkUGF0aCA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdIDogZXZlbnQudGFyZ2V0O1xufTtcblxuLy8gTk9URTogdGhpcyBtdXN0IGJlIF9vdXRzaWRlXyBgY3JlYXRlRm9jdXNUcmFwKClgIHRvIG1ha2Ugc3VyZSBhbGwgdHJhcHMgaW4gdGhpc1xuLy8gIGN1cnJlbnQgaW5zdGFuY2UgdXNlIHRoZSBzYW1lIHN0YWNrIGlmIGB1c2VyT3B0aW9ucy50cmFwU3RhY2tgIGlzbid0IHNwZWNpZmllZFxudmFyIGludGVybmFsVHJhcFN0YWNrID0gW107XG52YXIgY3JlYXRlRm9jdXNUcmFwID0gZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwKGVsZW1lbnRzLCB1c2VyT3B0aW9ucykge1xuICAvLyBTU1I6IGEgbGl2ZSB0cmFwIHNob3VsZG4ndCBiZSBjcmVhdGVkIGluIHRoaXMgdHlwZSBvZiBlbnZpcm9ubWVudCBzbyB0aGlzXG4gIC8vICBzaG91bGQgYmUgc2FmZSBjb2RlIHRvIGV4ZWN1dGUgaWYgdGhlIGBkb2N1bWVudGAgb3B0aW9uIGlzbid0IHNwZWNpZmllZFxuICB2YXIgZG9jID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy5kb2N1bWVudCkgfHwgZG9jdW1lbnQ7XG4gIHZhciB0cmFwU3RhY2sgPSAodXNlck9wdGlvbnMgPT09IG51bGwgfHwgdXNlck9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJPcHRpb25zLnRyYXBTdGFjaykgfHwgaW50ZXJuYWxUcmFwU3RhY2s7XG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZGVsYXlJbml0aWFsRm9jdXM6IHRydWUsXG4gICAgaXNLZXlGb3J3YXJkOiBpc0tleUZvcndhcmQsXG4gICAgaXNLZXlCYWNrd2FyZDogaXNLZXlCYWNrd2FyZFxuICB9LCB1c2VyT3B0aW9ucyk7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBjb250YWluZXJzIGdpdmVuIHRvIGNyZWF0ZUZvY3VzVHJhcCgpXG4gICAgLy8gQHR5cGUge0FycmF5PEhUTUxFbGVtZW50Pn1cbiAgICBjb250YWluZXJzOiBbXSxcbiAgICAvLyBsaXN0IG9mIG9iamVjdHMgaWRlbnRpZnlpbmcgdGFiYmFibGUgbm9kZXMgaW4gYGNvbnRhaW5lcnNgIGluIHRoZSB0cmFwXG4gICAgLy8gTk9URTogaXQncyBwb3NzaWJsZSB0aGF0IGEgZ3JvdXAgaGFzIG5vIHRhYmJhYmxlIG5vZGVzIGlmIG5vZGVzIGdldCByZW1vdmVkIHdoaWxlIHRoZSB0cmFwXG4gICAgLy8gIGlzIGFjdGl2ZSwgYnV0IHRoZSB0cmFwIHNob3VsZCBuZXZlciBnZXQgdG8gYSBzdGF0ZSB3aGVyZSB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZ3JvdXBcbiAgICAvLyAgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCAodGhhdCB3b3VsZCBsZWFkIHRvIGFuIGVycm9yIGNvbmRpdGlvbiB0aGF0IHdvdWxkXG4gICAgLy8gIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZyB0aHJvd24pXG4gICAgLy8gQHR5cGUge0FycmF5PHtcbiAgICAvLyAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgLy8gICB0YWJiYWJsZU5vZGVzOiBBcnJheTxIVE1MRWxlbWVudD4sIC8vIGVtcHR5IGlmIG5vbmVcbiAgICAvLyAgIGZvY3VzYWJsZU5vZGVzOiBBcnJheTxIVE1MRWxlbWVudD4sIC8vIGVtcHR5IGlmIG5vbmVcbiAgICAvLyAgIGZpcnN0VGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHxudWxsLFxuICAgIC8vICAgbGFzdFRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8bnVsbCxcbiAgICAvLyAgIG5leHRUYWJiYWJsZU5vZGU6IChub2RlOiBIVE1MRWxlbWVudCwgZm9yd2FyZDogYm9vbGVhbikgPT4gSFRNTEVsZW1lbnR8dW5kZWZpbmVkXG4gICAgLy8gfT59XG4gICAgY29udGFpbmVyR3JvdXBzOiBbXSxcbiAgICAvLyBzYW1lIG9yZGVyL2xlbmd0aCBhcyBgY29udGFpbmVyc2AgbGlzdFxuXG4gICAgLy8gcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIGBjb250YWluZXJHcm91cHNgLCBidXQgb25seSB0aG9zZSB0aGF0IGFjdHVhbGx5IGhhdmVcbiAgICAvLyAgdGFiYmFibGUgbm9kZXMgaW4gdGhlbVxuICAgIC8vIE5PVEU6IHNhbWUgb3JkZXIgYXMgYGNvbnRhaW5lcnNgIGFuZCBgY29udGFpbmVyR3JvdXBzYCwgYnV0IF9fbm90IG5lY2Vzc2FyaWx5X19cbiAgICAvLyAgdGhlIHNhbWUgbGVuZ3RoXG4gICAgdGFiYmFibGVHcm91cHM6IFtdLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgLy8gdGltZXIgSUQgZm9yIHdoZW4gZGVsYXlJbml0aWFsRm9jdXMgaXMgdHJ1ZSBhbmQgaW5pdGlhbCBmb2N1cyBpbiB0aGlzIHRyYXBcbiAgICAvLyAgaGFzIGJlZW4gZGVsYXllZCBkdXJpbmcgYWN0aXZhdGlvblxuICAgIGRlbGF5SW5pdGlhbEZvY3VzVGltZXI6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgdHJhcDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3QgLS0gc29tZSBwcml2YXRlIGZ1bmN0aW9ucyByZWZlcmVuY2UgaXQsIGFuZCBpdHMgbWV0aG9kcyByZWZlcmVuY2UgcHJpdmF0ZSBmdW5jdGlvbnMsIHNvIHdlIG11c3QgZGVjbGFyZSBoZXJlIGFuZCBkZWZpbmUgbGF0ZXJcblxuICAvKipcbiAgICogR2V0cyBhIGNvbmZpZ3VyYXRpb24gb3B0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IGNvbmZpZ092ZXJyaWRlT3B0aW9ucyBJZiB0cnVlLCBhbmQgb3B0aW9uIGlzIGRlZmluZWQgaW4gdGhpcyBzZXQsXG4gICAqICB2YWx1ZSB3aWxsIGJlIHRha2VuIGZyb20gdGhpcyBvYmplY3QuIE90aGVyd2lzZSwgdmFsdWUgd2lsbCBiZSB0YWtlbiBmcm9tIGJhc2UgY29uZmlndXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgTmFtZSBvZiB0aGUgb3B0aW9uIHdob3NlIHZhbHVlIGlzIHNvdWdodC5cbiAgICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBbY29uZmlnT3B0aW9uTmFtZV0gTmFtZSBvZiBvcHRpb24gdG8gdXNlIF9faW5zdGVhZCBvZl9fIGBvcHRpb25OYW1lYFxuICAgKiAgSUlGIGBjb25maWdPdmVycmlkZU9wdGlvbnNgIGlzIG5vdCBkZWZpbmVkLiBPdGhlcndpc2UsIGBvcHRpb25OYW1lYCBpcyB1c2VkLlxuICAgKi9cbiAgdmFyIGdldE9wdGlvbiA9IGZ1bmN0aW9uIGdldE9wdGlvbihjb25maWdPdmVycmlkZU9wdGlvbnMsIG9wdGlvbk5hbWUsIGNvbmZpZ09wdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gY29uZmlnT3ZlcnJpZGVPcHRpb25zICYmIGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gdW5kZWZpbmVkID8gY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdIDogY29uZmlnW2NvbmZpZ09wdGlvbk5hbWUgfHwgb3B0aW9uTmFtZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtFdmVudH0gW2V2ZW50XVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBJbmRleCBvZiB0aGUgY29udGFpbmVyIGluIGVpdGhlciBgc3RhdGUuY29udGFpbmVyc2Agb3JcbiAgICogIGBzdGF0ZS5jb250YWluZXJHcm91cHNgICh0aGUgb3JkZXIvbGVuZ3RoIG9mIHRoZXNlIGxpc3RzIGFyZSB0aGUgc2FtZSk7IC0xXG4gICAqICBpZiB0aGUgZWxlbWVudCBpc24ndCBmb3VuZC5cbiAgICovXG4gIHZhciBmaW5kQ29udGFpbmVySW5kZXggPSBmdW5jdGlvbiBmaW5kQ29udGFpbmVySW5kZXgoZWxlbWVudCwgZXZlbnQpIHtcbiAgICB2YXIgY29tcG9zZWRQYXRoID0gdHlwZW9mIChldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQuY29tcG9zZWRQYXRoKSA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogdW5kZWZpbmVkO1xuICAgIC8vIE5PVEU6IHNlYXJjaCBgY29udGFpbmVyR3JvdXBzYCBiZWNhdXNlIGl0J3MgcG9zc2libGUgYSBncm91cCBjb250YWlucyBubyB0YWJiYWJsZVxuICAgIC8vICBub2RlcywgYnV0IHN0aWxsIGNvbnRhaW5zIGZvY3VzYWJsZSBub2RlcyAoZS5nLiBpZiB0aGV5IGFsbCBoYXZlIGB0YWJpbmRleD0tMWApXG4gICAgLy8gIGFuZCB3ZSBzdGlsbCBuZWVkIHRvIGZpbmQgdGhlIGVsZW1lbnQgaW4gdGhlcmVcbiAgICByZXR1cm4gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbmRJbmRleChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyLFxuICAgICAgICB0YWJiYWJsZU5vZGVzID0gX3JlZi50YWJiYWJsZU5vZGVzO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KSB8fCAoIC8vIGZhbGwgYmFjayB0byBleHBsaWNpdCB0YWJiYWJsZSBzZWFyY2ggd2hpY2ggd2lsbCB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBhbnlcbiAgICAgIC8vICB3ZWIgY29tcG9uZW50cyBpZiB0aGUgYHRhYmJhYmxlT3B0aW9ucy5nZXRTaGFkb3dSb290YCBvcHRpb24gd2FzIHVzZWQgZm9yXG4gICAgICAvLyAgdGhlIHRyYXAsIGVuYWJsaW5nIHNoYWRvdyBET00gc3VwcG9ydCBpbiB0YWJiYWJsZSAoYE5vZGUuY29udGFpbnMoKWAgZG9lc24ndFxuICAgICAgLy8gIGxvb2sgaW5zaWRlIHdlYiBjb21wb25lbnRzIGV2ZW4gaWYgb3BlbilcbiAgICAgIGNvbXBvc2VkUGF0aCA9PT0gbnVsbCB8fCBjb21wb3NlZFBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250YWluZXIpKSB8fCB0YWJiYWJsZU5vZGVzLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbm9kZSBmb3IgdGhlIGdpdmVuIG9wdGlvbiwgd2hpY2ggaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb3B0aW9uIHRoYXRcbiAgICogIGNhbiBiZSBlaXRoZXIgYSBET00gbm9kZSwgYSBzdHJpbmcgdGhhdCBpcyBhIHNlbGVjdG9yIHRvIGdldCBhIG5vZGUsIGBmYWxzZWBcbiAgICogIChpZiBhIG5vZGUgaXMgZXhwbGljaXRseSBOT1QgZ2l2ZW4pLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbnkgb2YgdGhlc2VcbiAgICogIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWVcbiAgICogQHJldHVybnMge3VuZGVmaW5lZCB8IGZhbHNlIHwgSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50fSBSZXR1cm5zXG4gICAqICBgdW5kZWZpbmVkYCBpZiB0aGUgb3B0aW9uIGlzIG5vdCBzcGVjaWZpZWQ7IGBmYWxzZWAgaWYgdGhlIG9wdGlvblxuICAgKiAgcmVzb2x2ZWQgdG8gYGZhbHNlYCAobm9kZSBleHBsaWNpdGx5IG5vdCBnaXZlbik7IG90aGVyd2lzZSwgdGhlIHJlc29sdmVkXG4gICAqICBET00gbm9kZS5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBvcHRpb24gaXMgc2V0LCBub3QgYGZhbHNlYCwgYW5kIGlzIG5vdCwgb3IgZG9lcyBub3RcbiAgICogIHJlc29sdmUgdG8gYSBub2RlLlxuICAgKi9cbiAgdmFyIGdldE5vZGVGb3JPcHRpb24gPSBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBwYXJhbXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG4gICAgICBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlLmFwcGx5KHZvaWQgMCwgcGFyYW1zKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvblZhbHVlID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25WYWx1ZSA9IHVuZGVmaW5lZDsgLy8gdXNlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICBpZiAob3B0aW9uVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvblZhbHVlO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSwgZW1wdHkgc3RyaW5nIChpbnZhbGlkKSwgbnVsbCAoaW52YWxpZCksIDAgKGludmFsaWQpXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIHdhcyBzcGVjaWZpZWQgYnV0IHdhcyBub3QgYSBub2RlLCBvciBkaWQgbm90IHJldHVybiBhIG5vZGVcIikpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlOyAvLyBjb3VsZCBiZSBIVE1MRWxlbWVudCwgU1ZHRWxlbWVudCwgb3Igbm9uLWVtcHR5IHN0cmluZyBhdCB0aGlzIHBvaW50XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTsgLy8gcmVzb2x2ZSB0byBub2RlLCBvciBudWxsIGlmIGZhaWxzXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYFwiLmNvbmNhdChvcHRpb25OYW1lLCBcImAgYXMgc2VsZWN0b3IgcmVmZXJzIHRvIG5vIGtub3duIG5vZGVcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgdmFyIGdldEluaXRpYWxGb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG5cbiAgICAvLyBmYWxzZSBleHBsaWNpdGx5IGluZGljYXRlcyB3ZSB3YW50IG5vIGluaXRpYWxGb2N1cyBhdCBhbGxcbiAgICBpZiAobm9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCB8fCAhaXNGb2N1c2FibGUobm9kZSwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykpIHtcbiAgICAgIC8vIG9wdGlvbiBub3Qgc3BlY2lmaWVkIG5vciBmb2N1c2FibGU6IHVzZSBmYWxsYmFjayBvcHRpb25zXG4gICAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KGRvYy5hY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXTtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcblxuICAgICAgICAvLyBOT1RFOiBgZmFsbGJhY2tGb2N1c2Agb3B0aW9uIGZ1bmN0aW9uIGNhbm5vdCByZXR1cm4gYGZhbHNlYCAobm90IHN1cHBvcnRlZClcbiAgICAgICAgbm9kZSA9IGZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgdmFyIHVwZGF0ZVRhYmJhYmxlTm9kZXMgPSBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHN0YXRlLmNvbnRhaW5lckdyb3VwcyA9IHN0YXRlLmNvbnRhaW5lcnMubWFwKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcblxuICAgICAgLy8gTk9URTogaWYgd2UgaGF2ZSB0YWJiYWJsZSBub2Rlcywgd2UgbXVzdCBoYXZlIGZvY3VzYWJsZSBub2RlczsgZm9jdXNhYmxlIG5vZGVzXG4gICAgICAvLyAgYXJlIGEgc3VwZXJzZXQgb2YgdGFiYmFibGUgbm9kZXNcbiAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IGZvY3VzYWJsZShjb250YWluZXIsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHRhYmJhYmxlTm9kZXM6IHRhYmJhYmxlTm9kZXMsXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzOiBmb2N1c2FibGVOb2RlcyxcbiAgICAgICAgZmlyc3RUYWJiYWJsZU5vZGU6IHRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMCA/IHRhYmJhYmxlTm9kZXNbMF0gOiBudWxsLFxuICAgICAgICBsYXN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIF9fdGFiYmFibGVfXyBub2RlIHRoYXQgZm9sbG93cyB0aGUgZ2l2ZW4gbm9kZSBpbiB0aGUgc3BlY2lmaWVkIGRpcmVjdGlvbixcbiAgICAgICAgICogIGluIHRoaXMgY29udGFpbmVyLCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yd2FyZF0gVHJ1ZSBpZiBnb2luZyBpbiBmb3J3YXJkIHRhYiBvcmRlcjsgZmFsc2UgaWYgZ29pbmdcbiAgICAgICAgICogIGluIHJldmVyc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHx1bmRlZmluZWR9IFRoZSBuZXh0IHRhYmJhYmxlIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG4gICAgICAgIG5leHRUYWJiYWJsZU5vZGU6IGZ1bmN0aW9uIG5leHRUYWJiYWJsZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBmb3J3YXJkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgICAgIC8vIE5PVEU6IElmIHRhYmluZGV4IGlzIHBvc2l0aXZlIChpbiBvcmRlciB0byBtYW5pcHVsYXRlIHRoZSB0YWIgb3JkZXIgc2VwYXJhdGVcbiAgICAgICAgICAvLyAgZnJvbSB0aGUgRE9NIG9yZGVyKSwgdGhpcyBfX3dpbGwgbm90IHdvcmtfXyBiZWNhdXNlIHRoZSBsaXN0IG9mIGZvY3VzYWJsZU5vZGVzLFxuICAgICAgICAgIC8vICB3aGlsZSBpdCBjb250YWlucyB0YWJiYWJsZSBub2RlcywgZG9lcyBub3Qgc29ydCBpdHMgbm9kZXMgaW4gYW55IG9yZGVyIG90aGVyXG4gICAgICAgICAgLy8gIHRoYW4gRE9NIG9yZGVyLCBiZWNhdXNlIGl0IGNhbid0OiBXaGVyZSB3b3VsZCB5b3UgcGxhY2UgZm9jdXNhYmxlIChidXQgbm90XG4gICAgICAgICAgLy8gIHRhYmJhYmxlKSBub2RlcyBpbiB0aGF0IG9yZGVyPyBUaGV5IGhhdmUgbm8gb3JkZXIsIGJlY2F1c2UgdGhleSBhcmVuJ3QgdGFiYmFsZS4uLlxuICAgICAgICAgIC8vIFN1cHBvcnQgZm9yIHBvc2l0aXZlIHRhYmluZGV4IGlzIGFscmVhZHkgYnJva2VuIGFuZCBoYXJkIHRvIG1hbmFnZSAocG9zc2libHlcbiAgICAgICAgICAvLyAgbm90IHN1cHBvcnRhYmxlLCBUQkQpLCBzbyB0aGlzIGlzbid0IGdvaW5nIHRvIG1ha2UgdGhpbmdzIHdvcnNlIHRoYW4gdGhleVxuICAgICAgICAgIC8vICBhbHJlYWR5IGFyZSwgYW5kIGF0IGxlYXN0IG1ha2VzIHRoaW5ncyBiZXR0ZXIgZm9yIHRoZSBtYWpvcml0eSBvZiBjYXNlcyB3aGVyZVxuICAgICAgICAgIC8vICB0YWJpbmRleCBpcyBlaXRoZXIgMC91bnNldCBvciBuZWdhdGl2ZS5cbiAgICAgICAgICAvLyBGWUksIHBvc2l0aXZlIHRhYmluZGV4IGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwL2lzc3Vlcy8zNzVcbiAgICAgICAgICB2YXIgbm9kZUlkeCA9IGZvY3VzYWJsZU5vZGVzLmZpbmRJbmRleChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIG4gPT09IG5vZGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG5vZGVJZHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZvY3VzYWJsZU5vZGVzLnNsaWNlKG5vZGVJZHggKyAxKS5maW5kKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1RhYmJhYmxlKG4sIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmb2N1c2FibGVOb2Rlcy5zbGljZSgwLCBub2RlSWR4KS5yZXZlcnNlKCkuZmluZChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUobiwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgc3RhdGUudGFiYmFibGVHcm91cHMgPSBzdGF0ZS5jb250YWluZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIGdyb3VwLnRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMDtcbiAgICB9KTtcblxuICAgIC8vIHRocm93IGlmIG5vIGdyb3VwcyBoYXZlIHRhYmJhYmxlIG5vZGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgZmFsbGJhY2sgZm9jdXMgbm9kZSBlaXRoZXJcbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIDw9IDAgJiYgIWdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKSAvLyByZXR1cm5pbmcgZmFsc2Ugbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBvcHRpb25cbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBmb2N1cy10cmFwIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY29udGFpbmVyIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgYXQgYWxsIHRpbWVzJyk7XG4gICAgfVxuICB9O1xuICB2YXIgdHJ5Rm9jdXMgPSBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUuZm9jdXMoe1xuICAgICAgcHJldmVudFNjcm9sbDogISFjb25maWcucHJldmVudFNjcm9sbFxuICAgIH0pO1xuICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gbm9kZTtcbiAgICBpZiAoaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuICB2YXIgZ2V0UmV0dXJuRm9jdXNOb2RlID0gZnVuY3Rpb24gZ2V0UmV0dXJuRm9jdXNOb2RlKHByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignc2V0UmV0dXJuRm9jdXMnLCBwcmV2aW91c0FjdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlID8gbm9kZSA6IG5vZGUgPT09IGZhbHNlID8gZmFsc2UgOiBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ7XG4gIH07XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICB2YXIgY2hlY2tQb2ludGVyRG93biA9IGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgaWYgKGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGUpID49IDApIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBzaW5jZSBpdCBvY3VycmVkIGluc2lkZSB0aGUgdHJhcFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgLy8gaW1tZWRpYXRlbHkgZGVhY3RpdmF0ZSB0aGUgdHJhcFxuICAgICAgdHJhcC5kZWFjdGl2YXRlKHtcbiAgICAgICAgLy8gTk9URTogYnkgc2V0dGluZyBgcmV0dXJuRm9jdXM6IGZhbHNlYCwgZGVhY3RpdmF0ZSgpIHdpbGwgZG8gbm90aGluZyxcbiAgICAgICAgLy8gIHdoaWNoIHdpbGwgcmVzdWx0IGluIHRoZSBvdXRzaWRlIGNsaWNrIHNldHRpbmcgZm9jdXMgdG8gdGhlIG5vZGVcbiAgICAgICAgLy8gIHRoYXQgd2FzIGNsaWNrZWQgKGFuZCBpZiBub3QgZm9jdXNhYmxlLCB0byBcIm5vdGhpbmdcIik7IGJ5IHNldHRpbmdcbiAgICAgICAgLy8gIGByZXR1cm5Gb2N1czogdHJ1ZWAsIHdlJ2xsIGF0dGVtcHQgdG8gcmUtZm9jdXMgdGhlIG5vZGUgb3JpZ2luYWxseS1mb2N1c2VkXG4gICAgICAgIC8vICBvbiBhY3RpdmF0aW9uIChvciB0aGUgY29uZmlndXJlZCBgc2V0UmV0dXJuRm9jdXNgIG5vZGUpLCB3aGV0aGVyIHRoZVxuICAgICAgICAvLyAgb3V0c2lkZSBjbGljayB3YXMgb24gYSBmb2N1c2FibGUgbm9kZSBvciBub3RcbiAgICAgICAgcmV0dXJuRm9jdXM6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBuZWVkZWQgZm9yIG1vYmlsZSBkZXZpY2VzLlxuICAgIC8vIChJZiB3ZSdsbCBvbmx5IGxldCBgY2xpY2tgIGV2ZW50cyB0aHJvdWdoLFxuICAgIC8vIHRoZW4gb24gbW9iaWxlIHRoZXkgd2lsbCBiZSBibG9ja2VkIGFueXdheXMgaWYgYHRvdWNoc3RhcnRgIGlzIGJsb2NrZWQuKVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2ssIGUpKSB7XG4gICAgICAvLyBhbGxvdyB0aGUgY2xpY2sgb3V0c2lkZSB0aGUgdHJhcCB0byB0YWtlIHBsYWNlXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlLCBwcmV2ZW50IHRoZSBjbGlja1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgdmFyIGNoZWNrRm9jdXNJbiA9IGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVkID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMDtcblxuICAgIC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVkIHx8IHRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBpZiAodGFyZ2V0Q29udGFpbmVkKSB7XG4gICAgICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2NhcGVkISBwdWxsIGl0IGJhY2sgaW4gdG8gd2hlcmUgaXQganVzdCBsZWZ0XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGlqYWNrIGtleSBuYXYgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgdmFyIGNoZWNrS2V5TmF2ID0gZnVuY3Rpb24gY2hlY2tLZXlOYXYoZXZlbnQpIHtcbiAgICB2YXIgaXNCYWNrd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChldmVudCk7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIHZhciBkZXN0aW5hdGlvbk5vZGUgPSBudWxsO1xuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhlIHRhcmdldCBpcyBhY3R1YWxseSBjb250YWluZWQgaW4gYSBncm91cFxuICAgICAgLy8gTk9URTogdGhlIHRhcmdldCBtYXkgYWxzbyBiZSB0aGUgY29udGFpbmVyIGl0c2VsZiBpZiBpdCdzIGZvY3VzYWJsZVxuICAgICAgLy8gIHdpdGggdGFiSW5kZXg9Jy0xJyBhbmQgd2FzIGdpdmVuIGluaXRpYWwgZm9jdXNcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGV2ZW50KTtcbiAgICAgIHZhciBjb250YWluZXJHcm91cCA9IGNvbnRhaW5lckluZGV4ID49IDAgPyBzdGF0ZS5jb250YWluZXJHcm91cHNbY29udGFpbmVySW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGNvbnRhaW5lckluZGV4IDwgMCkge1xuICAgICAgICAvLyB0YXJnZXQgbm90IGZvdW5kIGluIGFueSBncm91cDogcXVpdGUgcG9zc2libGUgZm9jdXMgaGFzIGVzY2FwZWQgdGhlIHRyYXAsXG4gICAgICAgIC8vICBzbyBicmluZyBpdCBiYWNrIGludG8uLi5cbiAgICAgICAgaWYgKGlzQmFja3dhcmQpIHtcbiAgICAgICAgICAvLyAuLi50aGUgbGFzdCBub2RlIGluIHRoZSBsYXN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMV0ubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAuLi50aGUgZmlyc3Qgbm9kZSBpbiB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXS5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0JhY2t3YXJkKSB7XG4gICAgICAgIC8vIFJFVkVSU0VcblxuICAgICAgICAvLyBpcyB0aGUgdGFyZ2V0IHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBzdGFydE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gX3JlZjIuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3RhcnRPZkdyb3VwSW5kZXggPCAwICYmIChjb250YWluZXJHcm91cC5jb250YWluZXIgPT09IHRhcmdldCB8fCBpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFpc1RhYmJhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0LCBmYWxzZSkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyBlaXRoZXIgdGhlIGNvbnRhaW5lciBpdHNlbGYsIG9yXG4gICAgICAgICAgLy8gIGEgbm9uLXRhYmJhYmxlIG5vZGUgdGhhdCB3YXMgZ2l2ZW4gZm9jdXMgKGkuZS4gdGFiaW5kZXggaXMgbmVnYXRpdmVcbiAgICAgICAgICAvLyAgYW5kIHVzZXIgY2xpY2tlZCBvbiBpdCBvciBub2RlIHdhcyBwcm9ncmFtbWF0aWNhbGx5IGdpdmVuIGZvY3VzKVxuICAgICAgICAgIC8vICBhbmQgaXMgbm90IGZvbGxvd2VkIGJ5IGFueSBvdGhlciB0YWJiYWJsZSBub2RlLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHNoaWZ0K3RhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBmaXJzdCB0YWJiYWJsZSBub2RlLCBhbmQgZ28gdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgTEFTVCBncm91cFxuICAgICAgICAgIHN0YXJ0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gc2hpZnQrdGFiIHNob3VsZCBnbyB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIHRoZVxuICAgICAgICAgIC8vICBwcmV2aW91cyBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2ZcbiAgICAgICAgICAvLyAgdGhlIExBU1QgZ3JvdXAgaWYgaXQncyB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXBJbmRleCA9IHN0YXJ0T2ZHcm91cEluZGV4ID09PSAwID8gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA6IHN0YXJ0T2ZHcm91cEluZGV4IC0gMTtcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gZGVzdGluYXRpb25Hcm91cC5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIC8vIHVzZXIgbXVzdCBoYXZlIGN1c3RvbWl6ZWQgdGhlIG5hdiBrZXlzIHNvIHdlIGhhdmUgdG8gbW92ZSBmb2N1cyBtYW51YWxseSBfd2l0aGluX1xuICAgICAgICAgIC8vICB0aGUgYWN0aXZlIGdyb3VwOiBkbyB0aGlzIGJhc2VkIG9uIHRoZSBvcmRlciBkZXRlcm1pbmVkIGJ5IHRhYmJhYmxlKClcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGT1JXQVJEXG5cbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBsYXN0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IF9yZWYzLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGl0c2VsZiwgb3JcbiAgICAgICAgICAvLyAgYSBub24tdGFiYmFibGUgbm9kZSB0aGF0IHdhcyBnaXZlbiBmb2N1cyAoaS5lLiB0YWJpbmRleCBpcyBuZWdhdGl2ZVxuICAgICAgICAgIC8vICBhbmQgdXNlciBjbGlja2VkIG9uIGl0IG9yIG5vZGUgd2FzIHByb2dyYW1tYXRpY2FsbHkgZ2l2ZW4gZm9jdXMpXG4gICAgICAgICAgLy8gIGFuZCBpcyBub3QgZm9sbG93ZWQgYnkgYW55IG90aGVyIHRhYmJhYmxlIG5vZGUsIGluIHdoaWNoXG4gICAgICAgICAgLy8gIGNhc2UsIHdlIHNob3VsZCBoYW5kbGUgdGFiIGFzIGlmIGZvY3VzIHdlcmUgb24gdGhlIGNvbnRhaW5lcidzXG4gICAgICAgICAgLy8gIGxhc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cFxuICAgICAgICAgIGxhc3RPZkdyb3VwSW5kZXggPSBjb250YWluZXJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gWUVTOiB0aGVuIHRhYiBzaG91bGQgZ28gdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlIG5leHRcbiAgICAgICAgICAvLyAgZ3JvdXAgKGFuZCB3cmFwIGFyb3VuZCB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1RcbiAgICAgICAgICAvLyAgZ3JvdXAgaWYgaXQncyB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBMQVNUIGdyb3VwKVxuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cEluZGV4ID0gbGFzdE9mR3JvdXBJbmRleCA9PT0gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA/IDAgOiBsYXN0T2ZHcm91cEluZGV4ICsgMTtcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tfZGVzdGluYXRpb25Hcm91cEluZGV4XTtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBfZGVzdGluYXRpb25Hcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgICAvLyB1c2VyIG11c3QgaGF2ZSBjdXN0b21pemVkIHRoZSBuYXYga2V5cyBzbyB3ZSBoYXZlIHRvIG1vdmUgZm9jdXMgbWFudWFsbHkgX3dpdGhpbl9cbiAgICAgICAgICAvLyAgdGhlIGFjdGl2ZSBncm91cDogZG8gdGhpcyBiYXNlZCBvbiB0aGUgb3JkZXIgZGV0ZXJtaW5lZCBieSB0YWJiYWJsZSgpXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vIGdyb3VwcyBhdmFpbGFibGVcbiAgICAgIC8vIE5PVEU6IHRoZSBmYWxsYmFja0ZvY3VzIG9wdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHJldHVybmluZyBmYWxzZSB0byBvcHQtb3V0XG4gICAgICBkZXN0aW5hdGlvbk5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuICAgIGlmIChkZXN0aW5hdGlvbk5vZGUpIHtcbiAgICAgIGlmIChpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAvLyBzaW5jZSB0YWIgbmF0aXZlbHkgbW92ZXMgZm9jdXMsIHdlIHdvdWxkbid0IGhhdmUgYSBkZXN0aW5hdGlvbiBub2RlIHVubGVzcyB3ZVxuICAgICAgICAvLyAgd2VyZSBvbiB0aGUgZWRnZSBvZiBhIGNvbnRhaW5lciBhbmQgaGFkIHRvIG1vdmUgdG8gdGhlIG5leHQvcHJldmlvdXMgZWRnZSwgaW5cbiAgICAgICAgLy8gIHdoaWNoIGNhc2Ugd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgdG8ga2VlcCB0aGUgYnJvd3NlciBmcm9tIG1vdmluZyBmb2N1c1xuICAgICAgICAvLyAgdG8gd2hlcmUgaXQgbm9ybWFsbHkgd291bGRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHRyeUZvY3VzKGRlc3RpbmF0aW9uTm9kZSk7XG4gICAgfVxuICAgIC8vIGVsc2UsIGxldCB0aGUgYnJvd3NlciB0YWtlIGNhcmUgb2YgW3NoaWZ0K110YWIgYW5kIG1vdmUgdGhlIGZvY3VzXG4gIH07XG5cbiAgdmFyIGNoZWNrS2V5ID0gZnVuY3Rpb24gY2hlY2tLZXkoZXZlbnQpIHtcbiAgICBpZiAoaXNFc2NhcGVFdmVudChldmVudCkgJiYgdmFsdWVPckhhbmRsZXIoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzLCBldmVudCkgIT09IGZhbHNlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuaXNLZXlGb3J3YXJkKGV2ZW50KSB8fCBjb25maWcuaXNLZXlCYWNrd2FyZChldmVudCkpIHtcbiAgICAgIGNoZWNrS2V5TmF2KGV2ZW50LCBjb25maWcuaXNLZXlCYWNrd2FyZChldmVudCkpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGNoZWNrQ2xpY2sgPSBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2ssIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIC8vXG4gIC8vIEVWRU5UIExJU1RFTkVSU1xuICAvL1xuXG4gIHZhciBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKTtcblxuICAgIC8vIERlbGF5IGVuc3VyZXMgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnRcbiAgICAvLyB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uLlxuICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSBjb25maWcuZGVsYXlJbml0aWFsRm9jdXMgPyBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pIDogdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH07XG4gIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuICAgIHJldHVybiB0cmFwO1xuICB9O1xuXG4gIC8vXG4gIC8vIE1VVEFUSU9OIE9CU0VSVkVSXG4gIC8vXG5cbiAgdmFyIGNoZWNrRG9tUmVtb3ZhbCA9IGZ1bmN0aW9uIGNoZWNrRG9tUmVtb3ZhbChtdXRhdGlvbnMpIHtcbiAgICB2YXIgaXNGb2N1c2VkTm9kZVJlbW92ZWQgPSBtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHZhciByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG4gICAgICByZXR1cm4gcmVtb3ZlZE5vZGVzLnNvbWUoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXMgcmVtb3ZlZCB0aGVuIGJyb3dzZXJzIHdpbGwgbW92ZSBmb2N1cyB0byB0aGVcbiAgICAvLyA8Ym9keT4gZWxlbWVudC4gSWYgdGhpcyBoYXBwZW5zLCB0cnkgdG8gbW92ZSBmb2N1cyBiYWNrIGludG8gdGhlIHRyYXAuXG4gICAgaWYgKGlzRm9jdXNlZE5vZGVSZW1vdmVkKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciAtIGlmIHN1cHBvcnRlZCAtIHRvIGRldGVjdCBpZiBmb2N1c2VkIG5vZGUgaXMgcmVtb3ZlZFxuICAvLyBmcm9tIHRoZSBET00uXG4gIHZhciBtdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNoZWNrRG9tUmVtb3ZhbCkgOiB1bmRlZmluZWQ7XG4gIHZhciB1cGRhdGVPYnNlcnZlZE5vZGVzID0gZnVuY3Rpb24gdXBkYXRlT2JzZXJ2ZWROb2RlcygpIHtcbiAgICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZSAmJiAhc3RhdGUucGF1c2VkKSB7XG4gICAgICBzdGF0ZS5jb250YWluZXJzLm1hcChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvL1xuICAvLyBUUkFQIERFRklOSVRJT05cbiAgLy9cblxuICB0cmFwID0ge1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYWN0aXZlO1xuICAgIH0sXG4gICAgZ2V0IHBhdXNlZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wYXVzZWQ7XG4gICAgfSxcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uQWN0aXZhdGUgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnb25BY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uUG9zdEFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5Gb2N1c1RyYXAgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnY2hlY2tDYW5Gb2N1c1RyYXAnKTtcbiAgICAgIGlmICghY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBvbkFjdGl2YXRlID09PSBudWxsIHx8IG9uQWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQWN0aXZhdGUoKTtcbiAgICAgIHZhciBmaW5pc2hBY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICAgIG9uUG9zdEFjdGl2YXRlID09PSBudWxsIHx8IG9uUG9zdEFjdGl2YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3RBY3RpdmF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICBjaGVja0NhbkZvY3VzVHJhcChzdGF0ZS5jb250YWluZXJzLmNvbmNhdCgpKS50aGVuKGZpbmlzaEFjdGl2YXRpb24sIGZpbmlzaEFjdGl2YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGZpbmlzaEFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgb25EZWFjdGl2YXRlOiBjb25maWcub25EZWFjdGl2YXRlLFxuICAgICAgICBvblBvc3REZWFjdGl2YXRlOiBjb25maWcub25Qb3N0RGVhY3RpdmF0ZSxcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1czogY29uZmlnLmNoZWNrQ2FuUmV0dXJuRm9jdXNcbiAgICAgIH0sIGRlYWN0aXZhdGVPcHRpb25zKTtcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyKTsgLy8gbm9vcCBpZiB1bmRlZmluZWRcbiAgICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICBhY3RpdmVGb2N1c1RyYXBzLmRlYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCk7XG4gICAgICB2YXIgb25EZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdvbkRlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3REZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdvblBvc3REZWFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5SZXR1cm5Gb2N1cyA9IGdldE9wdGlvbihvcHRpb25zLCAnY2hlY2tDYW5SZXR1cm5Gb2N1cycpO1xuICAgICAgdmFyIHJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdyZXR1cm5Gb2N1cycsICdyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZScpO1xuICAgICAgb25EZWFjdGl2YXRlID09PSBudWxsIHx8IG9uRGVhY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25EZWFjdGl2YXRlKCk7XG4gICAgICB2YXIgZmluaXNoRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoRGVhY3RpdmF0aW9uKCkge1xuICAgICAgICBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICAgICAgICB0cnlGb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9uUG9zdERlYWN0aXZhdGUgPT09IG51bGwgfHwgb25Qb3N0RGVhY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0RGVhY3RpdmF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAocmV0dXJuRm9jdXMgJiYgY2hlY2tDYW5SZXR1cm5Gb2N1cykge1xuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKS50aGVuKGZpbmlzaERlYWN0aXZhdGlvbiwgZmluaXNoRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmaW5pc2hEZWFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKHBhdXNlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uUGF1c2UgPSBnZXRPcHRpb24ocGF1c2VPcHRpb25zLCAnb25QYXVzZScpO1xuICAgICAgdmFyIG9uUG9zdFBhdXNlID0gZ2V0T3B0aW9uKHBhdXNlT3B0aW9ucywgJ29uUG9zdFBhdXNlJyk7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgb25QYXVzZSA9PT0gbnVsbCB8fCBvblBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBhdXNlKCk7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIG9uUG9zdFBhdXNlID09PSBudWxsIHx8IG9uUG9zdFBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3RQYXVzZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1bnBhdXNlOiBmdW5jdGlvbiB1bnBhdXNlKHVucGF1c2VPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uVW5wYXVzZSA9IGdldE9wdGlvbih1bnBhdXNlT3B0aW9ucywgJ29uVW5wYXVzZScpO1xuICAgICAgdmFyIG9uUG9zdFVucGF1c2UgPSBnZXRPcHRpb24odW5wYXVzZU9wdGlvbnMsICdvblBvc3RVbnBhdXNlJyk7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIG9uVW5wYXVzZSA9PT0gbnVsbCB8fCBvblVucGF1c2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVW5wYXVzZSgpO1xuICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICBvblBvc3RVbnBhdXNlID09PSBudWxsIHx8IG9uUG9zdFVucGF1c2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUG9zdFVucGF1c2UoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdXBkYXRlQ29udGFpbmVyRWxlbWVudHM6IGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGNvbnRhaW5lckVsZW1lbnRzKSB7XG4gICAgICB2YXIgZWxlbWVudHNBc0FycmF5ID0gW10uY29uY2F0KGNvbnRhaW5lckVsZW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBzdGF0ZS5jb250YWluZXJzID0gZWxlbWVudHNBc0FycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50c1xuICB0cmFwLnVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGVsZW1lbnRzKTtcbiAgcmV0dXJuIHRyYXA7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVGb2N1c1RyYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvY3VzLXRyYXAuZXNtLmpzLm1hcFxuIiwiLyohXG4qIHRhYmJhYmxlIDYuMS4yXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbi8vIE5PVEU6IHNlcGFyYXRlIGA6bm90KClgIHNlbGVjdG9ycyBoYXMgYnJvYWRlciBicm93c2VyIHN1cHBvcnQgdGhhbiB0aGUgbmV3ZXJcbi8vICBgOm5vdChbaW5lcnRdLCBbaW5lcnRdICopYCAoRmViIDIwMjMpXG4vLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBzdXBwb3J0IGA6bm90KFtpbmVydF0gKilgIGFzIGEgc2VsZWN0b3I7IHVzaW5nIGl0IGNhdXNlc1xuLy8gIHRoZSBlbnRpcmUgcXVlcnkgdG8gZmFpbCwgcmVzdWx0aW5nIGluIG5vIG5vZGVzIGZvdW5kLCB3aGljaCB3aWxsIGJyZWFrIGEgbG90XG4vLyAgb2YgdGhpbmdzLi4uIHNvIHdlIGhhdmUgdG8gcmVseSBvbiBKUyB0byBpZGVudGlmeSBub2RlcyBpbnNpZGUgYW4gaW5lcnQgY29udGFpbmVyXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dDpub3QoW2luZXJ0XSknLCAnc2VsZWN0Om5vdChbaW5lcnRdKScsICd0ZXh0YXJlYTpub3QoW2luZXJ0XSknLCAnYVtocmVmXTpub3QoW2luZXJ0XSknLCAnYnV0dG9uOm5vdChbaW5lcnRdKScsICdbdGFiaW5kZXhdOm5vdChzbG90KTpub3QoW2luZXJ0XSknLCAnYXVkaW9bY29udHJvbHNdOm5vdChbaW5lcnRdKScsICd2aWRlb1tjb250cm9sc106bm90KFtpbmVydF0pJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pOm5vdChbaW5lcnRdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZTpub3QoW2luZXJ0XSknLCAnZGV0YWlsczpub3QoW2luZXJ0XSknXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgTm9FbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnO1xudmFyIG1hdGNoZXMgPSBOb0VsZW1lbnQgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xudmFyIGdldFJvb3ROb2RlID0gIU5vRWxlbWVudCAmJiBFbGVtZW50LnByb3RvdHlwZS5nZXRSb290Tm9kZSA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRnZXRSb290Tm9kZTtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9lbGVtZW50JGdldFJvb3ROb2RlID0gZWxlbWVudC5nZXRSb290Tm9kZSkgPT09IG51bGwgfHwgX2VsZW1lbnQkZ2V0Um9vdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lbGVtZW50JGdldFJvb3ROb2RlLmNhbGwoZWxlbWVudCk7XG59IDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5vd25lckRvY3VtZW50O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyBpbmVydCBvciBpbiBhbiBpbmVydCBhbmNlc3Rvci5cbiAqIEBwYXJhbSB7RWxlbWVudH0gW25vZGVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtsb29rVXBdIElmIHRydWUgYW5kIGBub2RlYCBpcyBub3QgaW5lcnQsIGxvb2tzIHVwIGF0IGFuY2VzdG9ycyB0b1xuICogIHNlZSBpZiBhbnkgb2YgdGhlbSBhcmUgaW5lcnQuIElmIGZhbHNlLCBvbmx5IGBub2RlYCBpdHNlbGYgaXMgY29uc2lkZXJlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGluZXJ0IGl0c2VsZiBvciBieSB3YXkgb2YgYmVpbmcgaW4gYW4gaW5lcnQgYW5jZXN0b3IuXG4gKiAgRmFsc2UgaWYgYG5vZGVgIGlzIGZhbHN5LlxuICovXG52YXIgaXNJbmVydCA9IGZ1bmN0aW9uIGlzSW5lcnQobm9kZSwgbG9va1VwKSB7XG4gIHZhciBfbm9kZSRnZXRBdHRyaWJ1dGU7XG4gIGlmIChsb29rVXAgPT09IHZvaWQgMCkge1xuICAgIGxvb2tVcCA9IHRydWU7XG4gIH1cbiAgLy8gQ0FSRUZVTDogSlNEb20gZG9lcyBub3Qgc3VwcG9ydCBpbmVydCBhdCBhbGwsIHNvIHdlIGNhbid0IHVzZSB0aGUgYEhUTUxFbGVtZW50LmluZXJ0YFxuICAvLyAgSlMgQVBJIHByb3BlcnR5OyB3ZSBoYXZlIHRvIGNoZWNrIHRoZSBhdHRyaWJ1dGUsIHdoaWNoIGNhbiBlaXRoZXIgYmUgZW1wdHkgb3IgJ3RydWUnO1xuICAvLyAgaWYgaXQncyBgbnVsbGAgKG5vdCBzcGVjaWZpZWQpIG9yICdmYWxzZScsIGl0J3MgYW4gYWN0aXZlIGVsZW1lbnRcbiAgdmFyIGluZXJ0QXR0ID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUpID09PSBudWxsIHx8IF9ub2RlJGdldEF0dHJpYnV0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGUkZ2V0QXR0cmlidXRlLmNhbGwobm9kZSwgJ2luZXJ0Jyk7XG4gIHZhciBpbmVydCA9IGluZXJ0QXR0ID09PSAnJyB8fCBpbmVydEF0dCA9PT0gJ3RydWUnO1xuXG4gIC8vIE5PVEU6IHRoaXMgY291bGQgYWxzbyBiZSBoYW5kbGVkIHdpdGggYG5vZGUubWF0Y2hlcygnW2luZXJ0XSwgOmlzKFtpbmVydF0gKiknKWBcbiAgLy8gIGlmIGl0IHdlcmVuJ3QgZm9yIGBtYXRjaGVzKClgIG5vdCBiZWluZyBhIGZ1bmN0aW9uIG9uIHNoYWRvdyByb290czsgdGhlIGZvbGxvd2luZ1xuICAvLyAgY29kZSB3b3JrcyBmb3IgYW55IGtpbmQgb2Ygbm9kZVxuICAvLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBjZXJ0YWluIHNlbGVjdG9ycyBsaWtlIGA6bm90KFtpbmVydF0gKilgXG4gIC8vICBzbyBpdCBsaWtlbHkgd291bGQgbm90IHN1cHBvcnQgYDppcyhbaW5lcnRdICopYCBlaXRoZXIuLi5cbiAgdmFyIHJlc3VsdCA9IGluZXJ0IHx8IGxvb2tVcCAmJiBub2RlICYmIGlzSW5lcnQobm9kZS5wYXJlbnROb2RlKTsgLy8gcmVjdXJzaXZlXG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUncyBjb250ZW50IGlzIGVkaXRhYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBbbm9kZV1cbiAqIEByZXR1cm5zIFRydWUgaWYgaXQncyBjb250ZW50LWVkaXRhYmxlOyBmYWxzZSBpZiBpdCdzIG5vdCBvciBgbm9kZWAgaXMgZmFsc3kuXG4gKi9cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEF0dHJpYnV0ZTI7XG4gIC8vIENBUkVGVUw6IEpTRG9tIGRvZXMgbm90IHN1cHBvcnQgdGhlIGBIVE1MRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZWAgQVBJIHNvIHdlIGhhdmVcbiAgLy8gIHRvIHVzZSB0aGUgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGNoZWNrIGZvciB0aGlzLCB3aGljaCBjYW4gZWl0aGVyIGJlIGVtcHR5IG9yICd0cnVlJztcbiAgLy8gIGlmIGl0J3MgYG51bGxgIChub3Qgc3BlY2lmaWVkKSBvciAnZmFsc2UnLCBpdCdzIGEgbm9uLWVkaXRhYmxlIGVsZW1lbnRcbiAgdmFyIGF0dFZhbHVlID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlMiA9IG5vZGUuZ2V0QXR0cmlidXRlKSA9PT0gbnVsbCB8fCBfbm9kZSRnZXRBdHRyaWJ1dGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRnZXRBdHRyaWJ1dGUyLmNhbGwobm9kZSwgJ2NvbnRlbnRlZGl0YWJsZScpO1xuICByZXR1cm4gYXR0VmFsdWUgPT09ICcnIHx8IGF0dFZhbHVlID09PSAndHJ1ZSc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgY29udGFpbmVyIHRvIGNoZWNrIGluXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciB0byBjaGVja1xuICogQHBhcmFtIHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICAvLyBldmVuIGlmIGBpbmNsdWRlQ29udGFpbmVyPWZhbHNlYCwgd2Ugc3RpbGwgaGF2ZSB0byBjaGVjayBpdCBmb3IgaW5lcnRuZXNzIGJlY2F1c2VcbiAgLy8gIGlmIGl0J3MgaW5lcnQsIGFsbCBpdHMgY2hpbGRyZW4gYXJlIGluZXJ0XG4gIGlmIChpc0luZXJ0KGVsKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBHZXRTaGFkb3dSb290XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdG8gY2hlY2sgZm9yIHNoYWRvdyByb290XG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdHxib29sZWFufSBTaGFkb3dSb290IGlmIGF2YWlsYWJsZSBvciBib29sZWFuIGluZGljYXRpbmcgaWYgYSBzaGFkb3dSb290IGlzIGF0dGFjaGVkIGJ1dCBub3QgYXZhaWxhYmxlLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNoYWRvd1Jvb3RGaWx0ZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2hhZG93SG9zdE5vZGUgdGhlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgc2hhZG93IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGEgc2hhZG93IHJvb3QgY291bGQgcG90ZW50aWFsbHkgY29udGFpbiB2YWxpZCBjYW5kaWRhdGVzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2FuZGlkYXRlU2NvcGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gc2NvcGVQYXJlbnQgY29udGFpbnMgaW5uZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGNhbmRpZGF0ZXMgbGlzdCBvZiBjYW5kaWRhdGVzIGZvdW5kIGluIHRoZSBzY29wZSBwYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEl0ZXJhdGl2ZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7R2V0U2hhZG93Um9vdHxib29sZWFufSBnZXRTaGFkb3dSb290IHRydWUgaWYgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZDsgZmFsc3kgaWYgbm90O1xuICogIGlmIGEgZnVuY3Rpb24sIGltcGxpZXMgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZCBhbmQgZWl0aGVyIHJldHVybnMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnRcbiAqICBvciBhIGJvb2xlYW4gc3RhdGluZyBpZiBpdCBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHJvb3RcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBmbGF0dGVuIGlmIHRydWUgdGhlbiByZXN1bHQgd2lsbCBmbGF0dGVuIGFueSBDYW5kaWRhdGVTY29wZSBpbnRvIHRoZSByZXR1cm5lZCBsaXN0XG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RGaWx0ZXJ9IHNoYWRvd1Jvb3RGaWx0ZXIgZmlsdGVyIHNoYWRvdyByb290cztcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbGVtZW50cyBsaXN0IG9mIGVsZW1lbnQgY29udGFpbmVycyB0byBtYXRjaCBjYW5kaWRhdGVzIGZyb21cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvbnRhaW5lciBhZGQgY29udGFpbmVyIGxpc3QgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SXRlcmF0aXZlT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0FycmF5LjxFbGVtZW50fENhbmRpZGF0ZVNjb3BlPn1cbiAqL1xudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG4gIHdoaWxlIChlbGVtZW50c1RvQ2hlY2subGVuZ3RoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1RvQ2hlY2suc2hpZnQoKTtcbiAgICBpZiAoaXNJbmVydChlbGVtZW50LCBmYWxzZSkpIHtcbiAgICAgIC8vIG5vIG5lZWQgdG8gbG9vayB1cCBzaW5jZSB3ZSdyZSBkcmlsbGluZyBkb3duXG4gICAgICAvLyBhbnl0aGluZyBpbnNpZGUgdGhpcyBjb250YWluZXIgd2lsbCBhbHNvIGJlIGluZXJ0XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgIHNjb3BlUGFyZW50OiBlbGVtZW50LFxuICAgICAgICAgIGNhbmRpZGF0ZXM6IG5lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGNhbmRpZGF0ZSBlbGVtZW50XG4gICAgICB2YXIgdmFsaWRDYW5kaWRhdGUgPSBtYXRjaGVzLmNhbGwoZWxlbWVudCwgY2FuZGlkYXRlU2VsZWN0b3IpO1xuICAgICAgaWYgKHZhbGlkQ2FuZGlkYXRlICYmIG9wdGlvbnMuZmlsdGVyKGVsZW1lbnQpICYmIChpbmNsdWRlQ29udGFpbmVyIHx8ICFlbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KSkpIHtcbiAgICAgICAgY2FuZGlkYXRlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgc2hhZG93IGNvbnRlbnQgaWYgcG9zc2libGVcbiAgICAgIHZhciBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290IHx8XG4gICAgICAvLyBjaGVjayBmb3IgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5nZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuZ2V0U2hhZG93Um9vdChlbGVtZW50KTtcblxuICAgICAgLy8gbm8gaW5lcnQgbG9vayB1cCBiZWNhdXNlIHdlJ3JlIGFscmVhZHkgZHJpbGxpbmcgZG93biBhbmQgY2hlY2tpbmcgZm9yIGluZXJ0bmVzc1xuICAgICAgLy8gIG9uIHRoZSB3YXkgZG93biwgc28gYWxsIGNvbnRhaW5lcnMgdG8gdGhpcyByb290IG5vZGUgc2hvdWxkIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAvLyAgdmV0dGVkIGFzIG5vbi1pbmVydFxuICAgICAgdmFyIHZhbGlkU2hhZG93Um9vdCA9ICFpc0luZXJ0KHNoYWRvd1Jvb3QsIGZhbHNlKSAmJiAoIW9wdGlvbnMuc2hhZG93Um9vdEZpbHRlciB8fCBvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIoZWxlbWVudCkpO1xuICAgICAgaWYgKHNoYWRvd1Jvb3QgJiYgdmFsaWRTaGFkb3dSb290KSB7XG4gICAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNjb3BlIElJRiBhIHNoYWRvdyByb290IG5vZGUgd2FzIGdpdmVuOyBvdGhlcndpc2UsIGFuIHVuZGlzY2xvc2VkXG4gICAgICAgIC8vICBzaGFkb3cgZXhpc3RzLCBzbyBsb29rIGF0IGxpZ2h0IGRvbSBjaGlsZHJlbiBhcyBmYWxsYmFjayBCVVQgY3JlYXRlIGEgc2NvcGUgZm9yIGFueVxuICAgICAgICAvLyAgY2hpbGQgY2FuZGlkYXRlcyBmb3VuZCBiZWNhdXNlIHRoZXkncmUgbGlrZWx5IHNsb3R0ZWQgZWxlbWVudHMgKGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vICBjaGlsZHJlbiBvZiB0aGUgd2ViIGNvbXBvbmVudCBlbGVtZW50ICh3aGljaCBoYXMgdGhlIHNoYWRvdyksIGluIHRoZSBsaWdodCBkb20sIGJ1dFxuICAgICAgICAvLyAgc2xvdHRlZCBzb21ld2hlcmUgX2luc2lkZV8gdGhlIHVuZGlzY2xvc2VkIHNoYWRvdykgLS0gdGhlIHNjb3BlIGlzIGNyZWF0ZWQgYmVsb3csXG4gICAgICAgIC8vICBfYWZ0ZXJfIHdlIHJldHVybiBmcm9tIHRoaXMgcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgdmFyIF9uZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KHNoYWRvd1Jvb3QgPT09IHRydWUgPyBlbGVtZW50LmNoaWxkcmVuIDogc2hhZG93Um9vdC5jaGlsZHJlbiwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmZsYXR0ZW4pIHtcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgX25lc3RlZENhbmRpZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBzY29wZVBhcmVudDogZWxlbWVudCxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IF9uZXN0ZWRDYW5kaWRhdGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlJ3Mgbm90IHNoYWRvdyBzbyBqdXN0IGRpZyBpbnRvIHRoZSBlbGVtZW50J3MgKGxpZ2h0IGRvbSkgY2hpbGRyZW5cbiAgICAgICAgLy8gIF9fd2l0aG91dF9fIGdpdmluZyB0aGUgZWxlbWVudCBzcGVjaWFsIHNjb3BlIHRyZWF0bWVudFxuICAgICAgICBlbGVtZW50c1RvQ2hlY2sudW5zaGlmdC5hcHBseShlbGVtZW50c1RvQ2hlY2ssIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlLCBpc1Njb3BlKSB7XG4gIGlmIChub2RlLnRhYkluZGV4IDwgMCkge1xuICAgIC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAgIC8vIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAgIC8vIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gICAgLy8gb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuICAgIC8vIEFsc28gYnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAgIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICAgIC8vXG4gICAgLy8gaXNTY29wZSBpcyBwb3NpdGl2ZSBmb3IgY3VzdG9tIGVsZW1lbnQgd2l0aCBzaGFkb3cgcm9vdCBvciBzbG90IHRoYXQgYnkgZGVmYXVsdFxuICAgIC8vIGhhdmUgdGFiSW5kZXggLTEsIGJ1dCBuZWVkIHRvIGJlIHNvcnRlZCBieSBkb2N1bWVudCBvcmRlciBpbiBvcmRlciBmb3IgdGhlaXJcbiAgICAvLyBjb250ZW50IHRvIGJlIGluc2VydGVkIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgaWYgKChpc1Njb3BlIHx8IC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSAmJiBpc05hTihwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufTtcbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcbnZhciBpc0hpZGRlbklucHV0ID0gZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59O1xudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIGlzVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgZ2V0Um9vdE5vZGUobm9kZSk7XG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuICB2YXIgcmFkaW9TZXQ7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG4vLyBkZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyB1bHRpbWF0ZWx5IGF0dGFjaGVkIHRvIHRoZSB3aW5kb3cncyBkb2N1bWVudFxudmFyIGlzTm9kZUF0dGFjaGVkID0gZnVuY3Rpb24gaXNOb2RlQXR0YWNoZWQobm9kZSkge1xuICB2YXIgX25vZGVSb290O1xuICAvLyBUaGUgcm9vdCBub2RlIGlzIHRoZSBzaGFkb3cgcm9vdCBpZiB0aGUgbm9kZSBpcyBpbiBhIHNoYWRvdyBET007IHNvbWUgZG9jdW1lbnQgb3RoZXJ3aXNlXG4gIC8vICAoYnV0IE5PVCBfdGhlXyBkb2N1bWVudDsgc2VlIHNlY29uZCAnSWYnIGNvbW1lbnQgYmVsb3cgZm9yIG1vcmUpLlxuICAvLyBJZiByb290Tm9kZSBpcyBzaGFkb3cgcm9vdCwgaXQnbGwgaGF2ZSBhIGhvc3QsIHdoaWNoIGlzIHRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBzaGFkb3dcbiAgLy8gIGlzIGF0dGFjaGVkLCBhbmQgdGhlIG9uZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgaW4gdGhlIGRvY3VtZW50IG9yIG5vdCAoYmVjYXVzZSB0aGVcbiAgLy8gIHNoYWRvdywgYW5kIGFsbCBub2RlcyBpdCBjb250YWlucywgaXMgbmV2ZXIgY29uc2lkZXJlZCBpbiB0aGUgZG9jdW1lbnQgc2luY2Ugc2hhZG93c1xuICAvLyAgYmVoYXZlIGxpa2Ugc2VsZi1jb250YWluZWQgRE9NczsgYnV0IGlmIHRoZSBzaGFkb3cncyBIT1NULCB3aGljaCBpcyBwYXJ0IG9mIHRoZSBkb2N1bWVudCxcbiAgLy8gIGlzIGhpZGRlbiwgb3IgaXMgbm90IGluIHRoZSBkb2N1bWVudCBpdHNlbGYgYnV0IGlzIGRldGFjaGVkLCBpdCB3aWxsIGFmZmVjdCB0aGUgc2hhZG93J3NcbiAgLy8gIHZpc2liaWxpdHksIGluY2x1ZGluZyBhbGwgdGhlIG5vZGVzIGl0IGNvbnRhaW5zKS4gVGhlIGhvc3QgY291bGQgYmUgYW55IG5vcm1hbCBub2RlLFxuICAvLyAgb3IgYSBjdXN0b20gZWxlbWVudCAoaS5lLiB3ZWIgY29tcG9uZW50KS4gRWl0aGVyIHdheSwgdGhhdCdzIHRoZSBvbmUgdGhhdCBpcyBjb25zaWRlcmVkXG4gIC8vICBwYXJ0IG9mIHRoZSBkb2N1bWVudCwgbm90IHRoZSBzaGFkb3cgcm9vdCwgbm9yIGFueSBvZiBpdHMgY2hpbGRyZW4gKGkuZS4gdGhlIG5vZGUgYmVpbmdcbiAgLy8gIHRlc3RlZCkuXG4gIC8vIFRvIGZ1cnRoZXIgY29tcGxpY2F0ZSB0aGluZ3MsIHdlIGhhdmUgdG8gbG9vayBhbGwgdGhlIHdheSB1cCB1bnRpbCB3ZSBmaW5kIGEgc2hhZG93IEhPU1RcbiAgLy8gIHRoYXQgaXMgYXR0YWNoZWQgKG9yIGZpbmQgbm9uZSkgYmVjYXVzZSB0aGUgbm9kZSBtaWdodCBiZSBpbiBuZXN0ZWQgc2hhZG93cy4uLlxuICAvLyBJZiByb290Tm9kZSBpcyBub3QgYSBzaGFkb3cgcm9vdCwgaXQgd29uJ3QgaGF2ZSBhIGhvc3QsIGFuZCBzbyByb290Tm9kZSBzaG91bGQgYmUgdGhlXG4gIC8vICBkb2N1bWVudCAocGVyIHRoZSBkb2NzKSBhbmQgd2hpbGUgaXQncyBhIERvY3VtZW50LXR5cGUgb2JqZWN0LCB0aGF0IGRvY3VtZW50IGRvZXMgbm90XG4gIC8vICBhcHBlYXIgdG8gYmUgdGhlIHNhbWUgYXMgdGhlIG5vZGUncyBgb3duZXJEb2N1bWVudGAgZm9yIHNvbWUgcmVhc29uLCBzbyBpdCdzIHNhZmVyXG4gIC8vICB0byBpZ25vcmUgdGhlIHJvb3ROb2RlIGF0IHRoaXMgcG9pbnQsIGFuZCB1c2UgYG5vZGUub3duZXJEb2N1bWVudGAuIE90aGVyd2lzZSxcbiAgLy8gIHVzaW5nIGByb290Tm9kZS5jb250YWlucyhub2RlKWAgd2lsbCBfYWx3YXlzXyBiZSB0cnVlIHdlJ2xsIGdldCBmYWxzZS1wb3NpdGl2ZXMgd2hlblxuICAvLyAgbm9kZSBpcyBhY3R1YWxseSBkZXRhY2hlZC5cbiAgLy8gTk9URTogSWYgYG5vZGVSb290SG9zdGAgb3IgYG5vZGVgIGhhcHBlbnMgdG8gYmUgdGhlIGBkb2N1bWVudGAgaXRzZWxmICh3aGljaCBpcyBwb3NzaWJsZVxuICAvLyAgaWYgYSB0YWJiYWJsZS9mb2N1c2FibGUgbm9kZSB3YXMgcXVpY2tseSBhZGRlZCB0byB0aGUgRE9NLCBmb2N1c2VkLCBhbmQgdGhlbiByZW1vdmVkXG4gIC8vICBmcm9tIHRoZSBET00gYXMgaW4gaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC1yZWFjdC9pc3N1ZXMvOTA1KSwgdGhlblxuICAvLyAgYG93bmVyRG9jdW1lbnRgIHdpbGwgYmUgYG51bGxgLCBoZW5jZSB0aGUgb3B0aW9uYWwgY2hhaW5pbmcgb24gaXQuXG4gIHZhciBub2RlUm9vdCA9IG5vZGUgJiYgZ2V0Um9vdE5vZGUobm9kZSk7XG4gIHZhciBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290ID0gbm9kZVJvb3QpID09PSBudWxsIHx8IF9ub2RlUm9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVSb290Lmhvc3Q7XG5cbiAgLy8gaW4gc29tZSBjYXNlcywgYSBkZXRhY2hlZCBub2RlIHdpbGwgcmV0dXJuIGl0c2VsZiBhcyB0aGUgcm9vdCBpbnN0ZWFkIG9mIGEgZG9jdW1lbnQgb3JcbiAgLy8gIHNoYWRvdyByb290IG9iamVjdCwgaW4gd2hpY2ggY2FzZSwgd2Ugc2hvdWxkbid0IHRyeSB0byBsb29rIGZ1cnRoZXIgdXAgdGhlIGhvc3QgY2hhaW5cbiAgdmFyIGF0dGFjaGVkID0gZmFsc2U7XG4gIGlmIChub2RlUm9vdCAmJiBub2RlUm9vdCAhPT0gbm9kZSkge1xuICAgIHZhciBfbm9kZVJvb3RIb3N0LCBfbm9kZVJvb3RIb3N0JG93bmVyRG8sIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gICAgYXR0YWNoZWQgPSAhISgoX25vZGVSb290SG9zdCA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdCAhPT0gdm9pZCAwICYmIChfbm9kZVJvb3RIb3N0JG93bmVyRG8gPSBfbm9kZVJvb3RIb3N0Lm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEbyAhPT0gdm9pZCAwICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEby5jb250YWlucyhub2RlUm9vdEhvc3QpIHx8IG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gdm9pZCAwICYmIChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSAhPT0gbnVsbCAmJiBfbm9kZSRvd25lckRvY3VtZW50ICE9PSB2b2lkIDAgJiYgX25vZGUkb3duZXJEb2N1bWVudC5jb250YWlucyhub2RlKSk7XG4gICAgd2hpbGUgKCFhdHRhY2hlZCAmJiBub2RlUm9vdEhvc3QpIHtcbiAgICAgIHZhciBfbm9kZVJvb3QyLCBfbm9kZVJvb3RIb3N0MiwgX25vZGVSb290SG9zdDIkb3duZXJEO1xuICAgICAgLy8gc2luY2UgaXQncyBub3QgYXR0YWNoZWQgYW5kIHdlIGhhdmUgYSByb290IGhvc3QsIHRoZSBub2RlIE1VU1QgYmUgaW4gYSBuZXN0ZWQgc2hhZG93IERPTSxcbiAgICAgIC8vICB3aGljaCBtZWFucyB3ZSBuZWVkIHRvIGdldCB0aGUgaG9zdCdzIGhvc3QgYW5kIGNoZWNrIGlmIHRoYXQgcGFyZW50IGhvc3QgaXMgY29udGFpbmVkXG4gICAgICAvLyAgaW4gKGkuZS4gYXR0YWNoZWQgdG8pIHRoZSBkb2N1bWVudFxuICAgICAgbm9kZVJvb3QgPSBnZXRSb290Tm9kZShub2RlUm9vdEhvc3QpO1xuICAgICAgbm9kZVJvb3RIb3N0ID0gKF9ub2RlUm9vdDIgPSBub2RlUm9vdCkgPT09IG51bGwgfHwgX25vZGVSb290MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVSb290Mi5ob3N0O1xuICAgICAgYXR0YWNoZWQgPSAhISgoX25vZGVSb290SG9zdDIgPSBub2RlUm9vdEhvc3QpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3QyICE9PSB2b2lkIDAgJiYgKF9ub2RlUm9vdEhvc3QyJG93bmVyRCA9IF9ub2RlUm9vdEhvc3QyLm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3QyJG93bmVyRCAhPT0gdm9pZCAwICYmIF9ub2RlUm9vdEhvc3QyJG93bmVyRC5jb250YWlucyhub2RlUm9vdEhvc3QpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGF0dGFjaGVkO1xufTtcbnZhciBpc1plcm9BcmVhID0gZnVuY3Rpb24gaXNaZXJvQXJlYShub2RlKSB7XG4gIHZhciBfbm9kZSRnZXRCb3VuZGluZ0NsaWUgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG4gIHJldHVybiB3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDA7XG59O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgX3JlZikge1xuICB2YXIgZGlzcGxheUNoZWNrID0gX3JlZi5kaXNwbGF5Q2hlY2ssXG4gICAgZ2V0U2hhZG93Um9vdCA9IF9yZWYuZ2V0U2hhZG93Um9vdDtcbiAgLy8gTk9URTogdmlzaWJpbGl0eSB3aWxsIGJlIGB1bmRlZmluZWRgIGlmIG5vZGUgaXMgZGV0YWNoZWQgZnJvbSB0aGUgZG9jdW1lbnRcbiAgLy8gIChzZWUgbm90ZXMgYWJvdXQgdGhpcyBmdXJ0aGVyIGRvd24pLCB3aGljaCBtZWFucyB3ZSB3aWxsIGNvbnNpZGVyIGl0IHZpc2libGVcbiAgLy8gICh0aGlzIGlzIGxlZ2FjeSBiZWhhdmlvciBmcm9tIGEgdmVyeSBsb25nIHdheSBiYWNrKVxuICAvLyBOT1RFOiB3ZSBjaGVjayB0aGlzIHJlZ2FyZGxlc3Mgb2YgYGRpc3BsYXlDaGVjaz1cIm5vbmVcImAgYmVjYXVzZSB0aGlzIGlzIGFcbiAgLy8gIF92aXNpYmlsaXR5XyBjaGVjaywgbm90IGEgX2Rpc3BsYXlfIGNoZWNrXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2xlZ2FjeS1mdWxsJykge1xuICAgIGlmICh0eXBlb2YgZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gZmlndXJlIG91dCBpZiB3ZSBzaG91bGQgY29uc2lkZXIgdGhlIG5vZGUgdG8gYmUgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IGFuZCB1c2UgdGhlXG4gICAgICAvLyAgJ25vbi16ZXJvLWFyZWEnIGZhbGxiYWNrXG4gICAgICB2YXIgb3JpZ2luYWxOb2RlID0gbm9kZTtcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB2YXIgcm9vdE5vZGUgPSBnZXRSb290Tm9kZShub2RlKTtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgJiYgIXBhcmVudEVsZW1lbnQuc2hhZG93Um9vdCAmJiBnZXRTaGFkb3dSb290KHBhcmVudEVsZW1lbnQpID09PSB0cnVlIC8vIGNoZWNrIGlmIHRoZXJlJ3MgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG5vZGUgaGFzIGFuIHVuZGlzY2xvc2VkIHNoYWRvdyB3aGljaCBtZWFucyB3ZSBjYW4gb25seSB0cmVhdCBpdCBhcyBhIGJsYWNrIGJveCwgc28gd2VcbiAgICAgICAgICAvLyAgZmFsbCBiYWNrIHRvIGEgbm9uLXplcm8tYXJlYSB0ZXN0XG4gICAgICAgICAgcmV0dXJuIGlzWmVyb0FyZWEobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIHNsb3RcbiAgICAgICAgICBub2RlID0gbm9kZS5hc3NpZ25lZFNsb3Q7XG4gICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudEVsZW1lbnQgJiYgcm9vdE5vZGUgIT09IG5vZGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIC8vIGNyb3NzIHNoYWRvdyBib3VuZGFyeVxuICAgICAgICAgIG5vZGUgPSByb290Tm9kZS5ob3N0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0ZXJhdGUgdXAgbm9ybWFsIGRvbVxuICAgICAgICAgIG5vZGUgPSBwYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlID0gb3JpZ2luYWxOb2RlO1xuICAgIH1cbiAgICAvLyBlbHNlLCBgZ2V0U2hhZG93Um9vdGAgbWlnaHQgYmUgdHJ1ZSwgYnV0IGFsbCB0aGF0IGRvZXMgaXMgZW5hYmxlIHNoYWRvdyBET00gc3VwcG9ydFxuICAgIC8vICAoaS5lLiBpdCBkb2VzIG5vdCBhbHNvIHByZXN1bWUgdGhhdCBhbGwgbm9kZXMgbWlnaHQgaGF2ZSB1bmRpc2Nsb3NlZCBzaGFkb3dzKTsgb3JcbiAgICAvLyAgaXQgbWlnaHQgYmUgYSBmYWxzeSB2YWx1ZSwgd2hpY2ggbWVhbnMgc2hhZG93IERPTSBzdXBwb3J0IGlzIGRpc2FibGVkXG5cbiAgICAvLyBTaW5jZSB3ZSBkaWRuJ3QgZmluZCBpdCBzaXR0aW5nIGluIGFuIHVuZGlzY2xvc2VkIHNoYWRvdyAob3Igc2hhZG93cyBhcmUgZGlzYWJsZWQpXG4gICAgLy8gIG5vdyB3ZSBjYW4ganVzdCB0ZXN0IHRvIHNlZSBpZiBpdCB3b3VsZCBub3JtYWxseSBiZSB2aXNpYmxlIG9yIG5vdCwgcHJvdmlkZWQgaXQnc1xuICAgIC8vICBhdHRhY2hlZCB0byB0aGUgbWFpbiBkb2N1bWVudC5cbiAgICAvLyBOT1RFOiBXZSBtdXN0IGNvbnNpZGVyIGNhc2Ugd2hlcmUgbm9kZSBpcyBpbnNpZGUgYSBzaGFkb3cgRE9NIGFuZCBnaXZlbiBkaXJlY3RseSB0b1xuICAgIC8vICBgaXNUYWJiYWJsZSgpYCBvciBgaXNGb2N1c2FibGUoKWAgLS0gcmVnYXJkbGVzcyBvZiBgZ2V0U2hhZG93Um9vdGAgb3B0aW9uIHNldHRpbmcuXG5cbiAgICBpZiAoaXNOb2RlQXR0YWNoZWQobm9kZSkpIHtcbiAgICAgIC8vIHRoaXMgd29ya3Mgd2hlcmV2ZXIgdGhlIG5vZGUgaXM6IGlmIHRoZXJlJ3MgYXQgbGVhc3Qgb25lIGNsaWVudCByZWN0LCBpdCdzXG4gICAgICAvLyAgc29tZWhvdyBkaXNwbGF5ZWQ7IGl0IGFsc28gY292ZXJzIHRoZSBDU1MgJ2Rpc3BsYXk6IGNvbnRlbnRzJyBjYXNlIHdoZXJlIHRoZVxuICAgICAgLy8gIG5vZGUgaXRzZWxmIGlzIGhpZGRlbiBpbiBwbGFjZSBvZiBpdHMgY29udGVudHM7IGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gc2VhcmNoXG4gICAgICAvLyAgdXAgdGhlIGhpZXJhcmNoeSBlaXRoZXJcbiAgICAgIHJldHVybiAhbm9kZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBFbHNlLCB0aGUgbm9kZSBpc24ndCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQsIHdoaWNoIG1lYW5zIHRoZSBgZ2V0Q2xpZW50UmVjdHMoKWBcbiAgICAvLyAgQVBJIHdpbGwgX19hbHdheXNfXyByZXR1cm4gemVybyByZWN0cyAodGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgUmVhY3RcbiAgICAvLyAgaXMgdXNlZCB0byByZW5kZXIgbm9kZXMgb250byBhIGRldGFjaGVkIHRyZWUsIGFzIGNvbmZpcm1lZCBpbiB0aGlzIHRocmVhZDpcbiAgICAvLyAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy85MTE3I2lzc3VlY29tbWVudC0yODQyMjg4NzApXG4gICAgLy9cbiAgICAvLyBJdCBhbHNvIG1lYW5zIHRoYXQgZXZlbiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5IHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgLy8gIGJlY2F1c2Ugc3R5bGVzIGFyZSBvbmx5IGNvbXB1dGVkIGZvciBub2RlcyB0aGF0IGFyZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgLy9cbiAgICAvLyBOT1RFOiBUSElTIEhBUyBCRUVOIFRIRSBDQVNFIEZPUiBZRUFSUy4gSXQgaXMgbm90IG5ldywgbm9yIGlzIGl0IGNhdXNlZCBieSB0YWJiYWJsZVxuICAgIC8vICBzb21laG93LiBUaG91Z2ggaXQgd2FzIG5ldmVyIHN0YXRlZCBvZmZpY2lhbGx5LCBhbnlvbmUgd2hvIGhhcyBldmVyIHVzZWQgdGFiYmFibGVcbiAgICAvLyAgQVBJcyBvbiBub2RlcyBpbiBkZXRhY2hlZCBjb250YWluZXJzIGhhcyBhY3R1YWxseSBpbXBsaWNpdGx5IHVzZWQgdGFiYmFibGUgaW4gd2hhdFxuICAgIC8vICB3YXMgbGF0ZXIgKGFzIG9mIHY1LjIuMCBvbiBBcHIgOSwgMjAyMSkgY2FsbGVkIGBkaXNwbGF5Q2hlY2s9XCJub25lXCJgIG1vZGUgLS0gZXNzZW50aWFsbHlcbiAgICAvLyAgY29uc2lkZXJpbmcgX19ldmVyeXRoaW5nX18gdG8gYmUgdmlzaWJsZSBiZWNhdXNlIG9mIHRoZSBpbm5hYmlsaXR5IHRvIGRldGVybWluZSBzdHlsZXMuXG4gICAgLy9cbiAgICAvLyB2Ni4wLjA6IEFzIG9mIHRoaXMgbWFqb3IgcmVsZWFzZSwgdGhlIGRlZmF1bHQgJ2Z1bGwnIG9wdGlvbiBfX25vIGxvbmdlciB0cmVhdHMgZGV0YWNoZWRcbiAgICAvLyAgbm9kZXMgYXMgdmlzaWJsZSB3aXRoIHRoZSAnbm9uZScgZmFsbGJhY2suX19cbiAgICBpZiAoZGlzcGxheUNoZWNrICE9PSAnbGVnYWN5LWZ1bGwnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gaGlkZGVuXG4gICAgfVxuICAgIC8vIGVsc2UsIGZhbGxiYWNrIHRvICdub25lJyBtb2RlIGFuZCBjb25zaWRlciB0aGUgbm9kZSB2aXNpYmxlXG4gIH0gZWxzZSBpZiAoZGlzcGxheUNoZWNrID09PSAnbm9uLXplcm8tYXJlYScpIHtcbiAgICAvLyBOT1RFOiBFdmVuIHRob3VnaCB0aGlzIHRlc3RzIHRoYXQgdGhlIG5vZGUncyBjbGllbnQgcmVjdCBpcyBub24temVybyB0byBkZXRlcm1pbmVcbiAgICAvLyAgd2hldGhlciBpdCdzIGRpc3BsYXllZCwgYW5kIHRoYXQgYSBkZXRhY2hlZCBub2RlIHdpbGwgX19hbHdheXNfXyBoYXZlIGEgemVyby1hcmVhXG4gICAgLy8gIGNsaWVudCByZWN0LCB3ZSBkb24ndCBzcGVjaWFsLWNhc2UgZm9yIHdoZXRoZXIgdGhlIG5vZGUgaXMgYXR0YWNoZWQgb3Igbm90LiBJblxuICAgIC8vICB0aGlzIG1vZGUsIHdlIGRvIHdhbnQgdG8gY29uc2lkZXIgbm9kZXMgdGhhdCBoYXZlIGEgemVybyBhcmVhIHRvIGJlIGhpZGRlbiBhdCBhbGxcbiAgICAvLyAgdGltZXMsIGFuZCB0aGF0IGluY2x1ZGVzIGF0dGFjaGVkIG9yIG5vdC5cbiAgICByZXR1cm4gaXNaZXJvQXJlYShub2RlKTtcbiAgfVxuXG4gIC8vIHZpc2libGUsIGFzIGZhciBhcyB3ZSBjYW4gdGVsbCwgb3IgcGVyIGN1cnJlbnQgYGRpc3BsYXlDaGVjaz1ub25lYCBtb2RlLCB3ZSBhc3N1bWVcbiAgLy8gIGl0J3MgdmlzaWJsZVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBmb3JtIGZpZWxkcyAobmVzdGVkKSBpbnNpZGUgYSBkaXNhYmxlZCBmaWVsZHNldCBhcmUgbm90IGZvY3VzYWJsZS90YWJiYWJsZVxuLy8gIHVubGVzcyB0aGV5IGFyZSBpbiB0aGUgX2ZpcnN0XyA8bGVnZW5kPiBlbGVtZW50IG9mIHRoZSB0b3AtbW9zdCBkaXNhYmxlZFxuLy8gIGZpZWxkc2V0XG52YXIgaXNEaXNhYmxlZEZyb21GaWVsZHNldCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkge1xuICBpZiAoL14oSU5QVVR8QlVUVE9OfFNFTEVDVHxURVhUQVJFQSkkLy50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAvLyBjaGVjayBpZiBgbm9kZWAgaXMgY29udGFpbmVkIGluIGEgZGlzYWJsZWQgPGZpZWxkc2V0PlxuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSAnRklFTERTRVQnICYmIHBhcmVudE5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gbG9vayBmb3IgdGhlIGZpcnN0IDxsZWdlbmQ+IGFtb25nIHRoZSBjaGlsZHJlbiBvZiB0aGUgZGlzYWJsZWQgPGZpZWxkc2V0PlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgICAgLy8gd2hlbiB0aGUgZmlyc3QgPGxlZ2VuZD4gKGluIGRvY3VtZW50IG9yZGVyKSBpcyBmb3VuZFxuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnTEVHRU5EJykge1xuICAgICAgICAgICAgLy8gaWYgaXRzIHBhcmVudCA8ZmllbGRzZXQ+IGlzIG5vdCBuZXN0ZWQgaW4gYW5vdGhlciBkaXNhYmxlZCA8ZmllbGRzZXQ+LFxuICAgICAgICAgICAgLy8gcmV0dXJuIHdoZXRoZXIgYG5vZGVgIGlzIGEgZGVzY2VuZGFudCBvZiBpdHMgZmlyc3QgPGxlZ2VuZD5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwocGFyZW50Tm9kZSwgJ2ZpZWxkc2V0W2Rpc2FibGVkXSAqJykgPyB0cnVlIDogIWNoaWxkLmNvbnRhaW5zKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgZGlzYWJsZWQgPGZpZWxkc2V0PiBjb250YWluaW5nIGBub2RlYCBoYXMgbm8gPGxlZ2VuZD5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8XG4gIC8vIHdlIG11c3QgZG8gYW4gaW5lcnQgbG9vayB1cCB0byBmaWx0ZXIgb3V0IGFueSBlbGVtZW50cyBpbnNpZGUgYW4gaW5lcnQgYW5jZXN0b3JcbiAgLy8gIGJlY2F1c2Ugd2UncmUgbGltaXRlZCBpbiB0aGUgdHlwZSBvZiBzZWxlY3RvcnMgd2UgY2FuIHVzZSBpbiBKU0RvbSAoc2VlIHJlbGF0ZWRcbiAgLy8gIG5vdGUgcmVsYXRlZCB0byBgY2FuZGlkYXRlU2VsZWN0b3JzYClcbiAgaXNJbmVydChub2RlKSB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMpIHx8XG4gIC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCB8fCAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUoc2hhZG93SG9zdE5vZGUpIHtcbiAgdmFyIHRhYkluZGV4ID0gcGFyc2VJbnQoc2hhZG93SG9zdE5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG4gIGlmIChpc05hTih0YWJJbmRleCkgfHwgdGFiSW5kZXggPj0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaGFzIGFuIGV4cGxpY2l0IG5lZ2F0aXZlIHRhYmluZGV4LFxuICAvLyBicm93c2VycyB3aWxsIG5vdCBhbGxvdyB0YWIgdGFyZ2V0aW5nIHNhaWQgZWxlbWVudCdzIGNoaWxkcmVuLlxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPEVsZW1lbnR8Q2FuZGlkYXRlU2NvcGU+fSBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyBFbGVtZW50W11cbiAqL1xudmFyIHNvcnRCeU9yZGVyID0gZnVuY3Rpb24gc29ydEJ5T3JkZXIoY2FuZGlkYXRlcykge1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuICBjYW5kaWRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICB2YXIgaXNTY29wZSA9ICEhaXRlbS5zY29wZVBhcmVudDtcbiAgICB2YXIgZWxlbWVudCA9IGlzU2NvcGUgPyBpdGVtLnNjb3BlUGFyZW50IDogaXRlbTtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChlbGVtZW50LCBpc1Njb3BlKTtcbiAgICB2YXIgZWxlbWVudHMgPSBpc1Njb3BlID8gc29ydEJ5T3JkZXIoaXRlbS5jYW5kaWRhdGVzKSA6IGVsZW1lbnQ7XG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICBpc1Njb3BlID8gcmVndWxhclRhYmJhYmxlcy5wdXNoLmFwcGx5KHJlZ3VsYXJUYWJiYWJsZXMsIGVsZW1lbnRzKSA6IHJlZ3VsYXJUYWJiYWJsZXMucHVzaChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpc1Njb3BlOiBpc1Njb3BlLFxuICAgICAgICBjb250ZW50OiBlbGVtZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcztcbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2VsXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpLFxuICAgICAgZmxhdHRlbjogZmFsc2UsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3QsXG4gICAgICBzaGFkb3dSb290RmlsdGVyOiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG4gIHJldHVybiBzb3J0QnlPcmRlcihjYW5kaWRhdGVzKTtcbn07XG52YXIgZm9jdXNhYmxlID0gZnVuY3Rpb24gZm9jdXNhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcztcbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2VsXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3RcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbnZhciBpc1RhYmJhYmxlID0gZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIHN9ZnJvbVwiLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBlfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uL2NvcmUvYXJyYXlVdGlscy5qc1wiO2ltcG9ydFwiLi4vY29yZS9oYXMuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgdH1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7aW1wb3J0e3N1YnN0aXR1dGUgYXMgcn1mcm9tXCIuLi9pbnRsL3N1YnN0aXR1dGUuanNcIjtpbXBvcnQgbyBmcm9tXCIuLi93aWRnZXRzL1dpZGdldC5qc1wiO2ltcG9ydHtzdG9yZU5vZGUgYXMgaX1mcm9tXCIuLi93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0VXRpbHMuanNcIjtpbXBvcnR7bWVzc2FnZUJ1bmRsZSBhcyBufWZyb21cIi4uL3dpZGdldHMvc3VwcG9ydC9kZWNvcmF0b3JzL21lc3NhZ2VCdW5kbGUuanNcIjtpbXBvcnR7dHN4IGFzIHV9ZnJvbVwiLi4vd2lkZ2V0cy9zdXBwb3J0L2pzeEZhY3RvcnkuanNcIjtjb25zdCBhPVwiZXNyaS1pZGVudGl0eS1mb3JtXCIscD17YmFzZTphLGdyb3VwOmAke2F9X19ncm91cGAsbGFiZWw6YCR7YX1fX2xhYmVsYCxmb290ZXI6YCR7YX1fX2Zvb3RlcmAsZXNyaUlucHV0OlwiZXNyaS1pbnB1dFwiLGVzcmlCdXR0b246XCJlc3JpLWJ1dHRvblwiLGVzcmlCdXR0b25TZWNvbmRhcnk6XCJlc3JpLWJ1dHRvbi0tc2Vjb25kYXJ5XCJ9LGw9XCJBcmNHSVMgT25saW5lXCI7bGV0IGQ9Y2xhc3MgZXh0ZW5kcyBve2NvbnN0cnVjdG9yKHMsZSl7c3VwZXIocyxlKSx0aGlzLl91c2VybmFtZUlucHV0Tm9kZT1udWxsLHRoaXMuX3Bhc3N3b3JkSW5wdXROb2RlPW51bGwsdGhpcy5zaWduaW5nSW49ITEsdGhpcy5zZXJ2ZXI9bnVsbCx0aGlzLnJlc291cmNlPW51bGwsdGhpcy5lcnJvcj1udWxsLHRoaXMub0F1dGhQcm9tcHQ9ITF9cmVuZGVyKCl7Y29uc3R7ZXJyb3I6cyxzZXJ2ZXI6ZSxyZXNvdXJjZTp0LHNpZ25pbmdJbjpvLG9BdXRoUHJvbXB0Om4sbWVzc2FnZXM6YX09dGhpcyxkPXUoXCJkaXZcIix7Y2xhc3M6cC5ncm91cH0scihuP2Eub0F1dGhJbmZvOmEuaW5mbyx7c2VydmVyOmUmJi9cXC5hcmNnaXNcXC5jb20vaS50ZXN0KGUpP2w6ZSxyZXNvdXJjZTpgKCR7dHx8YS5sYmxJdGVtfSlgfSkpLGM9bj9udWxsOnUoXCJkaXZcIix7Y2xhc3M6cC5ncm91cCxrZXk6XCJ1c2VybmFtZVwifSx1KFwibGFiZWxcIix7Y2xhc3M6cC5sYWJlbH0sYS5sYmxVc2VyLHUoXCJpbnB1dFwiLHt2YWx1ZTpcIlwiLHJlcXVpcmVkOiEwLGF1dG9jb21wbGV0ZTpcIm9mZlwiLHNwZWxsY2hlY2s6ITEsdHlwZTpcInRleHRcIixiaW5kOnRoaXMsYWZ0ZXJDcmVhdGU6aSxcImRhdGEtbm9kZS1yZWZcIjpcIl91c2VybmFtZUlucHV0Tm9kZVwiLGNsYXNzOnAuZXNyaUlucHV0fSkpKSxtPW4/bnVsbDp1KFwiZGl2XCIse2NsYXNzOnAuZ3JvdXAsa2V5OlwicGFzc3dvcmRcIn0sdShcImxhYmVsXCIse2NsYXNzOnAubGFiZWx9LGEubGJsUHdkLHUoXCJpbnB1dFwiLHt2YWx1ZTpcIlwiLHJlcXVpcmVkOiEwLHR5cGU6XCJwYXNzd29yZFwiLGJpbmQ6dGhpcyxhZnRlckNyZWF0ZTppLFwiZGF0YS1ub2RlLXJlZlwiOlwiX3Bhc3N3b3JkSW5wdXROb2RlXCIsY2xhc3M6cC5lc3JpSW5wdXR9KSkpLGg9dShcImRpdlwiLHtjbGFzczp0aGlzLmNsYXNzZXMocC5ncm91cCxwLmZvb3Rlcil9LHUoXCJpbnB1dFwiLHt0eXBlOlwic3VibWl0XCIsZGlzYWJsZWQ6ISFvLHZhbHVlOm8/YS5sYmxTaWduaW5nOmEubGJsT2ssY2xhc3M6cC5lc3JpQnV0dG9ufSksdShcImlucHV0XCIse3R5cGU6XCJidXR0b25cIix2YWx1ZTphLmxibENhbmNlbCxiaW5kOnRoaXMsb25jbGljazp0aGlzLl9jYW5jZWwsY2xhc3M6dGhpcy5jbGFzc2VzKHAuZXNyaUJ1dHRvbixwLmVzcmlCdXR0b25TZWNvbmRhcnkpfSkpLGI9cz91KFwiZGl2XCIsbnVsbCxzLmRldGFpbHMmJnMuZGV0YWlscy5odHRwU3RhdHVzP2EuaW52YWxpZFVzZXI6YS5ub0F1dGhTZXJ2aWNlKTpudWxsO3JldHVybiB1KFwiZm9ybVwiLHtjbGFzczpwLmJhc2UsYmluZDp0aGlzLG9uc3VibWl0OnRoaXMuX3N1Ym1pdH0sZCxiLGMsbSxoKX1fY2FuY2VsKCl7dGhpcy5fc2V0KFwic2lnbmluZ0luXCIsITEpLHRoaXMuX3VzZXJuYW1lSW5wdXROb2RlJiYodGhpcy5fdXNlcm5hbWVJbnB1dE5vZGUudmFsdWU9XCJcIiksdGhpcy5fcGFzc3dvcmRJbnB1dE5vZGUmJih0aGlzLl9wYXNzd29yZElucHV0Tm9kZS52YWx1ZT1cIlwiKSx0aGlzLmVtaXQoXCJjYW5jZWxcIil9X3N1Ym1pdChzKXtzLnByZXZlbnREZWZhdWx0KCksdGhpcy5fc2V0KFwic2lnbmluZ0luXCIsITApO2NvbnN0IGU9dGhpcy5vQXV0aFByb21wdD97fTp7dXNlcm5hbWU6dGhpcy5fdXNlcm5hbWVJbnB1dE5vZGUmJnRoaXMuX3VzZXJuYW1lSW5wdXROb2RlLnZhbHVlLHBhc3N3b3JkOnRoaXMuX3Bhc3N3b3JkSW5wdXROb2RlJiZ0aGlzLl9wYXNzd29yZElucHV0Tm9kZS52YWx1ZX07dGhpcy5lbWl0KFwic3VibWl0XCIsZSl9fTtzKFtlKCksbihcImVzcmkvaWRlbnRpdHkvdDluL2lkZW50aXR5XCIpXSxkLnByb3RvdHlwZSxcIm1lc3NhZ2VzXCIsdm9pZCAwKSxzKFtlKCldLGQucHJvdG90eXBlLFwic2lnbmluZ0luXCIsdm9pZCAwKSxzKFtlKCldLGQucHJvdG90eXBlLFwic2VydmVyXCIsdm9pZCAwKSxzKFtlKCldLGQucHJvdG90eXBlLFwicmVzb3VyY2VcIix2b2lkIDApLHMoW2UoKV0sZC5wcm90b3R5cGUsXCJlcnJvclwiLHZvaWQgMCkscyhbZSgpXSxkLnByb3RvdHlwZSxcIm9BdXRoUHJvbXB0XCIsdm9pZCAwKSxkPXMoW3QoXCJlc3JpLmlkZW50aXR5LklkZW50aXR5Rm9ybVwiKV0sZCk7Y29uc3QgYz1kO2V4cG9ydHtjIGFzIGRlZmF1bHR9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtzZXRJZCBhcyBlfWZyb21cIi4uL2tlcm5lbC5qc1wiO2ltcG9ydHtJZGVudGl0eU1hbmFnZXJCYXNlIGFzIHR9ZnJvbVwiLi9JZGVudGl0eU1hbmFnZXJCYXNlLmpzXCI7Y2xhc3MgciBleHRlbmRzIHR7fXIucHJvdG90eXBlLmRlY2xhcmVkQ2xhc3M9XCJlc3JpLmlkZW50aXR5LklkZW50aXR5TWFuYWdlclwiO2NvbnN0IHM9bmV3IHI7ZShzKTtleHBvcnR7cyBhcyBkZWZhdWx0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyBlfWZyb21cIi4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnQgdCBmcm9tXCIuLi9jb25maWcuanNcIjtpbXBvcnR7aWQgYXMgcn1mcm9tXCIuLi9rZXJuZWwuanNcIjtpbXBvcnQgcyBmcm9tXCIuLi9yZXF1ZXN0LmpzXCI7aW1wb3J0IGkgZnJvbVwiLi4vY29yZS9FcnJvci5qc1wiO2ltcG9ydCBvIGZyb21cIi4uL2NvcmUvRXZlbnRlZC5qc1wiO2ltcG9ydHtvbiBhcyBufWZyb21cIi4uL2NvcmUvZXZlbnRzLmpzXCI7aW1wb3J0e2ZpeEpzb24gYXMgYX1mcm9tXCIuLi9jb3JlL2xhbmcuanNcIjtpbXBvcnR7Z2V0RGVlcFZhbHVlIGFzIGh9ZnJvbVwiLi4vY29yZS9vYmplY3QuanNcIjtpbXBvcnR7Y3JlYXRlUmVzb2x2ZXIgYXMgbCxvbkFib3J0IGFzIGMsaXNBYm9ydGVkIGFzIGR9ZnJvbVwiLi4vY29yZS9wcm9taXNlVXRpbHMuanNcIjtpbXBvcnR7d2F0Y2ggYXMgdX1mcm9tXCIuLi9jb3JlL3JlYWN0aXZlVXRpbHMuanNcIjtpbXBvcnR7dXJsVG9PYmplY3QgYXMgcCxoYXNTYW1lT3JpZ2luIGFzIF8sVXJsIGFzIGYscXVlcnlUb09iamVjdCBhcyBnLGJhc2U2NFVybEVuY29kZSBhcyBtLG9iamVjdFRvUXVlcnkgYXMgdixub3JtYWxpemUgYXMgUyxnZXRQcm94eVJ1bGUgYXMgdyxtYWtlQWJzb2x1dGUgYXMgSSxhZGRRdWVyeVBhcmFtZXRlcnMgYXMgQX1mcm9tXCIuLi9jb3JlL3VybFV0aWxzLmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIGt9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZW5zdXJlVHlwZS5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyB5fWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjtpbXBvcnQgVSBmcm9tXCIuL0lkZW50aXR5Rm9ybS5qc1wiO2ltcG9ydCBUIGZyb21cIi4vSWRlbnRpdHlNb2RhbC5qc1wiO2ltcG9ydCB4IGZyb21cIi4vT0F1dGhDcmVkZW50aWFsLmpzXCI7aW1wb3J0IE8gZnJvbVwiLi9PQXV0aEluZm8uanNcIjtpbXBvcnQgUCBmcm9tXCIuL1NlcnZlckluZm8uanNcIjtpbXBvcnR7aXNTZWN1cmVQcm94eVNlcnZpY2UgYXMgUn1mcm9tXCIuLi9wb3J0YWwvc3VwcG9ydC91cmxVdGlscy5qc1wiO2NvbnN0IEM9e30sYj1lPT57Y29uc3QgdD1uZXcgZihlLm93bmluZ1N5c3RlbVVybCkuaG9zdCxyPW5ldyBmKGUuc2VydmVyKS5ob3N0LHM9Ly4rXFwuYXJjZ2lzXFwuY29tJC9pO3JldHVybiBzLnRlc3QodCkmJnMudGVzdChyKX0sRD0oZSx0KT0+ISEoYihlKSYmdCYmdC5zb21lKCh0PT50LnRlc3QoZS5zZXJ2ZXIpKSkpO2xldCBxPW51bGwsaj1udWxsO3RyeXtxPXdpbmRvdy5sb2NhbFN0b3JhZ2Usaj13aW5kb3cuc2Vzc2lvblN0b3JhZ2V9Y2F0Y2h7fWNsYXNzIEUgZXh0ZW5kcyBve2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLl9wb3J0YWxDb25maWc9Z2xvYmFsVGhpcy5lc3JpR2Vvd0NvbmZpZyx0aGlzLnNlcnZlckluZm9zPVtdLHRoaXMub0F1dGhJbmZvcz1bXSx0aGlzLmNyZWRlbnRpYWxzPVtdLHRoaXMuX3NvUmVxcz1bXSx0aGlzLl94b1JlcXM9W10sdGhpcy5fcG9ydGFscz1bXSx0aGlzLl9kZWZhdWx0T0F1dGhJbmZvPW51bGwsdGhpcy5fZGVmYXVsdFRva2VuVmFsaWRpdHk9NjAsdGhpcy5kaWFsb2c9bnVsbCx0aGlzLmZvcm1Db25zdHJ1Y3Rvcj1VLHRoaXMudG9rZW5WYWxpZGl0eT1udWxsLHRoaXMubm9ybWFsaXplV2ViVGllckF1dGg9ITEsdGhpcy5fYXBwT3JpZ2luPVwibnVsbFwiIT09d2luZG93Lm9yaWdpbj93aW5kb3cub3JpZ2luOndpbmRvdy5sb2NhdGlvbi5vcmlnaW4sdGhpcy5fYXBwVXJsT2JqPXAod2luZG93LmxvY2F0aW9uLmhyZWYpLHRoaXMuX2J1c3k9bnVsbCx0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93PSExLHRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXM9bnVsbCx0aGlzLl9nd1Rva2VuVXJsPVwiL3NoYXJpbmcvcmVzdC9nZW5lcmF0ZVRva2VuXCIsdGhpcy5fYWdzUmVzdD1cIi9yZXN0L3NlcnZpY2VzXCIsdGhpcy5fYWdzUG9ydGFsPS9cXC9zaGFyaW5nKFxcL3wkKS9pLHRoaXMuX2Fnc0FkbWluPS8oaHR0cHM/OlxcL1xcL1teXFwvXStcXC9bXlxcL10rKVxcL2FkbWluXFwvPyhcXC8uKik/JC9pLHRoaXMuX2FkbWluU3Zjcz0vXFwvcmVzdFxcL2FkbWluXFwvc2VydmljZXMoXFwvfCQpL2ksdGhpcy5fZ3dEb21haW5zPVt7cmVnZXg6L15odHRwcz86XFwvXFwvd3d3XFwuYXJjZ2lzXFwuY29tL2ksY3VzdG9tQmFzZVVybDpcIm1hcHMuYXJjZ2lzLmNvbVwiLHRva2VuU2VydmljZVVybDpcImh0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0L2dlbmVyYXRlVG9rZW5cIn0se3JlZ2V4Oi9eaHR0cHM/OlxcL1xcLyg/OmRldnxbYS16XFxkLV0rXFwubWFwc2RldilcXC5hcmNnaXNcXC5jb20vaSxjdXN0b21CYXNlVXJsOlwibWFwc2Rldi5hcmNnaXMuY29tXCIsdG9rZW5TZXJ2aWNlVXJsOlwiaHR0cHM6Ly9kZXYuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QvZ2VuZXJhdGVUb2tlblwifSx7cmVnZXg6L15odHRwcz86XFwvXFwvKD86ZGV2ZXh0fFthLXpcXGQtXStcXC5tYXBzZGV2ZXh0KVxcLmFyY2dpc1xcLmNvbS9pLGN1c3RvbUJhc2VVcmw6XCJtYXBzZGV2ZXh0LmFyY2dpcy5jb21cIix0b2tlblNlcnZpY2VVcmw6XCJodHRwczovL2RldmV4dC5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9nZW5lcmF0ZVRva2VuXCJ9LHtyZWdleDovXmh0dHBzPzpcXC9cXC8oPzpxYWV4dHxbYS16XFxkLV0rXFwubWFwc3FhKVxcLmFyY2dpc1xcLmNvbS9pLGN1c3RvbUJhc2VVcmw6XCJtYXBzcWEuYXJjZ2lzLmNvbVwiLHRva2VuU2VydmljZVVybDpcImh0dHBzOi8vcWFleHQuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QvZ2VuZXJhdGVUb2tlblwifSx7cmVnZXg6L15odHRwcz86XFwvXFwvW2EtelxcZC1dK1xcLm1hcHNcXC5hcmNnaXNcXC5jb20vaSxjdXN0b21CYXNlVXJsOlwibWFwcy5hcmNnaXMuY29tXCIsdG9rZW5TZXJ2aWNlVXJsOlwiaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QvZ2VuZXJhdGVUb2tlblwifV0sdGhpcy5fbGVnYWN5RmVkPVtdLHRoaXMuX3JlZ2V4U0RpclVybD0vaHR0cC4rXFwvcmVzdFxcL3NlcnZpY2VzXFwvPy9naSx0aGlzLl9yZWdleFNlcnZlclR5cGU9LyhcXC8oRmVhdHVyZVNlcnZlcnxHUFNlcnZlcnxHZW9EYXRhU2VydmVyfEdlb2NvZGVTZXJ2ZXJ8R2VvZW5yaWNobWVudFNlcnZlcnxHZW9tZXRyeVNlcnZlcnxHbG9iZVNlcnZlcnxJbWFnZVNlcnZlcnxLbm93bGVkZ2VHcmFwaFNlcnZlcnxNYXBTZXJ2ZXJ8TWlzc2lvblNlcnZlcnxNb2JpbGVTZXJ2ZXJ8TkFTZXJ2ZXJ8TmV0d29ya0RpYWdyYW1TZXJ2ZXJ8T0dDRmVhdHVyZVNlcnZlcnxQYXJjZWxGYWJyaWNTZXJ2ZXJ8UmVsYXRpb25hbENhdGFsb2dTZXJ2ZXJ8U2NlbmVTZXJ2ZXJ8U3RyZWFtU2VydmVyfFV0aWxpdHlOZXR3b3JrU2VydmVyfFZhbGlkYXRpb25TZXJ2ZXJ8VmVjdG9yVGlsZVNlcnZlcnxWZXJzaW9uTWFuYWdlbWVudFNlcnZlcnxWaWRlb1NlcnZlcikpLiovZ2ksdGhpcy5fZ3dVc2VyPS9odHRwLitcXC91c2Vyc1xcLyhbXlxcL10rKVxcLz8uKi9pLHRoaXMuX2d3SXRlbT0vaHR0cC4rXFwvaXRlbXNcXC8oW15cXC9dKylcXC8/LiovaSx0aGlzLl9nd0dyb3VwPS9odHRwLitcXC9ncm91cHNcXC8oW15cXC9dKylcXC8/LiovaSx0aGlzLl9yZVBvcnRhbFRva2VuU3ZjPS9cXC9zaGFyaW5nKFxcL3Jlc3QpP1xcL2dlbmVyYXRldG9rZW4vaSx0aGlzLl9jcmVhdGVEZWZhdWx0T0F1dGhJbmZvPSEwLHRoaXMuX2hhc1Rlc3RlZElmQXBwSXNPblBvcnRhbD0hMSx0aGlzLl9nZXRPQXV0aExvY2F0aW9uUGFyYW1zKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLChlPT57dGhpcy5fcGFnZVNob3dIYW5kbGVyKGUpfSkpfXJlZ2lzdGVyU2VydmVycyhlKXtjb25zdCB0PXRoaXMuc2VydmVySW5mb3M7dD8oZT1lLmZpbHRlcigoZT0+IXRoaXMuZmluZFNlcnZlckluZm8oZS5zZXJ2ZXIpKSksdGhpcy5zZXJ2ZXJJbmZvcz10LmNvbmNhdChlKSk6dGhpcy5zZXJ2ZXJJbmZvcz1lLGUuZm9yRWFjaCgoZT0+e2Uub3duaW5nU3lzdGVtVXJsJiZ0aGlzLl9wb3J0YWxzLnB1c2goZS5vd25pbmdTeXN0ZW1VcmwpLGUuaGFzUG9ydGFsJiZ0aGlzLl9wb3J0YWxzLnB1c2goZS5zZXJ2ZXIpfSkpfXJlZ2lzdGVyT0F1dGhJbmZvcyhlKXtjb25zdCB0PXRoaXMub0F1dGhJbmZvcztpZih0KXtmb3IoY29uc3QgciBvZiBlKXtjb25zdCBlPXRoaXMuZmluZE9BdXRoSW5mbyhyLnBvcnRhbFVybCk7ZSYmdC5zcGxpY2UodC5pbmRleE9mKGUpLDEpfXRoaXMub0F1dGhJbmZvcz10LmNvbmNhdChlKX1lbHNlIHRoaXMub0F1dGhJbmZvcz1lfXJlZ2lzdGVyVG9rZW4oZSl7ZT17Li4uZX07Y29uc3QgdD10aGlzLl9zYW5pdGl6ZVVybChlLnNlcnZlcikscj10aGlzLl9pc1NlcnZlclJzcmModCk7bGV0IHMsaT10aGlzLmZpbmRTZXJ2ZXJJbmZvKHQpLG89ITA7aXx8KGk9bmV3IFAsaS5zZXJ2ZXI9dGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KHQpLHI/aS5oYXNTZXJ2ZXI9ITA6KGkudG9rZW5TZXJ2aWNlVXJsPXRoaXMuX2dldFRva2VuU3ZjVXJsKHQpLGkuaGFzUG9ydGFsPSEwKSx0aGlzLnJlZ2lzdGVyU2VydmVycyhbaV0pKSxzPXRoaXMuX2ZpbmRDcmVkZW50aWFsKHQpLHM/KGRlbGV0ZSBlLnNlcnZlcixPYmplY3QuYXNzaWduKHMsZSksbz0hMSk6KHM9bmV3IEwoe3VzZXJJZDplLnVzZXJJZCxzZXJ2ZXI6aS5zZXJ2ZXIsdG9rZW46ZS50b2tlbixleHBpcmVzOmUuZXhwaXJlcyxzc2w6ZS5zc2wsc2NvcGU6cj9cInNlcnZlclwiOlwicG9ydGFsXCJ9KSxzLnJlc291cmNlcz1bdF0sdGhpcy5jcmVkZW50aWFscy5wdXNoKHMpKSxzLmVtaXRUb2tlbkNoYW5nZSghMSksb3x8cy5yZWZyZXNoU2VydmVyVG9rZW5zKCl9dG9KU09OKCl7cmV0dXJuIGEoe3NlcnZlckluZm9zOnRoaXMuc2VydmVySW5mb3MubWFwKChlPT5lLnRvSlNPTigpKSksb0F1dGhJbmZvczp0aGlzLm9BdXRoSW5mb3MubWFwKChlPT5lLnRvSlNPTigpKSksY3JlZGVudGlhbHM6dGhpcy5jcmVkZW50aWFscy5tYXAoKGU9PmUudG9KU09OKCkpKX0pfWluaXRpYWxpemUoZSl7aWYoIWUpcmV0dXJuO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1KU09OLnBhcnNlKGUpKTtjb25zdCB0PWUuc2VydmVySW5mb3Mscj1lLm9BdXRoSW5mb3Mscz1lLmNyZWRlbnRpYWxzO2lmKHQpe2NvbnN0IGU9W107dC5mb3JFYWNoKCh0PT57dC5zZXJ2ZXImJnQudG9rZW5TZXJ2aWNlVXJsJiZlLnB1c2godC5kZWNsYXJlZENsYXNzP3Q6bmV3IFAodCkpfSkpLGUubGVuZ3RoJiZ0aGlzLnJlZ2lzdGVyU2VydmVycyhlKX1pZihyKXtjb25zdCBlPVtdO3IuZm9yRWFjaCgodD0+e3QuYXBwSWQmJmUucHVzaCh0LmRlY2xhcmVkQ2xhc3M/dDpuZXcgTyh0KSl9KSksZS5sZW5ndGgmJnRoaXMucmVnaXN0ZXJPQXV0aEluZm9zKGUpfXMmJnMuZm9yRWFjaCgoZT0+e2Uuc2VydmVyJiZlLnRva2VuJiZlLmV4cGlyZXMmJmUuZXhwaXJlcz5EYXRlLm5vdygpJiYoKGU9ZS5kZWNsYXJlZENsYXNzP2U6bmV3IEwoZSkpLmVtaXRUb2tlbkNoYW5nZSgpLHRoaXMuY3JlZGVudGlhbHMucHVzaChlKSl9KSl9ZmluZFNlcnZlckluZm8oZSl7bGV0IHQ7ZT10aGlzLl9zYW5pdGl6ZVVybChlKTtmb3IoY29uc3QgciBvZiB0aGlzLnNlcnZlckluZm9zKWlmKHRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZShyLnNlcnZlcixlKSl7dD1yO2JyZWFrfXJldHVybiB0fWZpbmRPQXV0aEluZm8oZSl7bGV0IHQ7ZT10aGlzLl9zYW5pdGl6ZVVybChlKTtmb3IoY29uc3QgciBvZiB0aGlzLm9BdXRoSW5mb3MpaWYodGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHIucG9ydGFsVXJsLGUpKXt0PXI7YnJlYWt9cmV0dXJuIHR9ZmluZENyZWRlbnRpYWwoZSx0KXtpZighZSlyZXR1cm47bGV0IHI7ZT10aGlzLl9zYW5pdGl6ZVVybChlKTtjb25zdCBzPXRoaXMuX2lzU2VydmVyUnNyYyhlKT9cInNlcnZlclwiOlwicG9ydGFsXCI7aWYodCl7Zm9yKGNvbnN0IGkgb2YgdGhpcy5jcmVkZW50aWFscylpZih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UoaS5zZXJ2ZXIsZSkmJnQ9PT1pLnVzZXJJZCYmaS5zY29wZT09PXMpe3I9aTticmVha319ZWxzZSBmb3IoY29uc3QgaSBvZiB0aGlzLmNyZWRlbnRpYWxzKWlmKHRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZShpLnNlcnZlcixlKSYmLTEhPT10aGlzLl9nZXRJZGVudGljYWxTdmNJZHgoZSxpKSYmaS5zY29wZT09PXMpe3I9aTticmVha31yZXR1cm4gcn1nZXRDcmVkZW50aWFsKGUsdCl7bGV0IHIscyxvPSEwO3QmJihyPSEhdC50b2tlbixzPXQuZXJyb3Isbz0hMSE9PXQucHJvbXB0KSx0PXsuLi50fSxlPXRoaXMuX3Nhbml0aXplVXJsKGUpO2NvbnN0IG49bmV3IEFib3J0Q29udHJvbGxlcixhPWwoKTtpZih0LnNpZ25hbCYmYyh0LnNpZ25hbCwoKCk9PntuLmFib3J0KCl9KSksYyhuLCgoKT0+e2EucmVqZWN0KG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIikpfSkpLGQobikpcmV0dXJuIGEucHJvbWlzZTt0LnNpZ25hbD1uLnNpZ25hbDtjb25zdCBoPXRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKSx1PXI/dGhpcy5maW5kQ3JlZGVudGlhbChlKTpudWxsO2xldCBwO2lmKHUmJnMmJnMuZGV0YWlscyYmNDk4PT09cy5kZXRhaWxzLmh0dHBTdGF0dXMpdS5kZXN0cm95KCk7ZWxzZSBpZih1KXJldHVybiBwPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aG9yaXplZFwiLFwiWW91IGFyZSBjdXJyZW50bHkgc2lnbmVkIGluIGFzOiAnXCIrdS51c2VySWQrXCInLiBZb3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHRoaXMgcmVzb3VyY2U6IFwiK2Use2Vycm9yOnN9KSxhLnJlamVjdChwKSxhLnByb21pc2U7Y29uc3QgZj10aGlzLl9maW5kQ3JlZGVudGlhbChlLHQpO2lmKGYpcmV0dXJuIGEucmVzb2x2ZShmKSxhLnByb21pc2U7bGV0IGc9dGhpcy5maW5kU2VydmVySW5mbyhlKTtpZihnKSFnLmhhc1NlcnZlciYmdGhpcy5faXNTZXJ2ZXJSc3JjKGUpJiYoZy5fcmVzdEluZm9QbXM9dGhpcy5fZ2V0VG9rZW5TdmNVcmwoZSksZy5oYXNTZXJ2ZXI9ITApO2Vsc2V7Y29uc3QgdD10aGlzLl9nZXRUb2tlblN2Y1VybChlKTtpZighdClyZXR1cm4gcD1uZXcgaShcImlkZW50aXR5LW1hbmFnZXI6dW5rbm93bi1yZXNvdXJjZVwiLFwiVW5rbm93biByZXNvdXJjZSAtIGNvdWxkIG5vdCBmaW5kIHRva2VuIHNlcnZpY2UgZW5kcG9pbnQuXCIpLGEucmVqZWN0KHApLGEucHJvbWlzZTtnPW5ldyBQLGcuc2VydmVyPXRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdChlKSxcInN0cmluZ1wiPT10eXBlb2YgdD8oZy50b2tlblNlcnZpY2VVcmw9dCxnLmhhc1BvcnRhbD0hMCk6KGcuX3Jlc3RJbmZvUG1zPXQsZy5oYXNTZXJ2ZXI9ITApLHRoaXMucmVnaXN0ZXJTZXJ2ZXJzKFtnXSl9cmV0dXJuIGcuaGFzUG9ydGFsJiZ2b2lkIDA9PT1nLl9zZWxmUmVxJiYob3x8XyhnLnRva2VuU2VydmljZVVybCx0aGlzLl9hcHBPcmlnaW4pfHx0aGlzLl9nd0RvbWFpbnMuc29tZSgoZT0+ZS50b2tlblNlcnZpY2VVcmw9PT1nLnRva2VuU2VydmljZVVybCkpKSYmKGcuX3NlbGZSZXE9e293bmluZ1RlbmFudDp0JiZ0Lm93bmluZ1RlbmFudCxzZWxmRGZkOnRoaXMuX2dldFBvcnRhbFNlbGYoZy50b2tlblNlcnZpY2VVcmwucmVwbGFjZSh0aGlzLl9yZVBvcnRhbFRva2VuU3ZjLFwiL3NoYXJpbmcvcmVzdC9wb3J0YWxzL3NlbGZcIiksZSl9KSx0aGlzLl9lbnF1ZXVlKGUsZyx0LGEsaCl9Z2V0UmVzb3VyY2VOYW1lKGUpe3JldHVybiB0aGlzLl9pc1JFU1RTZXJ2aWNlKGUpP2UucmVwbGFjZSh0aGlzLl9yZWdleFNEaXJVcmwsXCJcIikucmVwbGFjZSh0aGlzLl9yZWdleFNlcnZlclR5cGUsXCJcIil8fFwiXCI6dGhpcy5fZ3dVc2VyLnRlc3QoZSkmJmUucmVwbGFjZSh0aGlzLl9nd1VzZXIsXCIkMVwiKXx8dGhpcy5fZ3dJdGVtLnRlc3QoZSkmJmUucmVwbGFjZSh0aGlzLl9nd0l0ZW0sXCIkMVwiKXx8dGhpcy5fZ3dHcm91cC50ZXN0KGUpJiZlLnJlcGxhY2UodGhpcy5fZ3dHcm91cCxcIiQxXCIpfHxcIlwifWdlbmVyYXRlVG9rZW4oZSx0LHIpe2NvbnN0IG89dGhpcy5fcmVQb3J0YWxUb2tlblN2Yy50ZXN0KGUudG9rZW5TZXJ2aWNlVXJsKSxuPW5ldyBmKHRoaXMuX2FwcE9yaWdpbiksYT1lLnNob3J0TGl2ZWRUb2tlblZhbGlkaXR5O2xldCBoLGwsYyxkLHUscCxnLG07dCYmKG09dGhpcy50b2tlblZhbGlkaXR5fHxhfHx0aGlzLl9kZWZhdWx0VG9rZW5WYWxpZGl0eSxtPmEmJmE+MCYmKG09YSkpLHImJihoPXIuaXNBZG1pbixsPXIuc2VydmVyVXJsLGM9ci50b2tlbixwPXIuc2lnbmFsLGc9ci5zc2wsZS5jdXN0b21QYXJhbWV0ZXJzPXIuY3VzdG9tUGFyYW1ldGVycyksaD9kPWUuYWRtaW5Ub2tlblNlcnZpY2VVcmw6KGQ9ZS50b2tlblNlcnZpY2VVcmwsdT1uZXcgZihkLnRvTG93ZXJDYXNlKCkpLGUud2ViVGllckF1dGgmJnI/LnNlcnZlclVybCYmIWcmJlwiaHR0cFwiPT09bi5zY2hlbWUmJihfKG4udXJpLGQsITApfHxcImh0dHBzXCI9PT11LnNjaGVtZSYmbi5ob3N0PT09dS5ob3N0JiZcIjcwODBcIj09PW4ucG9ydCYmXCI3NDQzXCI9PT11LnBvcnQpJiYoZD1kLnJlcGxhY2UoL15odHRwczovaSxcImh0dHA6XCIpLnJlcGxhY2UoLzo3NDQzL2ksXCI6NzA4MFwiKSkpO2NvbnN0IHY9e3F1ZXJ5OntyZXF1ZXN0OlwiZ2V0VG9rZW5cIix1c2VybmFtZTp0Py51c2VybmFtZSxwYXNzd29yZDp0Py5wYXNzd29yZCxzZXJ2ZXJVcmw6bCx0b2tlbjpjLGV4cGlyYXRpb246bSxyZWZlcmVyOmh8fG8/dGhpcy5fYXBwT3JpZ2luOm51bGwsY2xpZW50Omg/XCJyZWZlcmVyXCI6bnVsbCxmOlwianNvblwiLC4uLmUuY3VzdG9tUGFyYW1ldGVyc30sbWV0aG9kOlwicG9zdFwiLGF1dGhNb2RlOlwiYW5vbnltb3VzXCIsdXNlUHJveHk6dGhpcy5fdXNlUHJveHkoZSxyKSxzaWduYWw6cCwuLi5yPy5pb0FyZ3N9O298fCh2LndpdGhDcmVkZW50aWFscz0hMSk7cmV0dXJuIHMoZCx2KS50aGVuKChyPT57Y29uc3Qgcz1yLmRhdGE7aWYoIXN8fCFzLnRva2VuKXJldHVybiBuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6YXV0aGVudGljYXRpb24tZmFpbGVkXCIsXCJVbmFibGUgdG8gZ2VuZXJhdGUgdG9rZW5cIik7Y29uc3Qgbz1lLnNlcnZlcjtyZXR1cm4gQ1tvXXx8KENbb109e30pLHQmJihDW29dW3QudXNlcm5hbWVdPXQucGFzc3dvcmQpLHMudmFsaWRpdHk9bSxzfSkpfWlzQnVzeSgpe3JldHVybiEhdGhpcy5fYnVzeX1jaGVja1NpZ25JblN0YXR1cyhlKXtyZXR1cm4gdGhpcy5jaGVja0FwcEFjY2VzcyhlLFwiXCIpLnRoZW4oKGU9PmUuY3JlZGVudGlhbCkpfWNoZWNrQXBwQWNjZXNzKGUsdCxyKXtsZXQgbz0hMTtyZXR1cm4gdGhpcy5nZXRDcmVkZW50aWFsKGUse3Byb21wdDohMX0pLnRoZW4oKG49PntsZXQgYTtjb25zdCBoPXtmOlwianNvblwifTtpZihcInBvcnRhbFwiPT09bi5zY29wZSlpZih0JiYodGhpcy5fZG9Qb3J0YWxTaWduSW4oZSl8fHImJnIuZm9yY2UpKWE9bi5zZXJ2ZXIrXCIvc2hhcmluZy9yZXN0L29hdXRoMi92YWxpZGF0ZUFwcEFjY2Vzc1wiLGguY2xpZW50X2lkPXQ7ZWxzZXtpZighbi50b2tlbilyZXR1cm57Y3JlZGVudGlhbDpufTthPW4uc2VydmVyK1wiL3NoYXJpbmcvcmVzdFwifWVsc2V7aWYoIW4udG9rZW4pcmV0dXJue2NyZWRlbnRpYWw6bn07YT1uLnNlcnZlcitcIi9yZXN0L3NlcnZpY2VzXCJ9cmV0dXJuIG4udG9rZW4mJihoLnRva2VuPW4udG9rZW4pLHMoYSx7cXVlcnk6aCxhdXRoTW9kZTpcImFub255bW91c1wifSkudGhlbigoZT0+e2lmKCExPT09ZS5kYXRhLnZhbGlkKXRocm93IG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aG9yaXplZFwiLGBZb3UgYXJlIGN1cnJlbnRseSBzaWduZWQgaW4gYXM6ICcke24udXNlcklkfScuYCxlLmRhdGEpO3JldHVybiBvPSEhZS5kYXRhLnZpZXdPbmx5VXNlclR5cGVBcHAse2NyZWRlbnRpYWw6bn19KSkuY2F0Y2goKGU9PntpZihcImlkZW50aXR5LW1hbmFnZXI6bm90LWF1dGhvcml6ZWRcIj09PWUubmFtZSl0aHJvdyBlO2NvbnN0IHQ9ZS5kZXRhaWxzJiZlLmRldGFpbHMuaHR0cFN0YXR1cztpZig0OTg9PT10KXRocm93IG4uZGVzdHJveSgpLG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aGVudGljYXRlZFwiLFwiVXNlciBpcyBub3Qgc2lnbmVkIGluLlwiKTtpZig0MDA9PT10KXRocm93IG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjppbnZhbGlkLXJlcXVlc3RcIik7cmV0dXJue2NyZWRlbnRpYWw6bn19KSl9KSkudGhlbigoZT0+KHtjcmVkZW50aWFsOmUuY3JlZGVudGlhbCx2aWV3T25seTpvfSkpKX1zZXRPQXV0aFJlc3BvbnNlSGFzaChlKXtlJiYoXCIjXCI9PT1lLmNoYXJBdCgwKSYmKGU9ZS5zdWJzdHJpbmcoMSkpLHRoaXMuX3Byb2Nlc3NPQXV0aFBvcHVwUGFyYW1zKGcoZSkpKX1zZXRPQXV0aFJlZGlyZWN0aW9uSGFuZGxlcihlKXt0aGlzLl9vQXV0aFJlZGlyZWN0RnVuYz1lfXNldFByb3RvY29sRXJyb3JIYW5kbGVyKGUpe3RoaXMuX3Byb3RvY29sRnVuYz1lfXNpZ25JbihlLHQscj17fSl7Y29uc3Qgcz1sKCksbz0oKT0+e2g/LnJlbW92ZSgpLGQ/LnJlbW92ZSgpLHA/LnJlbW92ZSgpLGE/LmRlc3Ryb3koKSx0aGlzLmRpYWxvZz8uZGVzdHJveSgpLHRoaXMuZGlhbG9nPWE9aD1kPXA9bnVsbH0sbj0oKT0+e28oKSx0aGlzLl9vQXV0aERmZD1udWxsLHMucmVqZWN0KG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIikpfTtyLnNpZ25hbCYmYyhyLnNpZ25hbCwoKCk9PntuKCl9KSk7bGV0IGE9bmV3IHRoaXMuZm9ybUNvbnN0cnVjdG9yO2EucmVzb3VyY2U9dGhpcy5nZXRSZXNvdXJjZU5hbWUoZSksYS5zZXJ2ZXI9dC5zZXJ2ZXIsdGhpcy5kaWFsb2c9bmV3IFQsdGhpcy5kaWFsb2cuY29udGVudD1hLHRoaXMuZGlhbG9nLm9wZW49ITAsdGhpcy5lbWl0KFwiZGlhbG9nLWNyZWF0ZVwiKTtsZXQgaD1hLm9uKFwiY2FuY2VsXCIsbiksZD11KCgoKT0+dGhpcy5kaWFsb2cub3BlbiksbikscD1hLm9uKFwic3VibWl0XCIsKGU9Pnt0aGlzLmdlbmVyYXRlVG9rZW4odCxlLHtpc0FkbWluOnIuaXNBZG1pbixzaWduYWw6ci5zaWduYWx9KS50aGVuKChpPT57bygpO2NvbnN0IG49bmV3IEwoe3VzZXJJZDplLnVzZXJuYW1lLHNlcnZlcjp0LnNlcnZlcix0b2tlbjppLnRva2VuLGV4cGlyZXM6bnVsbCE9aS5leHBpcmVzP051bWJlcihpLmV4cGlyZXMpOm51bGwsc3NsOiEhaS5zc2wsaXNBZG1pbjpyLmlzQWRtaW4sdmFsaWRpdHk6aS52YWxpZGl0eX0pO3MucmVzb2x2ZShuKX0pKS5jYXRjaCgoZT0+e2EuZXJyb3I9ZSxhLnNpZ25pbmdJbj0hMX0pKX0pKTtyZXR1cm4gcy5wcm9taXNlfW9BdXRoU2lnbkluKGUsdCxyLHMpe3RoaXMuX29BdXRoRGZkPWwoKTtjb25zdCBvPXRoaXMuX29BdXRoRGZkO2xldCBuO3M/LnNpZ25hbCYmYyhzLnNpZ25hbCwoKCk9Pntjb25zdCBlPXRoaXMuX29BdXRoRGZkJiZ0aGlzLl9vQXV0aERmZC5vQXV0aFdpbl87ZSYmIWUuY2xvc2VkP2UuY2xvc2UoKTp0aGlzLmRpYWxvZyYmZigpfSkpLG8ucmVzVXJsXz1lLG8uc2luZm9fPXQsby5vaW5mb189cjtjb25zdCBhPXIuX29BdXRoQ3JlZDtpZihhLnN0b3JhZ2UmJihcImF1dGhvcml6YXRpb24tY29kZVwiPT09ci5mbG93VHlwZXx8XCJhdXRvXCI9PT1yLmZsb3dUeXBlJiYhci5wb3B1cCYmdC5jdXJyZW50VmVyc2lvbj49OC40KSl7bGV0IGU9Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgzMikpO249bShlKSxhLmNvZGVWZXJpZmllcj1uLGU9Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgzMikpLGEuc3RhdGVVSUQ9bShlKSxhLnNhdmUoKXx8KGEuY29kZVZlcmlmaWVyPW49bnVsbCl9ZWxzZSBhLmNvZGVWZXJpZmllcj1udWxsO2xldCBoLGQscCxfO3RoaXMuX2dldENvZGVDaGFsbGVuZ2UobikudGhlbigoaT0+e2NvbnN0IG89IXN8fCExIT09cy5vQXV0aFBvcHVwQ29uZmlybWF0aW9uO3IucG9wdXAmJm8/KGg9bmV3IHRoaXMuZm9ybUNvbnN0cnVjdG9yLGgub0F1dGhQcm9tcHQ9ITAsaC5zZXJ2ZXI9dC5zZXJ2ZXIsdGhpcy5kaWFsb2c9bmV3IFQsdGhpcy5kaWFsb2cuY29udGVudD1oLHRoaXMuZGlhbG9nLm9wZW49ITAsdGhpcy5lbWl0KFwiZGlhbG9nLWNyZWF0ZVwiKSxkPWgub24oXCJjYW5jZWxcIixmKSxwPXUoKCgpPT50aGlzLmRpYWxvZy5vcGVuKSxmKSxfPWgub24oXCJzdWJtaXRcIiwoKCk9PntnKCksdGhpcy5fZG9PQXV0aFNpZ25JbihlLHQscixpKX0pKSk6dGhpcy5fZG9PQXV0aFNpZ25JbihlLHQscixpKX0pKTtjb25zdCBmPSgpPT57ZygpLHRoaXMuX29BdXRoRGZkPW51bGwsby5yZWplY3QobmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOnVzZXItYWJvcnRlZFwiLFwiQUJPUlRFRFwiKSl9LGc9KCk9PntkPy5yZW1vdmUoKSxwPy5yZW1vdmUoKSxfPy5yZW1vdmUoKSxoPy5kZXN0cm95KCksdGhpcy5kaWFsb2c/LmRlc3Ryb3koKSx0aGlzLmRpYWxvZz1udWxsfTtyZXR1cm4gby5wcm9taXNlfWRlc3Ryb3lDcmVkZW50aWFscygpe2lmKHRoaXMuY3JlZGVudGlhbHMpe3RoaXMuY3JlZGVudGlhbHMuc2xpY2UoKS5mb3JFYWNoKChlPT57ZS5kZXN0cm95KCl9KSl9dGhpcy5lbWl0KFwiY3JlZGVudGlhbHMtZGVzdHJveVwiKX1lbmFibGVQb3N0TWVzc2FnZUF1dGgoZT1cImh0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0XCIpe3RoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZSYmdGhpcy5fcG9zdE1lc3NhZ2VBdXRoSGFuZGxlLnJlbW92ZSgpLHRoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZT1uKHdpbmRvdyxcIm1lc3NhZ2VcIiwodD0+e2lmKCh0Lm9yaWdpbj09PXRoaXMuX2FwcE9yaWdpbnx8dC5vcmlnaW4uZW5kc1dpdGgoXCIuYXJjZ2lzLmNvbVwiKSkmJlwiYXJjZ2lzOmF1dGg6cmVxdWVzdENyZWRlbnRpYWxcIj09PXQuZGF0YT8udHlwZSl7Y29uc3Qgcj10LnNvdXJjZTt0aGlzLmdldENyZWRlbnRpYWwoZSkudGhlbigoZT0+e3IucG9zdE1lc3NhZ2Uoe3R5cGU6XCJhcmNnaXM6YXV0aDpjcmVkZW50aWFsXCIsY3JlZGVudGlhbDp7ZXhwaXJlczplLmV4cGlyZXMsc2VydmVyOmUuc2VydmVyLHNzbDplLnNzbCx0b2tlbjplLnRva2VuLHVzZXJJZDplLnVzZXJJZH19LHQub3JpZ2luKX0pKS5jYXRjaCgoZT0+e3IucG9zdE1lc3NhZ2Uoe3R5cGU6XCJhcmNnaXM6YXV0aDplcnJvclwiLGVycm9yOntuYW1lOmUubmFtZSxtZXNzYWdlOmUubWVzc2FnZX19LHQub3JpZ2luKX0pKX19KSl9ZGlzYWJsZVBvc3RNZXNzYWdlQXV0aCgpe3RoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZSYmKHRoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZS5yZW1vdmUoKSx0aGlzLl9wb3N0TWVzc2FnZUF1dGhIYW5kbGU9bnVsbCl9X2dldE9BdXRoTG9jYXRpb25QYXJhbXMoKXtsZXQgZT13aW5kb3cubG9jYXRpb24uaGFzaDtpZihlKXtcIiNcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cmluZygxKSk7Y29uc3QgdD1nKGUpO2xldCByPSExO2lmKHQuYWNjZXNzX3Rva2VuJiZ0LmV4cGlyZXNfaW4mJnQuc3RhdGUmJnQuaGFzT3duUHJvcGVydHkoXCJ1c2VybmFtZVwiKSl0cnl7dC5zdGF0ZT1KU09OLnBhcnNlKHQuc3RhdGUpLHQuc3RhdGUucG9ydGFsVXJsJiYodGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcz10LHI9ITApfWNhdGNoe31lbHNlIGlmKHQuZXJyb3ImJnQuZXJyb3JfZGVzY3JpcHRpb24mJihjb25zb2xlLmxvZyhcIklkZW50aXR5TWFuYWdlciBPQXV0aCBFcnJvcjogXCIsdC5lcnJvcixcIiAtIFwiLHQuZXJyb3JfZGVzY3JpcHRpb24pLFwiYWNjZXNzX2RlbmllZFwiPT09dC5lcnJvciYmKHI9ITAsdC5zdGF0ZSkpKXRyeXt0LnN0YXRlPUpTT04ucGFyc2UodC5zdGF0ZSl9Y2F0Y2h7fXImJih3aW5kb3cubG9jYXRpb24uaGFzaD10LnN0YXRlPy5oYXNofHxcIlwiKX1sZXQgdD13aW5kb3cubG9jYXRpb24uc2VhcmNoO2lmKHQpe1wiP1wiPT09dC5jaGFyQXQoMCkmJih0PXQuc3Vic3RyaW5nKDEpKTtjb25zdCBlPWcodCk7bGV0IHI9ITE7aWYoZS5jb2RlJiZlLnN0YXRlKXRyeXtlLnN0YXRlPUpTT04ucGFyc2UoZS5zdGF0ZSksZS5zdGF0ZS5wb3J0YWxVcmwmJmUuc3RhdGUudWlkJiYodGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcz1lLHI9ITApfWNhdGNoe31lbHNlIGlmKGUuZXJyb3ImJmUuZXJyb3JfZGVzY3JpcHRpb24mJihjb25zb2xlLmxvZyhcIklkZW50aXR5TWFuYWdlciBPQXV0aCBFcnJvcjogXCIsZS5lcnJvcixcIiAtIFwiLGUuZXJyb3JfZGVzY3JpcHRpb24pLFwiYWNjZXNzX2RlbmllZFwiPT09ZS5lcnJvciYmKHI9ITAsZS5zdGF0ZSkpKXRyeXtlLnN0YXRlPUpTT04ucGFyc2UoZS5zdGF0ZSl9Y2F0Y2h7fWlmKHIpe2NvbnN0IHQ9ey4uLmV9O1tcImNvZGVcIixcImVycm9yXCIsXCJlcnJvcl9kZXNjcmlwdGlvblwiLFwibWVzc2FnZV9jb2RlXCIsXCJwZXJzaXN0XCIsXCJzdGF0ZVwiXS5mb3JFYWNoKChlPT57ZGVsZXRlIHRbZV19KSk7Y29uc3Qgcj12KHQpLHM9d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKyhyP2A/JHtyfWA6XCJcIikrKGUuc3RhdGU/Lmhhc2h8fFwiXCIpO3dpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh3aW5kb3cuaGlzdG9yeS5zdGF0ZSxcIlwiLHMpfX19X2dldE9BdXRoVG9rZW4oZSx0LHIsaSxvKXtyZXR1cm4gZT1lLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpLHMoYCR7ZX0vc2hhcmluZy9yZXN0L29hdXRoMi90b2tlbmAse2F1dGhNb2RlOlwiYW5vbnltb3VzXCIsbWV0aG9kOlwicG9zdFwiLHF1ZXJ5OmkmJm8/e2dyYW50X3R5cGU6XCJhdXRob3JpemF0aW9uX2NvZGVcIixjb2RlOnQscmVkaXJlY3RfdXJpOmksY2xpZW50X2lkOnIsY29kZV92ZXJpZmllcjpvfTp7Z3JhbnRfdHlwZTpcInJlZnJlc2hfdG9rZW5cIixyZWZyZXNoX3Rva2VuOnQsY2xpZW50X2lkOnJ9fSkudGhlbigoZT0+ZS5kYXRhKSl9X2dldENvZGVDaGFsbGVuZ2UoZSl7aWYoZSYmZ2xvYmFsVGhpcy5pc1NlY3VyZUNvbnRleHQpe2NvbnN0IHQ9KG5ldyBUZXh0RW5jb2RlcikuZW5jb2RlKGUpO3JldHVybiBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIix0KS50aGVuKChlPT5tKG5ldyBVaW50OEFycmF5KGUpKSkpfXJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCl9X3BhZ2VTaG93SGFuZGxlcihlKXtpZihlLnBlcnNpc3RlZCYmdGhpcy5pc0J1c3koKSYmdGhpcy5fcmVqZWN0T25QZXJzaXN0ZWRQYWdlU2hvdyl7Y29uc3QgZT1uZXcgaShcImlkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkXCIsXCJBQk9SVEVEXCIpO3RoaXMuX2VycmJhY2tGdW5jKGUpfX1fZmluZENyZWRlbnRpYWwoZSx0KXtsZXQgcixzLGksbyxuPS0xO2NvbnN0IGE9dCYmdC50b2tlbixoPXQmJnQucmVzb3VyY2UsbD10aGlzLl9pc1NlcnZlclJzcmMoZSk/XCJzZXJ2ZXJcIjpcInBvcnRhbFwiLGM9dGhpcy5jcmVkZW50aWFscy5maWx0ZXIoKHQ9PnRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0LnNlcnZlcixlKSYmdC5zY29wZT09PWwpKTtpZihlPWh8fGUsYy5sZW5ndGgpaWYoMT09PWMubGVuZ3RoKXtpZihyPWNbMF0saT10aGlzLmZpbmRTZXJ2ZXJJbmZvKHIuc2VydmVyKSxzPWkmJmkub3duaW5nU3lzdGVtVXJsLG89cz90aGlzLmZpbmRDcmVkZW50aWFsKHMsci51c2VySWQpOnZvaWQgMCxuPXRoaXMuX2dldElkZW50aWNhbFN2Y0lkeChlLHIpLCFhKXJldHVybi0xPT09biYmci5yZXNvdXJjZXMucHVzaChlKSx0aGlzLl9hZGRSZXNvdXJjZShlLG8pLHI7LTEhPT1uJiYoci5yZXNvdXJjZXMuc3BsaWNlKG4sMSksdGhpcy5fcmVtb3ZlUmVzb3VyY2UoZSxvKSl9ZWxzZXtsZXQgdCxyO2lmKGMuc29tZSgoYT0+KHI9dGhpcy5fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsYSksLTEhPT1yJiYodD1hLGk9dGhpcy5maW5kU2VydmVySW5mbyh0LnNlcnZlcikscz1pJiZpLm93bmluZ1N5c3RlbVVybCxvPXM/dGhpcy5maW5kQ3JlZGVudGlhbChzLHQudXNlcklkKTp2b2lkIDAsbj1yLCEwKSkpKSxhKXQmJih0LnJlc291cmNlcy5zcGxpY2UobiwxKSx0aGlzLl9yZW1vdmVSZXNvdXJjZShlLG8pKTtlbHNlIGlmKHQpcmV0dXJuIHRoaXMuX2FkZFJlc291cmNlKGUsbyksdH19X2ZpbmRPQXV0aEluZm8oZSl7bGV0IHQ9dGhpcy5maW5kT0F1dGhJbmZvKGUpO2lmKCF0KWZvcihjb25zdCByIG9mIHRoaXMub0F1dGhJbmZvcylpZih0aGlzLl9pc0lkUHJvdmlkZXIoci5wb3J0YWxVcmwsZSkpe3Q9cjticmVha31yZXR1cm4gdH1fYWRkUmVzb3VyY2UoZSx0KXt0JiYtMT09PXRoaXMuX2dldElkZW50aWNhbFN2Y0lkeChlLHQpJiZ0LnJlc291cmNlcy5wdXNoKGUpfV9yZW1vdmVSZXNvdXJjZShlLHQpe2xldCByPS0xO3QmJihyPXRoaXMuX2dldElkZW50aWNhbFN2Y0lkeChlLHQpLHI+LTEmJnQucmVzb3VyY2VzLnNwbGljZShyLDEpKX1fdXNlUHJveHkoZSx0KXtyZXR1cm4gdCYmdC5pc0FkbWluJiYhXyhlLmFkbWluVG9rZW5TZXJ2aWNlVXJsLHRoaXMuX2FwcE9yaWdpbil8fCF0aGlzLl9pc1BvcnRhbERvbWFpbihlLnRva2VuU2VydmljZVVybCkmJlwiMTAuMVwiPT09U3RyaW5nKGUuY3VycmVudFZlcnNpb24pJiYhXyhlLnRva2VuU2VydmljZVVybCx0aGlzLl9hcHBPcmlnaW4pfV9nZXRPcmlnaW4oZSl7Y29uc3QgdD1uZXcgZihlKTtyZXR1cm4gdC5zY2hlbWUrXCI6Ly9cIit0Lmhvc3QrKG51bGwhPXQucG9ydD9cIjpcIit0LnBvcnQ6XCJcIil9X2dldFNlcnZlckluc3RhbmNlUm9vdChlKXtjb25zdCB0PWUudG9Mb3dlckNhc2UoKTtsZXQgcj10LmluZGV4T2YodGhpcy5fYWdzUmVzdCk7cmV0dXJuLTE9PT1yJiZ0aGlzLl9pc0FkbWluUmVzb3VyY2UoZSkmJihyPXRoaXMuX2Fnc0FkbWluLnRlc3QoZSk/ZS5yZXBsYWNlKHRoaXMuX2Fnc0FkbWluLFwiJDFcIikubGVuZ3RoOmUuc2VhcmNoKHRoaXMuX2FkbWluU3ZjcykpLC0xIT09cnx8Uih0KXx8KHI9dC5pbmRleE9mKFwiL3NoYXJpbmdcIikpLC0xPT09ciYmXCIvXCI9PT10LnN1YnN0cigtMSkmJihyPXQubGVuZ3RoLTEpLHI+LTE/ZS5zdWJzdHJpbmcoMCxyKTplfV9oYXNTYW1lU2VydmVySW5zdGFuY2UoZSx0KXtyZXR1cm5cIi9cIj09PWUuc3Vic3RyKC0xKSYmKGU9ZS5zbGljZSgwLC0xKSksZT1lLnRvTG93ZXJDYXNlKCksdD10aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QodCkudG9Mb3dlckNhc2UoKSxlPXRoaXMuX25vcm1hbGl6ZUFHT0xvcmdEb21haW4oZSksdD10aGlzLl9ub3JtYWxpemVBR09Mb3JnRG9tYWluKHQpLChlPWUuc3Vic3RyKGUuaW5kZXhPZihcIjpcIikpKT09PSh0PXQuc3Vic3RyKHQuaW5kZXhPZihcIjpcIikpKX1fbm9ybWFsaXplQUdPTG9yZ0RvbWFpbihlKXtjb25zdCB0PS9eaHR0cHM/OlxcL1xcLyg/OmNkbnxbYS16XFxkLV0rXFwubWFwcylcXC5hcmNnaXNcXC5jb20vaSxyPS9eaHR0cHM/OlxcL1xcLyg/OmNkbmRldnxbYS16XFxkLV0rXFwubWFwc2RldmV4dClcXC5hcmNnaXNcXC5jb20vaSxzPS9eaHR0cHM/OlxcL1xcLyg/OmNkbnFhfFthLXpcXGQtXStcXC5tYXBzcWEpXFwuYXJjZ2lzXFwuY29tL2k7cmV0dXJuIHQudGVzdChlKT9lPWUucmVwbGFjZSh0LFwiaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbVwiKTpyLnRlc3QoZSk/ZT1lLnJlcGxhY2UocixcImh0dHBzOi8vZGV2ZXh0LmFyY2dpcy5jb21cIik6cy50ZXN0KGUpJiYoZT1lLnJlcGxhY2UocyxcImh0dHBzOi8vcWFleHQuYXJjZ2lzLmNvbVwiKSksZX1fc2FuaXRpemVVcmwoZSl7Y29uc3Qgcj0odC5yZXF1ZXN0LnByb3h5VXJsfHxcIlwiKS50b0xvd2VyQ2FzZSgpLHM9cj9lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihyK1wiP1wiKTotMTtyZXR1cm4tMSE9PXMmJihlPWUuc3Vic3RyaW5nKHMrci5sZW5ndGgrMSkpLGU9UyhlKSxwKGUpLnBhdGh9X2lzUkVTVFNlcnZpY2UoZSl7cmV0dXJuIGUuaW5jbHVkZXModGhpcy5fYWdzUmVzdCl9X2lzQWRtaW5SZXNvdXJjZShlKXtyZXR1cm4gdGhpcy5fYWdzQWRtaW4udGVzdChlKXx8dGhpcy5fYWRtaW5TdmNzLnRlc3QoZSl9X2lzU2VydmVyUnNyYyhlKXtyZXR1cm4gdGhpcy5faXNSRVNUU2VydmljZShlKXx8dGhpcy5faXNBZG1pblJlc291cmNlKGUpfV9pc0lkZW50aWNhbFNlcnZpY2UoZSx0KXtsZXQgcj0hMTtpZih0aGlzLl9pc1JFU1RTZXJ2aWNlKGUpJiZ0aGlzLl9pc1JFU1RTZXJ2aWNlKHQpKXtjb25zdCBzPXRoaXMuX2dldFN1ZmZpeChlKS50b0xvd2VyQ2FzZSgpLGk9dGhpcy5fZ2V0U3VmZml4KHQpLnRvTG93ZXJDYXNlKCk7aWYocj1zPT09aSwhcil7Y29uc3QgZT0vKC4qKVxcLyhNYXBTZXJ2ZXJ8RmVhdHVyZVNlcnZlcnxVdGlsaXR5TmV0d29ya1NlcnZlcikuKi9naTtyPXMucmVwbGFjZUFsbChlLFwiJDFcIik9PT1pLnJlcGxhY2VBbGwoZSxcIiQxXCIpfX1lbHNlIHRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKSYmdGhpcy5faXNBZG1pblJlc291cmNlKHQpP3I9ITA6dGhpcy5faXNTZXJ2ZXJSc3JjKGUpfHx0aGlzLl9pc1NlcnZlclJzcmModCl8fCF0aGlzLl9pc1BvcnRhbERvbWFpbihlKXx8KHI9ITApO3JldHVybiByfV9pc1BvcnRhbERvbWFpbihlKXtjb25zdCByPW5ldyBmKGUudG9Mb3dlckNhc2UoKSkscz10aGlzLl9wb3J0YWxDb25maWc7bGV0IGk9dGhpcy5fZ3dEb21haW5zLnNvbWUoKGU9PmUucmVnZXgudGVzdChyLnVyaSkpKTtyZXR1cm4haSYmcyYmKGk9dGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdChzLnJlc3RCYXNlVXJsKSxyLnVyaSkpLGl8fHQucG9ydGFsVXJsJiYoaT1fKHIsdC5wb3J0YWxVcmwsITApKSxpfHwoaT10aGlzLl9wb3J0YWxzLnNvbWUoKGU9PnRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZShlLHIudXJpKSkpKSxpPWl8fHRoaXMuX2Fnc1BvcnRhbC50ZXN0KHIucGF0aCksaX1faXNJZFByb3ZpZGVyKGUsdCl7bGV0IHI9LTEscz0tMTt0aGlzLl9nd0RvbWFpbnMuZm9yRWFjaCgoKGksbyk9PnstMT09PXImJmkucmVnZXgudGVzdChlKSYmKHI9byksLTE9PT1zJiZpLnJlZ2V4LnRlc3QodCkmJihzPW8pfSkpO2xldCBpPSExO2lmKHI+LTEmJnM+LTEmJigwPT09cnx8ND09PXI/MCE9PXMmJjQhPT1zfHwoaT0hMCk6MT09PXI/MSE9PXMmJjIhPT1zfHwoaT0hMCk6Mj09PXI/Mj09PXMmJihpPSEwKTozPT09ciYmMz09PXMmJihpPSEwKSksIWkpe2NvbnN0IHI9dGhpcy5maW5kU2VydmVySW5mbyh0KSxzPXImJnIub3duaW5nU3lzdGVtVXJsO3MmJmIocikmJnRoaXMuX2lzUG9ydGFsRG9tYWluKHMpJiZ0aGlzLl9pc0lkUHJvdmlkZXIoZSxzKSYmKGk9ITApfXJldHVybiBpfV9nZXRJZGVudGljYWxTdmNJZHgoZSx0KXtsZXQgcj0tMTtmb3IobGV0IHM9MDtzPHQucmVzb3VyY2VzLmxlbmd0aDtzKyspe2NvbnN0IGk9dC5yZXNvdXJjZXNbc107aWYodGhpcy5faXNJZGVudGljYWxTZXJ2aWNlKGUsaSkpe3I9czticmVha319cmV0dXJuIHJ9X2dldFN1ZmZpeChlKXtyZXR1cm4gZS5yZXBsYWNlKHRoaXMuX3JlZ2V4U0RpclVybCxcIlwiKS5yZXBsYWNlKHRoaXMuX3JlZ2V4U2VydmVyVHlwZSxcIiQxXCIpfV9nZXRUb2tlblN2Y1VybChlKXtsZXQgdCxyLGk7aWYodGhpcy5faXNSRVNUU2VydmljZShlKXx8dGhpcy5faXNBZG1pblJlc291cmNlKGUpKXtjb25zdCBpPXRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdChlKTtyZXR1cm4gdD1pK1wiL2FkbWluL2dlbmVyYXRlVG9rZW5cIixyPXMoZT1pK1wiL3Jlc3QvaW5mb1wiLHtxdWVyeTp7ZjpcImpzb25cIn19KS50aGVuKChlPT5lLmRhdGEpKSx7YWRtaW5Vcmw6dCxwcm9taXNlOnJ9fWlmKHRoaXMuX2lzUG9ydGFsRG9tYWluKGUpKXtsZXQgdD1cIlwiO2lmKHRoaXMuX2d3RG9tYWlucy5zb21lKChyPT4oci5yZWdleC50ZXN0KGUpJiYodD1yLnRva2VuU2VydmljZVVybCksISF0KSkpLHR8fHRoaXMuX3BvcnRhbHMuc29tZSgocj0+KHRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZShyLGUpJiYodD1yK3RoaXMuX2d3VG9rZW5VcmwpLCEhdCkpKSx0fHwoaT1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIi9zaGFyaW5nXCIpLC0xIT09aSYmKHQ9ZS5zdWJzdHJpbmcoMCxpKSt0aGlzLl9nd1Rva2VuVXJsKSksdHx8KHQ9dGhpcy5fZ2V0T3JpZ2luKGUpK3RoaXMuX2d3VG9rZW5VcmwpLHQpe2NvbnN0IHI9bmV3IGYoZSkucG9ydDsvXmh0dHA6XFwvXFwvL2kudGVzdChlKSYmXCI3MDgwXCI9PT1yJiYodD10LnJlcGxhY2UoLzo3MDgwL2ksXCI6NzQ0M1wiKSksdD10LnJlcGxhY2UoL2h0dHA6L2ksXCJodHRwczpcIil9cmV0dXJuIHR9aWYoZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicHJlbWl1bS5hcmNnaXNvbmxpbmUuY29tXCIpKXJldHVyblwiaHR0cHM6Ly9wcmVtaXVtLmFyY2dpc29ubGluZS5jb20vc2VydmVyL3Rva2Vuc1wifV9wcm9jZXNzT0F1dGhSZXNwb25zZVBhcmFtcyhlLHQscil7Y29uc3Qgcz10Ll9vQXV0aENyZWQ7aWYoZS5jb2RlKXtjb25zdCBpPXMuY29kZVZlcmlmaWVyO3JldHVybiBzLmNvZGVWZXJpZmllcj1udWxsLHMuc3RhdGVVSUQ9bnVsbCxzLnNhdmUoKSx0aGlzLl9nZXRPQXV0aFRva2VuKHIuc2VydmVyLGUuY29kZSx0LmFwcElkLHRoaXMuX2dldFJlZGlyZWN0VVJJKHQsITApLGkpLnRoZW4oKGk9Pntjb25zdCBvPW5ldyBMKHt1c2VySWQ6aS51c2VybmFtZSxzZXJ2ZXI6ci5zZXJ2ZXIsdG9rZW46aS5hY2Nlc3NfdG9rZW4sZXhwaXJlczpEYXRlLm5vdygpKzFlMyppLmV4cGlyZXNfaW4sc3NsOmkuc3NsLG9BdXRoU3RhdGU6ZS5zdGF0ZSxfb0F1dGhDcmVkOnN9KTtyZXR1cm4gdC51c2VySWQ9by51c2VySWQscy5zdG9yYWdlPWkucGVyc2lzdD9xOmoscy5yZWZyZXNoVG9rZW49aS5yZWZyZXNoX3Rva2VuLHMudG9rZW49bnVsbCxzLmV4cGlyZXM9aS5yZWZyZXNoX3Rva2VuX2V4cGlyZXNfaW4/RGF0ZS5ub3coKSsxZTMqaS5yZWZyZXNoX3Rva2VuX2V4cGlyZXNfaW46bnVsbCxzLnVzZXJJZD1vLnVzZXJJZCxzLnNzbD1vLnNzbCxzLnNhdmUoKSxvfSkpfWNvbnN0IGk9bmV3IEwoe3VzZXJJZDplLnVzZXJuYW1lLHNlcnZlcjpyLnNlcnZlcix0b2tlbjplLmFjY2Vzc190b2tlbixleHBpcmVzOkRhdGUubm93KCkrMWUzKk51bWJlcihlLmV4cGlyZXNfaW4pLHNzbDpcInRydWVcIj09PWUuc3NsLG9BdXRoU3RhdGU6ZS5zdGF0ZSxfb0F1dGhDcmVkOnN9KTtyZXR1cm4gdC51c2VySWQ9aS51c2VySWQscy5zdG9yYWdlPWUucGVyc2lzdD9xOmoscy5yZWZyZXNoVG9rZW49bnVsbCxzLnRva2VuPWkudG9rZW4scy5leHBpcmVzPWkuZXhwaXJlcyxzLnVzZXJJZD1pLnVzZXJJZCxzLnNzbD1pLnNzbCxzLnNhdmUoKSxQcm9taXNlLnJlc29sdmUoaSl9X3Byb2Nlc3NPQXV0aFBvcHVwUGFyYW1zKGUpe2NvbnN0IHQ9dGhpcy5fb0F1dGhEZmQ7aWYodGhpcy5fb0F1dGhEZmQ9bnVsbCx0KWlmKGNsZWFySW50ZXJ2YWwodGhpcy5fb0F1dGhJbnRlcnZhbElkKSx0aGlzLl9vQXV0aE9uUG9wdXBIYW5kbGU/LnJlbW92ZSgpLGUuZXJyb3Ipe2NvbnN0IHI9XCJhY2Nlc3NfZGVuaWVkXCI9PT1lLmVycm9yLHM9bmV3IGkocj9cImlkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkXCI6XCJpZGVudGl0eS1tYW5hZ2VyOmF1dGhlbnRpY2F0aW9uLWZhaWxlZFwiLHI/XCJBQk9SVEVEXCI6XCJPQXV0aDogXCIrZS5lcnJvcitcIiAtIFwiK2UuZXJyb3JfZGVzY3JpcHRpb24pO3QucmVqZWN0KHMpfWVsc2UgdGhpcy5fcHJvY2Vzc09BdXRoUmVzcG9uc2VQYXJhbXMoZSx0Lm9pbmZvXyx0LnNpbmZvXykudGhlbigoZT0+e3QucmVzb2x2ZShlKX0pKS5jYXRjaCgoZT0+e3QucmVqZWN0KGUpfSkpfV9zZXRPQXV0aFJlc3BvbnNlUXVlcnlTdHJpbmcoZSl7ZSYmKFwiP1wiPT09ZS5jaGFyQXQoMCkmJihlPWUuc3Vic3RyaW5nKDEpKSx0aGlzLl9wcm9jZXNzT0F1dGhQb3B1cFBhcmFtcyhnKGUpKSl9X2V4Y2hhbmdlVG9rZW4oZSx0LHIpe3JldHVybiBzKGAke2V9L3NoYXJpbmcvcmVzdC9vYXV0aDIvZXhjaGFuZ2VUb2tlbmAse2F1dGhNb2RlOlwiYW5vbnltb3VzXCIsbWV0aG9kOlwicG9zdFwiLHF1ZXJ5OntmOlwianNvblwiLGNsaWVudF9pZDp0LHRva2VuOnJ9fSkudGhlbigoZT0+ZS5kYXRhLnRva2VuKSl9X2dldFBsYXRmb3JtU2VsZihlLHQpe3JldHVybiBlPWUucmVwbGFjZSgvXmh0dHA6L2ksXCJodHRwczpcIikscyhgJHtlfS9zaGFyaW5nL3Jlc3Qvb2F1dGgyL3BsYXRmb3JtU2VsZmAse2F1dGhNb2RlOlwiYW5vbnltb3VzXCIsaGVhZGVyczp7XCJYLUVzcmktQXV0aC1DbGllbnQtSWRcIjp0LFwiWC1Fc3JpLUF1dGgtUmVkaXJlY3QtVXJpXCI6d2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIy4qJC8sXCJcIil9LG1ldGhvZDpcInBvc3RcIixxdWVyeTp7ZjpcImpzb25cIixleHBpcmF0aW9uOjMwfSx3aXRoQ3JlZGVudGlhbHM6ITB9KS50aGVuKChlPT5lLmRhdGEpKX1fZ2V0UG9ydGFsU2VsZihlLHQpe2xldCByO2lmKHRoaXMuX2d3RG9tYWlucy5zb21lKCh0PT4odC5yZWdleC50ZXN0KGUpJiYocj10LmN1c3RvbUJhc2VVcmwpLCEhcikpKSxyKXJldHVybiBQcm9taXNlLnJlc29sdmUoe2FsbFNTTDohMCxjdXJyZW50VmVyc2lvbjpcIjguNFwiLGN1c3RvbUJhc2VVcmw6cixwb3J0YWxNb2RlOlwibXVsdGl0ZW5hbnRcIixzdXBwb3J0c09BdXRoOiEwfSk7dGhpcy5fYXBwT3JpZ2luLnN0YXJ0c1dpdGgoXCJodHRwczpcIik/ZT1lLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpLnJlcGxhY2UoLzo3MDgwL2ksXCI6NzQ0M1wiKTovXmh0dHA6L2kudGVzdCh0KSYmKGU9ZS5yZXBsYWNlKC9eaHR0cHM6L2ksXCJodHRwOlwiKS5yZXBsYWNlKC86NzQ0My9pLFwiOjcwODBcIikpO3JldHVybiBzKGUse3F1ZXJ5OntmOlwianNvblwifSxhdXRoTW9kZTpcImFub255bW91c1wiLHdpdGhDcmVkZW50aWFsczohMH0pLnRoZW4oKGU9PmUuZGF0YSkpfV9kb1BvcnRhbFNpZ25JbihlKXtjb25zdCB0PXRoaXMuX3BvcnRhbENvbmZpZyxyPXdpbmRvdy5sb2NhdGlvbi5ocmVmLHM9dGhpcy5maW5kU2VydmVySW5mbyhlKTtyZXR1cm4hKCF0JiYhdGhpcy5faXNQb3J0YWxEb21haW4ocil8fCEocz9zLmhhc1BvcnRhbHx8cy5vd25pbmdTeXN0ZW1VcmwmJnRoaXMuX2lzUG9ydGFsRG9tYWluKHMub3duaW5nU3lzdGVtVXJsKTp0aGlzLl9pc1BvcnRhbERvbWFpbihlKSl8fCEodGhpcy5faXNJZFByb3ZpZGVyKHIsZSl8fHQmJih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KHQucmVzdEJhc2VVcmwpLGUpfHx0aGlzLl9pc0lkUHJvdmlkZXIodC5yZXN0QmFzZVVybCxlKSl8fF8ocixlLCEwKSkpfV9jaGVja1Byb3RvY29sKGUsdCxyLHMpe2xldCBvPSEwO2NvbnN0IG49cz90LmFkbWluVG9rZW5TZXJ2aWNlVXJsOnQudG9rZW5TZXJ2aWNlVXJsO2lmKG4udHJpbSgpLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcImh0dHBzOlwiKSYmIXRoaXMuX2FwcE9yaWdpbi5zdGFydHNXaXRoKFwiaHR0cHM6XCIpJiZ3KG4pJiYobz0hIXRoaXMuX3Byb3RvY29sRnVuYyYmISF0aGlzLl9wcm90b2NvbEZ1bmMoe3Jlc291cmNlVXJsOmUsc2VydmVySW5mbzp0fSksIW8pKXtyKG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjphYm9ydGVkXCIsXCJBYm9ydGVkIHRoZSBTaWduLUluIHByb2Nlc3MgdG8gYXZvaWQgc2VuZGluZyBwYXNzd29yZCBvdmVyIGluc2VjdXJlIGNvbm5lY3Rpb24uXCIpKX1yZXR1cm4gb31fZW5xdWV1ZShlLHQscixzLGksbyl7cmV0dXJuIHN8fChzPWwoKSkscy5yZXNVcmxfPWUscy5zaW5mb189dCxzLm9wdGlvbnNfPXIscy5hZG1pbl89aSxzLnJlZnJlc2hfPW8sdGhpcy5fYnVzeT90aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KGUpLHRoaXMuX2J1c3kucmVzVXJsXyk/KHRoaXMuX29BdXRoRGZkJiZ0aGlzLl9vQXV0aERmZC5vQXV0aFdpbl8mJnRoaXMuX29BdXRoRGZkLm9BdXRoV2luXy5mb2N1cygpLHRoaXMuX3NvUmVxcy5wdXNoKHMpKTp0aGlzLl94b1JlcXMucHVzaChzKTp0aGlzLl9kb1NpZ25JbihzKSxzLnByb21pc2V9X2RvU2lnbkluKGUpe3RoaXMuX2J1c3k9ZSx0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93PSExO2NvbnN0IHQ9dD0+e2NvbnN0IHI9ZS5vcHRpb25zXyYmZS5vcHRpb25zXy5yZXNvdXJjZSxzPWUucmVzVXJsXyxpPWUucmVmcmVzaF87bGV0IG89ITE7dGhpcy5jcmVkZW50aWFscy5pbmNsdWRlcyh0KXx8KGkmJnRoaXMuY3JlZGVudGlhbHMuaW5jbHVkZXMoaSk/KGkudXNlcklkPXQudXNlcklkLGkudG9rZW49dC50b2tlbixpLmV4cGlyZXM9dC5leHBpcmVzLGkudmFsaWRpdHk9dC52YWxpZGl0eSxpLnNzbD10LnNzbCxpLmNyZWF0aW9uVGltZT10LmNyZWF0aW9uVGltZSxvPSEwLHQ9aSk6dGhpcy5jcmVkZW50aWFscy5wdXNoKHQpKSx0LnJlc291cmNlc3x8KHQucmVzb3VyY2VzPVtdKSx0LnJlc291cmNlcy5pbmNsdWRlcyhyfHxzKXx8dC5yZXNvdXJjZXMucHVzaChyfHxzKSx0LnNjb3BlPXRoaXMuX2lzU2VydmVyUnNyYyhzKT9cInNlcnZlclwiOlwicG9ydGFsXCIsdC5lbWl0VG9rZW5DaGFuZ2UoKTtjb25zdCBuPXRoaXMuX3NvUmVxcyxhPXt9O3RoaXMuX3NvUmVxcz1bXSxuLmZvckVhY2goKGU9PntpZighdGhpcy5faXNJZGVudGljYWxTZXJ2aWNlKHMsZS5yZXNVcmxfKSl7Y29uc3Qgcj10aGlzLl9nZXRTdWZmaXgoZS5yZXNVcmxfKTthW3JdfHwoYVtyXT0hMCx0LnJlc291cmNlcy5wdXNoKGUucmVzVXJsXykpfX0pKSxlLnJlc29sdmUodCksbi5mb3JFYWNoKChlPT57dGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdChzKSxlLnJlc1VybF8pP2UucmVzb2x2ZSh0KTp0aGlzLl9zb1JlcXMucHVzaChlKX0pKSx0aGlzLl9idXN5PWUucmVzVXJsXz1lLnNpbmZvXz1lLnJlZnJlc2hfPW51bGwsb3x8dGhpcy5lbWl0KFwiY3JlZGVudGlhbC1jcmVhdGVcIix7Y3JlZGVudGlhbDp0fSksdGhpcy5fc29SZXFzLmxlbmd0aD90aGlzLl9kb1NpZ25Jbih0aGlzLl9zb1JlcXMuc2hpZnQoKSk6dGhpcy5feG9SZXFzLmxlbmd0aCYmdGhpcy5fZG9TaWduSW4odGhpcy5feG9SZXFzLnNoaWZ0KCkpfSxyPXQ9PntlLnJlamVjdCh0KSx0aGlzLl9idXN5PWUucmVzVXJsXz1lLnNpbmZvXz1lLnJlZnJlc2hfPW51bGwsdGhpcy5fc29SZXFzLmxlbmd0aD90aGlzLl9kb1NpZ25Jbih0aGlzLl9zb1JlcXMuc2hpZnQoKSk6dGhpcy5feG9SZXFzLmxlbmd0aCYmdGhpcy5fZG9TaWduSW4odGhpcy5feG9SZXFzLnNoaWZ0KCkpfSxzPShvLGEsaCxsKT0+e2NvbnN0IGQ9ZS5zaW5mb18sdT0hZS5vcHRpb25zX3x8ITEhPT1lLm9wdGlvbnNfLnByb21wdCxwPWQuaGFzUG9ydGFsJiZ0aGlzLl9maW5kT0F1dGhJbmZvKGUucmVzVXJsXyk7bGV0IGYsZztpZihvKXQobmV3IEwoe3VzZXJJZDpvLHNlcnZlcjpkLnNlcnZlcix0b2tlbjpofHxudWxsLGV4cGlyZXM6bnVsbCE9bD9OdW1iZXIobCk6bnVsbCxzc2w6ISFhfSkpO2Vsc2UgaWYod2luZG93IT09d2luZG93LnBhcmVudCYmdGhpcy5fYXBwVXJsT2JqLnF1ZXJ5Py5bXCJhcmNnaXMtYXV0aC1vcmlnaW5cIl0mJnRoaXMuX2FwcFVybE9iai5xdWVyeT8uW1wiYXJjZ2lzLWF1dGgtcG9ydGFsXCJdJiZ0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KHRoaXMuX2FwcFVybE9iai5xdWVyeVtcImFyY2dpcy1hdXRoLXBvcnRhbFwiXSksZS5yZXNVcmxfKSl7d2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7dHlwZTpcImFyY2dpczphdXRoOnJlcXVlc3RDcmVkZW50aWFsXCJ9LHRoaXMuX2FwcFVybE9iai5xdWVyeVtcImFyY2dpcy1hdXRoLW9yaWdpblwiXSk7Y29uc3Qgcz1uKHdpbmRvdyxcIm1lc3NhZ2VcIiwoZT0+e2Uuc291cmNlPT09d2luZG93LnBhcmVudCYmZS5kYXRhJiYoXCJhcmNnaXM6YXV0aDpjcmVkZW50aWFsXCI9PT1lLmRhdGEudHlwZT8ocy5yZW1vdmUoKSxlLmRhdGEuY3JlZGVudGlhbC5leHBpcmVzPERhdGUubm93KCk/cihuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6Y3JlZGVudGlhbC1yZXF1ZXN0LWZhaWxlZFwiLFwiUGFyZW50IGFwcGxpY2F0aW9uJ3MgdG9rZW4gaGFzIGV4cGlyZWQuXCIpKTp0KG5ldyBMKGUuZGF0YS5jcmVkZW50aWFsKSkpOlwiYXJjZ2lzOmF1dGg6ZXJyb3JcIj09PWUuZGF0YS50eXBlJiYocy5yZW1vdmUoKSxcInRva2VuRXhwaXJlZEVycm9yXCI9PT1lLmRhdGEuZXJyb3IubmFtZT9yKG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpjcmVkZW50aWFsLXJlcXVlc3QtZmFpbGVkXCIsXCJQYXJlbnQgYXBwbGljYXRpb24ncyB0b2tlbiBoYXMgZXhwaXJlZC5cIikpOnIoaS5mcm9tSlNPTihlLmRhdGEuZXJyb3IpKSkpfSkpO2MoZS5vcHRpb25zXz8uc2lnbmFsLCgoKT0+e3MucmVtb3ZlKCl9KSl9ZWxzZSBpZihwKXtsZXQgbz1wLl9vQXV0aENyZWQ7aWYoIW8pe2NvbnN0IGU9bmV3IHgocCxxKSx0PW5ldyB4KHAsaik7ZS5pc1ZhbGlkKCkmJnQuaXNWYWxpZCgpP2UuZXhwaXJlcz50LmV4cGlyZXM/KG89ZSx0LmRlc3Ryb3koKSk6KG89dCxlLmRlc3Ryb3koKSk6bz1lLmlzVmFsaWQoKT9lOnQscC5fb0F1dGhDcmVkPW99aWYoby5pc1ZhbGlkKCkpe2Y9bmV3IEwoe3VzZXJJZDpvLnVzZXJJZCxzZXJ2ZXI6ZC5zZXJ2ZXIsdG9rZW46by50b2tlbixleHBpcmVzOm8uZXhwaXJlcyxzc2w6by5zc2wsX29BdXRoQ3JlZDpvfSk7Y29uc3Qgcj1wLmFwcElkIT09by5hcHBJZCYmdGhpcy5fZG9Qb3J0YWxTaWduSW4oZS5yZXNVcmxfKTtyfHxvLnJlZnJlc2hUb2tlbj8oZS5fcGVuZGluZ0RmZD1vLnJlZnJlc2hUb2tlbj90aGlzLl9nZXRPQXV0aFRva2VuKGQuc2VydmVyLG8ucmVmcmVzaFRva2VuLG8uYXBwSWQpLnRoZW4oKGU9PihmLmV4cGlyZXM9RGF0ZS5ub3coKSsxZTMqZS5leHBpcmVzX2luLGYudG9rZW49ZS5hY2Nlc3NfdG9rZW4sZikpKTpQcm9taXNlLnJlc29sdmUoZiksZS5fcGVuZGluZ0RmZC50aGVuKChlPT5yP3RoaXMuX2V4Y2hhbmdlVG9rZW4oZS5zZXJ2ZXIscC5hcHBJZCxlLnRva2VuKS50aGVuKCh0PT4oZS50b2tlbj10LGUpKSkuY2F0Y2goKCgpPT5lKSk6ZSkpLnRoZW4oKGU9Pnt0KGUpfSkpLmNhdGNoKCgoKT0+e28/LmRlc3Ryb3koKSxzKCl9KSkpOnQoZil9ZWxzZSBpZih0aGlzLl9vQXV0aExvY2F0aW9uUGFyYW1zJiZ0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UocC5wb3J0YWxVcmwsdGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcy5zdGF0ZS5wb3J0YWxVcmwpJiYodGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcy5hY2Nlc3NfdG9rZW58fHRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXMuY29kZSYmdGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcy5zdGF0ZS51aWQ9PT1vLnN0YXRlVUlEJiZvLmNvZGVWZXJpZmllcikpe2NvbnN0IHM9dGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtczt0aGlzLl9vQXV0aExvY2F0aW9uUGFyYW1zPW51bGwsZS5fcGVuZGluZ0RmZD10aGlzLl9wcm9jZXNzT0F1dGhSZXNwb25zZVBhcmFtcyhzLHAsZCkudGhlbigoZT0+e3QoZSl9KSkuY2F0Y2gocil9ZWxzZXtjb25zdCBzPSgpPT57dT9lLl9wZW5kaW5nRGZkPXRoaXMub0F1dGhTaWduSW4oZS5yZXNVcmxfLGQscCxlLm9wdGlvbnNfKS50aGVuKHQscik6KGc9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOm5vdC1hdXRoZW50aWNhdGVkXCIsXCJVc2VyIGlzIG5vdCBzaWduZWQgaW4uXCIpLHIoZykpfTt0aGlzLl9kb1BvcnRhbFNpZ25JbihlLnJlc1VybF8pP2UuX3BlbmRpbmdEZmQ9dGhpcy5fZ2V0UGxhdGZvcm1TZWxmKGQuc2VydmVyLHAuYXBwSWQpLnRoZW4oKGU9PntfKGUucG9ydGFsVXJsLHRoaXMuX2FwcE9yaWdpbiwhMCk/KGY9bmV3IEwoe3VzZXJJZDplLnVzZXJuYW1lLHNlcnZlcjpkLnNlcnZlcixleHBpcmVzOkRhdGUubm93KCkrMWUzKmUuZXhwaXJlc19pbix0b2tlbjplLnRva2VufSksdChmKSk6cygpfSkpLmNhdGNoKHMpOnMoKX19ZWxzZSBpZih1KXtpZih0aGlzLl9jaGVja1Byb3RvY29sKGUucmVzVXJsXyxkLHIsZS5hZG1pbl8pKXtsZXQgcz1lLm9wdGlvbnNfO2UuYWRtaW5fJiYocz1zfHx7fSxzLmlzQWRtaW49ITApLGUuX3BlbmRpbmdEZmQ9dGhpcy5zaWduSW4oZS5yZXNVcmxfLGQscykudGhlbih0LHIpfX1lbHNlIGc9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOm5vdC1hdXRoZW50aWNhdGVkXCIsXCJVc2VyIGlzIG5vdCBzaWduZWQgaW4uXCIpLHIoZyl9LG89KCk9Pntjb25zdCBzPWUuc2luZm9fLGk9cy5vd25pbmdTeXN0ZW1Vcmwsbz1lLm9wdGlvbnNfO2xldCBuLGEsaCxsO2lmKG8mJihuPW8udG9rZW4sYT1vLmVycm9yLGg9by5wcm9tcHQpLGw9dGhpcy5fZmluZENyZWRlbnRpYWwoaSx7dG9rZW46bixyZXNvdXJjZTplLnJlc1VybF99KSwhbClmb3IoY29uc3QgZSBvZiB0aGlzLmNyZWRlbnRpYWxzKWlmKHRoaXMuX2lzSWRQcm92aWRlcihpLGUuc2VydmVyKSl7bD1lO2JyZWFrfWlmKGwpe2NvbnN0IGk9dGhpcy5maW5kQ3JlZGVudGlhbChlLnJlc1VybF8sbC51c2VySWQpO2lmKGkpdChpKTtlbHNlIGlmKEQocyx0aGlzLl9sZWdhY3lGZWQpKXtjb25zdCBlPWwudG9KU09OKCk7ZS5zZXJ2ZXI9cy5zZXJ2ZXIsZS5yZXNvdXJjZXM9bnVsbCx0KG5ldyBMKGUpKX1lbHNleyhlLl9wZW5kaW5nRGZkPXRoaXMuZ2VuZXJhdGVUb2tlbih0aGlzLmZpbmRTZXJ2ZXJJbmZvKGwuc2VydmVyKSxudWxsLHtzZXJ2ZXJVcmw6ZS5yZXNVcmxfLHRva2VuOmwudG9rZW4sc2lnbmFsOmUub3B0aW9uc18uc2lnbmFsLHNzbDpsLnNzbH0pKS50aGVuKChyPT57dChuZXcgTCh7dXNlcklkOmw/LnVzZXJJZCxzZXJ2ZXI6cy5zZXJ2ZXIsdG9rZW46ci50b2tlbixleHBpcmVzOm51bGwhPXIuZXhwaXJlcz9OdW1iZXIoci5leHBpcmVzKTpudWxsLHNzbDohIXIuc3NsLGlzQWRtaW46ZS5hZG1pbl8sdmFsaWRpdHk6ci52YWxpZGl0eX0pKX0pLHIpfX1lbHNle3RoaXMuX2J1c3k9bnVsbCxuJiYoZS5vcHRpb25zXy50b2tlbj1udWxsKTsoZS5fcGVuZGluZ0RmZD10aGlzLmdldENyZWRlbnRpYWwoaS5yZXBsYWNlKC9cXC8/JC8sXCIvc2hhcmluZ1wiKSx7cmVzb3VyY2U6ZS5yZXNVcmxfLG93bmluZ1RlbmFudDpzLm93bmluZ1RlbmFudCxzaWduYWw6ZS5vcHRpb25zXy5zaWduYWwsdG9rZW46bixlcnJvcjphLHByb21wdDpofSkpLnRoZW4oKCgpPT57dGhpcy5fZW5xdWV1ZShlLnJlc1VybF8sZS5zaW5mb18sZS5vcHRpb25zXyxlLGUuYWRtaW5fKX0pLCh0PT57ZS5yZXNVcmxfPWUuc2luZm9fPWUucmVmcmVzaF89bnVsbCxlLnJlamVjdCh0KX0pKX19O3RoaXMuX2VycmJhY2tGdW5jPXI7Y29uc3QgYT1lLnNpbmZvXy5vd25pbmdTeXN0ZW1VcmwsbD10aGlzLl9pc1NlcnZlclJzcmMoZS5yZXNVcmxfKSxkPWUuc2luZm9fLl9yZXN0SW5mb1BtcztkP2QucHJvbWlzZS50aGVuKCh0PT57Y29uc3Qgcj1lLnNpbmZvXztpZihyLl9yZXN0SW5mb1Btcyl7ci5hZG1pblRva2VuU2VydmljZVVybD1yLl9yZXN0SW5mb1Btcy5hZG1pblVybCxyLl9yZXN0SW5mb1Btcz1udWxsLHIudG9rZW5TZXJ2aWNlVXJsPShoKFwiYXV0aEluZm8udG9rZW5TZXJ2aWNlc1VybFwiLHQpfHxoKFwiYXV0aEluZm8udG9rZW5TZXJ2aWNlVXJsXCIsdCl8fGgoXCJ0b2tlblNlcnZpY2VVcmxcIix0KSk/P251bGwsci5zaG9ydExpdmVkVG9rZW5WYWxpZGl0eT1oKFwiYXV0aEluZm8uc2hvcnRMaXZlZFRva2VuVmFsaWRpdHlcIix0KT8/bnVsbCxyLmN1cnJlbnRWZXJzaW9uPXQuY3VycmVudFZlcnNpb24sci5vd25pbmdUZW5hbnQ9dC5vd25pbmdUZW5hbnQ7Y29uc3QgZT1yLm93bmluZ1N5c3RlbVVybD10Lm93bmluZ1N5c3RlbVVybDtlJiZ0aGlzLl9wb3J0YWxzLnB1c2goZSl9bCYmci5vd25pbmdTeXN0ZW1Vcmw/bygpOnMoKX0pLCgoKT0+e2Uuc2luZm9fLl9yZXN0SW5mb1Btcz1udWxsO2NvbnN0IHQ9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOnNlcnZlci1pZGVudGlmaWNhdGlvbi1mYWlsZWRcIixcIlVua25vd24gcmVzb3VyY2UgLSBjb3VsZCBub3QgZmluZCB0b2tlbiBzZXJ2aWNlIGVuZHBvaW50LlwiKTtyKHQpfSkpOmwmJmE/bygpOmUuc2luZm9fLl9zZWxmUmVxP2Uuc2luZm9fLl9zZWxmUmVxLnNlbGZEZmQudGhlbigodD0+e2NvbnN0IHI9e307bGV0IHMsaSxvLG47cmV0dXJuIHQmJihzPXQudXNlciYmdC51c2VyLnVzZXJuYW1lLHIudXNlcm5hbWU9cyxyLmFsbFNTTD10LmFsbFNTTCxpPXQuc3VwcG9ydHNPQXV0aCxuPXBhcnNlRmxvYXQodC5jdXJyZW50VmVyc2lvbiksXCJtdWx0aXRlbmFudFwiPT09dC5wb3J0YWxNb2RlJiYobz10LmN1c3RvbUJhc2VVcmwpLGUuc2luZm9fLmN1cnJlbnRWZXJzaW9uPW4pLGUuc2luZm9fLndlYlRpZXJBdXRoPSEhcyxzJiZ0aGlzLm5vcm1hbGl6ZVdlYlRpZXJBdXRoP3RoaXMuZ2VuZXJhdGVUb2tlbihlLnNpbmZvXyxudWxsLHtzc2w6ci5hbGxTU0x9KS5jYXRjaCgoKCk9Pm51bGwpKS50aGVuKChlPT4oci5wb3J0YWxUb2tlbj1lJiZlLnRva2VuLHIudG9rZW5FeHBpcmF0aW9uPWUmJmUuZXhwaXJlcyxyKSkpOiFzJiZpJiZuPj00LjQmJiF0aGlzLl9maW5kT0F1dGhJbmZvKGUucmVzVXJsXyk/dGhpcy5fZ2VuZXJhdGVPQXV0aEluZm8oe3BvcnRhbFVybDplLnNpbmZvXy5zZXJ2ZXIsY3VzdG9tQmFzZVVybDpvLG93bmluZ1RlbmFudDplLnNpbmZvXy5fc2VsZlJlcS5vd25pbmdUZW5hbnR9KS5jYXRjaCgoKCk9Pm51bGwpKS50aGVuKCgoKT0+cikpOnJ9KSkuY2F0Y2goKCgpPT5udWxsKSkudGhlbigodD0+e2Uuc2luZm9fLl9zZWxmUmVxPW51bGwsdD9zKHQudXNlcm5hbWUsdC5hbGxTU0wsdC5wb3J0YWxUb2tlbix0LnRva2VuRXhwaXJhdGlvbik6cygpfSkpOnMoKX1fZ2VuZXJhdGVPQXV0aEluZm8oZSl7bGV0IHQscj1udWxsLGk9ZS5wb3J0YWxVcmw7Y29uc3Qgbz1lLmN1c3RvbUJhc2VVcmwsbj1lLm93bmluZ1RlbmFudCxhPSF0aGlzLl9kZWZhdWx0T0F1dGhJbmZvJiZ0aGlzLl9jcmVhdGVEZWZhdWx0T0F1dGhJbmZvJiYhdGhpcy5faGFzVGVzdGVkSWZBcHBJc09uUG9ydGFsO2lmKGEpe3I9d2luZG93LmxvY2F0aW9uLmhyZWY7bGV0IGU9ci5pbmRleE9mKFwiP1wiKTtlPi0xJiYocj1yLnNsaWNlKDAsZSkpLGU9ci5zZWFyY2goL1xcLyhhcHBzfGhvbWUpXFwvLykscj1lPi0xP3Iuc2xpY2UoMCxlKTpudWxsfXJldHVybiBhJiZyPyh0aGlzLl9oYXNUZXN0ZWRJZkFwcElzT25Qb3J0YWw9ITAsdD1zKHIrXCIvc2hhcmluZy9yZXN0XCIse3F1ZXJ5OntmOlwianNvblwifX0pLnRoZW4oKCgpPT57dGhpcy5fZGVmYXVsdE9BdXRoSW5mbz1uZXcgTyh7YXBwSWQ6XCJhcmNnaXNvbmxpbmVcIixwb3B1cENhbGxiYWNrVXJsOnIrXCIvaG9tZS9vYXV0aC1jYWxsYmFjay5odG1sXCJ9KX0pKSk6dD1Qcm9taXNlLnJlc29sdmUoKSx0LnRoZW4oKCgpPT57aWYodGhpcy5fZGVmYXVsdE9BdXRoSW5mbylyZXR1cm4gaT1pLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpLHMoaStcIi9zaGFyaW5nL3Jlc3Qvb2F1dGgyL3ZhbGlkYXRlUmVkaXJlY3RVcmlcIix7cXVlcnk6e2FjY291bnRJZDpuLGNsaWVudF9pZDp0aGlzLl9kZWZhdWx0T0F1dGhJbmZvLmFwcElkLHJlZGlyZWN0X3VyaTpJKHRoaXMuX2RlZmF1bHRPQXV0aEluZm8ucG9wdXBDYWxsYmFja1VybCksZjpcImpzb25cIn19KS50aGVuKChlPT57aWYoZS5kYXRhLnZhbGlkKXtjb25zdCB0PXRoaXMuX2RlZmF1bHRPQXV0aEluZm8uY2xvbmUoKTtlLmRhdGEudXJsS2V5JiZvP3QucG9ydGFsVXJsPVwiaHR0cHM6Ly9cIitlLmRhdGEudXJsS2V5LnRvTG93ZXJDYXNlKCkrXCIuXCIrbzp0LnBvcnRhbFVybD1pLHQucG9wdXA9d2luZG93IT09d2luZG93LnRvcHx8IShfKGksdGhpcy5fYXBwT3JpZ2luKXx8dGhpcy5fZ3dEb21haW5zLnNvbWUoKGU9PmUucmVnZXgudGVzdChpKSYmZS5yZWdleC50ZXN0KHRoaXMuX2FwcE9yaWdpbikpKSksdGhpcy5vQXV0aEluZm9zLnB1c2godCl9fSkpfSkpfV9kb09BdXRoU2lnbkluKGUsdCxyLHMpe2NvbnN0IG89ci5fb0F1dGhDcmVkLGE9e3BvcnRhbFVybDpyLnBvcnRhbFVybH07IXIucG9wdXAmJnIucHJlc2VydmVVcmxIYXNoJiZ3aW5kb3cubG9jYXRpb24uaGFzaCYmKGEuaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaCksby5zdGF0ZVVJRCYmKGEudWlkPW8uc3RhdGVVSUQpO2NvbnN0IGg9e2NsaWVudF9pZDpyLmFwcElkLHJlc3BvbnNlX3R5cGU6by5jb2RlVmVyaWZpZXI/XCJjb2RlXCI6XCJ0b2tlblwiLHN0YXRlOkpTT04uc3RyaW5naWZ5KGEpLGV4cGlyYXRpb246ci5leHBpcmF0aW9uLGxvY2FsZTpyLmxvY2FsZSxyZWRpcmVjdF91cmk6dGhpcy5fZ2V0UmVkaXJlY3RVUkkociwhIW8uY29kZVZlcmlmaWVyKX07ci5mb3JjZUxvZ2luJiYoaC5mb3JjZV9sb2dpbj0hMCksci5mb3JjZVVzZXJJZCYmci51c2VySWQmJihoLnByZXBvcHVsYXRlZHVzZXJuYW1lPXIudXNlcklkKSwhci5wb3B1cCYmdGhpcy5fZG9Qb3J0YWxTaWduSW4oZSkmJihoLnJlZGlyZWN0VG9Vc2VyT3JnVXJsPSEwKSxvLmNvZGVWZXJpZmllciYmKGguY29kZV9jaGFsbGVuZ2U9c3x8by5jb2RlVmVyaWZpZXIsaC5jb2RlX2NoYWxsZW5nZV9tZXRob2Q9cz9cIlMyNTZcIjpcInBsYWluXCIpO2NvbnN0IGw9ci5wb3J0YWxVcmwucmVwbGFjZSgvXmh0dHA6L2ksXCJodHRwczpcIikrXCIvc2hhcmluZy9vYXV0aDIvYXV0aG9yaXplXCIsYz1sK1wiP1wiK3YoaCk7aWYoci5wb3B1cCl7Y29uc3QgZT13aW5kb3cub3BlbihjLFwiZXNyaUpTQVBJT0F1dGhcIixyLnBvcHVwV2luZG93RmVhdHVyZXMpO2lmKGUpZS5mb2N1cygpLHRoaXMuX29BdXRoRGZkLm9BdXRoV2luXz1lLHRoaXMuX29BdXRoSW50ZXJ2YWxJZD1zZXRJbnRlcnZhbCgoKCk9PntpZihlLmNsb3NlZCl7Y2xlYXJJbnRlcnZhbCh0aGlzLl9vQXV0aEludGVydmFsSWQpLHRoaXMuX29BdXRoT25Qb3B1cEhhbmRsZS5yZW1vdmUoKTtjb25zdCBlPXRoaXMuX29BdXRoRGZkO2lmKGUpe2NvbnN0IHQ9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOnVzZXItYWJvcnRlZFwiLFwiQUJPUlRFRFwiKTtlLnJlamVjdCh0KX19fSksNTAwKSx0aGlzLl9vQXV0aE9uUG9wdXBIYW5kbGU9bih3aW5kb3csW1wiYXJjZ2lzOmF1dGg6aGFzaFwiLFwiYXJjZ2lzOmF1dGg6bG9jYXRpb246c2VhcmNoXCJdLChlPT57XCJhcmNnaXM6YXV0aDpoYXNoXCI9PT1lLnR5cGU/dGhpcy5zZXRPQXV0aFJlc3BvbnNlSGFzaChlLmRldGFpbCk6dGhpcy5fc2V0T0F1dGhSZXNwb25zZVF1ZXJ5U3RyaW5nKGUuZGV0YWlsKX0pKTtlbHNle2NvbnN0IGU9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOnBvcHVwLWJsb2NrZWRcIixcIkFCT1JURURcIik7dGhpcy5fb0F1dGhEZmQucmVqZWN0KGUpfX1lbHNlIHRoaXMuX3JlamVjdE9uUGVyc2lzdGVkUGFnZVNob3c9ITAsdGhpcy5fb0F1dGhSZWRpcmVjdEZ1bmM/dGhpcy5fb0F1dGhSZWRpcmVjdEZ1bmMoe2F1dGhvcml6ZVBhcmFtczpoLGF1dGhvcml6ZVVybDpsLHJlc291cmNlVXJsOmUsc2VydmVySW5mbzp0LG9BdXRoSW5mbzpyfSk6d2luZG93LmxvY2F0aW9uLmhyZWY9Y31fZ2V0UmVkaXJlY3RVUkkoZSx0KXtjb25zdCByPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyMuKiQvLFwiXCIpO2lmKGUucG9wdXApcmV0dXJuIEkoZS5wb3B1cENhbGxiYWNrVXJsKTtpZih0KXtjb25zdCBlPXAocik7cmV0dXJuIGUucXVlcnkmJltcImNvZGVcIixcImVycm9yXCIsXCJlcnJvcl9kZXNjcmlwdGlvblwiLFwibWVzc2FnZV9jb2RlXCIsXCJwZXJzaXN0XCIsXCJzdGF0ZVwiXS5mb3JFYWNoKCh0PT57ZGVsZXRlIGUucXVlcnlbdF19KSksQShlLnBhdGgsZS5xdWVyeSl9cmV0dXJuIHJ9fUUucHJvdG90eXBlLmRlY2xhcmVkQ2xhc3M9XCJlc3JpLmlkZW50aXR5LklkZW50aXR5TWFuYWdlckJhc2VcIjtsZXQgTD1jbGFzcyBleHRlbmRzIG8uRXZlbnRlZEFjY2Vzc29ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMuX29BdXRoQ3JlZD1udWxsLHRoaXMudG9rZW5SZWZyZXNoQnVmZmVyPTIsZSYmZS5fb0F1dGhDcmVkJiYodGhpcy5fb0F1dGhDcmVkPWUuX29BdXRoQ3JlZCl9aW5pdGlhbGl6ZSgpe3RoaXMucmVzb3VyY2VzPXRoaXMucmVzb3VyY2VzfHxbXSxudWxsPT10aGlzLmNyZWF0aW9uVGltZSYmKHRoaXMuY3JlYXRpb25UaW1lPURhdGUubm93KCkpfXJlZnJlc2hUb2tlbigpe2NvbnN0IGU9ci5maW5kU2VydmVySW5mbyh0aGlzLnNlcnZlciksdD1lJiZlLm93bmluZ1N5c3RlbVVybCxzPSEhdCYmXCJzZXJ2ZXJcIj09PXRoaXMuc2NvcGUsaT1zJiZEKGUsci5fbGVnYWN5RmVkKSxvPWUud2ViVGllckF1dGgsbj1vJiZyLm5vcm1hbGl6ZVdlYlRpZXJBdXRoLGE9Q1t0aGlzLnNlcnZlcl0saD1hJiZhW3RoaXMudXNlcklkXTtsZXQgbCxjPXRoaXMucmVzb3VyY2VzJiZ0aGlzLnJlc291cmNlc1swXSxkPXM/ci5maW5kU2VydmVySW5mbyh0KTpudWxsLHU9e3VzZXJuYW1lOnRoaXMudXNlcklkLHBhc3N3b3JkOmh9O2lmKG8mJiFuKXJldHVybjtzJiYhZCYmci5zZXJ2ZXJJbmZvcy5zb21lKChlPT4oci5faXNJZFByb3ZpZGVyKHQsZS5zZXJ2ZXIpJiYoZD1lKSwhIWQpKSk7Y29uc3QgcD1kP3IuZmluZENyZWRlbnRpYWwoZC5zZXJ2ZXIsdGhpcy51c2VySWQpOm51bGw7aWYoIXN8fHApe2lmKCFpKXtpZihzKWw9e3NlcnZlclVybDpjLHRva2VuOnAmJnAudG9rZW4sc3NsOnAmJnAuc3NsfTtlbHNlIGlmKG4pdT1udWxsLGw9e3NzbDp0aGlzLnNzbH07ZWxzZXtpZighaCl7bGV0IHQ7cmV0dXJuIGMmJihjPXIuX3Nhbml0aXplVXJsKGMpLHRoaXMuX2VucXVldWVkPTEsdD1yLl9lbnF1ZXVlKGMsZSxudWxsLG51bGwsdGhpcy5pc0FkbWluLHRoaXMpLHQudGhlbigoKCk9Pnt0aGlzLl9lbnF1ZXVlZD0wLHRoaXMucmVmcmVzaFNlcnZlclRva2VucygpfSkpLmNhdGNoKCgoKT0+e3RoaXMuX2VucXVldWVkPTB9KSkpLHR9dGhpcy5pc0FkbWluJiYobD17aXNBZG1pbjohMH0pfXJldHVybiByLmdlbmVyYXRlVG9rZW4ocz9kOmUscz9udWxsOnUsbCkudGhlbigoZT0+e3RoaXMudG9rZW49ZS50b2tlbix0aGlzLmV4cGlyZXM9bnVsbCE9ZS5leHBpcmVzP051bWJlcihlLmV4cGlyZXMpOm51bGwsdGhpcy5jcmVhdGlvblRpbWU9RGF0ZS5ub3coKSx0aGlzLnZhbGlkaXR5PWUudmFsaWRpdHksdGhpcy5lbWl0VG9rZW5DaGFuZ2UoKSx0aGlzLnJlZnJlc2hTZXJ2ZXJUb2tlbnMoKX0pKS5jYXRjaCgoKCk9Pnt9KSl9cD8ucmVmcmVzaFRva2VuKCl9fXJlZnJlc2hTZXJ2ZXJUb2tlbnMoKXtcInBvcnRhbFwiPT09dGhpcy5zY29wZSYmci5jcmVkZW50aWFscy5mb3JFYWNoKChlPT57Y29uc3QgdD1yLmZpbmRTZXJ2ZXJJbmZvKGUuc2VydmVyKSxzPXQmJnQub3duaW5nU3lzdGVtVXJsO2UhPT10aGlzJiZlLnVzZXJJZD09PXRoaXMudXNlcklkJiZzJiZcInNlcnZlclwiPT09ZS5zY29wZSYmKHIuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0aGlzLnNlcnZlcixzKXx8ci5faXNJZFByb3ZpZGVyKHMsdGhpcy5zZXJ2ZXIpKSYmKEQodCxyLl9sZWdhY3lGZWQpPyhlLnRva2VuPXRoaXMudG9rZW4sZS5leHBpcmVzPXRoaXMuZXhwaXJlcyxlLmNyZWF0aW9uVGltZT10aGlzLmNyZWF0aW9uVGltZSxlLnZhbGlkaXR5PXRoaXMudmFsaWRpdHksZS5lbWl0VG9rZW5DaGFuZ2UoKSk6ZS5yZWZyZXNoVG9rZW4oKSl9KSl9ZW1pdFRva2VuQ2hhbmdlKGUpe2NsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoVGltZXIpO2NvbnN0IHQ9dGhpcy5zZXJ2ZXImJnIuZmluZFNlcnZlckluZm8odGhpcy5zZXJ2ZXIpLHM9dCYmdC5vd25pbmdTeXN0ZW1VcmwsaT1zJiZyLmZpbmRTZXJ2ZXJJbmZvKHMpOyExPT09ZXx8cyYmXCJwb3J0YWxcIiE9PXRoaXMuc2NvcGUmJighaXx8IWkud2ViVGllckF1dGh8fHIubm9ybWFsaXplV2ViVGllckF1dGgpfHxudWxsPT10aGlzLmV4cGlyZXMmJm51bGw9PXRoaXMudmFsaWRpdHl8fHRoaXMuX3N0YXJ0UmVmcmVzaFRpbWVyKCksdGhpcy5lbWl0KFwidG9rZW4tY2hhbmdlXCIpfWRlc3Ryb3koKXt0aGlzLnVzZXJJZD10aGlzLnNlcnZlcj10aGlzLnRva2VuPXRoaXMuZXhwaXJlcz10aGlzLnZhbGlkaXR5PXRoaXMucmVzb3VyY2VzPXRoaXMuY3JlYXRpb25UaW1lPW51bGwsdGhpcy5fb0F1dGhDcmVkJiYodGhpcy5fb0F1dGhDcmVkLmRlc3Ryb3koKSx0aGlzLl9vQXV0aENyZWQ9bnVsbCk7Y29uc3QgZT1yLmNyZWRlbnRpYWxzLmluZGV4T2YodGhpcyk7ZT4tMSYmci5jcmVkZW50aWFscy5zcGxpY2UoZSwxKSx0aGlzLmVtaXRUb2tlbkNoYW5nZSgpLHRoaXMuZW1pdChcImRlc3Ryb3lcIil9dG9KU09OKCl7Y29uc3QgZT1hKHt1c2VySWQ6dGhpcy51c2VySWQsc2VydmVyOnRoaXMuc2VydmVyLHRva2VuOnRoaXMudG9rZW4sZXhwaXJlczp0aGlzLmV4cGlyZXMsdmFsaWRpdHk6dGhpcy52YWxpZGl0eSxzc2w6dGhpcy5zc2wsaXNBZG1pbjp0aGlzLmlzQWRtaW4sY3JlYXRpb25UaW1lOnRoaXMuY3JlYXRpb25UaW1lLHNjb3BlOnRoaXMuc2NvcGV9KSx0PXRoaXMucmVzb3VyY2VzO3JldHVybiB0JiZ0Lmxlbmd0aD4wJiYoZS5yZXNvdXJjZXM9dC5zbGljZSgpKSxlfV9zdGFydFJlZnJlc2hUaW1lcigpe2NsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoVGltZXIpO2NvbnN0IGU9NmU0KnRoaXMudG9rZW5SZWZyZXNoQnVmZmVyLHQ9MioqMzEtMTtsZXQgcj0odGhpcy52YWxpZGl0eT90aGlzLmNyZWF0aW9uVGltZSs2ZTQqdGhpcy52YWxpZGl0eTp0aGlzLmV4cGlyZXMpLURhdGUubm93KCk7cjwwP3I9MDpyPnQmJihyPXQpLHRoaXMuX3JlZnJlc2hUaW1lcj1zZXRUaW1lb3V0KHRoaXMucmVmcmVzaFRva2VuLmJpbmQodGhpcykscj5lP3ItZTpyKX19O2UoW2soKV0sTC5wcm90b3R5cGUsXCJjcmVhdGlvblRpbWVcIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJleHBpcmVzXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwiaXNBZG1pblwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcIm9BdXRoU3RhdGVcIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJyZXNvdXJjZXNcIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJzY29wZVwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcInNlcnZlclwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcInNzbFwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcInRva2VuXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwidG9rZW5SZWZyZXNoQnVmZmVyXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwidXNlcklkXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwidmFsaWRpdHlcIix2b2lkIDApLEw9ZShbeShcImVzcmkuaWRlbnRpdHkuQ3JlZGVudGlhbFwiKV0sTCk7ZXhwb3J0e0wgYXMgQ3JlZGVudGlhbCxFIGFzIElkZW50aXR5TWFuYWdlckJhc2V9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIHR9ZnJvbVwiLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydHttYWtlSGFuZGxlIGFzIGV9ZnJvbVwiLi4vY29yZS9oYW5kbGVVdGlscy5qc1wiO2ltcG9ydHt3YXRjaCBhcyBvfWZyb21cIi4uL2NvcmUvcmVhY3RpdmVVdGlscy5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBzfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uL2NvcmUvYXJyYXlVdGlscy5qc1wiO2ltcG9ydFwiLi4vY29yZS9oYXMuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgaX1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7aW1wb3J0IHIgZnJvbVwiLi4vd2lkZ2V0cy9XaWRnZXQuanNcIjtpbXBvcnR7aXNXaWRnZXQgYXMgbn1mcm9tXCIuLi93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0LmpzXCI7aW1wb3J0e2NyZWF0ZUZvY3VzVHJhcCBhcyBhfWZyb21cImZvY3VzLXRyYXBcIjtpbXBvcnR7dHN4IGFzIGN9ZnJvbVwiLi4vd2lkZ2V0cy9zdXBwb3J0L2pzeEZhY3RvcnkuanNcIjtpbXBvcnR7bWVzc2FnZUJ1bmRsZSBhcyBsfWZyb21cIi4uL3dpZGdldHMvc3VwcG9ydC9kZWNvcmF0b3JzL21lc3NhZ2VCdW5kbGUuanNcIjtjb25zdCBkPVwiZXNyaS1pZGVudGl0eS1tb2RhbFwiLHA9e2Jhc2U6ZCxvcGVuOmAke2R9LS1vcGVuYCxjbG9zZWQ6YCR7ZH0tLWNsb3NlZGAsdGl0bGU6YCR7ZH1fX3RpdGxlYCxkaWFsb2c6YCR7ZH1fX2RpYWxvZ2AsY29udGVudDpgJHtkfV9fY29udGVudGAsY2xvc2VCdXR0b246YCR7ZH1fX2Nsb3NlLWJ1dHRvbmAsaWNvbkNsb3NlOlwiZXNyaS1pY29uLWNsb3NlXCJ9O2xldCB1PWNsYXNzIGV4dGVuZHMgcntjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5jb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmNvbnRlbnQ9bnVsbCx0aGlzLm9wZW49ITEsdGhpcy5fZm9jdXNUcmFwPW51bGwsdGhpcy5fY2xvc2U9KCk9Pnt0aGlzLm9wZW49ITF9LGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpLHRoaXMuYWRkSGFuZGxlcyhvKCgoKT0+dGhpcy5vcGVuKSwoKCk9PnRoaXMuX3RvZ2dsZUZvY3VzVHJhcCgpKSkpfWRlc3Ryb3koKXt0aGlzLl9kZXN0cm95Rm9jdXNUcmFwKCl9Z2V0IHRpdGxlKCl7cmV0dXJuIHRoaXMubWVzc2FnZXM/LmF1dGguc2lnbklufXJlbmRlcigpe2NvbnN0IHQ9dGhpcy5pZCx7b3BlbjplLGNvbnRlbnQ6byx0aXRsZTpzLG1lc3NhZ2VzOml9PXRoaXMscj1lJiYhIW8sbj17W3Aub3Blbl06cixbcC5jbG9zZWRdOiFyfSxhPWMoXCJidXR0b25cIix7Y2xhc3M6cC5jbG9zZUJ1dHRvbixcImFyaWEtbGFiZWxcIjppLmNsb3NlLHRpdGxlOmkuY2xvc2UsYmluZDp0aGlzLG9uY2xpY2s6dGhpcy5fY2xvc2UsdHlwZTpcImJ1dHRvblwifSxjKFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsY2xhc3M6cC5pY29uQ2xvc2V9KSksbD1gJHt0fV90aXRsZWAsZD1gJHt0fV9jb250ZW50YCx1PXM/YyhcImgxXCIse2lkOmwsY2xhc3M6cC50aXRsZX0scyk6bnVsbCxoPXI/YyhcImRpdlwiLHtiaW5kOnRoaXMsY2xhc3M6cC5kaWFsb2cscm9sZTpcImRpYWxvZ1wiLFwiYXJpYS1sYWJlbGxlZGJ5XCI6bCxcImFyaWEtZGVzY3JpYmVkYnlcIjpkLGFmdGVyQ3JlYXRlOnRoaXMuX2NyZWF0ZUZvY3VzVHJhcH0sYSx1LHRoaXMuX3JlbmRlckNvbnRlbnQoZCkpOm51bGw7cmV0dXJuIGMoXCJkaXZcIix7dGFiSW5kZXg6LTEsY2xhc3M6dGhpcy5jbGFzc2VzKHAuYmFzZSxuKX0saCl9X2Rlc3Ryb3lGb2N1c1RyYXAoKXt0aGlzLl9mb2N1c1RyYXA/LmRlYWN0aXZhdGUoe29uRGVhY3RpdmF0ZTooKT0+e319KSx0aGlzLl9mb2N1c1RyYXA9bnVsbH1fdG9nZ2xlRm9jdXNUcmFwKCl7Y29uc3R7X2ZvY3VzVHJhcDp0LG9wZW46ZX09dGhpczt0JiYoZT90LmFjdGl2YXRlKCk6dC5kZWFjdGl2YXRlKCkpfV9jcmVhdGVGb2N1c1RyYXAodCl7dGhpcy5fZGVzdHJveUZvY3VzVHJhcCgpO2NvbnN0IG89cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+e3RoaXMuX2ZvY3VzVHJhcD1hKHQse2luaXRpYWxGb2N1czpcImlucHV0XCIsb25EZWFjdGl2YXRlOnRoaXMuX2Nsb3NlfSksdGhpcy5fdG9nZ2xlRm9jdXNUcmFwKCl9KSk7dGhpcy5hZGRIYW5kbGVzKGUoKCgpPT5jYW5jZWxBbmltYXRpb25GcmFtZShvKSkpKX1fcmVuZGVyQ29udGVudCh0KXtjb25zdCBlPXRoaXMuY29udGVudDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9jKFwiZGl2XCIse2NsYXNzOnAuY29udGVudCxpZDp0LGlubmVySFRNTDplfSk6bihlKT9jKFwiZGl2XCIse2NsYXNzOnAuY29udGVudCxpZDp0fSxlLnJlbmRlcigpKTplIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/YyhcImRpdlwiLHtjbGFzczpwLmNvbnRlbnQsaWQ6dCxiaW5kOmUsYWZ0ZXJDcmVhdGU6dGhpcy5fYXR0YWNoVG9Ob2RlfSk6bnVsbH1fYXR0YWNoVG9Ob2RlKHQpe2NvbnN0IGU9dGhpczt0LmFwcGVuZENoaWxkKGUpfX07dChbcyh7cmVhZE9ubHk6ITB9KV0sdS5wcm90b3R5cGUsXCJjb250YWluZXJcIix2b2lkIDApLHQoW3MoKV0sdS5wcm90b3R5cGUsXCJjb250ZW50XCIsdm9pZCAwKSx0KFtzKCldLHUucHJvdG90eXBlLFwib3BlblwiLHZvaWQgMCksdChbcygpLGwoXCJlc3JpL3Q5bi9jb21tb25cIildLHUucHJvdG90eXBlLFwibWVzc2FnZXNcIix2b2lkIDApLHQoW3MoKV0sdS5wcm90b3R5cGUsXCJ0aXRsZVwiLG51bGwpLHU9dChbaShcImVzcmkuaWRlbnRpdHkuSWRlbnRpdHlNb2RhbFwiKV0sdSk7Y29uc3QgaD11O2V4cG9ydHtoIGFzIGRlZmF1bHR9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmNvbnN0IHQ9XCJlc3JpSlNBUElPQXV0aFwiO2NsYXNzIGV7Y29uc3RydWN0b3IodCxlKXt0aGlzLm9BdXRoSW5mbz1udWxsLHRoaXMuc3RvcmFnZT1udWxsLHRoaXMuYXBwSWQ9bnVsbCx0aGlzLmNvZGVWZXJpZmllcj1udWxsLHRoaXMuZXhwaXJlcz1udWxsLHRoaXMucmVmcmVzaFRva2VuPW51bGwsdGhpcy5zc2w9bnVsbCx0aGlzLnN0YXRlVUlEPW51bGwsdGhpcy50b2tlbj1udWxsLHRoaXMudXNlcklkPW51bGwsdGhpcy5vQXV0aEluZm89dCx0aGlzLnN0b3JhZ2U9ZSx0aGlzLl9pbml0KCl9aXNWYWxpZCgpe2xldCB0PSExO2lmKHRoaXMub0F1dGhJbmZvJiZ0aGlzLnVzZXJJZCYmKHRoaXMucmVmcmVzaFRva2VufHx0aGlzLnRva2VuKSlpZihudWxsPT10aGlzLmV4cGlyZXMmJnRoaXMucmVmcmVzaFRva2VuKXQ9ITA7ZWxzZSBpZih0aGlzLmV4cGlyZXMpe2NvbnN0IGU9RGF0ZS5ub3coKTtpZih0aGlzLmV4cGlyZXM+ZSl7KHRoaXMuZXhwaXJlcy1lKS8xZTM+NjAqdGhpcy5vQXV0aEluZm8ubWluVGltZVVudGlsRXhwaXJhdGlvbiYmKHQ9ITApfX1yZXR1cm4gdH1zYXZlKCl7aWYoIXRoaXMuc3RvcmFnZSlyZXR1cm4hMTtjb25zdCBlPXRoaXMuX2xvYWQoKSxzPXRoaXMub0F1dGhJbmZvO2lmKHMmJnMuYXV0aE5hbWVzcGFjZSYmcy5wb3J0YWxVcmwpe2xldCByPWVbcy5hdXRoTmFtZXNwYWNlXTtyfHwocj1lW3MuYXV0aE5hbWVzcGFjZV09e30pLHRoaXMuYXBwSWR8fCh0aGlzLmFwcElkPXMuYXBwSWQpLHJbcy5wb3J0YWxVcmxdPXthcHBJZDp0aGlzLmFwcElkLGNvZGVWZXJpZmllcjp0aGlzLmNvZGVWZXJpZmllcixleHBpcmVzOnRoaXMuZXhwaXJlcyxyZWZyZXNoVG9rZW46dGhpcy5yZWZyZXNoVG9rZW4sc3NsOnRoaXMuc3NsLHN0YXRlVUlEOnRoaXMuc3RhdGVVSUQsdG9rZW46dGhpcy50b2tlbix1c2VySWQ6dGhpcy51c2VySWR9O3RyeXt0aGlzLnN0b3JhZ2Uuc2V0SXRlbSh0LEpTT04uc3RyaW5naWZ5KGUpKX1jYXRjaChpKXtyZXR1cm4gY29uc29sZS53YXJuKGkpLCExfXJldHVybiEwfXJldHVybiExfWRlc3Ryb3koKXtjb25zdCBlPXRoaXMuX2xvYWQoKSxzPXRoaXMub0F1dGhJbmZvO2lmKHMmJnMuYXBwSWQmJnMucG9ydGFsVXJsJiYobnVsbD09dGhpcy5leHBpcmVzfHx0aGlzLmV4cGlyZXM+RGF0ZS5ub3coKSkmJih0aGlzLnJlZnJlc2hUb2tlbnx8dGhpcy50b2tlbikpe2NvbnN0IHQ9cy5wb3J0YWxVcmwucmVwbGFjZSgvXmh0dHA6L2ksXCJodHRwczpcIikrXCIvc2hhcmluZy9yZXN0L29hdXRoMi9yZXZva2VUb2tlblwiLGU9bmV3IEZvcm1EYXRhO2lmKGUuYXBwZW5kKFwiZlwiLFwianNvblwiKSxlLmFwcGVuZChcImF1dGhfdG9rZW5cIix0aGlzLnJlZnJlc2hUb2tlbnx8dGhpcy50b2tlbiksZS5hcHBlbmQoXCJjbGllbnRfaWRcIixzLmFwcElkKSxlLmFwcGVuZChcInRva2VuX3R5cGVfaGludFwiLHRoaXMucmVmcmVzaFRva2VuP1wicmVmcmVzaF90b2tlblwiOlwiYWNjZXNzX3Rva2VuXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG5hdmlnYXRvci5zZW5kQmVhY29uKW5hdmlnYXRvci5zZW5kQmVhY29uKHQsZSk7ZWxzZXtjb25zdCBzPW5ldyBYTUxIdHRwUmVxdWVzdDtzLm9wZW4oXCJQT1NUXCIsdCkscy5zZW5kKGUpfX1pZihzJiZzLmF1dGhOYW1lc3BhY2UmJnMucG9ydGFsVXJsJiZ0aGlzLnN0b3JhZ2Upe2NvbnN0IHI9ZVtzLmF1dGhOYW1lc3BhY2VdO2lmKHIpe2RlbGV0ZSByW3MucG9ydGFsVXJsXTt0cnl7dGhpcy5zdG9yYWdlLnNldEl0ZW0odCxKU09OLnN0cmluZ2lmeShlKSl9Y2F0Y2goaSl7Y29uc29sZS5sb2coaSl9fX1zJiYocy5fb0F1dGhDcmVkPW51bGwsdGhpcy5vQXV0aEluZm89bnVsbCl9X2luaXQoKXtjb25zdCB0PXRoaXMuX2xvYWQoKSxlPXRoaXMub0F1dGhJbmZvO2lmKGUmJmUuYXV0aE5hbWVzcGFjZSYmZS5wb3J0YWxVcmwpe2xldCBzPXRbZS5hdXRoTmFtZXNwYWNlXTtzJiYocz1zW2UucG9ydGFsVXJsXSxzJiYodGhpcy5hcHBJZD1zLmFwcElkLHRoaXMuY29kZVZlcmlmaWVyPXMuY29kZVZlcmlmaWVyLHRoaXMuZXhwaXJlcz1zLmV4cGlyZXMsdGhpcy5yZWZyZXNoVG9rZW49cy5yZWZyZXNoVG9rZW4sdGhpcy5zc2w9cy5zc2wsdGhpcy5zdGF0ZVVJRD1zLnN0YXRlVUlELHRoaXMudG9rZW49cy50b2tlbix0aGlzLnVzZXJJZD1zLnVzZXJJZCkpfX1fbG9hZCgpe2xldCBlPXt9O2lmKHRoaXMuc3RvcmFnZSl7Y29uc3QgaT10aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0KTtpZihpKXRyeXtlPUpTT04ucGFyc2UoaSl9Y2F0Y2gocyl7Y29uc29sZS53YXJuKHMpfX1yZXR1cm4gZX19ZS5wcm90b3R5cGUuZGVjbGFyZWRDbGFzcz1cImVzcmkuaWRlbnRpdHkuT0F1dGhDcmVkZW50aWFsXCI7ZXhwb3J0e2UgYXMgZGVmYXVsdH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgb31mcm9tXCIuLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e0pTT05TdXBwb3J0IGFzIHR9ZnJvbVwiLi4vY29yZS9KU09OU3VwcG9ydC5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyByfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uL2NvcmUvYXJyYXlVdGlscy5qc1wiO2ltcG9ydFwiLi4vY29yZS9oYXMuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgZX1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7dmFyIHA7bGV0IHM9cD1jbGFzcyBleHRlbmRzIHR7Y29uc3RydWN0b3Iobyl7c3VwZXIobyksdGhpcy5fb0F1dGhDcmVkPW51bGwsdGhpcy5hcHBJZD1udWxsLHRoaXMuYXV0aE5hbWVzcGFjZT1cIi9cIix0aGlzLmV4cGlyYXRpb249MjAxNjAsdGhpcy5mbG93VHlwZT1cImF1dG9cIix0aGlzLmZvcmNlTG9naW49ITEsdGhpcy5mb3JjZVVzZXJJZD0hMSx0aGlzLmxvY2FsZT1udWxsLHRoaXMubWluVGltZVVudGlsRXhwaXJhdGlvbj0zMCx0aGlzLnBvcHVwPSExLHRoaXMucG9wdXBDYWxsYmFja1VybD1cIm9hdXRoLWNhbGxiYWNrLmh0bWxcIix0aGlzLnBvcHVwV2luZG93RmVhdHVyZXM9XCJoZWlnaHQ9NDkwLHdpZHRoPTgwMCxyZXNpemFibGUsc2Nyb2xsYmFycyxzdGF0dXNcIix0aGlzLnBvcnRhbFVybD1cImh0dHBzOi8vd3d3LmFyY2dpcy5jb21cIix0aGlzLnByZXNlcnZlVXJsSGFzaD0hMSx0aGlzLnVzZXJJZD1udWxsfWNsb25lKCl7cmV0dXJuIHAuZnJvbUpTT04odGhpcy50b0pTT04oKSl9fTtvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJhcHBJZFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiYXV0aE5hbWVzcGFjZVwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiZXhwaXJhdGlvblwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiZmxvd1R5cGVcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImZvcmNlTG9naW5cIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImZvcmNlVXNlcklkXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJsb2NhbGVcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcIm1pblRpbWVVbnRpbEV4cGlyYXRpb25cIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInBvcHVwXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJwb3B1cENhbGxiYWNrVXJsXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJwb3B1cFdpbmRvd0ZlYXR1cmVzXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJwb3J0YWxVcmxcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInByZXNlcnZlVXJsSGFzaFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwidXNlcklkXCIsdm9pZCAwKSxzPXA9byhbZShcImVzcmkuaWRlbnRpdHkuT0F1dGhJbmZvXCIpXSxzKTtjb25zdCBpPXM7ZXhwb3J0e2kgYXMgZGVmYXVsdH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgb31mcm9tXCIuLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e0pTT05TdXBwb3J0IGFzIHJ9ZnJvbVwiLi4vY29yZS9KU09OU3VwcG9ydC5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBlfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uL2NvcmUvYXJyYXlVdGlscy5qc1wiO2ltcG9ydFwiLi4vY29yZS9oYXMuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgdH1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7bGV0IHM9Y2xhc3MgZXh0ZW5kcyBye2NvbnN0cnVjdG9yKG8pe3N1cGVyKG8pLHRoaXMuYWRtaW5Ub2tlblNlcnZpY2VVcmw9bnVsbCx0aGlzLmN1cnJlbnRWZXJzaW9uPW51bGwsdGhpcy5oYXNQb3J0YWw9bnVsbCx0aGlzLmhhc1NlcnZlcj1udWxsLHRoaXMub3duaW5nU3lzdGVtVXJsPW51bGwsdGhpcy5vd25pbmdUZW5hbnQ9bnVsbCx0aGlzLnNlcnZlcj1udWxsLHRoaXMuc2hvcnRMaXZlZFRva2VuVmFsaWRpdHk9bnVsbCx0aGlzLnRva2VuU2VydmljZVVybD1udWxsLHRoaXMud2ViVGllckF1dGg9bnVsbH19O28oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImFkbWluVG9rZW5TZXJ2aWNlVXJsXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJjdXJyZW50VmVyc2lvblwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiaGFzUG9ydGFsXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJoYXNTZXJ2ZXJcIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcIm93bmluZ1N5c3RlbVVybFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwib3duaW5nVGVuYW50XCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJzZXJ2ZXJcIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInNob3J0TGl2ZWRUb2tlblZhbGlkaXR5XCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJ0b2tlblNlcnZpY2VVcmxcIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcIndlYlRpZXJBdXRoXCIsdm9pZCAwKSxzPW8oW3QoXCJlc3JpLmlkZW50aXR5LlNlcnZlckluZm9cIildLHMpO2NvbnN0IGk9cztleHBvcnR7aSBhcyBkZWZhdWx0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5mdW5jdGlvbiBlKGUpe3JldHVybiBhPT57YS5oYXNPd25Qcm9wZXJ0eShcIl9kZWxlZ2F0ZWRFdmVudE5hbWVzXCIpfHwoYS5fZGVsZWdhdGVkRXZlbnROYW1lcz1hLl9kZWxlZ2F0ZWRFdmVudE5hbWVzP2EuX2RlbGVnYXRlZEV2ZW50TmFtZXMuc2xpY2UoKTpbXSk7Y29uc3Qgbj1hLl9kZWxlZ2F0ZWRFdmVudE5hbWVzLHI9QXJyYXkuaXNBcnJheShlKT9lOnQoZSk7bi5wdXNoKC4uLnIpfX1mdW5jdGlvbiB0KGUpe3JldHVybiBlLnNwbGl0KFwiLFwiKS5tYXAoKGU9PmUudHJpbSgpKSl9ZXhwb3J0e2UgYXMgdm1FdmVudH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuZXhwb3J0e2FjY2Vzc2libGVIYW5kbGVyfWZyb21cIi4vZGVjb3JhdG9ycy9hY2Nlc3NpYmxlSGFuZGxlci5qc1wiO2V4cG9ydHttZXNzYWdlQnVuZGxlfWZyb21cIi4vZGVjb3JhdG9ycy9tZXNzYWdlQnVuZGxlLmpzXCI7ZXhwb3J0e3ZtRXZlbnR9ZnJvbVwiLi9kZWNvcmF0b3JzL3ZtRXZlbnQuanNcIjtleHBvcnR7dHN4LHRzeEZyYWdtZW50fWZyb21cIi4vanN4RmFjdG9yeS5qc1wiO2V4cG9ydHthZGRpdGlvbmFsQWxsb3dlZFRhZ3MsY2xhc3Nlcyxjc3NUcmFuc2l0aW9uLGRpc2NhcmROb2RlLGdldERpcixpc0FjdGl2YXRpb25LZXksaXNSVEwsa2VlcE1lbnVJdGVtV2l0aGluVmlldyxvblJlc2l6ZSxyZW5kZXJpbmdTYW5pdGl6ZXIsc2FmZUF0dHJzLHN0b3JlTm9kZX1mcm9tXCIuL3dpZGdldFV0aWxzLmpzXCI7ZXhwb3J0e2dldENhbGNpdGVUaGVtZUNsYXNzLGlzRGFya1RoZW1lLHNldENhbGNpdGVUaGVtZUNsYXNzfWZyb21cIi4uLy4uL3N1cHBvcnQvdGhlbWVVdGlscy5qc1wiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucmVuZGVyfWZ1bmN0aW9uIHQoZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucG9zdE1peEluUHJvcGVydGllcyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5idWlsZFJlbmRlcmluZyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wb3N0Q3JlYXRlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnN0YXJ0dXB9ZXhwb3J0e3QgYXMgaGFzRG9tTm9kZSxlIGFzIGlzV2lkZ2V0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==