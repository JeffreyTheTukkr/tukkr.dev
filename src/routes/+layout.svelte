<script lang="ts">
    import '@/scss/global.scss';
    import Analytics from '$lib/components/analytics.svelte';

    import HeaderLayout from '$lib/layout/header.svelte';
    import FooterLayout from '$lib/layout/footer.svelte';
</script>

<svelte:component this={HeaderLayout} />
<main>
    <slot />
</main>
<svelte:component this={Analytics} />
<svelte:component this={FooterLayout} />

<style lang="scss">
    main {
        flex: 1;
        padding: clamp(6rem, 8vh, 10vh) 0;
        line-height: 1.8;

        :global(p) {
            margin: 1em 0;
        }
    }
</style>
