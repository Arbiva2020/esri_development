interface DeepmergeOptions {
    clone?: boolean;
}
export declare const deepmerge: <T>(target: any, source: unknown, options?: DeepmergeOptions) => T;
export {};
