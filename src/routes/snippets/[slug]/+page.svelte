<script lang="ts">
    import SEO from '#lib/components/seo.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SEO title={data.snippet.title} description={data.snippet.description} type="article" publishedAt={data.snippet.publishedAt} />

<div class="container">
    <h1>{data.snippet.title}</h1>
    <div class="content">
        <data.content />
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
            overflow-x: auto;
        }

        :global(.token.comment) {
            color: $color-border-dark;
            font-style: italic;
        }

        :global(:is(.token.selector, .token.atrule, .token.keyword)) {
            color: $color-brand-primary;
        }

        :global(:is(.token.property, .token.function)) {
            color: $color-font-dark;
        }

        :global(:is(.token.string, .token.number, .token.unit)) {
            color: #0f766e;
        }
    }
</style>
