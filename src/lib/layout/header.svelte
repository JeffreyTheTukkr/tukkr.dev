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

    // toggle mobile menu state
    let mobileMenuActive: boolean;
    $: toggleMobileMenu = (): void => {
        mobileMenuActive = !mobileMenuActive;
    };
</script>

<svelte:window bind:scrollY />

<header class={scrollOffsetClass()}>
    <div class="logo">
        <a href="/">
            <img src="/logo.svg" alt="tukkr logo" height="40" />
        </a>
    </div>
    <button on:click={toggleMobileMenu} aria-controls="main-menu" aria-expanded={mobileMenuActive ? 'true' : 'false'} aria-label="Toggle main menu">Menu</button>
    <nav id="main-menu" class:active={mobileMenuActive} role="navigation" aria-label="Main menu">
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
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.84);
        transition: padding 0.2s ease-in-out;

        // change padding if window is scrolled
        &.scrolled {
            padding: 1.2rem 2rem;
        }

        button {
            @include mediaQuery(s) {
                display: none;
            }
        }

        nav {
            display: none;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
            width: 100%;

            &.active {
                display: flex;
            }

            @include mediaQuery(s) {
                display: flex;
                flex-direction: row;
                width: auto;
                margin-top: 0;
            }

            a {
                padding: 0.6rem 0.4rem;

                &.active {
                    font-weight: $font-weight-primary-medium;
                    color: #fff;
                }
            }
        }
    }
</style>
