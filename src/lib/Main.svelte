<script lang="ts">
</script>

<main class="main">
    <section class="most-popular">
        <div class="img"></div>
    </section>
    <!-- <section class="section">
        <h2>Section Title</h2>
        <span>Section content...</span>
    </section> -->
</main>

<style>
    .most-popular {
        position: relative;
        display: flex;
        height: 0;
        /* min-height: 350px; */
        overflow: hidden;
        padding-bottom: 56.25%;
    }

    .most-popular .img {
        position: absolute;
        background-color: #000;
        background-position: center;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        width: 100%;
        max-width: initial;
        background-image: url(/images/most-popular.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
