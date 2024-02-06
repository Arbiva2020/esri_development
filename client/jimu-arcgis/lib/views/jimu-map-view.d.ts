import { JimuMapViewStatus, type DataSource, type DataRecordSet, type ArcGISSubLayer } from 'jimu-core';
import { JimuLayerView } from './layers/jimu-layer-view';
import { type MapViewManager } from '../mapview-manager';
import { type JimuPointSymbol, type JimuPolylineSymbol, type JimuPolygonSymbol } from 'jimu-ui/advanced/map';
export declare enum ActionType {
    DataAction = "DATA_ACTION",
    MessageAction = "MESSAGE_ACTION"
}
export interface SymbolOption {
    pointSymbol?: JimuPointSymbol;
    polylineSymbol?: JimuPolylineSymbol;
    polygonSymbol?: JimuPolygonSymbol;
}
export interface ShowOnMapData {
    mapWidgetId: string;
    messageWidgetId: string;
    jimuMapViewId: string;
    dataSet: DataRecordSet;
    title: string;
    type: ActionType;
    symbolOption?: SymbolOption;
}
export interface ShowOnMapDatas {
    [id: string]: ShowOnMapData;
}
export declare enum DataChangeType {
    Create = "CREATE",
    Created = "CREATED",
    Remove = "REMOVE"
}
export declare enum DataChangeStatus {
    Fulfilled = "FULFILLED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    RejectedAndKnown = "REJECTEDANDKNOWN"
}
export interface AddToMapData {
    mapWidgetId: string;
    messageWidgetId: string;
    jimuMapViewId: string;
    dataSourceId: string;
    title: string;
    type: ActionType;
    dataChangeType: DataChangeType;
    dataChangeStatus: DataChangeStatus;
}
export interface AddToMapDatas {
    [id: string]: AddToMapData;
}
export declare const SHOW_ON_MAP_DATA_ID_PREFIX = "layer_of_showOnMap_action_";
export declare const ADD_TO_MAP_DATA_ID_PREFIX = "layer_of_addToMap_action_";
/**
 * A MapTool is a ArcGIS JavaScript API widget instance used in map widget.
 */
export interface JimuMapTool {
    /** The tool name, use the ArcGIS JavaScript API class name. */
    name: string;
    /** The instance of ArcGIS JavaScript API class */
    instance: __esri.Widget;
}
/**
 * `JimuMapViewConstructorOptions` is used in the constructor of the `JimuMapView`, to initiate a `JimuMapView` instance.
 */
export interface JimuMapViewConstructorOptions {
    /**
     * The widget id to create the `JimuMapView` instance.
     */
    mapWidgetId: string;
    /**
     * The `isActive` property indicates whether the map in the map widget is accessible.
     * For example, for a single-source map, there is a single `JimuMapView` instance, therefore, the `isActive` is always true.
     * With a multi-source map, there are two JimuMapView instances. In the multi-source map, the property `isActive` is true for the top `JimuMapView` instance,
     * and false for the one beneath. Upon clicking the switch map tool, the `isActive` properties will switch.
     */
    isActive?: boolean;
    /**
     * The `dataSourceId` is the id of the datasource selected to create the map.
     */
    dataSourceId: string;
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html), including a
     * [`MapView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) or a
     * [`SceneView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html). In the ArcGIS Maps SDK for JavaScript,
     * the `MapView` and `SceneView` are part of the `__esri` namespace types. Thus, their types are `__esri.MapView` and `__esri.SceneView`.
     */
    view: __esri.MapView | __esri.SceneView;
    /**
     * The `isEnablePopup` property indicates whether to display popups when features in the `view` are clicked.
     */
    isEnablePopup?: boolean;
    /** Pass MapViewManager in to avoid circular dependency. */
    mapViewManager: MapViewManager;
}
export interface JimuLayerViews {
    [jimuLayerViewId: string]: JimuLayerView;
}
type JimuLayerViewSelectedFeatureIdsChangeListener = (jimuLayerView: JimuLayerView) => void;
type JimuMapViewCacheListener = (jimuMapView: JimuMapView) => void;
type JimuMapViewRestoreListener = (jimuMapView: JimuMapView) => void;
/**
 * `JimuMapView` is the `view` for developers to develop the map-related functions.
 * For example, developers can use the `view` property of the `JimuMapView` instance to get the original
 *  <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html" target="_blank">ArcGIS Maps SDK for JavaScript `View`</a>,
 * then use the original `view` to develop the map-related functions. At the same time, `JimuMapView` also provides
 * properties such as `isActive` and `status` to indicate the current status in the map widget.
 *
 * `JimuMapView` is a wrapper class for the ArcGIS Maps SDK for JavaScript [`View`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html).
 * It is created by a map widget using a map [`DataSource`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSource).
 *
 * ```typescript
 * import { JimuMapView } from 'jimu-arcgis';
 *
 * // Add the State interface
 * interface State {
 *  extent: __esri.Extent
 * }
 *
 * // On an active view change, set the extent State property
 * onActiveViewChange = (jimuMapView: JimuMapView) => {
 *  if(!this.extentWatch){
 *   this.extentWatch = jimuMapView.view.watch('extent', extent => {
 *     this.setState({
 *       extent
 *     })
 *   });
 *  }
 * }
 *
 * // Use the `JimuMapView` instance from the map widget through the `JimuMapViewComponent` React component
<JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds[0]} onActiveViewChange={this.onActiveViewChange}></JimuMapViewComponent>
 * ```
 *
 */
