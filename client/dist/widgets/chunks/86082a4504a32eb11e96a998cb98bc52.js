"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_core_workers_request_js"],{

/***/ "./node_modules/@arcgis/core/core/workers/request.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/request.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let t;function s(s,a){let r=a.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",a.responseType=r;const n=a.signal;return delete a.signal,globalThis.invokeStaticMessage("request",{url:s,options:a},{signal:n}).then((async o=>{let i,l,u,c,p;if(o.data)if(o.data instanceof ArrayBuffer){if(!("json"!==r&&"text"!==r&&"blob"!==r||(i=new Blob([o.data]),"json"!==r&&"text"!==r||(t||(t=new FileReaderSync),c=t.readAsText(i),"json"!==r)))){try{l=JSON.parse(c||null)}catch(b){const t={...b,url:s,requestOptions:a};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",b.message,t)}if(l.error){const t={...l.error,url:s,requestOptions:a};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",l.error.message,t)}}}else"native"===r&&(o.data.signal=n,u=await fetch(o.data.url,o.data),o.httpStatus=u.status);switch(r){case"blob":p=i;break;case"json":p=l;break;case"native":p=u;break;case"text":p=c;break;default:p=o.data}return{data:p,httpStatus:o.httpStatus,requestOptions:a,ssl:o.ssl,url:s}}))}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODYwODJhNDUwNGEzMmViMTFlOTZhOTk4Y2I5OGJjNTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQixNQUFNLGdCQUFnQixxQkFBcUIsd0lBQXdJLGlCQUFpQixpRUFBaUUsZ0JBQWdCLEVBQUUsU0FBUyxrQkFBa0IsY0FBYyw0Q0FBNEMsbUpBQW1KLElBQUksc0JBQXNCLFNBQVMsU0FBUyw2QkFBNkIsVUFBVSxpREFBQywrQkFBK0IsWUFBWSxTQUFTLG1DQUFtQyxVQUFVLGlEQUFDLHVDQUF1QywyRkFBMkYsVUFBVSxlQUFlLE1BQU0sZUFBZSxNQUFNLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxpQkFBaUIsT0FBTyxpRUFBaUUsR0FBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9jb3JlL3dvcmtlcnMvcmVxdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yNy9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IGUgZnJvbVwiLi4vRXJyb3IuanNcIjtsZXQgdDtmdW5jdGlvbiBzKHMsYSl7bGV0IHI9YS5yZXNwb25zZVR5cGU7cj9cImFycmF5LWJ1ZmZlclwiIT09ciYmXCJibG9iXCIhPT1yJiZcImpzb25cIiE9PXImJlwibmF0aXZlXCIhPT1yJiZcIm5hdGl2ZS1yZXF1ZXN0LWluaXRcIiE9PXImJlwidGV4dFwiIT09ciYmKHI9XCJ0ZXh0XCIpOnI9XCJqc29uXCIsYS5yZXNwb25zZVR5cGU9cjtjb25zdCBuPWEuc2lnbmFsO3JldHVybiBkZWxldGUgYS5zaWduYWwsZ2xvYmFsVGhpcy5pbnZva2VTdGF0aWNNZXNzYWdlKFwicmVxdWVzdFwiLHt1cmw6cyxvcHRpb25zOmF9LHtzaWduYWw6bn0pLnRoZW4oKGFzeW5jIG89PntsZXQgaSxsLHUsYyxwO2lmKG8uZGF0YSlpZihvLmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcil7aWYoIShcImpzb25cIiE9PXImJlwidGV4dFwiIT09ciYmXCJibG9iXCIhPT1yfHwoaT1uZXcgQmxvYihbby5kYXRhXSksXCJqc29uXCIhPT1yJiZcInRleHRcIiE9PXJ8fCh0fHwodD1uZXcgRmlsZVJlYWRlclN5bmMpLGM9dC5yZWFkQXNUZXh0KGkpLFwianNvblwiIT09cikpKSl7dHJ5e2w9SlNPTi5wYXJzZShjfHxudWxsKX1jYXRjaChiKXtjb25zdCB0PXsuLi5iLHVybDpzLHJlcXVlc3RPcHRpb25zOmF9O3Rocm93IG5ldyBlKFwicmVxdWVzdDpzZXJ2ZXJcIixiLm1lc3NhZ2UsdCl9aWYobC5lcnJvcil7Y29uc3QgdD17Li4ubC5lcnJvcix1cmw6cyxyZXF1ZXN0T3B0aW9uczphfTt0aHJvdyBuZXcgZShcInJlcXVlc3Q6c2VydmVyXCIsbC5lcnJvci5tZXNzYWdlLHQpfX19ZWxzZVwibmF0aXZlXCI9PT1yJiYoby5kYXRhLnNpZ25hbD1uLHU9YXdhaXQgZmV0Y2goby5kYXRhLnVybCxvLmRhdGEpLG8uaHR0cFN0YXR1cz11LnN0YXR1cyk7c3dpdGNoKHIpe2Nhc2VcImJsb2JcIjpwPWk7YnJlYWs7Y2FzZVwianNvblwiOnA9bDticmVhaztjYXNlXCJuYXRpdmVcIjpwPXU7YnJlYWs7Y2FzZVwidGV4dFwiOnA9YzticmVhaztkZWZhdWx0OnA9by5kYXRhfXJldHVybntkYXRhOnAsaHR0cFN0YXR1czpvLmh0dHBTdGF0dXMscmVxdWVzdE9wdGlvbnM6YSxzc2w6by5zc2wsdXJsOnN9fSkpfWV4cG9ydHtzIGFzIGV4ZWN1dGV9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9