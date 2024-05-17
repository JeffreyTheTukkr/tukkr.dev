import type { ServerLoad } from '@sveltejs/kit';
import { getPostBySlug, type PostI } from '$lib/server/mdx';

export const load: ServerLoad = ({ url }): { post: PostI } => {
    // retrieves the second string path part after `/` to match the mdx filename
    const lastPath: string = url.pathname.split('/')[2];
    const post: PostI = getPostBySlug(lastPath);

    return {
        post: post
    };
};
