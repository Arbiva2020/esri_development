"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_tooltip_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FloatingArrow)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


const CSS = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
};
const DEFAULTS = {
  width: 12,
  height: 6,
  strokeWidth: 1
};
/**
 * Renders a SVG element to be used as a floating-ui arrow.
 *
 * This functional component should be rendered inside a `FloatingUIComponent` when it needs an arrow element.
 *
 * @param floatingLayout.floatingLayout
 * @param floatingLayout – The effective floating layout to render the arrow vertically or horizontally. Possible values: `vertical` or `horizontal`.
 *
 * See [floating-ui](https://github.com/Esri/calcite-components/blob/master/src/utils/floating-ui.ts)
 * @param floatingLayout.key
 * @param floatingLayout.ref
 */
const FloatingArrow = ({ floatingLayout, key, ref }) => {
  const { width, height, strokeWidth } = DEFAULTS;
  const svgX = width / 2;
  const isVertical = floatingLayout === "vertical";
  const dValue = "M0,0" +
    ` H${width}` +
    ` L${width - svgX},${height}` +
    ` Q${svgX},${height} ${svgX},${height}` +
    " Z";
  return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: CSS.arrow, height: width, key: key, ref: ref, viewBox: `0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`, width: width + (isVertical ? strokeWidth : 0) },
    strokeWidth > 0 && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: CSS.arrowStroke, d: dValue, fill: "none", "stroke-width": strokeWidth + 1 })),
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: dValue, stroke: "none" })));
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/floating-ui.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FloatingCSS),
/* harmony export */   "a": () => (/* binding */ disconnectFloatingUI),
/* harmony export */   "b": () => (/* binding */ defaultOffsetDistance),
/* harmony export */   "c": () => (/* binding */ connectFloatingUI),
/* harmony export */   "d": () => (/* binding */ defaultMenuPlacement),
/* harmony export */   "f": () => (/* binding */ filterComputedPlacements),
/* harmony export */   "r": () => (/* binding */ reposition)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */




function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }
});

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = options;
      const {
        rects
      } = state;
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

async function convertValueToCoords(state, value) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(state) : value;

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: 'offset',
    options: value,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = {
  x: 0,
  y: 0
};
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    // ignores Window, checks for [object VisualViewport]
    const isVisualViewport = !isElement(ancestor) && ancestor.toString().includes('V');
    if (ancestorScroll && (animationFrame ? isVisualViewport : true)) {
      ancestor.addEventListener('scroll', update, {
        passive: true
      });
    }
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/**
 * This module helps users provide custom configuration for component internals.
 *
 * @internal
 */
const configOverrides = globalThis["calciteComponentsConfig"];
const config = {
  /**
   * We apply a custom fix to improve positioning for non-Chromium browsers.
   * The fix comes at a performance cost, so provides users a way to opt-out if necessary.
   *
   * @internal
   */
  floatingUINonChromiumPositioningFix: true,
  ...configOverrides
};

const floatingUIBrowserCheck = patchFloatingUiForNonChromiumBrowsers();
async function patchFloatingUiForNonChromiumBrowsers() {
  function getUAData() {
    return navigator.userAgentData;
  }
  function getUAString() {
    const uaData = getUAData();
    return uaData?.brands
      ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
      : navigator.userAgent;
  }
  function isChrome109OrAbove() {
    const uaData = getUAData();
    if (uaData?.brands) {
      return !!uaData.brands.find(({ brand, version }) => (brand === "Google Chrome" || brand === "Chromium") && Number(version) >= 109);
    }
    return !!navigator.userAgent.split(" ").find((ua) => {
      const [browser, version] = ua.split("/");
      return browser === "Chrome" && parseInt(version) >= 109;
    });
  }
  if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser &&
    config.floatingUINonChromiumPositioningFix &&
    // ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
    (/firefox|safari/i.test(getUAString()) || isChrome109OrAbove())) {
    const { offsetParent } = await __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_composed-offset-position_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! ./composed-offset-position.esm.js */ "./node_modules/@esri/calcite-components/dist/components/composed-offset-position.esm.js"));
    const originalGetOffsetParent = platform.getOffsetParent;
    platform.getOffsetParent = (element) => originalGetOffsetParent(element, offsetParent);
  }
}
/**
 * Exported for testing purposes only
 */
const placementDataAttribute = "data-placement";
/**
 * Exported for testing purposes only
 */
const repositionDebounceTimeout = 100;
const effectivePlacements = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
];
const defaultMenuPlacement = "bottom-start";
const FloatingCSS = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active"
};
function getMiddleware({ placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type }) {
  const defaultMiddleware = [shift(), hide()];
  if (type === "menu") {
    return [
      ...defaultMiddleware,
      flip({
        fallbackPlacements: flipPlacements || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
      })
    ];
  }
  if (type === "popover" || type === "tooltip") {
    const middleware = [
      ...defaultMiddleware,
      offset({
        mainAxis: typeof offsetDistance === "number" ? offsetDistance : 0,
        crossAxis: typeof offsetSkidding === "number" ? offsetSkidding : 0
      })
    ];
    if (placement === "auto" || placement === "auto-start" || placement === "auto-end") {
      middleware.push(autoPlacement({ alignment: placement === "auto-start" ? "start" : placement === "auto-end" ? "end" : null }));
    }
    else if (!flipDisabled) {
      middleware.push(flip(flipPlacements ? { fallbackPlacements: flipPlacements } : {}));
    }
    if (arrowEl) {
      middleware.push(arrow({
        element: arrowEl
      }));
    }
    return middleware;
  }
  return [];
}
function filterComputedPlacements(placements, el) {
  const filteredPlacements = placements.filter((placement) => effectivePlacements.includes(placement));
  if (filteredPlacements.length !== placements.length) {
    console.warn(`${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${effectivePlacements
      .map((placement) => `"${placement}"`)
      .join(", ")
      .trim()}`, { el });
  }
  return filteredPlacements;
}
function getEffectivePlacement(floatingEl, placement) {
  const placements = ["left", "right"];
  if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(floatingEl) === "rtl") {
    placements.reverse();
  }
  return placement.replace(/leading/gi, placements[0]).replace(/trailing/gi, placements[1]);
}
/**
 * Convenience function to manage `reposition` calls for FloatingUIComponents that use `positionFloatingUI.
 *
 * Note: this is not needed for components that use `calcite-popover`.
 *
 * @param component
 * @param options
 * @param options.referenceEl
 * @param options.floatingEl
 * @param options.overlayPositioning
 * @param options.placement
 * @param options.flipDisabled
 * @param options.flipPlacements
 * @param options.offsetDistance
 * @param options.offsetSkidding
 * @param options.arrowEl
 * @param options.type
 * @param delayed
 */
async function reposition(component, options, delayed = false) {
  if (!component.open) {
    return;
  }
  return delayed ? debouncedReposition(component, options) : positionFloatingUI(component, options);
}
const debouncedReposition = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__.d)(positionFloatingUI, repositionDebounceTimeout, {
  leading: true,
  maxWait: repositionDebounceTimeout
});
const ARROW_CSS_TRANSFORM = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)"
};
/**
 * Positions the floating element relative to the reference element.
 *
 * **Note:** exported for testing purposes only
 *
 * @param root0
 * @param root0.referenceEl
 * @param root0.floatingEl
 * @param root0.overlayPositioning
 * @param root0.placement
 * @param root0.flipDisabled
 * @param root0.flipPlacements
 * @param root0.offsetDistance
 * @param root0.offsetSkidding
 * @param root0.arrowEl
 * @param root0.type
 * @param component
 * @param root0.referenceEl.referenceEl
 * @param root0.referenceEl.floatingEl
 * @param root0.referenceEl.overlayPositioning
 * @param root0.referenceEl.placement
 * @param root0.referenceEl.flipDisabled
 * @param root0.referenceEl.flipPlacements
 * @param root0.referenceEl.offsetDistance
 * @param root0.referenceEl.offsetSkidding
 * @param root0.referenceEl.arrowEl
 * @param root0.referenceEl.type
 * @param component.referenceEl
 * @param component.floatingEl
 * @param component.overlayPositioning
 * @param component.placement
 * @param component.flipDisabled
 * @param component.flipPlacements
 * @param component.offsetDistance
 * @param component.offsetSkidding
 * @param component.arrowEl
 * @param component.type
 */
async function positionFloatingUI(component, { referenceEl, floatingEl, overlayPositioning = "absolute", placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type }) {
  if (!referenceEl || !floatingEl) {
    return null;
  }
  await floatingUIBrowserCheck;
  const { x, y, placement: effectivePlacement, strategy: position, middlewareData } = await computePosition(referenceEl, floatingEl, {
    strategy: overlayPositioning,
    placement: placement === "auto" || placement === "auto-start" || placement === "auto-end"
      ? undefined
      : getEffectivePlacement(floatingEl, placement),
    middleware: getMiddleware({
      placement,
      flipDisabled,
      flipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type
    })
  });
  if (arrowEl && middlewareData.arrow) {
    const { x, y } = middlewareData.arrow;
    const side = effectivePlacement.split("-")[0];
    const alignment = x != null ? "left" : "top";
    const transform = ARROW_CSS_TRANSFORM[side];
    const reset = { left: "", top: "", bottom: "", right: "" };
    if ("floatingLayout" in component) {
      component.floatingLayout = side === "left" || side === "right" ? "horizontal" : "vertical";
    }
    Object.assign(arrowEl.style, {
      ...reset,
      [alignment]: `${alignment == "left" ? x : y}px`,
      [side]: "100%",
      transform
    });
  }
  const referenceHidden = middlewareData.hide?.referenceHidden;
  const visibility = referenceHidden ? "hidden" : null;
  const pointerEvents = visibility ? "none" : null;
  floatingEl.setAttribute(placementDataAttribute, effectivePlacement);
  const transform = `translate(${Math.round(x)}px,${Math.round(y)}px)`;
  Object.assign(floatingEl.style, {
    visibility,
    pointerEvents,
    position,
    top: "0",
    left: "0",
    transform
  });
}
/**
 * Exported for testing purposes only
 *
 * @internal
 */
const cleanupMap = new WeakMap();
/**
 * Helper to set up floating element interactions on connectedCallback.
 *
 * @param component
 * @param referenceEl
 * @param floatingEl
 */
function connectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  disconnectFloatingUI(component, referenceEl, floatingEl);
  Object.assign(floatingEl.style, {
    visibility: "hidden",
    pointerEvents: "none",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: component.overlayPositioning,
    top: "0",
    left: "0"
  });
  const runAutoUpdate = _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser
    ? autoUpdate
    : (_refEl, _floatingEl, updateCallback) => {
      updateCallback();
      return () => {
        /* noop */
      };
    };
  cleanupMap.set(component, runAutoUpdate(referenceEl, floatingEl, () => component.reposition()));
}
/**
 * Helper to tear down floating element interactions on disconnectedCallback.
 *
 * @param component
 * @param referenceEl
 * @param floatingEl
 */
function disconnectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  const cleanup = cleanupMap.get(component);
  if (cleanup) {
    cleanup();
  }
  cleanupMap.delete(component);
}
const visiblePointerSize = 4;
/**
 * Default offset the position of the floating element away from the reference element.
 *
 * @default 6
 */
const defaultOffsetDistance = Math.ceil(Math.hypot(visiblePointerSize, visiblePointerSize));




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectOpenCloseComponent),
/* harmony export */   "d": () => (/* binding */ disconnectOpenCloseComponent),
/* harmony export */   "o": () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


