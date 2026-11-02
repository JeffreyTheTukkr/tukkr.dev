import { formatDate, getSnippets } from '#lib/server/snippets.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ posts: getSnippets().map((post) => ({ ...post, date: formatDate(post.publishedAt) })) });
