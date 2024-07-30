<script lang="ts">
    import { categories } from "../../models/categories";
</script>

<section class="categories">
    <h2>Our categories</h2>
    <div class="carousel" >
        {#each categories as cat}
            <div class="category">
                <a href={cat.link}>
                    <h3>{cat.name}</h3>
                    <img src={cat.image} alt={cat.name} />
                </a>
            </div>
        {/each}
    </div>
</section>

<style>
    .categories {
        margin: 30px 0;
        padding: 30px 15px;
        text-transform: uppercase;
        overflow: hidden;
    }

    .categories a {
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }

    .categories h2,
    .categories h3 {
        margin-bottom: 20px;
        font-weight: 400;
        text-align: center;
        color: black;
        letter-spacing: 1px;
    }

    .categories h2 {
        margin: 25px 0 35px;
        font-size: 25px;
        letter-spacing: 1px;
    }

    .categories h3 {
        font-size: 16px;
        margin: 16px 15px 25px;
    }

    .carousel {
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        gap: 10px;

        scroll-snap-type: x mandatory;	
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
        scrollbar-width: none;
    }

    .category {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 66.66667%;
    }

    .category img {
        width: 100%;
        height: auto;
    }

    @media (min-width: 768px) {
        .categories h2 {
            font-size: 30px;
        }

        .categories h3 {
            font-size: 20px;
        }

        .category {
            flex-basis: 40%;
        }
    }

    @media (min-width: 1024px) {
        .categories h2 {
            font-size: 40px;
        }

        .category {
            flex-basis: 28.5714%;
        }
    }

    @media (min-width: 1280px) {
        .category {
            flex: 0 1 auto;
        }
    }
</style>
