<script lang="ts">
    import '@/scss/global.scss';

    import HeaderLayout from '$lib/layout/header.svelte';
    import FooterLayout from '$lib/layout/footer.svelte';
</script>

<svelte:component this={HeaderLayout} />
<main>
    <slot />
</main>
<svelte:component this={FooterLayout} />

<style lang="scss">
    main {
        flex: 1;
        padding: clamp(8rem, 16vh, 16vh) 0;
        line-height: 1.8;

        :global(p) {
            margin: 1em 0;
        }
    }
</style>
