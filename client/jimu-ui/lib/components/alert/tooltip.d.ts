/// <reference types="react" />
import { React } from 'jimu-core';
import { type Placement } from '../overlay';
import { type AlertButtonProps } from './button';
/**
 * The AlertTooltip component props.
 */
export interface AlertTooltipProps extends AlertButtonProps {
    /**
     * Text content to display.
     */
    text?: string;
    /**
     * The placement of the tooltip.
     * @default bottom
     */
    placement?: Placement;
}
/**
 * A component that displays warning messages in the form of tooltips.
 */
export declare const AlertTooltip: React.ForwardRefExoticComponent<AlertTooltipProps & React.RefAttributes<HTMLButtonElement>>;
