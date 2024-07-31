<script lang="ts">
    import type Watch from "../../models/watch";
    export let slides: Watch[];

    let scrollContainer: HTMLElement;
    let snap = true;
    let preventSnap = false;

    let leftActive: boolean | null = null;

    $: scrollPercent = 0;
    $: currentIndex = 0;
    $: innerWidth = window.innerWidth;
    $: maxIndex = innerWidth < 1024 ? slides.length - 1 : slides.length - 4;

    const calcCurrentIndex = () => {
        if (innerWidth < 1024) {
            currentIndex = Math.round((scrollPercent / 100) * maxIndex);
        } else {
            currentIndex = Math.round(
                scrollContainer.scrollLeft /
                    (scrollContainer.scrollWidth / slides.length),
            );
        }
    };

    const updateScroll = () => {
        if (!scrollContainer) return;
        if (preventSnap) {
            preventSnap = false;
            return;
        }

        snap = true;

        const containerWidth = scrollContainer.clientWidth;
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - containerWidth;

        scrollPercent = (scrollLeft / maxScroll) * 100;
        calcCurrentIndex();
    };

    const scrollTo = (index: number, smooth = true) => {
        if (index < 0 || index > maxIndex || !scrollContainer) return;

        snap = innerWidth < 1024;

        const containerWidth = scrollContainer.clientWidth;
        const scrollWidth = scrollContainer.scrollWidth;
        const maxScroll = scrollWidth - containerWidth;

        const scrollPosition =
            innerWidth < 1024
                ? (index / maxIndex) * maxScroll
                : index * (scrollWidth / slides.length);

        scrollPercent = (scrollPosition / maxScroll) * 100;
        scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: smooth ? "smooth" : "auto",
        });

        currentIndex = index;
    };

    const handleSliderChange = (event: Event) => {
        const target = event.target as HTMLInputElement;

        snap = false;
        preventSnap = true;
        scrollPercent = parseFloat(target.value);
        currentIndex = Math.round((scrollPercent / 100) * maxIndex);

        const containerWidth = scrollContainer.clientWidth;
        const maxScroll = scrollContainer.scrollWidth - containerWidth;
        const scrollPosition = (scrollPercent / 100) * maxScroll;

        scrollContainer.scrollLeft = scrollPosition;
    };

    const scrollPrev = () => {
        leftActive = true;
        if (currentIndex > maxIndex) scrollTo(maxIndex - 1);
        else scrollTo(currentIndex - 1);

        console.log(leftActive);
    };
    const scrollNext = () => {
        leftActive = false;
        if (currentIndex < 0) scrollTo(1);
        else scrollTo(currentIndex + 1);
        console.log(leftActive);
    };
</script>

<svelte:window
    on:resize={() => scrollTo(currentIndex, false)}
/>

<div class="carousel">
    {#if slides.length > 0}
        <div
            class:snap
            class="card-container"
            bind:this={scrollContainer}
            on:scroll={updateScroll}
        >
            {#each slides as slide}
                <div class="card">
                    <a href={slide.link} class="img">
                        <img src={slide.image} alt={slide.name} />
                    </a>
                    <a href={slide.link} class="description">
                        <h3>{slide.name}</h3>
                        <p>{slide.description}</p>
                    </a>
                </div>
            {/each}
        </div>

        <div class="controls">
            <input
                type="range"
                min="0"
                max="100"
                step="0.01"
                bind:value={scrollPercent}
                on:input={handleSliderChange}
            />
        </div>

        <div class="buttons">
            <button
                class="left icon-chevron-left"
                class:moved={leftActive === true}
                on:click={scrollPrev}
                disabled={currentIndex === 0}
            >
            </button>
            <button
                class="right icon-chevron-right"
                class:moved={leftActive === false}
                on:click={scrollNext}
                disabled={currentIndex === maxIndex}
            >
            </button>
        </div>
    {:else}
        <p class="error">No images to display</p>
    {/if}
</div>

<style>
    .carousel {
        overflow: hidden;
        position: relative;
    }

    .card-container {
        display: flex;
        gap: 10px;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding-bottom: 30px;
        margin: 0;
    }

    :global(.card-container.snap) {
        scroll-snap-type: x mandatory;
    }

    .card-container::-webkit-scrollbar {
        display: none;
    }

    .card {
        flex: 0 0 50%;
        width: 100%;
        height: auto;
        scroll-snap-align: center;
        text-align: center;
    }

    .card .img {
        display: block;
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;
    }

    .card .img img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) scale(1);
        transition: all 0.2s;
        min-width: 85%;
    }

    .card:first-child {
        margin-left: 25%;
    }
    .card:last-child {
        margin-right: 25%;
    }

    .controls {
        display: flex;
        justify-content: center;
    }

    input[type="range"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 200px;
        cursor: pointer;
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        height: 3px;
        background: #757575;
        -webkit-appearance: none;
        appearance: none;
    }

    input[type="range"]::-moz-range-track {
        height: 3px;
        background: #757575;
        -moz-appearance: none;
        appearance: none;
    }

    input[type="range"]::-webkit-slider-thumb {
        border: none;
        height: 3px;
        width: 60px;
        background: #dc1f18;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
    }

    input[type="range"]::-moz-range-thumb {
        border: none;
        height: 3px;
        width: 60px;
        background: #dc1f18;
        cursor: pointer;
        -moz-appearance: none;
        appearance: none;
    }

    .error {
        color: #dc1f18;
        font-size: 20px;
        text-align: center;
        margin-bottom: 40px;
    }

    .card a {
        color: #252525;
        transition: all 0.2s ease-in;
    }

    .card:hover a {
        color: #dc1f18;
    }

    .card:hover img {
        transform: translate3d(-50%, -50%, 0) scale(1.05);
    }

    .card h3 {
        font-size: 16px;
        font-weight: 500;
        margin: 20px 0 3px;
    }

    .card a {
        text-decoration: none;
    }

    .card p {
        font-size: 12px;
        line-height: 15px;
        font-weight: 400;
        margin: 0;
    }

    .buttons {
        display: none;
    }

    .buttons button {
        position: absolute;
        background-color: #dc1f18;
        border-width: 0;
        border-radius: 50%;
        color: #fff;
        height: 36px;
        overflow: hidden;
        width: 36px;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }

    .buttons button:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    .buttons .left {
        left: 0;
    }

    .buttons .right {
        right: 0;
    }

    :global(.buttons .left.moved) {
        left: 20px !important;
    }

    :global(.buttons .right.moved) {
        right: 20px !important;
    }

    .icon-chevron-left:before {
        content: "\e902";
    }

    .icon-chevron-right:before {
        content: "\e903";
    }

    @media (min-width: 768px) {
        .card h3 {
            font-size: 18px;
        }

        input[type="range"] {
            width: 656px;
        }

        .card-container {
            padding: 0 0 70px;
            margin-bottom: 40px;
        }
    }

    @media (min-width: 1024px) {
        .card {
            flex: 0 0 24%;
        }

        .card:first-child {
            margin-left: 0;
        }
        .card:last-child {
            margin-right: 0;
        }

        :global(.card-container.snap) {
            scroll-snap-type: none;
        }

        .buttons {
            position: absolute;
            display: flex;
            justify-content: space-between;
            top: 23%;
            width: 100%;
        }
    }
</style>
