<script lang="ts">
    import SEO from '$lib/components/seo.svelte';
</script>

<SEO title="Fullstack Web Developer" description="Hey! I am Jeffrey, a Fullstack Web Developer from The Netherlands." />

<div class="container">
    <h1>tukkr</h1>
    <p>Hey! I am Jeffrey, a Fullstack Web Developer from The Netherlands.</p>
    <div class="page-actions">
        <a href="/about" class="about">
            <h2>About me</h2>
            <p>Read more about me and my past experiences.</p>
        </a>
        <a href="/snippets" class="snippets">
            <h2>Snippets</h2>
            <p>The place where I store some cool snippets / knowledge.</p>
        </a>
        <a href="/contact" class="contact">
            <h2>Get in touch</h2>
            <p>In for a friendly chat? Contact me directly!</p>
        </a>
    </div>
</div>

<style lang="scss">
    .page-actions {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 2rem;

        @include mediaQuery(s) {
            flex-direction: row;
        }

        > a {
            width: 100%;
            padding: 1rem;
            border: 1px solid $color-border-primary;
            border-radius: 16px;
            transition: border-color 0.12s ease-in-out;

            @include mediaQuery(s) {
                width: calc((100% - 2rem) / 2);
            }

            &:hover {
                border-color: $color-border-dark;
            }

            // restore heading styling to normal text
            h2 {
                margin: 0;
                color: inherit;
                font-size: inherit;
            }
        }

        // center the contact block
        .contact {
            margin: 0 auto;
        }
    }
</style>
