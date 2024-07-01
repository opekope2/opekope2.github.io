<script lang="ts">
    export let id: string;

    let videoDetails: HTMLDetailsElement;
    let videoIframe: HTMLIFrameElement;

    function toggleVideo(e: Event) {
        if (videoDetails.open && videoIframe.dataset.loaded !== "true") {
            videoIframe.dataset.loaded = "true";
            videoIframe.src = `//www.youtube-nocookie.com/embed/${id}?enablejsapi=1`;
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
</script>

<details bind:this={videoDetails} on:toggle={toggleVideo}>
    <summary>
        <slot />
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

<style lang="scss">
    .youtube-container {
        position: relative;
        padding-bottom: calc(900% / 16);

        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
</style>
