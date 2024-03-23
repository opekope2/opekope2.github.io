<article class="card">
    {#if $$slots.header}
        <header>
            <slot name="header" />
        </header>
    {/if}

    <slot />

    {#if $$slots.footer}
        <footer>
            <slot name="footer" />
        </footer>
    {/if}
</article>

<style lang="scss">
    @import "../scss/fancy/fancy.scss";

    .card {
        position: relative;

        &::before {
            @include fancy;
            content: "";
            position: absolute;
            z-index: -1;
            inset: -1px;
            border-radius: inherit;
            transition: all 0.3s;
        }

        &:hover::before,
        &:focus-within::before {
            filter: blur(2rem);
        }
    }
</style>
