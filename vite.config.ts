import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',

                // required for (global) variables and mixins to work
                // within `.svelte` files
                additionalData: `
                    @use '/src/scss/variables' as *;
                    @use '/src/scss/mixins' as *;
                `
            }
        }
    },

    plugins: [sveltekit()]
});
