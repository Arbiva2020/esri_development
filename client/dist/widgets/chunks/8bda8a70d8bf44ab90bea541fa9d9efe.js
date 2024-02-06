"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_views_2d_engine_webgl_definitions_js-node_modules_arcgis_core_views_-9163e5"],{

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANGLE_FACTOR_256": () => (/* binding */ f),
/* harmony export */   "ATTRIBUTE_DATA_ANIMATION": () => (/* binding */ Q),
/* harmony export */   "ATTRIBUTE_DATA_DD0": () => (/* binding */ T),
/* harmony export */   "ATTRIBUTE_DATA_DD1": () => (/* binding */ U),
/* harmony export */   "ATTRIBUTE_DATA_FILTER_FLAGS": () => (/* binding */ P),
/* harmony export */   "ATTRIBUTE_DATA_GPGPU": () => (/* binding */ R),
/* harmony export */   "ATTRIBUTE_DATA_VV": () => (/* binding */ S),
/* harmony export */   "ATTRIBUTE_STORE_TEXTURE_SIZE": () => (/* binding */ A),
/* harmony export */   "AVERAGE_GLYPH_MOSAIC_ITEM": () => (/* binding */ z),
/* harmony export */   "BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR": () => (/* binding */ ye),
/* harmony export */   "BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR": () => (/* binding */ be),
/* harmony export */   "BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR": () => (/* binding */ ve),
/* harmony export */   "BITSET_FILL_RANDOM_PATTERN_OFFSET": () => (/* binding */ ue),
/* harmony export */   "BITSET_GENERIC_CONSIDER_ALPHA_ONLY": () => (/* binding */ ge),
/* harmony export */   "BITSET_GENERIC_LOCK_COLOR": () => (/* binding */ pe),
/* harmony export */   "BITSET_LINE_SCALE_DASH": () => (/* binding */ je),
/* harmony export */   "BITSET_MARKER_ALIGNMENT_MAP": () => (/* binding */ ne),
/* harmony export */   "BITSET_MARKER_ALIGNMENT_SCREEN": () => (/* binding */ le),
/* harmony export */   "BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE": () => (/* binding */ we),
/* harmony export */   "BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY": () => (/* binding */ xe),
/* harmony export */   "BITSET_TYPE_FILL_OUTLINE": () => (/* binding */ ke),
/* harmony export */   "BUFFER_DATA_MINIMUM_SIZE": () => (/* binding */ ie),
/* harmony export */   "BUFFER_DATA_POOL_SIZE": () => (/* binding */ he),
/* harmony export */   "CHART_MAX_FIELDS": () => (/* binding */ n),
/* harmony export */   "COLLISION_BOX_PADDING": () => (/* binding */ j),
/* harmony export */   "COLLISION_BUCKET_SIZE": () => (/* binding */ p),
/* harmony export */   "COLLISION_EARLY_REJECT_BUCKET_SIZE": () => (/* binding */ g),
/* harmony export */   "COLLISION_MAX_ZOOM_DELTA": () => (/* binding */ x),
/* harmony export */   "COLLISION_PLACEMENT_PADDING": () => (/* binding */ u),
/* harmony export */   "COLLISION_TILE_BOX_SIZE": () => (/* binding */ k),
/* harmony export */   "COMPRESSION_FACTOR_FOR_U16": () => (/* binding */ h),
/* harmony export */   "DEBUG_LABELS": () => (/* binding */ s),
/* harmony export */   "DISPLAY_RECORD_INT_PER_ELEMENT": () => (/* binding */ de),
/* harmony export */   "DOT_DENSITY_MAX_FIELDS": () => (/* binding */ l),
/* harmony export */   "EFFECT_FLAG_0": () => (/* binding */ Y),
/* harmony export */   "ENABLE_EARLY_LABEL_DISCARD": () => (/* binding */ Z),
/* harmony export */   "EXTRUDE_SCALE": () => (/* binding */ o),
/* harmony export */   "FILTER_FLAG_0": () => (/* binding */ X),
/* harmony export */   "GLYPH_SIZE": () => (/* binding */ b),
/* harmony export */   "HEURISTIC_GLYPHS_PER_FEATURE": () => (/* binding */ y),
/* harmony export */   "HEURISTIC_GLYPHS_PER_LINE": () => (/* binding */ v),
/* harmony export */   "HIGHLIGHT_FLAG": () => (/* binding */ W),
/* harmony export */   "HITTEST_RADIUS": () => (/* binding */ _),
/* harmony export */   "MAGIC_LABEL_LINE_HEIGHT": () => (/* binding */ w),
/* harmony export */   "MAX_FILTERS": () => (/* binding */ V),
/* harmony export */   "MAX_GPU_UPLOADS_PER_FRAME": () => (/* binding */ oe),
/* harmony export */   "MAX_REPRESENTABLE_INT": () => (/* binding */ m),
/* harmony export */   "MAX_SIZE_FOR_U16_COMPRESSION": () => (/* binding */ i),
/* harmony export */   "MIN_MAX_ZOOM_PRECISION_FACTOR": () => (/* binding */ me),
/* harmony export */   "NAN_MAGIC_NUMBER": () => (/* binding */ t),
/* harmony export */   "PATCH_PIXEL_BUFFER_ALLOC_SIZE": () => (/* binding */ fe),
/* harmony export */   "PATTERN_FILL_RASTERIZATION_SCALE": () => (/* binding */ Ae),
/* harmony export */   "PICTURE_FILL_COLOR": () => (/* binding */ a),
/* harmony export */   "RANDOM_INSIDE_POLYGON_TEXTURE_SIZE": () => (/* binding */ se),
/* harmony export */   "RASTER_TILE_SIZE": () => (/* binding */ d),
/* harmony export */   "SDF_TEXTURE_SIZE": () => (/* binding */ ce),
/* harmony export */   "SPRITE_PADDING": () => (/* binding */ ae),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_0": () => (/* binding */ E),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_1": () => (/* binding */ F),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_2": () => (/* binding */ G),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_3": () => (/* binding */ H),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_4": () => (/* binding */ I),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_5": () => (/* binding */ J),
/* harmony export */   "TEXTURE_BINDING_BITMAP": () => (/* binding */ D),
/* harmony export */   "TEXTURE_BINDING_GLYPH_ATLAS": () => (/* binding */ C),
/* harmony export */   "TEXTURE_BINDING_GPGPU": () => (/* binding */ K),
/* harmony export */   "TEXTURE_BINDING_HIGHLIGHT_0": () => (/* binding */ L),
/* harmony export */   "TEXTURE_BINDING_HIGHLIGHT_1": () => (/* binding */ M),
/* harmony export */   "TEXTURE_BINDING_RENDERER_0": () => (/* binding */ N),
/* harmony export */   "TEXTURE_BINDING_RENDERER_1": () => (/* binding */ O),
/* harmony export */   "TEXTURE_BINDING_SPRITE_ATLAS": () => (/* binding */ B),
/* harmony export */   "TEXTURE_UPLOAD_MANAGER_BUDGET": () => (/* binding */ ze),
/* harmony export */   "TEXTURE_UPLOAD_MANAGER_CHUNK_SIZE": () => (/* binding */ qe),
/* harmony export */   "TEXT_PLACEMENT_PADDING": () => (/* binding */ q),
/* harmony export */   "THIN_LINE_HALF_WIDTH_THRESHOLD": () => (/* binding */ $),
/* harmony export */   "TILE_SIZE": () => (/* binding */ c),
/* harmony export */   "VTL_HIGH_RES_CUTOFF": () => (/* binding */ te),
/* harmony export */   "VTL_TEXTURE_BINDING_UNIT_GLYPHS": () => (/* binding */ re),
/* harmony export */   "VTL_TEXTURE_BINDING_UNIT_SPRITES": () => (/* binding */ ee),
/* harmony export */   "WEBGL_MAX_INNER_STOPS": () => (/* binding */ r),
/* harmony export */   "WEBGL_MAX_STOPS": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e=8,r=e-2,t=1e-30,o=64,a=4294967295,c=512,d=256,f=256/360,h=128,i=511,m=16777216,s=!1,p=128,l=8,n=10,w=29,x=1,g=16,j=16,k=c/p,u=8,v=50,y=10,b=24,q=8,z={metrics:{width:15,height:17,left:0,top:-7,advance:14}},A=1024,B=0,C=0,D=0,E=1,F=2,G=3,H=4,I=5,J=6,K=12,L=5,M=6,N=5,O=6,P=0,Q=1,R=2,S=3,T=3,U=4,V=2,W=1,X=2,Y=4,Z=!1,$=1.05,_=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("featurelayer-force-marker-text-draw-order")?.5:3,ee=5,re=6,te=1.15,oe=2,ae=2,ce=128-2*ae,de=8,fe=500,he=4,ie=128,me=10,se=1024,pe=2,le=0,ne=1,we=4,xe=8,ge=16,je=4,ke=1,ue=4,ve=8,ye=32,be=64,qe=128,ze=4,Ae=2;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/KnowledgeGraphLayerView2D.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/KnowledgeGraphLayerView2D.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayerView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/LayerView.js */ "./node_modules/@arcgis/core/views/layers/LayerView.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(e){super(e),this.layerViews=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}set layerViews(e){this._set("layerViews",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,r)=>e+r.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.castForReferenceSetter})],n.prototype,"layerViews",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],n.prototype,"updatingProgress",null),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],n);const c=n;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGJkYThhNzBkOGJmNDRhYjkwYmVhNTQxZmE5ZDllZmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDLDhKQUE4SixTQUFTLDZDQUE2Qyx1SEFBdUgsd0RBQUcsaU5BQXlyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0poakc7QUFDQTtBQUNBO0FBQ0E7QUFDNmlCLG9CQUFvQixpRUFBQyxDQUFDLDREQUFDLEdBQUcsZUFBZSw2QkFBNkIsMkRBQUMsQ0FBQyxrQkFBa0IsdUJBQXVCLHlFQUFDLDZCQUE2Qix1QkFBdUIsbUhBQW1ILFNBQVMseUhBQXlILFNBQVMsbUNBQW1DLFdBQVcsYUFBYSxjQUFjLFdBQVcsdUJBQXVCLGdIQUFnSCx1REFBQyxFQUFFLHNGQUFDLEVBQUUsS0FBSyw0RUFBQyxDQUFDLGtDQUFrQyx1REFBQyxFQUFFLHNGQUFDLEVBQUUsWUFBWSwwQ0FBMEMsdURBQUMsRUFBRSxzRkFBQyx1REFBdUQsVUFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvZGVmaW5pdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvdmlld3MvMmQvbGF5ZXJzL0tub3dsZWRnZUdyYXBoTGF5ZXJWaWV3MkQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydCBoYXMgZnJvbVwiLi4vLi4vLi4vLi4vY29yZS9oYXMuanNcIjtjb25zdCBlPTgscj1lLTIsdD0xZS0zMCxvPTY0LGE9NDI5NDk2NzI5NSxjPTUxMixkPTI1NixmPTI1Ni8zNjAsaD0xMjgsaT01MTEsbT0xNjc3NzIxNixzPSExLHA9MTI4LGw9OCxuPTEwLHc9MjkseD0xLGc9MTYsaj0xNixrPWMvcCx1PTgsdj01MCx5PTEwLGI9MjQscT04LHo9e21ldHJpY3M6e3dpZHRoOjE1LGhlaWdodDoxNyxsZWZ0OjAsdG9wOi03LGFkdmFuY2U6MTR9fSxBPTEwMjQsQj0wLEM9MCxEPTAsRT0xLEY9MixHPTMsSD00LEk9NSxKPTYsSz0xMixMPTUsTT02LE49NSxPPTYsUD0wLFE9MSxSPTIsUz0zLFQ9MyxVPTQsVj0yLFc9MSxYPTIsWT00LFo9ITEsJD0xLjA1LF89aGFzKFwiZmVhdHVyZWxheWVyLWZvcmNlLW1hcmtlci10ZXh0LWRyYXctb3JkZXJcIik/LjU6MyxlZT01LHJlPTYsdGU9MS4xNSxvZT0yLGFlPTIsY2U9MTI4LTIqYWUsZGU9OCxmZT01MDAsaGU9NCxpZT0xMjgsbWU9MTAsc2U9MTAyNCxwZT0yLGxlPTAsbmU9MSx3ZT00LHhlPTgsZ2U9MTYsamU9NCxrZT0xLHVlPTQsdmU9OCx5ZT0zMixiZT02NCxxZT0xMjgsemU9NCxBZT0yO2V4cG9ydHtmIGFzIEFOR0xFX0ZBQ1RPUl8yNTYsUSBhcyBBVFRSSUJVVEVfREFUQV9BTklNQVRJT04sVCBhcyBBVFRSSUJVVEVfREFUQV9ERDAsVSBhcyBBVFRSSUJVVEVfREFUQV9ERDEsUCBhcyBBVFRSSUJVVEVfREFUQV9GSUxURVJfRkxBR1MsUiBhcyBBVFRSSUJVVEVfREFUQV9HUEdQVSxTIGFzIEFUVFJJQlVURV9EQVRBX1ZWLEEgYXMgQVRUUklCVVRFX1NUT1JFX1RFWFRVUkVfU0laRSx6IGFzIEFWRVJBR0VfR0xZUEhfTU9TQUlDX0lURU0seWUgYXMgQklUU0VUX0ZJTExfSEFTX1BBVFRFUk5fSEVJR0hUX1BSRUNJU0lPTl9GQUNUT1IsYmUgYXMgQklUU0VUX0ZJTExfSEFTX1BBVFRFUk5fV0lEVEhfUFJFQ0lTSU9OX0ZBQ1RPUix2ZSBhcyBCSVRTRVRfRklMTF9IQVNfVU5SRVNPTFZFRF9SRVBMQUNFTUVOVF9DT0xPUix1ZSBhcyBCSVRTRVRfRklMTF9SQU5ET01fUEFUVEVSTl9PRkZTRVQsZ2UgYXMgQklUU0VUX0dFTkVSSUNfQ09OU0lERVJfQUxQSEFfT05MWSxwZSBhcyBCSVRTRVRfR0VORVJJQ19MT0NLX0NPTE9SLGplIGFzIEJJVFNFVF9MSU5FX1NDQUxFX0RBU0gsbmUgYXMgQklUU0VUX01BUktFUl9BTElHTk1FTlRfTUFQLGxlIGFzIEJJVFNFVF9NQVJLRVJfQUxJR05NRU5UX1NDUkVFTix3ZSBhcyBCSVRTRVRfTUFSS0VSX09VVExJTkVfQUxMT1dfQ09MT1JfT1ZFUlJJREUseGUgYXMgQklUU0VUX01BUktFUl9TQ0FMRV9TWU1CT0xTX1BST1BPUlRJT05BTExZLGtlIGFzIEJJVFNFVF9UWVBFX0ZJTExfT1VUTElORSxpZSBhcyBCVUZGRVJfREFUQV9NSU5JTVVNX1NJWkUsaGUgYXMgQlVGRkVSX0RBVEFfUE9PTF9TSVpFLG4gYXMgQ0hBUlRfTUFYX0ZJRUxEUyxqIGFzIENPTExJU0lPTl9CT1hfUEFERElORyxwIGFzIENPTExJU0lPTl9CVUNLRVRfU0laRSxnIGFzIENPTExJU0lPTl9FQVJMWV9SRUpFQ1RfQlVDS0VUX1NJWkUseCBhcyBDT0xMSVNJT05fTUFYX1pPT01fREVMVEEsdSBhcyBDT0xMSVNJT05fUExBQ0VNRU5UX1BBRERJTkcsayBhcyBDT0xMSVNJT05fVElMRV9CT1hfU0laRSxoIGFzIENPTVBSRVNTSU9OX0ZBQ1RPUl9GT1JfVTE2LHMgYXMgREVCVUdfTEFCRUxTLGRlIGFzIERJU1BMQVlfUkVDT1JEX0lOVF9QRVJfRUxFTUVOVCxsIGFzIERPVF9ERU5TSVRZX01BWF9GSUVMRFMsWSBhcyBFRkZFQ1RfRkxBR18wLFogYXMgRU5BQkxFX0VBUkxZX0xBQkVMX0RJU0NBUkQsbyBhcyBFWFRSVURFX1NDQUxFLFggYXMgRklMVEVSX0ZMQUdfMCxiIGFzIEdMWVBIX1NJWkUseSBhcyBIRVVSSVNUSUNfR0xZUEhTX1BFUl9GRUFUVVJFLHYgYXMgSEVVUklTVElDX0dMWVBIU19QRVJfTElORSxXIGFzIEhJR0hMSUdIVF9GTEFHLF8gYXMgSElUVEVTVF9SQURJVVMsdyBhcyBNQUdJQ19MQUJFTF9MSU5FX0hFSUdIVCxWIGFzIE1BWF9GSUxURVJTLG9lIGFzIE1BWF9HUFVfVVBMT0FEU19QRVJfRlJBTUUsbSBhcyBNQVhfUkVQUkVTRU5UQUJMRV9JTlQsaSBhcyBNQVhfU0laRV9GT1JfVTE2X0NPTVBSRVNTSU9OLG1lIGFzIE1JTl9NQVhfWk9PTV9QUkVDSVNJT05fRkFDVE9SLHQgYXMgTkFOX01BR0lDX05VTUJFUixmZSBhcyBQQVRDSF9QSVhFTF9CVUZGRVJfQUxMT0NfU0laRSxBZSBhcyBQQVRURVJOX0ZJTExfUkFTVEVSSVpBVElPTl9TQ0FMRSxhIGFzIFBJQ1RVUkVfRklMTF9DT0xPUixzZSBhcyBSQU5ET01fSU5TSURFX1BPTFlHT05fVEVYVFVSRV9TSVpFLGQgYXMgUkFTVEVSX1RJTEVfU0laRSxjZSBhcyBTREZfVEVYVFVSRV9TSVpFLGFlIGFzIFNQUklURV9QQURESU5HLEUgYXMgVEVYVFVSRV9CSU5ESU5HX0FUVFJJQlVURV9EQVRBXzAsRiBhcyBURVhUVVJFX0JJTkRJTkdfQVRUUklCVVRFX0RBVEFfMSxHIGFzIFRFWFRVUkVfQklORElOR19BVFRSSUJVVEVfREFUQV8yLEggYXMgVEVYVFVSRV9CSU5ESU5HX0FUVFJJQlVURV9EQVRBXzMsSSBhcyBURVhUVVJFX0JJTkRJTkdfQVRUUklCVVRFX0RBVEFfNCxKIGFzIFRFWFRVUkVfQklORElOR19BVFRSSUJVVEVfREFUQV81LEQgYXMgVEVYVFVSRV9CSU5ESU5HX0JJVE1BUCxDIGFzIFRFWFRVUkVfQklORElOR19HTFlQSF9BVExBUyxLIGFzIFRFWFRVUkVfQklORElOR19HUEdQVSxMIGFzIFRFWFRVUkVfQklORElOR19ISUdITElHSFRfMCxNIGFzIFRFWFRVUkVfQklORElOR19ISUdITElHSFRfMSxOIGFzIFRFWFRVUkVfQklORElOR19SRU5ERVJFUl8wLE8gYXMgVEVYVFVSRV9CSU5ESU5HX1JFTkRFUkVSXzEsQiBhcyBURVhUVVJFX0JJTkRJTkdfU1BSSVRFX0FUTEFTLHplIGFzIFRFWFRVUkVfVVBMT0FEX01BTkFHRVJfQlVER0VULHFlIGFzIFRFWFRVUkVfVVBMT0FEX01BTkFHRVJfQ0hVTktfU0laRSxxIGFzIFRFWFRfUExBQ0VNRU5UX1BBRERJTkcsJCBhcyBUSElOX0xJTkVfSEFMRl9XSURUSF9USFJFU0hPTEQsYyBhcyBUSUxFX1NJWkUsdGUgYXMgVlRMX0hJR0hfUkVTX0NVVE9GRixyZSBhcyBWVExfVEVYVFVSRV9CSU5ESU5HX1VOSVRfR0xZUEhTLGVlIGFzIFZUTF9URVhUVVJFX0JJTkRJTkdfVU5JVF9TUFJJVEVTLHIgYXMgV0VCR0xfTUFYX0lOTkVSX1NUT1BTLGUgYXMgV0VCR0xfTUFYX1NUT1BTfTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyBlfWZyb21cIi4uLy4uLy4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnQgciBmcm9tXCIuLi8uLi8uLi9jb3JlL0NvbGxlY3Rpb24uanNcIjtpbXBvcnR7cmVmZXJlbmNlU2V0dGVyIGFzIHQsY2FzdEZvclJlZmVyZW5jZVNldHRlciBhcyBzfWZyb21cIi4uLy4uLy4uL2NvcmUvY29sbGVjdGlvblV0aWxzLmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIG99ZnJvbVwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZW5zdXJlVHlwZS5qc1wiO2ltcG9ydFwiLi4vLi4vLi4vY29yZS9hcnJheVV0aWxzLmpzXCI7aW1wb3J0XCIuLi8uLi8uLi9jb3JlL2hhcy5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyBpfWZyb21cIi4uLy4uLy4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjtpbXBvcnR7TGF5ZXJWaWV3MkRNaXhpbiBhcyBhfWZyb21cIi4vTGF5ZXJWaWV3MkQuanNcIjtpbXBvcnQgbCBmcm9tXCIuLi8uLi9sYXllcnMvTGF5ZXJWaWV3LmpzXCI7bGV0IG49Y2xhc3MgZXh0ZW5kcyhhKGwpKXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLmxheWVyVmlld3M9bmV3IHJ9c2V0IGxheWVyVmlld3MoZSl7dGhpcy5fc2V0KFwibGF5ZXJWaWV3c1wiLHQoZSx0aGlzLl9nZXQoXCJsYXllclZpZXdzXCIpKSl9Z2V0IHVwZGF0aW5nUHJvZ3Jlc3MoKXtyZXR1cm4gMD09PXRoaXMubGF5ZXJWaWV3cy5sZW5ndGg/MTp0aGlzLmxheWVyVmlld3MucmVkdWNlKCgoZSxyKT0+ZStyLnVwZGF0aW5nUHJvZ3Jlc3MpLDApL3RoaXMubGF5ZXJWaWV3cy5sZW5ndGh9YXR0YWNoKCl7dGhpcy5fdXBkYXRlU3RhZ2VDaGlsZHJlbigpLHRoaXMuYWRkQXR0YWNoSGFuZGxlcyh0aGlzLmxheWVyVmlld3Mub24oXCJhZnRlci1jaGFuZ2VzXCIsKCgpPT50aGlzLl91cGRhdGVTdGFnZUNoaWxkcmVuKCkpKSl9ZGV0YWNoKCl7dGhpcy5jb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKX11cGRhdGUoZSl7fW1vdmVTdGFydCgpe312aWV3Q2hhbmdlKCl7fW1vdmVFbmQoKXt9X3VwZGF0ZVN0YWdlQ2hpbGRyZW4oKXt0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpLHRoaXMubGF5ZXJWaWV3cy5mb3JFYWNoKCgoZSxyKT0+dGhpcy5jb250YWluZXIuYWRkQ2hpbGRBdChlLmNvbnRhaW5lcixyKSkpfX07ZShbbyh7Y2FzdDpzfSldLG4ucHJvdG90eXBlLFwibGF5ZXJWaWV3c1wiLG51bGwpLGUoW28oe3JlYWRPbmx5OiEwfSldLG4ucHJvdG90eXBlLFwidXBkYXRpbmdQcm9ncmVzc1wiLG51bGwpLG49ZShbaShcImVzcmkudmlld3MuMmQubGF5ZXJzLktub3dsZWRnZUdyYXBoTGF5ZXJWaWV3MkRcIildLG4pO2NvbnN0IGM9bjtleHBvcnR7YyBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==