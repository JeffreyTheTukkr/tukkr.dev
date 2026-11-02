<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';

    // verify the current url pathname equals the menu href
    const isCurrentPage = (path: string): boolean => page.url.pathname.split('/')[1] === path;

    // check the scroll state to decrease the header padding
    let scrollY: number = $state(0);
    const isScrolled = $derived(scrollY > 1);

    // toggle mobile menu state
    let mobileMenuActive: boolean = $state(false);
    const toggleMobileMenu = (): boolean => (mobileMenuActive = !mobileMenuActive);

    // inner window width size state
    let innerWidth: number = $state(0);

    // remove mobileMenuActive true state on desktop breakpoint
    $effect(() => {
        if (innerWidth >= 744) mobileMenuActive = false;
    });

    afterNavigate(() => {
        mobileMenuActive = false;
    });
</script>

<svelte:window bind:scrollY bind:innerWidth />

<header class:scrolled={isScrolled}>
    <div class="logo">
        <a href={resolve('/')}>
            <img alt="tukkr logo" height="42" width="42" src="/logo.svg" />
        </a>
    </div>
    <button aria-controls="main-menu" aria-expanded={mobileMenuActive} aria-label="Toggle main menu" onclick={toggleMobileMenu}>
        <svg class:active={mobileMenuActive} viewBox="0 0 100 100" width="42" height="42">
            <path d="m 70,32 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path d="m 70,49 h -40" />
            <path d="m 30,66 h 40 c 0,0 8.5,0.15 8.5,-8.5 0,-8.65 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
    </button>
    <nav aria-label="Main menu" class:active={mobileMenuActive} id="main-menu">
        <a class:active={isCurrentPage('')} href={resolve('/')}>Home</a>
        <a class:active={isCurrentPage('about')} href={resolve('/about')}>About</a>
        <a class:active={isCurrentPage('snippets')} href={resolve('/snippets')}>Snippets</a>
        <a class:active={isCurrentPage('contact')} href={resolve('/contact')}>Contact</a>
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
        padding: 1.8rem 2rem;
        background-color: rgba(255, 255, 255, 0.94);
        transition: padding 0.2s ease-in-out;
        z-index: 999;

        // change padding if window is scrolled
        &.scrolled {
            padding: 1.2rem 2rem;
        }

        // hamburger menu
        button {
            padding: 0;
            background: none;
            border: none;
            cursor: pointer;

            @include mediaQuery(s) {
                display: none;
            }

            // svg layout and animation
            svg {
                user-select: none;
                transition: transform $animation-duration-slow ease-in-out;

                path {
                    fill: none;
                    stroke: $color-font-dark;
                    stroke-width: 6;
                    stroke-linecap: round;
                    stroke-dasharray: 40 121;
                    transition: stroke-dashoffset $animation-duration-slow ease-in-out;
                }

                &.active {
                    transform: rotate(45deg);

                    path {
                        stroke-dashoffset: -68px;
                    }
                }
            }
        }

        // navigation
        nav {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            height: 0;
            overflow: hidden;
            margin-top: 0;
            visibility: hidden;
            transition:
                height $animation-duration-slow ease-in-out,
                margin-top $animation-duration-slow ease-in-out,
                visibility $animation-duration-slow;

            &.active {
                // note: height must be a fixed value for transition to work properly
                // when adding or removing a menu item, recalculate the height
                height: 200px;
                margin-top: 2rem;
                visibility: visible;
            }

            @include mediaQuery(s) {
                flex-direction: row;
                width: auto;
                height: auto !important;
                margin-top: 0 !important;
                visibility: visible;

                // disable transition to prevent weird rescaling animations
                transition: none;
            }

            a {
                padding: 0.6rem 0.4rem;

                &.active {
                    font-weight: $font-weight-primary-medium;
                    color: $color-font-dark;
                }
            }
        }
    }
</style>
