<section class="most-popular">
    <a href="#top"><div class="img"></div></a>
    <div class="title">
        <h1>TISSOT</h1>
        <h2>PR 100 CHRONOGRAPH</h2>
        <a href="#top" class="btn-primary">
            <span>DISCOVER</span>
        </a>
    </div>
</section>

<style>
    .most-popular {
        position: relative;
        display: flex;
        height: 0;
        /* min-height: 350px; */
        overflow: hidden;
        padding-bottom: 177.7777778%;
        margin-bottom: 40px;
    }

    @media (min-width: 870px) {
        .most-popular {
            padding-bottom: 56.25%;
        }
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
</style>