import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import './src/scss/variables';
                    @import './src/scss/mixins';               
                `
            }
        }
    },

    plugins: [sveltekit()]
});
