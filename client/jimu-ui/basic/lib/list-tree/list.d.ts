/// <reference types="react" />
/** @jsx jsx */
import { jsx } from 'jimu-core';
import { type ThemeProps } from 'jimu-ui';
import { type BaseTreeListProps, type TreeItemsType } from './common/tree-types';
export type ListItemsType = TreeItemsType;
/**
 * The list component props.
 */
export interface ListProps extends Omit<BaseTreeListProps, 'checkboxLinkage'> {
    /**
     * List item nodes array
     */
    itemsJson?: ListItemsType;
}
export declare function _List(props: ListProps & ThemeProps): jsx.JSX.Element;
/**
 * List component
 *
 * ```ts
 * import { List } from 'jimu-ui/basic/jimu-ui/basic/list-tree'
 * ```
 */
export declare const List: import("react").ForwardRefExoticComponent<Pick<ListProps & ThemeProps, keyof ListProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
