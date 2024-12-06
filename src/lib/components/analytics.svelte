<script lang="ts">
    import { browser } from '$app/environment';
    import { PUBLIC_GA4_ID } from '$env/static/public';

    // locally store if a user has allowed the usage of cookies
    let cookiesAllowedByUser: boolean;

    // enable Google Analytics integration
    $: if (browser) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(): void {
            window.dataLayer.push(arguments);
        };

        // set consent to denied by default
        window.gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied'
        });

        // initialize analytics
        window.gtag('js', new Date());
        window.gtag('config', PUBLIC_GA4_ID);
    }

    // set Google Analytics consent to granted when cookies are allowed
    $: if (cookiesAllowedByUser && window.gtag) {
        window.gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted'
        });
    }
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA4_ID}" nonce="%svelktekit.nonce%"></script>
</svelte:head>

{#if cookiesAllowedByUser === undefined}
    <div class="cookie-consent">
        <div class="container">
            <span>Cookie notice</span>
            <p>
                This website uses cookies to improve your user experience. By using our website, you consent to all cookies in accordance with our <a href="/privacy-policy"
                    >privacy policy</a
                >.
            </p>
            <div class="buttons">
                <button on:click={() => (cookiesAllowedByUser = false)}>Decline</button>
                <button on:click={() => (cookiesAllowedByUser = true)}>Allow</button>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    .cookie-consent {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 2rem 0;
        border: 1px solid $color-border-primary;
        background-color: #fff;

        .container {
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
        }

        span {
            color: $color-brand-primary;
            font-size: $font-size-heading-3;
            font-weight: $font-weight-primary-medium;
        }

        .buttons {
            width: 100%;
            display: flex;
            flex: 1 1 0;
            gap: 2rem;

            @include mediaQuery('s') {
                gap: 3rem;
            }

            button {
                width: 100%;
                margin-top: 0.5rem;
                background-color: $color-brand-primary;
                color: #fff;
                padding: 0.6rem;
                border: 2px solid $color-brand-primary;
                border-radius: 0.6rem;
                font-weight: $font-weight-primary-medium;
                cursor: pointer;
                transition:
                    background-color $animation-duration-default ease-in-out,
                    color $animation-duration-default ease-in-out;

                &:hover {
                    color: $color-brand-primary;
                    background-color: #fff;
                }
            }
        }
    }
</style>
