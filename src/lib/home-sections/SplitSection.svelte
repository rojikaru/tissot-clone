<script lang="ts">
    import { onMount } from "svelte";
    import type Watch from "../../models/watch";

    export let isImgLeft = false;
    export let title: string;
    export let subtitle: string = "Discover";
    export let watches: Watch[];
    export let img: string;

    const visibilityObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("loaded");
                    visibilityObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5,
        },
    );

    let imgElement: HTMLImageElement;

    onMount(() => {
        visibilityObserver.observe(imgElement);
        document.querySelectorAll(".watch").forEach((watch) => {
            visibilityObserver.observe(watch);
        });
    });
</script>

<section class="split-section">
    <div class="watch-grid">
        {#each watches as watch, i}
            <div class="watch">
                <a href={watch.link} class="thumbnail">
                    <img
                        src={watch.image}
                        alt={watch.name + " image"}
                        loading="lazy"
                    />
                </a>
                <a href="#top" class="watch-description">
                    <h3>{watch.name}</h3>
                    <p>{watch.description}</p>
                </a>
            </div>
        {/each}
    </div>
    <div class={`img-background ${isImgLeft ? "left" : ""}`}>
        <div class="fixed">
            <h2>{title}</h2>
            <a class="btn-primary" href="#top">{subtitle}</a>
        </div>
        <div class="fade-container">
            <img
                bind:this={imgElement}
                src={img}
                alt={title + " image"}
                loading="lazy"
            />
        </div>
    </div>
</section>

<style>
    .split-section {
        text-transform: uppercase;
        color: white;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        margin-bottom: 50px;
    }

    .img-background {
        position: relative;
        order: -1;
    }

    .img-background img {
        width: 100%;
        display: block;
        object-fit: cover;
        transition: all 0.2s ease-in;
        transform: scale(0.9);
    }

    :global(.img-background img.loaded) {
        transform: scale(1) !important;
    }

    .watch-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .watch:nth-child(1),
    .watch:nth-child(2) {
        opacity: 0.5;
    }

    .watch {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        margin: 0 8px;

        transition: all 0.2s;
        transform: scale(0.9);
        opacity: 0.3;
        transition: all 0.2s ease-in 0s;
    }

    .watch img {
        transform: scale(1);
        min-width: 85%;
        transition: all 0.2s ease-in-out;
    }

    .watch img:hover {
        transform: scale(1.04);
    }

    .watch.loaded {
        opacity: 1;
        transform: scale(1);
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 25px 0;
    }

    .fixed {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 20px;
        text-align: center;
    }

    .watch-description {
        text-decoration: none;
        color: rgb(37, 37, 37);
        padding: 15px 20px 0;
        transition: all 0.2s ease-in;
    }

    .watch-description:hover {
        color: #dc1f18;
    }

    .watch-description h3 {
        font-size: 1.125rem;
        font-weight: 500;
        margin: 20px 0 3px;
        line-height: 1.1;
        letter-spacing: 0.05em;
    }

    .watch-description p {
        font-size: 0.8rem;
        font-weight: 300;
        margin: 0;
        line-height: 1.5rem;
    }

    .fade-container {
        position: relative;
    }

    .fade-container::after {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        box-shadow: inset 0 -100px 50px -32px white;
        border-collapse: separate;
    }

    @media (max-width: 768px) {
        .watch-grid {
            padding: 0 8px;
        }
    }

    @media (min-width: 768px) {
        .watch {
            margin: 0 10px;
        }

        .split-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 20px 10px;
            margin-bottom: 40px;
        }

        .fade-container::after {
            display: none;
        }

        .img-background {
            padding: 0 10px;
        }

        .fixed {
            padding-top: 50px;
            inset: 0;
        }

        .img-background {
            order: initial;
        }

        .left {
            order: -1;
        }
    }

    @media (min-width: 1024px) {
        h2 {
            font-size: 40px;
        }
    }

    @media (min-width: 1280px) {
        .split-section {
            margin: 0 3vw 90px;
            padding: 0;
        }

        .img-background {
            padding: 0 20px;
        }

        .split-section {
            gap: 40px;
        }

        .watch {
            margin: 0 20px;
        }
    }
</style>
