<script lang="ts">
</script>

<header>
    <div class="logo">
        <a href="/">
            <img src="/logo.svg" alt="tukkr logo" height="44" />
        </a>
    </div>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/snippets">Snippets</a>
        <a href="/contact">Contact</a>
    </nav>
</header>

<style lang="scss">
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1.6rem 3rem;
        background-color: rgba(0, 0, 0, 0.6);

        .logo {
        }

        nav {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
    }
</style>
