<script lang="ts">
    const doc = document.documentElement || document.body;

    export let tolerance = 10;

    export let isTop = doc.scrollTop <= tolerance;

    export let lastScrollTop = 0;
    export let isScrollingDown = true;

    export let scrollCallback: (() => void) | null;
    export let handleLoad: (() => void) | null;

    const handleScroll = () => {
        isTop = doc.scrollTop <= tolerance; // tolerance

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
