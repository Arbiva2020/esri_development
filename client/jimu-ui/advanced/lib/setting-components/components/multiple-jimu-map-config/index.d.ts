/// <reference types="react" />
import { jsx } from 'jimu-core';
import { type ListProps } from 'jimu-ui/basic/list-tree';
export interface MultipleJimuMapConfigProps {
    /** The map widget ID that is using this component. */
    mapWidgetId: string;
    /** The JSX content that you want to put in the SidePopper panel, DO NOT wrap it with SidePopper component. */
    sidePopperContent?: JSX.Element;
    /** Whether disable switch map behavior when click different datasource, default set to `false`. */
    disableSwitchMap?: boolean;
    /** Whether to disable the whole list */
    disabled?: boolean;
    /** The callback function of clicking an item of the list. */
    onClick?: (dataSourceId: string) => void;
    /** This is used for checking whether a specific dataSourceId is valid for configuring.
     * It will show a warning icon if the return value is `false`.
     */
    isDataSourceValid?: (dataSourceId: string) => boolean;
    /**
     * The tooltip that shows up when hovering on a invalid datasource's warning icon.
     */
    invalidDataSourceTooltip?: string;
}
declare function _MultipleJimuMapConfig(props: MultipleJimuMapConfigProps & ListProps): jsx.JSX.Element;
/**
 * This component is used for configuring one or multiple `JimuMap`. If there are two datasources selected
 * in the connected map widget, click between the list item of this component will switch the map widget's
 * active map. The switch behavior is on the fly (discard when refresh the page).
 * Use this component by `import { MultipleJimuMapConfig } from 'jimu-ui/advanced/setting-components'`
 */
export declare const MultipleJimuMapConfig: typeof _MultipleJimuMapConfig;
export {};
