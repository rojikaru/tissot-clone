<script lang="ts">
    import white_logo from "../../assets/images/tissot-white.svg";
    import black_logo from "../../assets/images/tissot-black.svg";
    import Scroll from "../../helpers/scroll.svelte";

    $: innerWidth = window.innerWidth;

    let logo = white_logo;
    let isTop = true;
    let isScrollingDown = false;

    const dispatchNav = (input: boolean | string) => {
        if (typeof input === "boolean") {
            input = input.toString();
        }

        if (innerWidth < 1280) {
            document
                .querySelector(".search")
                ?.setAttribute("aria-hidden", input);
        } else {
            document
                .querySelector(".main-nav")
                ?.setAttribute("aria-hidden", input);
        }
    };

    export let isMenuOpen = false;
</script>

<Scroll
    bind:isTop
    bind:isScrollingDown
    handleLoad={() => dispatchNav("false")}
    scrollCallback={() => {
        logo = isTop ? white_logo : black_logo;
        dispatchNav(isScrollingDown && !isTop && window.innerWidth < 1280);
    }}
/>

<header class={`header${!isTop ? " header-white" : ""}`}>
    <div class={`callout${isTop ? " visible" : ""}`}>
        <div class="content">
            <strong>
                REGISTER YOUR WATCH
                <a href="#top">HERE</a>
            </strong>
            TO ACCESS YOUR WARRANTY INFORMATION AND MORE
        </div>
    </div>
    {#if innerWidth < 1280}
        <nav class={`main-nav`}>
            <div class="logo">
                <a class="logo" href="#top">
                    <img
                        src={logo}
                        alt="Tissot logo"
                        class="logo"
                        loading="lazy"
                    />
                </a>
            </div>
        </nav>
        <nav class={`search${!isTop ? " white" : ""}`} aria-hidden="true">
            <div class="flex">
                <form action="#search" method="post">
                    <input
                        class={isTop ? "transparent" : ""}
                        type="search"
                        placeholder="Search for a product"
                    />
                    <button class={`btn-search`}>
                        <svg class="icon">
                            <use xlink:href="/images/symbols.svg#icon-search"
                            ></use>
                        </svg>
                    </button>
                </form>
                <button
                    class={`btn-dismiss`}
                    on:click={() => dispatchNav(window.innerWidth < 1280)}
                >
                    <svg class="icon">
                        <use xlink:href="/images/symbols.svg#icon-x"></use>
                    </svg>
                </button>
            </div>
        </nav>
    {:else}
        <nav class={`main-nav`} aria-hidden="false"></nav>
    {/if}
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

        display: none;
        visibility: hidden;
        justify-content: center;
        align-items: center;

        transition: all 0.2s ease;
        height: 0;
    }

    .callout.visible {
        display: flex;
        visibility: visible;
        height: fit-content;
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

    .header-white .main-nav {
        background-color: white;
    }

    .main-nav {
        background-color: transparent;
    }

    .main-nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-white .main-nav {
        border-bottom: 1px solid #00000033;
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
        padding: 20px 0;
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
        position: relative;
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
            transform: translateY(-100%);
            height: 70px;
            z-index: -1;
            transition:
                transform 0.3s ease-in,
                opacity 0.3s ease-in,
                visibility 0.3s ease-in;
        }

        :global(.search[aria-hidden="false"]) {
            transform: translateY(0) !important;
        }

        :global(.search[aria-hidden="true"]) {
            transform: translateY(-100%) !important;
            visibility: hidden;
        }
    }

    form {
        position: relative;
        width: 100%;
        max-width: 780px;
        display: flex;
    }

    .btn-dismiss {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 33%;
        right: 30px;
        color: #ffffffaa;
    }

    .header-white .btn-dismiss,
    .header-white .btn-search,
    .header-white .search {
        color: black;
    }

    .header-white .search {
        background-color: white;
    }

    .search.white input[type="search"] {
        background-color: #f1f1f1;
        color: #757575;
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
        top: 15%;
        left: 4px;
        color: white;
    }

    .btn-search:hover {
        color: #dc1f18;
        transition: color 0.3s;
    }
</style>
