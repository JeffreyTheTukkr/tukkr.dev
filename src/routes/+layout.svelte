<script lang="ts">
    import '@/scss/global.scss';
    
    import FooterLayout from '$lib/layout/footer.svelte';
</script>

<main>
    <slot />
</main>
<svelte:component this={FooterLayout} />
