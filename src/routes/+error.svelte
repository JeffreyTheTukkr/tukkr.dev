<script lang="ts">
    import { page } from '$app/stores';
    import SEO from '$lib/components/seo.svelte';

    const status: number = $page.status;
    const errMsg: string = $page?.error?.message ? '- ' + $page.error.message : '';
    const path: string = $page.url.pathname;
    const timestamp: number = Date.now();
</script>

<SEO title={status + ' ' + errMsg} description="It looks like you found the error page!" index={false} follow={false} />

<div class="container">
    <h1>{status} {errMsg}</h1>
    {#if status === 404}
        <p>Well, that's awkward.. The requested page doesn't exists!</p>
    {:else if status === 500}
        <p>Hey, you shouldn't see this page! I'm not mad, however it would be helpful if you could send me the details underneath :)</p>
    {:else}
        <p>You're a wizard! You've received an undefined error on this website. I would be extremely thankful if you could send me the details underneath!</p>
    {/if}
    <div class="info">
        <h4><b>Request information</b></h4>
        <p><b>Status:</b> {status}</p>
        <p><b>Path:</b> {path}</p>
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

            h4 {
                margin-bottom: 1rem;
            }

            > p {
                margin-bottom: 0.6rem;
            }
        }
    }
</style>
