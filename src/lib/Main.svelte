<script lang="ts">
</script>

<main class="main">
    <section class="most-popular">
        <div class="img"></div>
        <div class="title">
            <h1>TISSOT</h1>
            <h2>PR 100 CHRONOGRAPH</h2>
            <a href="#top" class="btn-discover">
                <span>DISCOVER</span>
            </a>
        </div>
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

    .title {
        color: white;
        position: absolute;
        right: 30px;
        bottom: 120px;
        left: 30px;
    }

    .title h1 {
        font-size: 0.9rem;
        margin: 0;
        font-weight: 400;
    }

    .title h2 {
        font-size: 40px;
        margin: -13px 0 40px 0;
        font-weight: 400;
    }

    .btn-discover {
        display: inline-flex;
        /* margin-top: 20px; */
        color: white;
        text-decoration: none;
        border-radius: 25px;
        font-size: 0.75rem;
        letter-spacing: 2px;
        width: 100%;
        max-width: 19rem;
        height: 3rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0 1.5rem;
        font-weight: 500;
        position: relative;
        overflow: hidden;
        transition: all 0.2s ease-in;
    }

    .btn-discover:not(:hover) {
        background-color: #dc1f18;
    }

    .btn-discover:hover, .btn-discover:focus {
        background-color: #1b1b1b;
        color: white;
    }

    .btn-discover:focus {
        border-color: #fff;
        box-shadow: 0 0 8px #dc1f18cc;
        outline: 1px dashed red;
        outline-offset: 5px;
    }
</style>
