import { getSnippets } from '#lib/server/snippets.ts';
import { siteUrl } from '#lib/site.ts';

export const prerender = true;

type SitemapPage = {
    url: string;
    priority: number;
    lastmod?: string;
};

export function GET(): Response {
    const pages: SitemapPage[] = [
        { url: '', priority: 1.0 },
        { url: '/about', priority: 0.8 },
        { url: '/snippets', priority: 0.8 },
        { url: '/contact', priority: 0.8 },
        { url: '/privacy-policy', priority: 0.3 },
        ...getSnippets().map((snippet): SitemapPage => ({ url: '/snippets/' + snippet.slug, priority: 0.6, lastmod: snippet.publishedAt }))
    ];

    const urls = pages
        .map(
            (page: SitemapPage): string => `
    <url>
        <loc>${siteUrl}${page.url}</loc>${page.lastmod ? `\n        <lastmod>${page.lastmod}</lastmod>` : ''}
        <changefreq>weekly</changefreq>
        <priority>${page.priority.toFixed(1)}</priority>
    </url>`
        )
        .join('');

    return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>\n`, {
        headers: { 'Content-Type': 'application/xml' }
    });
}
