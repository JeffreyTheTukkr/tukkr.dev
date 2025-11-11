import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            // use modern api for sass 1.x - required for @use syntax
            scss: {
                api: 'modern',
                additionalData: `
                    @use '/src/scss/variables' as *;
                    @use '/src/scss/mixins' as *;
                `
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any
        }
    },

    plugins: [
        sentrySvelteKit({
            sourceMapsUploadOptions: {
                org: 'tukkr',
                project: 'tukkr'
            }
        }),
        sveltekit()
    ]
});
