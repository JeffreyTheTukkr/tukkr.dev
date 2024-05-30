<script lang="ts">
    import SEO from '$lib/components/seo.svelte';

    // calculate my age in years
    const age: number = new Date(Date.now() - new Date('1996-08-02').getTime()).getUTCFullYear() - 1970;

    // calculate years of professional career
    // note: calculation part is 365 days to milliseconds
    const careerYears: number = Math.ceil((Date.now() - new Date('2020').getTime()) / (365 * 24 * 60 * 60 * 1000));
</script>

<SEO title="About me" description="" />

<div class="container">
    <h1>About me</h1>
    <p>
        Hi! I am Jeffrey, a {age} year old enthusiastic fullstack web developer from the Netherlands. From a young age I have been interested in transforming technical issues and wishes
        to viable user-friendly solutions, and roughly {careerYears} years ago I was lucky enough to start doing this professionally!
    </p>

    <p>
        In these {careerYears} years I have worked on, and in, various projects and teams. Ranging from custom WordPress themes and plugins to full fledged custom client portals and
        ecommerce systems.
    </p>

    <h2>Technical experience</h2>
    <p>
        Both professionally and personally I have worked with, and touched, a lot of different technologies. However, I am mostly confident (or worked mostly with) the following
        stacks and tools:
    </p>
    <ul>
        <li><b>Languages:</b> PHP, JavaScript, TypeScript, NodeJS, HTML5, CSS3 + SCSS.</li>
        <li><b>Frameworks:</b> WordPress, Laravel, Express, Strapi, React, SvelteKit.</li>
        <li><b>Databases:</b> MariaDB, PostgreSQL, MongoDB.</li>
        <li><b>CI/CD:</b> Jenkins, Github Actions, Docker, Podman.</li>
        <li><b>Hosting:</b> Debian and RHEL based distributions, Plesk, DirectAdmin, WHM.</li>
    </ul>

    <p>
        Please note that these are only the technologies I am most confident in, I have worked with other stacks and technologies so feel free to <a href="/contact">reach out</a> to
        me for a friendly chat!
    </p>
</div>

<style lang="scss">
    .container {
        :global(a) {
            @include contentAnchorStyling;
        }
    }
</style>
