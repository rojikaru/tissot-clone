<section class="help">
    <div class="left">
        <h2>Store locator</h2>
        <a href="#top" class="btn-primary">Find stores</a>
    </div>
    <div class="right">
        <h2>Customer service</h2>
        <a href="#top" class="btn-primary">Find out more</a>
    </div>
</section>

<style>
    .help {
        text-transform: uppercase;
        margin-bottom: 1px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .help a {
        width: 100%;
        box-sizing: border-box;
        margin-top: 15px;
    }

    .help .left {
        background-image: url("/images/bg-store-locator.jpg");
        color: black;
    }

    .help .right {
        background-image: url("/images/bg-customer-service.jpg");
        color: white;
    }

    .help h2 {
        font-weight: 400;
        text-align: center;
        font-size: 25px;
        margin: 25px 0 20px;
    }

    .help div {
        background-position: center;
        background-size: cover;

        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: max(20px, 15%) 20px;
    }

    @media (min-width: 640px) {
        .help {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .help h2 {
            font-size: 40px;
        }
    }
</style>
