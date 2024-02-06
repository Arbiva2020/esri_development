/// <reference types="react" />
import { BaseTool, type BaseToolProps, type IconType } from '../layout/base/base-tool';
import { type InitialMapState } from '../config';
export default class Home extends BaseTool<BaseToolProps, unknown> {
    toolName: string;
    getTitle(): string;
    getIcon(): IconType;
    getHomeContent: (initialMapState: InitialMapState) => JSX.Element;
    getExpandPanel(): JSX.Element;
}
