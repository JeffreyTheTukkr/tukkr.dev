import type { ServerLoad } from '@sveltejs/kit';
import { getSnippetBySlug, type SnippetI } from '$lib/server/mdx';
import { compile } from 'mdsvex';

export const load: ServerLoad = async ({ url }): Promise<{ post: SnippetI }> => {
    // retrieves the second string path part after `/` to match the mdx filename
    const lastPath: string = url.pathname.split('/')[2];
    const post: SnippetI = getSnippetBySlug(lastPath);
    const content = await compile(post.content, {
        highlight: { highlighter }
    });

    return {
        post: { ...post, content: content?.code ?? '' }
    };
};

const highlighter = (code: string, lang?: string | null): string => {
    const className: string = 'language-' + lang;

    return `<pre><code class=${className}>${code}</code></pre>`;
};
