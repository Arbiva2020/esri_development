import { type ButtonGroupProps, TextAlignValue } from 'jimu-ui';
import { type ButtonType } from 'jimu-ui/lib/components/button';
export type TextAlignmentProps = Omit<ButtonGroupProps, 'onChange'> & {
    buttonType?: ButtonType;
    textAlign?: TextAlignValue;
    onChange?: (value: TextAlignValue) => void;
    showJustify?: boolean;
    autoFlip?: boolean;
};
export declare const TextAlignment: (props: TextAlignmentProps) => JSX.Element;
