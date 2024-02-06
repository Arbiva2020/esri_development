"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_symbols_support_previewWebStyleSymbol_js"],{

/***/ "./node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewWebStyleSymbol": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previewUtils.js */ "./node_modules/@arcgis/core/symbols/support/previewUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/symbols/support/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,{responseType:"image"}).then((t=>{const e=r(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchWebStyleSymbol)(e).then((t=>t?i(t,h):null))}function r(t,n){const h=!/\\.svg$/i.test(t.src)&&n&&n.disableUpsampling,r=Math.max(t.width,t.height);let s=n&&null!=n.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(n.maxSize):_previewUtils_js__WEBPACK_IMPORTED_MODULE_2__.SymbolSizeDefaults.maxSize;h&&(s=Math.min(r,s));const o="number"==typeof n?.size?n?.size:null,m=Math.min(s,null!=o?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(o):r);if(m!==r){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=m,t.height=m/e):(t.width=m*e,t.height=m)}return t}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDA2MGY1ZTg0NjA0NDAzZDc3MzlhNTBmNGJkY2ZmMzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwTCxrQkFBa0IscUNBQXFDLFNBQVMsdURBQUMsSUFBSSxxQkFBcUIsWUFBWSxvQkFBb0Isa0RBQWtELEdBQUcsOERBQUMsNkJBQTZCLGdCQUFnQixxRkFBcUYseUJBQXlCLDJEQUFDLFlBQVksd0VBQVMsQ0FBQyxxQkFBcUIsbUVBQW1FLDJEQUFDLE9BQU8sVUFBVSxxREFBcUQsdURBQXVELFNBQTRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvc3ltYm9scy9zdXBwb3J0L3ByZXZpZXdXZWJTdHlsZVN5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IHQgZnJvbVwiLi4vLi4vcmVxdWVzdC5qc1wiO2ltcG9ydHtwdDJweCBhcyBlfWZyb21cIi4uLy4uL2NvcmUvc2NyZWVuVXRpbHMuanNcIjtpbXBvcnR7U3ltYm9sU2l6ZURlZmF1bHRzIGFzIGl9ZnJvbVwiLi9wcmV2aWV3VXRpbHMuanNcIjtpbXBvcnR7ZmV0Y2hXZWJTdHlsZVN5bWJvbCBhcyBufWZyb21cIi4vdXRpbHMuanNcIjtmdW5jdGlvbiBoKGUsaSxoKXtjb25zdCBzPWUudGh1bWJuYWlsJiZlLnRodW1ibmFpbC51cmw7cmV0dXJuIHM/dChzLHtyZXNwb25zZVR5cGU6XCJpbWFnZVwifSkudGhlbigodD0+e2NvbnN0IGU9cih0LmRhdGEsaCk7cmV0dXJuIGgmJmgubm9kZT8oaC5ub2RlLmFwcGVuZENoaWxkKGUpLGgubm9kZSk6ZX0pKTpuKGUpLnRoZW4oKHQ9PnQ/aSh0LGgpOm51bGwpKX1mdW5jdGlvbiByKHQsbil7Y29uc3QgaD0hL1xcXFwuc3ZnJC9pLnRlc3QodC5zcmMpJiZuJiZuLmRpc2FibGVVcHNhbXBsaW5nLHI9TWF0aC5tYXgodC53aWR0aCx0LmhlaWdodCk7bGV0IHM9biYmbnVsbCE9bi5tYXhTaXplP2Uobi5tYXhTaXplKTppLm1heFNpemU7aCYmKHM9TWF0aC5taW4ocixzKSk7Y29uc3Qgbz1cIm51bWJlclwiPT10eXBlb2Ygbj8uc2l6ZT9uPy5zaXplOm51bGwsbT1NYXRoLm1pbihzLG51bGwhPW8/ZShvKTpyKTtpZihtIT09cil7Y29uc3QgZT0wIT09dC53aWR0aCYmMCE9PXQuaGVpZ2h0P3Qud2lkdGgvdC5oZWlnaHQ6MTtlPj0xPyh0LndpZHRoPW0sdC5oZWlnaHQ9bS9lKToodC53aWR0aD1tKmUsdC5oZWlnaHQ9bSl9cmV0dXJuIHR9ZXhwb3J0e2ggYXMgcHJldmlld1dlYlN0eWxlU3ltYm9sfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==