<svelte:head>
    <title>404 Page not found</title>
    <meta name="description" content="This page doesn't exist" />
</svelte:head>

<div class="error center-text">
    <h1 class="fancy">404</h1>
    <a class="fancy" href="/"
        >You're lost, aren't you? Click here to go to the home page.</a
    >
</div>

<style lang="scss">
    .error {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100vh - 2 * var(--pico-block-spacing-vertical));
        position: relative;

        a {
            text-decoration: none;
        }
    }

    h1 {
        --pico-font-size: 8rem;
    }
</style>
