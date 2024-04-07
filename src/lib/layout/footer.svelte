<script lang="ts">
</script>

<footer>
    <div class="container">
        <div class="info">
            <span class="name"><b>tukkr</b></span>
            <span><a href="mailto:info@tukkr.dev">info@tukkr.dev</a></span>
            <span><a href="/contact">More information</a></span>
        </div>
        <nav aria-label="Footer menu">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/snippets">Snippets</a>
            <a href="/contact">Contact</a>
        </nav>
        <div class="socials">
            <a href="https://www.linkedin.com/in/jeffrey-boesenkool/" target="_blank">LinkedIn</a>
            <a href="https://github.com/JeffreyTheTukkr" target="_blank">GitHub</a>
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

        // highlight company name
        .info .name {
            font-family: $font-family-secondary;
            font-weight: $font-weight-secondary-bold;
            color: $color-brand-primary;
        }
    }
</style>
