"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_portal_support_geometryServiceUtils_js"],{

/***/ "./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGeometryServiceURL": () => (/* binding */ n),
/* harmony export */   "projectGeometry": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/geometryService/project.js */ "./node_modules/@arcgis/core/rest/geometryService/project.js");
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(o=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"];s.geometries=[r],s.outSpatialReference=t;const m=await (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__.project)(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/project.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/project.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/rest/geometryService/utils.js");
/* harmony import */ var _support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/ProjectParameters.js */ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_1__.ensureType)(_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"]);async function n(o,m,n){m=i(m);const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(o),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(m.geometries[0]),f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(c,n);return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(u.path+"/project",f).then((({data:{geometries:r}})=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.decodeGeometries)(r,a,j)))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeGeometries": () => (/* binding */ o),
/* harmony export */   "encodeGeometries": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(t){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJsonType)(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryType)(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ProjectParameters.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map((r=>r.toJSON())),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.getJsonType)(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"geometries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{source:"outSR"}}})],i.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"transformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"transformForward",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ProjectParameters")],i);const a=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asValidOptions": () => (/* binding */ i),
/* harmony export */   "encode": () => (/* binding */ s),
/* harmony export */   "getToken": () => (/* binding */ l),
/* harmony export */   "parseUrl": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/apiKeyUtils.js */ "./node_modules/@arcgis/core/support/apiKeyUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function i(r,t){return t?{...t,query:{...r??{},...t.query}}:{query:r}}function f(r){return"string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)(r):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(r)}function s(r,t,o){const e={};for(const n in r){if("declaredClass"===n)continue;const i=r[n];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){e[n]=[];for(let r=0;r<i.length;r++)e[n][r]=s(i[r])}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(o&&o[n]);e[n]=t?r:JSON.stringify(r)}else e[n]=t?i:JSON.stringify(i);else e[n]=i}return e}function l(o,e){return o?(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__.supportsApiKey)(o)&&(e||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey)?e||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey:_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(o)?.token:null}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGM5OGJhOGUxNjEwZDM0ZWNmN2ViNDgxN2VjZWE1ZjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FOLDJCQUEyQixHQUFHLHFFQUFvQixRQUFRLHFFQUFvQixDQUFDLGdCQUFnQixzREFBQyxpREFBaUQsTUFBTSx5QkFBeUIsNkRBQVksbUJBQW1CLFNBQVMsRUFBRSx3Q0FBd0MsZ0JBQWdCLHNEQUFDLGlEQUFpRCxTQUFTLCtCQUErQiwyQkFBMkIsMEVBQUMsQ0FBQyx5Q0FBeUMsY0FBYyx5RUFBQyxNQUFNLFNBQVMsRUFBRSxpREFBaUQsVUFBVSxzREFBQyxnREFBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ozMEI7QUFDQTtBQUNBO0FBQ0E7QUFDZ1UsUUFBUSwrRUFBQyxDQUFDLHFFQUFDLEVBQUUsd0JBQXdCLE9BQU8sUUFBUSxtREFBQyxPQUFPLGtDQUFrQywyQkFBMkIsMkVBQUMsb0JBQW9CLHlEQUFDLE1BQU0sT0FBTyx1REFBQyw4QkFBOEIsTUFBTSxjQUFjLEdBQUcsMkRBQUMsVUFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxqQjtBQUNBO0FBQ0E7QUFDQTtBQUN1RixjQUFjLE9BQU8sYUFBYSwyRUFBQywwQ0FBMEMsa0JBQWtCLFFBQVEsK0VBQUMsSUFBSSxrQkFBa0Isc0JBQXNCLDhCQUE4QixHQUF1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaFU7QUFDQTtBQUNBO0FBQ0E7QUFDOGEsb0JBQW9CLDZEQUFDLENBQUMsZUFBZSw4R0FBOEcsU0FBUyx1RUFBdUUseU1BQXlNLGFBQWEsMkVBQUMsaUJBQWlCLG9MQUFvTCx1REFBQyxFQUFFLHNGQUFDLHFDQUFxQyx1REFBQyxFQUFFLHNGQUFDLEVBQUUsTUFBTSxNQUFNLGlCQUFpQiw2Q0FBNkMsdURBQUMsRUFBRSxzRkFBQyx5Q0FBeUMsdURBQUMsRUFBRSxzRkFBQyw2Q0FBNkMsdURBQUMsRUFBRSxzRkFBQyw0Q0FBNEMsVUFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm4xQztBQUNBO0FBQ0E7QUFDQTtBQUNtTixnQkFBZ0IsVUFBVSxZQUFZLFFBQVEsYUFBYSxFQUFFLFNBQVMsY0FBYyx5QkFBeUIsOERBQUMsSUFBSSxvREFBQyxJQUFJLGtCQUFrQixXQUFXLGtCQUFrQixnQ0FBZ0MsYUFBYSxzREFBc0QsUUFBUSxZQUFZLFdBQVcsb0JBQW9CLHdDQUF3QywwQkFBMEIsMkJBQTJCLGdDQUFnQyxZQUFZLFNBQVMsZ0JBQWdCLFNBQVMsdUVBQUMsU0FBUyx5REFBUSxLQUFLLHlEQUFRLENBQUMsMENBQUMsZ0NBQW9HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvcG9ydGFsL3N1cHBvcnQvZ2VvbWV0cnlTZXJ2aWNlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvcmVzdC9nZW9tZXRyeVNlcnZpY2UvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9yZXN0L2dlb21ldHJ5U2VydmljZS91dGlscy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9yZXN0L3N1cHBvcnQvUHJvamVjdFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvcmVzdC91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IHIgZnJvbVwiLi4vLi4vY29uZmlnLmpzXCI7aW1wb3J0IGUgZnJvbVwiLi4vLi4vY29yZS9FcnJvci5qc1wiO2ltcG9ydCB0IGZyb21cIi4uL1BvcnRhbC5qc1wiO2ltcG9ydHtwcm9qZWN0IGFzIG99ZnJvbVwiLi4vLi4vcmVzdC9nZW9tZXRyeVNlcnZpY2UvcHJvamVjdC5qc1wiO2ltcG9ydCBpIGZyb21cIi4uLy4uL3Jlc3Qvc3VwcG9ydC9Qcm9qZWN0UGFyYW1ldGVycy5qc1wiO2FzeW5jIGZ1bmN0aW9uIG4obz1udWxsLGkpe2lmKHIuZ2VvbWV0cnlTZXJ2aWNlVXJsKXJldHVybiByLmdlb21ldHJ5U2VydmljZVVybDtpZighbyl0aHJvdyBuZXcgZShcImludGVybmFsOmdlb21ldHJ5LXNlcnZpY2UtdXJsLW5vdC1jb25maWd1cmVkXCIpO2xldCBuO249XCJwb3J0YWxcImluIG8/by5wb3J0YWx8fHQuZ2V0RGVmYXVsdCgpOm8sYXdhaXQgbi5sb2FkKHtzaWduYWw6aX0pO2NvbnN0IGE9bi5oZWxwZXJTZXJ2aWNlcz8uZ2VvbWV0cnk/LnVybDtpZighYSl0aHJvdyBuZXcgZShcImludGVybmFsOmdlb21ldHJ5LXNlcnZpY2UtdXJsLW5vdC1jb25maWd1cmVkXCIpO3JldHVybiBhfWFzeW5jIGZ1bmN0aW9uIGEocix0LGE9bnVsbCxsKXtjb25zdCBjPWF3YWl0IG4oYSxsKSxzPW5ldyBpO3MuZ2VvbWV0cmllcz1bcl0scy5vdXRTcGF0aWFsUmVmZXJlbmNlPXQ7Y29uc3QgbT1hd2FpdCBvKGMscyx7c2lnbmFsOmx9KTtpZihtJiZBcnJheS5pc0FycmF5KG0pJiYxPT09bS5sZW5ndGgpcmV0dXJuIG1bMF07dGhyb3cgbmV3IGUoXCJpbnRlcm5hbDpnZW9tZXRyeS1zZXJ2aWNlLXByb2plY3Rpb24tZmFpbGVkXCIpfWV4cG9ydHtuIGFzIGdldEdlb21ldHJ5U2VydmljZVVSTCxhIGFzIHByb2plY3RHZW9tZXRyeX07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IHIgZnJvbVwiLi4vLi4vcmVxdWVzdC5qc1wiO2ltcG9ydHtlbnN1cmVUeXBlIGFzIG99ZnJvbVwiLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZW5zdXJlVHlwZS5qc1wiO2ltcG9ydHtnZXRKc29uVHlwZSBhcyB0fWZyb21cIi4uLy4uL2dlb21ldHJ5L3N1cHBvcnQvanNvblV0aWxzLmpzXCI7aW1wb3J0e3BhcnNlVXJsIGFzIGUsYXNWYWxpZE9wdGlvbnMgYXMgc31mcm9tXCIuLi91dGlscy5qc1wiO2ltcG9ydHtkZWNvZGVHZW9tZXRyaWVzIGFzIHB9ZnJvbVwiLi91dGlscy5qc1wiO2ltcG9ydCBtIGZyb21cIi4uL3N1cHBvcnQvUHJvamVjdFBhcmFtZXRlcnMuanNcIjtjb25zdCBpPW8obSk7YXN5bmMgZnVuY3Rpb24gbihvLG0sbil7bT1pKG0pO2NvbnN0IHU9ZShvKSxjPXsuLi51LnF1ZXJ5LGY6XCJqc29uXCIsLi4ubS50b0pTT04oKX0saj1tLm91dFNwYXRpYWxSZWZlcmVuY2UsYT10KG0uZ2VvbWV0cmllc1swXSksZj1zKGMsbik7cmV0dXJuIHIodS5wYXRoK1wiL3Byb2plY3RcIixmKS50aGVuKCgoe2RhdGE6e2dlb21ldHJpZXM6cn19KT0+cChyLGEsaikpKX1leHBvcnR7biBhcyBwcm9qZWN0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7Z2V0SnNvblR5cGUgYXMgZSxnZXRHZW9tZXRyeVR5cGUgYXMgdH1mcm9tXCIuLi8uLi9nZW9tZXRyeS9zdXBwb3J0L2pzb25VdGlscy5qc1wiO2Z1bmN0aW9uIHIodCl7cmV0dXJue2dlb21ldHJ5VHlwZTplKHRbMF0pLGdlb21ldHJpZXM6dC5tYXAoKGU9PmUudG9KU09OKCkpKX19ZnVuY3Rpb24gbyhlLHIsbyl7Y29uc3Qgbj10KHIpO3JldHVybiBlLm1hcCgoZT0+e2NvbnN0IHQ9bi5mcm9tSlNPTihlKTtyZXR1cm4gdC5zcGF0aWFsUmVmZXJlbmNlPW8sdH0pKX1leHBvcnR7byBhcyBkZWNvZGVHZW9tZXRyaWVzLHIgYXMgZW5jb2RlR2VvbWV0cmllc307XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgcn1mcm9tXCIuLi8uLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e0pTT05TdXBwb3J0IGFzIHR9ZnJvbVwiLi4vLi4vY29yZS9KU09OU3VwcG9ydC5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBvfWZyb21cIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uLy4uL2NvcmUvYXJyYXlVdGlscy5qc1wiO2ltcG9ydFwiLi4vLi4vY29yZS9oYXMuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgZX1mcm9tXCIuLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7aW1wb3J0e2dldEpzb25UeXBlIGFzIHN9ZnJvbVwiLi4vLi4vZ2VvbWV0cnkvc3VwcG9ydC9qc29uVXRpbHMuanNcIjtsZXQgaT1jbGFzcyBleHRlbmRzIHR7Y29uc3RydWN0b3Iocil7c3VwZXIociksdGhpcy5nZW9tZXRyaWVzPVtdLHRoaXMub3V0U3BhdGlhbFJlZmVyZW5jZT1udWxsLHRoaXMudHJhbnNmb3JtYXRpb249bnVsbCx0aGlzLnRyYW5zZm9ybUZvcndhcmQ9bnVsbH10b0pTT04oKXtjb25zdCByPXRoaXMuZ2VvbWV0cmllcy5tYXAoKHI9PnIudG9KU09OKCkpKSx0PXRoaXMuZ2VvbWV0cmllc1swXSxvPXt9O3JldHVybiBvLm91dFNSPXRoaXMub3V0U3BhdGlhbFJlZmVyZW5jZS53a2lkfHxKU09OLnN0cmluZ2lmeSh0aGlzLm91dFNwYXRpYWxSZWZlcmVuY2UudG9KU09OKCkpLG8uaW5TUj10LnNwYXRpYWxSZWZlcmVuY2Uud2tpZHx8SlNPTi5zdHJpbmdpZnkodC5zcGF0aWFsUmVmZXJlbmNlLnRvSlNPTigpKSxvLmdlb21ldHJpZXM9SlNPTi5zdHJpbmdpZnkoe2dlb21ldHJ5VHlwZTpzKHQpLGdlb21ldHJpZXM6cn0pLHRoaXMudHJhbnNmb3JtYXRpb24mJihvLnRyYW5zZm9ybWF0aW9uPXRoaXMudHJhbnNmb3JtYXRpb24ud2tpZHx8SlNPTi5zdHJpbmdpZnkodGhpcy50cmFuc2Zvcm1hdGlvbikpLG51bGwhPXRoaXMudHJhbnNmb3JtRm9yd2FyZCYmKG8udHJhbnNmb3JtRm9yd2FyZD10aGlzLnRyYW5zZm9ybUZvcndhcmQpLG99fTtyKFtvKCldLGkucHJvdG90eXBlLFwiZ2VvbWV0cmllc1wiLHZvaWQgMCkscihbbyh7anNvbjp7cmVhZDp7c291cmNlOlwib3V0U1JcIn19fSldLGkucHJvdG90eXBlLFwib3V0U3BhdGlhbFJlZmVyZW5jZVwiLHZvaWQgMCkscihbbygpXSxpLnByb3RvdHlwZSxcInRyYW5zZm9ybWF0aW9uXCIsdm9pZCAwKSxyKFtvKCldLGkucHJvdG90eXBlLFwidHJhbnNmb3JtRm9yd2FyZFwiLHZvaWQgMCksaT1yKFtlKFwiZXNyaS5yZXN0LnN1cHBvcnQuUHJvamVjdFBhcmFtZXRlcnNcIildLGkpO2NvbnN0IGE9aTtleHBvcnR7YSBhcyBkZWZhdWx0fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnQgciBmcm9tXCIuLi9jb25maWcuanNcIjtpbXBvcnR7aWQgYXMgdH1mcm9tXCIuLi9rZXJuZWwuanNcIjtpbXBvcnR7Y2xvbmUgYXMgb31mcm9tXCIuLi9jb3JlL2xhbmcuanNcIjtpbXBvcnR7dXJsVG9PYmplY3QgYXMgZX1mcm9tXCIuLi9jb3JlL3VybFV0aWxzLmpzXCI7aW1wb3J0e3N1cHBvcnRzQXBpS2V5IGFzIG59ZnJvbVwiLi4vc3VwcG9ydC9hcGlLZXlVdGlscy5qc1wiO2Z1bmN0aW9uIGkocix0KXtyZXR1cm4gdD97Li4udCxxdWVyeTp7Li4ucj8/e30sLi4udC5xdWVyeX19OntxdWVyeTpyfX1mdW5jdGlvbiBmKHIpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiByP2Uocik6byhyKX1mdW5jdGlvbiBzKHIsdCxvKXtjb25zdCBlPXt9O2Zvcihjb25zdCBuIGluIHIpe2lmKFwiZGVjbGFyZWRDbGFzc1wiPT09biljb250aW51ZTtjb25zdCBpPXJbbl07aWYobnVsbCE9aSYmXCJmdW5jdGlvblwiIT10eXBlb2YgaSlpZihBcnJheS5pc0FycmF5KGkpKXtlW25dPVtdO2ZvcihsZXQgcj0wO3I8aS5sZW5ndGg7cisrKWVbbl1bcl09cyhpW3JdKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBpKWlmKGkudG9KU09OKXtjb25zdCByPWkudG9KU09OKG8mJm9bbl0pO2Vbbl09dD9yOkpTT04uc3RyaW5naWZ5KHIpfWVsc2UgZVtuXT10P2k6SlNPTi5zdHJpbmdpZnkoaSk7ZWxzZSBlW25dPWl9cmV0dXJuIGV9ZnVuY3Rpb24gbChvLGUpe3JldHVybiBvP24obykmJihlfHxyLmFwaUtleSk/ZXx8ci5hcGlLZXk6dD8uZmluZENyZWRlbnRpYWwobyk/LnRva2VuOm51bGx9ZXhwb3J0e2kgYXMgYXNWYWxpZE9wdGlvbnMscyBhcyBlbmNvZGUsbCBhcyBnZXRUb2tlbixmIGFzIHBhcnNlVXJsfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==