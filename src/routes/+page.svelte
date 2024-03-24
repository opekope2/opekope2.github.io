<script lang="ts">
    import Card from "$lib/Card.svelte";
    import MaterialIcon from "$lib/icon/MaterialIcon.svelte";
    import CurseForgeLogo from "$lib/logo/CurseForgeLogo.svelte";
    import GitHubLogo from "$lib/logo/GitHubLogo.svelte";
    import ModrinthLogo from "$lib/logo/ModrinthLogo.svelte";

    let videoDetails: HTMLDetailsElement;
    let videoIframe: HTMLIFrameElement;
    let scrollArrow: HTMLDivElement;
    let findMeH1: HTMLHeadingElement;

    function toggleVideo(e: Event) {
        if (videoDetails.open && videoIframe.dataset.loaded !== "true") {
            videoIframe.dataset.loaded = "true";
            videoIframe.src =
                "//www.youtube-nocookie.com/embed/vlVUVsx6BYY?enablejsapi=1";
        }

        if (!videoDetails.open) {
            videoIframe.contentWindow?.postMessage(
                JSON.stringify({
                    event: "command",
                    func: "pauseVideo",
                }),
                "*",
            );
        }
    }

    function handleWindowScroll(e: Event) {
        const windowBottom = window.scrollY + window.innerHeight;

        const h1Top = findMeH1.getBoundingClientRect().top + window.scrollY;
        const h1Bottom = h1Top + findMeH1.offsetHeight;

        scrollArrow.style.opacity = +(h1Bottom > windowBottom) + "";
    }

    function handleAnchorClick(this: HTMLAnchorElement, e: Event) {
        const href = this.getAttribute("href");
        if (!href) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    }
</script>

<svelte:head>
    <title>Hi, I'm opekope2</title>
    <meta name="description" content="opekope2's personal GitHub page" />
</svelte:head>

<svelte:window on:scroll={handleWindowScroll} on:load={handleWindowScroll} />

<div class="first-page center-text container">
    <h1 id="hi-im-opekope2" class="fancy">Hi, I'm opekope2</h1>
    <p class="fancy">
        ...and I spent way too much time on the SCSS. I use Arch BTW.
    </p>
    <div class="fancy scroll-arrow" bind:this={scrollArrow}>
        <a href="#find-me-on" on:click={handleAnchorClick}
            ><MaterialIcon name="expand_more" /></a
        >
    </div>
</div>

<div class="container">
    <h2 id="find-me-on" class="fancy" bind:this={findMeH1}>Find me on</h2>
    <div class="links center-text">
        <a class="fancy-button" href="https://github.com/opekope2"
            ><span><GitHubLogo /> GitHub</span></a
        >
        <a class="fancy-button" href="https://modrinth.com/user/opekope2"
            ><span><ModrinthLogo /> Modrinth</span></a
        >
        <a
            class="fancy-button"
            href="https://www.curseforge.com/members/opekope2"
            ><span><CurseForgeLogo /> CurseForge</span></a
        >
        <a class="fancy-button" href="https://www.youtube.com/@opekope2"
            ><span><MaterialIcon name="live_tv" /> YouTube</span></a
        >
    </div>
</div>

<div class="container">
    <h2 id="minecraft-mods" class="fancy">Minecraft mods</h2>
    <Card>
        <h3 slot="header">OptiGUI</h3>
        <p>
            Blazing fast custom GUI textures on Fabric and Quilt with built-in
            OptiFine custom GUI resource pack support.
        </p>
        <div slot="footer">
            <a
                class="fancy-button"
                href="https://github.com/opekope2/OptiGUI/releases/latest"
                ><span><GitHubLogo /> Download from GitHub</span></a
            >
            <a
                class="fancy-button"
                href="https://modrinth.com/mod/optigui/versions"
                ><span><ModrinthLogo /> Download from Modrinth</span></a
            >
            <a
                class="fancy-button"
                href="https://www.curseforge.com/minecraft/mc-mods/optigui/files"
                ><span><CurseForgeLogo /> Download from CurseForge</span></a
            >
            <a
                class="fancy-button"
                href="OptiGUI"
                rel="external"
                title="Resource pack and API docs"
                ><span
                    ><MaterialIcon name="import_contacts" /> Read the documentation</span
                ></a
            >
            <a class="fancy-button" href="https://github.com/opekope2/OptiGUI"
                ><span><GitHubLogo /> View source code</span></a
            >
            <a
                class="fancy-button"
                href="https://github.com/opekope2/OptiGUI/issues/new/choose"
                ><span><MaterialIcon name="bug_report" /> Report a bug</span></a
            >
        </div>
    </Card>
    <Card>
        <h3 slot="header">AvM Staff Mod</h3>
        <p>Staff from Animation vs Minecraft Shorts ep 33.</p>
        <details bind:this={videoDetails} on:toggle={toggleVideo}>
            <summary>
                Watch <i>Animation vs Minecraft Shorts ep 33</i> by
                <a href="https://www.youtube.com/@alanbecker">Alan Becker</a>
            </summary>
            <div class="youtube-container">
                <iframe
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    data-loaded="false"
                    bind:this={videoIframe}
                ></iframe>
            </div>
        </details>
        <div slot="footer">
            <a
                class="fancy-button"
                href="https://github.com/opekope2/StaffMod/releases/latest"
                ><span><GitHubLogo /> Download from GitHub</span></a
            >
            <a
                class="fancy-button"
                href="https://modrinth.com/mod/avm-staff/versions"
                ><span><ModrinthLogo /> Download from Modrinth</span></a
            >
            <a
                class="fancy-button"
                href="https://www.curseforge.com/minecraft/mc-mods/avm-staff/files"
                ><span><CurseForgeLogo /> Download from CurseForge</span></a
            >
            <a class="fancy-button" href="StaffMod" rel="external"
                ><span
                    ><MaterialIcon name="import_contacts" /> Read the wiki</span
                ></a
            >
            <a class="fancy-button" href="https://github.com/opekope2/StaffMod"
                ><span><GitHubLogo /> View source code</span></a
            >
            <a
                class="fancy-button"
                href="https://github.com/opekope2/StaffMod/issues/new/choose"
                ><span><MaterialIcon name="bug_report" /> Report a bug</span></a
            >
        </div>
    </Card>
