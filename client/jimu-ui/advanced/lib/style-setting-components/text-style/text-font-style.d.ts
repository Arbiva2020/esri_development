import { type TextFontStyle, type ButtonGroupProps } from 'jimu-ui';
export type FontStyles = 'bold' | 'italic' | 'underline' | 'strike';
type WeakTextFontStyle = Pick<TextFontStyle, 'bold' | 'italic' | 'underline' | 'strike'>;
export type FontStyleProps = Omit<ButtonGroupProps, 'onChange'> & WeakTextFontStyle & {
    types?: FontStyles[];
    onChange: (key: string, value: boolean) => void;
};
export declare const FontStyle: (props: FontStyleProps) => JSX.Element;
export {};