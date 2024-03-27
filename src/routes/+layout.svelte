<script lang="ts">
    import '@/scss/global.scss';
    
    import FooterLayout from '$lib/layout/footer.svelte';
</script>

<main>
    <slot />
</main>
<svelte:component this={FooterLayout} />

<style lang="scss">
    main {
        padding: clamp(8rem, 18vh, 24vh) 0;
    }
</style>
