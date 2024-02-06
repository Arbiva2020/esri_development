/// <reference types="react" />
import { React } from 'jimu-core';
import { type ButtonSize } from 'jimu-ui';
export interface DirectionSelectorProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
    size?: ButtonSize;
    autoFlip?: boolean;
    vertical?: boolean;
    onChange?: (vertical?: boolean) => void;
}
export declare const DirectionSelector: (props: DirectionSelectorProps) => JSX.Element;
