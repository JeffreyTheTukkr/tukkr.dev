import { getAllSnippets, type SnippetI } from '$lib/server/mdx';

const site: string = 'https://tukkr.dev';

type SitemapPage = {
    url: string;
    priority: number;
    lastmod?: string;
};

const formatDate = (date: Date): string => date.toISOString().split('T')[0];

export async function GET(): Promise<Response> {
    const pages: SitemapPage[] = [];

    // static pages with varied priorities
    pages.push({ url: '', priority: 1.0 });
    pages.push({ url: '/about', priority: 0.8 });
    pages.push({ url: '/snippets', priority: 0.8 });
    pages.push({ url: '/contact', priority: 0.8 });
    pages.push({ url: '/privacy-policy', priority: 0.3 });

    // dynamic snippet pages with publication dates
    const snippets: SnippetI[] = getAllSnippets();
    snippets.forEach((item: SnippetI) => {
        pages.push({
            url: '/snippets/' + item.slug,
            priority: 0.6,
            lastmod: formatDate(item.date)
        });
    });

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
                    (page: SitemapPage): string => `
			    <url>
			        <loc>${site}${page.url}</loc>
			        <changefreq>weekly</changefreq>
                    <priority>${page.priority}</priority>
                    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
			    </url>
			`
                )
                .join('')}
		</urlset>`.trim(),
        { headers: { 'Content-Type': 'application/xml' } }
    );
}
