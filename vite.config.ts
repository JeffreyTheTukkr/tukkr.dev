import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // required for (global) variables and mixins to work
                // within `.svelte` files
                additionalData: `
                    @import './src/scss/variables';
                    @import './src/scss/mixins';               
                `
            }
        }
    },

    plugins: [sveltekit()]
});
