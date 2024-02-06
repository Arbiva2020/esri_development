/** @jsx jsx */
import { React, type IntlShape, type IMThemeVariables, ReactRedux, type IMAppConfig } from 'jimu-core';
export interface ProxySettingPopupProps {
    isOpen: boolean;
    className?: string;
    onFinish: (appConfig?: IMAppConfig) => Promise<void>;
    onCancel: () => void;
    onToggle: () => void;
}
interface ExtraProps {
    intl: IntlShape;
    theme: IMThemeVariables;
}
export declare const ProxySettingPopup: ReactRedux.ConnectedComponent<import("@emotion/styled").StyledComponent<Pick<Omit<ProxySettingPopupProps & ExtraProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
}, "forwardedRef" | keyof ProxySettingPopupProps> & {
    theme?: IMThemeVariables;
}, {}, {}>, {
    className?: string;
    isOpen: boolean;
    forwardedRef?: React.Ref<any>;
    theme?: IMThemeVariables;
    onCancel: () => void;
    onFinish: (appConfig?: IMAppConfig) => Promise<void>;
    onToggle: () => void;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export {};
