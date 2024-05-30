<script lang="ts">
    import SEO from '$lib/components/seo.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    /* eslint svelte/no-at-html-tags: "off" */
</script>

<SEO title={data.post.title} description={data.post.description} />

<div class="container">
    <h1>{data.post.title}</h1>
    <div class="content">
        {@html data.post.content}
    </div>
</div>

<style lang="scss">
    .content {
        :global(a) {
            @include contentAnchorStyling;
        }

        :global(pre) {
            font-size: 14px;
            line-height: 1.4;
            padding: 1rem;
            background-color: #fff;
            border: 1px solid $color-border-primary;
            border-radius: 1rem;
            overflow-x: scroll;
        }
    }
</style>
