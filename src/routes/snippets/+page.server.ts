import { getAllSnippets, type PostI } from '$lib/server/mdx';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = () => {
    const allSnippets: PostI[] = getAllSnippets();

    return {
        posts: allSnippets
    };
};
