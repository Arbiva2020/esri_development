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

/***/ "./node_modules/@arcgis/core/core/JSONSupport.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/JSONSupport.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONSupport": () => (/* binding */ l),
/* harmony export */   "JSONSupportMixin": () => (/* binding */ u),
/* harmony export */   "isJSONSupport": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _accessorSupport_DefaultsStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/DefaultsStore.js */ "./node_modules/@arcgis/core/core/accessorSupport/DefaultsStore.js");
/* harmony import */ var _accessorSupport_defaultsStoreUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorSupport/defaultsStoreUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js");
/* harmony import */ var _accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorSupport/read.js */ "./node_modules/@arcgis/core/core/accessorSupport/read.js");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/* harmony import */ var _accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessorSupport/write.js */ "./node_modules/@arcgis/core/core/accessorSupport/write.js");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__.assumeNonNull)((0,_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_6__.getProperties)(this)),i=t.store,p=new _accessorSupport_DefaultsStore_js__WEBPACK_IMPORTED_MODULE_3__.DefaultsStore;t.store=p,(0,_accessorSupport_defaultsStoreUtils_js__WEBPACK_IMPORTED_MODULE_4__.setupConstructedDefaults)(t,i,p)}read(r,t){(0,_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_5__.read)(this,r,t)}write(r,t){return (0,_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_7__.write)(this,r??{},t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return n.call(this,r,t)}};return u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.core.JSONSupport")],u),u.prototype.toJSON.isDefaultToJSON=!0,u};function n(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}function m(r){return r&&"read"in r&&"write"in r&&"toJSON"in r}let l=class extends(u(_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){};l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.core.JSONSupport")],l);


/***/ }),

/***/ "./node_modules/@arcgis/core/core/accessorSupport/DefaultsStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/DefaultsStore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultsStore": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new s;return this._values.forEach(((s,r)=>{e&&e.has(r)||t.set(r,(0,_lang_js__WEBPACK_IMPORTED_MODULE_0__.clone)(s.value),s.origin)})),t}get(i,e){e=this._normalizeOrigin(e);const s=this._values.get(i);return null==e||s?.origin===e?s?.value:void 0}originOf(i){return this._values.get(i)?.origin??_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.USER}keys(i){i=this._normalizeOrigin(i);const e=[...this._values.keys()];return null==i?e:e.filter((e=>this._values.get(e)?.origin===i))}set(i,s,r){if((r=this._normalizeOrigin(r))===_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.DEFAULTS){const e=this._values.get(i);if(e&&null!=e.origin&&e.origin>r)return}this._values.set(i,new t(s,r))}delete(i,e){null!=(e=this._normalizeOrigin(e))&&this._values.get(i)?.origin!==e||this._values.delete(i)}has(i,e){return null!=(e=this._normalizeOrigin(e))?this._values.get(i)?.origin===e:this._values.has(i)}forEach(i){this._values.forEach((({value:e},s)=>i(e,s)))}_normalizeOrigin(i){if(null!=i)return i===_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.DEFAULTS?i:_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.USER}}class t{constructor(i,e){this.value=i,this.origin=e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupConstructedDefaults": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,r,n){r.keys().forEach((e=>{n.set(e,r.get(e),_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__.OriginId.DEFAULTS)}));const o=e.metadatas;Object.keys(o).forEach((r=>{e.internalGet(r)&&n.set(r,e.internalGet(r),_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__.OriginId.DEFAULTS)}))}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/accessorSupport/read.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/read.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "read": () => (/* binding */ u),
/* harmony export */   "readLoadable": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./node_modules/@arcgis/core/core/accessorSupport/get.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/* harmony import */ var _extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/serializableProperty.js */ "./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s(e,r,o){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;const n=e.read.source;if("string"==typeof n){if(n===r)return!0;if(n.includes(".")&&0===n.indexOf(r)&&(0,_get_js__WEBPACK_IMPORTED_MODULE_0__.exists)(n,o))return!0}else for(const s of n){if(s===r)return!0;if(s.includes(".")&&0===s.indexOf(r)&&(0,_get_js__WEBPACK_IMPORTED_MODULE_0__.exists)(s,o))return!0}return!1}function i(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function f(e,t,r,n,f){let a=(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_2__.originSpecificReadPropertyDefinition)(t[r],f);i(a)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))a=(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_2__.originSpecificReadPropertyDefinition)(t[i],f),s(a,r,n)&&(e[i]=!0)}function a(e,t,r,o){const s=r.metadatas,i=(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_2__.originSpecificPropertyDefinition)(s[t],o),f=i?.default;if(void 0===f)return;const a="function"==typeof f?f.call(e,t,o):f;void 0!==a&&r.set(t,a)}const c={origin:"service"};function u(t,n,s=c){if(!n||"object"!=typeof n)return;const i=(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getProperties)(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(n))f(d,u,e,n,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const f=(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_2__.originSpecificReadPropertyDefinition)(u[r],s).read,a=f&&f.source;let c;c=a&&"string"==typeof a?(0,_get_js__WEBPACK_IMPORTED_MODULE_0__.valueOf)(n,a):n[r],f&&f.reader&&(c=f.reader.call(t,c,n,s)),void 0!==c&&i.set(r,c)}if(!s||!s.ignoreDefaults){i.setDefaultOrigin("defaults");for(const e of Object.getOwnPropertyNames(u))d[e]||a(t,e,i,s)}i.setDefaultOrigin("user")}function d(e,t,r,o=c){const n={...o,messages:[]};r(n),n.messages?.forEach((t=>{"warning"!==t.type||e.loaded?o&&o.messages&&o.messages.push(t):e.loadWarnings.push(t)}))}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/accessorSupport/write.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/write.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "willPropertyWrite": () => (/* binding */ c),
/* harmony export */   "write": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/* harmony import */ var _extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/serializableProperty.js */ "./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(r,e,t,i,o){const n={};return e.write?.writer?.call(r,i,n,t,o),n}function f(r,i,s,u,l,a){if(!u||!u.write)return!1;const f=r.get(s);if(!l&&u.write.overridePolicy){const e=u.write.overridePolicy.call(r,f,s,a??void 0);void 0!==e&&(l=e)}if(l||(l=u.write),!l||!1===l.enabled)return!1;if((null===f&&!l.allowNull&&!l.writerEnsuresNonNull||void 0===f)&&l.isRequired){const i=new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("web-document-write:property-required",`Missing value for required property '${s}' on '${r.declaredClass}'`,{propertyName:s,target:r});return i&&a&&a.messages?a.messages.push(i):i&&!a&&_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.core.accessorSupport.write").error(i.name,i.message),!1}if(void 0===f)return!1;if(null===f&&!l.allowNull&&!l.writerEnsuresNonNull)return!1;if(!l.alwaysWriteDefaults&&(!i.store.multipleOriginsSupported||i.store.originOf(s)===_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__.OriginId.DEFAULTS)&&p(r,s,a,u,f))return!1;if(!l.ignoreOrigin&&a&&a.origin&&i.store.multipleOriginsSupported){if(i.store.originOf(s)<(0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__.nameToId)(a.origin))return!1}return!0}function p(e,t,i,o,n){const s=o.default;if(void 0===s)return!1;if(null!=o.defaultEquals)return o.defaultEquals(n);if("function"==typeof s){if(Array.isArray(n)){const o=s.call(e,t,i??void 0);return (0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.equals)(o,n)}return!1}return s===n}function c(r,e,t,i){const o=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getProperties)(r),n=o.metadatas,u=(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_5__.originSpecificWritePropertyDefinition)(n[e],i);return!!u&&f(r,o,e,u,t,i)}function g(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.merge)(e,r.toJSON(t));const o=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getProperties)(r),n=o.metadatas;for(const s in n){const p=(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_5__.originSpecificWritePropertyDefinition)(n[s],t);if(!f(r,o,s,p,void 0,t))continue;const c=r.get(s),g=a(r,p,p.write&&"string"==typeof p.write.target?p.write.target:s,c,t);Object.keys(g).length>0&&(e=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.merge)(e,g),t?.resources?.pendingOperations?.length&&t.resources.pendingOperations.push(Promise.all(t.resources.pendingOperations).then((()=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.merge)(e,g,(()=>"replace-arrays"))))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:s,oldOrigin:(0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__.idToReadableName)(o.store.originOf(s)),newOrigin:t.origin}))}return e}


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

