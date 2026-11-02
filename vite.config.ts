import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
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

    plugins: [
        sveltekit({
            adapter: adapter(),
            extensions: ['.svelte', '.md'],
            preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
            paths: {
                origin: 'https://tukkr.dev'
            },
            csp: {
                directives: {
                    'script-src': ['self', 'https://www.googletagmanager.com']
                }
            }
        })
    ]
});
