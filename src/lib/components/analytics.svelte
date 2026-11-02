<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/env';
    import { resolve } from '$app/paths';
    import { PUBLIC_GA4_ID } from '$app/env/public';
    import { consent, type Consent } from '#lib/consent.svelte.ts';

    const storageKey = 'analytics-consent';

    const readConsent = (): Consent | null => {
        try {
            const value = localStorage.getItem(storageKey);
            return value === 'granted' || value === 'denied' ? value : null;
        } catch {
            return null;
        }
    };

    const choose = (value: Consent): void => {
        consent.value = value;
        window.gtag?.('consent', 'update', { analytics_storage: value });

        try {
            localStorage.setItem(storageKey, value);
        } catch {
            // storage blocked, the choice only lasts for this page load
        }
    };

    if (browser) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(): void {
            window.dataLayer.push(arguments);
        };

        window.gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: readConsent() === 'granted' ? 'granted' : 'denied'
        });

        window.gtag('js', new Date());
        window.gtag('config', PUBLIC_GA4_ID);
    }

    onMount(() => {
        consent.value = readConsent();
    });
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA4_ID}"></script>
</svelte:head>

{#if consent.value === null}
    <section class="cookie-consent" aria-label="Cookie notice">
        <div class="container">
            <span>Cookie notice</span>
            <p>
                This website uses Google Analytics cookies to understand how visitors use it. These cookies are only set if you allow them. Read more in the <a
                    href={resolve('/privacy-policy')}>privacy policy</a
                >.
            </p>
            <div class="buttons">
                <button onclick={() => choose('denied')}>Decline</button>
                <button onclick={() => choose('granted')}>Allow</button>
            </div>
        </div>
    </section>
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

        p a {
            @include contentAnchorStyling;
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
