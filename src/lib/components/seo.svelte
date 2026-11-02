<script lang="ts">
    import { page } from '$app/state';
    import { siteUrl } from '$lib/site';

    type Props = {
        title: string;
        description: string;
        type?: string;
        index?: boolean;
        follow?: boolean;
        image?: string;
        publishedAt?: string;
    };

    let { title, description, type = 'website', index = true, follow = true, image = '/og-image.png', publishedAt }: Props = $props();

    const url = $derived(siteUrl + page.url.pathname);

    const personSchema = {
        '@type': 'Person',
        name: 'Jeffrey',
        jobTitle: 'Fullstack Web Developer',
        url: siteUrl
    };

    const jsonLd = $derived(
        type === 'article' && publishedAt
            ? {
                  '@context': 'https://schema.org',
                  '@type': 'Article',
                  headline: title,
                  description: description,
                  url: url,
                  datePublished: publishedAt,
                  author: personSchema
              }
            : {
                  '@context': 'https://schema.org',
                  '@type': 'WebSite',
                  name: 'tukkr.dev',
                  url: siteUrl,
                  description: 'Personal website of Jeffrey, Fullstack Web Developer from The Netherlands.',
                  author: personSchema
              }
    );
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
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content={siteUrl + image} />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html '<script type="application/ld+json">' + JSON.stringify(jsonLd).replace(/</g, '\\u003c') + '</scr' + 'ipt>'}
</svelte:head>
