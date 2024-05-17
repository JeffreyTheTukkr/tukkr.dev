import { getAllPosts, type PostI } from '$lib/server/mdx';

const site: string = 'https://tukkr.dev';
const pages: string[] = [];

export async function GET(): Promise<Response> {
    // append static pages to sitemap
    ['', '/about', '/snippets', '/contact'].map((item: string) => pages.push(item));

    // append dynamic snippet pages to sitemap
    const snippets: PostI[] = getAllPosts();
    snippets.map((item: PostI) => pages.push('/snippets/' + item.slug));

    return new Response(
        `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			${pages
                .map(
                    (item: string): string => `
			    <url>
			        <loc>${site}${item}</loc>
			        <changefreq>weekly</changefreq>
                    <priority>0.5</priority>
			    </url>
			`
                )
                .join('')}
		</urlset>`.trim(),
        { headers: { 'Content-Type': 'application/xml' } }
    );
}
