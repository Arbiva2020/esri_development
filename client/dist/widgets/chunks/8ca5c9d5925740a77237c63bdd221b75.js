"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_chunks_vec2f64_js-node_modules_arcgis_core_views_3d_webgl-engine_lib-89e247"],{

/***/ "./node_modules/@arcgis/core/chunks/vec2f64.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec2f64.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ i),
/* harmony export */   "U": () => (/* binding */ l),
/* harmony export */   "Z": () => (/* binding */ f),
/* harmony export */   "a": () => (/* binding */ n),
/* harmony export */   "b": () => (/* binding */ e),
/* harmony export */   "c": () => (/* binding */ o),
/* harmony export */   "d": () => (/* binding */ t),
/* harmony export */   "e": () => (/* binding */ c),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "g": () => (/* binding */ _),
/* harmony export */   "o": () => (/* binding */ a),
/* harmony export */   "u": () => (/* binding */ s),
/* harmony export */   "v": () => (/* binding */ O),
/* harmony export */   "z": () => (/* binding */ u)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(){return[0,0]}function t(n){return[n[0],n[1]]}function r(n,t){return[n,t]}function e(t){const r=n(),e=Math.min(2,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function o(n,t){return new Float64Array(n,t,2)}function u(){return n()}function a(){return r(1,1)}function s(){return r(1,0)}function c(){return r(0,1)}const f=u(),i=a(),l=s(),_=c(),O=Object.freeze(Object.defineProperty({__proto__:null,ONES:i,UNIT_X:l,UNIT_Y:_,ZEROS:f,clone:t,create:n,createView:o,fromArray:e,fromValues:r,ones:a,unitX:s,unitY:c,zeros:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packInterleavedBuffer": () => (/* binding */ u),
/* harmony export */   "unpackInterleavedBuffer": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u(r,u){return u.push(r.buffer),{buffer:r.buffer,layout:new _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__.PackedLayout(r.layout)}}function t(e){return new _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__.InterleavedLayout(e.layout).createView(e.buffer)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/workerHelper.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferLayouts.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js");
/* harmony import */ var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edgePreprocessing.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js");
/* harmony import */ var _edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edgeProcessing.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=(0,_edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__.extract)(t),r=[t.data.buffer];return{result:l(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const s=c(t),i=(0,_edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__.extractEdgeInformation)(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=(0,_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_2__.extractEdges)(i,p,g),o=[];return{result:(0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_0__.packInterleavedBuffer)(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const s=c(t),i=(0,_edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__.extractEdgeInformation)(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=(0,_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_2__.extractEdges)(i,f,g),o=[];return{result:(0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_0__.packInterleavedBuffer)(a.regular.instancesData,o),transferList:o}}}function c(e){return{data:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__.EdgeInputBufferLayout.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:(0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_0__.packInterleavedBuffer)(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_0__.packInterleavedBuffer)(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class u{allocate(e){return _edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__.extractEdgeLocationsLayout.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}}class d{allocate(e){return _edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__.extractComponentsEdgeLocationsLayout.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}}const f=new u,p=new d,g={allocate:()=>null,write:()=>{},trim:()=>null};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGNhNWM5ZDU5MjU3NDBhNzcyMzdjNjNiZGQyMjFiNzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWSxjQUFjLGtCQUFrQixnQkFBZ0IsWUFBWSxjQUFjLG1DQUFtQyxZQUFZLElBQUksY0FBYyxTQUFTLGdCQUFnQiwrQkFBK0IsYUFBYSxXQUFXLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLHFFQUFxRSxzSUFBc0kscUJBQXFCLGVBQWUsR0FBNkc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmpxQjtBQUNBO0FBQ0E7QUFDQTtBQUM2RSxnQkFBZ0IseUJBQXlCLDJCQUEyQiwrREFBQyxZQUFZLGNBQWMsV0FBVyxvRUFBQyxnQ0FBZ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeFI7QUFDQTtBQUNBO0FBQ0E7QUFDcVYsUUFBUSxpQkFBaUIsZUFBZSwyREFBQyxzQkFBc0IsT0FBTyw4QkFBOEIsd0NBQXdDLGVBQWUsMEVBQUMsdURBQXVELG1FQUFDLGFBQWEsT0FBTyxPQUFPLHNGQUFDLDRDQUE0Qyw4QkFBOEIsZUFBZSwwRUFBQyx1REFBdUQsbUVBQUMsYUFBYSxPQUFPLE9BQU8sc0ZBQUMsNkNBQTZDLGNBQWMsT0FBTyxLQUFLLCtFQUFZLG9QQUFvUCxnQkFBZ0IscUZBQXFGLE9BQU8sU0FBUyxjQUFjLHNGQUFDLHFDQUFxQywwQ0FBMEMsYUFBYSxjQUFjLHNGQUFDLHdDQUF3Qyw2Q0FBNkMsd0NBQXdDLFFBQVEsWUFBWSxPQUFPLHVGQUFjLElBQUksVUFBVSxvQkFBb0IsYUFBYSxxRUFBcUUsUUFBUSxZQUFZLE9BQU8saUdBQWMsSUFBSSxVQUFVLG9CQUFvQixhQUFhLDhHQUE4Ryx5QkFBeUIsOEJBQThCLGdCQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2NodW5rcy92ZWMyZjY0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3ZpZXdzLzNkL3N1cHBvcnQvYnVmZmVyL3dvcmtlckhlbHBlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS92aWV3cy8zZC93ZWJnbC1lbmdpbmUvbGliL2VkZ2VSZW5kZXJpbmcvRWRnZVByb2Nlc3NpbmdXb3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmZ1bmN0aW9uIG4oKXtyZXR1cm5bMCwwXX1mdW5jdGlvbiB0KG4pe3JldHVybltuWzBdLG5bMV1dfWZ1bmN0aW9uIHIobix0KXtyZXR1cm5bbix0XX1mdW5jdGlvbiBlKHQpe2NvbnN0IHI9bigpLGU9TWF0aC5taW4oMix0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjxlOysrbilyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gbyhuLHQpe3JldHVybiBuZXcgRmxvYXQ2NEFycmF5KG4sdCwyKX1mdW5jdGlvbiB1KCl7cmV0dXJuIG4oKX1mdW5jdGlvbiBhKCl7cmV0dXJuIHIoMSwxKX1mdW5jdGlvbiBzKCl7cmV0dXJuIHIoMSwwKX1mdW5jdGlvbiBjKCl7cmV0dXJuIHIoMCwxKX1jb25zdCBmPXUoKSxpPWEoKSxsPXMoKSxfPWMoKSxPPU9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnR5KHtfX3Byb3RvX186bnVsbCxPTkVTOmksVU5JVF9YOmwsVU5JVF9ZOl8sWkVST1M6ZixjbG9uZTp0LGNyZWF0ZTpuLGNyZWF0ZVZpZXc6byxmcm9tQXJyYXk6ZSxmcm9tVmFsdWVzOnIsb25lczphLHVuaXRYOnMsdW5pdFk6Yyx6ZXJvczp1fSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSk7ZXhwb3J0e2kgYXMgTyxsIGFzIFUsZiBhcyBaLG4gYXMgYSxlIGFzIGIsbyBhcyBjLHQgYXMgZCxjIGFzIGUsciBhcyBmLF8gYXMgZyxhIGFzIG8scyBhcyB1LE8gYXMgdix1IGFzIHp9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtQYWNrZWRMYXlvdXQgYXMgZSxJbnRlcmxlYXZlZExheW91dCBhcyByfWZyb21cIi4vSW50ZXJsZWF2ZWRMYXlvdXQuanNcIjtmdW5jdGlvbiB1KHIsdSl7cmV0dXJuIHUucHVzaChyLmJ1ZmZlcikse2J1ZmZlcjpyLmJ1ZmZlcixsYXlvdXQ6bmV3IGUoci5sYXlvdXQpfX1mdW5jdGlvbiB0KGUpe3JldHVybiBuZXcgcihlLmxheW91dCkuY3JlYXRlVmlldyhlLmJ1ZmZlcil9ZXhwb3J0e3UgYXMgcGFja0ludGVybGVhdmVkQnVmZmVyLHQgYXMgdW5wYWNrSW50ZXJsZWF2ZWRCdWZmZXJ9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtwYWNrSW50ZXJsZWF2ZWRCdWZmZXIgYXMgZX1mcm9tXCIuLi8uLi8uLi9zdXBwb3J0L2J1ZmZlci93b3JrZXJIZWxwZXIuanNcIjtpbXBvcnR7RWRnZUlucHV0QnVmZmVyTGF5b3V0IGFzIHR9ZnJvbVwiLi9idWZmZXJMYXlvdXRzLmpzXCI7aW1wb3J0e2V4dHJhY3RFZGdlcyBhcyBufWZyb21cIi4vZWRnZVByZXByb2Nlc3NpbmcuanNcIjtpbXBvcnR7ZXh0cmFjdCBhcyBzLGV4dHJhY3RFZGdlSW5mb3JtYXRpb24gYXMgcixleHRyYWN0RWRnZUxvY2F0aW9uc0xheW91dCBhcyBpLGV4dHJhY3RDb21wb25lbnRzRWRnZUxvY2F0aW9uc0xheW91dCBhcyBhfWZyb21cIi4vZWRnZVByb2Nlc3NpbmcuanNcIjtjbGFzcyBve2FzeW5jIGV4dHJhY3QoZSl7Y29uc3QgdD1jKGUpLG49cyh0KSxyPVt0LmRhdGEuYnVmZmVyXTtyZXR1cm57cmVzdWx0OmwobixyKSx0cmFuc2Zlckxpc3Q6cn19YXN5bmMgZXh0cmFjdENvbXBvbmVudHNFZGdlTG9jYXRpb25zKHQpe2NvbnN0IHM9Yyh0KSxpPXIocy5kYXRhLHMuc2tpcERlZHVwbGljYXRlLHMuaW5kaWNlcyxzLmluZGljZXNMZW5ndGgpLGE9bihpLHAsZyksbz1bXTtyZXR1cm57cmVzdWx0OmUoYS5yZWd1bGFyLmluc3RhbmNlc0RhdGEsbyksdHJhbnNmZXJMaXN0Om99fWFzeW5jIGV4dHJhY3RFZGdlTG9jYXRpb25zKHQpe2NvbnN0IHM9Yyh0KSxpPXIocy5kYXRhLHMuc2tpcERlZHVwbGljYXRlLHMuaW5kaWNlcyxzLmluZGljZXNMZW5ndGgpLGE9bihpLGYsZyksbz1bXTtyZXR1cm57cmVzdWx0OmUoYS5yZWd1bGFyLmluc3RhbmNlc0RhdGEsbyksdHJhbnNmZXJMaXN0Om99fX1mdW5jdGlvbiBjKGUpe3JldHVybntkYXRhOnQuY3JlYXRlVmlldyhlLmRhdGFCdWZmZXIpLGluZGljZXM6XCJVaW50MzJBcnJheVwiPT09ZS5pbmRpY2VzVHlwZT9uZXcgVWludDMyQXJyYXkoZS5pbmRpY2VzKTpcIlVpbnQxNkFycmF5XCI9PT1lLmluZGljZXNUeXBlP25ldyBVaW50MTZBcnJheShlLmluZGljZXMpOmUuaW5kaWNlcyxpbmRpY2VzTGVuZ3RoOmUuaW5kaWNlc0xlbmd0aCx3cml0ZXJTZXR0aW5nczplLndyaXRlclNldHRpbmdzLHNraXBEZWR1cGxpY2F0ZTplLnNraXBEZWR1cGxpY2F0ZX19ZnVuY3Rpb24gbCh0LG4pe24ucHVzaCh0LnJlZ3VsYXIubG9kSW5mby5sZW5ndGhzLmJ1ZmZlciksbi5wdXNoKHQuc2lsaG91ZXR0ZS5sb2RJbmZvLmxlbmd0aHMuYnVmZmVyKTtyZXR1cm57cmVndWxhcjp7aW5zdGFuY2VzRGF0YTplKHQucmVndWxhci5pbnN0YW5jZXNEYXRhLG4pLGxvZEluZm86e2xlbmd0aHM6dC5yZWd1bGFyLmxvZEluZm8ubGVuZ3Rocy5idWZmZXJ9fSxzaWxob3VldHRlOntpbnN0YW5jZXNEYXRhOmUodC5zaWxob3VldHRlLmluc3RhbmNlc0RhdGEsbiksbG9kSW5mbzp7bGVuZ3Roczp0LnNpbGhvdWV0dGUubG9kSW5mby5sZW5ndGhzLmJ1ZmZlcn19LGF2ZXJhZ2VFZGdlTGVuZ3RoOnQuYXZlcmFnZUVkZ2VMZW5ndGh9fWNsYXNzIHV7YWxsb2NhdGUoZSl7cmV0dXJuIGkuY3JlYXRlQnVmZmVyKGUpfXRyaW0oZSx0KXtyZXR1cm4gZS5zbGljZSgwLHQpfXdyaXRlKGUsdCxuKXtlLnBvc2l0aW9uMC5zZXRWZWModCxuLnBvc2l0aW9uMCksZS5wb3NpdGlvbjEuc2V0VmVjKHQsbi5wb3NpdGlvbjEpfX1jbGFzcyBke2FsbG9jYXRlKGUpe3JldHVybiBhLmNyZWF0ZUJ1ZmZlcihlKX10cmltKGUsdCl7cmV0dXJuIGUuc2xpY2UoMCx0KX13cml0ZShlLHQsbil7ZS5wb3NpdGlvbjAuc2V0VmVjKHQsbi5wb3NpdGlvbjApLGUucG9zaXRpb24xLnNldFZlYyh0LG4ucG9zaXRpb24xKSxlLmNvbXBvbmVudEluZGV4LnNldCh0LG4uY29tcG9uZW50SW5kZXgpfX1jb25zdCBmPW5ldyB1LHA9bmV3IGQsZz17YWxsb2NhdGU6KCk9Pm51bGwsd3JpdGU6KCk9Pnt9LHRyaW06KCk9Pm51bGx9O2V4cG9ydHtvIGFzIGRlZmF1bHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9