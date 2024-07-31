<script>
    import { new_watches } from "../../models/watch";
    import Carousel from "../global-components/Carousel.svelte";
</script>

<section class="novelties">
    <h2>Novelties</h2>
    <Carousel slides={new_watches} />
    <div class="btn-container">
        <a href="#top" class="btn-primary uppercase mx-auto">Discover</a>
    </div>
</section>

<style>
    .novelties {
        margin: 60px 0 50px;
        text-transform: uppercase;
    }

    .novelties h2 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 35px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 47px;
        color: black;
    }

    .btn-container a {
        display: flex !important;
        margin: 30px auto 0;
    }

    @media (min-width: 768px) {
        .novelties {
            margin: 60px 20px 50px;
        }
    }

    @media (min-width: 1024px) {
        .novelties h2 {
            font-size: 40px;
        }
    }

    @media (min-width: 1280px) {
        .novelties {
            margin: 105px calc(3vw + 20px) 50px;
        }
    }
</style>
