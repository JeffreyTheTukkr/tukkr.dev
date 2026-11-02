<script lang="ts">
    import { resolve } from '$app/paths';
    import { consent } from '#lib/consent.svelte.ts';
    import { email } from '#lib/site.ts';
</script>

<footer>
    <div class="container">
        <div class="info">
            <span class="name"><b>tukkr LLC</b></span>
            <span><a href="mailto:{email}">{email}</a></span>
            <span><a href={resolve('/contact')}>Contact</a></span>
            <span><button onclick={() => (consent.value = null)}>Cookie settings</button></span>
        </div>
        <nav aria-label="Footer menu">
            <a href={resolve('/')}>Home</a>
            <a href={resolve('/about')}>About</a>
            <a href={resolve('/snippets')}>Snippets</a>
            <a href={resolve('/contact')}>Contact</a>
        </nav>
        <div class="socials">
            <a href="https://www.linkedin.com/in/jeffrey-boesenkool/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/JeffreyTheTukkr" target="_blank" rel="noopener">GitHub</a>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        background-color: #fff;
        padding: 3rem 0;

        // general layout
        .container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 2rem;

            @include mediaQuery(s) {
                flex-direction: row;
            }

            > div,
            > nav {
                display: inherit;
                flex-direction: column;
                gap: 1rem;
            }
        }

        button {
            padding: 0;
            border: none;
            background: none;
            color: inherit;
            cursor: pointer;
            transition: color $animation-duration-default ease-in-out;

            &:hover,
            &:focus {
                color: $color-font-dark;
            }
        }

        // highlight company name
        .info .name {
            font-family: $font-family-secondary;
            font-weight: $font-weight-secondary-bold;
            color: $color-brand-primary;
        }
    }
</style>
