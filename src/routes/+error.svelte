<script lang="ts">
    import { page } from '$app/state';
    import SEO from '#lib/components/seo.svelte';

    const errMsg = $derived(page.error?.message ? '- ' + page.error.message : '');
    const timestamp = new Date().toISOString();
</script>

<SEO title={page.status + ' ' + errMsg} description="It looks like you found the error page!" index={false} follow={false} />

<div class="container">
    <h1>{page.status} {errMsg}</h1>
    {#if page.status === 404}
        <p>Well, that's awkward.. The requested page doesn't exist!</p>
    {:else if page.status === 500}
        <p>Hey, you shouldn't see this page! I'm not mad, however it would be helpful if you could send me the details underneath :)</p>
    {:else}
        <p>You're a wizard! You've received an undefined error on this website. I would be extremely thankful if you could send me the details underneath!</p>
    {/if}
    <div class="info">
        <h2>Request information</h2>
        <p><b>Status:</b> {page.status}</p>
        <p><b>Path:</b> {page.url.pathname}</p>
        <p><b>Timestamp:</b> {timestamp}</p>
    </div>
</div>

<style lang="scss">
    .container {
        text-align: center;

        h1 {
            margin-bottom: 3rem;
        }

        .info {
            margin-top: 3rem;

            h2 {
                margin-bottom: 1rem;
                font-size: $font-size-heading-4;
            }

            > p {
                margin-bottom: 0.6rem;
            }
        }
    }
</style>
