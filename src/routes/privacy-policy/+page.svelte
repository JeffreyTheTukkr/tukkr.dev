<script lang="ts">
    import SEO from '$lib/components/seo.svelte';
    import { email } from '$lib/site';
</script>

<SEO
    title="Privacy policy"
    description="We take your privacy seriously. To better protect your privacy we provide this privacy policy notice explaining the way your personal information is collected and used."
/>

<div class="container">
    <h1>Privacy policy</h1>
    <p>We take your privacy seriously. To better protect your privacy we provide this privacy policy notice explaining the way your personal information is collected and used.</p>

    <h2>Collection of routine information</h2>
    <p>
        Like most websites, the server hosting this website keeps basic logs of its visitors. These include IP addresses, browser details, timestamps and referring pages. This
        information is used for routine administration, maintenance and security purposes only.
    </p>

    <h2>Analytics and cookies</h2>
    <p>
        This website uses Google Analytics to understand how visitors use it, such as which pages are visited and how visitors arrived here. Analytics cookies are only placed after
        you click "Allow" in the cookie notice. If you decline, or have not made a choice yet, no analytics cookies are set, but the Google Analytics script still loads and sends
        limited cookieless signals (such as the page visited) without identifiers. Like any request to a third party, these reach Google's servers along with your IP address and
        browser details. No advertising or personalization features are enabled.
    </p>
    <p>
        Your choice is stored in your browser so the cookie notice does not appear on every visit. You can change it at any time through "Cookie settings" in the footer of every
        page. Data collected by Google Analytics is processed by Google under its own privacy policy. Learn how to
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">opt out of Google Analytics</a>.
    </p>

    <h2>Links to third party websites</h2>
    <p>
        We have included links on this website for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy
        policies of these websites may differ from our own.
    </p>

    <h2>Security</h2>
    <p>
        The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100%
        secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
    </p>

    <h2>Changes to this privacy policy</h2>
    <p>
        This Privacy Policy is effective as of 02/11/2026 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect
        immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this page periodically.
    </p>

    <h2>Contact information</h2>
    <p>For any questions or concerns regarding the privacy policy, please send us an email <a href="mailto:{email}">{email}</a>.</p>
</div>
