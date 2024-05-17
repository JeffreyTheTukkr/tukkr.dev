import { getAllPosts, type PostI } from '$lib/server/mdx';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = () => {
    const allPosts: PostI[] = getAllPosts();

    return {
        posts: allPosts
    };
};
