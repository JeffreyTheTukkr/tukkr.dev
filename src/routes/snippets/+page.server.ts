import { getAllSnippets, type SnippetI } from '$lib/server/mdx';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = () => {
    const allSnippets: SnippetI[] = getAllSnippets();

    return {
        posts: allSnippets
    };
};
