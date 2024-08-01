<script lang="ts">
</script>

<footer>
    <div class="logo">
        <img src="/images/footer-logo.svg" alt="Tissot logo" />
    </div>
    <ul class="annotated-links">
        <li>
            <a href="#top">
                <svg>
                    <use xlink:href="/images/symbols.svg#icon-map-pin"></use>
                </svg>
                <p class="label">Find a store</p>
            </a>
        </li>
        <li>
            <a href="#top">
                <svg>
                    <use xlink:href="/images/symbols.svg#icon-gift"></use>
                </svg>
                <p class="label">Corporate gift</p>
            </a>
        </li>
        <li>
            <div class="socials">
                <a href="#top">
                    <svg>
                        <use xlink:href="/images/symbols.svg#icon-instagram"
                        ></use>
                    </svg>
                </a>
                <a href="#top">
                    <svg>
                        <use xlink:href="/images/symbols.svg#icon-facebook"
                        ></use>
                    </svg>
                </a>
                <a href="#top">
                    <svg>
                        <use xlink:href="/images/symbols.svg#icon-twitter"
                        ></use>
                    </svg>
                </a>
                <a href="#top">
                    <svg>
                        <use xlink:href="/images/symbols.svg#icon-youtube"
                        ></use>
                    </svg>
                </a>
            </div>
            <p class="label">Follow us</p>
        </li>
        <li>
            <a href="#top">
                <svg>
                    <use xlink:href="/images/symbols.svg#icon-headphones"></use>
                </svg>
                <p class="label">Need assistance?</p>
            </a>
        </li>
    </ul>
    <div class="menus">
        <ul>
            <li><a href="#top" class="underline">Men</a></li>
            <li><a href="#top" class="underline">Women</a></li>
            <li><a href="#top" class="underline">Collections</a></li>
            <li><a href="#top" class="underline">Brand</a></li>
        </ul>
        <ul>
            <li><a href="#top" class="underline">Store locator</a></li>
            <li><a href="#top" class="underline">Customer service</a></li>
            <li><a href="#top" class="underline">Press lounge</a></li>
            <li><a href="#top" class="underline">Contact us</a></li>
        </ul>
        <ul>
            <li><a href="#top" class="underline">Stop fake</a></li>
            <li><a href="#top" class="underline">Straps</a></li>
        </ul>
        <ul>
            <li><a href="#top" class="underline">Privacy notice</a></li>
            <li><a href="#top" class="underline">Cookie notice</a></li>
            <li><a href="#top" class="underline">Cookie settings</a></li>
            <li><a href="#top" class="underline">Terms of use</a></li>
        </ul>
    </div>
</footer>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    footer {
        background-color: black;
        color: white;
        padding: 40px 0 34px;
        text-align: center;
        text-transform: uppercase;
    }

    footer a {
        color: white;
        text-decoration: none;
    }

    :global(a.underline) {
        color: white;
    }

    :global(a.underline::after) {
        background-color: white;
    }

    .logo img {
        display: block;
        margin: 0 auto;
    }

    .annotated-links {
        display: grid;
        margin: 80px 0 0;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 50px;
    }

    .annotated-links li {
        padding: 0 20px;
    }

    footer .label {
        margin: 0;
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 500;
    }

    footer svg {
        width: 25px;
        height: 25px;
        stroke: currentColor;
        fill: currentColor;
        stroke-width: 0;
    }

    .menus {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        margin-top: 66px;
        text-align: start;
        padding: 0 30px;
        font-size: 11px;
    }

    .menus ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        line-height: 24px;
    }

    @media (min-width: 640px) {
        .annotated-links {
            grid-template-columns: repeat(4, 1fr);
        }

        footer .label {
            margin-top: 10px;
        }

        .menus {
            grid-template-columns: repeat(4, 1fr);
            text-align: center;
        }
    }

    @media (min-width: 1280px) {
        footer {
            padding: 40px 3vw;
        }

        footer .label {
            font-size: 18px;
        }
    }
</style>
