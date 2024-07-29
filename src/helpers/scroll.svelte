<script lang="ts">
    const doc = document.documentElement || document.body;

    export let isTop = doc.scrollTop <= 0;

    export let lastScrollTop = 0;
    export let isScrollingDown = true;

    export let scrollCallback: (() => void) | null;
    export let handleLoad: (() => void) | null;

    const handleScroll = () => {
        isTop = doc.scrollTop <= 10; // tolerance

        const st = doc.scrollTop;
        isScrollingDown = st > lastScrollTop;
        lastScrollTop = st <= 0 ? 0 : st;

        scrollCallback?.call(null);
    }
</script>

<svelte:window
    on:scroll={handleScroll}
    on:load={handleLoad}
/>
