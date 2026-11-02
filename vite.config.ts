import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use '/src/scss/variables' as *;
                    @use '/src/scss/mixins' as *;
                `
            }
        }
    },

    plugins: [sveltekit()]
});
