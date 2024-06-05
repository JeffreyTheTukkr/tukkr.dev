<script lang="ts">
    import SEO from '$lib/components/seo.svelte';
</script>

<SEO title="Contact" description="In for a friendly chat or need some help with your project? Contact me directly!" />

<div class="container">
    <h1>Get in touch</h1>
    <p>Do you have questions or are you interested in working together? Feel free to send me a message!</p>
    <div class="content">
        <div class="company">
            <h2>Company details</h2>
            <p><b>Name:</b> tukkr</p>
            <p><b>Coc:</b> 92668828</p>
            <p><b>Vat:</b> NL004968891B61</p>
            <p><b>Address:</b><br />De Dorsmolen 47<br />7623HT Borne<br />The Netherlands</p>
        </div>
        <div class="contact">
            <h2>Contact details</h2>
            <p><b>Email:</b> <a href="mailto:info@tukkr.dev">info@tukkr.dev</a></p>
            <p><b>Phone:</b> <a href="tel:+31642168407">+31 (0)6 421 684 07</a></p>
            <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/jeffrey-boesenkool/" target="_blank" rel="noopener">Jeffrey Boesenkool</a></p>
            <p><b>Github:</b> <a href="https://github.com/JeffreyTheTukkr" target="_blank" rel="noopener">JeffreyTheTukkr</a></p>
        </div>
    </div>
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;

        @include mediaQuery(s) {
            flex-direction: row;
            justify-content: space-between;
        }

        h2 {
            margin-bottom: 0;
            font-size: inherit;
        }
    }
</style>
