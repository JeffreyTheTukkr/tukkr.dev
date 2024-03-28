<script lang="ts">
    import { page } from '$app/stores';

    // verify the current url pathname equals the menu href
    $: isCurrentPage = (path: string): boolean => {
        return $page.url.pathname === path;
    };

    // check the scroll state to decrease the header padding
    let scrollY: number;
    $: scrollOffsetClass = (): string | null => {
        return scrollY > 1 ? 'scrolled' : null;
    };
</script>

<svelte:window bind:scrollY />

<header class={scrollOffsetClass()}>
    <div class="logo">
        <a href="/">
            <img src="/logo.svg" alt="tukkr logo" height="40" />
        </a>
    </div>
    <nav>
        <a href="/" class:active={isCurrentPage('/')}>Home</a>
        <a href="/about" class:active={isCurrentPage('/about')}>About</a>
        <a href="/snippets" class:active={isCurrentPage('/snippets')}>Snippets</a>
        <a href="/contact" class:active={isCurrentPage('/contact')}>Contact</a>
    </nav>
</header>

<style lang="scss">
    header {
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.6);
        transition: padding 0.2s ease-in-out;

        // change padding if window is scrolled
        &.scrolled {
            padding: 1.2rem 2rem;
        }

        nav {
            display: flex;
            flex-direction: row;
            gap: 1rem;

            a {
                padding: 0.4rem;

                &.active {
                    font-weight: $font-weight-primary-medium;
                    color: #fff;
                }
            }
        }
    }
</style>
