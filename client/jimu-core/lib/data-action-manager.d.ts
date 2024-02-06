/// <reference types="react" />
import { type DataAction, type RegisterDataActionOptions, type BatchDataAction, type DummnyBatchDataAction } from './base-data-action';
import { type DataRecordSet } from './data-sources/data-source-interface';
import { type IMWidgetJson } from './types/app-config';
import { type ImmutableArray } from 'seamless-immutable';
export default class DataActionManager {
    static instance: DataActionManager;
    static getInstance(): DataActionManager;
    private actions;
    private batchActions;
    private actionClassPromises;
    getActions(): DataAction[];
    getBatchActions(): BatchDataAction[];
    getSupportedActions(widgetId: string, dataSet: DataRecordSet): Promise<{
        [key: string]: DataAction[];
    }>;
    getSupportedBatchActions(widgetId: string, dataSets: DataRecordSet[]): Promise<{
        [key: string]: BatchDataAction[];
    }>;
    private _getSupportedActions;
    private getAllWidgetsInSameRootContainer;
    /**
     * This method works for both action and batch action
     * @param actionIdentify format is `${widgetName}.${actionName}`
     * @param excludedActions
     */
    isActionExcluded(actionIdentify: string, excludedActions?: string[] | ImmutableArray<string>): boolean;
    /**
     * Register both the DataAction and BatchDataAction for a widget
     */
    registerWidgetActions(widgetJson: IMWidgetJson): Promise<Array<DataAction | BatchDataAction>>;
    registerAction(options: RegisterDataActionOptions): Promise<DataAction>;
    registerBatchAction(options: RegisterDataActionOptions): Promise<DummnyBatchDataAction>;
    executeDataAction(action: DataAction, dataSet: DataRecordSet, actionConfig?: any): Promise<boolean | React.ReactElement>;
    executeBatchDataAction(action: BatchDataAction, dataSets: DataRecordSet[], actionConfig?: any): Promise<boolean | React.ReactElement>;
    /**
     * Open the widget if it's in a widget controller
     */
    private openWidget;
    _registerAction(options: RegisterDataActionOptions, isBatch: boolean): Promise<DataAction | BatchDataAction>;
    destroyWidgetActions(widgetId: string): void;
    private loadActionClass;
    private testActionSupportData;
    private testBatchActionSupportData;
}
