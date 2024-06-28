<script lang="ts">
    import { page } from '$app/stores';

    // general variables
    const path: string = $page.url.pathname;
    const url: string = 'https://tukkr.dev' + path;

    // fields to be set on the page
    export let title: string;
    export let description: string;
    export let type: string = 'website';
    export let index: boolean = true;
    export let follow: boolean = true;
</script>

<svelte:head>
    <title>{title} &raquo tukkr.dev</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta name="robots" content={(index ? 'index' : 'noindex') + ' ' + (follow ? 'follow' : 'nofollow')} />

    <meta property="og:site_name" content="tukkr" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="en" />

    {#if import.meta.env.APP_ENV !== 'development'}
        <script defer src={import.meta.env.VITE_UMAMI_SCRIPT_URL} data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}></script>
    {/if}
</svelte:head>
