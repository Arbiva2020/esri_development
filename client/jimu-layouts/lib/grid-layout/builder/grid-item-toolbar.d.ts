/** @jsx jsx */
import { jsx, type IMLayoutItemJson } from 'jimu-core';
export interface GridItemToolbarProps {
    layoutId: string;
    layoutItem: IMLayoutItemJson;
    refElement: HTMLElement;
}
export declare function GridItemToolbar(props: GridItemToolbarProps): jsx.JSX.Element;
