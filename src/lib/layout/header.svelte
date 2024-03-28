<script lang="ts">
    import {page} from "$app/stores";

    $: isCurrentPage = (path: string): boolean => {
        return $page.url.pathname === path
    } 
</script>

<header>
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

        .logo {
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
