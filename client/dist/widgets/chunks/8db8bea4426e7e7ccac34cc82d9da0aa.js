"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_layers_graphics_OptimizedFeature_js-node_modules_arcgis_core_layers_-e75690"],{

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptimizedFeature": () => (/* binding */ t),
/* harmony export */   "OptimizedFeatureWithGeometry": () => (/* binding */ e),
/* harmony export */   "hasGeometry": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const s=new t(this.geometry,this.attributes,this.centroid,this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}}function s(t){return!(null==t.geometry||!t.geometry.coords||!t.geometry.coords.length)}class e extends t{}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(t=[],e=[],s=!1){this.lengths=t??[],this.coords=e??[],this.hasIndeterminateRingOrder=s}static fromRect(e){const[s,h,n,r]=e,i=n-s,o=r-h;return new t([5],[s,h,i,0,0,o,-i,0,0,-o])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const h=this.lengths[s];for(let s=0;s<h;s++){t(this.coords[2*(s+e)],this.coords[2*(s+e)+1])}e+=h}}clone(e){return e?(e.set(this.coords),new t(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new t(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGRiOGJlYTQ0MjZlN2U3Y2NhYzM0Y2M4MmQ5ZGEwYWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVCQUF1QixNQUFNLG1IQUFtSCxZQUFZLHlFQUF5RSx1RkFBdUYsY0FBYyx5RUFBeUUsbUJBQW9HOzs7Ozs7Ozs7Ozs7Ozs7QUNKL2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGNBQWMsMFZBQTBWLFlBQVksY0FBYywrZ0JBQW9pQjs7Ozs7Ozs7Ozs7Ozs7O0FDSjk2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNEJBQTRCLHNFQUFzRSxtQkFBbUIsNkJBQTZCLDBDQUEwQyxjQUFjLCtCQUErQixnQkFBZ0IsaUNBQWlDLFdBQVcseUNBQXlDLGlCQUFpQixRQUFRLHNEQUFzRCxZQUFZLHNCQUFzQixLQUFLLHdCQUF3QixZQUFZLElBQUksS0FBSywrQ0FBK0MsTUFBTSxTQUFTLDJLQUFnTSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2xheWVycy9ncmFwaGljcy9PcHRpbWl6ZWRGZWF0dXJlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2xheWVycy9ncmFwaGljcy9PcHRpbWl6ZWRGZWF0dXJlU2V0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2xheWVycy9ncmFwaGljcy9PcHRpbWl6ZWRHZW9tZXRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuY2xhc3MgdHtjb25zdHJ1Y3Rvcih0PW51bGwscz17fSxlLGgpe3RoaXMuZ2VvbWV0cnk9dCx0aGlzLmF0dHJpYnV0ZXM9cyx0aGlzLmNlbnRyb2lkPWUsdGhpcy5vYmplY3RJZD1oLHRoaXMuZGlzcGxheUlkPTAsdGhpcy5nZW9oYXNoWD0wLHRoaXMuZ2VvaGFzaFk9MH13ZWFrQ2xvbmUoKXtjb25zdCBzPW5ldyB0KHRoaXMuZ2VvbWV0cnksdGhpcy5hdHRyaWJ1dGVzLHRoaXMuY2VudHJvaWQsdGhpcy5vYmplY3RJZCk7cmV0dXJuIHMuZGlzcGxheUlkPXRoaXMuZGlzcGxheUlkLHMuZ2VvaGFzaFg9dGhpcy5nZW9oYXNoWCxzLmdlb2hhc2hZPXRoaXMuZ2VvaGFzaFksc319ZnVuY3Rpb24gcyh0KXtyZXR1cm4hKG51bGw9PXQuZ2VvbWV0cnl8fCF0Lmdlb21ldHJ5LmNvb3Jkc3x8IXQuZ2VvbWV0cnkuY29vcmRzLmxlbmd0aCl9Y2xhc3MgZSBleHRlbmRzIHR7fWV4cG9ydHt0IGFzIE9wdGltaXplZEZlYXR1cmUsZSBhcyBPcHRpbWl6ZWRGZWF0dXJlV2l0aEdlb21ldHJ5LHMgYXMgaGFzR2VvbWV0cnl9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmNsYXNzIGV7Y29uc3RydWN0b3IoKXt0aGlzLm9iamVjdElkRmllbGROYW1lPW51bGwsdGhpcy5nbG9iYWxJZEZpZWxkTmFtZT1udWxsLHRoaXMuZ2VvaGFzaEZpZWxkTmFtZT1udWxsLHRoaXMuZ2VvbWV0cnlQcm9wZXJ0aWVzPW51bGwsdGhpcy5nZW9tZXRyeVR5cGU9bnVsbCx0aGlzLnNwYXRpYWxSZWZlcmVuY2U9bnVsbCx0aGlzLmhhc1o9ITEsdGhpcy5oYXNNPSExLHRoaXMuZmVhdHVyZXM9W10sdGhpcy5maWVsZHM9W10sdGhpcy50cmFuc2Zvcm09bnVsbCx0aGlzLmV4Y2VlZGVkVHJhbnNmZXJMaW1pdD0hMSx0aGlzLnVuaXF1ZUlkRmllbGQ9bnVsbCx0aGlzLnF1ZXJ5R2VvbWV0cnlUeXBlPW51bGwsdGhpcy5xdWVyeUdlb21ldHJ5PW51bGx9d2Vha0Nsb25lKCl7Y29uc3QgdD1uZXcgZTtyZXR1cm4gdC5vYmplY3RJZEZpZWxkTmFtZT10aGlzLm9iamVjdElkRmllbGROYW1lLHQuZ2xvYmFsSWRGaWVsZE5hbWU9dGhpcy5nbG9iYWxJZEZpZWxkTmFtZSx0Lmdlb2hhc2hGaWVsZE5hbWU9dGhpcy5nZW9oYXNoRmllbGROYW1lLHQuZ2VvbWV0cnlQcm9wZXJ0aWVzPXRoaXMuZ2VvbWV0cnlQcm9wZXJ0aWVzLHQuZ2VvbWV0cnlUeXBlPXRoaXMuZ2VvbWV0cnlUeXBlLHQuc3BhdGlhbFJlZmVyZW5jZT10aGlzLnNwYXRpYWxSZWZlcmVuY2UsdC5oYXNaPXRoaXMuaGFzWix0Lmhhc009dGhpcy5oYXNNLHQuZmVhdHVyZXM9dGhpcy5mZWF0dXJlcyx0LmZpZWxkcz10aGlzLmZpZWxkcyx0LnRyYW5zZm9ybT10aGlzLnRyYW5zZm9ybSx0LmV4Y2VlZGVkVHJhbnNmZXJMaW1pdD10aGlzLmV4Y2VlZGVkVHJhbnNmZXJMaW1pdCx0LnVuaXF1ZUlkRmllbGQ9dGhpcy51bmlxdWVJZEZpZWxkLHQucXVlcnlHZW9tZXRyeT10aGlzLnF1ZXJ5R2VvbWV0cnksdC5xdWVyeUdlb21ldHJ5VHlwZT10aGlzLnF1ZXJ5R2VvbWV0cnlUeXBlLHR9fWV4cG9ydHtlIGFzIGRlZmF1bHR9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjcvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmNsYXNzIHR7Y29uc3RydWN0b3IodD1bXSxlPVtdLHM9ITEpe3RoaXMubGVuZ3Rocz10Pz9bXSx0aGlzLmNvb3Jkcz1lPz9bXSx0aGlzLmhhc0luZGV0ZXJtaW5hdGVSaW5nT3JkZXI9c31zdGF0aWMgZnJvbVJlY3QoZSl7Y29uc3RbcyxoLG4scl09ZSxpPW4tcyxvPXItaDtyZXR1cm4gbmV3IHQoWzVdLFtzLGgsaSwwLDAsbywtaSwwLDAsLW9dKX1nZXQgaXNQb2ludCgpe3JldHVybiAwPT09dGhpcy5sZW5ndGhzLmxlbmd0aH1nZXQgbWF4TGVuZ3RoKCl7cmV0dXJuIE1hdGgubWF4KC4uLnRoaXMubGVuZ3Rocyl9Z2V0IHNpemUoKXtyZXR1cm4gdGhpcy5sZW5ndGhzLnJlZHVjZSgoKHQsZSk9PnQrZSkpfWZvckVhY2hWZXJ0ZXgodCl7bGV0IGU9MDt0aGlzLmxlbmd0aHMubGVuZ3RofHx0KHRoaXMuY29vcmRzWzBdLHRoaXMuY29vcmRzWzFdKTtmb3IobGV0IHM9MDtzPHRoaXMubGVuZ3Rocy5sZW5ndGg7cysrKXtjb25zdCBoPXRoaXMubGVuZ3Roc1tzXTtmb3IobGV0IHM9MDtzPGg7cysrKXt0KHRoaXMuY29vcmRzWzIqKHMrZSldLHRoaXMuY29vcmRzWzIqKHMrZSkrMV0pfWUrPWh9fWNsb25lKGUpe3JldHVybiBlPyhlLnNldCh0aGlzLmNvb3JkcyksbmV3IHQodGhpcy5sZW5ndGhzLnNsaWNlKCksZSx0aGlzLmhhc0luZGV0ZXJtaW5hdGVSaW5nT3JkZXIpKTpuZXcgdCh0aGlzLmxlbmd0aHMuc2xpY2UoKSx0aGlzLmNvb3Jkcy5zbGljZSgpLHRoaXMuaGFzSW5kZXRlcm1pbmF0ZVJpbmdPcmRlcil9fWV4cG9ydHt0IGFzIGRlZmF1bHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9