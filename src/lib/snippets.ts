import type { Component } from 'svelte';

export type SnippetMetadata = {
    title: string;
    description: string;
    publishedAt: string;
};

export type SnippetEntry = SnippetMetadata & { slug: string };

type SnippetModule = { default: Component; metadata: SnippetMetadata };

const modules = import.meta.glob<SnippetModule>('/data/snippets/*.md');

export const getSnippet = async (slug: string): Promise<{ snippet: SnippetEntry; content: Component } | undefined> => {
    const load = modules[`/data/snippets/${slug}.md`];
    if (!load) return undefined;

    const { default: content, metadata } = await load();

    return { snippet: { ...metadata, slug }, content };
};
