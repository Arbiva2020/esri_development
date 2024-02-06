"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_views_2d_layers_OGCFeatureLayerView2D_js"],{

/***/ "./node_modules/@arcgis/core/views/2d/layers/OGCFeatureLayerView2D.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/OGCFeatureLayerView2D.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeatureLayerView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js");
/* harmony import */ var _layers_OGCFeatureLayerView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layers/OGCFeatureLayerView.js */ "./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let t=class extends((0,_layers_OGCFeatureLayerView_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_7__["default"])){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],t.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({readOnly:!0})],t.prototype,"availableFields",null),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.views.layers.OGCFeatureLayerView")],t),t};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTNjOGI2YzYxMzdmMWI2MjAwYzY1YzE5ZTUwNDgzNWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQytZLG9CQUFvQiwwRUFBQyxDQUFDLDhEQUFDLEdBQUcsNEJBQTRCLHVEQUF1RCxFQUFFLHVEQUFDLEVBQUUsc0ZBQUMsbURBQW1ELFVBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKcGxCO0FBQ0E7QUFDQTtBQUNBO0FBQ29ULFlBQVksc0JBQXNCLHNCQUFzQix3REFBd0QsT0FBTyx1REFBQyxFQUFFLHNGQUFDLGdDQUFnQyx1REFBQyxFQUFFLHNGQUFDLEVBQUUsWUFBWSx5Q0FBeUMsdURBQUMsRUFBRSxzRkFBQyxpREFBc0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS92aWV3cy8yZC9sYXllcnMvT0dDRmVhdHVyZUxheWVyVmlldzJELmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3ZpZXdzL2xheWVycy9PR0NGZWF0dXJlTGF5ZXJWaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyByfWZyb21cIi4uLy4uLy4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnRcIi4uLy4uLy4uL2NvcmUvTG9nZ2VyLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL2FycmF5VXRpbHMuanNcIjtpbXBvcnRcIi4uLy4uLy4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL0Vycm9yLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIGV9ZnJvbVwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2ltcG9ydCBzIGZyb21cIi4vRmVhdHVyZUxheWVyVmlldzJELmpzXCI7aW1wb3J0IG8gZnJvbVwiLi4vLi4vbGF5ZXJzL09HQ0ZlYXR1cmVMYXllclZpZXcuanNcIjtsZXQgdD1jbGFzcyBleHRlbmRzKG8ocykpe3N1cHBvcnRzU3BhdGlhbFJlZmVyZW5jZShyKXtyZXR1cm4gdGhpcy5sYXllci5zZXJ2aWNlU3VwcG9ydHNTcGF0aWFsUmVmZXJlbmNlKHIpfX07dD1yKFtlKFwiZXNyaS52aWV3cy4yZC5sYXllcnMuT0dDRmVhdHVyZUxheWVyVmlldzJEXCIpXSx0KTtjb25zdCBhPXQ7ZXhwb3J0e2EgYXMgZGVmYXVsdH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgZX1mcm9tXCIuLi8uLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIHJ9ZnJvbVwiLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZW5zdXJlVHlwZS5qc1wiO2ltcG9ydFwiLi4vLi4vY29yZS9hcnJheVV0aWxzLmpzXCI7aW1wb3J0XCIuLi8uLi9jb3JlL2hhcy5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyBzfWZyb21cIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjtjb25zdCBvPW89PntsZXQgdD1jbGFzcyBleHRlbmRzIG97Z2V0IGF2YWlsYWJsZUZpZWxkcygpe3JldHVybiB0aGlzLmxheWVyLmZpZWxkc0luZGV4LmZpZWxkcy5tYXAoKGU9PmUubmFtZSkpfX07cmV0dXJuIGUoW3IoKV0sdC5wcm90b3R5cGUsXCJsYXllclwiLHZvaWQgMCksZShbcih7cmVhZE9ubHk6ITB9KV0sdC5wcm90b3R5cGUsXCJhdmFpbGFibGVGaWVsZHNcIixudWxsKSx0PWUoW3MoXCJlc3JpLnZpZXdzLmxheWVycy5PR0NGZWF0dXJlTGF5ZXJWaWV3XCIpXSx0KSx0fTtleHBvcnR7byBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==