export declare class JimuMapView {
    /**
     * The id of the `JimuMapView` instance.
     */
    id: string;
    /**
     * The id of the widget creating the `JimuMapView` instance.
     */
    mapWidgetId: string;
    /**
     * The `isActive` property indicates whether the map in the map widget is accessible.
     * For example, for a single-source map, there is a single `JimuMapView` instance, therefore, the `isActive` is always true.
     * With a multi-source map, there are two `JimuMapView` instances. In the multi-source map, the property `isActive` is true for the top `JimuMapView` instance,
     * and false for the one beneath. Upon clicking the switch map tool, the `isActive` properties will switch.
     */
    isActive?: boolean;
    /**
     * The id of the `DataSource` selected to create the map.
     */
    dataSourceId: string;
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript `View`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html), including a
     * [`MapView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) or a
     * [`SceneView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html). In the ArcGIS Maps SDK for JavaScript,
     * the `MapView` and `SceneView` are part of the `__esri` namespace types. Thus, their types are `__esri.MapView` and `__esri.SceneView`.
     */
    view: __esri.MapView | __esri.SceneView;
    /**
     * The status of the `JimuMapView` instance. `JimuMapViewStatus` enumeration members include `"LOADING"`, `"LOADED"` and `"FAILED"`.
     */
    status: JimuMapViewStatus;
    /**
     * The union for all `JimuLayerView` instances and the layer view object wrapper.
     * the JimuLayerView instance in this object may not been loaded. Please call `whenJimuLayerViewLoaded()` to wait for it's loaded.
     */
    jimuLayerViews?: JimuLayerViews;
    /** The created map tools (ArcGIS JavaScript API widgets) for this view. */
    jimuMapTools: JimuMapTool[];
    private clickHighlightEnabled;
    private jimuMapViewLoadPromise;
    private jimuLayerViewLoadPromises;
    private showOnMapDatas;
    private readonly mapViewManager;
    private selectedFeatureIdsChangeListeners;
    private cacheListeners;
    private restoreListeners;
    constructor(options: JimuMapViewConstructorOptions);
    addJimuMapTool(tool: JimuMapTool): void;
    deleteJimuMapTool(toolName: string): void;
    /**
     * @ignore
     */
    showMapTools(): void;
    /**
     * @ignore
     */
    hideMapTools(): void;
    enableClickOpenPopup(): void;
    disableClickOpenPopup(): void;
    isClickOpenPopupEnabled(): boolean;
    enableClickHighlight(): void;
    disableClickHighlight(): void;
    isClickHighlightEnabled(): boolean;
    setIsActive(isActive: boolean): void;
    private initView;
    private onClick;
    private selectDataSourceOrFeatureByFeatures;
    private isMapServiceLayerPopupEnabled;
    private tryIdentifyClickedFeature;
    private readonly getJimuLayerViewIdByJimuLayerId;
    private readonly getJimuLayerViewIdByAPILayer;
    private clearAllJimuLayerViewsSelectRecord;
    private addJimuLayerView;
    /**
     * Resolve the JimuMapView when it is loaded.
     */
    whenJimuMapViewLoaded(): Promise<JimuMapView>;
    /**
     * Return the JimuLayerView when it's loaded.
     *
     * For a JimuLayerView id, the instance may not have been craeted, but we can make sure the first level JimuLayerView are created.
     * So, for a JimuLayerView id, we'll make sure its parent JimuLayerView get created and ready, and the JimuLayerView will create its children JimuLayerViews in the ready().
     */
    whenJimuLayerViewLoaded(jimuLayerViewId: string): Promise<JimuLayerView>;
    /** @see whenJimuLayerViewLoaded, but use data source  */
    whenJimuLayerViewLoadedByDataSource(ds: DataSource): Promise<JimuLayerView>;
    private makeSureParentLayerViewsLoaded;
    /**
     * return the loaded JimuLayerViews only
     */
    whenAllJimuLayerViewLoaded(): Promise<JimuLayerViews>;
    /**
     * Give a parent JimuLayerView id, will load all of its children JimuLayerViews.
     * For failed JimuLayerViews, we'll catch the error but they don't stop others.
     */
    private whenChildJimuLayerViewLoaded;
    /**
     * Return all parent JimuLayerViews.
     */
    getParentJimuLayerViews(jimuLayerViewId: string): JimuLayerView[];
    /**
     * Return all child JimuLayerViews.
     */
    getAllChildJimuLayerViews(jimuLayerViewId: any): JimuLayerView[];
    /**
     * Return the direct child JimuLayerViews
     */
    getChildJimuLayerViewIds(jimuLayerViewId: any): string[];
    private findChildLayerView;
    /**
     * Start to create JimuLayerViews
     * This method does not promise all layer views are created, but it promises the first level are created.
     */
    private startCreateJimuLayerViews;
    /**
     * Create the JimuLayerView and add it into the jimuLayerViews object. Resolve the promise when its ready.
     *
     * @param layerOrSubLayer the layer can be a Layer or a SubLayer
     * @param notInMapDataSource Optional, the layer data source to be provided when it is newly added to the map
     * @param fromRuntime Optional, true means the JimuLayerView is created from runtime. e.g. The JimuLayerView is created by AddData widget at runtime. false means the layer is a builtin layer of WebMap or WebScene.
     */
    createJimuLayerView(layerOrSubLayer: __esri.Layer | ArcGISSubLayer, parentJimuLayerId: string, index: number, notInMapDataSource?: DataSource, fromRuntime?: boolean): Promise<JimuLayerView>;
    private onStoreChange;
    /**
     * Clear the selected features.
     */
    clearSelectedFeatures(): void;
    /**
     * Select features in all layers in the map by a graphic.
     * */
    selectFeaturesByGraphic(graphic: __esri.Graphic, spatialRelationship: string): Promise<any>;
    private getSelectRecordsByQueryPromise;
    /**
     * Destroy the `JimuMapView` instance and the [ArcGIS Maps SDK for JavaScript `View`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) at the same time.
     */
    destroy(): void;
    private _getDefaultJimuMapViewId;
    /**
     * Draw data on the map, using a dedicated [`GraphicsLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html)
     * for every data entry. This will clear the layers drawn previously.
     */
    drawDataOnMap(newShowOnMapDatas: ShowOnMapDatas): void;
    /**
     * Draw the features in a [`GraphicsLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html).
     */
    drawDataRecordSet(dataSet: DataRecordSet, targetLayerId: string, title?: string, symbolOption?: SymbolOption): Promise<__esri.Graphic[]>;
    /**
     * Update the drawn [`GraphicsLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html).
     */
    updateDrawnDataRecordSet(dataSet: DataRecordSet, targetLayerId: string, title?: string, symbolOption?: SymbolOption): Promise<__esri.Graphic[]>;
    /**
     * Get the graphics from `dataRecords`
     */
    private getGraphicsFromRecords;
    /**
     * get symbol
     */
    private getSymbol;
    /**
     * get default symbol
     */
    private getDefaultSymbol;
    /** jimu-map-view
     * get default symbol from renderer
     */
    private getDefaultSymbolByRenderer;
    /**
     * add layers according to the corresponding types of data source
     */
    addOrRemoveDataOnMap(newAddToMapDatas: AddToMapDatas): void;
    addLayerToMap(dataSourceId: string, targetLayerId: string, title?: string): void;
    /**
     * Return the max layer index of root layers
     */
    private getMaxLayerIndex;
    removeLayerFromMap(targetLayerId: string): void;
    /**
     * Indicate JimuMapView is destroyed or not.
     */
    isDestroyed(): boolean;
    /**
     * Return true if map instance is alive and not destroyed, but map container is detached from the DOM tree.
     * @ignore
     */
    isCached(): boolean;
    /**
     * The listener will be triggered only when the layer data source is not created. If data source is created, use DataSourceInfo to listen to the change.
     * @ignore
     * @param listener
     */
    addJimuLayerViewSelectedFeatureIdsChangeListener(listener: JimuLayerViewSelectedFeatureIdsChangeListener): void;
    /**
     * @ignore
     * @param listener
     */
    removeJimuLayerViewSelectedFeatureIdsChangeListener(listener: JimuLayerViewSelectedFeatureIdsChangeListener): void;
    /**
     * @ignore
     * @param jimuLayerView
     */
    onJimuLayerViewSelectedFeatureIdsChange(jimuLayerView: JimuLayerView): void;
    /**
     * The listener will be triggered when the map is cached, which means map container is detached from the DOM tree but the map is not destroyed.
     * @ignore
     * @param listener
     */
    addCacheListener(listener: JimuMapViewCacheListener): void;
    /**
     * @ignore
     * @param listener
     */
    removeCacheListener(listener: JimuMapViewCacheListener): void;
    /**
     * This method is called when map container is detached from the DOM tree but the map is not destroyed,
     * a typical scenario is that the map is scrolled out of the current page and map becomes invisible.
     * @ignore
     */
    onCache(): void;
    /**
     * The listener will be triggered when the map is restored from cached status, which means map container is attached to the DOM tree again.
     * @ignore
     * @param listener
     */
    addRestoreListener(listener: JimuMapViewRestoreListener): void;
    /**
     * @ignore
     * @param listener
     */
    removeRestoreListener(listener: JimuMapViewRestoreListener): void;
    /**
     * This method is called when map container is attached to the DOM tree again,
     * a typical scenario is that the cached map is scrolled into the current page and map becomes visible again.
     * @ignore
     */
    onRestore(): void;
}
export {};
