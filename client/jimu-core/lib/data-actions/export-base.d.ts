import { AbstractDataAction } from '../base-data-action';
import { type DataSource, type QueriableDataSource, type DataRecord, type DataRecordSet } from '../data-sources/data-source-interface';
import { type GeometryType, type IGeometry, type Units } from '@esri/arcgis-rest-types';
export declare abstract class ExportBase extends AbstractDataAction {
    isSupported(dataSet: DataRecordSet): Promise<boolean>;
    checkPrivilege(): Promise<boolean>;
    confirm(dataSource: DataSource, records: DataRecord[]): Promise<{
        needed: boolean;
        content?: {
            title: string;
            content: string;
            okLabel: string;
            cancelLabel: string;
        };
    }>;
    getRecords(dataSource: DataSource, fields?: string[], returnGeometry?: boolean): Promise<DataRecord[]>;
    processGeometryAndBuffer(geometry: IGeometry, distance: number, units: Units): Promise<[IGeometry, GeometryType]>;
    tryCreateReplica(dataSource: QueriableDataSource, format: string, outFields?: string[]): Promise<string>;
    private query;
}
