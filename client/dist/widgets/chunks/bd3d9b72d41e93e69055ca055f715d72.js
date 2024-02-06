"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_renderers_support_heatmapUtils_js-node_modules_arcgis_core_views_2d_-6b1e7b"],{

/***/ "./node_modules/@arcgis/core/chunks/vec4f64.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ _),
/* harmony export */   "U": () => (/* binding */ N),
/* harmony export */   "Z": () => (/* binding */ l),
/* harmony export */   "a": () => (/* binding */ u),
/* harmony export */   "b": () => (/* binding */ e),
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "d": () => (/* binding */ t),
/* harmony export */   "e": () => (/* binding */ i),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "g": () => (/* binding */ c),
/* harmony export */   "h": () => (/* binding */ f),
/* harmony export */   "i": () => (/* binding */ O),
/* harmony export */   "j": () => (/* binding */ T),
/* harmony export */   "k": () => (/* binding */ U),
/* harmony export */   "o": () => (/* binding */ o),
/* harmony export */   "u": () => (/* binding */ s),
/* harmony export */   "v": () => (/* binding */ b),
/* harmony export */   "z": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function i(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const l=a(),_=o(),N=s(),O=i(),T=c(),U=f(),b=Object.freeze(Object.defineProperty({__proto__:null,ONES:_,UNIT_W:U,UNIT_X:N,UNIT_Y:O,UNIT_Z:T,ZEROS:l,clone:t,create:n,createView:u,fromArray:e,fromValues:r,ones:o,unitW:f,unitX:s,unitY:i,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/heatmapUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAGIC_KERNEL_DENSITY_RADIUS_INFLATION_FACTOR": () => (/* binding */ a),
/* harmony export */   "calculateHeatmapIntensityInfoReaders": () => (/* binding */ s),
/* harmony export */   "createHeatmapImageData": () => (/* binding */ h),
/* harmony export */   "createValueFunction": () => (/* binding */ y),
/* harmony export */   "createValueFunctionCursor": () => (/* binding */ d),
/* harmony export */   "drawHeatmap": () => (/* binding */ l),
/* harmony export */   "evaluateDensityKernel": () => (/* binding */ m),
/* harmony export */   "gaussianBlurRadiusPxToKernelDensityRadiusPt": () => (/* binding */ i),
/* harmony export */   "generateGradient": () => (/* binding */ u),
/* harmony export */   "kernelDensityRadiusPtToGaussianBlurRadiusPx": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a=2.4;function i(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.px2pt)(t*a)}function c(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t)/a}function f(r,n,e,a){let{color:i,ratio:c}=n,{color:f,ratio:u}=e;if(u===c){const t=1e-6;1===u?c-=t:u+=t}const s=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)((a-c)/(u-c),0,1);(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.l)(r,i.toArray(),f.toArray(),s)}function u(t){const r=512,n=new Uint8ClampedArray(4*r);if(t=t.filter((({ratio:t})=>t>=0&&t<=1)).sort(((t,r)=>t.ratio-r.ratio)).map((({color:t,ratio:r})=>({color:t,ratio:Math.max(r,.001)}))),t.length<1)return n;let o=t[0],a=t[0],i=1;const c=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();for(let e=0;e<r;e++){const u=(e+.5)/r;for(;u>a.ratio&&i<t.length;)o=a,a=t[i++];f(c,o,a,u),n.set(c,4*e)}return n}function s(t,r,o,e){const{radius:a,fieldOffset:i,field:c}=r,f=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(a)),u=new Float64Array(o*e);let s,l=Number.NEGATIVE_INFINITY;const h=d(c,i),y=new Set;for(const n of t){const t=n.getCursor();for(;t.next();){const r=t.getObjectId();if(y.has(r))continue;y.add(r);const n=t.readLegacyPointGeometry(),a=128;if(n.x<-a||n.x>=o+a||n.y<-a||n.y>e+a)continue;const i=+h(t),c=Math.max(0,Math.round(n.x)-f),d=Math.max(0,Math.round(n.y)-f),g=Math.min(e,Math.round(n.y)+f),A=Math.min(o,Math.round(n.x)+f);for(let t=d;t<g;t++)for(let r=c;r<A;r++){const e=t*o+r,a=m(n.x-r,n.y-t,f);s=u[e]+=a*i,s>l&&(l=s)}}}return{matrix:u.buffer,max:l}}function l(t,r,n,o,e,a){t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r);const i=t.getImageData(0,0,r,r);n&&o&&i.data.set(new Uint8ClampedArray(h(r,n,o,e,a))),t.putImageData(i,0,0)}function h(r,n,o,e,a){const i=new Uint32Array(r*r),c="buffer"in n?n:new Float64Array(n),f="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),u=f.length/(a-e);for(let s=0;s<c.length;s++){const r=c[s],n=Math.floor((r-e)*u);i[s]=f[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(n,0,f.length-1)]}return i.buffer}function m(t,r,n){const o=Math.sqrt(t**2+r**2)/n;return o>1?0:3/(Math.PI*n**2)*(1-o**2)**2}function y(t,r){return"function"==typeof t?t:t?"string"==typeof r?r=>-1*+r[t]:n=>+n[t]+r:()=>1}function d(t,r){return null!=t?"string"==typeof r?r=>-1*+r.readAttribute(t):n=>+n.readAttribute(t)+r:t=>1}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/LayerView.js */ "./node_modules/@arcgis/core/views/layers/LayerView.js");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"]))){update(t){this._strategy.update(t).catch((t=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(t)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger(this).error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_8__.BitmapContainer,this.container.addChild(this._bitmapContainer),this._strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_10__["default"]({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],h.prototype,"_strategy",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],h.prototype,"updating",void 0),h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYmQzZDliNzJkNDFlOTNlNjkwNTVjYTA1NWY3MTVkNzIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQixjQUFjLDRCQUE0QixvQkFBb0IsZ0JBQWdCLGNBQWMsbUNBQW1DLFlBQVksSUFBSSxjQUFjLFNBQVMsZ0JBQWdCLCtCQUErQixhQUFhLFdBQVcsYUFBYSxrQkFBa0IsYUFBYSxrQkFBa0IsYUFBYSxrQkFBa0IsYUFBYSxrQkFBa0IsYUFBYSxrQkFBa0IsaUZBQWlGLHdLQUF3SyxxQkFBcUIsZUFBZSxHQUFvSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p0MEI7QUFDQTtBQUNBO0FBQ0E7QUFDa00sWUFBWSxjQUFjLE9BQU8sMkRBQUMsTUFBTSxjQUFjLE9BQU8sMkRBQUMsTUFBTSxvQkFBb0IsSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLGFBQWEsZ0JBQWdCLFFBQVEseURBQUMsa0JBQWtCLGtEQUFDLDhCQUE4QixjQUFjLHlDQUF5QyxpQkFBaUIsUUFBUSxzREFBc0QsZ0JBQWdCLEtBQUssK0JBQStCLHdCQUF3QixzQkFBc0IsUUFBUSxxREFBQyxHQUFHLFlBQVksSUFBSSxLQUFLLGlCQUFpQixLQUFLLHNCQUFzQixjQUFjLHdCQUF3QixTQUFTLG9CQUFvQixNQUFNLCtCQUErQixnQkFBZ0IsMkRBQUMsNkJBQTZCLGlDQUFpQyx5QkFBeUIsa0JBQWtCLHNCQUFzQixLQUFLLFNBQVMsRUFBRSx3QkFBd0IscUJBQXFCLFNBQVMsMENBQTBDLDhDQUE4Qyw4SUFBOEksWUFBWSxJQUFJLGdCQUFnQixJQUFJLEtBQUssaUNBQWlDLHlCQUF5QixPQUFPLHVCQUF1Qix3QkFBd0Isc0RBQXNELGdDQUFnQyw0RUFBNEUsc0JBQXNCLHNLQUFzSyxZQUFZLFdBQVcsS0FBSyxtQ0FBbUMsT0FBTyx5REFBQyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwrQkFBK0IsMENBQTBDLGdCQUFnQiwrRUFBK0UsZ0JBQWdCLDBGQUFzYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ovOUU7QUFDQTtBQUNBO0FBQ0E7QUFDcXFCLG9CQUFvQiw0RUFBQyxDQUFDLGlFQUFDLENBQUMsNkRBQUMsSUFBSSxVQUFVLG9DQUFvQyxtRUFBQyxLQUFLLGlFQUFXLGdCQUFnQixpQ0FBaUMsU0FBUywwQkFBMEIsdUVBQUMsbUVBQW1FLG1FQUFDLEVBQUUsd0hBQXdILEVBQUUsU0FBUyx5SUFBeUksYUFBYSxjQUFjLFVBQVUscUJBQXFCLHVCQUF1QiwwQ0FBMEMsa0JBQWtCLHFCQUFxQixhQUFhLHVEQUF1RCx1REFBQyxFQUFFLHNGQUFDLG9DQUFvQyx1REFBQyxFQUFFLHNGQUFDLHFDQUFxQyx1REFBQyxFQUFFLHNGQUFDLG9EQUFvRCxVQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2NodW5rcy92ZWM0ZjY0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9zdXBwb3J0L2hlYXRtYXBVdGlscy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS92aWV3cy8yZC9sYXllcnMvQmFzZUR5bmFtaWNMYXllclZpZXcyRC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuZnVuY3Rpb24gbigpe3JldHVyblswLDAsMCwwXX1mdW5jdGlvbiB0KG4pe3JldHVybltuWzBdLG5bMV0sblsyXSxuWzNdXX1mdW5jdGlvbiByKG4sdCxyLGUpe3JldHVybltuLHQscixlXX1mdW5jdGlvbiBlKHQpe2NvbnN0IHI9bigpLGU9TWF0aC5taW4oNCx0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjxlOysrbilyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gdShuLHQpe3JldHVybiBuZXcgRmxvYXQ2NEFycmF5KG4sdCw0KX1mdW5jdGlvbiBhKCl7cmV0dXJuIG4oKX1mdW5jdGlvbiBvKCl7cmV0dXJuIHIoMSwxLDEsMSl9ZnVuY3Rpb24gcygpe3JldHVybiByKDEsMCwwLDApfWZ1bmN0aW9uIGkoKXtyZXR1cm4gcigwLDEsMCwwKX1mdW5jdGlvbiBjKCl7cmV0dXJuIHIoMCwwLDEsMCl9ZnVuY3Rpb24gZigpe3JldHVybiByKDAsMCwwLDEpfWNvbnN0IGw9YSgpLF89bygpLE49cygpLE89aSgpLFQ9YygpLFU9ZigpLGI9T2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydHkoe19fcHJvdG9fXzpudWxsLE9ORVM6XyxVTklUX1c6VSxVTklUX1g6TixVTklUX1k6TyxVTklUX1o6VCxaRVJPUzpsLGNsb25lOnQsY3JlYXRlOm4sY3JlYXRlVmlldzp1LGZyb21BcnJheTplLGZyb21WYWx1ZXM6cixvbmVzOm8sdW5pdFc6Zix1bml0WDpzLHVuaXRZOmksdW5pdFo6Yyx6ZXJvczphfSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSk7ZXhwb3J0e18gYXMgTyxOIGFzIFUsbCBhcyBaLHUgYXMgYSxlIGFzIGIsbiBhcyBjLHQgYXMgZCxpIGFzIGUsciBhcyBmLGMgYXMgZyxmIGFzIGgsTyBhcyBpLFQgYXMgaixVIGFzIGssbyxzIGFzIHUsYiBhcyB2LGEgYXMgen07XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e2NsYW1wIGFzIHR9ZnJvbVwiLi4vLi4vY29yZS9tYXRoVXRpbHMuanNcIjtpbXBvcnR7cHgycHQgYXMgcixwdDJweCBhcyBufWZyb21cIi4uLy4uL2NvcmUvc2NyZWVuVXRpbHMuanNcIjtpbXBvcnR7bCBhcyBvfWZyb21cIi4uLy4uL2NodW5rcy92ZWM0LmpzXCI7aW1wb3J0e2MgYXMgZX1mcm9tXCIuLi8uLi9jaHVua3MvdmVjNGY2NC5qc1wiO2NvbnN0IGE9Mi40O2Z1bmN0aW9uIGkodCl7cmV0dXJuIHIodCphKX1mdW5jdGlvbiBjKHQpe3JldHVybiBuKHQpL2F9ZnVuY3Rpb24gZihyLG4sZSxhKXtsZXR7Y29sb3I6aSxyYXRpbzpjfT1uLHtjb2xvcjpmLHJhdGlvOnV9PWU7aWYodT09PWMpe2NvbnN0IHQ9MWUtNjsxPT09dT9jLT10OnUrPXR9Y29uc3Qgcz10KChhLWMpLyh1LWMpLDAsMSk7byhyLGkudG9BcnJheSgpLGYudG9BcnJheSgpLHMpfWZ1bmN0aW9uIHUodCl7Y29uc3Qgcj01MTIsbj1uZXcgVWludDhDbGFtcGVkQXJyYXkoNCpyKTtpZih0PXQuZmlsdGVyKCgoe3JhdGlvOnR9KT0+dD49MCYmdDw9MSkpLnNvcnQoKCh0LHIpPT50LnJhdGlvLXIucmF0aW8pKS5tYXAoKCh7Y29sb3I6dCxyYXRpbzpyfSk9Pih7Y29sb3I6dCxyYXRpbzpNYXRoLm1heChyLC4wMDEpfSkpKSx0Lmxlbmd0aDwxKXJldHVybiBuO2xldCBvPXRbMF0sYT10WzBdLGk9MTtjb25zdCBjPWUoKTtmb3IobGV0IGU9MDtlPHI7ZSsrKXtjb25zdCB1PShlKy41KS9yO2Zvcig7dT5hLnJhdGlvJiZpPHQubGVuZ3RoOylvPWEsYT10W2krK107ZihjLG8sYSx1KSxuLnNldChjLDQqZSl9cmV0dXJuIG59ZnVuY3Rpb24gcyh0LHIsbyxlKXtjb25zdHtyYWRpdXM6YSxmaWVsZE9mZnNldDppLGZpZWxkOmN9PXIsZj1NYXRoLnJvdW5kKG4oYSkpLHU9bmV3IEZsb2F0NjRBcnJheShvKmUpO2xldCBzLGw9TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO2NvbnN0IGg9ZChjLGkpLHk9bmV3IFNldDtmb3IoY29uc3QgbiBvZiB0KXtjb25zdCB0PW4uZ2V0Q3Vyc29yKCk7Zm9yKDt0Lm5leHQoKTspe2NvbnN0IHI9dC5nZXRPYmplY3RJZCgpO2lmKHkuaGFzKHIpKWNvbnRpbnVlO3kuYWRkKHIpO2NvbnN0IG49dC5yZWFkTGVnYWN5UG9pbnRHZW9tZXRyeSgpLGE9MTI4O2lmKG4ueDwtYXx8bi54Pj1vK2F8fG4ueTwtYXx8bi55PmUrYSljb250aW51ZTtjb25zdCBpPStoKHQpLGM9TWF0aC5tYXgoMCxNYXRoLnJvdW5kKG4ueCktZiksZD1NYXRoLm1heCgwLE1hdGgucm91bmQobi55KS1mKSxnPU1hdGgubWluKGUsTWF0aC5yb3VuZChuLnkpK2YpLEE9TWF0aC5taW4obyxNYXRoLnJvdW5kKG4ueCkrZik7Zm9yKGxldCB0PWQ7dDxnO3QrKylmb3IobGV0IHI9YztyPEE7cisrKXtjb25zdCBlPXQqbytyLGE9bShuLngtcixuLnktdCxmKTtzPXVbZV0rPWEqaSxzPmwmJihsPXMpfX19cmV0dXJue21hdHJpeDp1LmJ1ZmZlcixtYXg6bH19ZnVuY3Rpb24gbCh0LHIsbixvLGUsYSl7dC5jYW52YXMud2lkdGg9dC5jYW52YXMuaGVpZ2h0PXIsdC5jbGVhclJlY3QoMCwwLHIscik7Y29uc3QgaT10LmdldEltYWdlRGF0YSgwLDAscixyKTtuJiZvJiZpLmRhdGEuc2V0KG5ldyBVaW50OENsYW1wZWRBcnJheShoKHIsbixvLGUsYSkpKSx0LnB1dEltYWdlRGF0YShpLDAsMCl9ZnVuY3Rpb24gaChyLG4sbyxlLGEpe2NvbnN0IGk9bmV3IFVpbnQzMkFycmF5KHIqciksYz1cImJ1ZmZlclwiaW4gbj9uOm5ldyBGbG9hdDY0QXJyYXkobiksZj1cImJ1ZmZlclwiaW4gbz9uZXcgVWludDMyQXJyYXkoby5idWZmZXIpOm5ldyBVaW50MzJBcnJheShuZXcgVWludDhBcnJheShvKS5idWZmZXIpLHU9Zi5sZW5ndGgvKGEtZSk7Zm9yKGxldCBzPTA7czxjLmxlbmd0aDtzKyspe2NvbnN0IHI9Y1tzXSxuPU1hdGguZmxvb3IoKHItZSkqdSk7aVtzXT1mW3QobiwwLGYubGVuZ3RoLTEpXX1yZXR1cm4gaS5idWZmZXJ9ZnVuY3Rpb24gbSh0LHIsbil7Y29uc3Qgbz1NYXRoLnNxcnQodCoqMityKioyKS9uO3JldHVybiBvPjE/MDozLyhNYXRoLlBJKm4qKjIpKigxLW8qKjIpKioyfWZ1bmN0aW9uIHkodCxyKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6dD9cInN0cmluZ1wiPT10eXBlb2Ygcj9yPT4tMSorclt0XTpuPT4rblt0XStyOigpPT4xfWZ1bmN0aW9uIGQodCxyKXtyZXR1cm4gbnVsbCE9dD9cInN0cmluZ1wiPT10eXBlb2Ygcj9yPT4tMSorci5yZWFkQXR0cmlidXRlKHQpOm49PituLnJlYWRBdHRyaWJ1dGUodCkrcjp0PT4xfWV4cG9ydHthIGFzIE1BR0lDX0tFUk5FTF9ERU5TSVRZX1JBRElVU19JTkZMQVRJT05fRkFDVE9SLHMgYXMgY2FsY3VsYXRlSGVhdG1hcEludGVuc2l0eUluZm9SZWFkZXJzLGggYXMgY3JlYXRlSGVhdG1hcEltYWdlRGF0YSx5IGFzIGNyZWF0ZVZhbHVlRnVuY3Rpb24sZCBhcyBjcmVhdGVWYWx1ZUZ1bmN0aW9uQ3Vyc29yLGwgYXMgZHJhd0hlYXRtYXAsbSBhcyBldmFsdWF0ZURlbnNpdHlLZXJuZWwsaSBhcyBnYXVzc2lhbkJsdXJSYWRpdXNQeFRvS2VybmVsRGVuc2l0eVJhZGl1c1B0LHUgYXMgZ2VuZXJhdGVHcmFkaWVudCxjIGFzIGtlcm5lbERlbnNpdHlSYWRpdXNQdFRvR2F1c3NpYW5CbHVyUmFkaXVzUHh9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIHR9ZnJvbVwiLi4vLi4vLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydCBlIGZyb21cIi4uLy4uLy4uL2NvcmUvTG9nZ2VyLmpzXCI7aW1wb3J0e2lzQWJvcnRFcnJvciBhcyByfWZyb21cIi4uLy4uLy4uL2NvcmUvcHJvbWlzZVV0aWxzLmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIHN9ZnJvbVwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZW5zdXJlVHlwZS5qc1wiO2ltcG9ydFwiLi4vLi4vLi4vY29yZS9hcnJheVV0aWxzLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL2hhcy5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyBpfWZyb21cIi4uLy4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjtpbXBvcnR7Qml0bWFwQ29udGFpbmVyIGFzIGF9ZnJvbVwiLi4vZW5naW5lL0JpdG1hcENvbnRhaW5lci5qc1wiO2ltcG9ydHtMYXllclZpZXcyRE1peGluIGFzIG99ZnJvbVwiLi9MYXllclZpZXcyRC5qc1wiO2ltcG9ydCBwIGZyb21cIi4vc3VwcG9ydC9FeHBvcnRTdHJhdGVneS5qc1wiO2ltcG9ydCBuIGZyb21cIi4uLy4uL2xheWVycy9MYXllclZpZXcuanNcIjtpbXBvcnQgbSBmcm9tXCIuLi8uLi9sYXllcnMvUmVmcmVzaGFibGVMYXllclZpZXcuanNcIjtsZXQgaD1jbGFzcyBleHRlbmRzKG0obyhuKSkpe3VwZGF0ZSh0KXt0aGlzLl9zdHJhdGVneS51cGRhdGUodCkuY2F0Y2goKHQ9PntyKHQpfHxlLmdldExvZ2dlcih0aGlzKS5lcnJvcih0KX0pKSx0aGlzLm5vdGlmeUNoYW5nZShcInVwZGF0aW5nXCIpfWF0dGFjaCgpe3RoaXMuX2JpdG1hcENvbnRhaW5lcj1uZXcgYSx0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9iaXRtYXBDb250YWluZXIpLHRoaXMuX3N0cmF0ZWd5PW5ldyBwKHtjb250YWluZXI6dGhpcy5fYml0bWFwQ29udGFpbmVyLGZldGNoU291cmNlOnRoaXMuZmV0Y2hCaXRtYXBEYXRhLmJpbmQodGhpcykscmVxdWVzdFVwZGF0ZTp0aGlzLnJlcXVlc3RVcGRhdGUuYmluZCh0aGlzKX0pfWRldGFjaCgpe3RoaXMuX3N0cmF0ZWd5LmRlc3Ryb3koKSx0aGlzLl9zdHJhdGVneT1udWxsLHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2JpdG1hcENvbnRhaW5lciksdGhpcy5fYml0bWFwQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCl9bW92ZVN0YXJ0KCl7fXZpZXdDaGFuZ2UoKXt9bW92ZUVuZCgpe3RoaXMucmVxdWVzdFVwZGF0ZSgpfWZldGNoQml0bWFwRGF0YSh0LGUscil7cmV0dXJuIHRoaXMubGF5ZXIuZmV0Y2hJbWFnZUJpdG1hcCh0LGUscil9YXN5bmMgZG9SZWZyZXNoKCl7dGhpcy5yZXF1ZXN0VXBkYXRlKCl9aXNVcGRhdGluZygpe3JldHVybiB0aGlzLl9zdHJhdGVneS51cGRhdGluZ3x8dGhpcy51cGRhdGVSZXF1ZXN0ZWR9fTt0KFtzKCldLGgucHJvdG90eXBlLFwiX3N0cmF0ZWd5XCIsdm9pZCAwKSx0KFtzKCldLGgucHJvdG90eXBlLFwidXBkYXRpbmdcIix2b2lkIDApLGg9dChbaShcImVzcmkudmlld3MuMmQubGF5ZXJzLkJhc2VEeW5hbWljTGF5ZXJWaWV3MkRcIildLGgpO2NvbnN0IGM9aDtleHBvcnR7YyBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==