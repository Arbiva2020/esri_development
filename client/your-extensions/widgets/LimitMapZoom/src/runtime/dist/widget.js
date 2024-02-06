"use strict";
exports.__esModule = true;
var jimu_core_1 = require("jimu-core");
var jimu_arcgis_1 = require("jimu-arcgis");
var reactiveUtils_1 = require("esri/core/reactiveUtils");
var useState = jimu_core_1.React.useState;
var Widget = function (props) {
    var _a;
    var activeViewChangeHandler = function (jmv) {
        if (jmv) {
            reactiveUtils_1["default"].when(function () { return jmv.view.stationary === true; }, function () {
                console.log(jmv.view.zoom);
                if (jmv.view.zoom > 20) {
                    jmv.view.goTo({ zoom: 19 });
                }
            });
        }
    };
    return (jimu_core_1.React.createElement("div", { className: "widget-starter jimu-widget" }, props.useMapWidgetIds &&
        props.useMapWidgetIds.length === 1 && (jimu_core_1.React.createElement(jimu_arcgis_1.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }))));
}; 
exports["default"] = Widget;