const componentToTransitionListeners = new WeakMap();
function transitionStart(event) {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onBeforeOpen() : this.onBeforeClose();
  }
}
function transitionEnd(event) {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onOpen() : this.onClose();
  }
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @param component
 * @param nonOpenCloseComponent
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.readTask)(() => {
    if (component.transitionEl) {
      const allTransitionPropsArray = getComputedStyle(component.transitionEl).transition.split(" ");
      const openTransitionPropIndex = allTransitionPropsArray.findIndex((item) => item === component.openTransitionProp);
      const transitionDuration = allTransitionPropsArray[openTransitionPropIndex + 1];
      if (transitionDuration === "0s") {
        (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
          ? component.onBeforeOpen()
          : component.onBeforeClose();
        (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
          ? component.onOpen()
          : component.onClose();
      }
      else {
        component.transitionEl.addEventListener("transitionstart", () => {
          (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
            ? component.onBeforeOpen()
            : component.onBeforeClose();
        }, { once: true });
        component.transitionEl.addEventListener("transitionend", () => {
          (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
            ? component.onOpen()
            : component.onClose();
        }, { once: true });
      }
    }
  });
}
/**
 * Helper to keep track of transition listeners on setTransitionEl and connectedCallback on OpenCloseComponent components.
 *
 * For component which do not have open prop, use `onToggleOpenCloseComponent` implementation.
 *
 * @param component
 */
function connectOpenCloseComponent(component) {
  disconnectOpenCloseComponent(component);
  if (component.transitionEl) {
    const boundOnTransitionStart = transitionStart.bind(component);
    const boundOnTransitionEnd = transitionEnd.bind(component);
    componentToTransitionListeners.set(component, [
      component.transitionEl,
      boundOnTransitionStart,
      boundOnTransitionEnd
    ]);
    component.transitionEl.addEventListener("transitionstart", boundOnTransitionStart);
    component.transitionEl.addEventListener("transitionend", boundOnTransitionEnd);
  }
}
/**
 * Helper to tear down transition listeners on disconnectedCallback on OpenCloseComponent components.
 *
 * @param component
 */
function disconnectOpenCloseComponent(component) {
  if (!componentToTransitionListeners.has(component)) {
    return;
  }
  const [transitionEl, start, end] = componentToTransitionListeners.get(component);
  transitionEl.removeEventListener("transitionstart", start);
  transitionEl.removeEventListener("transitionend", end);
  componentToTransitionListeners.delete(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/tooltip.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tooltip.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Tooltip),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _FloatingArrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatingArrow.js */ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */







const CSS = {
  container: "container"
};
const TOOLTIP_DELAY_MS = 500;
const ARIA_DESCRIBED_BY = "aria-describedby";

function getEffectiveReferenceElement(tooltip) {
  const { referenceElement } = tooltip;
  return ((typeof referenceElement === "string" ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.u)(tooltip, { id: referenceElement }) : referenceElement) ||
    null);
}

class TooltipManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new WeakMap();
    this.registeredShadowRootCounts = new WeakMap();
    this.hoverTimeout = null;
    this.hoveredTooltip = null;
    this.clickedTooltip = null;
    this.activeTooltip = null;
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        const { activeTooltip } = this;
        if (activeTooltip?.open) {
          this.clearHoverTimeout();
          this.closeExistingTooltip();
          const referenceElement = getEffectiveReferenceElement(activeTooltip);
          if (referenceElement instanceof Element && referenceElement.contains(event.target)) {
            event.preventDefault();
          }
        }
      }
    };
    this.pointerMoveHandler = (event) => {
      const composedPath = event.composedPath();
      const { activeTooltip } = this;
      const hoveringActiveTooltip = activeTooltip?.open && composedPath.includes(activeTooltip);
      if (hoveringActiveTooltip) {
        this.clearHoverTimeout();
        return;
      }
      const tooltip = this.queryTooltip(composedPath);
      this.hoveredTooltip = tooltip;
      if (this.isClosableClickedTooltip(tooltip)) {
        return;
      }
      this.clickedTooltip = null;
      if (tooltip) {
        this.toggleHoveredTooltip(tooltip, true);
      }
      else if (activeTooltip) {
        this.toggleHoveredTooltip(activeTooltip, false);
      }
    };
    this.pointerDownHandler = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(event)) {
        return;
      }
      const clickedTooltip = this.queryTooltip(event.composedPath());
      this.clickedTooltip = clickedTooltip;
      if (clickedTooltip?.closeOnClick) {
        this.toggleTooltip(clickedTooltip, false);
        this.clearHoverTimeout();
      }
    };
    this.focusInHandler = (event) => {
      this.queryFocusedTooltip(event, true);
    };
    this.focusOutHandler = (event) => {
      this.queryFocusedTooltip(event, false);
    };
    this.toggleHoveredTooltip = (tooltip, value) => {
      this.hoverTimeout = window.setTimeout(() => {
        if (this.hoverTimeout === null) {
          return;
        }
        this.closeExistingTooltip();
        if (tooltip !== this.hoveredTooltip) {
          return;
        }
        this.toggleTooltip(tooltip, value);
      }, TOOLTIP_DELAY_MS);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, tooltip) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, tooltip);
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.registerShadowRoot(shadowRoot);
    }
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.unregisterShadowRoot(shadowRoot);
    }
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  addShadowListeners(shadowRoot) {
    shadowRoot.addEventListener("focusin", this.focusInHandler, { capture: true });
    shadowRoot.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeShadowListeners(shadowRoot) {
    shadowRoot.removeEventListener("focusin", this.focusInHandler, { capture: true });
    shadowRoot.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler, { capture: true });
    document.addEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.addEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.addEventListener("focusin", this.focusInHandler, { capture: true });
    document.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("keydown", this.keyDownHandler, { capture: true });
    document.removeEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.removeEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.removeEventListener("focusin", this.focusInHandler, { capture: true });
    document.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  clearHoverTimeout() {
    window.clearTimeout(this.hoverTimeout);
    this.hoverTimeout = null;
  }
  closeExistingTooltip() {
    const { activeTooltip } = this;
    if (activeTooltip?.open) {
      this.toggleTooltip(activeTooltip, false);
    }
  }
  toggleFocusedTooltip(tooltip, value) {
    this.closeExistingTooltip();
    if (value) {
      this.clearHoverTimeout();
    }
    this.toggleTooltip(tooltip, value);
  }
  toggleTooltip(tooltip, value) {
    tooltip.open = value;
    if (value) {
      this.activeTooltip = tooltip;
    }
  }
  queryFocusedTooltip(event, value) {
    const tooltip = this.queryTooltip(event.composedPath());
    if (!tooltip || this.isClosableClickedTooltip(tooltip)) {
      return;
    }
    this.toggleFocusedTooltip(tooltip, value);
  }
  isClosableClickedTooltip(tooltip) {
    return tooltip?.closeOnClick && tooltip === this.clickedTooltip;
  }
  registerShadowRoot(shadowRoot) {
    const { registeredShadowRootCounts } = this;
    const newCount = (registeredShadowRootCounts.get(shadowRoot) ?? 0) + 1;
    if (newCount === 1) {
      this.addShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  unregisterShadowRoot(shadowRoot) {
    const { registeredShadowRootCounts } = this;
    const newCount = registeredShadowRootCounts.get(shadowRoot) - 1;
    if (newCount === 0) {
      this.removeShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  getReferenceElShadowRootNode(referenceEl) {
    return referenceEl instanceof Element ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.v)(referenceEl) : null;
  }
}

const tooltipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}";

const manager = new TooltipManager();
const Tooltip = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTooltipBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipBeforeClose", 6);
    this.calciteTooltipClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipClose", 6);
    this.calciteTooltipBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipBeforeOpen", 6);
    this.calciteTooltipOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipOpen", 6);
    this.guid = `calcite-tooltip-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.hasLoaded = false;
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, this.effectiveReferenceElement, this.el);
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
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.closeOnClick = false;
    this.label = undefined;
    this.offsetDistance = _floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.b;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.referenceElement = undefined;
    this.effectiveReferenceElement = undefined;
    this.floatingLayout = "vertical";
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
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.setUpReferenceElement(this.hasLoaded);
  }
  componentDidLoad() {
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition(true);
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
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
    const { el, effectiveReferenceElement, placement, overlayPositioning, offsetDistance, offsetSkidding, arrowEl } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "tooltip"
    }, delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteTooltipBeforeOpen.emit();
  }
  onOpen() {
    this.calciteTooltipOpen.emit();
  }
  onBeforeClose() {
    this.calciteTooltipBeforeClose.emit();
  }
  onClose() {
    this.calciteTooltipClose.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { effectiveReferenceElement, label, open, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "tooltip" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: {
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.F.animation]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.F.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_FloatingArrow_js__WEBPACK_IMPORTED_MODULE_4__.F, { floatingLayout: floatingLayout,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (arrowEl) => (this.arrowEl = arrowEl) }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", null)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"]
  }; }
  static get style() { return tooltipCss; }
}, [1, "calcite-tooltip", {
    "closeOnClick": [516, "close-on-click"],
    "label": [1],
    "offsetDistance": [514, "offset-distance"],
    "offsetSkidding": [514, "offset-skidding"],
    "open": [516],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "referenceElement": [1, "reference-element"],
    "effectiveReferenceElement": [32],
    "floatingLayout": [32],
    "reposition": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tooltip);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzVhYjYwZDZjYjZlNzA4OTQyMmYzYjQyYzgwM2IzYjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25ELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSx5RUFBQyxVQUFVLDRGQUE0RixPQUFPLEVBQUUsd0NBQXdDLGtEQUFrRDtBQUNwTix3QkFBd0IseUVBQUMsV0FBVyxrRkFBa0Y7QUFDdEgsSUFBSSx5RUFBQyxXQUFXLDJCQUEyQjtBQUMzQzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNqQjtBQUNBOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQkFBZ0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxNQUFNLG1GQUFlO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZSxRQUFRLHFUQUEyQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3RkFBd0Y7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNDQUFzQywyRkFBMkY7QUFDakk7QUFDQTtBQUNBLDhDQUE4QyxxQ0FBcUMsSUFBSTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVcsOERBQThEO0FBQzdGLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0EsY0FBYyxLQUFLLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQ0FBUTtBQUNwQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0pBQWtKO0FBQ2pNO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwRUFBMEU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWMsS0FBSyxjQUFjO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0JBQXdCLG1GQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzV3RHRMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRkFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNZO0FBQ3lCO0FBQzlHO0FBQ3NFO0FBQ3BEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0Isa0RBQWtELDBDQUFpQixZQUFZLHNCQUFzQjtBQUNyRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGVBQWU7QUFDakYsb0VBQW9FLGVBQWU7QUFDbkY7QUFDQTtBQUNBLHFFQUFxRSxlQUFlO0FBQ3BGLHVFQUF1RSxlQUFlO0FBQ3RGO0FBQ0E7QUFDQSxnRUFBZ0UsZUFBZTtBQUMvRSx3RUFBd0UsZUFBZTtBQUN2Rix3RUFBd0UsZUFBZTtBQUN2RixnRUFBZ0UsZUFBZTtBQUMvRSxrRUFBa0UsZUFBZTtBQUNqRjtBQUNBO0FBQ0EsbUVBQW1FLGVBQWU7QUFDbEYsMkVBQTJFLGVBQWU7QUFDMUYsMkVBQTJFLGVBQWU7QUFDMUYsbUVBQW1FLGVBQWU7QUFDbEYscUVBQXFFLGVBQWU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZCQUE2QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDBDQUFpQjtBQUM3RDtBQUNBOztBQUVBLGtDQUFrQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0sa0VBQWtFLGNBQWMsa0JBQWtCLDJDQUEyQywwQkFBMEIsa0JBQWtCLGlEQUFpRCxtREFBbUQsVUFBVSwwQ0FBMEMsbUNBQW1DLHNCQUFzQiwwREFBMEQsMkJBQTJCLHVEQUF1RCwwQkFBMEIsd0RBQXdELDBCQUEwQix5REFBeUQsMkJBQTJCLDBEQUEwRCxVQUFVLHVCQUF1QixpQ0FBaUMsNkJBQTZCLG9CQUFvQiwyQkFBMkIsb0JBQW9CLGtCQUFrQiw4Q0FBOEMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsV0FBVyxrQkFBa0IsZ0JBQWdCLHNCQUFzQixzQkFBc0Isb0JBQW9CLHNDQUFzQyxrQkFBa0IsOENBQThDLCtCQUErQixzQkFBc0IscUJBQXFCLGlCQUFpQiwwQkFBMEIsc0JBQXNCLGlCQUFpQixtQkFBbUIsd0NBQXdDLGdEQUFnRCxlQUFlLDZDQUE2Qzs7QUFFL3hHO0FBQ0EsOEJBQThCLDBGQUFrQixlQUFlLCtFQUFXO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1GQUFXO0FBQ2hELCtCQUErQixtRkFBVztBQUMxQyxvQ0FBb0MsbUZBQVc7QUFDL0MsOEJBQThCLG1GQUFXO0FBQ3pDLG1DQUFtQywyQ0FBSSxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFpQjtBQUN2QixjQUFjLGtEQUFrRDtBQUNoRTtBQUNBLHdCQUF3QixXQUFXLDBCQUEwQixpQkFBaUI7QUFDOUU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFvQjtBQUN4QixJQUFJLHlEQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdHQUF3RztBQUNwSCxXQUFXLGtEQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBeUQ7QUFDckU7QUFDQTtBQUNBLFlBQVkseUVBQUMsQ0FBQyx3RUFBSSxJQUFJLGVBQWUsMENBQWEsNEhBQTRILEVBQUUseUVBQUMsVUFBVTtBQUMzTCxTQUFTLHdEQUFxQjtBQUM5QixTQUFTLDhEQUEyQjtBQUNwQyxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsRUFBRSx5RUFBQyxDQUFDLGdEQUFhLElBQUk7QUFDdEQ7QUFDQSxrREFBa0QsR0FBRyx5RUFBQyxVQUFVLHNCQUFzQixFQUFFLHlFQUFDO0FBQ3pGO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvRmxvYXRpbmdBcnJvdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZmxvYXRpbmctdWkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29wZW5DbG9zZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdG9vbHRpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhcnJvdzogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93XCIsXG4gIGFycm93U3Ryb2tlOiBcImNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dfX3N0cm9rZVwiXG59O1xuY29uc3QgREVGQVVMVFMgPSB7XG4gIHdpZHRoOiAxMixcbiAgaGVpZ2h0OiA2LFxuICBzdHJva2VXaWR0aDogMVxufTtcbi8qKlxuICogUmVuZGVycyBhIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYSBmbG9hdGluZy11aSBhcnJvdy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBpbnNpZGUgYSBgRmxvYXRpbmdVSUNvbXBvbmVudGAgd2hlbiBpdCBuZWVkcyBhbiBhcnJvdyBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5mbG9hdGluZ0xheW91dFxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0IOKAkyBUaGUgZWZmZWN0aXZlIGZsb2F0aW5nIGxheW91dCB0byByZW5kZXIgdGhlIGFycm93IHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LiBQb3NzaWJsZSB2YWx1ZXM6IGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgLlxuICpcbiAqIFNlZSBbZmxvYXRpbmctdWldKGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvdXRpbHMvZmxvYXRpbmctdWkudHMpXG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQua2V5XG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQucmVmXG4gKi9cbmNvbnN0IEZsb2F0aW5nQXJyb3cgPSAoeyBmbG9hdGluZ0xheW91dCwga2V5LCByZWYgfSkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHN0cm9rZVdpZHRoIH0gPSBERUZBVUxUUztcbiAgY29uc3Qgc3ZnWCA9IHdpZHRoIC8gMjtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGZsb2F0aW5nTGF5b3V0ID09PSBcInZlcnRpY2FsXCI7XG4gIGNvbnN0IGRWYWx1ZSA9IFwiTTAsMFwiICtcbiAgICBgIEgke3dpZHRofWAgK1xuICAgIGAgTCR7d2lkdGggLSBzdmdYfSwke2hlaWdodH1gICtcbiAgICBgIFEke3N2Z1h9LCR7aGVpZ2h0fSAke3N2Z1h9LCR7aGVpZ2h0fWAgK1xuICAgIFwiIFpcIjtcbiAgcmV0dXJuIChoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IENTUy5hcnJvdywgaGVpZ2h0OiB3aWR0aCwga2V5OiBrZXksIHJlZjogcmVmLCB2aWV3Qm94OiBgMCAwICR7d2lkdGh9ICR7d2lkdGggKyAoIWlzVmVydGljYWwgPyBzdHJva2VXaWR0aCA6IDApfWAsIHdpZHRoOiB3aWR0aCArIChpc1ZlcnRpY2FsID8gc3Ryb2tlV2lkdGggOiAwKSB9LFxuICAgIHN0cm9rZVdpZHRoID4gMCAmJiAoaChcInBhdGhcIiwgeyBjbGFzczogQ1NTLmFycm93U3Ryb2tlLCBkOiBkVmFsdWUsIGZpbGw6IFwibm9uZVwiLCBcInN0cm9rZS13aWR0aFwiOiBzdHJva2VXaWR0aCArIDEgfSkpLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogZFZhbHVlLCBzdHJva2U6IFwibm9uZVwiIH0pKSk7XG59O1xuXG5leHBvcnQgeyBGbG9hdGluZ0Fycm93IGFzIEYgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5cbmZ1bmN0aW9uIGdldExlbmd0aEZyb21BeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbn1cblxuZnVuY3Rpb24gZ2V0U2lkZShwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmNsdWRlcyhnZXRTaWRlKHBsYWNlbWVudCkpID8gJ3gnIDogJ3knO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChfcmVmLCBwbGFjZW1lbnQsIHJ0bCkge1xuICBsZXQge1xuICAgIHJlZmVyZW5jZSxcbiAgICBmbG9hdGluZ1xuICB9ID0gX3JlZjtcbiAgY29uc3QgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGZsb2F0aW5nLndpZHRoIC8gMjtcbiAgY29uc3QgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBmbG9hdGluZy5oZWlnaHQgLyAyO1xuICBjb25zdCBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGhGcm9tQXhpcyhtYWluQXhpcyk7XG4gIGNvbnN0IGNvbW1vbkFsaWduID0gcmVmZXJlbmNlW2xlbmd0aF0gLyAyIC0gZmxvYXRpbmdbbGVuZ3RoXSAvIDI7XG4gIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBtYWluQXhpcyA9PT0gJ3gnO1xuICBsZXQgY29vcmRzO1xuICBzd2l0Y2ggKHNpZGUpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGZsb2F0aW5nLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBmbG9hdGluZy53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuICBzd2l0Y2ggKGdldEFsaWdubWVudChwbGFjZW1lbnQpKSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgY29vcmRzW21haW5BeGlzXSAtPSBjb21tb25BbGlnbiAqIChydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlbmQnOlxuICAgICAgY29vcmRzW21haW5BeGlzXSArPSBjb21tb25BbGlnbiAqIChydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyB0aGF0IHdpbGwgcGxhY2UgdGhlIGZsb2F0aW5nIGVsZW1lbnRcbiAqIG5leHQgdG8gYSByZWZlcmVuY2UgZWxlbWVudCB3aGVuIGl0IGlzIGdpdmVuIGEgY2VydGFpbiBwb3NpdGlvbmluZyBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGV4cG9ydCBkb2VzIG5vdCBoYXZlIGFueSBgcGxhdGZvcm1gIGludGVyZmFjZSBsb2dpYy4gWW91IHdpbGwgbmVlZCB0b1xuICogd3JpdGUgb25lIGZvciB0aGUgcGxhdGZvcm0geW91IGFyZSB1c2luZyBGbG9hdGluZyBVSSB3aXRoLlxuICovXG5jb25zdCBjb21wdXRlUG9zaXRpb24kMSA9IGFzeW5jIChyZWZlcmVuY2UsIGZsb2F0aW5nLCBjb25maWcpID0+IHtcbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCA9ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5ID0gJ2Fic29sdXRlJyxcbiAgICBtaWRkbGV3YXJlID0gW10sXG4gICAgcGxhdGZvcm1cbiAgfSA9IGNvbmZpZztcbiAgY29uc3QgdmFsaWRNaWRkbGV3YXJlID0gbWlkZGxld2FyZS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybS5pc1JUTCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNSVEwoZmxvYXRpbmcpKTtcbiAgbGV0IHJlY3RzID0gYXdhaXQgcGxhdGZvcm0uZ2V0RWxlbWVudFJlY3RzKHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmcsXG4gICAgc3RyYXRlZ3lcbiAgfSk7XG4gIGxldCB7XG4gICAgeCxcbiAgICB5XG4gIH0gPSBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChyZWN0cywgcGxhY2VtZW50LCBydGwpO1xuICBsZXQgc3RhdGVmdWxQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIGxldCBtaWRkbGV3YXJlRGF0YSA9IHt9O1xuICBsZXQgcmVzZXRDb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRNaWRkbGV3YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGZuXG4gICAgfSA9IHZhbGlkTWlkZGxld2FyZVtpXTtcbiAgICBjb25zdCB7XG4gICAgICB4OiBuZXh0WCxcbiAgICAgIHk6IG5leHRZLFxuICAgICAgZGF0YSxcbiAgICAgIHJlc2V0XG4gICAgfSA9IGF3YWl0IGZuKHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgaW5pdGlhbFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50OiBzdGF0ZWZ1bFBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbWlkZGxld2FyZURhdGEsXG4gICAgICByZWN0cyxcbiAgICAgIHBsYXRmb3JtLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICBmbG9hdGluZ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHggPSBuZXh0WCAhPSBudWxsID8gbmV4dFggOiB4O1xuICAgIHkgPSBuZXh0WSAhPSBudWxsID8gbmV4dFkgOiB5O1xuICAgIG1pZGRsZXdhcmVEYXRhID0ge1xuICAgICAgLi4ubWlkZGxld2FyZURhdGEsXG4gICAgICBbbmFtZV06IHtcbiAgICAgICAgLi4ubWlkZGxld2FyZURhdGFbbmFtZV0sXG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChyZXNldCAmJiByZXNldENvdW50IDw9IDUwKSB7XG4gICAgICByZXNldENvdW50Kys7XG4gICAgICBpZiAodHlwZW9mIHJlc2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVzZXQucGxhY2VtZW50KSB7XG4gICAgICAgICAgc3RhdGVmdWxQbGFjZW1lbnQgPSByZXNldC5wbGFjZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2V0LnJlY3RzKSB7XG4gICAgICAgICAgcmVjdHMgPSByZXNldC5yZWN0cyA9PT0gdHJ1ZSA/IGF3YWl0IHBsYXRmb3JtLmdldEVsZW1lbnRSZWN0cyh7XG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBmbG9hdGluZyxcbiAgICAgICAgICAgIHN0cmF0ZWd5XG4gICAgICAgICAgfSkgOiByZXNldC5yZWN0cztcbiAgICAgICAgfVxuICAgICAgICAoe1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeVxuICAgICAgICB9ID0gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQocmVjdHMsIHN0YXRlZnVsUGxhY2VtZW50LCBydGwpKTtcbiAgICAgIH1cbiAgICAgIGkgPSAtMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHgsXG4gICAgeSxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlZnVsUGxhY2VtZW50LFxuICAgIHN0cmF0ZWd5LFxuICAgIG1pZGRsZXdhcmVEYXRhXG4gIH07XG59O1xuXG5mdW5jdGlvbiBleHBhbmRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgLi4ucGFkZGluZ1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTaWRlT2JqZWN0RnJvbVBhZGRpbmcocGFkZGluZykge1xuICByZXR1cm4gdHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSA6IHtcbiAgICB0b3A6IHBhZGRpbmcsXG4gICAgcmlnaHQ6IHBhZGRpbmcsXG4gICAgYm90dG9tOiBwYWRkaW5nLFxuICAgIGxlZnQ6IHBhZGRpbmdcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVjdCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9O1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHdpdGggYW4gb2JqZWN0IG9mIG92ZXJmbG93IHNpZGUgb2Zmc2V0cyB0aGF0IGRldGVybWluZSBob3cgbXVjaCB0aGVcbiAqIGVsZW1lbnQgaXMgb3ZlcmZsb3dpbmcgYSBnaXZlbiBjbGlwcGluZyBib3VuZGFyeSBvbiBlYWNoIHNpZGUuXG4gKiAtIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGJvdW5kYXJ5IGJ5IHRoYXQgbnVtYmVyIG9mIHBpeGVsc1xuICogLSBuZWdhdGl2ZSA9IGhvdyBtYW55IHBpeGVscyBsZWZ0IGJlZm9yZSBpdCB3aWxsIG92ZXJmbG93XG4gKiAtIDAgPSBsaWVzIGZsdXNoIHdpdGggdGhlIGJvdW5kYXJ5XG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvZGV0ZWN0T3ZlcmZsb3dcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9hd2FpdCRwbGF0Zm9ybSRpc0VsZTtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgeCxcbiAgICB5LFxuICAgIHBsYXRmb3JtLFxuICAgIHJlY3RzLFxuICAgIGVsZW1lbnRzLFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBzdGF0ZTtcbiAgY29uc3Qge1xuICAgIGJvdW5kYXJ5ID0gJ2NsaXBwaW5nQW5jZXN0b3JzJyxcbiAgICByb290Qm91bmRhcnkgPSAndmlld3BvcnQnLFxuICAgIGVsZW1lbnRDb250ZXh0ID0gJ2Zsb2F0aW5nJyxcbiAgICBhbHRCb3VuZGFyeSA9IGZhbHNlLFxuICAgIHBhZGRpbmcgPSAwXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpO1xuICBjb25zdCBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09ICdmbG9hdGluZycgPyAncmVmZXJlbmNlJyA6ICdmbG9hdGluZyc7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIGNvbnN0IGNsaXBwaW5nQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoYXdhaXQgcGxhdGZvcm0uZ2V0Q2xpcHBpbmdSZWN0KHtcbiAgICBlbGVtZW50OiAoKF9hd2FpdCRwbGF0Zm9ybSRpc0VsZSA9IGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChlbGVtZW50KSkpICE9IG51bGwgPyBfYXdhaXQkcGxhdGZvcm0kaXNFbGUgOiB0cnVlKSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IChhd2FpdCAocGxhdGZvcm0uZ2V0RG9jdW1lbnRFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudHMuZmxvYXRpbmcpKSksXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHN0cmF0ZWd5XG4gIH0pKTtcbiAgY29uc3QgcmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSAnZmxvYXRpbmcnID8ge1xuICAgIC4uLnJlY3RzLmZsb2F0aW5nLFxuICAgIHgsXG4gICAgeVxuICB9IDogcmVjdHMucmVmZXJlbmNlO1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBhd2FpdCAocGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQoZWxlbWVudHMuZmxvYXRpbmcpKTtcbiAgY29uc3Qgb2Zmc2V0U2NhbGUgPSAoYXdhaXQgKHBsYXRmb3JtLmlzRWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNFbGVtZW50KG9mZnNldFBhcmVudCkpKSA/IChhd2FpdCAocGxhdGZvcm0uZ2V0U2NhbGUgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmdldFNjYWxlKG9mZnNldFBhcmVudCkpKSB8fCB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH0gOiB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH07XG4gIGNvbnN0IGVsZW1lbnRDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChwbGF0Zm9ybS5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCA/IGF3YWl0IHBsYXRmb3JtLmNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KHtcbiAgICByZWN0LFxuICAgIG9mZnNldFBhcmVudCxcbiAgICBzdHJhdGVneVxuICB9KSA6IHJlY3QpO1xuICByZXR1cm4ge1xuICAgIHRvcDogKGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCkgLyBvZmZzZXRTY2FsZS55LFxuICAgIGJvdHRvbTogKGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSkgLyBvZmZzZXRTY2FsZS55LFxuICAgIGxlZnQ6IChjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQpIC8gb2Zmc2V0U2NhbGUueCxcbiAgICByaWdodDogKGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodCkgLyBvZmZzZXRTY2FsZS54XG4gIH07XG59XG5cbmNvbnN0IG1pbiQxID0gTWF0aC5taW47XG5jb25zdCBtYXgkMSA9IE1hdGgubWF4O1xuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEkMSwgdmFsdWUsIG1heCQxJDEpIHtcbiAgcmV0dXJuIG1heCQxKG1pbiQxJDEsIG1pbiQxKHZhbHVlLCBtYXgkMSQxKSk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHNvIHRoYXQgaXRcbiAqIGFwcGVhcnMgY2VudGVyZWQgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93ID0gb3B0aW9ucyA9PiAoe1xuICBuYW1lOiAnYXJyb3cnLFxuICBvcHRpb25zLFxuICBhc3luYyBmbihzdGF0ZSkge1xuICAgIC8vIFNpbmNlIGBlbGVtZW50YCBpcyByZXF1aXJlZCwgd2UgZG9uJ3QgUGFydGlhbDw+IHRoZSB0eXBlLlxuICAgIGNvbnN0IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBwYWRkaW5nID0gMFxuICAgIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcmVjdHMsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGVsZW1lbnRzXG4gICAgfSA9IHN0YXRlO1xuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcGFkZGluZ09iamVjdCA9IGdldFNpZGVPYmplY3RGcm9tUGFkZGluZyhwYWRkaW5nKTtcbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gICAgY29uc3QgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aEZyb21BeGlzKGF4aXMpO1xuICAgIGNvbnN0IGFycm93RGltZW5zaW9ucyA9IGF3YWl0IHBsYXRmb3JtLmdldERpbWVuc2lvbnMoZWxlbWVudCk7XG4gICAgY29uc3QgaXNZQXhpcyA9IGF4aXMgPT09ICd5JztcbiAgICBjb25zdCBtaW5Qcm9wID0gaXNZQXhpcyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgIGNvbnN0IG1heFByb3AgPSBpc1lBeGlzID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICAgIGNvbnN0IGNsaWVudFByb3AgPSBpc1lBeGlzID8gJ2NsaWVudEhlaWdodCcgOiAnY2xpZW50V2lkdGgnO1xuICAgIGNvbnN0IGVuZERpZmYgPSByZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSArIHJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIGNvb3Jkc1theGlzXSAtIHJlY3RzLmZsb2F0aW5nW2xlbmd0aF07XG4gICAgY29uc3Qgc3RhcnREaWZmID0gY29vcmRzW2F4aXNdIC0gcmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICAgIGNvbnN0IGFycm93T2Zmc2V0UGFyZW50ID0gYXdhaXQgKHBsYXRmb3JtLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpKTtcbiAgICBsZXQgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXJyb3dPZmZzZXRQYXJlbnRbY2xpZW50UHJvcF0gOiAwO1xuXG4gICAgLy8gRE9NIHBsYXRmb3JtIGNhbiByZXR1cm4gYHdpbmRvd2AgYXMgdGhlIGBvZmZzZXRQYXJlbnRgLlxuICAgIGlmICghY2xpZW50U2l6ZSB8fCAhKGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChhcnJvd09mZnNldFBhcmVudCkpKSkge1xuICAgICAgY2xpZW50U2l6ZSA9IGVsZW1lbnRzLmZsb2F0aW5nW2NsaWVudFByb3BdIHx8IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF07XG4gICAgfVxuICAgIGNvbnN0IGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBmbG9hdGluZyBlbGVtZW50IGlmIHRoZSBjZW50ZXJcbiAgICAvLyBwb2ludCBpcyBvdXRzaWRlIHRoZSBmbG9hdGluZyBlbGVtZW50J3MgYm91bmRzLlxuICAgIGNvbnN0IG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gICAgY29uc3QgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgICBjb25zdCBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICAgIGNvbnN0IG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTtcblxuICAgIC8vIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGwgZW5vdWdoIHRoYXQgdGhlIGFycm93J3MgcGFkZGluZyBjYXVzZXMgaXQgdG9cbiAgICAvLyB0byBwb2ludCB0byBub3RoaW5nIGZvciBhbiBhbGlnbmVkIHBsYWNlbWVudCwgYWRqdXN0IHRoZSBvZmZzZXQgb2YgdGhlXG4gICAgLy8gZmxvYXRpbmcgZWxlbWVudCBpdHNlbGYuIFRoaXMgc3RvcHMgYHNoaWZ0KClgIGZyb20gdGFraW5nIGFjdGlvbiwgYnV0IGNhblxuICAgIC8vIGJlIHdvcmtlZCBhcm91bmQgYnkgY2FsbGluZyBpdCBhZ2FpbiBhZnRlciB0aGUgYGFycm93KClgIGlmIGRlc2lyZWQuXG4gICAgY29uc3Qgc2hvdWxkQWRkT2Zmc2V0ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkgIT0gbnVsbCAmJiBjZW50ZXIgIT0gb2Zmc2V0ICYmIHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdIC8gMiAtIChjZW50ZXIgPCBtaW4gPyBwYWRkaW5nT2JqZWN0W21pblByb3BdIDogcGFkZGluZ09iamVjdFttYXhQcm9wXSkgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAvIDIgPCAwO1xuICAgIGNvbnN0IGFsaWdubWVudE9mZnNldCA9IHNob3VsZEFkZE9mZnNldCA/IGNlbnRlciA8IG1pbiA/IG1pbiAtIGNlbnRlciA6IG1heCAtIGNlbnRlciA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtheGlzXTogY29vcmRzW2F4aXNdIC0gYWxpZ25tZW50T2Zmc2V0LFxuICAgICAgZGF0YToge1xuICAgICAgICBbYXhpc106IG9mZnNldCxcbiAgICAgICAgY2VudGVyT2Zmc2V0OiBjZW50ZXIgLSBvZmZzZXRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KTtcblxuY29uc3Qgc2lkZXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuY29uc3QgYWxsUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9zaWRlcy5yZWR1Y2UoKGFjYywgc2lkZSkgPT4gYWNjLmNvbmNhdChzaWRlLCBzaWRlICsgXCItc3RhcnRcIiwgc2lkZSArIFwiLWVuZFwiKSwgW10pO1xuXG5jb25zdCBvcHBvc2l0ZVNpZGVNYXAgPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgc2lkZSA9PiBvcHBvc2l0ZVNpZGVNYXBbc2lkZV0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRTaWRlcyhwbGFjZW1lbnQsIHJlY3RzLCBydGwpIHtcbiAgaWYgKHJ0bCA9PT0gdm9pZCAwKSB7XG4gICAgcnRsID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aEZyb21BeGlzKG1haW5BeGlzKTtcbiAgbGV0IG1haW5BbGlnbm1lbnRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGFsaWdubWVudCA9PT0gKHJ0bCA/ICdlbmQnIDogJ3N0YXJ0JykgPyAncmlnaHQnIDogJ2xlZnQnIDogYWxpZ25tZW50ID09PSAnc3RhcnQnID8gJ2JvdHRvbScgOiAndG9wJztcbiAgaWYgKHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdID4gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXSkge1xuICAgIG1haW5BbGlnbm1lbnRTaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbkFsaWdubWVudFNpZGUsXG4gICAgY3Jvc3M6IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKVxuICB9O1xufVxuXG5jb25zdCBvcHBvc2l0ZUFsaWdubWVudE1hcCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgYWxpZ25tZW50ID0+IG9wcG9zaXRlQWxpZ25tZW50TWFwW2FsaWdubWVudF0pO1xufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRMaXN0KGFsaWdubWVudCwgYXV0b0FsaWdubWVudCwgYWxsb3dlZFBsYWNlbWVudHMpIHtcbiAgY29uc3QgYWxsb3dlZFBsYWNlbWVudHNTb3J0ZWRCeUFsaWdubWVudCA9IGFsaWdubWVudCA/IFsuLi5hbGxvd2VkUGxhY2VtZW50cy5maWx0ZXIocGxhY2VtZW50ID0+IGdldEFsaWdubWVudChwbGFjZW1lbnQpID09PSBhbGlnbm1lbnQpLCAuLi5hbGxvd2VkUGxhY2VtZW50cy5maWx0ZXIocGxhY2VtZW50ID0+IGdldEFsaWdubWVudChwbGFjZW1lbnQpICE9PSBhbGlnbm1lbnQpXSA6IGFsbG93ZWRQbGFjZW1lbnRzLmZpbHRlcihwbGFjZW1lbnQgPT4gZ2V0U2lkZShwbGFjZW1lbnQpID09PSBwbGFjZW1lbnQpO1xuICByZXR1cm4gYWxsb3dlZFBsYWNlbWVudHNTb3J0ZWRCeUFsaWdubWVudC5maWx0ZXIocGxhY2VtZW50ID0+IHtcbiAgICBpZiAoYWxpZ25tZW50KSB7XG4gICAgICByZXR1cm4gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkgPT09IGFsaWdubWVudCB8fCAoYXV0b0FsaWdubWVudCA/IGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkgIT09IHBsYWNlbWVudCA6IGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgY2hvb3NpbmcgdGhlIHBsYWNlbWVudFxuICogdGhhdCBoYXMgdGhlIG1vc3Qgc3BhY2UgYXZhaWxhYmxlIGF1dG9tYXRpY2FsbHksIHdpdGhvdXQgbmVlZGluZyB0byBzcGVjaWZ5IGFcbiAqIHByZWZlcnJlZCBwbGFjZW1lbnQuIEFsdGVybmF0aXZlIHRvIGBmbGlwYC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50XG4gKi9cbmNvbnN0IGF1dG9QbGFjZW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2F1dG9QbGFjZW1lbnQnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIHZhciBfbWlkZGxld2FyZURhdGEkYXV0b1AsIF9taWRkbGV3YXJlRGF0YSRhdXRvUDIsIF9wbGFjZW1lbnRzVGhhdEZpdE9uRTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVjdHMsXG4gICAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIHBsYXRmb3JtLFxuICAgICAgICBlbGVtZW50c1xuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjcm9zc0F4aXMgPSBmYWxzZSxcbiAgICAgICAgYWxpZ25tZW50LFxuICAgICAgICBhbGxvd2VkUGxhY2VtZW50cyA9IGFsbFBsYWNlbWVudHMsXG4gICAgICAgIGF1dG9BbGlnbm1lbnQgPSB0cnVlLFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgcGxhY2VtZW50cyA9IGFsaWdubWVudCAhPT0gdW5kZWZpbmVkIHx8IGFsbG93ZWRQbGFjZW1lbnRzID09PSBhbGxQbGFjZW1lbnRzID8gZ2V0UGxhY2VtZW50TGlzdChhbGlnbm1lbnQgfHwgbnVsbCwgYXV0b0FsaWdubWVudCwgYWxsb3dlZFBsYWNlbWVudHMpIDogYWxsb3dlZFBsYWNlbWVudHM7XG4gICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCBkZXRlY3RPdmVyZmxvd09wdGlvbnMpO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gKChfbWlkZGxld2FyZURhdGEkYXV0b1AgPSBtaWRkbGV3YXJlRGF0YS5hdXRvUGxhY2VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGF1dG9QLmluZGV4KSB8fCAwO1xuICAgICAgY29uc3QgY3VycmVudFBsYWNlbWVudCA9IHBsYWNlbWVudHNbY3VycmVudEluZGV4XTtcbiAgICAgIGlmIChjdXJyZW50UGxhY2VtZW50ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBtYWluLFxuICAgICAgICBjcm9zc1xuICAgICAgfSA9IGdldEFsaWdubWVudFNpZGVzKGN1cnJlbnRQbGFjZW1lbnQsIHJlY3RzLCBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSkpO1xuXG4gICAgICAvLyBNYWtlIGBjb21wdXRlQ29vcmRzYCBzdGFydCBmcm9tIHRoZSByaWdodCBwbGFjZS5cbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGN1cnJlbnRQbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRzWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudE92ZXJmbG93cyA9IFtvdmVyZmxvd1tnZXRTaWRlKGN1cnJlbnRQbGFjZW1lbnQpXSwgb3ZlcmZsb3dbbWFpbl0sIG92ZXJmbG93W2Nyb3NzXV07XG4gICAgICBjb25zdCBhbGxPdmVyZmxvd3MgPSBbLi4uKCgoX21pZGRsZXdhcmVEYXRhJGF1dG9QMiA9IG1pZGRsZXdhcmVEYXRhLmF1dG9QbGFjZW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkYXV0b1AyLm92ZXJmbG93cykgfHwgW10pLCB7XG4gICAgICAgIHBsYWNlbWVudDogY3VycmVudFBsYWNlbWVudCxcbiAgICAgICAgb3ZlcmZsb3dzOiBjdXJyZW50T3ZlcmZsb3dzXG4gICAgICB9XTtcbiAgICAgIGNvbnN0IG5leHRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2N1cnJlbnRJbmRleCArIDFdO1xuXG4gICAgICAvLyBUaGVyZSBhcmUgbW9yZSBwbGFjZW1lbnRzIHRvIGNoZWNrLlxuICAgICAgaWYgKG5leHRQbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbmRleDogY3VycmVudEluZGV4ICsgMSxcbiAgICAgICAgICAgIG92ZXJmbG93czogYWxsT3ZlcmZsb3dzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiBuZXh0UGxhY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlID0gYWxsT3ZlcmZsb3dzLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KGQucGxhY2VtZW50KTtcbiAgICAgICAgcmV0dXJuIFtkLnBsYWNlbWVudCwgYWxpZ25tZW50ICYmIGNyb3NzQXhpcyA/XG4gICAgICAgIC8vIENoZWNrIGFsb25nIHRoZSBtYWluQXhpcyBhbmQgbWFpbiBjcm9zc0F4aXMgc2lkZS5cbiAgICAgICAgZC5vdmVyZmxvd3Muc2xpY2UoMCwgMikucmVkdWNlKChhY2MsIHYpID0+IGFjYyArIHYsIDApIDpcbiAgICAgICAgLy8gQ2hlY2sgb25seSB0aGUgbWFpbkF4aXMuXG4gICAgICAgIGQub3ZlcmZsb3dzWzBdLCBkLm92ZXJmbG93c107XG4gICAgICB9KS5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSk7XG4gICAgICBjb25zdCBwbGFjZW1lbnRzVGhhdEZpdE9uRWFjaFNpZGUgPSBwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2UuZmlsdGVyKGQgPT4gZFsyXS5zbGljZSgwLFxuICAgICAgLy8gQWxpZ25lZCBwbGFjZW1lbnRzIHNob3VsZCBub3QgY2hlY2sgdGhlaXIgb3Bwb3NpdGUgY3Jvc3NBeGlzXG4gICAgICAvLyBzaWRlLlxuICAgICAgZ2V0QWxpZ25tZW50KGRbMF0pID8gMiA6IDMpLmV2ZXJ5KHYgPT4gdiA8PSAwKSk7XG4gICAgICBjb25zdCByZXNldFBsYWNlbWVudCA9ICgoX3BsYWNlbWVudHNUaGF0Rml0T25FID0gcGxhY2VtZW50c1RoYXRGaXRPbkVhY2hTaWRlWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX3BsYWNlbWVudHNUaGF0Rml0T25FWzBdKSB8fCBwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2VbMF1bMF07XG4gICAgICBpZiAocmVzZXRQbGFjZW1lbnQgIT09IHBsYWNlbWVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGluZGV4OiBjdXJyZW50SW5kZXggKyAxLFxuICAgICAgICAgICAgb3ZlcmZsb3dzOiBhbGxPdmVyZmxvd3NcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHJlc2V0UGxhY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgY29uc3Qgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBnZXRTaWRlTGlzdChzaWRlLCBpc1N0YXJ0LCBydGwpIHtcbiAgY29uc3QgbHIgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgY29uc3QgcmwgPSBbJ3JpZ2h0JywgJ2xlZnQnXTtcbiAgY29uc3QgdGIgPSBbJ3RvcCcsICdib3R0b20nXTtcbiAgY29uc3QgYnQgPSBbJ2JvdHRvbScsICd0b3AnXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgaWYgKHJ0bCkgcmV0dXJuIGlzU3RhcnQgPyBybCA6IGxyO1xuICAgICAgcmV0dXJuIGlzU3RhcnQgPyBsciA6IHJsO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gdGIgOiBidDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtdO1xuICB9XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzKHBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZGlyZWN0aW9uLCBydGwpIHtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGxldCBsaXN0ID0gZ2V0U2lkZUxpc3QoZ2V0U2lkZShwbGFjZW1lbnQpLCBkaXJlY3Rpb24gPT09ICdzdGFydCcsIHJ0bCk7XG4gIGlmIChhbGlnbm1lbnQpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoc2lkZSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGZsaXBwaW5nIHRoZSBgcGxhY2VtZW50YFxuICogaW4gb3JkZXIgdG8ga2VlcCBpdCBpbiB2aWV3IHdoZW4gdGhlIHByZWZlcnJlZCBwbGFjZW1lbnQocykgd2lsbCBvdmVyZmxvdyB0aGVcbiAqIGNsaXBwaW5nIGJvdW5kYXJ5LiBBbHRlcm5hdGl2ZSB0byBgYXV0b1BsYWNlbWVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvZmxpcFxuICovXG5jb25zdCBmbGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdmbGlwJyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGZsaXA7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgbWlkZGxld2FyZURhdGEsXG4gICAgICAgIHJlY3RzLFxuICAgICAgICBpbml0aWFsUGxhY2VtZW50LFxuICAgICAgICBwbGF0Zm9ybSxcbiAgICAgICAgZWxlbWVudHNcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFpbkF4aXM6IGNoZWNrTWFpbkF4aXMgPSB0cnVlLFxuICAgICAgICBjcm9zc0F4aXM6IGNoZWNrQ3Jvc3NBeGlzID0gdHJ1ZSxcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICAgIGZhbGxiYWNrU3RyYXRlZ3kgPSAnYmVzdEZpdCcsXG4gICAgICAgIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gPSAnbm9uZScsXG4gICAgICAgIGZsaXBBbGlnbm1lbnQgPSB0cnVlLFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3Qgc2lkZSA9IGdldFNpZGUocGxhY2VtZW50KTtcbiAgICAgIGNvbnN0IGlzQmFzZVBsYWNlbWVudCA9IGdldFNpZGUoaW5pdGlhbFBsYWNlbWVudCkgPT09IGluaXRpYWxQbGFjZW1lbnQ7XG4gICAgICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gICAgICBjb25zdCBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcEFsaWdubWVudCA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChpbml0aWFsUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZFBsYWNlbWVudHMoaW5pdGlhbFBsYWNlbWVudCkpO1xuICAgICAgaWYgKCFzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgJiYgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50cy5wdXNoKC4uLmdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMoaW5pdGlhbFBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiwgcnRsKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGFjZW1lbnRzID0gW2luaXRpYWxQbGFjZW1lbnQsIC4uLmZhbGxiYWNrUGxhY2VtZW50c107XG4gICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCBkZXRlY3RPdmVyZmxvd09wdGlvbnMpO1xuICAgICAgY29uc3Qgb3ZlcmZsb3dzID0gW107XG4gICAgICBsZXQgb3ZlcmZsb3dzRGF0YSA9ICgoX21pZGRsZXdhcmVEYXRhJGZsaXAgPSBtaWRkbGV3YXJlRGF0YS5mbGlwKSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGZsaXAub3ZlcmZsb3dzKSB8fCBbXTtcbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIG92ZXJmbG93cy5wdXNoKG92ZXJmbG93W3NpZGVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGVja0Nyb3NzQXhpcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgbWFpbixcbiAgICAgICAgICBjcm9zc1xuICAgICAgICB9ID0gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKTtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbbWFpbl0sIG92ZXJmbG93W2Nyb3NzXSk7XG4gICAgICB9XG4gICAgICBvdmVyZmxvd3NEYXRhID0gWy4uLm92ZXJmbG93c0RhdGEsIHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvdmVyZmxvd3NcbiAgICAgIH1dO1xuXG4gICAgICAvLyBPbmUgb3IgbW9yZSBzaWRlcyBpcyBvdmVyZmxvd2luZy5cbiAgICAgIGlmICghb3ZlcmZsb3dzLmV2ZXJ5KHNpZGUgPT4gc2lkZSA8PSAwKSkge1xuICAgICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGZsaXAyLCBfb3ZlcmZsb3dzRGF0YSRmaWx0ZXI7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9ICgoKF9taWRkbGV3YXJlRGF0YSRmbGlwMiA9IG1pZGRsZXdhcmVEYXRhLmZsaXApID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkZmxpcDIuaW5kZXgpIHx8IDApICsgMTtcbiAgICAgICAgY29uc3QgbmV4dFBsYWNlbWVudCA9IHBsYWNlbWVudHNbbmV4dEluZGV4XTtcbiAgICAgICAgaWYgKG5leHRQbGFjZW1lbnQpIHtcbiAgICAgICAgICAvLyBUcnkgbmV4dCBwbGFjZW1lbnQgYW5kIHJlLXJ1biB0aGUgbGlmZWN5Y2xlLlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGluZGV4OiBuZXh0SW5kZXgsXG4gICAgICAgICAgICAgIG92ZXJmbG93czogb3ZlcmZsb3dzRGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICAgIHBsYWNlbWVudDogbmV4dFBsYWNlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJzdCwgZmluZCB0aGUgY2FuZGlkYXRlcyB0aGF0IGZpdCBvbiB0aGUgbWFpbkF4aXMgc2lkZSBvZiBvdmVyZmxvdyxcbiAgICAgICAgLy8gdGhlbiBmaW5kIHRoZSBwbGFjZW1lbnQgdGhhdCBmaXRzIHRoZSBiZXN0IG9uIHRoZSBtYWluIGNyb3NzQXhpcyBzaWRlLlxuICAgICAgICBsZXQgcmVzZXRQbGFjZW1lbnQgPSAoX292ZXJmbG93c0RhdGEkZmlsdGVyID0gb3ZlcmZsb3dzRGF0YS5maWx0ZXIoZCA9PiBkLm92ZXJmbG93c1swXSA8PSAwKS5zb3J0KChhLCBiKSA9PiBhLm92ZXJmbG93c1sxXSAtIGIub3ZlcmZsb3dzWzFdKVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vdmVyZmxvd3NEYXRhJGZpbHRlci5wbGFjZW1lbnQ7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGZhbGxiYWNrLlxuICAgICAgICBpZiAoIXJlc2V0UGxhY2VtZW50KSB7XG4gICAgICAgICAgc3dpdGNoIChmYWxsYmFja1N0cmF0ZWd5KSB7XG4gICAgICAgICAgICBjYXNlICdiZXN0Rml0JzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBfb3ZlcmZsb3dzRGF0YSRtYXAkc287XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gKF9vdmVyZmxvd3NEYXRhJG1hcCRzbyA9IG92ZXJmbG93c0RhdGEubWFwKGQgPT4gW2QucGxhY2VtZW50LCBkLm92ZXJmbG93cy5maWx0ZXIob3ZlcmZsb3cgPT4gb3ZlcmZsb3cgPiAwKS5yZWR1Y2UoKGFjYywgb3ZlcmZsb3cpID0+IGFjYyArIG92ZXJmbG93LCAwKV0pLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vdmVyZmxvd3NEYXRhJG1hcCRzb1swXTtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNldFBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2luaXRpYWxQbGFjZW1lbnQnOlxuICAgICAgICAgICAgICByZXNldFBsYWNlbWVudCA9IGluaXRpYWxQbGFjZW1lbnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2VtZW50ICE9PSByZXNldFBsYWNlbWVudCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHJlc2V0UGxhY2VtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0KSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gc2lkZXMuc29tZShzaWRlID0+IG92ZXJmbG93W3NpZGVdID49IDApO1xufVxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIGhpZGUgdGhlIGZsb2F0aW5nIGVsZW1lbnQgaW4gYXBwbGljYWJsZSBzaXR1YXRpb25zLCBzdWNoIGFzXG4gKiB3aGVuIGl0IGlzIG5vdCBpbiB0aGUgc2FtZSBjbGlwcGluZyBjb250ZXh0IGFzIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9oaWRlXG4gKi9cbmNvbnN0IGhpZGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2hpZGUnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3RyYXRlZ3kgPSAncmVmZXJlbmNlSGlkZGVuJyxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVjdHNcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbiAgICAgICAgY2FzZSAncmVmZXJlbmNlSGlkZGVuJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9ucyxcbiAgICAgICAgICAgICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdHMucmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VIaWRkZW5PZmZzZXRzOiBvZmZzZXRzLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUhpZGRlbjogaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG9mZnNldHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlICdlc2NhcGVkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9ucyxcbiAgICAgICAgICAgICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0cy5mbG9hdGluZyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZXNjYXBlZE9mZnNldHM6IG9mZnNldHMsXG4gICAgICAgICAgICAgICAgZXNjYXBlZDogaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG9mZnNldHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gY29udmVydFZhbHVlVG9Db29yZHMoc3RhdGUsIHZhbHVlKSB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQsXG4gICAgcGxhdGZvcm0sXG4gICAgZWxlbWVudHNcbiAgfSA9IHN0YXRlO1xuICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkgPT09ICd4JztcbiAgY29uc3QgbWFpbkF4aXNNdWx0aSA9IFsnbGVmdCcsICd0b3AnXS5pbmNsdWRlcyhzaWRlKSA/IC0xIDogMTtcbiAgY29uc3QgY3Jvc3NBeGlzTXVsdGkgPSBydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMTtcbiAgY29uc3QgcmF3VmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShzdGF0ZSkgOiB2YWx1ZTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCB7XG4gICAgbWFpbkF4aXMsXG4gICAgY3Jvc3NBeGlzLFxuICAgIGFsaWdubWVudEF4aXNcbiAgfSA9IHR5cGVvZiByYXdWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHJhd1ZhbHVlLFxuICAgIGNyb3NzQXhpczogMCxcbiAgICBhbGlnbm1lbnRBeGlzOiBudWxsXG4gIH0gOiB7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgY3Jvc3NBeGlzOiAwLFxuICAgIGFsaWdubWVudEF4aXM6IG51bGwsXG4gICAgLi4ucmF3VmFsdWVcbiAgfTtcbiAgaWYgKGFsaWdubWVudCAmJiB0eXBlb2YgYWxpZ25tZW50QXhpcyA9PT0gJ251bWJlcicpIHtcbiAgICBjcm9zc0F4aXMgPSBhbGlnbm1lbnQgPT09ICdlbmQnID8gYWxpZ25tZW50QXhpcyAqIC0xIDogYWxpZ25tZW50QXhpcztcbiAgfVxuICByZXR1cm4gaXNWZXJ0aWNhbCA/IHtcbiAgICB4OiBjcm9zc0F4aXMgKiBjcm9zc0F4aXNNdWx0aSxcbiAgICB5OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGlcbiAgfSA6IHtcbiAgICB4OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGksXG4gICAgeTogY3Jvc3NBeGlzICogY3Jvc3NBeGlzTXVsdGlcbiAgfTtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcGxhY2VtZW50IGJ5IHRyYW5zbGF0aW5nIHRoZSBmbG9hdGluZyBlbGVtZW50IGFsb25nIHRoZVxuICogc3BlY2lmaWVkIGF4ZXMuXG4gKiBBIG51bWJlciAoc2hvcnRoYW5kIGZvciBgbWFpbkF4aXNgIG9yIGRpc3RhbmNlKSwgb3IgYW4gYXhlcyBjb25maWd1cmF0aW9uXG4gKiBvYmplY3QgbWF5IGJlIHBhc3NlZC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9vZmZzZXRcbiAqL1xuY29uc3Qgb2Zmc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgdmFsdWUgPSAwO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ29mZnNldCcsXG4gICAgb3B0aW9uczogdmFsdWUsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZGlmZkNvb3JkcyA9IGF3YWl0IGNvbnZlcnRWYWx1ZVRvQ29vcmRzKHN0YXRlLCB2YWx1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB4ICsgZGlmZkNvb3Jkcy54LFxuICAgICAgICB5OiB5ICsgZGlmZkNvb3Jkcy55LFxuICAgICAgICBkYXRhOiBkaWZmQ29vcmRzXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldENyb3NzQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IHNoaWZ0aW5nIGl0IGluIG9yZGVyIHRvXG4gKiBrZWVwIGl0IGluIHZpZXcgd2hlbiBpdCB3aWxsIG92ZXJmbG93IHRoZSBjbGlwcGluZyBib3VuZGFyeS5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9zaGlmdFxuICovXG5jb25zdCBzaGlmdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnc2hpZnQnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgcGxhY2VtZW50XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IGZhbHNlLFxuICAgICAgICBsaW1pdGVyID0ge1xuICAgICAgICAgIGZuOiBfcmVmID0+IHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIHlcbiAgICAgICAgICAgIH0gPSBfcmVmO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH07XG4gICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCBkZXRlY3RPdmVyZmxvd09wdGlvbnMpO1xuICAgICAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoZ2V0U2lkZShwbGFjZW1lbnQpKTtcbiAgICAgIGNvbnN0IGNyb3NzQXhpcyA9IGdldENyb3NzQXhpcyhtYWluQXhpcyk7XG4gICAgICBsZXQgbWFpbkF4aXNDb29yZCA9IGNvb3Jkc1ttYWluQXhpc107XG4gICAgICBsZXQgY3Jvc3NBeGlzQ29vcmQgPSBjb29yZHNbY3Jvc3NBeGlzXTtcbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIGNvbnN0IG1pblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAgIGNvbnN0IG1heFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICAgICAgICBjb25zdCBtaW4gPSBtYWluQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heCA9IG1haW5BeGlzQ29vcmQgLSBvdmVyZmxvd1ttYXhTaWRlXTtcbiAgICAgICAgbWFpbkF4aXNDb29yZCA9IHdpdGhpbihtaW4sIG1haW5BeGlzQ29vcmQsIG1heCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tDcm9zc0F4aXMpIHtcbiAgICAgICAgY29uc3QgbWluU2lkZSA9IGNyb3NzQXhpcyA9PT0gJ3knID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAgIGNvbnN0IG1heFNpZGUgPSBjcm9zc0F4aXMgPT09ICd5JyA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgbWluID0gY3Jvc3NBeGlzQ29vcmQgKyBvdmVyZmxvd1ttaW5TaWRlXTtcbiAgICAgICAgY29uc3QgbWF4ID0gY3Jvc3NBeGlzQ29vcmQgLSBvdmVyZmxvd1ttYXhTaWRlXTtcbiAgICAgICAgY3Jvc3NBeGlzQ29vcmQgPSB3aXRoaW4obWluLCBjcm9zc0F4aXNDb29yZCwgbWF4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpbWl0ZWRDb29yZHMgPSBsaW1pdGVyLmZuKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFttYWluQXhpc106IG1haW5BeGlzQ29vcmQsXG4gICAgICAgIFtjcm9zc0F4aXNdOiBjcm9zc0F4aXNDb29yZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5saW1pdGVkQ29vcmRzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgeDogbGltaXRlZENvb3Jkcy54IC0geCxcbiAgICAgICAgICB5OiBsaW1pdGVkQ29vcmRzLnkgLSB5XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgdmFyIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiAoKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSB8fCB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuTm9kZTtcbn1cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKG5vZGUpIHtcbiAgcmV0dXJuIGlzTm9kZShub2RlKSA/IChub2RlLm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5IVE1MRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBCcm93c2VycyB3aXRob3V0IGBTaGFkb3dSb290YCBzdXBwb3J0LlxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkgJiYgIVsnaW5saW5lJywgJ2NvbnRlbnRzJ10uaW5jbHVkZXMoZGlzcGxheSk7XG59XG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5jbHVkZXMoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gaXNDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBjb25zdCBzYWZhcmkgPSBpc1NhZmFyaSgpO1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgcmV0dXJuIGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCAhc2FmYXJpICYmIChjc3MuYmFja2Ryb3BGaWx0ZXIgPyBjc3MuYmFja2Ryb3BGaWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCAhc2FmYXJpICYmIChjc3MuZmlsdGVyID8gY3NzLmZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2ZpbHRlciddLnNvbWUodmFsdWUgPT4gKGNzcy53aWxsQ2hhbmdlIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpIHx8IFsncGFpbnQnLCAnbGF5b3V0JywgJ3N0cmljdCcsICdjb250ZW50J10uc29tZSh2YWx1ZSA9PiAoY3NzLmNvbnRhaW4gfHwgJycpLmluY2x1ZGVzKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgaWYgKHR5cGVvZiBDU1MgPT09ICd1bmRlZmluZWQnIHx8ICFDU1Muc3VwcG9ydHMpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cygnLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXInLCAnbm9uZScpO1xufVxuZnVuY3Rpb24gaXNMYXN0VHJhdmVyc2FibGVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKG5vZGUpKTtcbn1cblxuY29uc3QgbWluID0gTWF0aC5taW47XG5jb25zdCBtYXggPSBNYXRoLm1heDtcbmNvbnN0IHJvdW5kID0gTWF0aC5yb3VuZDtcblxuZnVuY3Rpb24gZ2V0Q3NzRGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KTtcbiAgLy8gSW4gdGVzdGluZyBlbnZpcm9ubWVudHMsIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBwcm9wZXJ0aWVzIGFyZSBlbXB0eVxuICAvLyBzdHJpbmdzIGZvciBTVkcgZWxlbWVudHMsIHJldHVybmluZyBOYU4uIEZhbGxiYWNrIHRvIGAwYCBpbiB0aGlzIGNhc2UuXG4gIGxldCB3aWR0aCA9IHBhcnNlRmxvYXQoY3NzLndpZHRoKSB8fCAwO1xuICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChjc3MuaGVpZ2h0KSB8fCAwO1xuICBjb25zdCBoYXNPZmZzZXQgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBvZmZzZXRXaWR0aCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggOiB3aWR0aDtcbiAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiBoZWlnaHQ7XG4gIGNvbnN0IHNob3VsZEZhbGxiYWNrID0gcm91bmQod2lkdGgpICE9PSBvZmZzZXRXaWR0aCB8fCByb3VuZChoZWlnaHQpICE9PSBvZmZzZXRIZWlnaHQ7XG4gIGlmIChzaG91bGRGYWxsYmFjaykge1xuICAgIHdpZHRoID0gb2Zmc2V0V2lkdGg7XG4gICAgaGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0O1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGZhbGxiYWNrOiBzaG91bGRGYWxsYmFja1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bndyYXBFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICFpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50LmNvbnRleHRFbGVtZW50IDogZWxlbWVudDtcbn1cblxuY29uc3QgRkFMTEJBQ0tfU0NBTEUgPSB7XG4gIHg6IDEsXG4gIHk6IDFcbn07XG5mdW5jdGlvbiBnZXRTY2FsZShlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZG9tRWxlbWVudCkpIHtcbiAgICByZXR1cm4gRkFMTEJBQ0tfU0NBTEU7XG4gIH1cbiAgY29uc3QgcmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZmFsbGJhY2tcbiAgfSA9IGdldENzc0RpbWVuc2lvbnMoZG9tRWxlbWVudCk7XG4gIGxldCB4ID0gKGZhbGxiYWNrID8gcm91bmQocmVjdC53aWR0aCkgOiByZWN0LndpZHRoKSAvIHdpZHRoO1xuICBsZXQgeSA9IChmYWxsYmFjayA/IHJvdW5kKHJlY3QuaGVpZ2h0KSA6IHJlY3QuaGVpZ2h0KSAvIGhlaWdodDtcblxuICAvLyAwLCBOYU4sIG9yIEluZmluaXR5IHNob3VsZCBhbHdheXMgZmFsbGJhY2sgdG8gMS5cblxuICBpZiAoIXggfHwgIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHggPSAxO1xuICB9XG4gIGlmICgheSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSB7XG4gICAgeSA9IDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuY29uc3Qgbm9PZmZzZXRzID0ge1xuICB4OiAwLFxuICB5OiAwXG59O1xuZnVuY3Rpb24gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50LCBpc0ZpeGVkLCBmbG9hdGluZ09mZnNldFBhcmVudCkge1xuICB2YXIgX3dpbiR2aXN1YWxWaWV3cG9ydCwgX3dpbiR2aXN1YWxWaWV3cG9ydDI7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWlzU2FmYXJpKCkpIHtcbiAgICByZXR1cm4gbm9PZmZzZXRzO1xuICB9XG4gIGNvbnN0IHdpbiA9IGVsZW1lbnQgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3c7XG4gIGlmICghZmxvYXRpbmdPZmZzZXRQYXJlbnQgfHwgaXNGaXhlZCAmJiBmbG9hdGluZ09mZnNldFBhcmVudCAhPT0gd2luKSB7XG4gICAgcmV0dXJuIG5vT2Zmc2V0cztcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6ICgoX3dpbiR2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW4kdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCkgfHwgMCxcbiAgICB5OiAoKF93aW4kdmlzdWFsVmlld3BvcnQyID0gd2luLnZpc3VhbFZpZXdwb3J0KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbiR2aXN1YWxWaWV3cG9ydDIub2Zmc2V0VG9wKSB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSwgb2Zmc2V0UGFyZW50KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgbGV0IHNjYWxlID0gRkFMTEJBQ0tfU0NBTEU7XG4gIGlmIChpbmNsdWRlU2NhbGUpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgICBpZiAoaXNFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBjb25zdCB2aXN1YWxPZmZzZXRzID0gZ2V0VmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50LCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCk7XG4gIGxldCB4ID0gKGNsaWVudFJlY3QubGVmdCArIHZpc3VhbE9mZnNldHMueCkgLyBzY2FsZS54O1xuICBsZXQgeSA9IChjbGllbnRSZWN0LnRvcCArIHZpc3VhbE9mZnNldHMueSkgLyBzY2FsZS55O1xuICBsZXQgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGUueDtcbiAgbGV0IGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGUueTtcbiAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZG9tRWxlbWVudCk7XG4gICAgY29uc3Qgb2Zmc2V0V2luID0gb2Zmc2V0UGFyZW50ICYmIGlzRWxlbWVudChvZmZzZXRQYXJlbnQpID8gZ2V0V2luZG93KG9mZnNldFBhcmVudCkgOiBvZmZzZXRQYXJlbnQ7XG4gICAgbGV0IGN1cnJlbnRJRnJhbWUgPSB3aW4uZnJhbWVFbGVtZW50O1xuICAgIHdoaWxlIChjdXJyZW50SUZyYW1lICYmIG9mZnNldFBhcmVudCAmJiBvZmZzZXRXaW4gIT09IHdpbikge1xuICAgICAgY29uc3QgaWZyYW1lU2NhbGUgPSBnZXRTY2FsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGNvbnN0IGlmcmFtZVJlY3QgPSBjdXJyZW50SUZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGlmcmFtZVJlY3QueCArPSAoY3VycmVudElGcmFtZS5jbGllbnRMZWZ0ICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ0xlZnQpKSAqIGlmcmFtZVNjYWxlLng7XG4gICAgICBpZnJhbWVSZWN0LnkgKz0gKGN1cnJlbnRJRnJhbWUuY2xpZW50VG9wICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ1RvcCkpICogaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIHkgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHdpZHRoICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICBoZWlnaHQgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKz0gaWZyYW1lUmVjdC54O1xuICAgICAgeSArPSBpZnJhbWVSZWN0Lnk7XG4gICAgICBjdXJyZW50SUZyYW1lID0gZ2V0V2luZG93KGN1cnJlbnRJRnJhbWUpLmZyYW1lRWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3Qoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChub2RlKSB7XG4gIHJldHVybiAoKGlzTm9kZShub2RlKSA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGUuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpIHtcbiAgaWYgKGlzRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQucGFnZVhPZmZzZXQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICByZWN0LFxuICAgIG9mZnNldFBhcmVudCxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuICBsZXQgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIGxldCBzY2FsZSA9IHtcbiAgICB4OiAxLFxuICAgIHk6IDFcbiAgfTtcbiAgY29uc3Qgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiBzdHJhdGVneSAhPT0gJ2ZpeGVkJykge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgaXNPdmVyZmxvd0VsZW1lbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBjb25zdCBvZmZzZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGggKiBzY2FsZS54LFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQgKiBzY2FsZS55LFxuICAgIHg6IHJlY3QueCAqIHNjYWxlLnggLSBzY3JvbGwuc2Nyb2xsTGVmdCAqIHNjYWxlLnggKyBvZmZzZXRzLngsXG4gICAgeTogcmVjdC55ICogc2NhbGUueSAtIHNjcm9sbC5zY3JvbGxUb3AgKiBzY2FsZS55ICsgb2Zmc2V0cy55XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldE5vZGVTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZS5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHNjcm9sbCA9IGdldE5vZGVTY3JvbGwoZWxlbWVudCk7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keS5zY3JvbGxXaWR0aCwgYm9keS5jbGllbnRXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5LmNsaWVudEhlaWdodCk7XG4gIGxldCB4ID0gLXNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgY29uc3QgeSA9IC1zY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSQxKGJvZHkpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKSAtIHdpZHRoO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgaWYgKGdldE5vZGVOYW1lKG5vZGUpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBjb25zdCByZXN1bHQgPVxuICAvLyBTdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZS5cbiAgbm9kZS5hc3NpZ25lZFNsb3QgfHxcbiAgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWQuXG4gIG5vZGUucGFyZW50Tm9kZSB8fFxuICAvLyBTaGFkb3dSb290IGRldGVjdGVkLlxuICBpc1NoYWRvd1Jvb3Qobm9kZSkgJiYgbm9kZS5ob3N0IHx8XG4gIC8vIEZhbGxiYWNrLlxuICBnZXREb2N1bWVudEVsZW1lbnQobm9kZSk7XG4gIHJldHVybiBpc1NoYWRvd1Jvb3QocmVzdWx0KSA/IHJlc3VsdC5ob3N0IDogcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICBpZiAoaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgLy8gYGdldFBhcmVudE5vZGVgIHdpbGwgbmV2ZXIgcmV0dXJuIGEgYERvY3VtZW50YCBkdWUgdG8gdGhlIGZhbGxiYWNrXG4gICAgLy8gY2hlY2ssIHNvIGl0J3MgZWl0aGVyIHRoZSA8aHRtbD4gb3IgPGJvZHk+IGVsZW1lbnQuXG4gICAgcmV0dXJuIHBhcmVudE5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG4gIGlmIChpc0hUTUxFbGVtZW50KHBhcmVudE5vZGUpICYmIGlzT3ZlcmZsb3dFbGVtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKHBhcmVudE5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRPdmVyZmxvd0FuY2VzdG9ycyhub2RlLCBsaXN0KSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvciA9IGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpO1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxhYmxlQW5jZXN0b3IgPT09ICgoX25vZGUkb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQuYm9keSk7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhzY3JvbGxhYmxlQW5jZXN0b3IpO1xuICBpZiAoaXNCb2R5KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KHdpbiwgd2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc092ZXJmbG93RWxlbWVudChzY3JvbGxhYmxlQW5jZXN0b3IpID8gc2Nyb2xsYWJsZUFuY2VzdG9yIDogW10pO1xuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChzY3JvbGxhYmxlQW5jZXN0b3IsIGdldE92ZXJmbG93QW5jZXN0b3JzKHNjcm9sbGFibGVBbmNlc3RvcikpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgbGV0IHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgbGV0IGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgY29uc3QgdmlzdWFsVmlld3BvcnRCYXNlZCA9IGlzU2FmYXJpKCk7XG4gICAgaWYgKCF2aXN1YWxWaWV3cG9ydEJhc2VkIHx8IHZpc3VhbFZpZXdwb3J0QmFzZWQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbi8vIFJldHVybnMgdGhlIGlubmVyIGNsaWVudCByZWN0LCBzdWJ0cmFjdGluZyBzY3JvbGxiYXJzIGlmIHByZXNlbnQuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgY29uc3QgdG9wID0gY2xpZW50UmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgY29uc3QgbGVmdCA9IGNsaWVudFJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgY29uc3Qgc2NhbGUgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0U2NhbGUoZWxlbWVudCkgOiB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH07XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjYWxlLng7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NhbGUueTtcbiAgY29uc3QgeCA9IGxlZnQgKiBzY2FsZS54O1xuICBjb25zdCB5ID0gdG9wICogc2NhbGUueTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpIHtcbiAgbGV0IHJlY3Q7XG4gIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAndmlld3BvcnQnKSB7XG4gICAgcmVjdCA9IGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSk7XG4gIH0gZWxzZSBpZiAoY2xpcHBpbmdBbmNlc3RvciA9PT0gJ2RvY3VtZW50Jykge1xuICAgIHJlY3QgPSBnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2xpcHBpbmdBbmNlc3RvcikpIHtcbiAgICByZWN0ID0gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpO1xuICAgIHJlY3QgPSB7XG4gICAgICAuLi5jbGlwcGluZ0FuY2VzdG9yLFxuICAgICAgeDogY2xpcHBpbmdBbmNlc3Rvci54IC0gdmlzdWFsT2Zmc2V0cy54LFxuICAgICAgeTogY2xpcHBpbmdBbmNlc3Rvci55IC0gdmlzdWFsT2Zmc2V0cy55XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVjdFRvQ2xpZW50UmVjdChyZWN0KTtcbn1cbmZ1bmN0aW9uIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBzdG9wTm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKHBhcmVudE5vZGUgPT09IHN0b3BOb2RlIHx8ICFpc0VsZW1lbnQocGFyZW50Tm9kZSkgfHwgaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlJDEocGFyZW50Tm9kZSkucG9zaXRpb24gPT09ICdmaXhlZCcgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cblxuLy8gQSBcImNsaXBwaW5nIGFuY2VzdG9yXCIgaXMgYW4gYG92ZXJmbG93YCBlbGVtZW50IHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBjaGlsZCBlbGVtZW50cy4gVGhpcyByZXR1cm5zIGFsbCBjbGlwcGluZyBhbmNlc3RvcnNcbi8vIG9mIHRoZSBnaXZlbiBlbGVtZW50IHVwIHRoZSB0cmVlLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIGNhY2hlKSB7XG4gIGNvbnN0IGNhY2hlZFJlc3VsdCA9IGNhY2hlLmdldChlbGVtZW50KTtcbiAgaWYgKGNhY2hlZFJlc3VsdCkge1xuICAgIHJldHVybiBjYWNoZWRSZXN1bHQ7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IGdldE92ZXJmbG93QW5jZXN0b3JzKGVsZW1lbnQpLmZpbHRlcihlbCA9PiBpc0VsZW1lbnQoZWwpICYmIGdldE5vZGVOYW1lKGVsKSAhPT0gJ2JvZHknKTtcbiAgbGV0IGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gbnVsbDtcbiAgY29uc3QgZWxlbWVudElzRml4ZWQgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCc7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgd2hpbGUgKGlzRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGN1cnJlbnROb2RlKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZUlzQ29udGFpbmluZyA9IGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKTtcbiAgICBpZiAoIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRHJvcEN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlIDogIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICEhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgJiYgWydhYnNvbHV0ZScsICdmaXhlZCddLmluY2x1ZGVzKGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlLnBvc2l0aW9uKSB8fCBpc092ZXJmbG93RWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBjdXJyZW50Tm9kZSk7XG4gICAgaWYgKHNob3VsZERyb3BDdXJyZW50Tm9kZSkge1xuICAgICAgLy8gRHJvcCBub24tY29udGFpbmluZyBibG9ja3MuXG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGFuY2VzdG9yID0+IGFuY2VzdG9yICE9PSBjdXJyZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlY29yZCBsYXN0IGNvbnRhaW5pbmcgYmxvY2sgZm9yIG5leHQgaXRlcmF0aW9uLlxuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIGNhY2hlLnNldChlbGVtZW50LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBhbmNlc3RvcnMuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoX3JlZikge1xuICBsZXQge1xuICAgIGVsZW1lbnQsXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBlbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nQW5jZXN0b3JzJyA/IGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCB0aGlzLl9jKSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIGNvbnN0IGNsaXBwaW5nQW5jZXN0b3JzID0gWy4uLmVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycywgcm9vdEJvdW5kYXJ5XTtcbiAgY29uc3QgZmlyc3RDbGlwcGluZ0FuY2VzdG9yID0gY2xpcHBpbmdBbmNlc3RvcnNbMF07XG4gIGNvbnN0IGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nQW5jZXN0b3JzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdBbmNlc3RvcikgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBmaXJzdENsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIGhlaWdodDogY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3AsXG4gICAgeDogY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgeTogY2xpcHBpbmdSZWN0LnRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwb2x5ZmlsbCkge1xuICAgIHJldHVybiBwb2x5ZmlsbChlbGVtZW50KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59XG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBsZXQgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBpZiAoaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCk7XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCwgcG9seWZpbGwpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICFpc0NvbnRhaW5pbmdCbG9jayhvZmZzZXRQYXJlbnQpKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudChlbGVtZW50LCBvZmZzZXRQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgaXNGaXhlZCA9IHN0cmF0ZWd5ID09PSAnZml4ZWQnO1xuICBjb25zdCByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gIGxldCBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgY29uc3Qgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgaXNPdmVyZmxvd0VsZW1lbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBjb25zdCBvZmZzZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmNvbnN0IHBsYXRmb3JtID0ge1xuICBnZXRDbGlwcGluZ1JlY3QsXG4gIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0LFxuICBpc0VsZW1lbnQsXG4gIGdldERpbWVuc2lvbnMsXG4gIGdldE9mZnNldFBhcmVudCxcbiAgZ2V0RG9jdW1lbnRFbGVtZW50LFxuICBnZXRTY2FsZSxcbiAgYXN5bmMgZ2V0RWxlbWVudFJlY3RzKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgcmVmZXJlbmNlLFxuICAgICAgZmxvYXRpbmcsXG4gICAgICBzdHJhdGVneVxuICAgIH0gPSBfcmVmO1xuICAgIGNvbnN0IGdldE9mZnNldFBhcmVudEZuID0gdGhpcy5nZXRPZmZzZXRQYXJlbnQgfHwgZ2V0T2Zmc2V0UGFyZW50O1xuICAgIGNvbnN0IGdldERpbWVuc2lvbnNGbiA9IHRoaXMuZ2V0RGltZW5zaW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgcmVmZXJlbmNlOiBnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudChyZWZlcmVuY2UsIGF3YWl0IGdldE9mZnNldFBhcmVudEZuKGZsb2F0aW5nKSwgc3RyYXRlZ3kpLFxuICAgICAgZmxvYXRpbmc6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgLi4uKGF3YWl0IGdldERpbWVuc2lvbnNGbihmbG9hdGluZykpXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgZ2V0Q2xpZW50UmVjdHM6IGVsZW1lbnQgPT4gQXJyYXkuZnJvbShlbGVtZW50LmdldENsaWVudFJlY3RzKCkpLFxuICBpc1JUTDogZWxlbWVudCA9PiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJ1xufTtcblxuLyoqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHdoZW4gbmVjZXNzYXJ5LlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW4gdGhlIGZsb2F0aW5nIGVsZW1lbnQgaXMgbW91bnRlZCBvbiB0aGUgRE9NIG9yXG4gKiB2aXNpYmxlIG9uIHRoZSBzY3JlZW4uXG4gKiBAcmV0dXJucyBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpc1xuICogcmVtb3ZlZCBmcm9tIHRoZSBET00gb3IgaGlkZGVuIGZyb20gdGhlIHNjcmVlbi5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvVXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGF1dG9VcGRhdGUocmVmZXJlbmNlLCBmbG9hdGluZywgdXBkYXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIGFuY2VzdG9yU2Nyb2xsID0gdHJ1ZSxcbiAgICBhbmNlc3RvclJlc2l6ZSA9IHRydWUsXG4gICAgZWxlbWVudFJlc2l6ZSA9IHRydWUsXG4gICAgYW5pbWF0aW9uRnJhbWUgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgYW5jZXN0b3JzID0gYW5jZXN0b3JTY3JvbGwgfHwgYW5jZXN0b3JSZXNpemUgPyBbLi4uKGlzRWxlbWVudChyZWZlcmVuY2UpID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGdldE92ZXJmbG93QW5jZXN0b3JzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSksIC4uLmdldE92ZXJmbG93QW5jZXN0b3JzKGZsb2F0aW5nKV0gOiBbXTtcbiAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgIC8vIGlnbm9yZXMgV2luZG93LCBjaGVja3MgZm9yIFtvYmplY3QgVmlzdWFsVmlld3BvcnRdXG4gICAgY29uc3QgaXNWaXN1YWxWaWV3cG9ydCA9ICFpc0VsZW1lbnQoYW5jZXN0b3IpICYmIGFuY2VzdG9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1YnKTtcbiAgICBpZiAoYW5jZXN0b3JTY3JvbGwgJiYgKGFuaW1hdGlvbkZyYW1lID8gaXNWaXN1YWxWaWV3cG9ydCA6IHRydWUpKSB7XG4gICAgICBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gIH0pO1xuICBsZXQgb2JzZXJ2ZXIgPSBudWxsO1xuICBpZiAoZWxlbWVudFJlc2l6ZSkge1xuICAgIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIGlzRWxlbWVudChyZWZlcmVuY2UpICYmICFhbmltYXRpb25GcmFtZSAmJiBvYnNlcnZlci5vYnNlcnZlKHJlZmVyZW5jZSk7XG4gICAgaWYgKCFpc0VsZW1lbnQocmVmZXJlbmNlKSAmJiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgJiYgIWFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCk7XG4gICAgfVxuICAgIG9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICB9XG4gIGxldCBmcmFtZUlkO1xuICBsZXQgcHJldlJlZlJlY3QgPSBhbmltYXRpb25GcmFtZSA/IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpIDogbnVsbDtcbiAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZnJhbWVMb29wKCk7XG4gIH1cbiAgZnVuY3Rpb24gZnJhbWVMb29wKCkge1xuICAgIGNvbnN0IG5leHRSZWZSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSk7XG4gICAgaWYgKHByZXZSZWZSZWN0ICYmIChuZXh0UmVmUmVjdC54ICE9PSBwcmV2UmVmUmVjdC54IHx8IG5leHRSZWZSZWN0LnkgIT09IHByZXZSZWZSZWN0LnkgfHwgbmV4dFJlZlJlY3Qud2lkdGggIT09IHByZXZSZWZSZWN0LndpZHRoIHx8IG5leHRSZWZSZWN0LmhlaWdodCAhPT0gcHJldlJlZlJlY3QuaGVpZ2h0KSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICAgIHByZXZSZWZSZWN0ID0gbmV4dFJlZlJlY3Q7XG4gICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZUxvb3ApO1xuICB9XG4gIHVwZGF0ZSgpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHZhciBfb2JzZXJ2ZXI7XG4gICAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlKTtcbiAgICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gICAgfSk7XG4gICAgKF9vYnNlcnZlciA9IG9ic2VydmVyKSA9PSBudWxsID8gdm9pZCAwIDogX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGB4YCBhbmQgYHlgIGNvb3JkaW5hdGVzIHRoYXQgd2lsbCBwbGFjZSB0aGUgZmxvYXRpbmcgZWxlbWVudFxuICogbmV4dCB0byBhIHJlZmVyZW5jZSBlbGVtZW50IHdoZW4gaXQgaXMgZ2l2ZW4gYSBjZXJ0YWluIENTUyBwb3NpdGlvbmluZ1xuICogc3RyYXRlZ3kuXG4gKi9cbmNvbnN0IGNvbXB1dGVQb3NpdGlvbiA9IChyZWZlcmVuY2UsIGZsb2F0aW5nLCBvcHRpb25zKSA9PiB7XG4gIC8vIFRoaXMgY2FjaGVzIHRoZSBleHBlbnNpdmUgYGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9yc2AgZnVuY3Rpb24gc28gdGhhdFxuICAvLyBtdWx0aXBsZSBsaWZlY3ljbGUgcmVzZXRzIHJlLXVzZSB0aGUgc2FtZSByZXN1bHQuIEl0IG9ubHkgbGl2ZXMgZm9yIGFcbiAgLy8gc2luZ2xlIGNhbGwuIElmIG90aGVyIGZ1bmN0aW9ucyBiZWNvbWUgZXhwZW5zaXZlLCB3ZSBjYW4gYWRkIHRoZW0gYXMgd2VsbC5cbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgcGxhdGZvcm0sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBwbGF0Zm9ybVdpdGhDYWNoZSA9IHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLnBsYXRmb3JtLFxuICAgIF9jOiBjYWNoZVxuICB9O1xuICByZXR1cm4gY29tcHV0ZVBvc2l0aW9uJDEocmVmZXJlbmNlLCBmbG9hdGluZywge1xuICAgIC4uLm1lcmdlZE9wdGlvbnMsXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtV2l0aENhY2hlXG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBoZWxwcyB1c2VycyBwcm92aWRlIGN1c3RvbSBjb25maWd1cmF0aW9uIGZvciBjb21wb25lbnQgaW50ZXJuYWxzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBjb25maWdPdmVycmlkZXMgPSBnbG9iYWxUaGlzW1wiY2FsY2l0ZUNvbXBvbmVudHNDb25maWdcIl07XG5jb25zdCBjb25maWcgPSB7XG4gIC8qKlxuICAgKiBXZSBhcHBseSBhIGN1c3RvbSBmaXggdG8gaW1wcm92ZSBwb3NpdGlvbmluZyBmb3Igbm9uLUNocm9taXVtIGJyb3dzZXJzLlxuICAgKiBUaGUgZml4IGNvbWVzIGF0IGEgcGVyZm9ybWFuY2UgY29zdCwgc28gcHJvdmlkZXMgdXNlcnMgYSB3YXkgdG8gb3B0LW91dCBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZmxvYXRpbmdVSU5vbkNocm9taXVtUG9zaXRpb25pbmdGaXg6IHRydWUsXG4gIC4uLmNvbmZpZ092ZXJyaWRlc1xufTtcblxuY29uc3QgZmxvYXRpbmdVSUJyb3dzZXJDaGVjayA9IHBhdGNoRmxvYXRpbmdVaUZvck5vbkNocm9taXVtQnJvd3NlcnMoKTtcbmFzeW5jIGZ1bmN0aW9uIHBhdGNoRmxvYXRpbmdVaUZvck5vbkNocm9taXVtQnJvd3NlcnMoKSB7XG4gIGZ1bmN0aW9uIGdldFVBRGF0YSgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG4gICAgY29uc3QgdWFEYXRhID0gZ2V0VUFEYXRhKCk7XG4gICAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgfVxuICBmdW5jdGlvbiBpc0Nocm9tZTEwOU9yQWJvdmUoKSB7XG4gICAgY29uc3QgdWFEYXRhID0gZ2V0VUFEYXRhKCk7XG4gICAgaWYgKHVhRGF0YT8uYnJhbmRzKSB7XG4gICAgICByZXR1cm4gISF1YURhdGEuYnJhbmRzLmZpbmQoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gKGJyYW5kID09PSBcIkdvb2dsZSBDaHJvbWVcIiB8fCBicmFuZCA9PT0gXCJDaHJvbWl1bVwiKSAmJiBOdW1iZXIodmVyc2lvbikgPj0gMTA5KTtcbiAgICB9XG4gICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5zcGxpdChcIiBcIikuZmluZCgodWEpID0+IHtcbiAgICAgIGNvbnN0IFticm93c2VyLCB2ZXJzaW9uXSA9IHVhLnNwbGl0KFwiL1wiKTtcbiAgICAgIHJldHVybiBicm93c2VyID09PSBcIkNocm9tZVwiICYmIHBhcnNlSW50KHZlcnNpb24pID49IDEwOTtcbiAgICB9KTtcbiAgfVxuICBpZiAoQnVpbGQuaXNCcm93c2VyICYmXG4gICAgY29uZmlnLmZsb2F0aW5nVUlOb25DaHJvbWl1bVBvc2l0aW9uaW5nRml4ICYmXG4gICAgLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG4gICAgKC9maXJlZm94fHNhZmFyaS9pLnRlc3QoZ2V0VUFTdHJpbmcoKSkgfHwgaXNDaHJvbWUxMDlPckFib3ZlKCkpKSB7XG4gICAgY29uc3QgeyBvZmZzZXRQYXJlbnQgfSA9IGF3YWl0IGltcG9ydCgnLi9jb21wb3NlZC1vZmZzZXQtcG9zaXRpb24uZXNtLmpzJyk7XG4gICAgY29uc3Qgb3JpZ2luYWxHZXRPZmZzZXRQYXJlbnQgPSBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQ7XG4gICAgcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IG9yaWdpbmFsR2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQsIG9mZnNldFBhcmVudCk7XG4gIH1cbn1cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICovXG5jb25zdCBwbGFjZW1lbnREYXRhQXR0cmlidXRlID0gXCJkYXRhLXBsYWNlbWVudFwiO1xuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKi9cbmNvbnN0IHJlcG9zaXRpb25EZWJvdW5jZVRpbWVvdXQgPSAxMDA7XG5jb25zdCBlZmZlY3RpdmVQbGFjZW1lbnRzID0gW1xuICBcInRvcFwiLFxuICBcImJvdHRvbVwiLFxuICBcInJpZ2h0XCIsXG4gIFwibGVmdFwiLFxuICBcInRvcC1zdGFydFwiLFxuICBcInRvcC1lbmRcIixcbiAgXCJib3R0b20tc3RhcnRcIixcbiAgXCJib3R0b20tZW5kXCIsXG4gIFwicmlnaHQtc3RhcnRcIixcbiAgXCJyaWdodC1lbmRcIixcbiAgXCJsZWZ0LXN0YXJ0XCIsXG4gIFwibGVmdC1lbmRcIlxuXTtcbmNvbnN0IGRlZmF1bHRNZW51UGxhY2VtZW50ID0gXCJib3R0b20tc3RhcnRcIjtcbmNvbnN0IEZsb2F0aW5nQ1NTID0ge1xuICBhbmltYXRpb246IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltXCIsXG4gIGFuaW1hdGlvbkFjdGl2ZTogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZVwiXG59O1xuZnVuY3Rpb24gZ2V0TWlkZGxld2FyZSh7IHBsYWNlbWVudCwgZmxpcERpc2FibGVkLCBmbGlwUGxhY2VtZW50cywgb2Zmc2V0RGlzdGFuY2UsIG9mZnNldFNraWRkaW5nLCBhcnJvd0VsLCB0eXBlIH0pIHtcbiAgY29uc3QgZGVmYXVsdE1pZGRsZXdhcmUgPSBbc2hpZnQoKSwgaGlkZSgpXTtcbiAgaWYgKHR5cGUgPT09IFwibWVudVwiKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmRlZmF1bHRNaWRkbGV3YXJlLFxuICAgICAgZmxpcCh7XG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogZmxpcFBsYWNlbWVudHMgfHwgW1widG9wLXN0YXJ0XCIsIFwidG9wXCIsIFwidG9wLWVuZFwiLCBcImJvdHRvbS1zdGFydFwiLCBcImJvdHRvbVwiLCBcImJvdHRvbS1lbmRcIl1cbiAgICAgIH0pXG4gICAgXTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJwb3BvdmVyXCIgfHwgdHlwZSA9PT0gXCJ0b29sdGlwXCIpIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gW1xuICAgICAgLi4uZGVmYXVsdE1pZGRsZXdhcmUsXG4gICAgICBvZmZzZXQoe1xuICAgICAgICBtYWluQXhpczogdHlwZW9mIG9mZnNldERpc3RhbmNlID09PSBcIm51bWJlclwiID8gb2Zmc2V0RGlzdGFuY2UgOiAwLFxuICAgICAgICBjcm9zc0F4aXM6IHR5cGVvZiBvZmZzZXRTa2lkZGluZyA9PT0gXCJudW1iZXJcIiA/IG9mZnNldFNraWRkaW5nIDogMFxuICAgICAgfSlcbiAgICBdO1xuICAgIGlmIChwbGFjZW1lbnQgPT09IFwiYXV0b1wiIHx8IHBsYWNlbWVudCA9PT0gXCJhdXRvLXN0YXJ0XCIgfHwgcGxhY2VtZW50ID09PSBcImF1dG8tZW5kXCIpIHtcbiAgICAgIG1pZGRsZXdhcmUucHVzaChhdXRvUGxhY2VtZW50KHsgYWxpZ25tZW50OiBwbGFjZW1lbnQgPT09IFwiYXV0by1zdGFydFwiID8gXCJzdGFydFwiIDogcGxhY2VtZW50ID09PSBcImF1dG8tZW5kXCIgPyBcImVuZFwiIDogbnVsbCB9KSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFmbGlwRGlzYWJsZWQpIHtcbiAgICAgIG1pZGRsZXdhcmUucHVzaChmbGlwKGZsaXBQbGFjZW1lbnRzID8geyBmYWxsYmFja1BsYWNlbWVudHM6IGZsaXBQbGFjZW1lbnRzIH0gOiB7fSkpO1xuICAgIH1cbiAgICBpZiAoYXJyb3dFbCkge1xuICAgICAgbWlkZGxld2FyZS5wdXNoKGFycm93KHtcbiAgICAgICAgZWxlbWVudDogYXJyb3dFbFxuICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWlkZGxld2FyZTtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMocGxhY2VtZW50cywgZWwpIHtcbiAgY29uc3QgZmlsdGVyZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoKHBsYWNlbWVudCkgPT4gZWZmZWN0aXZlUGxhY2VtZW50cy5pbmNsdWRlcyhwbGFjZW1lbnQpKTtcbiAgaWYgKGZpbHRlcmVkUGxhY2VtZW50cy5sZW5ndGggIT09IHBsYWNlbWVudHMubGVuZ3RoKSB7XG4gICAgY29uc29sZS53YXJuKGAke2VsLnRhZ05hbWV9OiBJbnZhbGlkIHZhbHVlIGZvdW5kIGluOiBmbGlwUGxhY2VtZW50cy4gVHJ5IGFueSBvZiB0aGVzZTogJHtlZmZlY3RpdmVQbGFjZW1lbnRzXG4gICAgICAubWFwKChwbGFjZW1lbnQpID0+IGBcIiR7cGxhY2VtZW50fVwiYClcbiAgICAgIC5qb2luKFwiLCBcIilcbiAgICAgIC50cmltKCl9YCwgeyBlbCB9KTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRQbGFjZW1lbnRzO1xufVxuZnVuY3Rpb24gZ2V0RWZmZWN0aXZlUGxhY2VtZW50KGZsb2F0aW5nRWwsIHBsYWNlbWVudCkge1xuICBjb25zdCBwbGFjZW1lbnRzID0gW1wibGVmdFwiLCBcInJpZ2h0XCJdO1xuICBpZiAoZ2V0RWxlbWVudERpcihmbG9hdGluZ0VsKSA9PT0gXCJydGxcIikge1xuICAgIHBsYWNlbWVudHMucmV2ZXJzZSgpO1xuICB9XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVhZGluZy9naSwgcGxhY2VtZW50c1swXSkucmVwbGFjZSgvdHJhaWxpbmcvZ2ksIHBsYWNlbWVudHNbMV0pO1xufVxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBtYW5hZ2UgYHJlcG9zaXRpb25gIGNhbGxzIGZvciBGbG9hdGluZ1VJQ29tcG9uZW50cyB0aGF0IHVzZSBgcG9zaXRpb25GbG9hdGluZ1VJLlxuICpcbiAqIE5vdGU6IHRoaXMgaXMgbm90IG5lZWRlZCBmb3IgY29tcG9uZW50cyB0aGF0IHVzZSBgY2FsY2l0ZS1wb3BvdmVyYC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIG9wdGlvbnMucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBvcHRpb25zLmZsb2F0aW5nRWxcbiAqIEBwYXJhbSBvcHRpb25zLm92ZXJsYXlQb3NpdGlvbmluZ1xuICogQHBhcmFtIG9wdGlvbnMucGxhY2VtZW50XG4gKiBAcGFyYW0gb3B0aW9ucy5mbGlwRGlzYWJsZWRcbiAqIEBwYXJhbSBvcHRpb25zLmZsaXBQbGFjZW1lbnRzXG4gKiBAcGFyYW0gb3B0aW9ucy5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIG9wdGlvbnMub2Zmc2V0U2tpZGRpbmdcbiAqIEBwYXJhbSBvcHRpb25zLmFycm93RWxcbiAqIEBwYXJhbSBvcHRpb25zLnR5cGVcbiAqIEBwYXJhbSBkZWxheWVkXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcG9zaXRpb24oY29tcG9uZW50LCBvcHRpb25zLCBkZWxheWVkID0gZmFsc2UpIHtcbiAgaWYgKCFjb21wb25lbnQub3Blbikge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gZGVsYXllZCA/IGRlYm91bmNlZFJlcG9zaXRpb24oY29tcG9uZW50LCBvcHRpb25zKSA6IHBvc2l0aW9uRmxvYXRpbmdVSShjb21wb25lbnQsIG9wdGlvbnMpO1xufVxuY29uc3QgZGVib3VuY2VkUmVwb3NpdGlvbiA9IGRlYm91bmNlKHBvc2l0aW9uRmxvYXRpbmdVSSwgcmVwb3NpdGlvbkRlYm91bmNlVGltZW91dCwge1xuICBsZWFkaW5nOiB0cnVlLFxuICBtYXhXYWl0OiByZXBvc2l0aW9uRGVib3VuY2VUaW1lb3V0XG59KTtcbmNvbnN0IEFSUk9XX0NTU19UUkFOU0ZPUk0gPSB7XG4gIHRvcDogXCJcIixcbiAgbGVmdDogXCJyb3RhdGUoLTkwZGVnKVwiLFxuICBib3R0b206IFwicm90YXRlKDE4MGRlZylcIixcbiAgcmlnaHQ6IFwicm90YXRlKDkwZGVnKVwiXG59O1xuLyoqXG4gKiBQb3NpdGlvbnMgdGhlIGZsb2F0aW5nIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICpcbiAqICoqTm90ZToqKiBleHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKlxuICogQHBhcmFtIHJvb3QwXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSByb290MC5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gcm9vdDAub3ZlcmxheVBvc2l0aW9uaW5nXG4gKiBAcGFyYW0gcm9vdDAucGxhY2VtZW50XG4gKiBAcGFyYW0gcm9vdDAuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gcm9vdDAuZmxpcFBsYWNlbWVudHNcbiAqIEBwYXJhbSByb290MC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIHJvb3QwLm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gcm9vdDAuYXJyb3dFbFxuICogQHBhcmFtIHJvb3QwLnR5cGVcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5yZWZlcmVuY2VFbFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLmZsb2F0aW5nRWxcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5vdmVybGF5UG9zaXRpb25pbmdcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5wbGFjZW1lbnRcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5mbGlwRGlzYWJsZWRcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5mbGlwUGxhY2VtZW50c1xuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLm9mZnNldERpc3RhbmNlXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwub2Zmc2V0U2tpZGRpbmdcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5hcnJvd0VsXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwudHlwZVxuICogQHBhcmFtIGNvbXBvbmVudC5yZWZlcmVuY2VFbFxuICogQHBhcmFtIGNvbXBvbmVudC5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gY29tcG9uZW50Lm92ZXJsYXlQb3NpdGlvbmluZ1xuICogQHBhcmFtIGNvbXBvbmVudC5wbGFjZW1lbnRcbiAqIEBwYXJhbSBjb21wb25lbnQuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gY29tcG9uZW50LmZsaXBQbGFjZW1lbnRzXG4gKiBAcGFyYW0gY29tcG9uZW50Lm9mZnNldERpc3RhbmNlXG4gKiBAcGFyYW0gY29tcG9uZW50Lm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gY29tcG9uZW50LmFycm93RWxcbiAqIEBwYXJhbSBjb21wb25lbnQudHlwZVxuICovXG5hc3luYyBmdW5jdGlvbiBwb3NpdGlvbkZsb2F0aW5nVUkoY29tcG9uZW50LCB7IHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCIsIHBsYWNlbWVudCwgZmxpcERpc2FibGVkLCBmbGlwUGxhY2VtZW50cywgb2Zmc2V0RGlzdGFuY2UsIG9mZnNldFNraWRkaW5nLCBhcnJvd0VsLCB0eXBlIH0pIHtcbiAgaWYgKCFyZWZlcmVuY2VFbCB8fCAhZmxvYXRpbmdFbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGF3YWl0IGZsb2F0aW5nVUlCcm93c2VyQ2hlY2s7XG4gIGNvbnN0IHsgeCwgeSwgcGxhY2VtZW50OiBlZmZlY3RpdmVQbGFjZW1lbnQsIHN0cmF0ZWd5OiBwb3NpdGlvbiwgbWlkZGxld2FyZURhdGEgfSA9IGF3YWl0IGNvbXB1dGVQb3NpdGlvbihyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwge1xuICAgIHN0cmF0ZWd5OiBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnQgPT09IFwiYXV0b1wiIHx8IHBsYWNlbWVudCA9PT0gXCJhdXRvLXN0YXJ0XCIgfHwgcGxhY2VtZW50ID09PSBcImF1dG8tZW5kXCJcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IGdldEVmZmVjdGl2ZVBsYWNlbWVudChmbG9hdGluZ0VsLCBwbGFjZW1lbnQpLFxuICAgIG1pZGRsZXdhcmU6IGdldE1pZGRsZXdhcmUoe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgZmxpcERpc2FibGVkLFxuICAgICAgZmxpcFBsYWNlbWVudHMsXG4gICAgICBvZmZzZXREaXN0YW5jZSxcbiAgICAgIG9mZnNldFNraWRkaW5nLFxuICAgICAgYXJyb3dFbCxcbiAgICAgIHR5cGVcbiAgICB9KVxuICB9KTtcbiAgaWYgKGFycm93RWwgJiYgbWlkZGxld2FyZURhdGEuYXJyb3cpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG1pZGRsZXdhcmVEYXRhLmFycm93O1xuICAgIGNvbnN0IHNpZGUgPSBlZmZlY3RpdmVQbGFjZW1lbnQuc3BsaXQoXCItXCIpWzBdO1xuICAgIGNvbnN0IGFsaWdubWVudCA9IHggIT0gbnVsbCA/IFwibGVmdFwiIDogXCJ0b3BcIjtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBBUlJPV19DU1NfVFJBTlNGT1JNW3NpZGVdO1xuICAgIGNvbnN0IHJlc2V0ID0geyBsZWZ0OiBcIlwiLCB0b3A6IFwiXCIsIGJvdHRvbTogXCJcIiwgcmlnaHQ6IFwiXCIgfTtcbiAgICBpZiAoXCJmbG9hdGluZ0xheW91dFwiIGluIGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmZsb2F0aW5nTGF5b3V0ID0gc2lkZSA9PT0gXCJsZWZ0XCIgfHwgc2lkZSA9PT0gXCJyaWdodFwiID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24oYXJyb3dFbC5zdHlsZSwge1xuICAgICAgLi4ucmVzZXQsXG4gICAgICBbYWxpZ25tZW50XTogYCR7YWxpZ25tZW50ID09IFwibGVmdFwiID8geCA6IHl9cHhgLFxuICAgICAgW3NpZGVdOiBcIjEwMCVcIixcbiAgICAgIHRyYW5zZm9ybVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHJlZmVyZW5jZUhpZGRlbiA9IG1pZGRsZXdhcmVEYXRhLmhpZGU/LnJlZmVyZW5jZUhpZGRlbjtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IHJlZmVyZW5jZUhpZGRlbiA/IFwiaGlkZGVuXCIgOiBudWxsO1xuICBjb25zdCBwb2ludGVyRXZlbnRzID0gdmlzaWJpbGl0eSA/IFwibm9uZVwiIDogbnVsbDtcbiAgZmxvYXRpbmdFbC5zZXRBdHRyaWJ1dGUocGxhY2VtZW50RGF0YUF0dHJpYnV0ZSwgZWZmZWN0aXZlUGxhY2VtZW50KTtcbiAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke01hdGgucm91bmQoeCl9cHgsJHtNYXRoLnJvdW5kKHkpfXB4KWA7XG4gIE9iamVjdC5hc3NpZ24oZmxvYXRpbmdFbC5zdHlsZSwge1xuICAgIHZpc2liaWxpdHksXG4gICAgcG9pbnRlckV2ZW50cyxcbiAgICBwb3NpdGlvbixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHRyYW5zZm9ybVxuICB9KTtcbn1cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBjbGVhbnVwTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBmbG9hdGluZyBlbGVtZW50IGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gcmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBmbG9hdGluZ0VsXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RGbG9hdGluZ1VJKGNvbXBvbmVudCwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwpIHtcbiAgaWYgKCFmbG9hdGluZ0VsIHx8ICFyZWZlcmVuY2VFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBkaXNjb25uZWN0RmxvYXRpbmdVSShjb21wb25lbnQsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsKTtcbiAgT2JqZWN0LmFzc2lnbihmbG9hdGluZ0VsLnN0eWxlLCB7XG4gICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAvLyBpbml0aWFsIHBvc2l0aW9uaW5nIGJhc2VkIG9uIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI2luaXRpYWwtbGF5b3V0XG4gICAgcG9zaXRpb246IGNvbXBvbmVudC5vdmVybGF5UG9zaXRpb25pbmcsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIlxuICB9KTtcbiAgY29uc3QgcnVuQXV0b1VwZGF0ZSA9IEJ1aWxkLmlzQnJvd3NlclxuICAgID8gYXV0b1VwZGF0ZVxuICAgIDogKF9yZWZFbCwgX2Zsb2F0aW5nRWwsIHVwZGF0ZUNhbGxiYWNrKSA9PiB7XG4gICAgICB1cGRhdGVDYWxsYmFjaygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLyogbm9vcCAqL1xuICAgICAgfTtcbiAgICB9O1xuICBjbGVhbnVwTWFwLnNldChjb21wb25lbnQsIHJ1bkF1dG9VcGRhdGUocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsICgpID0+IGNvbXBvbmVudC5yZXBvc2l0aW9uKCkpKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBmbG9hdGluZyBlbGVtZW50IGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gcmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBmbG9hdGluZ0VsXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKGNvbXBvbmVudCwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwpIHtcbiAgaWYgKCFmbG9hdGluZ0VsIHx8ICFyZWZlcmVuY2VFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjbGVhbnVwID0gY2xlYW51cE1hcC5nZXQoY29tcG9uZW50KTtcbiAgaWYgKGNsZWFudXApIHtcbiAgICBjbGVhbnVwKCk7XG4gIH1cbiAgY2xlYW51cE1hcC5kZWxldGUoY29tcG9uZW50KTtcbn1cbmNvbnN0IHZpc2libGVQb2ludGVyU2l6ZSA9IDQ7XG4vKipcbiAqIERlZmF1bHQgb2Zmc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBhd2F5IGZyb20gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICpcbiAqIEBkZWZhdWx0IDZcbiAqL1xuY29uc3QgZGVmYXVsdE9mZnNldERpc3RhbmNlID0gTWF0aC5jZWlsKE1hdGguaHlwb3QodmlzaWJsZVBvaW50ZXJTaXplLCB2aXNpYmxlUG9pbnRlclNpemUpKTtcblxuZXhwb3J0IHsgRmxvYXRpbmdDU1MgYXMgRiwgZGlzY29ubmVjdEZsb2F0aW5nVUkgYXMgYSwgZGVmYXVsdE9mZnNldERpc3RhbmNlIGFzIGIsIGNvbm5lY3RGbG9hdGluZ1VJIGFzIGMsIGRlZmF1bHRNZW51UGxhY2VtZW50IGFzIGQsIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyBhcyBmLCByZXBvc2l0aW9uIGFzIHIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByZWFkVGFzayB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChldmVudCkge1xuICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMudHJhbnNpdGlvbkVsKSB7XG4gICAgdGhpcy5vcGVuID8gdGhpcy5vbkJlZm9yZU9wZW4oKSA6IHRoaXMub25CZWZvcmVDbG9zZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09IHRoaXMub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy50cmFuc2l0aW9uRWwpIHtcbiAgICB0aGlzLm9wZW4gPyB0aGlzLm9uT3BlbigpIDogdGhpcy5vbkNsb3NlKCk7XG4gIH1cbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBnbG9iYWxseSBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiB0aGUgZ2l2ZW4gb3BlblRyYW5zaXRpb25Qcm9wLCB3aGljaCBpcyBpbXBvcnRlZCBhbmQgc2V0IGluIHRoZSBAV2F0Y2goXCJvcGVuXCIpLlxuICogVXNlZCB0byBlbWl0IChiZWZvcmUpb3Blbi9jbG9zZSBldmVudHMgYm90aCBmb3Igd2hlbiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIHByZXNlbnQgYW5kIHdoZW4gdGhlcmUgaXMgbm9uZSAodHJhbnNpdGlvbi1kdXJhdGlvbiBpcyBzZXQgdG8gMCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIG5vbk9wZW5DbG9zZUNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgY29uc3QgYWxsVHJhbnNpdGlvblByb3BzQXJyYXkgPSBnZXRDb21wdXRlZFN0eWxlKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpO1xuICAgICAgY29uc3Qgb3BlblRyYW5zaXRpb25Qcm9wSW5kZXggPSBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGNvbXBvbmVudC5vcGVuVHJhbnNpdGlvblByb3ApO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXlbb3BlblRyYW5zaXRpb25Qcm9wSW5kZXggKyAxXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IFwiMHNcIikge1xuICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICA/IGNvbXBvbmVudC5vbkJlZm9yZU9wZW4oKVxuICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICA6IGNvbXBvbmVudC5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgICAgICAgICA6IGNvbXBvbmVudC5vbkJlZm9yZUNsb3NlKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgICAgICAgICAgOiBjb21wb25lbnQub25DbG9zZSgpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGtlZXAgdHJhY2sgb2YgdHJhbnNpdGlvbiBsaXN0ZW5lcnMgb24gc2V0VHJhbnNpdGlvbkVsIGFuZCBjb25uZWN0ZWRDYWxsYmFjayBvbiBPcGVuQ2xvc2VDb21wb25lbnQgY29tcG9uZW50cy5cbiAqXG4gKiBGb3IgY29tcG9uZW50IHdoaWNoIGRvIG5vdCBoYXZlIG9wZW4gcHJvcCwgdXNlIGBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudGAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIGlmIChjb21wb25lbnQudHJhbnNpdGlvbkVsKSB7XG4gICAgY29uc3QgYm91bmRPblRyYW5zaXRpb25TdGFydCA9IHRyYW5zaXRpb25TdGFydC5iaW5kKGNvbXBvbmVudCk7XG4gICAgY29uc3QgYm91bmRPblRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kLmJpbmQoY29tcG9uZW50KTtcbiAgICBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuc2V0KGNvbXBvbmVudCwgW1xuICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbCxcbiAgICAgIGJvdW5kT25UcmFuc2l0aW9uU3RhcnQsXG4gICAgICBib3VuZE9uVHJhbnNpdGlvbkVuZFxuICAgIF0pO1xuICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBib3VuZE9uVHJhbnNpdGlvblN0YXJ0KTtcbiAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGJvdW5kT25UcmFuc2l0aW9uRW5kKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIHRyYW5zaXRpb24gbGlzdGVuZXJzIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIE9wZW5DbG9zZUNvbXBvbmVudCBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgW3RyYW5zaXRpb25FbCwgc3RhcnQsIGVuZF0gPSBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuZ2V0KGNvbXBvbmVudCk7XG4gIHRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIHN0YXJ0KTtcbiAgdHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCk7XG4gIGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5kZWxldGUoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IGFzIGQsIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50IGFzIG8gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHUgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgdiBhcyBnZXRTaGFkb3dSb290Tm9kZSwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgYiBhcyBkZWZhdWx0T2Zmc2V0RGlzdGFuY2UsIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIHIgYXMgcmVwb3NpdGlvbiwgRiBhcyBGbG9hdGluZ0NTUyB9IGZyb20gJy4vZmxvYXRpbmctdWkuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRiBhcyBGbG9hdGluZ0Fycm93IH0gZnJvbSAnLi9GbG9hdGluZ0Fycm93LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCJcbn07XG5jb25zdCBUT09MVElQX0RFTEFZX01TID0gNTAwO1xuY29uc3QgQVJJQV9ERVNDUklCRURfQlkgPSBcImFyaWEtZGVzY3JpYmVkYnlcIjtcblxuZnVuY3Rpb24gZ2V0RWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCh0b29sdGlwKSB7XG4gIGNvbnN0IHsgcmVmZXJlbmNlRWxlbWVudCB9ID0gdG9vbHRpcDtcbiAgcmV0dXJuICgodHlwZW9mIHJlZmVyZW5jZUVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyBxdWVyeUVsZW1lbnRSb290cyh0b29sdGlwLCB7IGlkOiByZWZlcmVuY2VFbGVtZW50IH0pIDogcmVmZXJlbmNlRWxlbWVudCkgfHxcbiAgICBudWxsKTtcbn1cblxuY2xhc3MgVG9vbHRpcE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgUHJvcGVydGllc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdGhpcy5yZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdGhpcy5ob3ZlclRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuaG92ZXJlZFRvb2x0aXAgPSBudWxsO1xuICAgIHRoaXMuY2xpY2tlZFRvb2x0aXAgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID0gMDtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnF1ZXJ5VG9vbHRpcCA9IChjb21wb3NlZFBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVnaXN0ZXJlZEVsZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmVnaXN0ZXJlZEVsZW1lbnQgPSBjb21wb3NlZFBhdGguZmluZCgocGF0aEVsKSA9PiByZWdpc3RlcmVkRWxlbWVudHMuaGFzKHBhdGhFbCkpO1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRFbGVtZW50cy5nZXQocmVnaXN0ZXJlZEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZVRvb2x0aXAgfSA9IHRoaXM7XG4gICAgICAgIGlmIChhY3RpdmVUb29sdGlwPy5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgICAgICAgIHRoaXMuY2xvc2VFeGlzdGluZ1Rvb2x0aXAoKTtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudChhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgcmVmZXJlbmNlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5wb2ludGVyTW92ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgY29uc3QgeyBhY3RpdmVUb29sdGlwIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaG92ZXJpbmdBY3RpdmVUb29sdGlwID0gYWN0aXZlVG9vbHRpcD8ub3BlbiAmJiBjb21wb3NlZFBhdGguaW5jbHVkZXMoYWN0aXZlVG9vbHRpcCk7XG4gICAgICBpZiAoaG92ZXJpbmdBY3RpdmVUb29sdGlwKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMucXVlcnlUb29sdGlwKGNvbXBvc2VkUGF0aCk7XG4gICAgICB0aGlzLmhvdmVyZWRUb29sdGlwID0gdG9vbHRpcDtcbiAgICAgIGlmICh0aGlzLmlzQ2xvc2FibGVDbGlja2VkVG9vbHRpcCh0b29sdGlwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gbnVsbDtcbiAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFRvb2x0aXAodG9vbHRpcCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFRvb2x0aXAoYWN0aXZlVG9vbHRpcCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5wb2ludGVyRG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xpY2tlZFRvb2x0aXAgPSB0aGlzLnF1ZXJ5VG9vbHRpcChldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gY2xpY2tlZFRvb2x0aXA7XG4gICAgICBpZiAoY2xpY2tlZFRvb2x0aXA/LmNsb3NlT25DbGljaykge1xuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoY2xpY2tlZFRvb2x0aXAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb2N1c0luSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeUZvY3VzZWRUb29sdGlwKGV2ZW50LCB0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNPdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5Rm9jdXNlZFRvb2x0aXAoZXZlbnQsIGZhbHNlKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlSG92ZXJlZFRvb2x0aXAgPSAodG9vbHRpcCwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMuaG92ZXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5ob3ZlclRpbWVvdXQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZUV4aXN0aW5nVG9vbHRpcCgpO1xuICAgICAgICBpZiAodG9vbHRpcCAhPT0gdGhpcy5ob3ZlcmVkVG9vbHRpcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodG9vbHRpcCwgdmFsdWUpO1xuICAgICAgfSwgVE9PTFRJUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVnaXN0ZXJFbGVtZW50KHJlZmVyZW5jZUVsLCB0b29sdGlwKSB7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50Kys7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudHMuc2V0KHJlZmVyZW5jZUVsLCB0b29sdGlwKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5nZXRSZWZlcmVuY2VFbFNoYWRvd1Jvb3ROb2RlKHJlZmVyZW5jZUVsKTtcbiAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgdGhpcy5yZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG4gIHVucmVnaXN0ZXJFbGVtZW50KHJlZmVyZW5jZUVsKSB7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuZ2V0UmVmZXJlbmNlRWxTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCk7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMudW5yZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy5kZWxldGUocmVmZXJlbmNlRWwpKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQtLTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbiAgYWRkU2hhZG93TGlzdGVuZXJzKHNoYWRvd1Jvb3QpIHtcbiAgICBzaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBzaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmZvY3VzT3V0SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIHJlbW92ZVNoYWRvd0xpc3RlbmVycyhzaGFkb3dSb290KSB7XG4gICAgc2hhZG93Um9vdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmZvY3VzSW5IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgc2hhZG93Um9vdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLnBvaW50ZXJEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLnBvaW50ZXJEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICBjbGVhckhvdmVyVGltZW91dCgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuaG92ZXJUaW1lb3V0KTtcbiAgICB0aGlzLmhvdmVyVGltZW91dCA9IG51bGw7XG4gIH1cbiAgY2xvc2VFeGlzdGluZ1Rvb2x0aXAoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVUb29sdGlwIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVUb29sdGlwPy5vcGVuKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoYWN0aXZlVG9vbHRpcCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICB0b2dnbGVGb2N1c2VkVG9vbHRpcCh0b29sdGlwLCB2YWx1ZSkge1xuICAgIHRoaXMuY2xvc2VFeGlzdGluZ1Rvb2x0aXAoKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVUb29sdGlwKHRvb2x0aXAsIHZhbHVlKTtcbiAgfVxuICB0b2dnbGVUb29sdGlwKHRvb2x0aXAsIHZhbHVlKSB7XG4gICAgdG9vbHRpcC5vcGVuID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRvb2x0aXAgPSB0b29sdGlwO1xuICAgIH1cbiAgfVxuICBxdWVyeUZvY3VzZWRUb29sdGlwKGV2ZW50LCB2YWx1ZSkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnF1ZXJ5VG9vbHRpcChldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgaWYgKCF0b29sdGlwIHx8IHRoaXMuaXNDbG9zYWJsZUNsaWNrZWRUb29sdGlwKHRvb2x0aXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlRm9jdXNlZFRvb2x0aXAodG9vbHRpcCwgdmFsdWUpO1xuICB9XG4gIGlzQ2xvc2FibGVDbGlja2VkVG9vbHRpcCh0b29sdGlwKSB7XG4gICAgcmV0dXJuIHRvb2x0aXA/LmNsb3NlT25DbGljayAmJiB0b29sdGlwID09PSB0aGlzLmNsaWNrZWRUb29sdGlwO1xuICB9XG4gIHJlZ2lzdGVyU2hhZG93Um9vdChzaGFkb3dSb290KSB7XG4gICAgY29uc3QgeyByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cyB9ID0gdGhpcztcbiAgICBjb25zdCBuZXdDb3VudCA9IChyZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cy5nZXQoc2hhZG93Um9vdCkgPz8gMCkgKyAxO1xuICAgIGlmIChuZXdDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5hZGRTaGFkb3dMaXN0ZW5lcnMoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzLnNldChzaGFkb3dSb290LCBuZXdDb3VudCk7XG4gIH1cbiAgdW5yZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCkge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMgfSA9IHRoaXM7XG4gICAgY29uc3QgbmV3Q291bnQgPSByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cy5nZXQoc2hhZG93Um9vdCkgLSAxO1xuICAgIGlmIChuZXdDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVTaGFkb3dMaXN0ZW5lcnMoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzLnNldChzaGFkb3dSb290LCBuZXdDb3VudCk7XG4gIH1cbiAgZ2V0UmVmZXJlbmNlRWxTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCkge1xuICAgIHJldHVybiByZWZlcmVuY2VFbCBpbnN0YW5jZW9mIEVsZW1lbnQgPyBnZXRTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCkgOiBudWxsO1xuICB9XG59XG5cbmNvbnN0IHRvb2x0aXBDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLXRvb2x0aXAtei1pbmRleCwgOTAxKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49dG9wXSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49bGVmdF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW2NhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXSl7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93e3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDpjYWxjKHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpICogLTEpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93X19zdHJva2V7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MC4yNXJlbTtwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWF4LWlubGluZS1zaXplOjIwcmVtO21heC1ibG9jay1zaXplOjIwcmVtO3RleHQtYWxpZ246c3RhcnR9LmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtib3JkZXItcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5hcnJvdzo6YmVmb3Jle291dGxpbmU6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfVwiO1xuXG5jb25zdCBtYW5hZ2VyID0gbmV3IFRvb2x0aXBNYW5hZ2VyKCk7XG5jb25zdCBUb29sdGlwID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUb29sdGlwQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVG9vbHRpcENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVG9vbHRpcEJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUb29sdGlwT3BlblwiLCA2KTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS10b29sdGlwLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5oYXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbkVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbCA9IGVsO1xuICAgICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50ID0gKHdhcm4gPSB0cnVlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMoKTtcbiAgICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IGdldEVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgICAgY29uc3QgeyBlbCwgcmVmZXJlbmNlRWxlbWVudCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICh3YXJuICYmIHJlZmVyZW5jZUVsZW1lbnQgJiYgIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2VsLnRhZ05hbWV9OiByZWZlcmVuY2UtZWxlbWVudCBpZCBcIiR7cmVmZXJlbmNlRWxlbWVudH1cIiB3YXMgbm90IGZvdW5kLmAsIHtcbiAgICAgICAgICBlbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkUmVmZXJlbmNlcygpO1xuICAgIH07XG4gICAgdGhpcy5nZXRJZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICB9O1xuICAgIHRoaXMuYWRkUmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcbiAgICAgIGlmIChcInNldEF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9ERVNDUklCRURfQlksIGlkKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIucmVnaXN0ZXJFbGVtZW50KGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgIH07XG4gICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChcInJlbW92ZUF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoQVJJQV9ERVNDUklCRURfQlkpO1xuICAgICAgfVxuICAgICAgbWFuYWdlci51bnJlZ2lzdGVyRWxlbWVudChlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VPbkNsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9mZnNldERpc3RhbmNlID0gZGVmYXVsdE9mZnNldERpc3RhbmNlO1xuICAgIHRoaXMub2Zmc2V0U2tpZGRpbmcgPSAwO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZsb2F0aW5nTGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICB9XG4gIG9mZnNldERpc3RhbmNlT2Zmc2V0SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgb2Zmc2V0U2tpZGRpbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH1cbiAgfVxuICBvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBwbGFjZW1lbnRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICByZWZlcmVuY2VFbGVtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCh0aGlzLmhhc0xvYWRlZCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBpZiAodGhpcy5yZWZlcmVuY2VFbGVtZW50ICYmICF0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB0aGlzLmhhc0xvYWRlZCA9IHRydWU7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5ZWRcbiAgICovXG4gIGFzeW5jIHJlcG9zaXRpb24oZGVsYXllZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBlbCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgcGxhY2VtZW50LCBvdmVybGF5UG9zaXRpb25pbmcsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVwb3NpdGlvbih0aGlzLCB7XG4gICAgICBmbG9hdGluZ0VsOiBlbCxcbiAgICAgIHJlZmVyZW5jZUVsOiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LFxuICAgICAgb3ZlcmxheVBvc2l0aW9uaW5nLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgb2Zmc2V0RGlzdGFuY2UsXG4gICAgICBvZmZzZXRTa2lkZGluZyxcbiAgICAgIGFycm93RWwsXG4gICAgICB0eXBlOiBcInRvb2x0aXBcIlxuICAgIH0sIGRlbGF5ZWQpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcE9wZW4uZW1pdCgpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcEJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBDbG9zZS5lbWl0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIGxhYmVsLCBvcGVuLCBmbG9hdGluZ0xheW91dCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ICYmIG9wZW47XG4gICAgY29uc3QgaGlkZGVuID0gIWRpc3BsYXllZDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oaGlkZGVuKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgaWQ6IHRoaXMuZ2V0SWQoKSwgcm9sZTogXCJ0b29sdGlwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25dOiB0cnVlLFxuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uQWN0aXZlXTogZGlzcGxheWVkXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0VHJhbnNpdGlvbkVsIH0sIGgoRmxvYXRpbmdBcnJvdywgeyBmbG9hdGluZ0xheW91dDogZmxvYXRpbmdMYXlvdXQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGFycm93RWwpID0+ICh0aGlzLmFycm93RWwgPSBhcnJvd0VsKSB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJvZmZzZXREaXN0YW5jZVwiOiBbXCJvZmZzZXREaXN0YW5jZU9mZnNldEhhbmRsZXJcIl0sXG4gICAgXCJvZmZzZXRTa2lkZGluZ1wiOiBbXCJvZmZzZXRTa2lkZGluZ0hhbmRsZXJcIl0sXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFtcIm92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXJcIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogW1wicGxhY2VtZW50SGFuZGxlclwiXSxcbiAgICBcInJlZmVyZW5jZUVsZW1lbnRcIjogW1wicmVmZXJlbmNlRWxlbWVudEhhbmRsZXJcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdG9vbHRpcENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10b29sdGlwXCIsIHtcbiAgICBcImNsb3NlT25DbGlja1wiOiBbNTE2LCBcImNsb3NlLW9uLWNsaWNrXCJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwib2Zmc2V0RGlzdGFuY2VcIjogWzUxNCwgXCJvZmZzZXQtZGlzdGFuY2VcIl0sXG4gICAgXCJvZmZzZXRTa2lkZGluZ1wiOiBbNTE0LCBcIm9mZnNldC1za2lkZGluZ1wiXSxcbiAgICBcIm9wZW5cIjogWzUxNl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogWzUxMywgXCJvdmVybGF5LXBvc2l0aW9uaW5nXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFs1MTNdLFxuICAgIFwicmVmZXJlbmNlRWxlbWVudFwiOiBbMSwgXCJyZWZlcmVuY2UtZWxlbWVudFwiXSxcbiAgICBcImVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnRcIjogWzMyXSxcbiAgICBcImZsb2F0aW5nTGF5b3V0XCI6IFszMl0sXG4gICAgXCJyZXBvc2l0aW9uXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10b29sdGlwXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRvb2x0aXBcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBUb29sdGlwKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBUb29sdGlwIGFzIFQsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9