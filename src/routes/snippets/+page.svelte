<script lang="ts">
    import SEO from '$lib/components/seo.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<SEO title="Snippets" description="Collection of neat pieces of code or specific knowledge which I found worth sharing - or storing." />

<div class="container">
    <h1>Snippets</h1>
    <p>While I'm not big on blog writing, I do occasionally come across some neat pieces of code or specific knowledge which I find worth sharing - <i>or storing</i>.</p>
    <div class="posts">
        {#each data.posts as post}
            <a href={'/snippets/' + post.slug} class="post">
                <div class="title">
                    <h2>{post.title}</h2>
                    <span>{post.date.toLocaleDateString('en-GB')}</span>
                </div>
                <p>{post.description}</p>
            </a>
        {/each}
    </div>
</div>

<style lang="scss">
    .posts {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .post {
            padding: 1rem;
            border: 1px solid $color-border-primary;
            border-radius: 16px;
            transition: border-color $animation-duration-default ease-in-out;

            &:hover {
                border-color: $color-border-dark;
            }

            .title {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                @include mediaQuery(s) {
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }

                // restore heading styling to normal text
                h2 {
                    margin: 0;
                    color: inherit;
                    font-size: inherit;
                }

                span {
                    font-size: 0.8rem;
                    font-style: italic;
                }
            }

            // remove bottom margin to have equal distance between elements
            p {
                margin-bottom: 0;
            }
        }
    }
</style>
