import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    PUBLIC_GA4_ID: {
        public: true,
        static: true,
        schema: (value) => {
            if (!value?.startsWith('G-')) throw new Error('PUBLIC_GA4_ID must be a GA4 measurement id (G-...)');
            return value;
        }
    }
});
