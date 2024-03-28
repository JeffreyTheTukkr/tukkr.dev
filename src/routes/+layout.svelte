<script lang="ts">
    import '@/scss/global.scss';
    
    import HeaderLayout from '$lib/layout/header.svelte'
    import FooterLayout from '$lib/layout/footer.svelte';
</script>

<svelte:component this={HeaderLayout} />
<main>
    <slot />
</main>
<svelte:component this={FooterLayout} />

<style lang="scss">
    main {
        padding: clamp(8rem, 16vh, 20vh) 0;
    }
</style>
