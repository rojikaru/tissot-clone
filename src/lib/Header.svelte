<script lang="ts">
    import white_logo from "../assets/images/tissot-white.svg";
    import black_logo from "../assets/images/tissot-black.svg";

    const doc = document.documentElement || document.body;

    let isTop = doc.scrollTop <= 0;
    let logo = white_logo;
</script>

<svelte:window
    on:scroll={() => {
        isTop = doc.scrollTop <= 0;
        logo = isTop ? white_logo : black_logo;
    }}
    on:load={() => {
        document.querySelector(".search")?.setAttribute("aria-hidden", "false");
    }}
/>

<header class="header">
    {#if isTop}
        <div class="callout">
            <div class="content">
                <strong>
                    REGISTER YOUR WATCH
                    <a href="#top">HERE</a>
                </strong>
                TO ACCESS YOUR WARRANTY INFORMATION AND MORE
            </div>
        </div>
    {/if}
    <nav class={`main-nav${isTop ? " transparent" : ""}`}>
        <div class="logo">
            <a class="logo" href="#top">
                <img src={logo} alt="Tissot logo" class="logo" />
            </a>
        </div>
    </nav>
    <nav class="search" aria-hidden="true">
        <div class="flex">
            <form action="#search" method="post">
                <input
                    class={isTop ? "transparent" : ""}
                    type="search"
                    placeholder="Search for a product"
                />
                <button class={`btn-search${isTop ? " white" : ""}`}>
                    <svg class="icon">
                        <use xlink:href="/images/symbols.svg#icon-search"></use>
                    </svg>
                </button>
            </form>
            <button
                class={`btn-dismiss${isTop ? " white" : ""}`}
                on:click={() =>
                    document
                        .querySelector(".search")
                        ?.setAttribute("aria-hidden", "true")}
            >
                <svg class="icon">
                    <use xlink:href="/images/symbols.svg#icon-x"></use>
                </svg>
            </button>
        </div>
    </nav>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }

    .callout {
        background-color: #dc1f18;
        color: white;
        font-size: 0.85rem;
        font-weight: 400;
        min-height: 50px;
    }

    .callout {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .callout .content {
        margin: 0.5rem 0;
        padding: 0 10px;
        text-align: center;
    }

    .callout a {
        color: white;
        text-decoration: underline;
    }

    .main-nav:not(.transparent) {
        background-color: white;
    }

    .main-nav.transparent {
        background-color: transparent;
    }

    .main-nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.logo {
        margin: 0 auto;
        height: 70px;
        font-family: "Times New Roman", Times, serif;
    }

    a.logo {
        float: none;
        display: inline-block;
        max-width: 100%;
        margin: 0;
        position: relative;
        margin: 20px 0;
    }

    .logo img {
        width: 158px;
        height: 20px;
    }

    input[type="search"] {
        display: inline-block;
        width: 100%;
        border-radius: 25px;
        border: 0 none;
        font-size: 10.5px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.4px;
        padding: 5px 7.5px 5px 40px;
        height: 38px;
    }

    input[type="search"].transparent {
        background-color: rgba(241, 241, 241, 0.3);
        color: #fff;
    }

    input[type="search"].transparent::placeholder {
        color: #fff;
        font-weight: 400;
    }

    .search .flex {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 16px 24px;
    }

    @media (max-width: 1280px) {
        .search {
            position: absolute;
            left: 0;
            width: 100%;
            top: 100%;
            transform: translateY(-10%);
            z-index: 0;
            transition:
                transform 0.3s ease-in,
                opacity 0.3s ease-in,
                visibility 0.3s ease-in;
        }

        .search[aria-hidden="false"] {
            transform: translateY(0);
        }

        .search[aria-hidden="true"] {
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
        }
    }

    form {
        position: relative;
        width: 100%;
        max-width: 780px;
    }

    .btn-dismiss {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 40%;
        right: 30px;
        color: black;
    }

    .btn-dismiss.white,
    .btn-search.white {
        color: white;
    }

    .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
    }

    .btn-search {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 30%;
        left: 4px;
        color: black;
    }

    .btn-search:hover {
        color: #dc1f18;
        transition: color 0.3s;
    }
</style>