/***/ "./node_modules/@arcgis/core/support/themeUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/themeUtils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCalciteThemeClass": () => (/* binding */ c),
/* harmony export */   "isDarkTheme": () => (/* binding */ r),
/* harmony export */   "setCalciteThemeClass": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t="calcite-mode-";function e(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replaceAll(/\s|'|"/g,"")}function r(){return e().startsWith("dark")}function c(){return`${t}${r()?"dark":"light"}`}function n(t){o(t),t.classList.add(c())}function o(e){Array.from(e.classList).forEach((r=>{r.startsWith(t)&&e.classList.remove(r)}))}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZGY0M2UxMzY3MjY0MjVkY2UwODY0NDNjMzIxNTI5YjEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakIsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsTUFBTTtBQUNqQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBLDJGQUEyRixhQUFhO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZFQUE2RSxxREFBVyxxQ0FBcUMsb0RBQVU7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRFQUE0RSxxREFBVyxxQ0FBcUMsb0RBQVU7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7OztBQ0p2eUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYSw2R0FBNkcsYUFBYSw4QkFBOEIsYUFBYSxTQUFTLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLDBCQUEwQixjQUFjLHFDQUFxQyx1Q0FBdUMsR0FBZ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ0o5YjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVyw0SEFBNEgseURBQXlELGNBQWMsY0FBYyx1Q0FBNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p0UztBQUNBO0FBQ0E7QUFDQTtBQUM2ZSxjQUFjLHNDQUFzQyxjQUFjLHVKQUE2TCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9kaXN0L2ZvY3VzLXRyYXAuZXNtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvY29yZS9KU09OU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9EZWZhdWx0c1N0b3JlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlZmF1bHRzU3RvcmVVdGlscy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9yZWFkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2NvcmUvYWNjZXNzb3JTdXBwb3J0L3dyaXRlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L0lkZW50aXR5Rm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9pZGVudGl0eS9JZGVudGl0eU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyQmFzZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9pZGVudGl0eS9JZGVudGl0eU1vZGFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L09BdXRoQ3JlZGVudGlhbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9pZGVudGl0eS9PQXV0aEluZm8uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvU2VydmVySW5mby5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9zdXBwb3J0L3RoZW1lVXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvd2lkZ2V0cy9zdXBwb3J0L2RlY29yYXRvcnMvdm1FdmVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBmb2N1cy10cmFwIDcuNC4zXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuaW1wb3J0IHsgaXNGb2N1c2FibGUsIHRhYmJhYmxlLCBmb2N1c2FibGUsIGlzVGFiYmFibGUgfSBmcm9tICd0YWJiYWJsZSc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxuXG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IHtcbiAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKSB7XG4gICAgaWYgKHRyYXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBTdGFja1t0cmFwU3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0cmFwSW5kZXggPSB0cmFwU3RhY2suaW5kZXhPZih0cmFwKTtcbiAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgdHJhcFN0YWNrLnB1c2godHJhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgIHRyYXBTdGFjay5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIHRyYXBTdGFjay5wdXNoKHRyYXApO1xuICAgIH1cbiAgfSxcbiAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uIGRlYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCkge1xuICAgIHZhciB0cmFwSW5kZXggPSB0cmFwU3RhY2suaW5kZXhPZih0cmFwKTtcbiAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgdHJhcFN0YWNrLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpZiAodHJhcFN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyYXBTdGFja1t0cmFwU3RhY2subGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgIH1cbiAgfVxufTtcbnZhciBpc1NlbGVjdGFibGVJbnB1dCA9IGZ1bmN0aW9uIGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJiB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzRXNjYXBlRXZlbnQgPSBmdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXlDb2RlID09PSAyNztcbn07XG52YXIgaXNUYWJFdmVudCA9IGZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn07XG5cbi8vIGNoZWNrcyBmb3IgVEFCIGJ5IGRlZmF1bHRcbnZhciBpc0tleUZvcndhcmQgPSBmdW5jdGlvbiBpc0tleUZvcndhcmQoZSkge1xuICByZXR1cm4gaXNUYWJFdmVudChlKSAmJiAhZS5zaGlmdEtleTtcbn07XG5cbi8vIGNoZWNrcyBmb3IgU0hJRlQrVEFCIGJ5IGRlZmF1bHRcbnZhciBpc0tleUJhY2t3YXJkID0gZnVuY3Rpb24gaXNLZXlCYWNrd2FyZChlKSB7XG4gIHJldHVybiBpc1RhYkV2ZW50KGUpICYmIGUuc2hpZnRLZXk7XG59O1xudmFyIGRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuLy8gQXJyYXkuZmluZC9maW5kSW5kZXgoKSBhcmUgbm90IHN1cHBvcnRlZCBvbiBJRTsgdGhpcyByZXBsaWNhdGVzIGVub3VnaFxuLy8gIG9mIEFycmF5LmZpbmRJbmRleCgpIGZvciBvdXIgbmVlZHNcbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBmbikge1xuICB2YXIgaWR4ID0gLTE7XG4gIGFyci5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICBpZiAoZm4odmFsdWUpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlOyAvLyBuZXh0XG4gIH0pO1xuXG4gIHJldHVybiBpZHg7XG59O1xuXG4vKipcbiAqIEdldCBhbiBvcHRpb24ncyB2YWx1ZSB3aGVuIGl0IGNvdWxkIGJlIGEgcGxhaW4gdmFsdWUsIG9yIGEgaGFuZGxlciB0aGF0IHByb3ZpZGVzXG4gKiAgdGhlIHZhbHVlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPcHRpb24ncyB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgaGFuZGxlciwgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSBgdmFsdWVgLCBvciB0aGUgaGFuZGxlcidzIHJldHVybmVkIHZhbHVlLlxuICovXG52YXIgdmFsdWVPckhhbmRsZXIgPSBmdW5jdGlvbiB2YWx1ZU9ySGFuZGxlcih2YWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcykgOiB2YWx1ZTtcbn07XG52YXIgZ2V0QWN0dWFsVGFyZ2V0ID0gZnVuY3Rpb24gZ2V0QWN0dWFsVGFyZ2V0KGV2ZW50KSB7XG4gIC8vIE5PVEU6IElmIHRoZSB0cmFwIGlzIF9pbnNpZGVfIGEgc2hhZG93IERPTSwgZXZlbnQudGFyZ2V0IHdpbGwgYWx3YXlzIGJlIHRoZVxuICAvLyAgc2hhZG93IGhvc3QuIEhvd2V2ZXIsIGV2ZW50LnRhcmdldC5jb21wb3NlZFBhdGgoKSB3aWxsIGJlIGFuIGFycmF5IG9mXG4gIC8vICBub2RlcyBcImNsaWNrZWRcIiBmcm9tIGlubmVyLW1vc3QgKHRoZSBhY3R1YWwgZWxlbWVudCBpbnNpZGUgdGhlIHNoYWRvdykgdG9cbiAgLy8gIG91dGVyLW1vc3QgKHRoZSBob3N0IEhUTUwgZG9jdW1lbnQpLiBJZiB3ZSBoYXZlIGFjY2VzcyB0byBjb21wb3NlZFBhdGgoKSxcbiAgLy8gIHRoZW4gdXNlIGl0cyBmaXJzdCBlbGVtZW50OyBvdGhlcndpc2UsIGZhbGwgYmFjayB0byBldmVudC50YXJnZXQgKGFuZFxuICAvLyAgdGhpcyBvbmx5IHdvcmtzIGZvciBhbiBfb3Blbl8gc2hhZG93IERPTTsgb3RoZXJ3aXNlLFxuICAvLyAgY29tcG9zZWRQYXRoKClbMF0gPT09IGV2ZW50LnRhcmdldCBhbHdheXMpLlxuICByZXR1cm4gZXZlbnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgdHlwZW9mIGV2ZW50LmNvbXBvc2VkUGF0aCA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdIDogZXZlbnQudGFyZ2V0O1xufTtcblxuLy8gTk9URTogdGhpcyBtdXN0IGJlIF9vdXRzaWRlXyBgY3JlYXRlRm9jdXNUcmFwKClgIHRvIG1ha2Ugc3VyZSBhbGwgdHJhcHMgaW4gdGhpc1xuLy8gIGN1cnJlbnQgaW5zdGFuY2UgdXNlIHRoZSBzYW1lIHN0YWNrIGlmIGB1c2VyT3B0aW9ucy50cmFwU3RhY2tgIGlzbid0IHNwZWNpZmllZFxudmFyIGludGVybmFsVHJhcFN0YWNrID0gW107XG52YXIgY3JlYXRlRm9jdXNUcmFwID0gZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwKGVsZW1lbnRzLCB1c2VyT3B0aW9ucykge1xuICAvLyBTU1I6IGEgbGl2ZSB0cmFwIHNob3VsZG4ndCBiZSBjcmVhdGVkIGluIHRoaXMgdHlwZSBvZiBlbnZpcm9ubWVudCBzbyB0aGlzXG4gIC8vICBzaG91bGQgYmUgc2FmZSBjb2RlIHRvIGV4ZWN1dGUgaWYgdGhlIGBkb2N1bWVudGAgb3B0aW9uIGlzbid0IHNwZWNpZmllZFxuICB2YXIgZG9jID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy5kb2N1bWVudCkgfHwgZG9jdW1lbnQ7XG4gIHZhciB0cmFwU3RhY2sgPSAodXNlck9wdGlvbnMgPT09IG51bGwgfHwgdXNlck9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJPcHRpb25zLnRyYXBTdGFjaykgfHwgaW50ZXJuYWxUcmFwU3RhY2s7XG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZGVsYXlJbml0aWFsRm9jdXM6IHRydWUsXG4gICAgaXNLZXlGb3J3YXJkOiBpc0tleUZvcndhcmQsXG4gICAgaXNLZXlCYWNrd2FyZDogaXNLZXlCYWNrd2FyZFxuICB9LCB1c2VyT3B0aW9ucyk7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBjb250YWluZXJzIGdpdmVuIHRvIGNyZWF0ZUZvY3VzVHJhcCgpXG4gICAgLy8gQHR5cGUge0FycmF5PEhUTUxFbGVtZW50Pn1cbiAgICBjb250YWluZXJzOiBbXSxcbiAgICAvLyBsaXN0IG9mIG9iamVjdHMgaWRlbnRpZnlpbmcgdGFiYmFibGUgbm9kZXMgaW4gYGNvbnRhaW5lcnNgIGluIHRoZSB0cmFwXG4gICAgLy8gTk9URTogaXQncyBwb3NzaWJsZSB0aGF0IGEgZ3JvdXAgaGFzIG5vIHRhYmJhYmxlIG5vZGVzIGlmIG5vZGVzIGdldCByZW1vdmVkIHdoaWxlIHRoZSB0cmFwXG4gICAgLy8gIGlzIGFjdGl2ZSwgYnV0IHRoZSB0cmFwIHNob3VsZCBuZXZlciBnZXQgdG8gYSBzdGF0ZSB3aGVyZSB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZ3JvdXBcbiAgICAvLyAgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCAodGhhdCB3b3VsZCBsZWFkIHRvIGFuIGVycm9yIGNvbmRpdGlvbiB0aGF0IHdvdWxkXG4gICAgLy8gIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZyB0aHJvd24pXG4gICAgLy8gQHR5cGUge0FycmF5PHtcbiAgICAvLyAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgLy8gICB0YWJiYWJsZU5vZGVzOiBBcnJheTxIVE1MRWxlbWVudD4sIC8vIGVtcHR5IGlmIG5vbmVcbiAgICAvLyAgIGZvY3VzYWJsZU5vZGVzOiBBcnJheTxIVE1MRWxlbWVudD4sIC8vIGVtcHR5IGlmIG5vbmVcbiAgICAvLyAgIGZpcnN0VGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHxudWxsLFxuICAgIC8vICAgbGFzdFRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8bnVsbCxcbiAgICAvLyAgIG5leHRUYWJiYWJsZU5vZGU6IChub2RlOiBIVE1MRWxlbWVudCwgZm9yd2FyZDogYm9vbGVhbikgPT4gSFRNTEVsZW1lbnR8dW5kZWZpbmVkXG4gICAgLy8gfT59XG4gICAgY29udGFpbmVyR3JvdXBzOiBbXSxcbiAgICAvLyBzYW1lIG9yZGVyL2xlbmd0aCBhcyBgY29udGFpbmVyc2AgbGlzdFxuXG4gICAgLy8gcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIGBjb250YWluZXJHcm91cHNgLCBidXQgb25seSB0aG9zZSB0aGF0IGFjdHVhbGx5IGhhdmVcbiAgICAvLyAgdGFiYmFibGUgbm9kZXMgaW4gdGhlbVxuICAgIC8vIE5PVEU6IHNhbWUgb3JkZXIgYXMgYGNvbnRhaW5lcnNgIGFuZCBgY29udGFpbmVyR3JvdXBzYCwgYnV0IF9fbm90IG5lY2Vzc2FyaWx5X19cbiAgICAvLyAgdGhlIHNhbWUgbGVuZ3RoXG4gICAgdGFiYmFibGVHcm91cHM6IFtdLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgLy8gdGltZXIgSUQgZm9yIHdoZW4gZGVsYXlJbml0aWFsRm9jdXMgaXMgdHJ1ZSBhbmQgaW5pdGlhbCBmb2N1cyBpbiB0aGlzIHRyYXBcbiAgICAvLyAgaGFzIGJlZW4gZGVsYXllZCBkdXJpbmcgYWN0aXZhdGlvblxuICAgIGRlbGF5SW5pdGlhbEZvY3VzVGltZXI6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgdHJhcDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3QgLS0gc29tZSBwcml2YXRlIGZ1bmN0aW9ucyByZWZlcmVuY2UgaXQsIGFuZCBpdHMgbWV0aG9kcyByZWZlcmVuY2UgcHJpdmF0ZSBmdW5jdGlvbnMsIHNvIHdlIG11c3QgZGVjbGFyZSBoZXJlIGFuZCBkZWZpbmUgbGF0ZXJcblxuICAvKipcbiAgICogR2V0cyBhIGNvbmZpZ3VyYXRpb24gb3B0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IGNvbmZpZ092ZXJyaWRlT3B0aW9ucyBJZiB0cnVlLCBhbmQgb3B0aW9uIGlzIGRlZmluZWQgaW4gdGhpcyBzZXQsXG4gICAqICB2YWx1ZSB3aWxsIGJlIHRha2VuIGZyb20gdGhpcyBvYmplY3QuIE90aGVyd2lzZSwgdmFsdWUgd2lsbCBiZSB0YWtlbiBmcm9tIGJhc2UgY29uZmlndXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgTmFtZSBvZiB0aGUgb3B0aW9uIHdob3NlIHZhbHVlIGlzIHNvdWdodC5cbiAgICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBbY29uZmlnT3B0aW9uTmFtZV0gTmFtZSBvZiBvcHRpb24gdG8gdXNlIF9faW5zdGVhZCBvZl9fIGBvcHRpb25OYW1lYFxuICAgKiAgSUlGIGBjb25maWdPdmVycmlkZU9wdGlvbnNgIGlzIG5vdCBkZWZpbmVkLiBPdGhlcndpc2UsIGBvcHRpb25OYW1lYCBpcyB1c2VkLlxuICAgKi9cbiAgdmFyIGdldE9wdGlvbiA9IGZ1bmN0aW9uIGdldE9wdGlvbihjb25maWdPdmVycmlkZU9wdGlvbnMsIG9wdGlvbk5hbWUsIGNvbmZpZ09wdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gY29uZmlnT3ZlcnJpZGVPcHRpb25zICYmIGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gdW5kZWZpbmVkID8gY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdIDogY29uZmlnW2NvbmZpZ09wdGlvbk5hbWUgfHwgb3B0aW9uTmFtZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtFdmVudH0gW2V2ZW50XVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBJbmRleCBvZiB0aGUgY29udGFpbmVyIGluIGVpdGhlciBgc3RhdGUuY29udGFpbmVyc2Agb3JcbiAgICogIGBzdGF0ZS5jb250YWluZXJHcm91cHNgICh0aGUgb3JkZXIvbGVuZ3RoIG9mIHRoZXNlIGxpc3RzIGFyZSB0aGUgc2FtZSk7IC0xXG4gICAqICBpZiB0aGUgZWxlbWVudCBpc24ndCBmb3VuZC5cbiAgICovXG4gIHZhciBmaW5kQ29udGFpbmVySW5kZXggPSBmdW5jdGlvbiBmaW5kQ29udGFpbmVySW5kZXgoZWxlbWVudCwgZXZlbnQpIHtcbiAgICB2YXIgY29tcG9zZWRQYXRoID0gdHlwZW9mIChldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQuY29tcG9zZWRQYXRoKSA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogdW5kZWZpbmVkO1xuICAgIC8vIE5PVEU6IHNlYXJjaCBgY29udGFpbmVyR3JvdXBzYCBiZWNhdXNlIGl0J3MgcG9zc2libGUgYSBncm91cCBjb250YWlucyBubyB0YWJiYWJsZVxuICAgIC8vICBub2RlcywgYnV0IHN0aWxsIGNvbnRhaW5zIGZvY3VzYWJsZSBub2RlcyAoZS5nLiBpZiB0aGV5IGFsbCBoYXZlIGB0YWJpbmRleD0tMWApXG4gICAgLy8gIGFuZCB3ZSBzdGlsbCBuZWVkIHRvIGZpbmQgdGhlIGVsZW1lbnQgaW4gdGhlcmVcbiAgICByZXR1cm4gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbmRJbmRleChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyLFxuICAgICAgICB0YWJiYWJsZU5vZGVzID0gX3JlZi50YWJiYWJsZU5vZGVzO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KSB8fCAoIC8vIGZhbGwgYmFjayB0byBleHBsaWNpdCB0YWJiYWJsZSBzZWFyY2ggd2hpY2ggd2lsbCB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBhbnlcbiAgICAgIC8vICB3ZWIgY29tcG9uZW50cyBpZiB0aGUgYHRhYmJhYmxlT3B0aW9ucy5nZXRTaGFkb3dSb290YCBvcHRpb24gd2FzIHVzZWQgZm9yXG4gICAgICAvLyAgdGhlIHRyYXAsIGVuYWJsaW5nIHNoYWRvdyBET00gc3VwcG9ydCBpbiB0YWJiYWJsZSAoYE5vZGUuY29udGFpbnMoKWAgZG9lc24ndFxuICAgICAgLy8gIGxvb2sgaW5zaWRlIHdlYiBjb21wb25lbnRzIGV2ZW4gaWYgb3BlbilcbiAgICAgIGNvbXBvc2VkUGF0aCA9PT0gbnVsbCB8fCBjb21wb3NlZFBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250YWluZXIpKSB8fCB0YWJiYWJsZU5vZGVzLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbm9kZSBmb3IgdGhlIGdpdmVuIG9wdGlvbiwgd2hpY2ggaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb3B0aW9uIHRoYXRcbiAgICogIGNhbiBiZSBlaXRoZXIgYSBET00gbm9kZSwgYSBzdHJpbmcgdGhhdCBpcyBhIHNlbGVjdG9yIHRvIGdldCBhIG5vZGUsIGBmYWxzZWBcbiAgICogIChpZiBhIG5vZGUgaXMgZXhwbGljaXRseSBOT1QgZ2l2ZW4pLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbnkgb2YgdGhlc2VcbiAgICogIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWVcbiAgICogQHJldHVybnMge3VuZGVmaW5lZCB8IGZhbHNlIHwgSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50fSBSZXR1cm5zXG4gICAqICBgdW5kZWZpbmVkYCBpZiB0aGUgb3B0aW9uIGlzIG5vdCBzcGVjaWZpZWQ7IGBmYWxzZWAgaWYgdGhlIG9wdGlvblxuICAgKiAgcmVzb2x2ZWQgdG8gYGZhbHNlYCAobm9kZSBleHBsaWNpdGx5IG5vdCBnaXZlbik7IG90aGVyd2lzZSwgdGhlIHJlc29sdmVkXG4gICAqICBET00gbm9kZS5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBvcHRpb24gaXMgc2V0LCBub3QgYGZhbHNlYCwgYW5kIGlzIG5vdCwgb3IgZG9lcyBub3RcbiAgICogIHJlc29sdmUgdG8gYSBub2RlLlxuICAgKi9cbiAgdmFyIGdldE5vZGVGb3JPcHRpb24gPSBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBwYXJhbXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG4gICAgICBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlLmFwcGx5KHZvaWQgMCwgcGFyYW1zKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvblZhbHVlID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25WYWx1ZSA9IHVuZGVmaW5lZDsgLy8gdXNlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICBpZiAob3B0aW9uVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvblZhbHVlO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSwgZW1wdHkgc3RyaW5nIChpbnZhbGlkKSwgbnVsbCAoaW52YWxpZCksIDAgKGludmFsaWQpXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIHdhcyBzcGVjaWZpZWQgYnV0IHdhcyBub3QgYSBub2RlLCBvciBkaWQgbm90IHJldHVybiBhIG5vZGVcIikpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlOyAvLyBjb3VsZCBiZSBIVE1MRWxlbWVudCwgU1ZHRWxlbWVudCwgb3Igbm9uLWVtcHR5IHN0cmluZyBhdCB0aGlzIHBvaW50XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTsgLy8gcmVzb2x2ZSB0byBub2RlLCBvciBudWxsIGlmIGZhaWxzXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYFwiLmNvbmNhdChvcHRpb25OYW1lLCBcImAgYXMgc2VsZWN0b3IgcmVmZXJzIHRvIG5vIGtub3duIG5vZGVcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgdmFyIGdldEluaXRpYWxGb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG5cbiAgICAvLyBmYWxzZSBleHBsaWNpdGx5IGluZGljYXRlcyB3ZSB3YW50IG5vIGluaXRpYWxGb2N1cyBhdCBhbGxcbiAgICBpZiAobm9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCB8fCAhaXNGb2N1c2FibGUobm9kZSwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykpIHtcbiAgICAgIC8vIG9wdGlvbiBub3Qgc3BlY2lmaWVkIG5vciBmb2N1c2FibGU6IHVzZSBmYWxsYmFjayBvcHRpb25zXG4gICAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KGRvYy5hY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXTtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcblxuICAgICAgICAvLyBOT1RFOiBgZmFsbGJhY2tGb2N1c2Agb3B0aW9uIGZ1bmN0aW9uIGNhbm5vdCByZXR1cm4gYGZhbHNlYCAobm90IHN1cHBvcnRlZClcbiAgICAgICAgbm9kZSA9IGZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgdmFyIHVwZGF0ZVRhYmJhYmxlTm9kZXMgPSBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHN0YXRlLmNvbnRhaW5lckdyb3VwcyA9IHN0YXRlLmNvbnRhaW5lcnMubWFwKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcblxuICAgICAgLy8gTk9URTogaWYgd2UgaGF2ZSB0YWJiYWJsZSBub2Rlcywgd2UgbXVzdCBoYXZlIGZvY3VzYWJsZSBub2RlczsgZm9jdXNhYmxlIG5vZGVzXG4gICAgICAvLyAgYXJlIGEgc3VwZXJzZXQgb2YgdGFiYmFibGUgbm9kZXNcbiAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IGZvY3VzYWJsZShjb250YWluZXIsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHRhYmJhYmxlTm9kZXM6IHRhYmJhYmxlTm9kZXMsXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzOiBmb2N1c2FibGVOb2RlcyxcbiAgICAgICAgZmlyc3RUYWJiYWJsZU5vZGU6IHRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMCA/IHRhYmJhYmxlTm9kZXNbMF0gOiBudWxsLFxuICAgICAgICBsYXN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIF9fdGFiYmFibGVfXyBub2RlIHRoYXQgZm9sbG93cyB0aGUgZ2l2ZW4gbm9kZSBpbiB0aGUgc3BlY2lmaWVkIGRpcmVjdGlvbixcbiAgICAgICAgICogIGluIHRoaXMgY29udGFpbmVyLCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yd2FyZF0gVHJ1ZSBpZiBnb2luZyBpbiBmb3J3YXJkIHRhYiBvcmRlcjsgZmFsc2UgaWYgZ29pbmdcbiAgICAgICAgICogIGluIHJldmVyc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHx1bmRlZmluZWR9IFRoZSBuZXh0IHRhYmJhYmxlIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG4gICAgICAgIG5leHRUYWJiYWJsZU5vZGU6IGZ1bmN0aW9uIG5leHRUYWJiYWJsZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBmb3J3YXJkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgICAgIC8vIE5PVEU6IElmIHRhYmluZGV4IGlzIHBvc2l0aXZlIChpbiBvcmRlciB0byBtYW5pcHVsYXRlIHRoZSB0YWIgb3JkZXIgc2VwYXJhdGVcbiAgICAgICAgICAvLyAgZnJvbSB0aGUgRE9NIG9yZGVyKSwgdGhpcyBfX3dpbGwgbm90IHdvcmtfXyBiZWNhdXNlIHRoZSBsaXN0IG9mIGZvY3VzYWJsZU5vZGVzLFxuICAgICAgICAgIC8vICB3aGlsZSBpdCBjb250YWlucyB0YWJiYWJsZSBub2RlcywgZG9lcyBub3Qgc29ydCBpdHMgbm9kZXMgaW4gYW55IG9yZGVyIG90aGVyXG4gICAgICAgICAgLy8gIHRoYW4gRE9NIG9yZGVyLCBiZWNhdXNlIGl0IGNhbid0OiBXaGVyZSB3b3VsZCB5b3UgcGxhY2UgZm9jdXNhYmxlIChidXQgbm90XG4gICAgICAgICAgLy8gIHRhYmJhYmxlKSBub2RlcyBpbiB0aGF0IG9yZGVyPyBUaGV5IGhhdmUgbm8gb3JkZXIsIGJlY2F1c2UgdGhleSBhcmVuJ3QgdGFiYmFsZS4uLlxuICAgICAgICAgIC8vIFN1cHBvcnQgZm9yIHBvc2l0aXZlIHRhYmluZGV4IGlzIGFscmVhZHkgYnJva2VuIGFuZCBoYXJkIHRvIG1hbmFnZSAocG9zc2libHlcbiAgICAgICAgICAvLyAgbm90IHN1cHBvcnRhYmxlLCBUQkQpLCBzbyB0aGlzIGlzbid0IGdvaW5nIHRvIG1ha2UgdGhpbmdzIHdvcnNlIHRoYW4gdGhleVxuICAgICAgICAgIC8vICBhbHJlYWR5IGFyZSwgYW5kIGF0IGxlYXN0IG1ha2VzIHRoaW5ncyBiZXR0ZXIgZm9yIHRoZSBtYWpvcml0eSBvZiBjYXNlcyB3aGVyZVxuICAgICAgICAgIC8vICB0YWJpbmRleCBpcyBlaXRoZXIgMC91bnNldCBvciBuZWdhdGl2ZS5cbiAgICAgICAgICAvLyBGWUksIHBvc2l0aXZlIHRhYmluZGV4IGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwL2lzc3Vlcy8zNzVcbiAgICAgICAgICB2YXIgbm9kZUlkeCA9IGZvY3VzYWJsZU5vZGVzLmZpbmRJbmRleChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIG4gPT09IG5vZGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG5vZGVJZHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZvY3VzYWJsZU5vZGVzLnNsaWNlKG5vZGVJZHggKyAxKS5maW5kKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1RhYmJhYmxlKG4sIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmb2N1c2FibGVOb2Rlcy5zbGljZSgwLCBub2RlSWR4KS5yZXZlcnNlKCkuZmluZChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUobiwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgc3RhdGUudGFiYmFibGVHcm91cHMgPSBzdGF0ZS5jb250YWluZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIGdyb3VwLnRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMDtcbiAgICB9KTtcblxuICAgIC8vIHRocm93IGlmIG5vIGdyb3VwcyBoYXZlIHRhYmJhYmxlIG5vZGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgZmFsbGJhY2sgZm9jdXMgbm9kZSBlaXRoZXJcbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIDw9IDAgJiYgIWdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKSAvLyByZXR1cm5pbmcgZmFsc2Ugbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBvcHRpb25cbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBmb2N1cy10cmFwIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY29udGFpbmVyIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgYXQgYWxsIHRpbWVzJyk7XG4gICAgfVxuICB9O1xuICB2YXIgdHJ5Rm9jdXMgPSBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUuZm9jdXMoe1xuICAgICAgcHJldmVudFNjcm9sbDogISFjb25maWcucHJldmVudFNjcm9sbFxuICAgIH0pO1xuICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gbm9kZTtcbiAgICBpZiAoaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuICB2YXIgZ2V0UmV0dXJuRm9jdXNOb2RlID0gZnVuY3Rpb24gZ2V0UmV0dXJuRm9jdXNOb2RlKHByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignc2V0UmV0dXJuRm9jdXMnLCBwcmV2aW91c0FjdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlID8gbm9kZSA6IG5vZGUgPT09IGZhbHNlID8gZmFsc2UgOiBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ7XG4gIH07XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICB2YXIgY2hlY2tQb2ludGVyRG93biA9IGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgaWYgKGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGUpID49IDApIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBzaW5jZSBpdCBvY3VycmVkIGluc2lkZSB0aGUgdHJhcFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgLy8gaW1tZWRpYXRlbHkgZGVhY3RpdmF0ZSB0aGUgdHJhcFxuICAgICAgdHJhcC5kZWFjdGl2YXRlKHtcbiAgICAgICAgLy8gTk9URTogYnkgc2V0dGluZyBgcmV0dXJuRm9jdXM6IGZhbHNlYCwgZGVhY3RpdmF0ZSgpIHdpbGwgZG8gbm90aGluZyxcbiAgICAgICAgLy8gIHdoaWNoIHdpbGwgcmVzdWx0IGluIHRoZSBvdXRzaWRlIGNsaWNrIHNldHRpbmcgZm9jdXMgdG8gdGhlIG5vZGVcbiAgICAgICAgLy8gIHRoYXQgd2FzIGNsaWNrZWQgKGFuZCBpZiBub3QgZm9jdXNhYmxlLCB0byBcIm5vdGhpbmdcIik7IGJ5IHNldHRpbmdcbiAgICAgICAgLy8gIGByZXR1cm5Gb2N1czogdHJ1ZWAsIHdlJ2xsIGF0dGVtcHQgdG8gcmUtZm9jdXMgdGhlIG5vZGUgb3JpZ2luYWxseS1mb2N1c2VkXG4gICAgICAgIC8vICBvbiBhY3RpdmF0aW9uIChvciB0aGUgY29uZmlndXJlZCBgc2V0UmV0dXJuRm9jdXNgIG5vZGUpLCB3aGV0aGVyIHRoZVxuICAgICAgICAvLyAgb3V0c2lkZSBjbGljayB3YXMgb24gYSBmb2N1c2FibGUgbm9kZSBvciBub3RcbiAgICAgICAgcmV0dXJuRm9jdXM6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBuZWVkZWQgZm9yIG1vYmlsZSBkZXZpY2VzLlxuICAgIC8vIChJZiB3ZSdsbCBvbmx5IGxldCBgY2xpY2tgIGV2ZW50cyB0aHJvdWdoLFxuICAgIC8vIHRoZW4gb24gbW9iaWxlIHRoZXkgd2lsbCBiZSBibG9ja2VkIGFueXdheXMgaWYgYHRvdWNoc3RhcnRgIGlzIGJsb2NrZWQuKVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2ssIGUpKSB7XG4gICAgICAvLyBhbGxvdyB0aGUgY2xpY2sgb3V0c2lkZSB0aGUgdHJhcCB0byB0YWtlIHBsYWNlXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlLCBwcmV2ZW50IHRoZSBjbGlja1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgdmFyIGNoZWNrRm9jdXNJbiA9IGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVkID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMDtcblxuICAgIC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cbiAgICBpZiAodGFyZ2V0Q29udGFpbmVkIHx8IHRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBpZiAodGFyZ2V0Q29udGFpbmVkKSB7XG4gICAgICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2NhcGVkISBwdWxsIGl0IGJhY2sgaW4gdG8gd2hlcmUgaXQganVzdCBsZWZ0XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGlqYWNrIGtleSBuYXYgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgdmFyIGNoZWNrS2V5TmF2ID0gZnVuY3Rpb24gY2hlY2tLZXlOYXYoZXZlbnQpIHtcbiAgICB2YXIgaXNCYWNrd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChldmVudCk7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIHZhciBkZXN0aW5hdGlvbk5vZGUgPSBudWxsO1xuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhlIHRhcmdldCBpcyBhY3R1YWxseSBjb250YWluZWQgaW4gYSBncm91cFxuICAgICAgLy8gTk9URTogdGhlIHRhcmdldCBtYXkgYWxzbyBiZSB0aGUgY29udGFpbmVyIGl0c2VsZiBpZiBpdCdzIGZvY3VzYWJsZVxuICAgICAgLy8gIHdpdGggdGFiSW5kZXg9Jy0xJyBhbmQgd2FzIGdpdmVuIGluaXRpYWwgZm9jdXNcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGV2ZW50KTtcbiAgICAgIHZhciBjb250YWluZXJHcm91cCA9IGNvbnRhaW5lckluZGV4ID49IDAgPyBzdGF0ZS5jb250YWluZXJHcm91cHNbY29udGFpbmVySW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGNvbnRhaW5lckluZGV4IDwgMCkge1xuICAgICAgICAvLyB0YXJnZXQgbm90IGZvdW5kIGluIGFueSBncm91cDogcXVpdGUgcG9zc2libGUgZm9jdXMgaGFzIGVzY2FwZWQgdGhlIHRyYXAsXG4gICAgICAgIC8vICBzbyBicmluZyBpdCBiYWNrIGludG8uLi5cbiAgICAgICAgaWYgKGlzQmFja3dhcmQpIHtcbiAgICAgICAgICAvLyAuLi50aGUgbGFzdCBub2RlIGluIHRoZSBsYXN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMV0ubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAuLi50aGUgZmlyc3Qgbm9kZSBpbiB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXS5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0JhY2t3YXJkKSB7XG4gICAgICAgIC8vIFJFVkVSU0VcblxuICAgICAgICAvLyBpcyB0aGUgdGFyZ2V0IHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBzdGFydE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gX3JlZjIuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3RhcnRPZkdyb3VwSW5kZXggPCAwICYmIChjb250YWluZXJHcm91cC5jb250YWluZXIgPT09IHRhcmdldCB8fCBpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFpc1RhYmJhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0LCBmYWxzZSkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyBlaXRoZXIgdGhlIGNvbnRhaW5lciBpdHNlbGYsIG9yXG4gICAgICAgICAgLy8gIGEgbm9uLXRhYmJhYmxlIG5vZGUgdGhhdCB3YXMgZ2l2ZW4gZm9jdXMgKGkuZS4gdGFiaW5kZXggaXMgbmVnYXRpdmVcbiAgICAgICAgICAvLyAgYW5kIHVzZXIgY2xpY2tlZCBvbiBpdCBvciBub2RlIHdhcyBwcm9ncmFtbWF0aWNhbGx5IGdpdmVuIGZvY3VzKVxuICAgICAgICAgIC8vICBhbmQgaXMgbm90IGZvbGxvd2VkIGJ5IGFueSBvdGhlciB0YWJiYWJsZSBub2RlLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHNoaWZ0K3RhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBmaXJzdCB0YWJiYWJsZSBub2RlLCBhbmQgZ28gdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgTEFTVCBncm91cFxuICAgICAgICAgIHN0YXJ0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gc2hpZnQrdGFiIHNob3VsZCBnbyB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIHRoZVxuICAgICAgICAgIC8vICBwcmV2aW91cyBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2ZcbiAgICAgICAgICAvLyAgdGhlIExBU1QgZ3JvdXAgaWYgaXQncyB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXBJbmRleCA9IHN0YXJ0T2ZHcm91cEluZGV4ID09PSAwID8gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA6IHN0YXJ0T2ZHcm91cEluZGV4IC0gMTtcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gZGVzdGluYXRpb25Hcm91cC5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIC8vIHVzZXIgbXVzdCBoYXZlIGN1c3RvbWl6ZWQgdGhlIG5hdiBrZXlzIHNvIHdlIGhhdmUgdG8gbW92ZSBmb2N1cyBtYW51YWxseSBfd2l0aGluX1xuICAgICAgICAgIC8vICB0aGUgYWN0aXZlIGdyb3VwOiBkbyB0aGlzIGJhc2VkIG9uIHRoZSBvcmRlciBkZXRlcm1pbmVkIGJ5IHRhYmJhYmxlKClcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGT1JXQVJEXG5cbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBsYXN0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IF9yZWYzLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGl0c2VsZiwgb3JcbiAgICAgICAgICAvLyAgYSBub24tdGFiYmFibGUgbm9kZSB0aGF0IHdhcyBnaXZlbiBmb2N1cyAoaS5lLiB0YWJpbmRleCBpcyBuZWdhdGl2ZVxuICAgICAgICAgIC8vICBhbmQgdXNlciBjbGlja2VkIG9uIGl0IG9yIG5vZGUgd2FzIHByb2dyYW1tYXRpY2FsbHkgZ2l2ZW4gZm9jdXMpXG4gICAgICAgICAgLy8gIGFuZCBpcyBub3QgZm9sbG93ZWQgYnkgYW55IG90aGVyIHRhYmJhYmxlIG5vZGUsIGluIHdoaWNoXG4gICAgICAgICAgLy8gIGNhc2UsIHdlIHNob3VsZCBoYW5kbGUgdGFiIGFzIGlmIGZvY3VzIHdlcmUgb24gdGhlIGNvbnRhaW5lcidzXG4gICAgICAgICAgLy8gIGxhc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cFxuICAgICAgICAgIGxhc3RPZkdyb3VwSW5kZXggPSBjb250YWluZXJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gWUVTOiB0aGVuIHRhYiBzaG91bGQgZ28gdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlIG5leHRcbiAgICAgICAgICAvLyAgZ3JvdXAgKGFuZCB3cmFwIGFyb3VuZCB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1RcbiAgICAgICAgICAvLyAgZ3JvdXAgaWYgaXQncyB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBMQVNUIGdyb3VwKVxuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cEluZGV4ID0gbGFzdE9mR3JvdXBJbmRleCA9PT0gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA/IDAgOiBsYXN0T2ZHcm91cEluZGV4ICsgMTtcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tfZGVzdGluYXRpb25Hcm91cEluZGV4XTtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBfZGVzdGluYXRpb25Hcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgICAvLyB1c2VyIG11c3QgaGF2ZSBjdXN0b21pemVkIHRoZSBuYXYga2V5cyBzbyB3ZSBoYXZlIHRvIG1vdmUgZm9jdXMgbWFudWFsbHkgX3dpdGhpbl9cbiAgICAgICAgICAvLyAgdGhlIGFjdGl2ZSBncm91cDogZG8gdGhpcyBiYXNlZCBvbiB0aGUgb3JkZXIgZGV0ZXJtaW5lZCBieSB0YWJiYWJsZSgpXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vIGdyb3VwcyBhdmFpbGFibGVcbiAgICAgIC8vIE5PVEU6IHRoZSBmYWxsYmFja0ZvY3VzIG9wdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHJldHVybmluZyBmYWxzZSB0byBvcHQtb3V0XG4gICAgICBkZXN0aW5hdGlvbk5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuICAgIGlmIChkZXN0aW5hdGlvbk5vZGUpIHtcbiAgICAgIGlmIChpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAvLyBzaW5jZSB0YWIgbmF0aXZlbHkgbW92ZXMgZm9jdXMsIHdlIHdvdWxkbid0IGhhdmUgYSBkZXN0aW5hdGlvbiBub2RlIHVubGVzcyB3ZVxuICAgICAgICAvLyAgd2VyZSBvbiB0aGUgZWRnZSBvZiBhIGNvbnRhaW5lciBhbmQgaGFkIHRvIG1vdmUgdG8gdGhlIG5leHQvcHJldmlvdXMgZWRnZSwgaW5cbiAgICAgICAgLy8gIHdoaWNoIGNhc2Ugd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgdG8ga2VlcCB0aGUgYnJvd3NlciBmcm9tIG1vdmluZyBmb2N1c1xuICAgICAgICAvLyAgdG8gd2hlcmUgaXQgbm9ybWFsbHkgd291bGRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHRyeUZvY3VzKGRlc3RpbmF0aW9uTm9kZSk7XG4gICAgfVxuICAgIC8vIGVsc2UsIGxldCB0aGUgYnJvd3NlciB0YWtlIGNhcmUgb2YgW3NoaWZ0K110YWIgYW5kIG1vdmUgdGhlIGZvY3VzXG4gIH07XG5cbiAgdmFyIGNoZWNrS2V5ID0gZnVuY3Rpb24gY2hlY2tLZXkoZXZlbnQpIHtcbiAgICBpZiAoaXNFc2NhcGVFdmVudChldmVudCkgJiYgdmFsdWVPckhhbmRsZXIoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzLCBldmVudCkgIT09IGZhbHNlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuaXNLZXlGb3J3YXJkKGV2ZW50KSB8fCBjb25maWcuaXNLZXlCYWNrd2FyZChldmVudCkpIHtcbiAgICAgIGNoZWNrS2V5TmF2KGV2ZW50LCBjb25maWcuaXNLZXlCYWNrd2FyZChldmVudCkpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGNoZWNrQ2xpY2sgPSBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2ssIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIC8vXG4gIC8vIEVWRU5UIExJU1RFTkVSU1xuICAvL1xuXG4gIHZhciBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKTtcblxuICAgIC8vIERlbGF5IGVuc3VyZXMgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnRcbiAgICAvLyB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uLlxuICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSBjb25maWcuZGVsYXlJbml0aWFsRm9jdXMgPyBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pIDogdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH07XG4gIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuICAgIHJldHVybiB0cmFwO1xuICB9O1xuXG4gIC8vXG4gIC8vIE1VVEFUSU9OIE9CU0VSVkVSXG4gIC8vXG5cbiAgdmFyIGNoZWNrRG9tUmVtb3ZhbCA9IGZ1bmN0aW9uIGNoZWNrRG9tUmVtb3ZhbChtdXRhdGlvbnMpIHtcbiAgICB2YXIgaXNGb2N1c2VkTm9kZVJlbW92ZWQgPSBtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHZhciByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG4gICAgICByZXR1cm4gcmVtb3ZlZE5vZGVzLnNvbWUoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXMgcmVtb3ZlZCB0aGVuIGJyb3dzZXJzIHdpbGwgbW92ZSBmb2N1cyB0byB0aGVcbiAgICAvLyA8Ym9keT4gZWxlbWVudC4gSWYgdGhpcyBoYXBwZW5zLCB0cnkgdG8gbW92ZSBmb2N1cyBiYWNrIGludG8gdGhlIHRyYXAuXG4gICAgaWYgKGlzRm9jdXNlZE5vZGVSZW1vdmVkKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciAtIGlmIHN1cHBvcnRlZCAtIHRvIGRldGVjdCBpZiBmb2N1c2VkIG5vZGUgaXMgcmVtb3ZlZFxuICAvLyBmcm9tIHRoZSBET00uXG4gIHZhciBtdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNoZWNrRG9tUmVtb3ZhbCkgOiB1bmRlZmluZWQ7XG4gIHZhciB1cGRhdGVPYnNlcnZlZE5vZGVzID0gZnVuY3Rpb24gdXBkYXRlT2JzZXJ2ZWROb2RlcygpIHtcbiAgICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZSAmJiAhc3RhdGUucGF1c2VkKSB7XG4gICAgICBzdGF0ZS5jb250YWluZXJzLm1hcChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvL1xuICAvLyBUUkFQIERFRklOSVRJT05cbiAgLy9cblxuICB0cmFwID0ge1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYWN0aXZlO1xuICAgIH0sXG4gICAgZ2V0IHBhdXNlZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wYXVzZWQ7XG4gICAgfSxcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uQWN0aXZhdGUgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnb25BY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uUG9zdEFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5Gb2N1c1RyYXAgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnY2hlY2tDYW5Gb2N1c1RyYXAnKTtcbiAgICAgIGlmICghY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBvbkFjdGl2YXRlID09PSBudWxsIHx8IG9uQWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQWN0aXZhdGUoKTtcbiAgICAgIHZhciBmaW5pc2hBY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICAgIG9uUG9zdEFjdGl2YXRlID09PSBudWxsIHx8IG9uUG9zdEFjdGl2YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3RBY3RpdmF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICBjaGVja0NhbkZvY3VzVHJhcChzdGF0ZS5jb250YWluZXJzLmNvbmNhdCgpKS50aGVuKGZpbmlzaEFjdGl2YXRpb24sIGZpbmlzaEFjdGl2YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGZpbmlzaEFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgb25EZWFjdGl2YXRlOiBjb25maWcub25EZWFjdGl2YXRlLFxuICAgICAgICBvblBvc3REZWFjdGl2YXRlOiBjb25maWcub25Qb3N0RGVhY3RpdmF0ZSxcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1czogY29uZmlnLmNoZWNrQ2FuUmV0dXJuRm9jdXNcbiAgICAgIH0sIGRlYWN0aXZhdGVPcHRpb25zKTtcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyKTsgLy8gbm9vcCBpZiB1bmRlZmluZWRcbiAgICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICBhY3RpdmVGb2N1c1RyYXBzLmRlYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCk7XG4gICAgICB2YXIgb25EZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdvbkRlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3REZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdvblBvc3REZWFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5SZXR1cm5Gb2N1cyA9IGdldE9wdGlvbihvcHRpb25zLCAnY2hlY2tDYW5SZXR1cm5Gb2N1cycpO1xuICAgICAgdmFyIHJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdyZXR1cm5Gb2N1cycsICdyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZScpO1xuICAgICAgb25EZWFjdGl2YXRlID09PSBudWxsIHx8IG9uRGVhY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25EZWFjdGl2YXRlKCk7XG4gICAgICB2YXIgZmluaXNoRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoRGVhY3RpdmF0aW9uKCkge1xuICAgICAgICBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICAgICAgICB0cnlGb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9uUG9zdERlYWN0aXZhdGUgPT09IG51bGwgfHwgb25Qb3N0RGVhY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0RGVhY3RpdmF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAocmV0dXJuRm9jdXMgJiYgY2hlY2tDYW5SZXR1cm5Gb2N1cykge1xuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKS50aGVuKGZpbmlzaERlYWN0aXZhdGlvbiwgZmluaXNoRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmaW5pc2hEZWFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKHBhdXNlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uUGF1c2UgPSBnZXRPcHRpb24ocGF1c2VPcHRpb25zLCAnb25QYXVzZScpO1xuICAgICAgdmFyIG9uUG9zdFBhdXNlID0gZ2V0T3B0aW9uKHBhdXNlT3B0aW9ucywgJ29uUG9zdFBhdXNlJyk7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgb25QYXVzZSA9PT0gbnVsbCB8fCBvblBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBhdXNlKCk7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIG9uUG9zdFBhdXNlID09PSBudWxsIHx8IG9uUG9zdFBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3RQYXVzZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1bnBhdXNlOiBmdW5jdGlvbiB1bnBhdXNlKHVucGF1c2VPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uVW5wYXVzZSA9IGdldE9wdGlvbih1bnBhdXNlT3B0aW9ucywgJ29uVW5wYXVzZScpO1xuICAgICAgdmFyIG9uUG9zdFVucGF1c2UgPSBnZXRPcHRpb24odW5wYXVzZU9wdGlvbnMsICdvblBvc3RVbnBhdXNlJyk7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIG9uVW5wYXVzZSA9PT0gbnVsbCB8fCBvblVucGF1c2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVW5wYXVzZSgpO1xuICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICBvblBvc3RVbnBhdXNlID09PSBudWxsIHx8IG9uUG9zdFVucGF1c2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUG9zdFVucGF1c2UoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdXBkYXRlQ29udGFpbmVyRWxlbWVudHM6IGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGNvbnRhaW5lckVsZW1lbnRzKSB7XG4gICAgICB2YXIgZWxlbWVudHNBc0FycmF5ID0gW10uY29uY2F0KGNvbnRhaW5lckVsZW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBzdGF0ZS5jb250YWluZXJzID0gZWxlbWVudHNBc0FycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50c1xuICB0cmFwLnVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGVsZW1lbnRzKTtcbiAgcmV0dXJuIHRyYXA7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVGb2N1c1RyYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvY3VzLXRyYXAuZXNtLmpzLm1hcFxuIiwiLyohXG4qIHRhYmJhYmxlIDYuMS4yXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbi8vIE5PVEU6IHNlcGFyYXRlIGA6bm90KClgIHNlbGVjdG9ycyBoYXMgYnJvYWRlciBicm93c2VyIHN1cHBvcnQgdGhhbiB0aGUgbmV3ZXJcbi8vICBgOm5vdChbaW5lcnRdLCBbaW5lcnRdICopYCAoRmViIDIwMjMpXG4vLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBzdXBwb3J0IGA6bm90KFtpbmVydF0gKilgIGFzIGEgc2VsZWN0b3I7IHVzaW5nIGl0IGNhdXNlc1xuLy8gIHRoZSBlbnRpcmUgcXVlcnkgdG8gZmFpbCwgcmVzdWx0aW5nIGluIG5vIG5vZGVzIGZvdW5kLCB3aGljaCB3aWxsIGJyZWFrIGEgbG90XG4vLyAgb2YgdGhpbmdzLi4uIHNvIHdlIGhhdmUgdG8gcmVseSBvbiBKUyB0byBpZGVudGlmeSBub2RlcyBpbnNpZGUgYW4gaW5lcnQgY29udGFpbmVyXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dDpub3QoW2luZXJ0XSknLCAnc2VsZWN0Om5vdChbaW5lcnRdKScsICd0ZXh0YXJlYTpub3QoW2luZXJ0XSknLCAnYVtocmVmXTpub3QoW2luZXJ0XSknLCAnYnV0dG9uOm5vdChbaW5lcnRdKScsICdbdGFiaW5kZXhdOm5vdChzbG90KTpub3QoW2luZXJ0XSknLCAnYXVkaW9bY29udHJvbHNdOm5vdChbaW5lcnRdKScsICd2aWRlb1tjb250cm9sc106bm90KFtpbmVydF0pJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pOm5vdChbaW5lcnRdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZTpub3QoW2luZXJ0XSknLCAnZGV0YWlsczpub3QoW2luZXJ0XSknXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgTm9FbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnO1xudmFyIG1hdGNoZXMgPSBOb0VsZW1lbnQgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xudmFyIGdldFJvb3ROb2RlID0gIU5vRWxlbWVudCAmJiBFbGVtZW50LnByb3RvdHlwZS5nZXRSb290Tm9kZSA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRnZXRSb290Tm9kZTtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9lbGVtZW50JGdldFJvb3ROb2RlID0gZWxlbWVudC5nZXRSb290Tm9kZSkgPT09IG51bGwgfHwgX2VsZW1lbnQkZ2V0Um9vdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lbGVtZW50JGdldFJvb3ROb2RlLmNhbGwoZWxlbWVudCk7XG59IDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5vd25lckRvY3VtZW50O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyBpbmVydCBvciBpbiBhbiBpbmVydCBhbmNlc3Rvci5cbiAqIEBwYXJhbSB7RWxlbWVudH0gW25vZGVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtsb29rVXBdIElmIHRydWUgYW5kIGBub2RlYCBpcyBub3QgaW5lcnQsIGxvb2tzIHVwIGF0IGFuY2VzdG9ycyB0b1xuICogIHNlZSBpZiBhbnkgb2YgdGhlbSBhcmUgaW5lcnQuIElmIGZhbHNlLCBvbmx5IGBub2RlYCBpdHNlbGYgaXMgY29uc2lkZXJlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGluZXJ0IGl0c2VsZiBvciBieSB3YXkgb2YgYmVpbmcgaW4gYW4gaW5lcnQgYW5jZXN0b3IuXG4gKiAgRmFsc2UgaWYgYG5vZGVgIGlzIGZhbHN5LlxuICovXG52YXIgaXNJbmVydCA9IGZ1bmN0aW9uIGlzSW5lcnQobm9kZSwgbG9va1VwKSB7XG4gIHZhciBfbm9kZSRnZXRBdHRyaWJ1dGU7XG4gIGlmIChsb29rVXAgPT09IHZvaWQgMCkge1xuICAgIGxvb2tVcCA9IHRydWU7XG4gIH1cbiAgLy8gQ0FSRUZVTDogSlNEb20gZG9lcyBub3Qgc3VwcG9ydCBpbmVydCBhdCBhbGwsIHNvIHdlIGNhbid0IHVzZSB0aGUgYEhUTUxFbGVtZW50LmluZXJ0YFxuICAvLyAgSlMgQVBJIHByb3BlcnR5OyB3ZSBoYXZlIHRvIGNoZWNrIHRoZSBhdHRyaWJ1dGUsIHdoaWNoIGNhbiBlaXRoZXIgYmUgZW1wdHkgb3IgJ3RydWUnO1xuICAvLyAgaWYgaXQncyBgbnVsbGAgKG5vdCBzcGVjaWZpZWQpIG9yICdmYWxzZScsIGl0J3MgYW4gYWN0aXZlIGVsZW1lbnRcbiAgdmFyIGluZXJ0QXR0ID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUpID09PSBudWxsIHx8IF9ub2RlJGdldEF0dHJpYnV0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGUkZ2V0QXR0cmlidXRlLmNhbGwobm9kZSwgJ2luZXJ0Jyk7XG4gIHZhciBpbmVydCA9IGluZXJ0QXR0ID09PSAnJyB8fCBpbmVydEF0dCA9PT0gJ3RydWUnO1xuXG4gIC8vIE5PVEU6IHRoaXMgY291bGQgYWxzbyBiZSBoYW5kbGVkIHdpdGggYG5vZGUubWF0Y2hlcygnW2luZXJ0XSwgOmlzKFtpbmVydF0gKiknKWBcbiAgLy8gIGlmIGl0IHdlcmVuJ3QgZm9yIGBtYXRjaGVzKClgIG5vdCBiZWluZyBhIGZ1bmN0aW9uIG9uIHNoYWRvdyByb290czsgdGhlIGZvbGxvd2luZ1xuICAvLyAgY29kZSB3b3JrcyBmb3IgYW55IGtpbmQgb2Ygbm9kZVxuICAvLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBjZXJ0YWluIHNlbGVjdG9ycyBsaWtlIGA6bm90KFtpbmVydF0gKilgXG4gIC8vICBzbyBpdCBsaWtlbHkgd291bGQgbm90IHN1cHBvcnQgYDppcyhbaW5lcnRdICopYCBlaXRoZXIuLi5cbiAgdmFyIHJlc3VsdCA9IGluZXJ0IHx8IGxvb2tVcCAmJiBub2RlICYmIGlzSW5lcnQobm9kZS5wYXJlbnROb2RlKTsgLy8gcmVjdXJzaXZlXG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUncyBjb250ZW50IGlzIGVkaXRhYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBbbm9kZV1cbiAqIEByZXR1cm5zIFRydWUgaWYgaXQncyBjb250ZW50LWVkaXRhYmxlOyBmYWxzZSBpZiBpdCdzIG5vdCBvciBgbm9kZWAgaXMgZmFsc3kuXG4gKi9cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEF0dHJpYnV0ZTI7XG4gIC8vIENBUkVGVUw6IEpTRG9tIGRvZXMgbm90IHN1cHBvcnQgdGhlIGBIVE1MRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZWAgQVBJIHNvIHdlIGhhdmVcbiAgLy8gIHRvIHVzZSB0aGUgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGNoZWNrIGZvciB0aGlzLCB3aGljaCBjYW4gZWl0aGVyIGJlIGVtcHR5IG9yICd0cnVlJztcbiAgLy8gIGlmIGl0J3MgYG51bGxgIChub3Qgc3BlY2lmaWVkKSBvciAnZmFsc2UnLCBpdCdzIGEgbm9uLWVkaXRhYmxlIGVsZW1lbnRcbiAgdmFyIGF0dFZhbHVlID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlMiA9IG5vZGUuZ2V0QXR0cmlidXRlKSA9PT0gbnVsbCB8fCBfbm9kZSRnZXRBdHRyaWJ1dGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRnZXRBdHRyaWJ1dGUyLmNhbGwobm9kZSwgJ2NvbnRlbnRlZGl0YWJsZScpO1xuICByZXR1cm4gYXR0VmFsdWUgPT09ICcnIHx8IGF0dFZhbHVlID09PSAndHJ1ZSc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgY29udGFpbmVyIHRvIGNoZWNrIGluXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciB0byBjaGVja1xuICogQHBhcmFtIHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICAvLyBldmVuIGlmIGBpbmNsdWRlQ29udGFpbmVyPWZhbHNlYCwgd2Ugc3RpbGwgaGF2ZSB0byBjaGVjayBpdCBmb3IgaW5lcnRuZXNzIGJlY2F1c2VcbiAgLy8gIGlmIGl0J3MgaW5lcnQsIGFsbCBpdHMgY2hpbGRyZW4gYXJlIGluZXJ0XG4gIGlmIChpc0luZXJ0KGVsKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBHZXRTaGFkb3dSb290XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdG8gY2hlY2sgZm9yIHNoYWRvdyByb290XG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdHxib29sZWFufSBTaGFkb3dSb290IGlmIGF2YWlsYWJsZSBvciBib29sZWFuIGluZGljYXRpbmcgaWYgYSBzaGFkb3dSb290IGlzIGF0dGFjaGVkIGJ1dCBub3QgYXZhaWxhYmxlLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNoYWRvd1Jvb3RGaWx0ZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2hhZG93SG9zdE5vZGUgdGhlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgc2hhZG93IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGEgc2hhZG93IHJvb3QgY291bGQgcG90ZW50aWFsbHkgY29udGFpbiB2YWxpZCBjYW5kaWRhdGVzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2FuZGlkYXRlU2NvcGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gc2NvcGVQYXJlbnQgY29udGFpbnMgaW5uZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGNhbmRpZGF0ZXMgbGlzdCBvZiBjYW5kaWRhdGVzIGZvdW5kIGluIHRoZSBzY29wZSBwYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEl0ZXJhdGl2ZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7R2V0U2hhZG93Um9vdHxib29sZWFufSBnZXRTaGFkb3dSb290IHRydWUgaWYgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZDsgZmFsc3kgaWYgbm90O1xuICogIGlmIGEgZnVuY3Rpb24sIGltcGxpZXMgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZCBhbmQgZWl0aGVyIHJldHVybnMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnRcbiAqICBvciBhIGJvb2xlYW4gc3RhdGluZyBpZiBpdCBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHJvb3RcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBmbGF0dGVuIGlmIHRydWUgdGhlbiByZXN1bHQgd2lsbCBmbGF0dGVuIGFueSBDYW5kaWRhdGVTY29wZSBpbnRvIHRoZSByZXR1cm5lZCBsaXN0XG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RGaWx0ZXJ9IHNoYWRvd1Jvb3RGaWx0ZXIgZmlsdGVyIHNoYWRvdyByb290cztcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbGVtZW50cyBsaXN0IG9mIGVsZW1lbnQgY29udGFpbmVycyB0byBtYXRjaCBjYW5kaWRhdGVzIGZyb21cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvbnRhaW5lciBhZGQgY29udGFpbmVyIGxpc3QgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SXRlcmF0aXZlT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0FycmF5LjxFbGVtZW50fENhbmRpZGF0ZVNjb3BlPn1cbiAqL1xudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG4gIHdoaWxlIChlbGVtZW50c1RvQ2hlY2subGVuZ3RoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1RvQ2hlY2suc2hpZnQoKTtcbiAgICBpZiAoaXNJbmVydChlbGVtZW50LCBmYWxzZSkpIHtcbiAgICAgIC8vIG5vIG5lZWQgdG8gbG9vayB1cCBzaW5jZSB3ZSdyZSBkcmlsbGluZyBkb3duXG4gICAgICAvLyBhbnl0aGluZyBpbnNpZGUgdGhpcyBjb250YWluZXIgd2lsbCBhbHNvIGJlIGluZXJ0XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgIHNjb3BlUGFyZW50OiBlbGVtZW50LFxuICAgICAgICAgIGNhbmRpZGF0ZXM6IG5lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGNhbmRpZGF0ZSBlbGVtZW50XG4gICAgICB2YXIgdmFsaWRDYW5kaWRhdGUgPSBtYXRjaGVzLmNhbGwoZWxlbWVudCwgY2FuZGlkYXRlU2VsZWN0b3IpO1xuICAgICAgaWYgKHZhbGlkQ2FuZGlkYXRlICYmIG9wdGlvbnMuZmlsdGVyKGVsZW1lbnQpICYmIChpbmNsdWRlQ29udGFpbmVyIHx8ICFlbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KSkpIHtcbiAgICAgICAgY2FuZGlkYXRlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgc2hhZG93IGNvbnRlbnQgaWYgcG9zc2libGVcbiAgICAgIHZhciBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290IHx8XG4gICAgICAvLyBjaGVjayBmb3IgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5nZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuZ2V0U2hhZG93Um9vdChlbGVtZW50KTtcblxuICAgICAgLy8gbm8gaW5lcnQgbG9vayB1cCBiZWNhdXNlIHdlJ3JlIGFscmVhZHkgZHJpbGxpbmcgZG93biBhbmQgY2hlY2tpbmcgZm9yIGluZXJ0bmVzc1xuICAgICAgLy8gIG9uIHRoZSB3YXkgZG93biwgc28gYWxsIGNvbnRhaW5lcnMgdG8gdGhpcyByb290IG5vZGUgc2hvdWxkIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAvLyAgdmV0dGVkIGFzIG5vbi1pbmVydFxuICAgICAgdmFyIHZhbGlkU2hhZG93Um9vdCA9ICFpc0luZXJ0KHNoYWRvd1Jvb3QsIGZhbHNlKSAmJiAoIW9wdGlvbnMuc2hhZG93Um9vdEZpbHRlciB8fCBvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIoZWxlbWVudCkpO1xuICAgICAgaWYgKHNoYWRvd1Jvb3QgJiYgdmFsaWRTaGFkb3dSb290KSB7XG4gICAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNjb3BlIElJRiBhIHNoYWRvdyByb290IG5vZGUgd2FzIGdpdmVuOyBvdGhlcndpc2UsIGFuIHVuZGlzY2xvc2VkXG4gICAgICAgIC8vICBzaGFkb3cgZXhpc3RzLCBzbyBsb29rIGF0IGxpZ2h0IGRvbSBjaGlsZHJlbiBhcyBmYWxsYmFjayBCVVQgY3JlYXRlIGEgc2NvcGUgZm9yIGFueVxuICAgICAgICAvLyAgY2hpbGQgY2FuZGlkYXRlcyBmb3VuZCBiZWNhdXNlIHRoZXkncmUgbGlrZWx5IHNsb3R0ZWQgZWxlbWVudHMgKGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vICBjaGlsZHJlbiBvZiB0aGUgd2ViIGNvbXBvbmVudCBlbGVtZW50ICh3aGljaCBoYXMgdGhlIHNoYWRvdyksIGluIHRoZSBsaWdodCBkb20sIGJ1dFxuICAgICAgICAvLyAgc2xvdHRlZCBzb21ld2hlcmUgX2luc2lkZV8gdGhlIHVuZGlzY2xvc2VkIHNoYWRvdykgLS0gdGhlIHNjb3BlIGlzIGNyZWF0ZWQgYmVsb3csXG4gICAgICAgIC8vICBfYWZ0ZXJfIHdlIHJldHVybiBmcm9tIHRoaXMgcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgdmFyIF9uZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KHNoYWRvd1Jvb3QgPT09IHRydWUgPyBlbGVtZW50LmNoaWxkcmVuIDogc2hhZG93Um9vdC5jaGlsZHJlbiwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmZsYXR0ZW4pIHtcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgX25lc3RlZENhbmRpZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBzY29wZVBhcmVudDogZWxlbWVudCxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IF9uZXN0ZWRDYW5kaWRhdGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlJ3Mgbm90IHNoYWRvdyBzbyBqdXN0IGRpZyBpbnRvIHRoZSBlbGVtZW50J3MgKGxpZ2h0IGRvbSkgY2hpbGRyZW5cbiAgICAgICAgLy8gIF9fd2l0aG91dF9fIGdpdmluZyB0aGUgZWxlbWVudCBzcGVjaWFsIHNjb3BlIHRyZWF0bWVudFxuICAgICAgICBlbGVtZW50c1RvQ2hlY2sudW5zaGlmdC5hcHBseShlbGVtZW50c1RvQ2hlY2ssIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlLCBpc1Njb3BlKSB7XG4gIGlmIChub2RlLnRhYkluZGV4IDwgMCkge1xuICAgIC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAgIC8vIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAgIC8vIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gICAgLy8gb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuICAgIC8vIEFsc28gYnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAgIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICAgIC8vXG4gICAgLy8gaXNTY29wZSBpcyBwb3NpdGl2ZSBmb3IgY3VzdG9tIGVsZW1lbnQgd2l0aCBzaGFkb3cgcm9vdCBvciBzbG90IHRoYXQgYnkgZGVmYXVsdFxuICAgIC8vIGhhdmUgdGFiSW5kZXggLTEsIGJ1dCBuZWVkIHRvIGJlIHNvcnRlZCBieSBkb2N1bWVudCBvcmRlciBpbiBvcmRlciBmb3IgdGhlaXJcbiAgICAvLyBjb250ZW50IHRvIGJlIGluc2VydGVkIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgaWYgKChpc1Njb3BlIHx8IC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSAmJiBpc05hTihwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufTtcbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcbnZhciBpc0hpZGRlbklucHV0ID0gZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59O1xudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIGlzVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgZ2V0Um9vdE5vZGUobm9kZSk7XG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuICB2YXIgcmFkaW9TZXQ7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG4vLyBkZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyB1bHRpbWF0ZWx5IGF0dGFjaGVkIHRvIHRoZSB3aW5kb3cncyBkb2N1bWVudFxudmFyIGlzTm9kZUF0dGFjaGVkID0gZnVuY3Rpb24gaXNOb2RlQXR0YWNoZWQobm9kZSkge1xuICB2YXIgX25vZGVSb290O1xuICAvLyBUaGUgcm9vdCBub2RlIGlzIHRoZSBzaGFkb3cgcm9vdCBpZiB0aGUgbm9kZSBpcyBpbiBhIHNoYWRvdyBET007IHNvbWUgZG9jdW1lbnQgb3RoZXJ3aXNlXG4gIC8vICAoYnV0IE5PVCBfdGhlXyBkb2N1bWVudDsgc2VlIHNlY29uZCAnSWYnIGNvbW1lbnQgYmVsb3cgZm9yIG1vcmUpLlxuICAvLyBJZiByb290Tm9kZSBpcyBzaGFkb3cgcm9vdCwgaXQnbGwgaGF2ZSBhIGhvc3QsIHdoaWNoIGlzIHRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBzaGFkb3dcbiAgLy8gIGlzIGF0dGFjaGVkLCBhbmQgdGhlIG9uZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgaW4gdGhlIGRvY3VtZW50IG9yIG5vdCAoYmVjYXVzZSB0aGVcbiAgLy8gIHNoYWRvdywgYW5kIGFsbCBub2RlcyBpdCBjb250YWlucywgaXMgbmV2ZXIgY29uc2lkZXJlZCBpbiB0aGUgZG9jdW1lbnQgc2luY2Ugc2hhZG93c1xuICAvLyAgYmVoYXZlIGxpa2Ugc2VsZi1jb250YWluZWQgRE9NczsgYnV0IGlmIHRoZSBzaGFkb3cncyBIT1NULCB3aGljaCBpcyBwYXJ0IG9mIHRoZSBkb2N1bWVudCxcbiAgLy8gIGlzIGhpZGRlbiwgb3IgaXMgbm90IGluIHRoZSBkb2N1bWVudCBpdHNlbGYgYnV0IGlzIGRldGFjaGVkLCBpdCB3aWxsIGFmZmVjdCB0aGUgc2hhZG93J3NcbiAgLy8gIHZpc2liaWxpdHksIGluY2x1ZGluZyBhbGwgdGhlIG5vZGVzIGl0IGNvbnRhaW5zKS4gVGhlIGhvc3QgY291bGQgYmUgYW55IG5vcm1hbCBub2RlLFxuICAvLyAgb3IgYSBjdXN0b20gZWxlbWVudCAoaS5lLiB3ZWIgY29tcG9uZW50KS4gRWl0aGVyIHdheSwgdGhhdCdzIHRoZSBvbmUgdGhhdCBpcyBjb25zaWRlcmVkXG4gIC8vICBwYXJ0IG9mIHRoZSBkb2N1bWVudCwgbm90IHRoZSBzaGFkb3cgcm9vdCwgbm9yIGFueSBvZiBpdHMgY2hpbGRyZW4gKGkuZS4gdGhlIG5vZGUgYmVpbmdcbiAgLy8gIHRlc3RlZCkuXG4gIC8vIFRvIGZ1cnRoZXIgY29tcGxpY2F0ZSB0aGluZ3MsIHdlIGhhdmUgdG8gbG9vayBhbGwgdGhlIHdheSB1cCB1bnRpbCB3ZSBmaW5kIGEgc2hhZG93IEhPU1RcbiAgLy8gIHRoYXQgaXMgYXR0YWNoZWQgKG9yIGZpbmQgbm9uZSkgYmVjYXVzZSB0aGUgbm9kZSBtaWdodCBiZSBpbiBuZXN0ZWQgc2hhZG93cy4uLlxuICAvLyBJZiByb290Tm9kZSBpcyBub3QgYSBzaGFkb3cgcm9vdCwgaXQgd29uJ3QgaGF2ZSBhIGhvc3QsIGFuZCBzbyByb290Tm9kZSBzaG91bGQgYmUgdGhlXG4gIC8vICBkb2N1bWVudCAocGVyIHRoZSBkb2NzKSBhbmQgd2hpbGUgaXQncyBhIERvY3VtZW50LXR5cGUgb2JqZWN0LCB0aGF0IGRvY3VtZW50IGRvZXMgbm90XG4gIC8vICBhcHBlYXIgdG8gYmUgdGhlIHNhbWUgYXMgdGhlIG5vZGUncyBgb3duZXJEb2N1bWVudGAgZm9yIHNvbWUgcmVhc29uLCBzbyBpdCdzIHNhZmVyXG4gIC8vICB0byBpZ25vcmUgdGhlIHJvb3ROb2RlIGF0IHRoaXMgcG9pbnQsIGFuZCB1c2UgYG5vZGUub3duZXJEb2N1bWVudGAuIE90aGVyd2lzZSxcbiAgLy8gIHVzaW5nIGByb290Tm9kZS5jb250YWlucyhub2RlKWAgd2lsbCBfYWx3YXlzXyBiZSB0cnVlIHdlJ2xsIGdldCBmYWxzZS1wb3NpdGl2ZXMgd2hlblxuICAvLyAgbm9kZSBpcyBhY3R1YWxseSBkZXRhY2hlZC5cbiAgLy8gTk9URTogSWYgYG5vZGVSb290SG9zdGAgb3IgYG5vZGVgIGhhcHBlbnMgdG8gYmUgdGhlIGBkb2N1bWVudGAgaXRzZWxmICh3aGljaCBpcyBwb3NzaWJsZVxuICAvLyAgaWYgYSB0YWJiYWJsZS9mb2N1c2FibGUgbm9kZSB3YXMgcXVpY2tseSBhZGRlZCB0byB0aGUgRE9NLCBmb2N1c2VkLCBhbmQgdGhlbiByZW1vdmVkXG4gIC8vICBmcm9tIHRoZSBET00gYXMgaW4gaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC1yZWFjdC9pc3N1ZXMvOTA1KSwgdGhlblxuICAvLyAgYG93bmVyRG9jdW1lbnRgIHdpbGwgYmUgYG51bGxgLCBoZW5jZSB0aGUgb3B0aW9uYWwgY2hhaW5pbmcgb24gaXQuXG4gIHZhciBub2RlUm9vdCA9IG5vZGUgJiYgZ2V0Um9vdE5vZGUobm9kZSk7XG4gIHZhciBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290ID0gbm9kZVJvb3QpID09PSBudWxsIHx8IF9ub2RlUm9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVSb290Lmhvc3Q7XG5cbiAgLy8gaW4gc29tZSBjYXNlcywgYSBkZXRhY2hlZCBub2RlIHdpbGwgcmV0dXJuIGl0c2VsZiBhcyB0aGUgcm9vdCBpbnN0ZWFkIG9mIGEgZG9jdW1lbnQgb3JcbiAgLy8gIHNoYWRvdyByb290IG9iamVjdCwgaW4gd2hpY2ggY2FzZSwgd2Ugc2hvdWxkbid0IHRyeSB0byBsb29rIGZ1cnRoZXIgdXAgdGhlIGhvc3QgY2hhaW5cbiAgdmFyIGF0dGFjaGVkID0gZmFsc2U7XG4gIGlmIChub2RlUm9vdCAmJiBub2RlUm9vdCAhPT0gbm9kZSkge1xuICAgIHZhciBfbm9kZVJvb3RIb3N0LCBfbm9kZVJvb3RIb3N0JG93bmVyRG8sIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gICAgYXR0YWNoZWQgPSAhISgoX25vZGVSb290SG9zdCA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdCAhPT0gdm9pZCAwICYmIChfbm9kZVJvb3RIb3N0JG93bmVyRG8gPSBfbm9kZVJvb3RIb3N0Lm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEbyAhPT0gdm9pZCAwICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEby5jb250YWlucyhub2RlUm9vdEhvc3QpIHx8IG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gdm9pZCAwICYmIChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSAhPT0gbnVsbCAmJiBfbm9kZSRvd25lckRvY3VtZW50ICE9PSB2b2lkIDAgJiYgX25vZGUkb3duZXJEb2N1bWVudC5jb250YWlucyhub2RlKSk7XG4gICAgd2hpbGUgKCFhdHRhY2hlZCAmJiBub2RlUm9vdEhvc3QpIHtcbiAgICAgIHZhciBfbm9kZVJvb3QyLCBfbm9kZVJvb3RIb3N0MiwgX25vZGVSb290SG9zdDIkb3duZXJEO1xuICAgICAgLy8gc2luY2UgaXQncyBub3QgYXR0YWNoZWQgYW5kIHdlIGhhdmUgYSByb290IGhvc3QsIHRoZSBub2RlIE1VU1QgYmUgaW4gYSBuZXN0ZWQgc2hhZG93IERPTSxcbiAgICAgIC8vICB3aGljaCBtZWFucyB3ZSBuZWVkIHRvIGdldCB0aGUgaG9zdCdzIGhvc3QgYW5kIGNoZWNrIGlmIHRoYXQgcGFyZW50IGhvc3QgaXMgY29udGFpbmVkXG4gICAgICAvLyAgaW4gKGkuZS4gYXR0YWNoZWQgdG8pIHRoZSBkb2N1bWVudFxuICAgICAgbm9kZVJvb3QgPSBnZXRSb290Tm9kZShub2RlUm9vdEhvc3QpO1xuICAgICAgbm9kZVJvb3RIb3N0ID0gKF9ub2RlUm9vdDIgPSBub2RlUm9vdCkgPT09IG51bGwgfHwgX25vZGVSb290MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVSb290Mi5ob3N0O1xuICAgICAgYXR0YWNoZWQgPSAhISgoX25vZGVSb290SG9zdDIgPSBub2RlUm9vdEhvc3QpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3QyICE9PSB2b2lkIDAgJiYgKF9ub2RlUm9vdEhvc3QyJG93bmVyRCA9IF9ub2RlUm9vdEhvc3QyLm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3QyJG93bmVyRCAhPT0gdm9pZCAwICYmIF9ub2RlUm9vdEhvc3QyJG93bmVyRC5jb250YWlucyhub2RlUm9vdEhvc3QpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGF0dGFjaGVkO1xufTtcbnZhciBpc1plcm9BcmVhID0gZnVuY3Rpb24gaXNaZXJvQXJlYShub2RlKSB7XG4gIHZhciBfbm9kZSRnZXRCb3VuZGluZ0NsaWUgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG4gIHJldHVybiB3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDA7XG59O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgX3JlZikge1xuICB2YXIgZGlzcGxheUNoZWNrID0gX3JlZi5kaXNwbGF5Q2hlY2ssXG4gICAgZ2V0U2hhZG93Um9vdCA9IF9yZWYuZ2V0U2hhZG93Um9vdDtcbiAgLy8gTk9URTogdmlzaWJpbGl0eSB3aWxsIGJlIGB1bmRlZmluZWRgIGlmIG5vZGUgaXMgZGV0YWNoZWQgZnJvbSB0aGUgZG9jdW1lbnRcbiAgLy8gIChzZWUgbm90ZXMgYWJvdXQgdGhpcyBmdXJ0aGVyIGRvd24pLCB3aGljaCBtZWFucyB3ZSB3aWxsIGNvbnNpZGVyIGl0IHZpc2libGVcbiAgLy8gICh0aGlzIGlzIGxlZ2FjeSBiZWhhdmlvciBmcm9tIGEgdmVyeSBsb25nIHdheSBiYWNrKVxuICAvLyBOT1RFOiB3ZSBjaGVjayB0aGlzIHJlZ2FyZGxlc3Mgb2YgYGRpc3BsYXlDaGVjaz1cIm5vbmVcImAgYmVjYXVzZSB0aGlzIGlzIGFcbiAgLy8gIF92aXNpYmlsaXR5XyBjaGVjaywgbm90IGEgX2Rpc3BsYXlfIGNoZWNrXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2xlZ2FjeS1mdWxsJykge1xuICAgIGlmICh0eXBlb2YgZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gZmlndXJlIG91dCBpZiB3ZSBzaG91bGQgY29uc2lkZXIgdGhlIG5vZGUgdG8gYmUgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IGFuZCB1c2UgdGhlXG4gICAgICAvLyAgJ25vbi16ZXJvLWFyZWEnIGZhbGxiYWNrXG4gICAgICB2YXIgb3JpZ2luYWxOb2RlID0gbm9kZTtcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB2YXIgcm9vdE5vZGUgPSBnZXRSb290Tm9kZShub2RlKTtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgJiYgIXBhcmVudEVsZW1lbnQuc2hhZG93Um9vdCAmJiBnZXRTaGFkb3dSb290KHBhcmVudEVsZW1lbnQpID09PSB0cnVlIC8vIGNoZWNrIGlmIHRoZXJlJ3MgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG5vZGUgaGFzIGFuIHVuZGlzY2xvc2VkIHNoYWRvdyB3aGljaCBtZWFucyB3ZSBjYW4gb25seSB0cmVhdCBpdCBhcyBhIGJsYWNrIGJveCwgc28gd2VcbiAgICAgICAgICAvLyAgZmFsbCBiYWNrIHRvIGEgbm9uLXplcm8tYXJlYSB0ZXN0XG4gICAgICAgICAgcmV0dXJuIGlzWmVyb0FyZWEobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIHNsb3RcbiAgICAgICAgICBub2RlID0gbm9kZS5hc3NpZ25lZFNsb3Q7XG4gICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudEVsZW1lbnQgJiYgcm9vdE5vZGUgIT09IG5vZGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIC8vIGNyb3NzIHNoYWRvdyBib3VuZGFyeVxuICAgICAgICAgIG5vZGUgPSByb290Tm9kZS5ob3N0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0ZXJhdGUgdXAgbm9ybWFsIGRvbVxuICAgICAgICAgIG5vZGUgPSBwYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlID0gb3JpZ2luYWxOb2RlO1xuICAgIH1cbiAgICAvLyBlbHNlLCBgZ2V0U2hhZG93Um9vdGAgbWlnaHQgYmUgdHJ1ZSwgYnV0IGFsbCB0aGF0IGRvZXMgaXMgZW5hYmxlIHNoYWRvdyBET00gc3VwcG9ydFxuICAgIC8vICAoaS5lLiBpdCBkb2VzIG5vdCBhbHNvIHByZXN1bWUgdGhhdCBhbGwgbm9kZXMgbWlnaHQgaGF2ZSB1bmRpc2Nsb3NlZCBzaGFkb3dzKTsgb3JcbiAgICAvLyAgaXQgbWlnaHQgYmUgYSBmYWxzeSB2YWx1ZSwgd2hpY2ggbWVhbnMgc2hhZG93IERPTSBzdXBwb3J0IGlzIGRpc2FibGVkXG5cbiAgICAvLyBTaW5jZSB3ZSBkaWRuJ3QgZmluZCBpdCBzaXR0aW5nIGluIGFuIHVuZGlzY2xvc2VkIHNoYWRvdyAob3Igc2hhZG93cyBhcmUgZGlzYWJsZWQpXG4gICAgLy8gIG5vdyB3ZSBjYW4ganVzdCB0ZXN0IHRvIHNlZSBpZiBpdCB3b3VsZCBub3JtYWxseSBiZSB2aXNpYmxlIG9yIG5vdCwgcHJvdmlkZWQgaXQnc1xuICAgIC8vICBhdHRhY2hlZCB0byB0aGUgbWFpbiBkb2N1bWVudC5cbiAgICAvLyBOT1RFOiBXZSBtdXN0IGNvbnNpZGVyIGNhc2Ugd2hlcmUgbm9kZSBpcyBpbnNpZGUgYSBzaGFkb3cgRE9NIGFuZCBnaXZlbiBkaXJlY3RseSB0b1xuICAgIC8vICBgaXNUYWJiYWJsZSgpYCBvciBgaXNGb2N1c2FibGUoKWAgLS0gcmVnYXJkbGVzcyBvZiBgZ2V0U2hhZG93Um9vdGAgb3B0aW9uIHNldHRpbmcuXG5cbiAgICBpZiAoaXNOb2RlQXR0YWNoZWQobm9kZSkpIHtcbiAgICAgIC8vIHRoaXMgd29ya3Mgd2hlcmV2ZXIgdGhlIG5vZGUgaXM6IGlmIHRoZXJlJ3MgYXQgbGVhc3Qgb25lIGNsaWVudCByZWN0LCBpdCdzXG4gICAgICAvLyAgc29tZWhvdyBkaXNwbGF5ZWQ7IGl0IGFsc28gY292ZXJzIHRoZSBDU1MgJ2Rpc3BsYXk6IGNvbnRlbnRzJyBjYXNlIHdoZXJlIHRoZVxuICAgICAgLy8gIG5vZGUgaXRzZWxmIGlzIGhpZGRlbiBpbiBwbGFjZSBvZiBpdHMgY29udGVudHM7IGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gc2VhcmNoXG4gICAgICAvLyAgdXAgdGhlIGhpZXJhcmNoeSBlaXRoZXJcbiAgICAgIHJldHVybiAhbm9kZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBFbHNlLCB0aGUgbm9kZSBpc24ndCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQsIHdoaWNoIG1lYW5zIHRoZSBgZ2V0Q2xpZW50UmVjdHMoKWBcbiAgICAvLyAgQVBJIHdpbGwgX19hbHdheXNfXyByZXR1cm4gemVybyByZWN0cyAodGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgUmVhY3RcbiAgICAvLyAgaXMgdXNlZCB0byByZW5kZXIgbm9kZXMgb250byBhIGRldGFjaGVkIHRyZWUsIGFzIGNvbmZpcm1lZCBpbiB0aGlzIHRocmVhZDpcbiAgICAvLyAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy85MTE3I2lzc3VlY29tbWVudC0yODQyMjg4NzApXG4gICAgLy9cbiAgICAvLyBJdCBhbHNvIG1lYW5zIHRoYXQgZXZlbiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5IHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgLy8gIGJlY2F1c2Ugc3R5bGVzIGFyZSBvbmx5IGNvbXB1dGVkIGZvciBub2RlcyB0aGF0IGFyZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgLy9cbiAgICAvLyBOT1RFOiBUSElTIEhBUyBCRUVOIFRIRSBDQVNFIEZPUiBZRUFSUy4gSXQgaXMgbm90IG5ldywgbm9yIGlzIGl0IGNhdXNlZCBieSB0YWJiYWJsZVxuICAgIC8vICBzb21laG93LiBUaG91Z2ggaXQgd2FzIG5ldmVyIHN0YXRlZCBvZmZpY2lhbGx5LCBhbnlvbmUgd2hvIGhhcyBldmVyIHVzZWQgdGFiYmFibGVcbiAgICAvLyAgQVBJcyBvbiBub2RlcyBpbiBkZXRhY2hlZCBjb250YWluZXJzIGhhcyBhY3R1YWxseSBpbXBsaWNpdGx5IHVzZWQgdGFiYmFibGUgaW4gd2hhdFxuICAgIC8vICB3YXMgbGF0ZXIgKGFzIG9mIHY1LjIuMCBvbiBBcHIgOSwgMjAyMSkgY2FsbGVkIGBkaXNwbGF5Q2hlY2s9XCJub25lXCJgIG1vZGUgLS0gZXNzZW50aWFsbHlcbiAgICAvLyAgY29uc2lkZXJpbmcgX19ldmVyeXRoaW5nX18gdG8gYmUgdmlzaWJsZSBiZWNhdXNlIG9mIHRoZSBpbm5hYmlsaXR5IHRvIGRldGVybWluZSBzdHlsZXMuXG4gICAgLy9cbiAgICAvLyB2Ni4wLjA6IEFzIG9mIHRoaXMgbWFqb3IgcmVsZWFzZSwgdGhlIGRlZmF1bHQgJ2Z1bGwnIG9wdGlvbiBfX25vIGxvbmdlciB0cmVhdHMgZGV0YWNoZWRcbiAgICAvLyAgbm9kZXMgYXMgdmlzaWJsZSB3aXRoIHRoZSAnbm9uZScgZmFsbGJhY2suX19cbiAgICBpZiAoZGlzcGxheUNoZWNrICE9PSAnbGVnYWN5LWZ1bGwnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gaGlkZGVuXG4gICAgfVxuICAgIC8vIGVsc2UsIGZhbGxiYWNrIHRvICdub25lJyBtb2RlIGFuZCBjb25zaWRlciB0aGUgbm9kZSB2aXNpYmxlXG4gIH0gZWxzZSBpZiAoZGlzcGxheUNoZWNrID09PSAnbm9uLXplcm8tYXJlYScpIHtcbiAgICAvLyBOT1RFOiBFdmVuIHRob3VnaCB0aGlzIHRlc3RzIHRoYXQgdGhlIG5vZGUncyBjbGllbnQgcmVjdCBpcyBub24temVybyB0byBkZXRlcm1pbmVcbiAgICAvLyAgd2hldGhlciBpdCdzIGRpc3BsYXllZCwgYW5kIHRoYXQgYSBkZXRhY2hlZCBub2RlIHdpbGwgX19hbHdheXNfXyBoYXZlIGEgemVyby1hcmVhXG4gICAgLy8gIGNsaWVudCByZWN0LCB3ZSBkb24ndCBzcGVjaWFsLWNhc2UgZm9yIHdoZXRoZXIgdGhlIG5vZGUgaXMgYXR0YWNoZWQgb3Igbm90LiBJblxuICAgIC8vICB0aGlzIG1vZGUsIHdlIGRvIHdhbnQgdG8gY29uc2lkZXIgbm9kZXMgdGhhdCBoYXZlIGEgemVybyBhcmVhIHRvIGJlIGhpZGRlbiBhdCBhbGxcbiAgICAvLyAgdGltZXMsIGFuZCB0aGF0IGluY2x1ZGVzIGF0dGFjaGVkIG9yIG5vdC5cbiAgICByZXR1cm4gaXNaZXJvQXJlYShub2RlKTtcbiAgfVxuXG4gIC8vIHZpc2libGUsIGFzIGZhciBhcyB3ZSBjYW4gdGVsbCwgb3IgcGVyIGN1cnJlbnQgYGRpc3BsYXlDaGVjaz1ub25lYCBtb2RlLCB3ZSBhc3N1bWVcbiAgLy8gIGl0J3MgdmlzaWJsZVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBmb3JtIGZpZWxkcyAobmVzdGVkKSBpbnNpZGUgYSBkaXNhYmxlZCBmaWVsZHNldCBhcmUgbm90IGZvY3VzYWJsZS90YWJiYWJsZVxuLy8gIHVubGVzcyB0aGV5IGFyZSBpbiB0aGUgX2ZpcnN0XyA8bGVnZW5kPiBlbGVtZW50IG9mIHRoZSB0b3AtbW9zdCBkaXNhYmxlZFxuLy8gIGZpZWxkc2V0XG52YXIgaXNEaXNhYmxlZEZyb21GaWVsZHNldCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkge1xuICBpZiAoL14oSU5QVVR8QlVUVE9OfFNFTEVDVHxURVhUQVJFQSkkLy50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAvLyBjaGVjayBpZiBgbm9kZWAgaXMgY29udGFpbmVkIGluIGEgZGlzYWJsZWQgPGZpZWxkc2V0PlxuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSAnRklFTERTRVQnICYmIHBhcmVudE5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gbG9vayBmb3IgdGhlIGZpcnN0IDxsZWdlbmQ+IGFtb25nIHRoZSBjaGlsZHJlbiBvZiB0aGUgZGlzYWJsZWQgPGZpZWxkc2V0PlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgICAgLy8gd2hlbiB0aGUgZmlyc3QgPGxlZ2VuZD4gKGluIGRvY3VtZW50IG9yZGVyKSBpcyBmb3VuZFxuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnTEVHRU5EJykge1xuICAgICAgICAgICAgLy8gaWYgaXRzIHBhcmVudCA8ZmllbGRzZXQ+IGlzIG5vdCBuZXN0ZWQgaW4gYW5vdGhlciBkaXNhYmxlZCA8ZmllbGRzZXQ+LFxuICAgICAgICAgICAgLy8gcmV0dXJuIHdoZXRoZXIgYG5vZGVgIGlzIGEgZGVzY2VuZGFudCBvZiBpdHMgZmlyc3QgPGxlZ2VuZD5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwocGFyZW50Tm9kZSwgJ2ZpZWxkc2V0W2Rpc2FibGVkXSAqJykgPyB0cnVlIDogIWNoaWxkLmNvbnRhaW5zKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgZGlzYWJsZWQgPGZpZWxkc2V0PiBjb250YWluaW5nIGBub2RlYCBoYXMgbm8gPGxlZ2VuZD5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8XG4gIC8vIHdlIG11c3QgZG8gYW4gaW5lcnQgbG9vayB1cCB0byBmaWx0ZXIgb3V0IGFueSBlbGVtZW50cyBpbnNpZGUgYW4gaW5lcnQgYW5jZXN0b3JcbiAgLy8gIGJlY2F1c2Ugd2UncmUgbGltaXRlZCBpbiB0aGUgdHlwZSBvZiBzZWxlY3RvcnMgd2UgY2FuIHVzZSBpbiBKU0RvbSAoc2VlIHJlbGF0ZWRcbiAgLy8gIG5vdGUgcmVsYXRlZCB0byBgY2FuZGlkYXRlU2VsZWN0b3JzYClcbiAgaXNJbmVydChub2RlKSB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMpIHx8XG4gIC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCB8fCAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUoc2hhZG93SG9zdE5vZGUpIHtcbiAgdmFyIHRhYkluZGV4ID0gcGFyc2VJbnQoc2hhZG93SG9zdE5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG4gIGlmIChpc05hTih0YWJJbmRleCkgfHwgdGFiSW5kZXggPj0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaGFzIGFuIGV4cGxpY2l0IG5lZ2F0aXZlIHRhYmluZGV4LFxuICAvLyBicm93c2VycyB3aWxsIG5vdCBhbGxvdyB0YWIgdGFyZ2V0aW5nIHNhaWQgZWxlbWVudCdzIGNoaWxkcmVuLlxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPEVsZW1lbnR8Q2FuZGlkYXRlU2NvcGU+fSBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyBFbGVtZW50W11cbiAqL1xudmFyIHNvcnRCeU9yZGVyID0gZnVuY3Rpb24gc29ydEJ5T3JkZXIoY2FuZGlkYXRlcykge1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuICBjYW5kaWRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICB2YXIgaXNTY29wZSA9ICEhaXRlbS5zY29wZVBhcmVudDtcbiAgICB2YXIgZWxlbWVudCA9IGlzU2NvcGUgPyBpdGVtLnNjb3BlUGFyZW50IDogaXRlbTtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChlbGVtZW50LCBpc1Njb3BlKTtcbiAgICB2YXIgZWxlbWVudHMgPSBpc1Njb3BlID8gc29ydEJ5T3JkZXIoaXRlbS5jYW5kaWRhdGVzKSA6IGVsZW1lbnQ7XG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICBpc1Njb3BlID8gcmVndWxhclRhYmJhYmxlcy5wdXNoLmFwcGx5KHJlZ3VsYXJUYWJiYWJsZXMsIGVsZW1lbnRzKSA6IHJlZ3VsYXJUYWJiYWJsZXMucHVzaChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpc1Njb3BlOiBpc1Njb3BlLFxuICAgICAgICBjb250ZW50OiBlbGVtZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcztcbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2VsXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpLFxuICAgICAgZmxhdHRlbjogZmFsc2UsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3QsXG4gICAgICBzaGFkb3dSb290RmlsdGVyOiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG4gIHJldHVybiBzb3J0QnlPcmRlcihjYW5kaWRhdGVzKTtcbn07XG52YXIgZm9jdXNhYmxlID0gZnVuY3Rpb24gZm9jdXNhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcztcbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2VsXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3RcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbnZhciBpc1RhYmJhYmxlID0gZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIHJ9ZnJvbVwiLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydCB0IGZyb21cIi4vQWNjZXNzb3IuanNcIjtpbXBvcnR7YXNzdW1lTm9uTnVsbCBhcyBzfWZyb21cIi4vbWF5YmUuanNcIjtpbXBvcnR7RGVmYXVsdHNTdG9yZSBhcyBvfWZyb21cIi4vYWNjZXNzb3JTdXBwb3J0L0RlZmF1bHRzU3RvcmUuanNcIjtpbXBvcnR7c2V0dXBDb25zdHJ1Y3RlZERlZmF1bHRzIGFzIGV9ZnJvbVwiLi9hY2Nlc3NvclN1cHBvcnQvZGVmYXVsdHNTdG9yZVV0aWxzLmpzXCI7aW1wb3J0e3JlYWQgYXMgaX1mcm9tXCIuL2FjY2Vzc29yU3VwcG9ydC9yZWFkLmpzXCI7aW1wb3J0e2dldFByb3BlcnRpZXMgYXMgY31mcm9tXCIuL2FjY2Vzc29yU3VwcG9ydC91dGlscy5qc1wiO2ltcG9ydHt3cml0ZSBhcyBwfWZyb21cIi4vYWNjZXNzb3JTdXBwb3J0L3dyaXRlLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIGF9ZnJvbVwiLi9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2NvbnN0IHU9dD0+e2xldCB1PWNsYXNzIGV4dGVuZHMgdHtjb25zdHJ1Y3RvciguLi5yKXtzdXBlciguLi5yKTtjb25zdCB0PXMoYyh0aGlzKSksaT10LnN0b3JlLHA9bmV3IG87dC5zdG9yZT1wLGUodCxpLHApfXJlYWQocix0KXtpKHRoaXMscix0KX13cml0ZShyLHQpe3JldHVybiBwKHRoaXMscj8/e30sdCl9dG9KU09OKHIpe3JldHVybiB0aGlzLndyaXRlKHt9LHIpfXN0YXRpYyBmcm9tSlNPTihyLHQpe3JldHVybiBuLmNhbGwodGhpcyxyLHQpfX07cmV0dXJuIHU9cihbYShcImVzcmkuY29yZS5KU09OU3VwcG9ydFwiKV0sdSksdS5wcm90b3R5cGUudG9KU09OLmlzRGVmYXVsdFRvSlNPTj0hMCx1fTtmdW5jdGlvbiBuKHIsdCl7aWYoIXIpcmV0dXJuIG51bGw7aWYoci5kZWNsYXJlZENsYXNzKXRocm93IG5ldyBFcnJvcihcIkpTT04gb2JqZWN0IGlzIGFscmVhZHkgaHlkcmF0ZWRcIik7Y29uc3Qgcz1uZXcgdGhpcztyZXR1cm4gcy5yZWFkKHIsdCksc31mdW5jdGlvbiBtKHIpe3JldHVybiByJiZcInJlYWRcImluIHImJlwid3JpdGVcImluIHImJlwidG9KU09OXCJpbiByfWxldCBsPWNsYXNzIGV4dGVuZHModSh0KSl7fTtsPXIoW2EoXCJlc3JpLmNvcmUuSlNPTlN1cHBvcnRcIildLGwpO2V4cG9ydHtsIGFzIEpTT05TdXBwb3J0LHUgYXMgSlNPTlN1cHBvcnRNaXhpbixtIGFzIGlzSlNPTlN1cHBvcnR9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtjbG9uZSBhcyBpfWZyb21cIi4uL2xhbmcuanNcIjtpbXBvcnR7T3JpZ2luSWQgYXMgZX1mcm9tXCIuL1Byb3BlcnR5T3JpZ2luLmpzXCI7Y2xhc3Mgc3tjb25zdHJ1Y3Rvcigpe3RoaXMuX3ZhbHVlcz1uZXcgTWFwLHRoaXMubXVsdGlwbGVPcmlnaW5zU3VwcG9ydGVkPSExfWNsb25lKGUpe2NvbnN0IHQ9bmV3IHM7cmV0dXJuIHRoaXMuX3ZhbHVlcy5mb3JFYWNoKCgocyxyKT0+e2UmJmUuaGFzKHIpfHx0LnNldChyLGkocy52YWx1ZSkscy5vcmlnaW4pfSkpLHR9Z2V0KGksZSl7ZT10aGlzLl9ub3JtYWxpemVPcmlnaW4oZSk7Y29uc3Qgcz10aGlzLl92YWx1ZXMuZ2V0KGkpO3JldHVybiBudWxsPT1lfHxzPy5vcmlnaW49PT1lP3M/LnZhbHVlOnZvaWQgMH1vcmlnaW5PZihpKXtyZXR1cm4gdGhpcy5fdmFsdWVzLmdldChpKT8ub3JpZ2luPz9lLlVTRVJ9a2V5cyhpKXtpPXRoaXMuX25vcm1hbGl6ZU9yaWdpbihpKTtjb25zdCBlPVsuLi50aGlzLl92YWx1ZXMua2V5cygpXTtyZXR1cm4gbnVsbD09aT9lOmUuZmlsdGVyKChlPT50aGlzLl92YWx1ZXMuZ2V0KGUpPy5vcmlnaW49PT1pKSl9c2V0KGkscyxyKXtpZigocj10aGlzLl9ub3JtYWxpemVPcmlnaW4ocikpPT09ZS5ERUZBVUxUUyl7Y29uc3QgZT10aGlzLl92YWx1ZXMuZ2V0KGkpO2lmKGUmJm51bGwhPWUub3JpZ2luJiZlLm9yaWdpbj5yKXJldHVybn10aGlzLl92YWx1ZXMuc2V0KGksbmV3IHQocyxyKSl9ZGVsZXRlKGksZSl7bnVsbCE9KGU9dGhpcy5fbm9ybWFsaXplT3JpZ2luKGUpKSYmdGhpcy5fdmFsdWVzLmdldChpKT8ub3JpZ2luIT09ZXx8dGhpcy5fdmFsdWVzLmRlbGV0ZShpKX1oYXMoaSxlKXtyZXR1cm4gbnVsbCE9KGU9dGhpcy5fbm9ybWFsaXplT3JpZ2luKGUpKT90aGlzLl92YWx1ZXMuZ2V0KGkpPy5vcmlnaW49PT1lOnRoaXMuX3ZhbHVlcy5oYXMoaSl9Zm9yRWFjaChpKXt0aGlzLl92YWx1ZXMuZm9yRWFjaCgoKHt2YWx1ZTplfSxzKT0+aShlLHMpKSl9X25vcm1hbGl6ZU9yaWdpbihpKXtpZihudWxsIT1pKXJldHVybiBpPT09ZS5ERUZBVUxUUz9pOmUuVVNFUn19Y2xhc3MgdHtjb25zdHJ1Y3RvcihpLGUpe3RoaXMudmFsdWU9aSx0aGlzLm9yaWdpbj1lfX1leHBvcnR7cyBhcyBEZWZhdWx0c1N0b3JlfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7T3JpZ2luSWQgYXMgdH1mcm9tXCIuL1Byb3BlcnR5T3JpZ2luLmpzXCI7ZnVuY3Rpb24gZShlLHIsbil7ci5rZXlzKCkuZm9yRWFjaCgoZT0+e24uc2V0KGUsci5nZXQoZSksdC5ERUZBVUxUUyl9KSk7Y29uc3Qgbz1lLm1ldGFkYXRhcztPYmplY3Qua2V5cyhvKS5mb3JFYWNoKChyPT57ZS5pbnRlcm5hbEdldChyKSYmbi5zZXQocixlLmludGVybmFsR2V0KHIpLHQuREVGQVVMVFMpfSkpfWV4cG9ydHtlIGFzIHNldHVwQ29uc3RydWN0ZWREZWZhdWx0c307XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e3ZhbHVlT2YgYXMgZSxleGlzdHMgYXMgdH1mcm9tXCIuL2dldC5qc1wiO2ltcG9ydHtnZXRQcm9wZXJ0aWVzIGFzIHJ9ZnJvbVwiLi91dGlscy5qc1wiO2ltcG9ydHtvcmlnaW5TcGVjaWZpY1JlYWRQcm9wZXJ0eURlZmluaXRpb24gYXMgbyxvcmlnaW5TcGVjaWZpY1Byb3BlcnR5RGVmaW5pdGlvbiBhcyBufWZyb21cIi4vZXh0ZW5zaW9ucy9zZXJpYWxpemFibGVQcm9wZXJ0eS5qc1wiO2Z1bmN0aW9uIHMoZSxyLG8pe2lmKCFlfHwhZS5yZWFkfHwhMT09PWUucmVhZC5lbmFibGVkfHwhZS5yZWFkLnNvdXJjZSlyZXR1cm4hMTtjb25zdCBuPWUucmVhZC5zb3VyY2U7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe2lmKG49PT1yKXJldHVybiEwO2lmKG4uaW5jbHVkZXMoXCIuXCIpJiYwPT09bi5pbmRleE9mKHIpJiZ0KG4sbykpcmV0dXJuITB9ZWxzZSBmb3IoY29uc3QgcyBvZiBuKXtpZihzPT09cilyZXR1cm4hMDtpZihzLmluY2x1ZGVzKFwiLlwiKSYmMD09PXMuaW5kZXhPZihyKSYmdChzLG8pKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGUmJighZS5yZWFkfHwhMSE9PWUucmVhZC5lbmFibGVkJiYhZS5yZWFkLnNvdXJjZSl9ZnVuY3Rpb24gZihlLHQscixuLGYpe2xldCBhPW8odFtyXSxmKTtpKGEpJiYoZVtyXT0hMCk7Zm9yKGNvbnN0IGkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCkpYT1vKHRbaV0sZikscyhhLHIsbikmJihlW2ldPSEwKX1mdW5jdGlvbiBhKGUsdCxyLG8pe2NvbnN0IHM9ci5tZXRhZGF0YXMsaT1uKHNbdF0sbyksZj1pPy5kZWZhdWx0O2lmKHZvaWQgMD09PWYpcmV0dXJuO2NvbnN0IGE9XCJmdW5jdGlvblwiPT10eXBlb2YgZj9mLmNhbGwoZSx0LG8pOmY7dm9pZCAwIT09YSYmci5zZXQodCxhKX1jb25zdCBjPXtvcmlnaW46XCJzZXJ2aWNlXCJ9O2Z1bmN0aW9uIHUodCxuLHM9Yyl7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybjtjb25zdCBpPXIodCksdT1pLm1ldGFkYXRhcyxkPXt9O2Zvcihjb25zdCBlIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG4pKWYoZCx1LGUsbixzKTtpLnNldERlZmF1bHRPcmlnaW4ocy5vcmlnaW4pO2Zvcihjb25zdCByIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGQpKXtjb25zdCBmPW8odVtyXSxzKS5yZWFkLGE9ZiYmZi5zb3VyY2U7bGV0IGM7Yz1hJiZcInN0cmluZ1wiPT10eXBlb2YgYT9lKG4sYSk6bltyXSxmJiZmLnJlYWRlciYmKGM9Zi5yZWFkZXIuY2FsbCh0LGMsbixzKSksdm9pZCAwIT09YyYmaS5zZXQocixjKX1pZighc3x8IXMuaWdub3JlRGVmYXVsdHMpe2kuc2V0RGVmYXVsdE9yaWdpbihcImRlZmF1bHRzXCIpO2Zvcihjb25zdCBlIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHUpKWRbZV18fGEodCxlLGkscyl9aS5zZXREZWZhdWx0T3JpZ2luKFwidXNlclwiKX1mdW5jdGlvbiBkKGUsdCxyLG89Yyl7Y29uc3Qgbj17Li4ubyxtZXNzYWdlczpbXX07cihuKSxuLm1lc3NhZ2VzPy5mb3JFYWNoKCh0PT57XCJ3YXJuaW5nXCIhPT10LnR5cGV8fGUubG9hZGVkP28mJm8ubWVzc2FnZXMmJm8ubWVzc2FnZXMucHVzaCh0KTplLmxvYWRXYXJuaW5ncy5wdXNoKHQpfSkpfWV4cG9ydHt1IGFzIHJlYWQsZCBhcyByZWFkTG9hZGFibGV9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtlcXVhbHMgYXMgcn1mcm9tXCIuLi9hcnJheVV0aWxzLmpzXCI7aW1wb3J0IGUgZnJvbVwiLi4vRXJyb3IuanNcIjtpbXBvcnQgdCBmcm9tXCIuLi9Mb2dnZXIuanNcIjtpbXBvcnR7aWRUb1JlYWRhYmxlTmFtZSBhcyBpLE9yaWdpbklkIGFzIG8sbmFtZVRvSWQgYXMgbn1mcm9tXCIuL1Byb3BlcnR5T3JpZ2luLmpzXCI7aW1wb3J0e2dldFByb3BlcnRpZXMgYXMgcyxtZXJnZSBhcyB1fWZyb21cIi4vdXRpbHMuanNcIjtpbXBvcnR7b3JpZ2luU3BlY2lmaWNXcml0ZVByb3BlcnR5RGVmaW5pdGlvbiBhcyBsfWZyb21cIi4vZXh0ZW5zaW9ucy9zZXJpYWxpemFibGVQcm9wZXJ0eS5qc1wiO2Z1bmN0aW9uIGEocixlLHQsaSxvKXtjb25zdCBuPXt9O3JldHVybiBlLndyaXRlPy53cml0ZXI/LmNhbGwocixpLG4sdCxvKSxufWZ1bmN0aW9uIGYocixpLHMsdSxsLGEpe2lmKCF1fHwhdS53cml0ZSlyZXR1cm4hMTtjb25zdCBmPXIuZ2V0KHMpO2lmKCFsJiZ1LndyaXRlLm92ZXJyaWRlUG9saWN5KXtjb25zdCBlPXUud3JpdGUub3ZlcnJpZGVQb2xpY3kuY2FsbChyLGYscyxhPz92b2lkIDApO3ZvaWQgMCE9PWUmJihsPWUpfWlmKGx8fChsPXUud3JpdGUpLCFsfHwhMT09PWwuZW5hYmxlZClyZXR1cm4hMTtpZigobnVsbD09PWYmJiFsLmFsbG93TnVsbCYmIWwud3JpdGVyRW5zdXJlc05vbk51bGx8fHZvaWQgMD09PWYpJiZsLmlzUmVxdWlyZWQpe2NvbnN0IGk9bmV3IGUoXCJ3ZWItZG9jdW1lbnQtd3JpdGU6cHJvcGVydHktcmVxdWlyZWRcIixgTWlzc2luZyB2YWx1ZSBmb3IgcmVxdWlyZWQgcHJvcGVydHkgJyR7c30nIG9uICcke3IuZGVjbGFyZWRDbGFzc30nYCx7cHJvcGVydHlOYW1lOnMsdGFyZ2V0OnJ9KTtyZXR1cm4gaSYmYSYmYS5tZXNzYWdlcz9hLm1lc3NhZ2VzLnB1c2goaSk6aSYmIWEmJnQuZ2V0TG9nZ2VyKFwiZXNyaS5jb3JlLmFjY2Vzc29yU3VwcG9ydC53cml0ZVwiKS5lcnJvcihpLm5hbWUsaS5tZXNzYWdlKSwhMX1pZih2b2lkIDA9PT1mKXJldHVybiExO2lmKG51bGw9PT1mJiYhbC5hbGxvd051bGwmJiFsLndyaXRlckVuc3VyZXNOb25OdWxsKXJldHVybiExO2lmKCFsLmFsd2F5c1dyaXRlRGVmYXVsdHMmJighaS5zdG9yZS5tdWx0aXBsZU9yaWdpbnNTdXBwb3J0ZWR8fGkuc3RvcmUub3JpZ2luT2Yocyk9PT1vLkRFRkFVTFRTKSYmcChyLHMsYSx1LGYpKXJldHVybiExO2lmKCFsLmlnbm9yZU9yaWdpbiYmYSYmYS5vcmlnaW4mJmkuc3RvcmUubXVsdGlwbGVPcmlnaW5zU3VwcG9ydGVkKXtpZihpLnN0b3JlLm9yaWdpbk9mKHMpPG4oYS5vcmlnaW4pKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIHAoZSx0LGksbyxuKXtjb25zdCBzPW8uZGVmYXVsdDtpZih2b2lkIDA9PT1zKXJldHVybiExO2lmKG51bGwhPW8uZGVmYXVsdEVxdWFscylyZXR1cm4gby5kZWZhdWx0RXF1YWxzKG4pO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpe2lmKEFycmF5LmlzQXJyYXkobikpe2NvbnN0IG89cy5jYWxsKGUsdCxpPz92b2lkIDApO3JldHVybiByKG8sbil9cmV0dXJuITF9cmV0dXJuIHM9PT1ufWZ1bmN0aW9uIGMocixlLHQsaSl7Y29uc3Qgbz1zKHIpLG49by5tZXRhZGF0YXMsdT1sKG5bZV0saSk7cmV0dXJuISF1JiZmKHIsbyxlLHUsdCxpKX1mdW5jdGlvbiBnKHIsZSx0KXtpZihyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnRvSlNPTiYmKCFyLnRvSlNPTi5pc0RlZmF1bHRUb0pTT058fCFyLndyaXRlKSlyZXR1cm4gdShlLHIudG9KU09OKHQpKTtjb25zdCBvPXMociksbj1vLm1ldGFkYXRhcztmb3IoY29uc3QgcyBpbiBuKXtjb25zdCBwPWwobltzXSx0KTtpZighZihyLG8scyxwLHZvaWQgMCx0KSljb250aW51ZTtjb25zdCBjPXIuZ2V0KHMpLGc9YShyLHAscC53cml0ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHAud3JpdGUudGFyZ2V0P3Aud3JpdGUudGFyZ2V0OnMsYyx0KTtPYmplY3Qua2V5cyhnKS5sZW5ndGg+MCYmKGU9dShlLGcpLHQ/LnJlc291cmNlcz8ucGVuZGluZ09wZXJhdGlvbnM/Lmxlbmd0aCYmdC5yZXNvdXJjZXMucGVuZGluZ09wZXJhdGlvbnMucHVzaChQcm9taXNlLmFsbCh0LnJlc291cmNlcy5wZW5kaW5nT3BlcmF0aW9ucykudGhlbigoKCk9PnUoZSxnLCgoKT0+XCJyZXBsYWNlLWFycmF5c1wiKSkpKSksdCYmdC53cml0dGVuUHJvcGVydGllcyYmdC53cml0dGVuUHJvcGVydGllcy5wdXNoKHt0YXJnZXQ6cixwcm9wTmFtZTpzLG9sZE9yaWdpbjppKG8uc3RvcmUub3JpZ2luT2YocykpLG5ld09yaWdpbjp0Lm9yaWdpbn0pKX1yZXR1cm4gZX1leHBvcnR7YyBhcyB3aWxsUHJvcGVydHlXcml0ZSxnIGFzIHdyaXRlfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyBzfWZyb21cIi4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnR7cHJvcGVydHkgYXMgZX1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FycmF5VXRpbHMuanNcIjtpbXBvcnRcIi4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIHR9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2ltcG9ydHtzdWJzdGl0dXRlIGFzIHJ9ZnJvbVwiLi4vaW50bC9zdWJzdGl0dXRlLmpzXCI7aW1wb3J0IG8gZnJvbVwiLi4vd2lkZ2V0cy9XaWRnZXQuanNcIjtpbXBvcnR7c3RvcmVOb2RlIGFzIGl9ZnJvbVwiLi4vd2lkZ2V0cy9zdXBwb3J0L3dpZGdldFV0aWxzLmpzXCI7aW1wb3J0e21lc3NhZ2VCdW5kbGUgYXMgbn1mcm9tXCIuLi93aWRnZXRzL3N1cHBvcnQvZGVjb3JhdG9ycy9tZXNzYWdlQnVuZGxlLmpzXCI7aW1wb3J0e3RzeCBhcyB1fWZyb21cIi4uL3dpZGdldHMvc3VwcG9ydC9qc3hGYWN0b3J5LmpzXCI7Y29uc3QgYT1cImVzcmktaWRlbnRpdHktZm9ybVwiLHA9e2Jhc2U6YSxncm91cDpgJHthfV9fZ3JvdXBgLGxhYmVsOmAke2F9X19sYWJlbGAsZm9vdGVyOmAke2F9X19mb290ZXJgLGVzcmlJbnB1dDpcImVzcmktaW5wdXRcIixlc3JpQnV0dG9uOlwiZXNyaS1idXR0b25cIixlc3JpQnV0dG9uU2Vjb25kYXJ5OlwiZXNyaS1idXR0b24tLXNlY29uZGFyeVwifSxsPVwiQXJjR0lTIE9ubGluZVwiO2xldCBkPWNsYXNzIGV4dGVuZHMgb3tjb25zdHJ1Y3RvcihzLGUpe3N1cGVyKHMsZSksdGhpcy5fdXNlcm5hbWVJbnB1dE5vZGU9bnVsbCx0aGlzLl9wYXNzd29yZElucHV0Tm9kZT1udWxsLHRoaXMuc2lnbmluZ0luPSExLHRoaXMuc2VydmVyPW51bGwsdGhpcy5yZXNvdXJjZT1udWxsLHRoaXMuZXJyb3I9bnVsbCx0aGlzLm9BdXRoUHJvbXB0PSExfXJlbmRlcigpe2NvbnN0e2Vycm9yOnMsc2VydmVyOmUscmVzb3VyY2U6dCxzaWduaW5nSW46byxvQXV0aFByb21wdDpuLG1lc3NhZ2VzOmF9PXRoaXMsZD11KFwiZGl2XCIse2NsYXNzOnAuZ3JvdXB9LHIobj9hLm9BdXRoSW5mbzphLmluZm8se3NlcnZlcjplJiYvXFwuYXJjZ2lzXFwuY29tL2kudGVzdChlKT9sOmUscmVzb3VyY2U6YCgke3R8fGEubGJsSXRlbX0pYH0pKSxjPW4/bnVsbDp1KFwiZGl2XCIse2NsYXNzOnAuZ3JvdXAsa2V5OlwidXNlcm5hbWVcIn0sdShcImxhYmVsXCIse2NsYXNzOnAubGFiZWx9LGEubGJsVXNlcix1KFwiaW5wdXRcIix7dmFsdWU6XCJcIixyZXF1aXJlZDohMCxhdXRvY29tcGxldGU6XCJvZmZcIixzcGVsbGNoZWNrOiExLHR5cGU6XCJ0ZXh0XCIsYmluZDp0aGlzLGFmdGVyQ3JlYXRlOmksXCJkYXRhLW5vZGUtcmVmXCI6XCJfdXNlcm5hbWVJbnB1dE5vZGVcIixjbGFzczpwLmVzcmlJbnB1dH0pKSksbT1uP251bGw6dShcImRpdlwiLHtjbGFzczpwLmdyb3VwLGtleTpcInBhc3N3b3JkXCJ9LHUoXCJsYWJlbFwiLHtjbGFzczpwLmxhYmVsfSxhLmxibFB3ZCx1KFwiaW5wdXRcIix7dmFsdWU6XCJcIixyZXF1aXJlZDohMCx0eXBlOlwicGFzc3dvcmRcIixiaW5kOnRoaXMsYWZ0ZXJDcmVhdGU6aSxcImRhdGEtbm9kZS1yZWZcIjpcIl9wYXNzd29yZElucHV0Tm9kZVwiLGNsYXNzOnAuZXNyaUlucHV0fSkpKSxoPXUoXCJkaXZcIix7Y2xhc3M6dGhpcy5jbGFzc2VzKHAuZ3JvdXAscC5mb290ZXIpfSx1KFwiaW5wdXRcIix7dHlwZTpcInN1Ym1pdFwiLGRpc2FibGVkOiEhbyx2YWx1ZTpvP2EubGJsU2lnbmluZzphLmxibE9rLGNsYXNzOnAuZXNyaUJ1dHRvbn0pLHUoXCJpbnB1dFwiLHt0eXBlOlwiYnV0dG9uXCIsdmFsdWU6YS5sYmxDYW5jZWwsYmluZDp0aGlzLG9uY2xpY2s6dGhpcy5fY2FuY2VsLGNsYXNzOnRoaXMuY2xhc3NlcyhwLmVzcmlCdXR0b24scC5lc3JpQnV0dG9uU2Vjb25kYXJ5KX0pKSxiPXM/dShcImRpdlwiLG51bGwscy5kZXRhaWxzJiZzLmRldGFpbHMuaHR0cFN0YXR1cz9hLmludmFsaWRVc2VyOmEubm9BdXRoU2VydmljZSk6bnVsbDtyZXR1cm4gdShcImZvcm1cIix7Y2xhc3M6cC5iYXNlLGJpbmQ6dGhpcyxvbnN1Ym1pdDp0aGlzLl9zdWJtaXR9LGQsYixjLG0saCl9X2NhbmNlbCgpe3RoaXMuX3NldChcInNpZ25pbmdJblwiLCExKSx0aGlzLl91c2VybmFtZUlucHV0Tm9kZSYmKHRoaXMuX3VzZXJuYW1lSW5wdXROb2RlLnZhbHVlPVwiXCIpLHRoaXMuX3Bhc3N3b3JkSW5wdXROb2RlJiYodGhpcy5fcGFzc3dvcmRJbnB1dE5vZGUudmFsdWU9XCJcIiksdGhpcy5lbWl0KFwiY2FuY2VsXCIpfV9zdWJtaXQocyl7cy5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NldChcInNpZ25pbmdJblwiLCEwKTtjb25zdCBlPXRoaXMub0F1dGhQcm9tcHQ/e306e3VzZXJuYW1lOnRoaXMuX3VzZXJuYW1lSW5wdXROb2RlJiZ0aGlzLl91c2VybmFtZUlucHV0Tm9kZS52YWx1ZSxwYXNzd29yZDp0aGlzLl9wYXNzd29yZElucHV0Tm9kZSYmdGhpcy5fcGFzc3dvcmRJbnB1dE5vZGUudmFsdWV9O3RoaXMuZW1pdChcInN1Ym1pdFwiLGUpfX07cyhbZSgpLG4oXCJlc3JpL2lkZW50aXR5L3Q5bi9pZGVudGl0eVwiKV0sZC5wcm90b3R5cGUsXCJtZXNzYWdlc1wiLHZvaWQgMCkscyhbZSgpXSxkLnByb3RvdHlwZSxcInNpZ25pbmdJblwiLHZvaWQgMCkscyhbZSgpXSxkLnByb3RvdHlwZSxcInNlcnZlclwiLHZvaWQgMCkscyhbZSgpXSxkLnByb3RvdHlwZSxcInJlc291cmNlXCIsdm9pZCAwKSxzKFtlKCldLGQucHJvdG90eXBlLFwiZXJyb3JcIix2b2lkIDApLHMoW2UoKV0sZC5wcm90b3R5cGUsXCJvQXV0aFByb21wdFwiLHZvaWQgMCksZD1zKFt0KFwiZXNyaS5pZGVudGl0eS5JZGVudGl0eUZvcm1cIildLGQpO2NvbnN0IGM9ZDtleHBvcnR7YyBhcyBkZWZhdWx0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7c2V0SWQgYXMgZX1mcm9tXCIuLi9rZXJuZWwuanNcIjtpbXBvcnR7SWRlbnRpdHlNYW5hZ2VyQmFzZSBhcyB0fWZyb21cIi4vSWRlbnRpdHlNYW5hZ2VyQmFzZS5qc1wiO2NsYXNzIHIgZXh0ZW5kcyB0e31yLnByb3RvdHlwZS5kZWNsYXJlZENsYXNzPVwiZXNyaS5pZGVudGl0eS5JZGVudGl0eU1hbmFnZXJcIjtjb25zdCBzPW5ldyByO2Uocyk7ZXhwb3J0e3MgYXMgZGVmYXVsdH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgZX1mcm9tXCIuLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0IHQgZnJvbVwiLi4vY29uZmlnLmpzXCI7aW1wb3J0e2lkIGFzIHJ9ZnJvbVwiLi4va2VybmVsLmpzXCI7aW1wb3J0IHMgZnJvbVwiLi4vcmVxdWVzdC5qc1wiO2ltcG9ydCBpIGZyb21cIi4uL2NvcmUvRXJyb3IuanNcIjtpbXBvcnQgbyBmcm9tXCIuLi9jb3JlL0V2ZW50ZWQuanNcIjtpbXBvcnR7b24gYXMgbn1mcm9tXCIuLi9jb3JlL2V2ZW50cy5qc1wiO2ltcG9ydHtmaXhKc29uIGFzIGF9ZnJvbVwiLi4vY29yZS9sYW5nLmpzXCI7aW1wb3J0e2dldERlZXBWYWx1ZSBhcyBofWZyb21cIi4uL2NvcmUvb2JqZWN0LmpzXCI7aW1wb3J0e2NyZWF0ZVJlc29sdmVyIGFzIGwsb25BYm9ydCBhcyBjLGlzQWJvcnRlZCBhcyBkfWZyb21cIi4uL2NvcmUvcHJvbWlzZVV0aWxzLmpzXCI7aW1wb3J0e3dhdGNoIGFzIHV9ZnJvbVwiLi4vY29yZS9yZWFjdGl2ZVV0aWxzLmpzXCI7aW1wb3J0e3VybFRvT2JqZWN0IGFzIHAsaGFzU2FtZU9yaWdpbiBhcyBfLFVybCBhcyBmLHF1ZXJ5VG9PYmplY3QgYXMgZyxiYXNlNjRVcmxFbmNvZGUgYXMgbSxvYmplY3RUb1F1ZXJ5IGFzIHYsbm9ybWFsaXplIGFzIFMsZ2V0UHJveHlSdWxlIGFzIHcsbWFrZUFic29sdXRlIGFzIEksYWRkUXVlcnlQYXJhbWV0ZXJzIGFzIEF9ZnJvbVwiLi4vY29yZS91cmxVdGlscy5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBrfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgeX1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7aW1wb3J0IFUgZnJvbVwiLi9JZGVudGl0eUZvcm0uanNcIjtpbXBvcnQgVCBmcm9tXCIuL0lkZW50aXR5TW9kYWwuanNcIjtpbXBvcnQgeCBmcm9tXCIuL09BdXRoQ3JlZGVudGlhbC5qc1wiO2ltcG9ydCBPIGZyb21cIi4vT0F1dGhJbmZvLmpzXCI7aW1wb3J0IFAgZnJvbVwiLi9TZXJ2ZXJJbmZvLmpzXCI7aW1wb3J0e2lzU2VjdXJlUHJveHlTZXJ2aWNlIGFzIFJ9ZnJvbVwiLi4vcG9ydGFsL3N1cHBvcnQvdXJsVXRpbHMuanNcIjtjb25zdCBDPXt9LGI9ZT0+e2NvbnN0IHQ9bmV3IGYoZS5vd25pbmdTeXN0ZW1VcmwpLmhvc3Qscj1uZXcgZihlLnNlcnZlcikuaG9zdCxzPS8uK1xcLmFyY2dpc1xcLmNvbSQvaTtyZXR1cm4gcy50ZXN0KHQpJiZzLnRlc3Qocil9LEQ9KGUsdCk9PiEhKGIoZSkmJnQmJnQuc29tZSgodD0+dC50ZXN0KGUuc2VydmVyKSkpKTtsZXQgcT1udWxsLGo9bnVsbDt0cnl7cT13aW5kb3cubG9jYWxTdG9yYWdlLGo9d2luZG93LnNlc3Npb25TdG9yYWdlfWNhdGNoe31jbGFzcyBFIGV4dGVuZHMgb3tjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fcG9ydGFsQ29uZmlnPWdsb2JhbFRoaXMuZXNyaUdlb3dDb25maWcsdGhpcy5zZXJ2ZXJJbmZvcz1bXSx0aGlzLm9BdXRoSW5mb3M9W10sdGhpcy5jcmVkZW50aWFscz1bXSx0aGlzLl9zb1JlcXM9W10sdGhpcy5feG9SZXFzPVtdLHRoaXMuX3BvcnRhbHM9W10sdGhpcy5fZGVmYXVsdE9BdXRoSW5mbz1udWxsLHRoaXMuX2RlZmF1bHRUb2tlblZhbGlkaXR5PTYwLHRoaXMuZGlhbG9nPW51bGwsdGhpcy5mb3JtQ29uc3RydWN0b3I9VSx0aGlzLnRva2VuVmFsaWRpdHk9bnVsbCx0aGlzLm5vcm1hbGl6ZVdlYlRpZXJBdXRoPSExLHRoaXMuX2FwcE9yaWdpbj1cIm51bGxcIiE9PXdpbmRvdy5vcmlnaW4/d2luZG93Lm9yaWdpbjp3aW5kb3cubG9jYXRpb24ub3JpZ2luLHRoaXMuX2FwcFVybE9iaj1wKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSx0aGlzLl9idXN5PW51bGwsdGhpcy5fcmVqZWN0T25QZXJzaXN0ZWRQYWdlU2hvdz0hMSx0aGlzLl9vQXV0aExvY2F0aW9uUGFyYW1zPW51bGwsdGhpcy5fZ3dUb2tlblVybD1cIi9zaGFyaW5nL3Jlc3QvZ2VuZXJhdGVUb2tlblwiLHRoaXMuX2Fnc1Jlc3Q9XCIvcmVzdC9zZXJ2aWNlc1wiLHRoaXMuX2Fnc1BvcnRhbD0vXFwvc2hhcmluZyhcXC98JCkvaSx0aGlzLl9hZ3NBZG1pbj0vKGh0dHBzPzpcXC9cXC9bXlxcL10rXFwvW15cXC9dKylcXC9hZG1pblxcLz8oXFwvLiopPyQvaSx0aGlzLl9hZG1pblN2Y3M9L1xcL3Jlc3RcXC9hZG1pblxcL3NlcnZpY2VzKFxcL3wkKS9pLHRoaXMuX2d3RG9tYWlucz1be3JlZ2V4Oi9eaHR0cHM/OlxcL1xcL3d3d1xcLmFyY2dpc1xcLmNvbS9pLGN1c3RvbUJhc2VVcmw6XCJtYXBzLmFyY2dpcy5jb21cIix0b2tlblNlcnZpY2VVcmw6XCJodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9nZW5lcmF0ZVRva2VuXCJ9LHtyZWdleDovXmh0dHBzPzpcXC9cXC8oPzpkZXZ8W2EtelxcZC1dK1xcLm1hcHNkZXYpXFwuYXJjZ2lzXFwuY29tL2ksY3VzdG9tQmFzZVVybDpcIm1hcHNkZXYuYXJjZ2lzLmNvbVwiLHRva2VuU2VydmljZVVybDpcImh0dHBzOi8vZGV2LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0L2dlbmVyYXRlVG9rZW5cIn0se3JlZ2V4Oi9eaHR0cHM/OlxcL1xcLyg/OmRldmV4dHxbYS16XFxkLV0rXFwubWFwc2RldmV4dClcXC5hcmNnaXNcXC5jb20vaSxjdXN0b21CYXNlVXJsOlwibWFwc2RldmV4dC5hcmNnaXMuY29tXCIsdG9rZW5TZXJ2aWNlVXJsOlwiaHR0cHM6Ly9kZXZleHQuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QvZ2VuZXJhdGVUb2tlblwifSx7cmVnZXg6L15odHRwcz86XFwvXFwvKD86cWFleHR8W2EtelxcZC1dK1xcLm1hcHNxYSlcXC5hcmNnaXNcXC5jb20vaSxjdXN0b21CYXNlVXJsOlwibWFwc3FhLmFyY2dpcy5jb21cIix0b2tlblNlcnZpY2VVcmw6XCJodHRwczovL3FhZXh0LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0L2dlbmVyYXRlVG9rZW5cIn0se3JlZ2V4Oi9eaHR0cHM/OlxcL1xcL1thLXpcXGQtXStcXC5tYXBzXFwuYXJjZ2lzXFwuY29tL2ksY3VzdG9tQmFzZVVybDpcIm1hcHMuYXJjZ2lzLmNvbVwiLHRva2VuU2VydmljZVVybDpcImh0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0L2dlbmVyYXRlVG9rZW5cIn1dLHRoaXMuX2xlZ2FjeUZlZD1bXSx0aGlzLl9yZWdleFNEaXJVcmw9L2h0dHAuK1xcL3Jlc3RcXC9zZXJ2aWNlc1xcLz8vZ2ksdGhpcy5fcmVnZXhTZXJ2ZXJUeXBlPS8oXFwvKEZlYXR1cmVTZXJ2ZXJ8R1BTZXJ2ZXJ8R2VvRGF0YVNlcnZlcnxHZW9jb2RlU2VydmVyfEdlb2VucmljaG1lbnRTZXJ2ZXJ8R2VvbWV0cnlTZXJ2ZXJ8R2xvYmVTZXJ2ZXJ8SW1hZ2VTZXJ2ZXJ8S25vd2xlZGdlR3JhcGhTZXJ2ZXJ8TWFwU2VydmVyfE1pc3Npb25TZXJ2ZXJ8TW9iaWxlU2VydmVyfE5BU2VydmVyfE5ldHdvcmtEaWFncmFtU2VydmVyfE9HQ0ZlYXR1cmVTZXJ2ZXJ8UGFyY2VsRmFicmljU2VydmVyfFJlbGF0aW9uYWxDYXRhbG9nU2VydmVyfFNjZW5lU2VydmVyfFN0cmVhbVNlcnZlcnxVdGlsaXR5TmV0d29ya1NlcnZlcnxWYWxpZGF0aW9uU2VydmVyfFZlY3RvclRpbGVTZXJ2ZXJ8VmVyc2lvbk1hbmFnZW1lbnRTZXJ2ZXJ8VmlkZW9TZXJ2ZXIpKS4qL2dpLHRoaXMuX2d3VXNlcj0vaHR0cC4rXFwvdXNlcnNcXC8oW15cXC9dKylcXC8/LiovaSx0aGlzLl9nd0l0ZW09L2h0dHAuK1xcL2l0ZW1zXFwvKFteXFwvXSspXFwvPy4qL2ksdGhpcy5fZ3dHcm91cD0vaHR0cC4rXFwvZ3JvdXBzXFwvKFteXFwvXSspXFwvPy4qL2ksdGhpcy5fcmVQb3J0YWxUb2tlblN2Yz0vXFwvc2hhcmluZyhcXC9yZXN0KT9cXC9nZW5lcmF0ZXRva2VuL2ksdGhpcy5fY3JlYXRlRGVmYXVsdE9BdXRoSW5mbz0hMCx0aGlzLl9oYXNUZXN0ZWRJZkFwcElzT25Qb3J0YWw9ITEsdGhpcy5fZ2V0T0F1dGhMb2NhdGlvblBhcmFtcygpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwoZT0+e3RoaXMuX3BhZ2VTaG93SGFuZGxlcihlKX0pKX1yZWdpc3RlclNlcnZlcnMoZSl7Y29uc3QgdD10aGlzLnNlcnZlckluZm9zO3Q/KGU9ZS5maWx0ZXIoKGU9PiF0aGlzLmZpbmRTZXJ2ZXJJbmZvKGUuc2VydmVyKSkpLHRoaXMuc2VydmVySW5mb3M9dC5jb25jYXQoZSkpOnRoaXMuc2VydmVySW5mb3M9ZSxlLmZvckVhY2goKGU9PntlLm93bmluZ1N5c3RlbVVybCYmdGhpcy5fcG9ydGFscy5wdXNoKGUub3duaW5nU3lzdGVtVXJsKSxlLmhhc1BvcnRhbCYmdGhpcy5fcG9ydGFscy5wdXNoKGUuc2VydmVyKX0pKX1yZWdpc3Rlck9BdXRoSW5mb3MoZSl7Y29uc3QgdD10aGlzLm9BdXRoSW5mb3M7aWYodCl7Zm9yKGNvbnN0IHIgb2YgZSl7Y29uc3QgZT10aGlzLmZpbmRPQXV0aEluZm8oci5wb3J0YWxVcmwpO2UmJnQuc3BsaWNlKHQuaW5kZXhPZihlKSwxKX10aGlzLm9BdXRoSW5mb3M9dC5jb25jYXQoZSl9ZWxzZSB0aGlzLm9BdXRoSW5mb3M9ZX1yZWdpc3RlclRva2VuKGUpe2U9ey4uLmV9O2NvbnN0IHQ9dGhpcy5fc2FuaXRpemVVcmwoZS5zZXJ2ZXIpLHI9dGhpcy5faXNTZXJ2ZXJSc3JjKHQpO2xldCBzLGk9dGhpcy5maW5kU2VydmVySW5mbyh0KSxvPSEwO2l8fChpPW5ldyBQLGkuc2VydmVyPXRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdCh0KSxyP2kuaGFzU2VydmVyPSEwOihpLnRva2VuU2VydmljZVVybD10aGlzLl9nZXRUb2tlblN2Y1VybCh0KSxpLmhhc1BvcnRhbD0hMCksdGhpcy5yZWdpc3RlclNlcnZlcnMoW2ldKSkscz10aGlzLl9maW5kQ3JlZGVudGlhbCh0KSxzPyhkZWxldGUgZS5zZXJ2ZXIsT2JqZWN0LmFzc2lnbihzLGUpLG89ITEpOihzPW5ldyBMKHt1c2VySWQ6ZS51c2VySWQsc2VydmVyOmkuc2VydmVyLHRva2VuOmUudG9rZW4sZXhwaXJlczplLmV4cGlyZXMsc3NsOmUuc3NsLHNjb3BlOnI/XCJzZXJ2ZXJcIjpcInBvcnRhbFwifSkscy5yZXNvdXJjZXM9W3RdLHRoaXMuY3JlZGVudGlhbHMucHVzaChzKSkscy5lbWl0VG9rZW5DaGFuZ2UoITEpLG98fHMucmVmcmVzaFNlcnZlclRva2VucygpfXRvSlNPTigpe3JldHVybiBhKHtzZXJ2ZXJJbmZvczp0aGlzLnNlcnZlckluZm9zLm1hcCgoZT0+ZS50b0pTT04oKSkpLG9BdXRoSW5mb3M6dGhpcy5vQXV0aEluZm9zLm1hcCgoZT0+ZS50b0pTT04oKSkpLGNyZWRlbnRpYWxzOnRoaXMuY3JlZGVudGlhbHMubWFwKChlPT5lLnRvSlNPTigpKSl9KX1pbml0aWFsaXplKGUpe2lmKCFlKXJldHVybjtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSk7Y29uc3QgdD1lLnNlcnZlckluZm9zLHI9ZS5vQXV0aEluZm9zLHM9ZS5jcmVkZW50aWFscztpZih0KXtjb25zdCBlPVtdO3QuZm9yRWFjaCgodD0+e3Quc2VydmVyJiZ0LnRva2VuU2VydmljZVVybCYmZS5wdXNoKHQuZGVjbGFyZWRDbGFzcz90Om5ldyBQKHQpKX0pKSxlLmxlbmd0aCYmdGhpcy5yZWdpc3RlclNlcnZlcnMoZSl9aWYocil7Y29uc3QgZT1bXTtyLmZvckVhY2goKHQ9Pnt0LmFwcElkJiZlLnB1c2godC5kZWNsYXJlZENsYXNzP3Q6bmV3IE8odCkpfSkpLGUubGVuZ3RoJiZ0aGlzLnJlZ2lzdGVyT0F1dGhJbmZvcyhlKX1zJiZzLmZvckVhY2goKGU9PntlLnNlcnZlciYmZS50b2tlbiYmZS5leHBpcmVzJiZlLmV4cGlyZXM+RGF0ZS5ub3coKSYmKChlPWUuZGVjbGFyZWRDbGFzcz9lOm5ldyBMKGUpKS5lbWl0VG9rZW5DaGFuZ2UoKSx0aGlzLmNyZWRlbnRpYWxzLnB1c2goZSkpfSkpfWZpbmRTZXJ2ZXJJbmZvKGUpe2xldCB0O2U9dGhpcy5fc2FuaXRpemVVcmwoZSk7Zm9yKGNvbnN0IHIgb2YgdGhpcy5zZXJ2ZXJJbmZvcylpZih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2Uoci5zZXJ2ZXIsZSkpe3Q9cjticmVha31yZXR1cm4gdH1maW5kT0F1dGhJbmZvKGUpe2xldCB0O2U9dGhpcy5fc2FuaXRpemVVcmwoZSk7Zm9yKGNvbnN0IHIgb2YgdGhpcy5vQXV0aEluZm9zKWlmKHRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZShyLnBvcnRhbFVybCxlKSl7dD1yO2JyZWFrfXJldHVybiB0fWZpbmRDcmVkZW50aWFsKGUsdCl7aWYoIWUpcmV0dXJuO2xldCByO2U9dGhpcy5fc2FuaXRpemVVcmwoZSk7Y29uc3Qgcz10aGlzLl9pc1NlcnZlclJzcmMoZSk/XCJzZXJ2ZXJcIjpcInBvcnRhbFwiO2lmKHQpe2Zvcihjb25zdCBpIG9mIHRoaXMuY3JlZGVudGlhbHMpaWYodGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKGkuc2VydmVyLGUpJiZ0PT09aS51c2VySWQmJmkuc2NvcGU9PT1zKXtyPWk7YnJlYWt9fWVsc2UgZm9yKGNvbnN0IGkgb2YgdGhpcy5jcmVkZW50aWFscylpZih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UoaS5zZXJ2ZXIsZSkmJi0xIT09dGhpcy5fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsaSkmJmkuc2NvcGU9PT1zKXtyPWk7YnJlYWt9cmV0dXJuIHJ9Z2V0Q3JlZGVudGlhbChlLHQpe2xldCByLHMsbz0hMDt0JiYocj0hIXQudG9rZW4scz10LmVycm9yLG89ITEhPT10LnByb21wdCksdD17Li4udH0sZT10aGlzLl9zYW5pdGl6ZVVybChlKTtjb25zdCBuPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1sKCk7aWYodC5zaWduYWwmJmModC5zaWduYWwsKCgpPT57bi5hYm9ydCgpfSkpLGMobiwoKCk9PnthLnJlamVjdChuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkXCIsXCJBQk9SVEVEXCIpKX0pKSxkKG4pKXJldHVybiBhLnByb21pc2U7dC5zaWduYWw9bi5zaWduYWw7Y29uc3QgaD10aGlzLl9pc0FkbWluUmVzb3VyY2UoZSksdT1yP3RoaXMuZmluZENyZWRlbnRpYWwoZSk6bnVsbDtsZXQgcDtpZih1JiZzJiZzLmRldGFpbHMmJjQ5OD09PXMuZGV0YWlscy5odHRwU3RhdHVzKXUuZGVzdHJveSgpO2Vsc2UgaWYodSlyZXR1cm4gcD1uZXcgaShcImlkZW50aXR5LW1hbmFnZXI6bm90LWF1dGhvcml6ZWRcIixcIllvdSBhcmUgY3VycmVudGx5IHNpZ25lZCBpbiBhczogJ1wiK3UudXNlcklkK1wiJy4gWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHJlc291cmNlOiBcIitlLHtlcnJvcjpzfSksYS5yZWplY3QocCksYS5wcm9taXNlO2NvbnN0IGY9dGhpcy5fZmluZENyZWRlbnRpYWwoZSx0KTtpZihmKXJldHVybiBhLnJlc29sdmUoZiksYS5wcm9taXNlO2xldCBnPXRoaXMuZmluZFNlcnZlckluZm8oZSk7aWYoZykhZy5oYXNTZXJ2ZXImJnRoaXMuX2lzU2VydmVyUnNyYyhlKSYmKGcuX3Jlc3RJbmZvUG1zPXRoaXMuX2dldFRva2VuU3ZjVXJsKGUpLGcuaGFzU2VydmVyPSEwKTtlbHNle2NvbnN0IHQ9dGhpcy5fZ2V0VG9rZW5TdmNVcmwoZSk7aWYoIXQpcmV0dXJuIHA9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOnVua25vd24tcmVzb3VyY2VcIixcIlVua25vd24gcmVzb3VyY2UgLSBjb3VsZCBub3QgZmluZCB0b2tlbiBzZXJ2aWNlIGVuZHBvaW50LlwiKSxhLnJlamVjdChwKSxhLnByb21pc2U7Zz1uZXcgUCxnLnNlcnZlcj10aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QoZSksXCJzdHJpbmdcIj09dHlwZW9mIHQ/KGcudG9rZW5TZXJ2aWNlVXJsPXQsZy5oYXNQb3J0YWw9ITApOihnLl9yZXN0SW5mb1Btcz10LGcuaGFzU2VydmVyPSEwKSx0aGlzLnJlZ2lzdGVyU2VydmVycyhbZ10pfXJldHVybiBnLmhhc1BvcnRhbCYmdm9pZCAwPT09Zy5fc2VsZlJlcSYmKG98fF8oZy50b2tlblNlcnZpY2VVcmwsdGhpcy5fYXBwT3JpZ2luKXx8dGhpcy5fZ3dEb21haW5zLnNvbWUoKGU9PmUudG9rZW5TZXJ2aWNlVXJsPT09Zy50b2tlblNlcnZpY2VVcmwpKSkmJihnLl9zZWxmUmVxPXtvd25pbmdUZW5hbnQ6dCYmdC5vd25pbmdUZW5hbnQsc2VsZkRmZDp0aGlzLl9nZXRQb3J0YWxTZWxmKGcudG9rZW5TZXJ2aWNlVXJsLnJlcGxhY2UodGhpcy5fcmVQb3J0YWxUb2tlblN2YyxcIi9zaGFyaW5nL3Jlc3QvcG9ydGFscy9zZWxmXCIpLGUpfSksdGhpcy5fZW5xdWV1ZShlLGcsdCxhLGgpfWdldFJlc291cmNlTmFtZShlKXtyZXR1cm4gdGhpcy5faXNSRVNUU2VydmljZShlKT9lLnJlcGxhY2UodGhpcy5fcmVnZXhTRGlyVXJsLFwiXCIpLnJlcGxhY2UodGhpcy5fcmVnZXhTZXJ2ZXJUeXBlLFwiXCIpfHxcIlwiOnRoaXMuX2d3VXNlci50ZXN0KGUpJiZlLnJlcGxhY2UodGhpcy5fZ3dVc2VyLFwiJDFcIil8fHRoaXMuX2d3SXRlbS50ZXN0KGUpJiZlLnJlcGxhY2UodGhpcy5fZ3dJdGVtLFwiJDFcIil8fHRoaXMuX2d3R3JvdXAudGVzdChlKSYmZS5yZXBsYWNlKHRoaXMuX2d3R3JvdXAsXCIkMVwiKXx8XCJcIn1nZW5lcmF0ZVRva2VuKGUsdCxyKXtjb25zdCBvPXRoaXMuX3JlUG9ydGFsVG9rZW5TdmMudGVzdChlLnRva2VuU2VydmljZVVybCksbj1uZXcgZih0aGlzLl9hcHBPcmlnaW4pLGE9ZS5zaG9ydExpdmVkVG9rZW5WYWxpZGl0eTtsZXQgaCxsLGMsZCx1LHAsZyxtO3QmJihtPXRoaXMudG9rZW5WYWxpZGl0eXx8YXx8dGhpcy5fZGVmYXVsdFRva2VuVmFsaWRpdHksbT5hJiZhPjAmJihtPWEpKSxyJiYoaD1yLmlzQWRtaW4sbD1yLnNlcnZlclVybCxjPXIudG9rZW4scD1yLnNpZ25hbCxnPXIuc3NsLGUuY3VzdG9tUGFyYW1ldGVycz1yLmN1c3RvbVBhcmFtZXRlcnMpLGg/ZD1lLmFkbWluVG9rZW5TZXJ2aWNlVXJsOihkPWUudG9rZW5TZXJ2aWNlVXJsLHU9bmV3IGYoZC50b0xvd2VyQ2FzZSgpKSxlLndlYlRpZXJBdXRoJiZyPy5zZXJ2ZXJVcmwmJiFnJiZcImh0dHBcIj09PW4uc2NoZW1lJiYoXyhuLnVyaSxkLCEwKXx8XCJodHRwc1wiPT09dS5zY2hlbWUmJm4uaG9zdD09PXUuaG9zdCYmXCI3MDgwXCI9PT1uLnBvcnQmJlwiNzQ0M1wiPT09dS5wb3J0KSYmKGQ9ZC5yZXBsYWNlKC9eaHR0cHM6L2ksXCJodHRwOlwiKS5yZXBsYWNlKC86NzQ0My9pLFwiOjcwODBcIikpKTtjb25zdCB2PXtxdWVyeTp7cmVxdWVzdDpcImdldFRva2VuXCIsdXNlcm5hbWU6dD8udXNlcm5hbWUscGFzc3dvcmQ6dD8ucGFzc3dvcmQsc2VydmVyVXJsOmwsdG9rZW46YyxleHBpcmF0aW9uOm0scmVmZXJlcjpofHxvP3RoaXMuX2FwcE9yaWdpbjpudWxsLGNsaWVudDpoP1wicmVmZXJlclwiOm51bGwsZjpcImpzb25cIiwuLi5lLmN1c3RvbVBhcmFtZXRlcnN9LG1ldGhvZDpcInBvc3RcIixhdXRoTW9kZTpcImFub255bW91c1wiLHVzZVByb3h5OnRoaXMuX3VzZVByb3h5KGUsciksc2lnbmFsOnAsLi4ucj8uaW9BcmdzfTtvfHwodi53aXRoQ3JlZGVudGlhbHM9ITEpO3JldHVybiBzKGQsdikudGhlbigocj0+e2NvbnN0IHM9ci5kYXRhO2lmKCFzfHwhcy50b2tlbilyZXR1cm4gbmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOmF1dGhlbnRpY2F0aW9uLWZhaWxlZFwiLFwiVW5hYmxlIHRvIGdlbmVyYXRlIHRva2VuXCIpO2NvbnN0IG89ZS5zZXJ2ZXI7cmV0dXJuIENbb118fChDW29dPXt9KSx0JiYoQ1tvXVt0LnVzZXJuYW1lXT10LnBhc3N3b3JkKSxzLnZhbGlkaXR5PW0sc30pKX1pc0J1c3koKXtyZXR1cm4hIXRoaXMuX2J1c3l9Y2hlY2tTaWduSW5TdGF0dXMoZSl7cmV0dXJuIHRoaXMuY2hlY2tBcHBBY2Nlc3MoZSxcIlwiKS50aGVuKChlPT5lLmNyZWRlbnRpYWwpKX1jaGVja0FwcEFjY2VzcyhlLHQscil7bGV0IG89ITE7cmV0dXJuIHRoaXMuZ2V0Q3JlZGVudGlhbChlLHtwcm9tcHQ6ITF9KS50aGVuKChuPT57bGV0IGE7Y29uc3QgaD17ZjpcImpzb25cIn07aWYoXCJwb3J0YWxcIj09PW4uc2NvcGUpaWYodCYmKHRoaXMuX2RvUG9ydGFsU2lnbkluKGUpfHxyJiZyLmZvcmNlKSlhPW4uc2VydmVyK1wiL3NoYXJpbmcvcmVzdC9vYXV0aDIvdmFsaWRhdGVBcHBBY2Nlc3NcIixoLmNsaWVudF9pZD10O2Vsc2V7aWYoIW4udG9rZW4pcmV0dXJue2NyZWRlbnRpYWw6bn07YT1uLnNlcnZlcitcIi9zaGFyaW5nL3Jlc3RcIn1lbHNle2lmKCFuLnRva2VuKXJldHVybntjcmVkZW50aWFsOm59O2E9bi5zZXJ2ZXIrXCIvcmVzdC9zZXJ2aWNlc1wifXJldHVybiBuLnRva2VuJiYoaC50b2tlbj1uLnRva2VuKSxzKGEse3F1ZXJ5OmgsYXV0aE1vZGU6XCJhbm9ueW1vdXNcIn0pLnRoZW4oKGU9PntpZighMT09PWUuZGF0YS52YWxpZCl0aHJvdyBuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6bm90LWF1dGhvcml6ZWRcIixgWW91IGFyZSBjdXJyZW50bHkgc2lnbmVkIGluIGFzOiAnJHtuLnVzZXJJZH0nLmAsZS5kYXRhKTtyZXR1cm4gbz0hIWUuZGF0YS52aWV3T25seVVzZXJUeXBlQXBwLHtjcmVkZW50aWFsOm59fSkpLmNhdGNoKChlPT57aWYoXCJpZGVudGl0eS1tYW5hZ2VyOm5vdC1hdXRob3JpemVkXCI9PT1lLm5hbWUpdGhyb3cgZTtjb25zdCB0PWUuZGV0YWlscyYmZS5kZXRhaWxzLmh0dHBTdGF0dXM7aWYoNDk4PT09dCl0aHJvdyBuLmRlc3Ryb3koKSxuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6bm90LWF1dGhlbnRpY2F0ZWRcIixcIlVzZXIgaXMgbm90IHNpZ25lZCBpbi5cIik7aWYoNDAwPT09dCl0aHJvdyBuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6aW52YWxpZC1yZXF1ZXN0XCIpO3JldHVybntjcmVkZW50aWFsOm59fSkpfSkpLnRoZW4oKGU9Pih7Y3JlZGVudGlhbDplLmNyZWRlbnRpYWwsdmlld09ubHk6b30pKSl9c2V0T0F1dGhSZXNwb25zZUhhc2goZSl7ZSYmKFwiI1wiPT09ZS5jaGFyQXQoMCkmJihlPWUuc3Vic3RyaW5nKDEpKSx0aGlzLl9wcm9jZXNzT0F1dGhQb3B1cFBhcmFtcyhnKGUpKSl9c2V0T0F1dGhSZWRpcmVjdGlvbkhhbmRsZXIoZSl7dGhpcy5fb0F1dGhSZWRpcmVjdEZ1bmM9ZX1zZXRQcm90b2NvbEVycm9ySGFuZGxlcihlKXt0aGlzLl9wcm90b2NvbEZ1bmM9ZX1zaWduSW4oZSx0LHI9e30pe2NvbnN0IHM9bCgpLG89KCk9PntoPy5yZW1vdmUoKSxkPy5yZW1vdmUoKSxwPy5yZW1vdmUoKSxhPy5kZXN0cm95KCksdGhpcy5kaWFsb2c/LmRlc3Ryb3koKSx0aGlzLmRpYWxvZz1hPWg9ZD1wPW51bGx9LG49KCk9PntvKCksdGhpcy5fb0F1dGhEZmQ9bnVsbCxzLnJlamVjdChuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkXCIsXCJBQk9SVEVEXCIpKX07ci5zaWduYWwmJmMoci5zaWduYWwsKCgpPT57bigpfSkpO2xldCBhPW5ldyB0aGlzLmZvcm1Db25zdHJ1Y3RvcjthLnJlc291cmNlPXRoaXMuZ2V0UmVzb3VyY2VOYW1lKGUpLGEuc2VydmVyPXQuc2VydmVyLHRoaXMuZGlhbG9nPW5ldyBULHRoaXMuZGlhbG9nLmNvbnRlbnQ9YSx0aGlzLmRpYWxvZy5vcGVuPSEwLHRoaXMuZW1pdChcImRpYWxvZy1jcmVhdGVcIik7bGV0IGg9YS5vbihcImNhbmNlbFwiLG4pLGQ9dSgoKCk9PnRoaXMuZGlhbG9nLm9wZW4pLG4pLHA9YS5vbihcInN1Ym1pdFwiLChlPT57dGhpcy5nZW5lcmF0ZVRva2VuKHQsZSx7aXNBZG1pbjpyLmlzQWRtaW4sc2lnbmFsOnIuc2lnbmFsfSkudGhlbigoaT0+e28oKTtjb25zdCBuPW5ldyBMKHt1c2VySWQ6ZS51c2VybmFtZSxzZXJ2ZXI6dC5zZXJ2ZXIsdG9rZW46aS50b2tlbixleHBpcmVzOm51bGwhPWkuZXhwaXJlcz9OdW1iZXIoaS5leHBpcmVzKTpudWxsLHNzbDohIWkuc3NsLGlzQWRtaW46ci5pc0FkbWluLHZhbGlkaXR5OmkudmFsaWRpdHl9KTtzLnJlc29sdmUobil9KSkuY2F0Y2goKGU9PnthLmVycm9yPWUsYS5zaWduaW5nSW49ITF9KSl9KSk7cmV0dXJuIHMucHJvbWlzZX1vQXV0aFNpZ25JbihlLHQscixzKXt0aGlzLl9vQXV0aERmZD1sKCk7Y29uc3Qgbz10aGlzLl9vQXV0aERmZDtsZXQgbjtzPy5zaWduYWwmJmMocy5zaWduYWwsKCgpPT57Y29uc3QgZT10aGlzLl9vQXV0aERmZCYmdGhpcy5fb0F1dGhEZmQub0F1dGhXaW5fO2UmJiFlLmNsb3NlZD9lLmNsb3NlKCk6dGhpcy5kaWFsb2cmJmYoKX0pKSxvLnJlc1VybF89ZSxvLnNpbmZvXz10LG8ub2luZm9fPXI7Y29uc3QgYT1yLl9vQXV0aENyZWQ7aWYoYS5zdG9yYWdlJiYoXCJhdXRob3JpemF0aW9uLWNvZGVcIj09PXIuZmxvd1R5cGV8fFwiYXV0b1wiPT09ci5mbG93VHlwZSYmIXIucG9wdXAmJnQuY3VycmVudFZlcnNpb24+PTguNCkpe2xldCBlPWNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMzIpKTtuPW0oZSksYS5jb2RlVmVyaWZpZXI9bixlPWNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMzIpKSxhLnN0YXRlVUlEPW0oZSksYS5zYXZlKCl8fChhLmNvZGVWZXJpZmllcj1uPW51bGwpfWVsc2UgYS5jb2RlVmVyaWZpZXI9bnVsbDtsZXQgaCxkLHAsXzt0aGlzLl9nZXRDb2RlQ2hhbGxlbmdlKG4pLnRoZW4oKGk9Pntjb25zdCBvPSFzfHwhMSE9PXMub0F1dGhQb3B1cENvbmZpcm1hdGlvbjtyLnBvcHVwJiZvPyhoPW5ldyB0aGlzLmZvcm1Db25zdHJ1Y3RvcixoLm9BdXRoUHJvbXB0PSEwLGguc2VydmVyPXQuc2VydmVyLHRoaXMuZGlhbG9nPW5ldyBULHRoaXMuZGlhbG9nLmNvbnRlbnQ9aCx0aGlzLmRpYWxvZy5vcGVuPSEwLHRoaXMuZW1pdChcImRpYWxvZy1jcmVhdGVcIiksZD1oLm9uKFwiY2FuY2VsXCIsZikscD11KCgoKT0+dGhpcy5kaWFsb2cub3BlbiksZiksXz1oLm9uKFwic3VibWl0XCIsKCgpPT57ZygpLHRoaXMuX2RvT0F1dGhTaWduSW4oZSx0LHIsaSl9KSkpOnRoaXMuX2RvT0F1dGhTaWduSW4oZSx0LHIsaSl9KSk7Y29uc3QgZj0oKT0+e2coKSx0aGlzLl9vQXV0aERmZD1udWxsLG8ucmVqZWN0KG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIikpfSxnPSgpPT57ZD8ucmVtb3ZlKCkscD8ucmVtb3ZlKCksXz8ucmVtb3ZlKCksaD8uZGVzdHJveSgpLHRoaXMuZGlhbG9nPy5kZXN0cm95KCksdGhpcy5kaWFsb2c9bnVsbH07cmV0dXJuIG8ucHJvbWlzZX1kZXN0cm95Q3JlZGVudGlhbHMoKXtpZih0aGlzLmNyZWRlbnRpYWxzKXt0aGlzLmNyZWRlbnRpYWxzLnNsaWNlKCkuZm9yRWFjaCgoZT0+e2UuZGVzdHJveSgpfSkpfXRoaXMuZW1pdChcImNyZWRlbnRpYWxzLWRlc3Ryb3lcIil9ZW5hYmxlUG9zdE1lc3NhZ2VBdXRoKGU9XCJodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdFwiKXt0aGlzLl9wb3N0TWVzc2FnZUF1dGhIYW5kbGUmJnRoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZS5yZW1vdmUoKSx0aGlzLl9wb3N0TWVzc2FnZUF1dGhIYW5kbGU9bih3aW5kb3csXCJtZXNzYWdlXCIsKHQ9PntpZigodC5vcmlnaW49PT10aGlzLl9hcHBPcmlnaW58fHQub3JpZ2luLmVuZHNXaXRoKFwiLmFyY2dpcy5jb21cIikpJiZcImFyY2dpczphdXRoOnJlcXVlc3RDcmVkZW50aWFsXCI9PT10LmRhdGE/LnR5cGUpe2NvbnN0IHI9dC5zb3VyY2U7dGhpcy5nZXRDcmVkZW50aWFsKGUpLnRoZW4oKGU9PntyLnBvc3RNZXNzYWdlKHt0eXBlOlwiYXJjZ2lzOmF1dGg6Y3JlZGVudGlhbFwiLGNyZWRlbnRpYWw6e2V4cGlyZXM6ZS5leHBpcmVzLHNlcnZlcjplLnNlcnZlcixzc2w6ZS5zc2wsdG9rZW46ZS50b2tlbix1c2VySWQ6ZS51c2VySWR9fSx0Lm9yaWdpbil9KSkuY2F0Y2goKGU9PntyLnBvc3RNZXNzYWdlKHt0eXBlOlwiYXJjZ2lzOmF1dGg6ZXJyb3JcIixlcnJvcjp7bmFtZTplLm5hbWUsbWVzc2FnZTplLm1lc3NhZ2V9fSx0Lm9yaWdpbil9KSl9fSkpfWRpc2FibGVQb3N0TWVzc2FnZUF1dGgoKXt0aGlzLl9wb3N0TWVzc2FnZUF1dGhIYW5kbGUmJih0aGlzLl9wb3N0TWVzc2FnZUF1dGhIYW5kbGUucmVtb3ZlKCksdGhpcy5fcG9zdE1lc3NhZ2VBdXRoSGFuZGxlPW51bGwpfV9nZXRPQXV0aExvY2F0aW9uUGFyYW1zKCl7bGV0IGU9d2luZG93LmxvY2F0aW9uLmhhc2g7aWYoZSl7XCIjXCI9PT1lLmNoYXJBdCgwKSYmKGU9ZS5zdWJzdHJpbmcoMSkpO2NvbnN0IHQ9ZyhlKTtsZXQgcj0hMTtpZih0LmFjY2Vzc190b2tlbiYmdC5leHBpcmVzX2luJiZ0LnN0YXRlJiZ0Lmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikpdHJ5e3Quc3RhdGU9SlNPTi5wYXJzZSh0LnN0YXRlKSx0LnN0YXRlLnBvcnRhbFVybCYmKHRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXM9dCxyPSEwKX1jYXRjaHt9ZWxzZSBpZih0LmVycm9yJiZ0LmVycm9yX2Rlc2NyaXB0aW9uJiYoY29uc29sZS5sb2coXCJJZGVudGl0eU1hbmFnZXIgT0F1dGggRXJyb3I6IFwiLHQuZXJyb3IsXCIgLSBcIix0LmVycm9yX2Rlc2NyaXB0aW9uKSxcImFjY2Vzc19kZW5pZWRcIj09PXQuZXJyb3ImJihyPSEwLHQuc3RhdGUpKSl0cnl7dC5zdGF0ZT1KU09OLnBhcnNlKHQuc3RhdGUpfWNhdGNoe31yJiYod2luZG93LmxvY2F0aW9uLmhhc2g9dC5zdGF0ZT8uaGFzaHx8XCJcIil9bGV0IHQ9d2luZG93LmxvY2F0aW9uLnNlYXJjaDtpZih0KXtcIj9cIj09PXQuY2hhckF0KDApJiYodD10LnN1YnN0cmluZygxKSk7Y29uc3QgZT1nKHQpO2xldCByPSExO2lmKGUuY29kZSYmZS5zdGF0ZSl0cnl7ZS5zdGF0ZT1KU09OLnBhcnNlKGUuc3RhdGUpLGUuc3RhdGUucG9ydGFsVXJsJiZlLnN0YXRlLnVpZCYmKHRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXM9ZSxyPSEwKX1jYXRjaHt9ZWxzZSBpZihlLmVycm9yJiZlLmVycm9yX2Rlc2NyaXB0aW9uJiYoY29uc29sZS5sb2coXCJJZGVudGl0eU1hbmFnZXIgT0F1dGggRXJyb3I6IFwiLGUuZXJyb3IsXCIgLSBcIixlLmVycm9yX2Rlc2NyaXB0aW9uKSxcImFjY2Vzc19kZW5pZWRcIj09PWUuZXJyb3ImJihyPSEwLGUuc3RhdGUpKSl0cnl7ZS5zdGF0ZT1KU09OLnBhcnNlKGUuc3RhdGUpfWNhdGNoe31pZihyKXtjb25zdCB0PXsuLi5lfTtbXCJjb2RlXCIsXCJlcnJvclwiLFwiZXJyb3JfZGVzY3JpcHRpb25cIixcIm1lc3NhZ2VfY29kZVwiLFwicGVyc2lzdFwiLFwic3RhdGVcIl0uZm9yRWFjaCgoZT0+e2RlbGV0ZSB0W2VdfSkpO2NvbnN0IHI9dih0KSxzPXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSsocj9gPyR7cn1gOlwiXCIpKyhlLnN0YXRlPy5oYXNofHxcIlwiKTt3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUod2luZG93Lmhpc3Rvcnkuc3RhdGUsXCJcIixzKX19fV9nZXRPQXV0aFRva2VuKGUsdCxyLGksbyl7cmV0dXJuIGU9ZS5yZXBsYWNlKC9eaHR0cDovaSxcImh0dHBzOlwiKSxzKGAke2V9L3NoYXJpbmcvcmVzdC9vYXV0aDIvdG9rZW5gLHthdXRoTW9kZTpcImFub255bW91c1wiLG1ldGhvZDpcInBvc3RcIixxdWVyeTppJiZvP3tncmFudF90eXBlOlwiYXV0aG9yaXphdGlvbl9jb2RlXCIsY29kZTp0LHJlZGlyZWN0X3VyaTppLGNsaWVudF9pZDpyLGNvZGVfdmVyaWZpZXI6b306e2dyYW50X3R5cGU6XCJyZWZyZXNoX3Rva2VuXCIscmVmcmVzaF90b2tlbjp0LGNsaWVudF9pZDpyfX0pLnRoZW4oKGU9PmUuZGF0YSkpfV9nZXRDb2RlQ2hhbGxlbmdlKGUpe2lmKGUmJmdsb2JhbFRoaXMuaXNTZWN1cmVDb250ZXh0KXtjb25zdCB0PShuZXcgVGV4dEVuY29kZXIpLmVuY29kZShlKTtyZXR1cm4gY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsdCkudGhlbigoZT0+bShuZXcgVWludDhBcnJheShlKSkpKX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpfV9wYWdlU2hvd0hhbmRsZXIoZSl7aWYoZS5wZXJzaXN0ZWQmJnRoaXMuaXNCdXN5KCkmJnRoaXMuX3JlamVjdE9uUGVyc2lzdGVkUGFnZVNob3cpe2NvbnN0IGU9bmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOnVzZXItYWJvcnRlZFwiLFwiQUJPUlRFRFwiKTt0aGlzLl9lcnJiYWNrRnVuYyhlKX19X2ZpbmRDcmVkZW50aWFsKGUsdCl7bGV0IHIscyxpLG8sbj0tMTtjb25zdCBhPXQmJnQudG9rZW4saD10JiZ0LnJlc291cmNlLGw9dGhpcy5faXNTZXJ2ZXJSc3JjKGUpP1wic2VydmVyXCI6XCJwb3J0YWxcIixjPXRoaXMuY3JlZGVudGlhbHMuZmlsdGVyKCh0PT50aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodC5zZXJ2ZXIsZSkmJnQuc2NvcGU9PT1sKSk7aWYoZT1ofHxlLGMubGVuZ3RoKWlmKDE9PT1jLmxlbmd0aCl7aWYocj1jWzBdLGk9dGhpcy5maW5kU2VydmVySW5mbyhyLnNlcnZlcikscz1pJiZpLm93bmluZ1N5c3RlbVVybCxvPXM/dGhpcy5maW5kQ3JlZGVudGlhbChzLHIudXNlcklkKTp2b2lkIDAsbj10aGlzLl9nZXRJZGVudGljYWxTdmNJZHgoZSxyKSwhYSlyZXR1cm4tMT09PW4mJnIucmVzb3VyY2VzLnB1c2goZSksdGhpcy5fYWRkUmVzb3VyY2UoZSxvKSxyOy0xIT09biYmKHIucmVzb3VyY2VzLnNwbGljZShuLDEpLHRoaXMuX3JlbW92ZVJlc291cmNlKGUsbykpfWVsc2V7bGV0IHQscjtpZihjLnNvbWUoKGE9PihyPXRoaXMuX2dldElkZW50aWNhbFN2Y0lkeChlLGEpLC0xIT09ciYmKHQ9YSxpPXRoaXMuZmluZFNlcnZlckluZm8odC5zZXJ2ZXIpLHM9aSYmaS5vd25pbmdTeXN0ZW1Vcmwsbz1zP3RoaXMuZmluZENyZWRlbnRpYWwocyx0LnVzZXJJZCk6dm9pZCAwLG49ciwhMCkpKSksYSl0JiYodC5yZXNvdXJjZXMuc3BsaWNlKG4sMSksdGhpcy5fcmVtb3ZlUmVzb3VyY2UoZSxvKSk7ZWxzZSBpZih0KXJldHVybiB0aGlzLl9hZGRSZXNvdXJjZShlLG8pLHR9fV9maW5kT0F1dGhJbmZvKGUpe2xldCB0PXRoaXMuZmluZE9BdXRoSW5mbyhlKTtpZighdClmb3IoY29uc3QgciBvZiB0aGlzLm9BdXRoSW5mb3MpaWYodGhpcy5faXNJZFByb3ZpZGVyKHIucG9ydGFsVXJsLGUpKXt0PXI7YnJlYWt9cmV0dXJuIHR9X2FkZFJlc291cmNlKGUsdCl7dCYmLTE9PT10aGlzLl9nZXRJZGVudGljYWxTdmNJZHgoZSx0KSYmdC5yZXNvdXJjZXMucHVzaChlKX1fcmVtb3ZlUmVzb3VyY2UoZSx0KXtsZXQgcj0tMTt0JiYocj10aGlzLl9nZXRJZGVudGljYWxTdmNJZHgoZSx0KSxyPi0xJiZ0LnJlc291cmNlcy5zcGxpY2UociwxKSl9X3VzZVByb3h5KGUsdCl7cmV0dXJuIHQmJnQuaXNBZG1pbiYmIV8oZS5hZG1pblRva2VuU2VydmljZVVybCx0aGlzLl9hcHBPcmlnaW4pfHwhdGhpcy5faXNQb3J0YWxEb21haW4oZS50b2tlblNlcnZpY2VVcmwpJiZcIjEwLjFcIj09PVN0cmluZyhlLmN1cnJlbnRWZXJzaW9uKSYmIV8oZS50b2tlblNlcnZpY2VVcmwsdGhpcy5fYXBwT3JpZ2luKX1fZ2V0T3JpZ2luKGUpe2NvbnN0IHQ9bmV3IGYoZSk7cmV0dXJuIHQuc2NoZW1lK1wiOi8vXCIrdC5ob3N0KyhudWxsIT10LnBvcnQ/XCI6XCIrdC5wb3J0OlwiXCIpfV9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QoZSl7Y29uc3QgdD1lLnRvTG93ZXJDYXNlKCk7bGV0IHI9dC5pbmRleE9mKHRoaXMuX2Fnc1Jlc3QpO3JldHVybi0xPT09ciYmdGhpcy5faXNBZG1pblJlc291cmNlKGUpJiYocj10aGlzLl9hZ3NBZG1pbi50ZXN0KGUpP2UucmVwbGFjZSh0aGlzLl9hZ3NBZG1pbixcIiQxXCIpLmxlbmd0aDplLnNlYXJjaCh0aGlzLl9hZG1pblN2Y3MpKSwtMSE9PXJ8fFIodCl8fChyPXQuaW5kZXhPZihcIi9zaGFyaW5nXCIpKSwtMT09PXImJlwiL1wiPT09dC5zdWJzdHIoLTEpJiYocj10Lmxlbmd0aC0xKSxyPi0xP2Uuc3Vic3RyaW5nKDAscik6ZX1faGFzU2FtZVNlcnZlckluc3RhbmNlKGUsdCl7cmV0dXJuXCIvXCI9PT1lLnN1YnN0cigtMSkmJihlPWUuc2xpY2UoMCwtMSkpLGU9ZS50b0xvd2VyQ2FzZSgpLHQ9dGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KHQpLnRvTG93ZXJDYXNlKCksZT10aGlzLl9ub3JtYWxpemVBR09Mb3JnRG9tYWluKGUpLHQ9dGhpcy5fbm9ybWFsaXplQUdPTG9yZ0RvbWFpbih0KSwoZT1lLnN1YnN0cihlLmluZGV4T2YoXCI6XCIpKSk9PT0odD10LnN1YnN0cih0LmluZGV4T2YoXCI6XCIpKSl9X25vcm1hbGl6ZUFHT0xvcmdEb21haW4oZSl7Y29uc3QgdD0vXmh0dHBzPzpcXC9cXC8oPzpjZG58W2EtelxcZC1dK1xcLm1hcHMpXFwuYXJjZ2lzXFwuY29tL2kscj0vXmh0dHBzPzpcXC9cXC8oPzpjZG5kZXZ8W2EtelxcZC1dK1xcLm1hcHNkZXZleHQpXFwuYXJjZ2lzXFwuY29tL2kscz0vXmh0dHBzPzpcXC9cXC8oPzpjZG5xYXxbYS16XFxkLV0rXFwubWFwc3FhKVxcLmFyY2dpc1xcLmNvbS9pO3JldHVybiB0LnRlc3QoZSk/ZT1lLnJlcGxhY2UodCxcImh0dHBzOi8vd3d3LmFyY2dpcy5jb21cIik6ci50ZXN0KGUpP2U9ZS5yZXBsYWNlKHIsXCJodHRwczovL2RldmV4dC5hcmNnaXMuY29tXCIpOnMudGVzdChlKSYmKGU9ZS5yZXBsYWNlKHMsXCJodHRwczovL3FhZXh0LmFyY2dpcy5jb21cIikpLGV9X3Nhbml0aXplVXJsKGUpe2NvbnN0IHI9KHQucmVxdWVzdC5wcm94eVVybHx8XCJcIikudG9Mb3dlckNhc2UoKSxzPXI/ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocitcIj9cIik6LTE7cmV0dXJuLTEhPT1zJiYoZT1lLnN1YnN0cmluZyhzK3IubGVuZ3RoKzEpKSxlPVMoZSkscChlKS5wYXRofV9pc1JFU1RTZXJ2aWNlKGUpe3JldHVybiBlLmluY2x1ZGVzKHRoaXMuX2Fnc1Jlc3QpfV9pc0FkbWluUmVzb3VyY2UoZSl7cmV0dXJuIHRoaXMuX2Fnc0FkbWluLnRlc3QoZSl8fHRoaXMuX2FkbWluU3Zjcy50ZXN0KGUpfV9pc1NlcnZlclJzcmMoZSl7cmV0dXJuIHRoaXMuX2lzUkVTVFNlcnZpY2UoZSl8fHRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKX1faXNJZGVudGljYWxTZXJ2aWNlKGUsdCl7bGV0IHI9ITE7aWYodGhpcy5faXNSRVNUU2VydmljZShlKSYmdGhpcy5faXNSRVNUU2VydmljZSh0KSl7Y29uc3Qgcz10aGlzLl9nZXRTdWZmaXgoZSkudG9Mb3dlckNhc2UoKSxpPXRoaXMuX2dldFN1ZmZpeCh0KS50b0xvd2VyQ2FzZSgpO2lmKHI9cz09PWksIXIpe2NvbnN0IGU9LyguKilcXC8oTWFwU2VydmVyfEZlYXR1cmVTZXJ2ZXJ8VXRpbGl0eU5ldHdvcmtTZXJ2ZXIpLiovZ2k7cj1zLnJlcGxhY2VBbGwoZSxcIiQxXCIpPT09aS5yZXBsYWNlQWxsKGUsXCIkMVwiKX19ZWxzZSB0aGlzLl9pc0FkbWluUmVzb3VyY2UoZSkmJnRoaXMuX2lzQWRtaW5SZXNvdXJjZSh0KT9yPSEwOnRoaXMuX2lzU2VydmVyUnNyYyhlKXx8dGhpcy5faXNTZXJ2ZXJSc3JjKHQpfHwhdGhpcy5faXNQb3J0YWxEb21haW4oZSl8fChyPSEwKTtyZXR1cm4gcn1faXNQb3J0YWxEb21haW4oZSl7Y29uc3Qgcj1uZXcgZihlLnRvTG93ZXJDYXNlKCkpLHM9dGhpcy5fcG9ydGFsQ29uZmlnO2xldCBpPXRoaXMuX2d3RG9tYWlucy5zb21lKChlPT5lLnJlZ2V4LnRlc3Qoci51cmkpKSk7cmV0dXJuIWkmJnMmJihpPXRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3Qocy5yZXN0QmFzZVVybCksci51cmkpKSxpfHx0LnBvcnRhbFVybCYmKGk9XyhyLHQucG9ydGFsVXJsLCEwKSksaXx8KGk9dGhpcy5fcG9ydGFscy5zb21lKChlPT50aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UoZSxyLnVyaSkpKSksaT1pfHx0aGlzLl9hZ3NQb3J0YWwudGVzdChyLnBhdGgpLGl9X2lzSWRQcm92aWRlcihlLHQpe2xldCByPS0xLHM9LTE7dGhpcy5fZ3dEb21haW5zLmZvckVhY2goKChpLG8pPT57LTE9PT1yJiZpLnJlZ2V4LnRlc3QoZSkmJihyPW8pLC0xPT09cyYmaS5yZWdleC50ZXN0KHQpJiYocz1vKX0pKTtsZXQgaT0hMTtpZihyPi0xJiZzPi0xJiYoMD09PXJ8fDQ9PT1yPzAhPT1zJiY0IT09c3x8KGk9ITApOjE9PT1yPzEhPT1zJiYyIT09c3x8KGk9ITApOjI9PT1yPzI9PT1zJiYoaT0hMCk6Mz09PXImJjM9PT1zJiYoaT0hMCkpLCFpKXtjb25zdCByPXRoaXMuZmluZFNlcnZlckluZm8odCkscz1yJiZyLm93bmluZ1N5c3RlbVVybDtzJiZiKHIpJiZ0aGlzLl9pc1BvcnRhbERvbWFpbihzKSYmdGhpcy5faXNJZFByb3ZpZGVyKGUscykmJihpPSEwKX1yZXR1cm4gaX1fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsdCl7bGV0IHI9LTE7Zm9yKGxldCBzPTA7czx0LnJlc291cmNlcy5sZW5ndGg7cysrKXtjb25zdCBpPXQucmVzb3VyY2VzW3NdO2lmKHRoaXMuX2lzSWRlbnRpY2FsU2VydmljZShlLGkpKXtyPXM7YnJlYWt9fXJldHVybiByfV9nZXRTdWZmaXgoZSl7cmV0dXJuIGUucmVwbGFjZSh0aGlzLl9yZWdleFNEaXJVcmwsXCJcIikucmVwbGFjZSh0aGlzLl9yZWdleFNlcnZlclR5cGUsXCIkMVwiKX1fZ2V0VG9rZW5TdmNVcmwoZSl7bGV0IHQscixpO2lmKHRoaXMuX2lzUkVTVFNlcnZpY2UoZSl8fHRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKSl7Y29uc3QgaT10aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QoZSk7cmV0dXJuIHQ9aStcIi9hZG1pbi9nZW5lcmF0ZVRva2VuXCIscj1zKGU9aStcIi9yZXN0L2luZm9cIix7cXVlcnk6e2Y6XCJqc29uXCJ9fSkudGhlbigoZT0+ZS5kYXRhKSkse2FkbWluVXJsOnQscHJvbWlzZTpyfX1pZih0aGlzLl9pc1BvcnRhbERvbWFpbihlKSl7bGV0IHQ9XCJcIjtpZih0aGlzLl9nd0RvbWFpbnMuc29tZSgocj0+KHIucmVnZXgudGVzdChlKSYmKHQ9ci50b2tlblNlcnZpY2VVcmwpLCEhdCkpKSx0fHx0aGlzLl9wb3J0YWxzLnNvbWUoKHI9Pih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UocixlKSYmKHQ9cit0aGlzLl9nd1Rva2VuVXJsKSwhIXQpKSksdHx8KGk9ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCIvc2hhcmluZ1wiKSwtMSE9PWkmJih0PWUuc3Vic3RyaW5nKDAsaSkrdGhpcy5fZ3dUb2tlblVybCkpLHR8fCh0PXRoaXMuX2dldE9yaWdpbihlKSt0aGlzLl9nd1Rva2VuVXJsKSx0KXtjb25zdCByPW5ldyBmKGUpLnBvcnQ7L15odHRwOlxcL1xcLy9pLnRlc3QoZSkmJlwiNzA4MFwiPT09ciYmKHQ9dC5yZXBsYWNlKC86NzA4MC9pLFwiOjc0NDNcIikpLHQ9dC5yZXBsYWNlKC9odHRwOi9pLFwiaHR0cHM6XCIpfXJldHVybiB0fWlmKGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInByZW1pdW0uYXJjZ2lzb25saW5lLmNvbVwiKSlyZXR1cm5cImh0dHBzOi8vcHJlbWl1bS5hcmNnaXNvbmxpbmUuY29tL3NlcnZlci90b2tlbnNcIn1fcHJvY2Vzc09BdXRoUmVzcG9uc2VQYXJhbXMoZSx0LHIpe2NvbnN0IHM9dC5fb0F1dGhDcmVkO2lmKGUuY29kZSl7Y29uc3QgaT1zLmNvZGVWZXJpZmllcjtyZXR1cm4gcy5jb2RlVmVyaWZpZXI9bnVsbCxzLnN0YXRlVUlEPW51bGwscy5zYXZlKCksdGhpcy5fZ2V0T0F1dGhUb2tlbihyLnNlcnZlcixlLmNvZGUsdC5hcHBJZCx0aGlzLl9nZXRSZWRpcmVjdFVSSSh0LCEwKSxpKS50aGVuKChpPT57Y29uc3Qgbz1uZXcgTCh7dXNlcklkOmkudXNlcm5hbWUsc2VydmVyOnIuc2VydmVyLHRva2VuOmkuYWNjZXNzX3Rva2VuLGV4cGlyZXM6RGF0ZS5ub3coKSsxZTMqaS5leHBpcmVzX2luLHNzbDppLnNzbCxvQXV0aFN0YXRlOmUuc3RhdGUsX29BdXRoQ3JlZDpzfSk7cmV0dXJuIHQudXNlcklkPW8udXNlcklkLHMuc3RvcmFnZT1pLnBlcnNpc3Q/cTpqLHMucmVmcmVzaFRva2VuPWkucmVmcmVzaF90b2tlbixzLnRva2VuPW51bGwscy5leHBpcmVzPWkucmVmcmVzaF90b2tlbl9leHBpcmVzX2luP0RhdGUubm93KCkrMWUzKmkucmVmcmVzaF90b2tlbl9leHBpcmVzX2luOm51bGwscy51c2VySWQ9by51c2VySWQscy5zc2w9by5zc2wscy5zYXZlKCksb30pKX1jb25zdCBpPW5ldyBMKHt1c2VySWQ6ZS51c2VybmFtZSxzZXJ2ZXI6ci5zZXJ2ZXIsdG9rZW46ZS5hY2Nlc3NfdG9rZW4sZXhwaXJlczpEYXRlLm5vdygpKzFlMypOdW1iZXIoZS5leHBpcmVzX2luKSxzc2w6XCJ0cnVlXCI9PT1lLnNzbCxvQXV0aFN0YXRlOmUuc3RhdGUsX29BdXRoQ3JlZDpzfSk7cmV0dXJuIHQudXNlcklkPWkudXNlcklkLHMuc3RvcmFnZT1lLnBlcnNpc3Q/cTpqLHMucmVmcmVzaFRva2VuPW51bGwscy50b2tlbj1pLnRva2VuLHMuZXhwaXJlcz1pLmV4cGlyZXMscy51c2VySWQ9aS51c2VySWQscy5zc2w9aS5zc2wscy5zYXZlKCksUHJvbWlzZS5yZXNvbHZlKGkpfV9wcm9jZXNzT0F1dGhQb3B1cFBhcmFtcyhlKXtjb25zdCB0PXRoaXMuX29BdXRoRGZkO2lmKHRoaXMuX29BdXRoRGZkPW51bGwsdClpZihjbGVhckludGVydmFsKHRoaXMuX29BdXRoSW50ZXJ2YWxJZCksdGhpcy5fb0F1dGhPblBvcHVwSGFuZGxlPy5yZW1vdmUoKSxlLmVycm9yKXtjb25zdCByPVwiYWNjZXNzX2RlbmllZFwiPT09ZS5lcnJvcixzPW5ldyBpKHI/XCJpZGVudGl0eS1tYW5hZ2VyOnVzZXItYWJvcnRlZFwiOlwiaWRlbnRpdHktbWFuYWdlcjphdXRoZW50aWNhdGlvbi1mYWlsZWRcIixyP1wiQUJPUlRFRFwiOlwiT0F1dGg6IFwiK2UuZXJyb3IrXCIgLSBcIitlLmVycm9yX2Rlc2NyaXB0aW9uKTt0LnJlamVjdChzKX1lbHNlIHRoaXMuX3Byb2Nlc3NPQXV0aFJlc3BvbnNlUGFyYW1zKGUsdC5vaW5mb18sdC5zaW5mb18pLnRoZW4oKGU9Pnt0LnJlc29sdmUoZSl9KSkuY2F0Y2goKGU9Pnt0LnJlamVjdChlKX0pKX1fc2V0T0F1dGhSZXNwb25zZVF1ZXJ5U3RyaW5nKGUpe2UmJihcIj9cIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cmluZygxKSksdGhpcy5fcHJvY2Vzc09BdXRoUG9wdXBQYXJhbXMoZyhlKSkpfV9leGNoYW5nZVRva2VuKGUsdCxyKXtyZXR1cm4gcyhgJHtlfS9zaGFyaW5nL3Jlc3Qvb2F1dGgyL2V4Y2hhbmdlVG9rZW5gLHthdXRoTW9kZTpcImFub255bW91c1wiLG1ldGhvZDpcInBvc3RcIixxdWVyeTp7ZjpcImpzb25cIixjbGllbnRfaWQ6dCx0b2tlbjpyfX0pLnRoZW4oKGU9PmUuZGF0YS50b2tlbikpfV9nZXRQbGF0Zm9ybVNlbGYoZSx0KXtyZXR1cm4gZT1lLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpLHMoYCR7ZX0vc2hhcmluZy9yZXN0L29hdXRoMi9wbGF0Zm9ybVNlbGZgLHthdXRoTW9kZTpcImFub255bW91c1wiLGhlYWRlcnM6e1wiWC1Fc3JpLUF1dGgtQ2xpZW50LUlkXCI6dCxcIlgtRXNyaS1BdXRoLVJlZGlyZWN0LVVyaVwiOndpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyMuKiQvLFwiXCIpfSxtZXRob2Q6XCJwb3N0XCIscXVlcnk6e2Y6XCJqc29uXCIsZXhwaXJhdGlvbjozMH0sd2l0aENyZWRlbnRpYWxzOiEwfSkudGhlbigoZT0+ZS5kYXRhKSl9X2dldFBvcnRhbFNlbGYoZSx0KXtsZXQgcjtpZih0aGlzLl9nd0RvbWFpbnMuc29tZSgodD0+KHQucmVnZXgudGVzdChlKSYmKHI9dC5jdXN0b21CYXNlVXJsKSwhIXIpKSkscilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHthbGxTU0w6ITAsY3VycmVudFZlcnNpb246XCI4LjRcIixjdXN0b21CYXNlVXJsOnIscG9ydGFsTW9kZTpcIm11bHRpdGVuYW50XCIsc3VwcG9ydHNPQXV0aDohMH0pO3RoaXMuX2FwcE9yaWdpbi5zdGFydHNXaXRoKFwiaHR0cHM6XCIpP2U9ZS5yZXBsYWNlKC9eaHR0cDovaSxcImh0dHBzOlwiKS5yZXBsYWNlKC86NzA4MC9pLFwiOjc0NDNcIik6L15odHRwOi9pLnRlc3QodCkmJihlPWUucmVwbGFjZSgvXmh0dHBzOi9pLFwiaHR0cDpcIikucmVwbGFjZSgvOjc0NDMvaSxcIjo3MDgwXCIpKTtyZXR1cm4gcyhlLHtxdWVyeTp7ZjpcImpzb25cIn0sYXV0aE1vZGU6XCJhbm9ueW1vdXNcIix3aXRoQ3JlZGVudGlhbHM6ITB9KS50aGVuKChlPT5lLmRhdGEpKX1fZG9Qb3J0YWxTaWduSW4oZSl7Y29uc3QgdD10aGlzLl9wb3J0YWxDb25maWcscj13aW5kb3cubG9jYXRpb24uaHJlZixzPXRoaXMuZmluZFNlcnZlckluZm8oZSk7cmV0dXJuISghdCYmIXRoaXMuX2lzUG9ydGFsRG9tYWluKHIpfHwhKHM/cy5oYXNQb3J0YWx8fHMub3duaW5nU3lzdGVtVXJsJiZ0aGlzLl9pc1BvcnRhbERvbWFpbihzLm93bmluZ1N5c3RlbVVybCk6dGhpcy5faXNQb3J0YWxEb21haW4oZSkpfHwhKHRoaXMuX2lzSWRQcm92aWRlcihyLGUpfHx0JiYodGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdCh0LnJlc3RCYXNlVXJsKSxlKXx8dGhpcy5faXNJZFByb3ZpZGVyKHQucmVzdEJhc2VVcmwsZSkpfHxfKHIsZSwhMCkpKX1fY2hlY2tQcm90b2NvbChlLHQscixzKXtsZXQgbz0hMDtjb25zdCBuPXM/dC5hZG1pblRva2VuU2VydmljZVVybDp0LnRva2VuU2VydmljZVVybDtpZihuLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJodHRwczpcIikmJiF0aGlzLl9hcHBPcmlnaW4uc3RhcnRzV2l0aChcImh0dHBzOlwiKSYmdyhuKSYmKG89ISF0aGlzLl9wcm90b2NvbEZ1bmMmJiEhdGhpcy5fcHJvdG9jb2xGdW5jKHtyZXNvdXJjZVVybDplLHNlcnZlckluZm86dH0pLCFvKSl7cihuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6YWJvcnRlZFwiLFwiQWJvcnRlZCB0aGUgU2lnbi1JbiBwcm9jZXNzIHRvIGF2b2lkIHNlbmRpbmcgcGFzc3dvcmQgb3ZlciBpbnNlY3VyZSBjb25uZWN0aW9uLlwiKSl9cmV0dXJuIG99X2VucXVldWUoZSx0LHIscyxpLG8pe3JldHVybiBzfHwocz1sKCkpLHMucmVzVXJsXz1lLHMuc2luZm9fPXQscy5vcHRpb25zXz1yLHMuYWRtaW5fPWkscy5yZWZyZXNoXz1vLHRoaXMuX2J1c3k/dGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdChlKSx0aGlzLl9idXN5LnJlc1VybF8pPyh0aGlzLl9vQXV0aERmZCYmdGhpcy5fb0F1dGhEZmQub0F1dGhXaW5fJiZ0aGlzLl9vQXV0aERmZC5vQXV0aFdpbl8uZm9jdXMoKSx0aGlzLl9zb1JlcXMucHVzaChzKSk6dGhpcy5feG9SZXFzLnB1c2gocyk6dGhpcy5fZG9TaWduSW4ocykscy5wcm9taXNlfV9kb1NpZ25JbihlKXt0aGlzLl9idXN5PWUsdGhpcy5fcmVqZWN0T25QZXJzaXN0ZWRQYWdlU2hvdz0hMTtjb25zdCB0PXQ9Pntjb25zdCByPWUub3B0aW9uc18mJmUub3B0aW9uc18ucmVzb3VyY2Uscz1lLnJlc1VybF8saT1lLnJlZnJlc2hfO2xldCBvPSExO3RoaXMuY3JlZGVudGlhbHMuaW5jbHVkZXModCl8fChpJiZ0aGlzLmNyZWRlbnRpYWxzLmluY2x1ZGVzKGkpPyhpLnVzZXJJZD10LnVzZXJJZCxpLnRva2VuPXQudG9rZW4saS5leHBpcmVzPXQuZXhwaXJlcyxpLnZhbGlkaXR5PXQudmFsaWRpdHksaS5zc2w9dC5zc2wsaS5jcmVhdGlvblRpbWU9dC5jcmVhdGlvblRpbWUsbz0hMCx0PWkpOnRoaXMuY3JlZGVudGlhbHMucHVzaCh0KSksdC5yZXNvdXJjZXN8fCh0LnJlc291cmNlcz1bXSksdC5yZXNvdXJjZXMuaW5jbHVkZXMocnx8cyl8fHQucmVzb3VyY2VzLnB1c2gocnx8cyksdC5zY29wZT10aGlzLl9pc1NlcnZlclJzcmMocyk/XCJzZXJ2ZXJcIjpcInBvcnRhbFwiLHQuZW1pdFRva2VuQ2hhbmdlKCk7Y29uc3Qgbj10aGlzLl9zb1JlcXMsYT17fTt0aGlzLl9zb1JlcXM9W10sbi5mb3JFYWNoKChlPT57aWYoIXRoaXMuX2lzSWRlbnRpY2FsU2VydmljZShzLGUucmVzVXJsXykpe2NvbnN0IHI9dGhpcy5fZ2V0U3VmZml4KGUucmVzVXJsXyk7YVtyXXx8KGFbcl09ITAsdC5yZXNvdXJjZXMucHVzaChlLnJlc1VybF8pKX19KSksZS5yZXNvbHZlKHQpLG4uZm9yRWFjaCgoZT0+e3RoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QocyksZS5yZXNVcmxfKT9lLnJlc29sdmUodCk6dGhpcy5fc29SZXFzLnB1c2goZSl9KSksdGhpcy5fYnVzeT1lLnJlc1VybF89ZS5zaW5mb189ZS5yZWZyZXNoXz1udWxsLG98fHRoaXMuZW1pdChcImNyZWRlbnRpYWwtY3JlYXRlXCIse2NyZWRlbnRpYWw6dH0pLHRoaXMuX3NvUmVxcy5sZW5ndGg/dGhpcy5fZG9TaWduSW4odGhpcy5fc29SZXFzLnNoaWZ0KCkpOnRoaXMuX3hvUmVxcy5sZW5ndGgmJnRoaXMuX2RvU2lnbkluKHRoaXMuX3hvUmVxcy5zaGlmdCgpKX0scj10PT57ZS5yZWplY3QodCksdGhpcy5fYnVzeT1lLnJlc1VybF89ZS5zaW5mb189ZS5yZWZyZXNoXz1udWxsLHRoaXMuX3NvUmVxcy5sZW5ndGg/dGhpcy5fZG9TaWduSW4odGhpcy5fc29SZXFzLnNoaWZ0KCkpOnRoaXMuX3hvUmVxcy5sZW5ndGgmJnRoaXMuX2RvU2lnbkluKHRoaXMuX3hvUmVxcy5zaGlmdCgpKX0scz0obyxhLGgsbCk9Pntjb25zdCBkPWUuc2luZm9fLHU9IWUub3B0aW9uc198fCExIT09ZS5vcHRpb25zXy5wcm9tcHQscD1kLmhhc1BvcnRhbCYmdGhpcy5fZmluZE9BdXRoSW5mbyhlLnJlc1VybF8pO2xldCBmLGc7aWYobyl0KG5ldyBMKHt1c2VySWQ6byxzZXJ2ZXI6ZC5zZXJ2ZXIsdG9rZW46aHx8bnVsbCxleHBpcmVzOm51bGwhPWw/TnVtYmVyKGwpOm51bGwsc3NsOiEhYX0pKTtlbHNlIGlmKHdpbmRvdyE9PXdpbmRvdy5wYXJlbnQmJnRoaXMuX2FwcFVybE9iai5xdWVyeT8uW1wiYXJjZ2lzLWF1dGgtb3JpZ2luXCJdJiZ0aGlzLl9hcHBVcmxPYmoucXVlcnk/LltcImFyY2dpcy1hdXRoLXBvcnRhbFwiXSYmdGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdCh0aGlzLl9hcHBVcmxPYmoucXVlcnlbXCJhcmNnaXMtYXV0aC1wb3J0YWxcIl0pLGUucmVzVXJsXykpe3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe3R5cGU6XCJhcmNnaXM6YXV0aDpyZXF1ZXN0Q3JlZGVudGlhbFwifSx0aGlzLl9hcHBVcmxPYmoucXVlcnlbXCJhcmNnaXMtYXV0aC1vcmlnaW5cIl0pO2NvbnN0IHM9bih3aW5kb3csXCJtZXNzYWdlXCIsKGU9PntlLnNvdXJjZT09PXdpbmRvdy5wYXJlbnQmJmUuZGF0YSYmKFwiYXJjZ2lzOmF1dGg6Y3JlZGVudGlhbFwiPT09ZS5kYXRhLnR5cGU/KHMucmVtb3ZlKCksZS5kYXRhLmNyZWRlbnRpYWwuZXhwaXJlczxEYXRlLm5vdygpP3IobmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOmNyZWRlbnRpYWwtcmVxdWVzdC1mYWlsZWRcIixcIlBhcmVudCBhcHBsaWNhdGlvbidzIHRva2VuIGhhcyBleHBpcmVkLlwiKSk6dChuZXcgTChlLmRhdGEuY3JlZGVudGlhbCkpKTpcImFyY2dpczphdXRoOmVycm9yXCI9PT1lLmRhdGEudHlwZSYmKHMucmVtb3ZlKCksXCJ0b2tlbkV4cGlyZWRFcnJvclwiPT09ZS5kYXRhLmVycm9yLm5hbWU/cihuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6Y3JlZGVudGlhbC1yZXF1ZXN0LWZhaWxlZFwiLFwiUGFyZW50IGFwcGxpY2F0aW9uJ3MgdG9rZW4gaGFzIGV4cGlyZWQuXCIpKTpyKGkuZnJvbUpTT04oZS5kYXRhLmVycm9yKSkpKX0pKTtjKGUub3B0aW9uc18/LnNpZ25hbCwoKCk9PntzLnJlbW92ZSgpfSkpfWVsc2UgaWYocCl7bGV0IG89cC5fb0F1dGhDcmVkO2lmKCFvKXtjb25zdCBlPW5ldyB4KHAscSksdD1uZXcgeChwLGopO2UuaXNWYWxpZCgpJiZ0LmlzVmFsaWQoKT9lLmV4cGlyZXM+dC5leHBpcmVzPyhvPWUsdC5kZXN0cm95KCkpOihvPXQsZS5kZXN0cm95KCkpOm89ZS5pc1ZhbGlkKCk/ZTp0LHAuX29BdXRoQ3JlZD1vfWlmKG8uaXNWYWxpZCgpKXtmPW5ldyBMKHt1c2VySWQ6by51c2VySWQsc2VydmVyOmQuc2VydmVyLHRva2VuOm8udG9rZW4sZXhwaXJlczpvLmV4cGlyZXMsc3NsOm8uc3NsLF9vQXV0aENyZWQ6b30pO2NvbnN0IHI9cC5hcHBJZCE9PW8uYXBwSWQmJnRoaXMuX2RvUG9ydGFsU2lnbkluKGUucmVzVXJsXyk7cnx8by5yZWZyZXNoVG9rZW4/KGUuX3BlbmRpbmdEZmQ9by5yZWZyZXNoVG9rZW4/dGhpcy5fZ2V0T0F1dGhUb2tlbihkLnNlcnZlcixvLnJlZnJlc2hUb2tlbixvLmFwcElkKS50aGVuKChlPT4oZi5leHBpcmVzPURhdGUubm93KCkrMWUzKmUuZXhwaXJlc19pbixmLnRva2VuPWUuYWNjZXNzX3Rva2VuLGYpKSk6UHJvbWlzZS5yZXNvbHZlKGYpLGUuX3BlbmRpbmdEZmQudGhlbigoZT0+cj90aGlzLl9leGNoYW5nZVRva2VuKGUuc2VydmVyLHAuYXBwSWQsZS50b2tlbikudGhlbigodD0+KGUudG9rZW49dCxlKSkpLmNhdGNoKCgoKT0+ZSkpOmUpKS50aGVuKChlPT57dChlKX0pKS5jYXRjaCgoKCk9PntvPy5kZXN0cm95KCkscygpfSkpKTp0KGYpfWVsc2UgaWYodGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcyYmdGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHAucG9ydGFsVXJsLHRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXMuc3RhdGUucG9ydGFsVXJsKSYmKHRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXMuYWNjZXNzX3Rva2VufHx0aGlzLl9vQXV0aExvY2F0aW9uUGFyYW1zLmNvZGUmJnRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXMuc3RhdGUudWlkPT09by5zdGF0ZVVJRCYmby5jb2RlVmVyaWZpZXIpKXtjb25zdCBzPXRoaXMuX29BdXRoTG9jYXRpb25QYXJhbXM7dGhpcy5fb0F1dGhMb2NhdGlvblBhcmFtcz1udWxsLGUuX3BlbmRpbmdEZmQ9dGhpcy5fcHJvY2Vzc09BdXRoUmVzcG9uc2VQYXJhbXMocyxwLGQpLnRoZW4oKGU9Pnt0KGUpfSkpLmNhdGNoKHIpfWVsc2V7Y29uc3Qgcz0oKT0+e3U/ZS5fcGVuZGluZ0RmZD10aGlzLm9BdXRoU2lnbkluKGUucmVzVXJsXyxkLHAsZS5vcHRpb25zXykudGhlbih0LHIpOihnPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aGVudGljYXRlZFwiLFwiVXNlciBpcyBub3Qgc2lnbmVkIGluLlwiKSxyKGcpKX07dGhpcy5fZG9Qb3J0YWxTaWduSW4oZS5yZXNVcmxfKT9lLl9wZW5kaW5nRGZkPXRoaXMuX2dldFBsYXRmb3JtU2VsZihkLnNlcnZlcixwLmFwcElkKS50aGVuKChlPT57XyhlLnBvcnRhbFVybCx0aGlzLl9hcHBPcmlnaW4sITApPyhmPW5ldyBMKHt1c2VySWQ6ZS51c2VybmFtZSxzZXJ2ZXI6ZC5zZXJ2ZXIsZXhwaXJlczpEYXRlLm5vdygpKzFlMyplLmV4cGlyZXNfaW4sdG9rZW46ZS50b2tlbn0pLHQoZikpOnMoKX0pKS5jYXRjaChzKTpzKCl9fWVsc2UgaWYodSl7aWYodGhpcy5fY2hlY2tQcm90b2NvbChlLnJlc1VybF8sZCxyLGUuYWRtaW5fKSl7bGV0IHM9ZS5vcHRpb25zXztlLmFkbWluXyYmKHM9c3x8e30scy5pc0FkbWluPSEwKSxlLl9wZW5kaW5nRGZkPXRoaXMuc2lnbkluKGUucmVzVXJsXyxkLHMpLnRoZW4odCxyKX19ZWxzZSBnPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aGVudGljYXRlZFwiLFwiVXNlciBpcyBub3Qgc2lnbmVkIGluLlwiKSxyKGcpfSxvPSgpPT57Y29uc3Qgcz1lLnNpbmZvXyxpPXMub3duaW5nU3lzdGVtVXJsLG89ZS5vcHRpb25zXztsZXQgbixhLGgsbDtpZihvJiYobj1vLnRva2VuLGE9by5lcnJvcixoPW8ucHJvbXB0KSxsPXRoaXMuX2ZpbmRDcmVkZW50aWFsKGkse3Rva2VuOm4scmVzb3VyY2U6ZS5yZXNVcmxffSksIWwpZm9yKGNvbnN0IGUgb2YgdGhpcy5jcmVkZW50aWFscylpZih0aGlzLl9pc0lkUHJvdmlkZXIoaSxlLnNlcnZlcikpe2w9ZTticmVha31pZihsKXtjb25zdCBpPXRoaXMuZmluZENyZWRlbnRpYWwoZS5yZXNVcmxfLGwudXNlcklkKTtpZihpKXQoaSk7ZWxzZSBpZihEKHMsdGhpcy5fbGVnYWN5RmVkKSl7Y29uc3QgZT1sLnRvSlNPTigpO2Uuc2VydmVyPXMuc2VydmVyLGUucmVzb3VyY2VzPW51bGwsdChuZXcgTChlKSl9ZWxzZXsoZS5fcGVuZGluZ0RmZD10aGlzLmdlbmVyYXRlVG9rZW4odGhpcy5maW5kU2VydmVySW5mbyhsLnNlcnZlciksbnVsbCx7c2VydmVyVXJsOmUucmVzVXJsXyx0b2tlbjpsLnRva2VuLHNpZ25hbDplLm9wdGlvbnNfLnNpZ25hbCxzc2w6bC5zc2x9KSkudGhlbigocj0+e3QobmV3IEwoe3VzZXJJZDpsPy51c2VySWQsc2VydmVyOnMuc2VydmVyLHRva2VuOnIudG9rZW4sZXhwaXJlczpudWxsIT1yLmV4cGlyZXM/TnVtYmVyKHIuZXhwaXJlcyk6bnVsbCxzc2w6ISFyLnNzbCxpc0FkbWluOmUuYWRtaW5fLHZhbGlkaXR5OnIudmFsaWRpdHl9KSl9KSxyKX19ZWxzZXt0aGlzLl9idXN5PW51bGwsbiYmKGUub3B0aW9uc18udG9rZW49bnVsbCk7KGUuX3BlbmRpbmdEZmQ9dGhpcy5nZXRDcmVkZW50aWFsKGkucmVwbGFjZSgvXFwvPyQvLFwiL3NoYXJpbmdcIikse3Jlc291cmNlOmUucmVzVXJsXyxvd25pbmdUZW5hbnQ6cy5vd25pbmdUZW5hbnQsc2lnbmFsOmUub3B0aW9uc18uc2lnbmFsLHRva2VuOm4sZXJyb3I6YSxwcm9tcHQ6aH0pKS50aGVuKCgoKT0+e3RoaXMuX2VucXVldWUoZS5yZXNVcmxfLGUuc2luZm9fLGUub3B0aW9uc18sZSxlLmFkbWluXyl9KSwodD0+e2UucmVzVXJsXz1lLnNpbmZvXz1lLnJlZnJlc2hfPW51bGwsZS5yZWplY3QodCl9KSl9fTt0aGlzLl9lcnJiYWNrRnVuYz1yO2NvbnN0IGE9ZS5zaW5mb18ub3duaW5nU3lzdGVtVXJsLGw9dGhpcy5faXNTZXJ2ZXJSc3JjKGUucmVzVXJsXyksZD1lLnNpbmZvXy5fcmVzdEluZm9QbXM7ZD9kLnByb21pc2UudGhlbigodD0+e2NvbnN0IHI9ZS5zaW5mb187aWYoci5fcmVzdEluZm9QbXMpe3IuYWRtaW5Ub2tlblNlcnZpY2VVcmw9ci5fcmVzdEluZm9QbXMuYWRtaW5Vcmwsci5fcmVzdEluZm9QbXM9bnVsbCxyLnRva2VuU2VydmljZVVybD0oaChcImF1dGhJbmZvLnRva2VuU2VydmljZXNVcmxcIix0KXx8aChcImF1dGhJbmZvLnRva2VuU2VydmljZVVybFwiLHQpfHxoKFwidG9rZW5TZXJ2aWNlVXJsXCIsdCkpPz9udWxsLHIuc2hvcnRMaXZlZFRva2VuVmFsaWRpdHk9aChcImF1dGhJbmZvLnNob3J0TGl2ZWRUb2tlblZhbGlkaXR5XCIsdCk/P251bGwsci5jdXJyZW50VmVyc2lvbj10LmN1cnJlbnRWZXJzaW9uLHIub3duaW5nVGVuYW50PXQub3duaW5nVGVuYW50O2NvbnN0IGU9ci5vd25pbmdTeXN0ZW1Vcmw9dC5vd25pbmdTeXN0ZW1Vcmw7ZSYmdGhpcy5fcG9ydGFscy5wdXNoKGUpfWwmJnIub3duaW5nU3lzdGVtVXJsP28oKTpzKCl9KSwoKCk9PntlLnNpbmZvXy5fcmVzdEluZm9QbXM9bnVsbDtjb25zdCB0PW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpzZXJ2ZXItaWRlbnRpZmljYXRpb24tZmFpbGVkXCIsXCJVbmtub3duIHJlc291cmNlIC0gY291bGQgbm90IGZpbmQgdG9rZW4gc2VydmljZSBlbmRwb2ludC5cIik7cih0KX0pKTpsJiZhP28oKTplLnNpbmZvXy5fc2VsZlJlcT9lLnNpbmZvXy5fc2VsZlJlcS5zZWxmRGZkLnRoZW4oKHQ9Pntjb25zdCByPXt9O2xldCBzLGksbyxuO3JldHVybiB0JiYocz10LnVzZXImJnQudXNlci51c2VybmFtZSxyLnVzZXJuYW1lPXMsci5hbGxTU0w9dC5hbGxTU0wsaT10LnN1cHBvcnRzT0F1dGgsbj1wYXJzZUZsb2F0KHQuY3VycmVudFZlcnNpb24pLFwibXVsdGl0ZW5hbnRcIj09PXQucG9ydGFsTW9kZSYmKG89dC5jdXN0b21CYXNlVXJsKSxlLnNpbmZvXy5jdXJyZW50VmVyc2lvbj1uKSxlLnNpbmZvXy53ZWJUaWVyQXV0aD0hIXMscyYmdGhpcy5ub3JtYWxpemVXZWJUaWVyQXV0aD90aGlzLmdlbmVyYXRlVG9rZW4oZS5zaW5mb18sbnVsbCx7c3NsOnIuYWxsU1NMfSkuY2F0Y2goKCgpPT5udWxsKSkudGhlbigoZT0+KHIucG9ydGFsVG9rZW49ZSYmZS50b2tlbixyLnRva2VuRXhwaXJhdGlvbj1lJiZlLmV4cGlyZXMscikpKTohcyYmaSYmbj49NC40JiYhdGhpcy5fZmluZE9BdXRoSW5mbyhlLnJlc1VybF8pP3RoaXMuX2dlbmVyYXRlT0F1dGhJbmZvKHtwb3J0YWxVcmw6ZS5zaW5mb18uc2VydmVyLGN1c3RvbUJhc2VVcmw6byxvd25pbmdUZW5hbnQ6ZS5zaW5mb18uX3NlbGZSZXEub3duaW5nVGVuYW50fSkuY2F0Y2goKCgpPT5udWxsKSkudGhlbigoKCk9PnIpKTpyfSkpLmNhdGNoKCgoKT0+bnVsbCkpLnRoZW4oKHQ9PntlLnNpbmZvXy5fc2VsZlJlcT1udWxsLHQ/cyh0LnVzZXJuYW1lLHQuYWxsU1NMLHQucG9ydGFsVG9rZW4sdC50b2tlbkV4cGlyYXRpb24pOnMoKX0pKTpzKCl9X2dlbmVyYXRlT0F1dGhJbmZvKGUpe2xldCB0LHI9bnVsbCxpPWUucG9ydGFsVXJsO2NvbnN0IG89ZS5jdXN0b21CYXNlVXJsLG49ZS5vd25pbmdUZW5hbnQsYT0hdGhpcy5fZGVmYXVsdE9BdXRoSW5mbyYmdGhpcy5fY3JlYXRlRGVmYXVsdE9BdXRoSW5mbyYmIXRoaXMuX2hhc1Rlc3RlZElmQXBwSXNPblBvcnRhbDtpZihhKXtyPXdpbmRvdy5sb2NhdGlvbi5ocmVmO2xldCBlPXIuaW5kZXhPZihcIj9cIik7ZT4tMSYmKHI9ci5zbGljZSgwLGUpKSxlPXIuc2VhcmNoKC9cXC8oYXBwc3xob21lKVxcLy8pLHI9ZT4tMT9yLnNsaWNlKDAsZSk6bnVsbH1yZXR1cm4gYSYmcj8odGhpcy5faGFzVGVzdGVkSWZBcHBJc09uUG9ydGFsPSEwLHQ9cyhyK1wiL3NoYXJpbmcvcmVzdFwiLHtxdWVyeTp7ZjpcImpzb25cIn19KS50aGVuKCgoKT0+e3RoaXMuX2RlZmF1bHRPQXV0aEluZm89bmV3IE8oe2FwcElkOlwiYXJjZ2lzb25saW5lXCIscG9wdXBDYWxsYmFja1VybDpyK1wiL2hvbWUvb2F1dGgtY2FsbGJhY2suaHRtbFwifSl9KSkpOnQ9UHJvbWlzZS5yZXNvbHZlKCksdC50aGVuKCgoKT0+e2lmKHRoaXMuX2RlZmF1bHRPQXV0aEluZm8pcmV0dXJuIGk9aS5yZXBsYWNlKC9eaHR0cDovaSxcImh0dHBzOlwiKSxzKGkrXCIvc2hhcmluZy9yZXN0L29hdXRoMi92YWxpZGF0ZVJlZGlyZWN0VXJpXCIse3F1ZXJ5OnthY2NvdW50SWQ6bixjbGllbnRfaWQ6dGhpcy5fZGVmYXVsdE9BdXRoSW5mby5hcHBJZCxyZWRpcmVjdF91cmk6SSh0aGlzLl9kZWZhdWx0T0F1dGhJbmZvLnBvcHVwQ2FsbGJhY2tVcmwpLGY6XCJqc29uXCJ9fSkudGhlbigoZT0+e2lmKGUuZGF0YS52YWxpZCl7Y29uc3QgdD10aGlzLl9kZWZhdWx0T0F1dGhJbmZvLmNsb25lKCk7ZS5kYXRhLnVybEtleSYmbz90LnBvcnRhbFVybD1cImh0dHBzOi8vXCIrZS5kYXRhLnVybEtleS50b0xvd2VyQ2FzZSgpK1wiLlwiK286dC5wb3J0YWxVcmw9aSx0LnBvcHVwPXdpbmRvdyE9PXdpbmRvdy50b3B8fCEoXyhpLHRoaXMuX2FwcE9yaWdpbil8fHRoaXMuX2d3RG9tYWlucy5zb21lKChlPT5lLnJlZ2V4LnRlc3QoaSkmJmUucmVnZXgudGVzdCh0aGlzLl9hcHBPcmlnaW4pKSkpLHRoaXMub0F1dGhJbmZvcy5wdXNoKHQpfX0pKX0pKX1fZG9PQXV0aFNpZ25JbihlLHQscixzKXtjb25zdCBvPXIuX29BdXRoQ3JlZCxhPXtwb3J0YWxVcmw6ci5wb3J0YWxVcmx9OyFyLnBvcHVwJiZyLnByZXNlcnZlVXJsSGFzaCYmd2luZG93LmxvY2F0aW9uLmhhc2gmJihhLmhhc2g9d2luZG93LmxvY2F0aW9uLmhhc2gpLG8uc3RhdGVVSUQmJihhLnVpZD1vLnN0YXRlVUlEKTtjb25zdCBoPXtjbGllbnRfaWQ6ci5hcHBJZCxyZXNwb25zZV90eXBlOm8uY29kZVZlcmlmaWVyP1wiY29kZVwiOlwidG9rZW5cIixzdGF0ZTpKU09OLnN0cmluZ2lmeShhKSxleHBpcmF0aW9uOnIuZXhwaXJhdGlvbixsb2NhbGU6ci5sb2NhbGUscmVkaXJlY3RfdXJpOnRoaXMuX2dldFJlZGlyZWN0VVJJKHIsISFvLmNvZGVWZXJpZmllcil9O3IuZm9yY2VMb2dpbiYmKGguZm9yY2VfbG9naW49ITApLHIuZm9yY2VVc2VySWQmJnIudXNlcklkJiYoaC5wcmVwb3B1bGF0ZWR1c2VybmFtZT1yLnVzZXJJZCksIXIucG9wdXAmJnRoaXMuX2RvUG9ydGFsU2lnbkluKGUpJiYoaC5yZWRpcmVjdFRvVXNlck9yZ1VybD0hMCksby5jb2RlVmVyaWZpZXImJihoLmNvZGVfY2hhbGxlbmdlPXN8fG8uY29kZVZlcmlmaWVyLGguY29kZV9jaGFsbGVuZ2VfbWV0aG9kPXM/XCJTMjU2XCI6XCJwbGFpblwiKTtjb25zdCBsPXIucG9ydGFsVXJsLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpK1wiL3NoYXJpbmcvb2F1dGgyL2F1dGhvcml6ZVwiLGM9bCtcIj9cIit2KGgpO2lmKHIucG9wdXApe2NvbnN0IGU9d2luZG93Lm9wZW4oYyxcImVzcmlKU0FQSU9BdXRoXCIsci5wb3B1cFdpbmRvd0ZlYXR1cmVzKTtpZihlKWUuZm9jdXMoKSx0aGlzLl9vQXV0aERmZC5vQXV0aFdpbl89ZSx0aGlzLl9vQXV0aEludGVydmFsSWQ9c2V0SW50ZXJ2YWwoKCgpPT57aWYoZS5jbG9zZWQpe2NsZWFySW50ZXJ2YWwodGhpcy5fb0F1dGhJbnRlcnZhbElkKSx0aGlzLl9vQXV0aE9uUG9wdXBIYW5kbGUucmVtb3ZlKCk7Y29uc3QgZT10aGlzLl9vQXV0aERmZDtpZihlKXtjb25zdCB0PW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIik7ZS5yZWplY3QodCl9fX0pLDUwMCksdGhpcy5fb0F1dGhPblBvcHVwSGFuZGxlPW4od2luZG93LFtcImFyY2dpczphdXRoOmhhc2hcIixcImFyY2dpczphdXRoOmxvY2F0aW9uOnNlYXJjaFwiXSwoZT0+e1wiYXJjZ2lzOmF1dGg6aGFzaFwiPT09ZS50eXBlP3RoaXMuc2V0T0F1dGhSZXNwb25zZUhhc2goZS5kZXRhaWwpOnRoaXMuX3NldE9BdXRoUmVzcG9uc2VRdWVyeVN0cmluZyhlLmRldGFpbCl9KSk7ZWxzZXtjb25zdCBlPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpwb3B1cC1ibG9ja2VkXCIsXCJBQk9SVEVEXCIpO3RoaXMuX29BdXRoRGZkLnJlamVjdChlKX19ZWxzZSB0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93PSEwLHRoaXMuX29BdXRoUmVkaXJlY3RGdW5jP3RoaXMuX29BdXRoUmVkaXJlY3RGdW5jKHthdXRob3JpemVQYXJhbXM6aCxhdXRob3JpemVVcmw6bCxyZXNvdXJjZVVybDplLHNlcnZlckluZm86dCxvQXV0aEluZm86cn0pOndpbmRvdy5sb2NhdGlvbi5ocmVmPWN9X2dldFJlZGlyZWN0VVJJKGUsdCl7Y29uc3Qgcj13aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jLiokLyxcIlwiKTtpZihlLnBvcHVwKXJldHVybiBJKGUucG9wdXBDYWxsYmFja1VybCk7aWYodCl7Y29uc3QgZT1wKHIpO3JldHVybiBlLnF1ZXJ5JiZbXCJjb2RlXCIsXCJlcnJvclwiLFwiZXJyb3JfZGVzY3JpcHRpb25cIixcIm1lc3NhZ2VfY29kZVwiLFwicGVyc2lzdFwiLFwic3RhdGVcIl0uZm9yRWFjaCgodD0+e2RlbGV0ZSBlLnF1ZXJ5W3RdfSkpLEEoZS5wYXRoLGUucXVlcnkpfXJldHVybiByfX1FLnByb3RvdHlwZS5kZWNsYXJlZENsYXNzPVwiZXNyaS5pZGVudGl0eS5JZGVudGl0eU1hbmFnZXJCYXNlXCI7bGV0IEw9Y2xhc3MgZXh0ZW5kcyBvLkV2ZW50ZWRBY2Nlc3Nvcntjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLl9vQXV0aENyZWQ9bnVsbCx0aGlzLnRva2VuUmVmcmVzaEJ1ZmZlcj0yLGUmJmUuX29BdXRoQ3JlZCYmKHRoaXMuX29BdXRoQ3JlZD1lLl9vQXV0aENyZWQpfWluaXRpYWxpemUoKXt0aGlzLnJlc291cmNlcz10aGlzLnJlc291cmNlc3x8W10sbnVsbD09dGhpcy5jcmVhdGlvblRpbWUmJih0aGlzLmNyZWF0aW9uVGltZT1EYXRlLm5vdygpKX1yZWZyZXNoVG9rZW4oKXtjb25zdCBlPXIuZmluZFNlcnZlckluZm8odGhpcy5zZXJ2ZXIpLHQ9ZSYmZS5vd25pbmdTeXN0ZW1Vcmwscz0hIXQmJlwic2VydmVyXCI9PT10aGlzLnNjb3BlLGk9cyYmRChlLHIuX2xlZ2FjeUZlZCksbz1lLndlYlRpZXJBdXRoLG49byYmci5ub3JtYWxpemVXZWJUaWVyQXV0aCxhPUNbdGhpcy5zZXJ2ZXJdLGg9YSYmYVt0aGlzLnVzZXJJZF07bGV0IGwsYz10aGlzLnJlc291cmNlcyYmdGhpcy5yZXNvdXJjZXNbMF0sZD1zP3IuZmluZFNlcnZlckluZm8odCk6bnVsbCx1PXt1c2VybmFtZTp0aGlzLnVzZXJJZCxwYXNzd29yZDpofTtpZihvJiYhbilyZXR1cm47cyYmIWQmJnIuc2VydmVySW5mb3Muc29tZSgoZT0+KHIuX2lzSWRQcm92aWRlcih0LGUuc2VydmVyKSYmKGQ9ZSksISFkKSkpO2NvbnN0IHA9ZD9yLmZpbmRDcmVkZW50aWFsKGQuc2VydmVyLHRoaXMudXNlcklkKTpudWxsO2lmKCFzfHxwKXtpZighaSl7aWYocylsPXtzZXJ2ZXJVcmw6Yyx0b2tlbjpwJiZwLnRva2VuLHNzbDpwJiZwLnNzbH07ZWxzZSBpZihuKXU9bnVsbCxsPXtzc2w6dGhpcy5zc2x9O2Vsc2V7aWYoIWgpe2xldCB0O3JldHVybiBjJiYoYz1yLl9zYW5pdGl6ZVVybChjKSx0aGlzLl9lbnF1ZXVlZD0xLHQ9ci5fZW5xdWV1ZShjLGUsbnVsbCxudWxsLHRoaXMuaXNBZG1pbix0aGlzKSx0LnRoZW4oKCgpPT57dGhpcy5fZW5xdWV1ZWQ9MCx0aGlzLnJlZnJlc2hTZXJ2ZXJUb2tlbnMoKX0pKS5jYXRjaCgoKCk9Pnt0aGlzLl9lbnF1ZXVlZD0wfSkpKSx0fXRoaXMuaXNBZG1pbiYmKGw9e2lzQWRtaW46ITB9KX1yZXR1cm4gci5nZW5lcmF0ZVRva2VuKHM/ZDplLHM/bnVsbDp1LGwpLnRoZW4oKGU9Pnt0aGlzLnRva2VuPWUudG9rZW4sdGhpcy5leHBpcmVzPW51bGwhPWUuZXhwaXJlcz9OdW1iZXIoZS5leHBpcmVzKTpudWxsLHRoaXMuY3JlYXRpb25UaW1lPURhdGUubm93KCksdGhpcy52YWxpZGl0eT1lLnZhbGlkaXR5LHRoaXMuZW1pdFRva2VuQ2hhbmdlKCksdGhpcy5yZWZyZXNoU2VydmVyVG9rZW5zKCl9KSkuY2F0Y2goKCgpPT57fSkpfXA/LnJlZnJlc2hUb2tlbigpfX1yZWZyZXNoU2VydmVyVG9rZW5zKCl7XCJwb3J0YWxcIj09PXRoaXMuc2NvcGUmJnIuY3JlZGVudGlhbHMuZm9yRWFjaCgoZT0+e2NvbnN0IHQ9ci5maW5kU2VydmVySW5mbyhlLnNlcnZlcikscz10JiZ0Lm93bmluZ1N5c3RlbVVybDtlIT09dGhpcyYmZS51c2VySWQ9PT10aGlzLnVzZXJJZCYmcyYmXCJzZXJ2ZXJcIj09PWUuc2NvcGUmJihyLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodGhpcy5zZXJ2ZXIscyl8fHIuX2lzSWRQcm92aWRlcihzLHRoaXMuc2VydmVyKSkmJihEKHQsci5fbGVnYWN5RmVkKT8oZS50b2tlbj10aGlzLnRva2VuLGUuZXhwaXJlcz10aGlzLmV4cGlyZXMsZS5jcmVhdGlvblRpbWU9dGhpcy5jcmVhdGlvblRpbWUsZS52YWxpZGl0eT10aGlzLnZhbGlkaXR5LGUuZW1pdFRva2VuQ2hhbmdlKCkpOmUucmVmcmVzaFRva2VuKCkpfSkpfWVtaXRUb2tlbkNoYW5nZShlKXtjbGVhclRpbWVvdXQodGhpcy5fcmVmcmVzaFRpbWVyKTtjb25zdCB0PXRoaXMuc2VydmVyJiZyLmZpbmRTZXJ2ZXJJbmZvKHRoaXMuc2VydmVyKSxzPXQmJnQub3duaW5nU3lzdGVtVXJsLGk9cyYmci5maW5kU2VydmVySW5mbyhzKTshMT09PWV8fHMmJlwicG9ydGFsXCIhPT10aGlzLnNjb3BlJiYoIWl8fCFpLndlYlRpZXJBdXRofHxyLm5vcm1hbGl6ZVdlYlRpZXJBdXRoKXx8bnVsbD09dGhpcy5leHBpcmVzJiZudWxsPT10aGlzLnZhbGlkaXR5fHx0aGlzLl9zdGFydFJlZnJlc2hUaW1lcigpLHRoaXMuZW1pdChcInRva2VuLWNoYW5nZVwiKX1kZXN0cm95KCl7dGhpcy51c2VySWQ9dGhpcy5zZXJ2ZXI9dGhpcy50b2tlbj10aGlzLmV4cGlyZXM9dGhpcy52YWxpZGl0eT10aGlzLnJlc291cmNlcz10aGlzLmNyZWF0aW9uVGltZT1udWxsLHRoaXMuX29BdXRoQ3JlZCYmKHRoaXMuX29BdXRoQ3JlZC5kZXN0cm95KCksdGhpcy5fb0F1dGhDcmVkPW51bGwpO2NvbnN0IGU9ci5jcmVkZW50aWFscy5pbmRleE9mKHRoaXMpO2U+LTEmJnIuY3JlZGVudGlhbHMuc3BsaWNlKGUsMSksdGhpcy5lbWl0VG9rZW5DaGFuZ2UoKSx0aGlzLmVtaXQoXCJkZXN0cm95XCIpfXRvSlNPTigpe2NvbnN0IGU9YSh7dXNlcklkOnRoaXMudXNlcklkLHNlcnZlcjp0aGlzLnNlcnZlcix0b2tlbjp0aGlzLnRva2VuLGV4cGlyZXM6dGhpcy5leHBpcmVzLHZhbGlkaXR5OnRoaXMudmFsaWRpdHksc3NsOnRoaXMuc3NsLGlzQWRtaW46dGhpcy5pc0FkbWluLGNyZWF0aW9uVGltZTp0aGlzLmNyZWF0aW9uVGltZSxzY29wZTp0aGlzLnNjb3BlfSksdD10aGlzLnJlc291cmNlcztyZXR1cm4gdCYmdC5sZW5ndGg+MCYmKGUucmVzb3VyY2VzPXQuc2xpY2UoKSksZX1fc3RhcnRSZWZyZXNoVGltZXIoKXtjbGVhclRpbWVvdXQodGhpcy5fcmVmcmVzaFRpbWVyKTtjb25zdCBlPTZlNCp0aGlzLnRva2VuUmVmcmVzaEJ1ZmZlcix0PTIqKjMxLTE7bGV0IHI9KHRoaXMudmFsaWRpdHk/dGhpcy5jcmVhdGlvblRpbWUrNmU0KnRoaXMudmFsaWRpdHk6dGhpcy5leHBpcmVzKS1EYXRlLm5vdygpO3I8MD9yPTA6cj50JiYocj10KSx0aGlzLl9yZWZyZXNoVGltZXI9c2V0VGltZW91dCh0aGlzLnJlZnJlc2hUb2tlbi5iaW5kKHRoaXMpLHI+ZT9yLWU6cil9fTtlKFtrKCldLEwucHJvdG90eXBlLFwiY3JlYXRpb25UaW1lXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwiZXhwaXJlc1wiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcImlzQWRtaW5cIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJvQXV0aFN0YXRlXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwicmVzb3VyY2VzXCIsdm9pZCAwKSxlKFtrKCldLEwucHJvdG90eXBlLFwic2NvcGVcIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJzZXJ2ZXJcIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJzc2xcIix2b2lkIDApLGUoW2soKV0sTC5wcm90b3R5cGUsXCJ0b2tlblwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcInRva2VuUmVmcmVzaEJ1ZmZlclwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcInVzZXJJZFwiLHZvaWQgMCksZShbaygpXSxMLnByb3RvdHlwZSxcInZhbGlkaXR5XCIsdm9pZCAwKSxMPWUoW3koXCJlc3JpLmlkZW50aXR5LkNyZWRlbnRpYWxcIildLEwpO2V4cG9ydHtMIGFzIENyZWRlbnRpYWwsRSBhcyBJZGVudGl0eU1hbmFnZXJCYXNlfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyB0fWZyb21cIi4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnR7bWFrZUhhbmRsZSBhcyBlfWZyb21cIi4uL2NvcmUvaGFuZGxlVXRpbHMuanNcIjtpbXBvcnR7d2F0Y2ggYXMgb31mcm9tXCIuLi9jb3JlL3JlYWN0aXZlVXRpbHMuanNcIjtpbXBvcnR7cHJvcGVydHkgYXMgc31mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FycmF5VXRpbHMuanNcIjtpbXBvcnRcIi4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIGl9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2ltcG9ydCByIGZyb21cIi4uL3dpZGdldHMvV2lkZ2V0LmpzXCI7aW1wb3J0e2lzV2lkZ2V0IGFzIG59ZnJvbVwiLi4vd2lkZ2V0cy9zdXBwb3J0L3dpZGdldC5qc1wiO2ltcG9ydHtjcmVhdGVGb2N1c1RyYXAgYXMgYX1mcm9tXCJmb2N1cy10cmFwXCI7aW1wb3J0e3RzeCBhcyBjfWZyb21cIi4uL3dpZGdldHMvc3VwcG9ydC9qc3hGYWN0b3J5LmpzXCI7aW1wb3J0e21lc3NhZ2VCdW5kbGUgYXMgbH1mcm9tXCIuLi93aWRnZXRzL3N1cHBvcnQvZGVjb3JhdG9ycy9tZXNzYWdlQnVuZGxlLmpzXCI7Y29uc3QgZD1cImVzcmktaWRlbnRpdHktbW9kYWxcIixwPXtiYXNlOmQsb3BlbjpgJHtkfS0tb3BlbmAsY2xvc2VkOmAke2R9LS1jbG9zZWRgLHRpdGxlOmAke2R9X190aXRsZWAsZGlhbG9nOmAke2R9X19kaWFsb2dgLGNvbnRlbnQ6YCR7ZH1fX2NvbnRlbnRgLGNsb3NlQnV0dG9uOmAke2R9X19jbG9zZS1idXR0b25gLGljb25DbG9zZTpcImVzcmktaWNvbi1jbG9zZVwifTtsZXQgdT1jbGFzcyBleHRlbmRzIHJ7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5jb250ZW50PW51bGwsdGhpcy5vcGVuPSExLHRoaXMuX2ZvY3VzVHJhcD1udWxsLHRoaXMuX2Nsb3NlPSgpPT57dGhpcy5vcGVuPSExfSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKSx0aGlzLmFkZEhhbmRsZXMobygoKCk9PnRoaXMub3BlbiksKCgpPT50aGlzLl90b2dnbGVGb2N1c1RyYXAoKSkpKX1kZXN0cm95KCl7dGhpcy5fZGVzdHJveUZvY3VzVHJhcCgpfWdldCB0aXRsZSgpe3JldHVybiB0aGlzLm1lc3NhZ2VzPy5hdXRoLnNpZ25Jbn1yZW5kZXIoKXtjb25zdCB0PXRoaXMuaWQse29wZW46ZSxjb250ZW50Om8sdGl0bGU6cyxtZXNzYWdlczppfT10aGlzLHI9ZSYmISFvLG49e1twLm9wZW5dOnIsW3AuY2xvc2VkXTohcn0sYT1jKFwiYnV0dG9uXCIse2NsYXNzOnAuY2xvc2VCdXR0b24sXCJhcmlhLWxhYmVsXCI6aS5jbG9zZSx0aXRsZTppLmNsb3NlLGJpbmQ6dGhpcyxvbmNsaWNrOnRoaXMuX2Nsb3NlLHR5cGU6XCJidXR0b25cIn0sYyhcInNwYW5cIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLGNsYXNzOnAuaWNvbkNsb3NlfSkpLGw9YCR7dH1fdGl0bGVgLGQ9YCR7dH1fY29udGVudGAsdT1zP2MoXCJoMVwiLHtpZDpsLGNsYXNzOnAudGl0bGV9LHMpOm51bGwsaD1yP2MoXCJkaXZcIix7YmluZDp0aGlzLGNsYXNzOnAuZGlhbG9nLHJvbGU6XCJkaWFsb2dcIixcImFyaWEtbGFiZWxsZWRieVwiOmwsXCJhcmlhLWRlc2NyaWJlZGJ5XCI6ZCxhZnRlckNyZWF0ZTp0aGlzLl9jcmVhdGVGb2N1c1RyYXB9LGEsdSx0aGlzLl9yZW5kZXJDb250ZW50KGQpKTpudWxsO3JldHVybiBjKFwiZGl2XCIse3RhYkluZGV4Oi0xLGNsYXNzOnRoaXMuY2xhc3NlcyhwLmJhc2Usbil9LGgpfV9kZXN0cm95Rm9jdXNUcmFwKCl7dGhpcy5fZm9jdXNUcmFwPy5kZWFjdGl2YXRlKHtvbkRlYWN0aXZhdGU6KCk9Pnt9fSksdGhpcy5fZm9jdXNUcmFwPW51bGx9X3RvZ2dsZUZvY3VzVHJhcCgpe2NvbnN0e19mb2N1c1RyYXA6dCxvcGVuOmV9PXRoaXM7dCYmKGU/dC5hY3RpdmF0ZSgpOnQuZGVhY3RpdmF0ZSgpKX1fY3JlYXRlRm9jdXNUcmFwKHQpe3RoaXMuX2Rlc3Ryb3lGb2N1c1RyYXAoKTtjb25zdCBvPXJlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9Pnt0aGlzLl9mb2N1c1RyYXA9YSh0LHtpbml0aWFsRm9jdXM6XCJpbnB1dFwiLG9uRGVhY3RpdmF0ZTp0aGlzLl9jbG9zZX0pLHRoaXMuX3RvZ2dsZUZvY3VzVHJhcCgpfSkpO3RoaXMuYWRkSGFuZGxlcyhlKCgoKT0+Y2FuY2VsQW5pbWF0aW9uRnJhbWUobykpKSl9X3JlbmRlckNvbnRlbnQodCl7Y29uc3QgZT10aGlzLmNvbnRlbnQ7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/YyhcImRpdlwiLHtjbGFzczpwLmNvbnRlbnQsaWQ6dCxpbm5lckhUTUw6ZX0pOm4oZSk/YyhcImRpdlwiLHtjbGFzczpwLmNvbnRlbnQsaWQ6dH0sZS5yZW5kZXIoKSk6ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P2MoXCJkaXZcIix7Y2xhc3M6cC5jb250ZW50LGlkOnQsYmluZDplLGFmdGVyQ3JlYXRlOnRoaXMuX2F0dGFjaFRvTm9kZX0pOm51bGx9X2F0dGFjaFRvTm9kZSh0KXtjb25zdCBlPXRoaXM7dC5hcHBlbmRDaGlsZChlKX19O3QoW3Moe3JlYWRPbmx5OiEwfSldLHUucHJvdG90eXBlLFwiY29udGFpbmVyXCIsdm9pZCAwKSx0KFtzKCldLHUucHJvdG90eXBlLFwiY29udGVudFwiLHZvaWQgMCksdChbcygpXSx1LnByb3RvdHlwZSxcIm9wZW5cIix2b2lkIDApLHQoW3MoKSxsKFwiZXNyaS90OW4vY29tbW9uXCIpXSx1LnByb3RvdHlwZSxcIm1lc3NhZ2VzXCIsdm9pZCAwKSx0KFtzKCldLHUucHJvdG90eXBlLFwidGl0bGVcIixudWxsKSx1PXQoW2koXCJlc3JpLmlkZW50aXR5LklkZW50aXR5TW9kYWxcIildLHUpO2NvbnN0IGg9dTtleHBvcnR7aCBhcyBkZWZhdWx0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5jb25zdCB0PVwiZXNyaUpTQVBJT0F1dGhcIjtjbGFzcyBle2NvbnN0cnVjdG9yKHQsZSl7dGhpcy5vQXV0aEluZm89bnVsbCx0aGlzLnN0b3JhZ2U9bnVsbCx0aGlzLmFwcElkPW51bGwsdGhpcy5jb2RlVmVyaWZpZXI9bnVsbCx0aGlzLmV4cGlyZXM9bnVsbCx0aGlzLnJlZnJlc2hUb2tlbj1udWxsLHRoaXMuc3NsPW51bGwsdGhpcy5zdGF0ZVVJRD1udWxsLHRoaXMudG9rZW49bnVsbCx0aGlzLnVzZXJJZD1udWxsLHRoaXMub0F1dGhJbmZvPXQsdGhpcy5zdG9yYWdlPWUsdGhpcy5faW5pdCgpfWlzVmFsaWQoKXtsZXQgdD0hMTtpZih0aGlzLm9BdXRoSW5mbyYmdGhpcy51c2VySWQmJih0aGlzLnJlZnJlc2hUb2tlbnx8dGhpcy50b2tlbikpaWYobnVsbD09dGhpcy5leHBpcmVzJiZ0aGlzLnJlZnJlc2hUb2tlbil0PSEwO2Vsc2UgaWYodGhpcy5leHBpcmVzKXtjb25zdCBlPURhdGUubm93KCk7aWYodGhpcy5leHBpcmVzPmUpeyh0aGlzLmV4cGlyZXMtZSkvMWUzPjYwKnRoaXMub0F1dGhJbmZvLm1pblRpbWVVbnRpbEV4cGlyYXRpb24mJih0PSEwKX19cmV0dXJuIHR9c2F2ZSgpe2lmKCF0aGlzLnN0b3JhZ2UpcmV0dXJuITE7Y29uc3QgZT10aGlzLl9sb2FkKCkscz10aGlzLm9BdXRoSW5mbztpZihzJiZzLmF1dGhOYW1lc3BhY2UmJnMucG9ydGFsVXJsKXtsZXQgcj1lW3MuYXV0aE5hbWVzcGFjZV07cnx8KHI9ZVtzLmF1dGhOYW1lc3BhY2VdPXt9KSx0aGlzLmFwcElkfHwodGhpcy5hcHBJZD1zLmFwcElkKSxyW3MucG9ydGFsVXJsXT17YXBwSWQ6dGhpcy5hcHBJZCxjb2RlVmVyaWZpZXI6dGhpcy5jb2RlVmVyaWZpZXIsZXhwaXJlczp0aGlzLmV4cGlyZXMscmVmcmVzaFRva2VuOnRoaXMucmVmcmVzaFRva2VuLHNzbDp0aGlzLnNzbCxzdGF0ZVVJRDp0aGlzLnN0YXRlVUlELHRva2VuOnRoaXMudG9rZW4sdXNlcklkOnRoaXMudXNlcklkfTt0cnl7dGhpcy5zdG9yYWdlLnNldEl0ZW0odCxKU09OLnN0cmluZ2lmeShlKSl9Y2F0Y2goaSl7cmV0dXJuIGNvbnNvbGUud2FybihpKSwhMX1yZXR1cm4hMH1yZXR1cm4hMX1kZXN0cm95KCl7Y29uc3QgZT10aGlzLl9sb2FkKCkscz10aGlzLm9BdXRoSW5mbztpZihzJiZzLmFwcElkJiZzLnBvcnRhbFVybCYmKG51bGw9PXRoaXMuZXhwaXJlc3x8dGhpcy5leHBpcmVzPkRhdGUubm93KCkpJiYodGhpcy5yZWZyZXNoVG9rZW58fHRoaXMudG9rZW4pKXtjb25zdCB0PXMucG9ydGFsVXJsLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpK1wiL3NoYXJpbmcvcmVzdC9vYXV0aDIvcmV2b2tlVG9rZW5cIixlPW5ldyBGb3JtRGF0YTtpZihlLmFwcGVuZChcImZcIixcImpzb25cIiksZS5hcHBlbmQoXCJhdXRoX3Rva2VuXCIsdGhpcy5yZWZyZXNoVG9rZW58fHRoaXMudG9rZW4pLGUuYXBwZW5kKFwiY2xpZW50X2lkXCIscy5hcHBJZCksZS5hcHBlbmQoXCJ0b2tlbl90eXBlX2hpbnRcIix0aGlzLnJlZnJlc2hUb2tlbj9cInJlZnJlc2hfdG9rZW5cIjpcImFjY2Vzc190b2tlblwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbiluYXZpZ2F0b3Iuc2VuZEJlYWNvbih0LGUpO2Vsc2V7Y29uc3Qgcz1uZXcgWE1MSHR0cFJlcXVlc3Q7cy5vcGVuKFwiUE9TVFwiLHQpLHMuc2VuZChlKX19aWYocyYmcy5hdXRoTmFtZXNwYWNlJiZzLnBvcnRhbFVybCYmdGhpcy5zdG9yYWdlKXtjb25zdCByPWVbcy5hdXRoTmFtZXNwYWNlXTtpZihyKXtkZWxldGUgcltzLnBvcnRhbFVybF07dHJ5e3RoaXMuc3RvcmFnZS5zZXRJdGVtKHQsSlNPTi5zdHJpbmdpZnkoZSkpfWNhdGNoKGkpe2NvbnNvbGUubG9nKGkpfX19cyYmKHMuX29BdXRoQ3JlZD1udWxsLHRoaXMub0F1dGhJbmZvPW51bGwpfV9pbml0KCl7Y29uc3QgdD10aGlzLl9sb2FkKCksZT10aGlzLm9BdXRoSW5mbztpZihlJiZlLmF1dGhOYW1lc3BhY2UmJmUucG9ydGFsVXJsKXtsZXQgcz10W2UuYXV0aE5hbWVzcGFjZV07cyYmKHM9c1tlLnBvcnRhbFVybF0scyYmKHRoaXMuYXBwSWQ9cy5hcHBJZCx0aGlzLmNvZGVWZXJpZmllcj1zLmNvZGVWZXJpZmllcix0aGlzLmV4cGlyZXM9cy5leHBpcmVzLHRoaXMucmVmcmVzaFRva2VuPXMucmVmcmVzaFRva2VuLHRoaXMuc3NsPXMuc3NsLHRoaXMuc3RhdGVVSUQ9cy5zdGF0ZVVJRCx0aGlzLnRva2VuPXMudG9rZW4sdGhpcy51c2VySWQ9cy51c2VySWQpKX19X2xvYWQoKXtsZXQgZT17fTtpZih0aGlzLnN0b3JhZ2Upe2NvbnN0IGk9dGhpcy5zdG9yYWdlLmdldEl0ZW0odCk7aWYoaSl0cnl7ZT1KU09OLnBhcnNlKGkpfWNhdGNoKHMpe2NvbnNvbGUud2FybihzKX19cmV0dXJuIGV9fWUucHJvdG90eXBlLmRlY2xhcmVkQ2xhc3M9XCJlc3JpLmlkZW50aXR5Lk9BdXRoQ3JlZGVudGlhbFwiO2V4cG9ydHtlIGFzIGRlZmF1bHR9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIG99ZnJvbVwiLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydHtKU09OU3VwcG9ydCBhcyB0fWZyb21cIi4uL2NvcmUvSlNPTlN1cHBvcnQuanNcIjtpbXBvcnR7cHJvcGVydHkgYXMgcn1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FycmF5VXRpbHMuanNcIjtpbXBvcnRcIi4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIGV9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO3ZhciBwO2xldCBzPXA9Y2xhc3MgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKG8pe3N1cGVyKG8pLHRoaXMuX29BdXRoQ3JlZD1udWxsLHRoaXMuYXBwSWQ9bnVsbCx0aGlzLmF1dGhOYW1lc3BhY2U9XCIvXCIsdGhpcy5leHBpcmF0aW9uPTIwMTYwLHRoaXMuZmxvd1R5cGU9XCJhdXRvXCIsdGhpcy5mb3JjZUxvZ2luPSExLHRoaXMuZm9yY2VVc2VySWQ9ITEsdGhpcy5sb2NhbGU9bnVsbCx0aGlzLm1pblRpbWVVbnRpbEV4cGlyYXRpb249MzAsdGhpcy5wb3B1cD0hMSx0aGlzLnBvcHVwQ2FsbGJhY2tVcmw9XCJvYXV0aC1jYWxsYmFjay5odG1sXCIsdGhpcy5wb3B1cFdpbmRvd0ZlYXR1cmVzPVwiaGVpZ2h0PTQ5MCx3aWR0aD04MDAscmVzaXphYmxlLHNjcm9sbGJhcnMsc3RhdHVzXCIsdGhpcy5wb3J0YWxVcmw9XCJodHRwczovL3d3dy5hcmNnaXMuY29tXCIsdGhpcy5wcmVzZXJ2ZVVybEhhc2g9ITEsdGhpcy51c2VySWQ9bnVsbH1jbG9uZSgpe3JldHVybiBwLmZyb21KU09OKHRoaXMudG9KU09OKCkpfX07byhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiYXBwSWRcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImF1dGhOYW1lc3BhY2VcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImV4cGlyYXRpb25cIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImZsb3dUeXBlXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJmb3JjZUxvZ2luXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJmb3JjZVVzZXJJZFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwibG9jYWxlXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJtaW5UaW1lVW50aWxFeHBpcmF0aW9uXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJwb3B1cFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwicG9wdXBDYWxsYmFja1VybFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwicG9wdXBXaW5kb3dGZWF0dXJlc1wiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwicG9ydGFsVXJsXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJwcmVzZXJ2ZVVybEhhc2hcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInVzZXJJZFwiLHZvaWQgMCkscz1wPW8oW2UoXCJlc3JpLmlkZW50aXR5Lk9BdXRoSW5mb1wiKV0scyk7Y29uc3QgaT1zO2V4cG9ydHtpIGFzIGRlZmF1bHR9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIG99ZnJvbVwiLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydHtKU09OU3VwcG9ydCBhcyByfWZyb21cIi4uL2NvcmUvSlNPTlN1cHBvcnQuanNcIjtpbXBvcnR7cHJvcGVydHkgYXMgZX1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FycmF5VXRpbHMuanNcIjtpbXBvcnRcIi4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIHR9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2xldCBzPWNsYXNzIGV4dGVuZHMgcntjb25zdHJ1Y3RvcihvKXtzdXBlcihvKSx0aGlzLmFkbWluVG9rZW5TZXJ2aWNlVXJsPW51bGwsdGhpcy5jdXJyZW50VmVyc2lvbj1udWxsLHRoaXMuaGFzUG9ydGFsPW51bGwsdGhpcy5oYXNTZXJ2ZXI9bnVsbCx0aGlzLm93bmluZ1N5c3RlbVVybD1udWxsLHRoaXMub3duaW5nVGVuYW50PW51bGwsdGhpcy5zZXJ2ZXI9bnVsbCx0aGlzLnNob3J0TGl2ZWRUb2tlblZhbGlkaXR5PW51bGwsdGhpcy50b2tlblNlcnZpY2VVcmw9bnVsbCx0aGlzLndlYlRpZXJBdXRoPW51bGx9fTtvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJhZG1pblRva2VuU2VydmljZVVybFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiY3VycmVudFZlcnNpb25cIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImhhc1BvcnRhbFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiaGFzU2VydmVyXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJvd25pbmdTeXN0ZW1VcmxcIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcIm93bmluZ1RlbmFudFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwic2VydmVyXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJzaG9ydExpdmVkVG9rZW5WYWxpZGl0eVwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwidG9rZW5TZXJ2aWNlVXJsXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJ3ZWJUaWVyQXV0aFwiLHZvaWQgMCkscz1vKFt0KFwiZXNyaS5pZGVudGl0eS5TZXJ2ZXJJbmZvXCIpXSxzKTtjb25zdCBpPXM7ZXhwb3J0e2kgYXMgZGVmYXVsdH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuY29uc3QgdD1cImNhbGNpdGUtbW9kZS1cIjtmdW5jdGlvbiBlKCl7cmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tZXNyaS1jYWxjaXRlLW1vZGUtbmFtZVwiKS5yZXBsYWNlQWxsKC9cXHN8J3xcIi9nLFwiXCIpfWZ1bmN0aW9uIHIoKXtyZXR1cm4gZSgpLnN0YXJ0c1dpdGgoXCJkYXJrXCIpfWZ1bmN0aW9uIGMoKXtyZXR1cm5gJHt0fSR7cigpP1wiZGFya1wiOlwibGlnaHRcIn1gfWZ1bmN0aW9uIG4odCl7byh0KSx0LmNsYXNzTGlzdC5hZGQoYygpKX1mdW5jdGlvbiBvKGUpe0FycmF5LmZyb20oZS5jbGFzc0xpc3QpLmZvckVhY2goKHI9PntyLnN0YXJ0c1dpdGgodCkmJmUuY2xhc3NMaXN0LnJlbW92ZShyKX0pKX1leHBvcnR7YyBhcyBnZXRDYWxjaXRlVGhlbWVDbGFzcyxyIGFzIGlzRGFya1RoZW1lLG4gYXMgc2V0Q2FsY2l0ZVRoZW1lQ2xhc3N9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmZ1bmN0aW9uIGUoZSl7cmV0dXJuIGE9PnthLmhhc093blByb3BlcnR5KFwiX2RlbGVnYXRlZEV2ZW50TmFtZXNcIil8fChhLl9kZWxlZ2F0ZWRFdmVudE5hbWVzPWEuX2RlbGVnYXRlZEV2ZW50TmFtZXM/YS5fZGVsZWdhdGVkRXZlbnROYW1lcy5zbGljZSgpOltdKTtjb25zdCBuPWEuX2RlbGVnYXRlZEV2ZW50TmFtZXMscj1BcnJheS5pc0FycmF5KGUpP2U6dChlKTtuLnB1c2goLi4ucil9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIGUuc3BsaXQoXCIsXCIpLm1hcCgoZT0+ZS50cmltKCkpKX1leHBvcnR7ZSBhcyB2bUV2ZW50fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5leHBvcnR7YWNjZXNzaWJsZUhhbmRsZXJ9ZnJvbVwiLi9kZWNvcmF0b3JzL2FjY2Vzc2libGVIYW5kbGVyLmpzXCI7ZXhwb3J0e21lc3NhZ2VCdW5kbGV9ZnJvbVwiLi9kZWNvcmF0b3JzL21lc3NhZ2VCdW5kbGUuanNcIjtleHBvcnR7dm1FdmVudH1mcm9tXCIuL2RlY29yYXRvcnMvdm1FdmVudC5qc1wiO2V4cG9ydHt0c3gsdHN4RnJhZ21lbnR9ZnJvbVwiLi9qc3hGYWN0b3J5LmpzXCI7ZXhwb3J0e2FkZGl0aW9uYWxBbGxvd2VkVGFncyxjbGFzc2VzLGNzc1RyYW5zaXRpb24sZGlzY2FyZE5vZGUsZ2V0RGlyLGlzQWN0aXZhdGlvbktleSxpc1JUTCxrZWVwTWVudUl0ZW1XaXRoaW5WaWV3LG9uUmVzaXplLHJlbmRlcmluZ1Nhbml0aXplcixzYWZlQXR0cnMsc3RvcmVOb2RlfWZyb21cIi4vd2lkZ2V0VXRpbHMuanNcIjtleHBvcnR7Z2V0Q2FsY2l0ZVRoZW1lQ2xhc3MsaXNEYXJrVGhlbWUsc2V0Q2FsY2l0ZVRoZW1lQ2xhc3N9ZnJvbVwiLi4vLi4vc3VwcG9ydC90aGVtZVV0aWxzLmpzXCI7ZnVuY3Rpb24gZShlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZW5kZXJ9ZnVuY3Rpb24gdChlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wb3N0TWl4SW5Qcm9wZXJ0aWVzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmJ1aWxkUmVuZGVyaW5nJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnBvc3RDcmVhdGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuc3RhcnR1cH1leHBvcnR7dCBhcyBoYXNEb21Ob2RlLGUgYXMgaXNXaWRnZXR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9