import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { parseDate } from '@/utils/date';

export type PostI = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
};

export const getAllPosts = (): PostI[] => {
    const directory: string = path.join(process.cwd(), 'data');
    const files: string[] = fs.readdirSync(directory);

    const posts: PostI[] = files.map((file: string): PostI => {
        const filePath: string = path.join(directory, file);
        const fileContents: string = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(fileContents);

        return {
            title: data['title'],
            slug: data['slug'],
            date: parseDate(data['publishedAt']),
            description: data['description'],
            content: content
        } as PostI;
    });

    // sort posts ascending from post date
    return posts.sort((a: PostI, b: PostI) => a.date.getDate() - b.date.getDate());
};

export const getPostBySlug = (slug: string): PostI => {
    const directory: string = path.join(process.cwd(), 'data');
    const filePath: string = path.join(directory, slug + '.mdx');
    const fileContents: string = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);

    return {
        title: data['title'],
        slug: data['slug'],
        date: parseDate(data['publishedAt']),
        description: data['description'],
        content: content
    } as PostI;
};
