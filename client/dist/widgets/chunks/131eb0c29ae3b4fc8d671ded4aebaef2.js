"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_views_2d_webglDeps_js"],{

/***/ "./node_modules/@arcgis/core/core/NestedMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/NestedMap.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedMap": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/webglDeps.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/webglDeps.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferObject": () => (/* reexport safe */ _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.BufferObject),
/* harmony export */   "FramebufferObject": () => (/* reexport safe */ _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.FramebufferObject),
/* harmony export */   "Program": () => (/* reexport safe */ _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__.Program),
/* harmony export */   "ProgramCache": () => (/* reexport safe */ _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__.ProgramCache),
/* harmony export */   "Renderbuffer": () => (/* reexport safe */ _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__.Renderbuffer),
/* harmony export */   "ShaderCompiler": () => (/* reexport safe */ _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__.ShaderCompiler),
/* harmony export */   "Texture": () => (/* reexport safe */ _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.Texture),
/* harmony export */   "VertexArrayObject": () => (/* reexport safe */ _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__.VertexArrayObject),
/* harmony export */   "createContextForView": () => (/* reexport safe */ _webgl_contextUtils_js__WEBPACK_IMPORTED_MODULE_10__.createContextForView),
/* harmony export */   "createProgram": () => (/* reexport safe */ _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_9__.createProgram),
/* harmony export */   "glslifyDefineMap": () => (/* reexport safe */ _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__.glslifyDefineMap)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/FramebufferObject.js */ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/Program.js */ "./node_modules/@arcgis/core/views/webgl/Program.js");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/ProgramCache.js */ "./node_modules/@arcgis/core/views/webgl/ProgramCache.js");
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/Renderbuffer.js */ "./node_modules/@arcgis/core/views/webgl/Renderbuffer.js");
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/ShaderCompiler.js */ "./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl/VertexArrayObject.js */ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl/programUtils.js */ "./node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../webgl/ProgramTemplate.js */ "./node_modules/@arcgis/core/views/webgl/ProgramTemplate.js");
/* harmony import */ var _webgl_contextUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../webgl/contextUtils.js */ "./node_modules/@arcgis/core/views/webgl/contextUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/



