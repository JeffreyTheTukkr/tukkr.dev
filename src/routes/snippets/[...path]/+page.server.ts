import type { ServerLoad } from '@sveltejs/kit';
import { getPostBySlug, type PostI } from '$lib/server/mdx';
import { compile } from 'mdsvex';

export const load: ServerLoad = async ({ url }): Promise<{ post: PostI }> => {
    // retrieves the second string path part after `/` to match the mdx filename
    const lastPath: string = url.pathname.split('/')[2];
    const post: PostI = getPostBySlug(lastPath);
    const content = await compile(post.content, {
        highlight: { highlighter }
    });

    return {
        post: { ...post, content: content?.code ?? '' }
    };
};

const highlighter = (code: string, lang?: string): string => {
    const className: string = 'language-' + lang;

    return `<pre><code class=${className}>${code}</code></pre>`;
};
