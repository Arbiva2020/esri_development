/// <reference types="react" />
import { type ThemeModule } from '../type';
interface GlobalStyleProps {
    isRTL?: boolean;
    module: ThemeModule;
    module2?: ThemeModule;
}
export declare const GlobalStyle: (props: GlobalStyleProps) => JSX.Element;
export {};
