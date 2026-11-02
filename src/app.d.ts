declare global {
    interface Window {
        dataLayer: IArguments[];

        /* eslint-disable @typescript-eslint/no-explicit-any */
        gtag?: (...args: any[]) => void;
    }
}

export {};
