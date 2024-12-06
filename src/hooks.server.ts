import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';

Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,

    tracesSampleRate: 1.0

    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: import.meta.env.DEV,
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
// todo: allow `injectFetchProxyScript` when issue in ticket below is resolved
// https://github.com/getsentry/sentry-javascript/pull/9969
export const handle = sequence(sentryHandle({ injectFetchProxyScript: false }));

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
