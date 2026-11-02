import { error } from '@sveltejs/kit';
import { getSnippet } from '#lib/snippets.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const post = await getSnippet(params.slug);
    if (!post) error(404, 'Not Found');

    return post;
};
