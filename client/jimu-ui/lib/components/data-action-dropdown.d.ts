/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, type IMThemeVariables, type DataAction, type IMWidgetJson, type ThemeButtonType, type DataRecordSet, type BatchDataAction } from 'jimu-core';
import { type ButtonSize } from './button';
interface Props {
    widgetId: string;
    isBatch?: boolean;
    dataSet?: DataRecordSet;
    dataSets?: DataRecordSet[];
    type?: ThemeButtonType;
    size?: ButtonSize;
}
interface ThemeProps {
    theme: IMThemeVariables;
}
interface State {
    isOpen: boolean;
    loading: boolean;
    actionGroups: {
        [key: string]: Array<DataAction | BatchDataAction>;
    };
    actionElement?: React.ReactElement;
}
export declare class _DataActionDropDown extends React.PureComponent<Props & ThemeProps, State> {
    constructor(props: any);
    onDropDownToggle: () => void;
    onActionItemClick: (evt: any, action: DataAction | BatchDataAction) => Promise<void>;
    getWidget(widgetId: string): IMWidgetJson;
    getActionLabel(actionName: string, firstAction: DataAction | BatchDataAction): string;
    createAction(actionName: string): JSX.Element;
    getLoadingStyle(): import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
/**
 * @deprecated
 * This component is deprecated, please use `DataActionList` and pass `DataActionListStyle.Dropdown` as
 * the `listStyle`'s value to get the same experience. The `type` and `size` fields are renamed to `buttonType`
 * and `buttonSize`.
 * Please do notice that UI style might change
 * a little for hover & click, overwritten the style as you need.
 */
export declare const DataActionDropDown: React.ForwardRefExoticComponent<Pick<Props, keyof Props> & {
    theme?: IMThemeVariables;
}>;
export {};
