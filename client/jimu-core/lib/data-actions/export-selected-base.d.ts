import { AbstractDataAction } from '../base-data-action';
import { type DataRecord, type DataRecordSet } from '../data-sources/data-source-interface';
export declare abstract class ExportSelectedBase extends AbstractDataAction {
    isSupported(dataSet: DataRecordSet): Promise<boolean>;
    getRecords(dataSet: DataRecordSet): Promise<DataRecord[]>;
}
