// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    // support Google Analytics interface in Window type
    declare interface Window {
        dataLayer: IArguments[];

        /* eslint-disable @typescript-eslint/no-explicit-any */
        gtag?: (...args: any[]) => void;
    }
}

export {};