</div>

<div class="container">
    <h2 id="space-engineers" class="fancy">Space Engineers</h2>
    <Card>
        <h3 slot="header">Space Engineers Plugin Loader on GNU+Linux.</h3>
        <p>
            If you want to use <a
                href="https://github.com/sepluginloader/PluginLoader"
                >Plugin Loader</a
            > on GNU+Linux, this script comes in handy.
        </p>
        <div slot="footer">
            <a
                href="https://gist.github.com/opekope2/e02db7e526dadff0813a6ea2aebf820b"
                class="fancy-button"
                ><span><GitHubLogo /> Download from GitHub</span></a
            >
        </div>
    </Card>
    <Card>
        <h3 slot="header">CosmicWineFixes</h3>
        <p>
            A Space Engineers plugin for GNU+Linux players with the following
            configurable features:
        </p>
        <ul>
            <li>
                Fix the cipboard freeze issue
                <span class="secondary">(enabled by default)</span>
            </li>
            <li>
                Open log when game crashes
                <span class="secondary">(disabled by default)</span>
            </li>
            <li>
                Replace <i>Exit to Windows</i> with <i>Exit to Linux</i>
                <span class="secondary">(disabled by default)</span>
            </li>
        </ul>
        <p>
            For more detailed information about these features, see the
            project's GitHub page.
        </p>
        <div slot="footer">
            <a
                href="https://github.com/sepluginloader/PluginHub"
                class="fancy-button"
                ><span
                    ><MaterialIcon name="extension" /> Available on PluginHub</span
                ></a
            >
            <a
                class="fancy-button"
                href="https://github.com/opekope2/CosmicWineFixes"
                ><span><GitHubLogo /> View source code</span></a
            >
        </div>
    </Card>
    <Card>
        <h3 slot="header">SpaceEngineersLoader</h3>
        <p>
            Experimenal loader for Space Engineers, which enables running the
            game on .NET 6 on both GNU+Linux (inside proton, <b>NOT</b> natively)
            and Windows.
        </p>
        <div slot="footer">
            <a
                class="fancy-button"
                href="https://github.com/opekope2/SpaceEngineersLoader"
                ><span><GitHubLogo /> View source code</span></a
            >
        </div>
    </Card>
</div>

<div class="container">
    Made with <a href="https://kit.svelte.dev/">SvelteKit</a> and
    <a href="https://picocss.com/">Pico ✨</a>.
</div>

<style lang="scss">
    h3 {
        margin-bottom: 0;
    }

    .first-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100vh - var(--pico-block-spacing-vertical));

        .scroll-arrow {
            position: absolute;
            bottom: var(--pico-block-spacing-vertical);
            right: 0;
            left: 0;
            font-size: 2rem;
            animation: scrollArrow 2s infinite alternate ease-in-out;
            transition: opacity 0.3s;

            a {
                color: var(--default-pico-color);
            }
        }
    }

    .links {
        margin-bottom: var(--pico-block-spacing-vertical);
    }

    .youtube-container {
        position: relative;
        padding-bottom: calc(900% / 16);

        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }

    span.secondary {
        color: var(--pico-secondary);
    }

    @keyframes scrollArrow {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(var(--pico-block-spacing-vertical));
        }
    }
</style>