/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ProgramCache.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramCache": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/NestedMap.js */ "./node_modules/@arcgis/core/core/NestedMap.js");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Program.js */ "./node_modules/@arcgis/core/views/webgl/Program.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(r){this._rctx=r,this._store=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_0__.NestedMap}dispose(){this._store.forEach((t=>t.forEach((t=>t.dispose())))),this._store.clear()}acquire(t,e,s,o){const c=this._store.get(t,e);if(null!=c)return c.ref(),c;const h=new _Program_js__WEBPACK_IMPORTED_MODULE_1__.Program(this._rctx,t,e,s,o);return h.ref(),this._store.set(t,e,h),h}get test(){let t=0;return this._store.forEach((r=>r.forEach((r=>t+=r.hasGLName?2:1)))),{cachedWebGLObjects:t}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/programUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/programUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "glslifyDefineMap": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){const{options:n,value:o}=e;return"number"==typeof n[o]}function n(n){let o="";for(const t in n){const i=n[t];if("boolean"==typeof i)i&&(o+=`#define ${t}\n`);else if("number"==typeof i)o+=`#define ${t} ${i.toFixed()}\n`;else if("object"==typeof i)if(e(i)){const{value:e,options:n,namespace:f}=i,s=f?`${f}_`:"";for(const t in n)o+=`#define ${s}${t} ${n[t].toFixed()}\n`;o+=`#define ${t} ${s}${e}\n`}else{const e=i.options;let n=0;for(const t in e)o+=`#define ${e[t]} ${(n++).toFixed()}\n`;o+=`#define ${t} ${e[i.value]}\n`}}return o}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTMxZWIwYzI5YWUzYjRmYzhkNjcxZGVkNGFlYmFlZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxjQUFjLG9CQUFvQixRQUFRLG9CQUFvQixZQUFZLDRCQUE0QixTQUFTLGtDQUFrQyxXQUFXLDJCQUEyQixpREFBaUQsWUFBWSwyQkFBMkIsbURBQW1ELFdBQVcsc0NBQTZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbFo7QUFDQTtBQUNBO0FBQ0E7QUFDcWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pya0I7QUFDQTtBQUNBO0FBQ0E7QUFDMkYsUUFBUSxlQUFlLDZCQUE2Qix5REFBQyxDQUFDLFVBQVUsMEVBQTBFLGlCQUFpQiw2QkFBNkIsNEJBQTRCLFlBQVksZ0RBQUMscUJBQXFCLHdDQUF3QyxXQUFXLFFBQVEscUVBQXFFLHVCQUFpRDs7Ozs7Ozs7Ozs7Ozs7O0FDSmxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTSxrQkFBa0IsR0FBRyw0QkFBNEIsY0FBYyxTQUFTLGtCQUFrQixhQUFhLHlDQUF5QyxFQUFFLEtBQUsseUNBQXlDLEdBQUcsRUFBRSxZQUFZLElBQUksb0NBQW9DLE1BQU0sOEJBQThCLFVBQVUsRUFBRSxNQUFNLCtCQUErQixFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQWUsSUFBSSxjQUFjLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEtBQUssa0JBQWtCLFFBQVEsK0JBQStCLE1BQU0sRUFBRSxnQkFBZ0IsSUFBSSxjQUFjLEdBQUcsRUFBRSxXQUFXLEtBQUssU0FBdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9jb3JlL05lc3RlZE1hcC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS92aWV3cy8yZC93ZWJnbERlcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvdmlld3Mvd2ViZ2wvUHJvZ3JhbUNhY2hlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3ZpZXdzL3dlYmdsL3Byb2dyYW1VdGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuY2xhc3MgdHtjb25zdHJ1Y3Rvcigpe3RoaXMuX291dGVyPW5ldyBNYXB9Y2xlYXIoKXt0aGlzLl9vdXRlci5jbGVhcigpfWdldCBlbXB0eSgpe3JldHVybiAwPT09dGhpcy5fb3V0ZXIuc2l6ZX1nZXQodCxlKXtyZXR1cm4gdGhpcy5fb3V0ZXIuZ2V0KHQpPy5nZXQoZSl9c2V0KHQsZSxyKXtjb25zdCBzPXRoaXMuX291dGVyLmdldCh0KTtzP3Muc2V0KGUscik6dGhpcy5fb3V0ZXIuc2V0KHQsbmV3IE1hcChbW2Uscl1dKSl9ZGVsZXRlKHQsZSl7Y29uc3Qgcj10aGlzLl9vdXRlci5nZXQodCk7ciYmKHIuZGVsZXRlKGUpLDA9PT1yLnNpemUmJnRoaXMuX291dGVyLmRlbGV0ZSh0KSl9Zm9yRWFjaCh0KXt0aGlzLl9vdXRlci5mb3JFYWNoKCgoZSxyKT0+dChlLHIpKSl9fWV4cG9ydHt0IGFzIE5lc3RlZE1hcH07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuZXhwb3J0e0J1ZmZlck9iamVjdH1mcm9tXCIuLi93ZWJnbC9CdWZmZXJPYmplY3QuanNcIjtleHBvcnR7RnJhbWVidWZmZXJPYmplY3R9ZnJvbVwiLi4vd2ViZ2wvRnJhbWVidWZmZXJPYmplY3QuanNcIjtleHBvcnR7UHJvZ3JhbX1mcm9tXCIuLi93ZWJnbC9Qcm9ncmFtLmpzXCI7ZXhwb3J0e1Byb2dyYW1DYWNoZX1mcm9tXCIuLi93ZWJnbC9Qcm9ncmFtQ2FjaGUuanNcIjtleHBvcnR7UmVuZGVyYnVmZmVyfWZyb21cIi4uL3dlYmdsL1JlbmRlcmJ1ZmZlci5qc1wiO2V4cG9ydHtTaGFkZXJDb21waWxlcn1mcm9tXCIuLi93ZWJnbC9TaGFkZXJDb21waWxlci5qc1wiO2V4cG9ydHtUZXh0dXJlfWZyb21cIi4uL3dlYmdsL1RleHR1cmUuanNcIjtleHBvcnR7VmVydGV4QXJyYXlPYmplY3R9ZnJvbVwiLi4vd2ViZ2wvVmVydGV4QXJyYXlPYmplY3QuanNcIjtleHBvcnR7Z2xzbGlmeURlZmluZU1hcH1mcm9tXCIuLi93ZWJnbC9wcm9ncmFtVXRpbHMuanNcIjtleHBvcnR7Y3JlYXRlUHJvZ3JhbX1mcm9tXCIuLi93ZWJnbC9Qcm9ncmFtVGVtcGxhdGUuanNcIjtleHBvcnR7Y3JlYXRlQ29udGV4dEZvclZpZXd9ZnJvbVwiLi4vd2ViZ2wvY29udGV4dFV0aWxzLmpzXCI7XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e05lc3RlZE1hcCBhcyB0fWZyb21cIi4uLy4uL2NvcmUvTmVzdGVkTWFwLmpzXCI7aW1wb3J0e1Byb2dyYW0gYXMgcn1mcm9tXCIuL1Byb2dyYW0uanNcIjtjbGFzcyBle2NvbnN0cnVjdG9yKHIpe3RoaXMuX3JjdHg9cix0aGlzLl9zdG9yZT1uZXcgdH1kaXNwb3NlKCl7dGhpcy5fc3RvcmUuZm9yRWFjaCgodD0+dC5mb3JFYWNoKCh0PT50LmRpc3Bvc2UoKSkpKSksdGhpcy5fc3RvcmUuY2xlYXIoKX1hY3F1aXJlKHQsZSxzLG8pe2NvbnN0IGM9dGhpcy5fc3RvcmUuZ2V0KHQsZSk7aWYobnVsbCE9YylyZXR1cm4gYy5yZWYoKSxjO2NvbnN0IGg9bmV3IHIodGhpcy5fcmN0eCx0LGUscyxvKTtyZXR1cm4gaC5yZWYoKSx0aGlzLl9zdG9yZS5zZXQodCxlLGgpLGh9Z2V0IHRlc3QoKXtsZXQgdD0wO3JldHVybiB0aGlzLl9zdG9yZS5mb3JFYWNoKChyPT5yLmZvckVhY2goKHI9PnQrPXIuaGFzR0xOYW1lPzI6MSkpKSkse2NhY2hlZFdlYkdMT2JqZWN0czp0fX19ZXhwb3J0e2UgYXMgUHJvZ3JhbUNhY2hlfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5mdW5jdGlvbiBlKGUpe2NvbnN0e29wdGlvbnM6bix2YWx1ZTpvfT1lO3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBuW29dfWZ1bmN0aW9uIG4obil7bGV0IG89XCJcIjtmb3IoY29uc3QgdCBpbiBuKXtjb25zdCBpPW5bdF07aWYoXCJib29sZWFuXCI9PXR5cGVvZiBpKWkmJihvKz1gI2RlZmluZSAke3R9XFxuYCk7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgaSlvKz1gI2RlZmluZSAke3R9ICR7aS50b0ZpeGVkKCl9XFxuYDtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBpKWlmKGUoaSkpe2NvbnN0e3ZhbHVlOmUsb3B0aW9uczpuLG5hbWVzcGFjZTpmfT1pLHM9Zj9gJHtmfV9gOlwiXCI7Zm9yKGNvbnN0IHQgaW4gbilvKz1gI2RlZmluZSAke3N9JHt0fSAke25bdF0udG9GaXhlZCgpfVxcbmA7bys9YCNkZWZpbmUgJHt0fSAke3N9JHtlfVxcbmB9ZWxzZXtjb25zdCBlPWkub3B0aW9ucztsZXQgbj0wO2Zvcihjb25zdCB0IGluIGUpbys9YCNkZWZpbmUgJHtlW3RdfSAkeyhuKyspLnRvRml4ZWQoKX1cXG5gO28rPWAjZGVmaW5lICR7dH0gJHtlW2kudmFsdWVdfVxcbmB9fXJldHVybiBvfWV4cG9ydHtuIGFzIGdsc2xpZnlEZWZpbmVNYXB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9