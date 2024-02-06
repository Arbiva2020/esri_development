import { type FeatureLayerDataSource, type IMDataSourceInfo, type FeatureLayerQueryParams, type FeatureDataRecord, type SceneLayerDataSource } from 'jimu-core';
import { JimuLayerView, type JimuLayerViewConstructorOptions } from './jimu-layer-view';
/**
 * @ignore
 */
export interface JimuFeatureLayerSceneLayerViewCommonOptions extends JimuLayerViewConstructorOptions {
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript `FeatureLayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html).
     */
    view: __esri.FeatureLayerView | __esri.SceneLayerView;
}
/**
 * @ignore
 * The JimuFeatureLayerView extends from the JimuLayerView.
 */
export declare class JimuFeatureLayerSceneLayerViewCommon extends JimuLayerView {
    view: __esri.FeatureLayerView | __esri.SceneLayerView;
    private highLightHandle;
    private highLightLayerCreationPromise;
    /**
     * highlightFeatureLayer is used highlight layer in mapservice, it is a client-side FeatureLayer.
     */
    private highlightFeatureLayer;
    private highlightFeatureLayerView;
    private updateWatchHandle;
    private popupSelectFeatureWatchHandle;
    private popupVisibleWatchHandle;
    private layerVisibleWatchHandle;
    private highlightOptionsWatchHandle;
    private highlightLayerUpdateWatchHandle;
    /** @ignore */
    private localDefinitionExpression;
    /** @ignore */
    private readonly originalGdbVersion;
    private reactiveUtils;
    /**
     * This property should only be used when DataSource not exists.
     * @ignore
     */
    private selectedFeatureIds;
    constructor(options: JimuFeatureLayerSceneLayerViewCommonOptions);
    ready(): Promise<this>;
    destroy(): void;
    /**
     * This method should only be called when DataSource not exists.
     * @ignore
     */
    getSelectedFeatureIds(): number[];
    /**
     * Query features from client view.
     * The layer view does not provide queryFromServer. When you need to query from server, use the data source.
     * @param query
     */
    queryFeaturesFromClient(query: __esri.Query): Promise<__esri.Graphic[]>;
    private queryFeaturesFromClientHighlightLayer;
    /**
     *
     * @param id
     * @returns
     */
    queryFeatureByIdFromClient(id: number): Promise<__esri.Graphic>;
    /**
     * This method should only be called when DataSource not exists.
     * @ignore
     */
    querySelectedFeaturesFromClient(): Promise<__esri.Graphic[]>;
    /********************
     * The layer view provides some selection methods:
     * * selectFeatureById
     * * selectFeaturesByIds
     * * selectFeaturesFromClientByQuery
     * * selectFeaturesFromServerByQuery
     *
     * What the selection does is: it will highlight the feature. If the layer view has related data source, the related data records will be selected as well.
     ******************/
    /**
     * When select feature by ID, we can pass in the data source record so when the selected records are not loaded in data source, we can add them in.
     * However, if the record is not loaded and is not passed in, there will be no selection.
     * If we can get the layer data source, record can be FeatureDataRecord or Graphic. Otherwise, record can only be Graphic.
     */
    selectFeatureById(id: number, record?: FeatureDataRecord | __esri.Graphic): Promise<void>;
    /**
     * See `selectFeatureById`
     */
    selectFeaturesByIds(ids: number[], records?: FeatureDataRecord[]): Promise<void>;
    selectFeaturesFromClientByQuery(query: __esri.Query): Promise<__esri.Graphic[]>;
    /** @ignore */
    selectFeaturesFromServerByQuery(query: FeatureLayerQueryParams): Promise<__esri.Graphic[]>;
    /**
     * set the definitionExpression to layer and view, but does not apply the definitionExpression to data source.
     */
    setDefinitionExpression(localDefinitionExpression: string): void;
    getLayerDataSource(): FeatureLayerDataSource | SceneLayerDataSource;
    createLayerDataSource(): Promise<FeatureLayerDataSource | SceneLayerDataSource>;
    getHighlightLayerLayer(): __esri.FeatureLayer;
    /**
     * Even the data source instance is not created, this method will still be invoked if the info changed.
     */
    protected onLayerDataSourceInfoChange(preDsInfo: IMDataSourceInfo, dsInfo: IMDataSourceInfo): void;
    private watchPopupSelectFeature;
    private releasePopupVisibleWatchHandle;
    private watchPopupVisible;
    private isPopupSelectCurrentLayerFeature;
    onParentLayerVisibleChange(parentNewVisible: boolean): void;
    private watchLayerVisible;
    private onLayerFinalVisibleChange;
    private watchHighlightOptions;
    /**
     * When map is loaded first time, we'll try to move the selected feature to center
     */
    private tryMoveToCenter;
    private getOrCreateLayerDataSource;
    private getLayerFromFeature;
    private setRefreshIntervalForLayer;
    private setDefinitionExpressionToLayer;
    private highLightSelectedRecords;
    /**
     * For MapService sub layer, we need to create a layer for highlight.
     */
    private tryCreateHighLightFeatureLayer;
    private addFeaturesToHighlightFeatureLayer;
    private removeFeaturesFromHighlightFeatureLayer;
    /**
     * The ids.length must > 0
     */
    private highLightFeatures;
    private clearHighLight;
    private moveFeatureToCenter;
    private getCenterPoint;
    private getSelectedRecordIds;
    /** @ignore */
    private getObjectIdField;
    private getRendererForHighlightLayer;
}
