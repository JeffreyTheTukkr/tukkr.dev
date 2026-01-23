<script lang="ts">
    import { page } from '$app/stores';

    // general variables
    const site: string = 'https://tukkr.dev';
    const path: string = $page.url.pathname;
    const url: string = site + path;

    // fields to be set on the page
    export let title: string;
    export let description: string;
    export let type: string = 'website';
    export let index: boolean = true;
    export let follow: boolean = true;
    export let image: string = '/logo.svg';
    export let publishedAt: Date | undefined = undefined;

    // computed values
    const imageUrl: string = site + image;

    // JSON-LD structured data
    const personSchema = {
        '@type': 'Person',
        name: 'Jeffrey',
        jobTitle: 'Fullstack Web Developer',
        url: site
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'tukkr.dev',
        url: site,
        description: 'Personal website of Jeffrey, Fullstack Web Developer from The Netherlands.',
        author: personSchema
    };

    const articleSchema = publishedAt
        ? {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: description,
              url: url,
              datePublished: publishedAt.toISOString(),
              author: personSchema
          }
        : null;

    const jsonLd = type === 'article' && articleSchema ? articleSchema : websiteSchema;
</script>

<svelte:head>
    <title>{title} &raquo; tukkr.dev</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta name="robots" content={(index ? 'index' : 'noindex') + ' ' + (follow ? 'follow' : 'nofollow')} />

    <meta property="og:site_name" content="tukkr" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="en" />
    <meta property="og:image" content={imageUrl} />

    <!-- @todo: fix this -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html '<script type="application/ld+json">' + JSON.stringify(jsonLd) + '</scr' + 'ipt>'}
</svelte:head>
