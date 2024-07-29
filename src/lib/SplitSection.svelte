<script lang="ts">
    import type Watch from "../models/watch";

    export let isImgLeft = false;
    export let title: string;
    export let subtitle: string = "Discover";
    export let watches: Watch[];
    export let img: string;

    const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
            }
        });
    });

    let imgElement: HTMLImageElement;
</script>

<svelte:window on:scroll={() => visibilityObserver.observe(imgElement)} />

<section class="split-section">
    <div class={`img-background ${isImgLeft ? "left" : ""}`}>
        <div class="fixed">
            <h2>{title}</h2>
            <a class="btn-primary" href="#top">{subtitle}</a>
        </div>
        <img bind:this={imgElement} src={img} alt={title + " image"} loading="lazy" />
    </div>
    <div class="watch-grid">
        {#each watches as watch}
            <div class="watch">
                <img src={watch.image} alt={watch.name + " image"} loading="lazy" />
                <h3>{watch.name}</h3>
                <p>{watch.description}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .img-background {
        position: relative;
        padding: 0 10px;
    }

    .img-background img {
        width: 100%;
        display: block;
        object-fit: cover;
        transition: all .2s ease-in;
        transform: scale(.9);
        z-index: -1;
    }

    :global(.img-background img.loaded) {
        transform: scale(1) !important;
    }

    .split-section {
        text-transform: uppercase;
        color: white;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        column-gap: 1rem;
        padding: 20px 10px;
    }

    .watch-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
        .split-section {
            grid-template-columns: 1fr 1fr;
        }
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .fixed {
        position: absolute;
        text-align: center;
        padding-top: 50px;
        inset: 0;
        z-index: 1;
    }

    .left {
        order: -1;
    }
</style>
