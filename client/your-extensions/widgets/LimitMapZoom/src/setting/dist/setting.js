"use strict";
exports.__esModule = true;
var jimu_core_1 = require("jimu-core");
var setting_components_1 = require("jimu-ui/advanced/setting-components");
var Setting = function (props) {
    var onMapWidgetSelected = function (useMapWidgetIds) {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    return (jimu_core_1.React.createElement("div", { className: "widget-setting-demo" },
        jimu_core_1.React.createElement(setting_components_1.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapWidgetSelected })));
};
exports["default"] = Setting;
