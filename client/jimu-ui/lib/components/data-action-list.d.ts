/// <reference types="react" />
/** @jsx jsx */
import { React, type IMThemeVariables, type DataRecordSet, type ThemeButtonType } from 'jimu-core';
import { type ButtonSize } from './button';
export declare enum DataActionListStyle {
    IconList = "ICON_LIST",
    List = "LIST",
    Dropdown = "DROPDOWN"
}
interface Props {
    /** The widget id that is using this data-action list */
    widgetId: string;
    /** Whether it's batch-action, which passes in dataSets */
    isBatch?: boolean;
    /** The dataSet used for generating data-action list */
    dataSet?: DataRecordSet;
    /** The dataSets used for generating data-action list, it should work with isBatch field */
    dataSets?: DataRecordSet[];
    /** The data-action-list style, could be 'list', 'icon-list' or 'dropdown' */
    listStyle?: DataActionListStyle;
    /** The dropdown-button type */
    buttonType?: ThemeButtonType;
    /** The dropdown-button size */
    buttonSize?: ButtonSize;
}
/** This component displays available DataAction in an list, icon-list or dropdown style.
 * Widgets that need to use DataAction can use this component.
 * To display in a specific style, just pass `listStyle` with 'list', 'icon-list' or 'dropdown'
 *
 * You can use this component by:
 *
 * `import { DataActionList } from 'jimu-ui'`
 */
export declare const DataActionList: React.ForwardRefExoticComponent<Pick<Props, keyof Props> & {
    theme?: IMThemeVariables;
}>;
export {};
