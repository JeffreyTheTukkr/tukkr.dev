<script lang="ts">
    import SEO from '$lib/components/seo.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    /* eslint svelte/no-at-html-tags: "off" */
</script>

<SEO title={data.post.title} description={data.post.description} />

<div class="container">
    <h1>{data.post.title}</h1>
    {@html data.post.content}
</div>
