import type { SnippetEntry, SnippetMetadata } from '#lib/snippets.ts';

const metadata = import.meta.glob<SnippetMetadata>('/data/snippets/*.md', { eager: true, import: 'metadata' });

export const getSnippets = (): SnippetEntry[] =>
    Object.entries(metadata)
        .map(([path, meta]): SnippetEntry => ({ ...meta, slug: path.slice('/data/snippets/'.length, -'.md'.length) }))
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const formatDate = (date: string): string => new Date(date).toLocaleDateString('en-GB', { timeZone: 'UTC' });
