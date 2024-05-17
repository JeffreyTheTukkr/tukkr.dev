import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { parseDate } from '@/utils/date';

export type SnippetI = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
};

export const getAllSnippets = (): SnippetI[] => {
    const directory: string = path.join(process.cwd(), 'data/snippets');
    const files: string[] = fs.readdirSync(directory);

    const posts: SnippetI[] = files.map((file: string): SnippetI => {
        const filePath: string = path.join(directory, file);
        const fileContents: string = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(fileContents);

        return {
            title: data['title'],
            slug: file.slice(0, -4),
            date: parseDate(data['publishedAt']),
            description: data['description'],
            content: content
        } as SnippetI;
    });

    // sort posts descending from post date
    return posts.sort((a: SnippetI, b: SnippetI) => b.date.getTime() - a.date.getTime());
};

export const getSnippetBySlug = (slug: string): SnippetI => {
    const directory: string = path.join(process.cwd(), 'data/snippets');
    const filePath: string = path.join(directory, slug + '.mdx');
    const fileContents: string = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);

    return {
        title: data['title'],
        slug: data['slug'],
        date: parseDate(data['publishedAt']),
        description: data['description'],
        content: content
    } as SnippetI;
};
