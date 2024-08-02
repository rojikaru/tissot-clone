<script lang="ts">
    import Scroll from "../../helpers/scroll.svelte";

    $: innerWidth = window.innerWidth;

    const black_logo = "/images/tissot-black.svg";
    const white_logo = "/images/tissot-white.svg";

    let logo = white_logo;
    let isTop = true;
    let isScrollingDown = false;

    let navOpen = true;
    let menuOpen = false;
    let searchOpen = false;

    let searchtxt: string | null;

    const dispatchNav = (input: boolean | string) => {
        if (typeof input === "string") {
            input = input === "true";
        }

        navOpen = input;
    };

    const dispatchMenu = () => {
        menuOpen = !menuOpen;
        updateLogo();
    };

    const updateLogo = () => {
        logo = menuOpen ? black_logo : isTop ? white_logo : black_logo;
    };
</script>

<Scroll
    bind:isTop
    bind:isScrollingDown
    handleLoad={() => dispatchNav("false")}
    scrollCallback={() => {
        updateLogo();
        dispatchNav(isScrollingDown && !isTop);
    }}
/>

<header
    class:header-white={!isTop}
    class:menu-open={menuOpen}
    aria-hidden={navOpen}
>
    <div
        class="callout"
        class:visible={isTop && (!menuOpen || window.innerWidth >= 1280)}
    >
        <div class="content">
            <strong>
                REGISTER YOUR WATCH
                <a href="#top">HERE</a>
            </strong>
            TO ACCESS YOUR WARRANTY INFORMATION AND MORE
        </div>
    </div>
    <nav class="main-nav">
        <div class="mini-left">
            <button on:click={dispatchMenu}>
                <svg>
                    <use
                        xlink:href={menuOpen
                            ? "/images/symbols.svg#icon-x"
                            : "/images/symbols.svg#icon-menu"}
                    ></use>
                </svg>
            </button>
        </div>
        <div class="mini-right">
            <button
                class="btn-search"
                on:click={() => dispatchNav(!navOpen)}
                aria-hidden={!navOpen}
            >
                <svg class="icon">
                    <use xlink:href="/images/symbols.svg#icon-search"></use>
                </svg>
            </button>
            <a href="#top" class="user">
                <svg class="icon">
                    <use xlink:href="/images/symbols.svg#icon-user"></use>
                </svg>
            </a>
        </div>
        <div class="logo">
            <a class="logo" href="#top">
                <img src={logo} alt="Tissot logo" class="logo" loading="lazy" />
            </a>
        </div>
        <nav class="menu" aria-hidden={!menuOpen}>
            <div class="menu-bottom">
                <ul>
                    <li>
                        <a class="underline" href="#top">Men</a>
                    </li>
                    <li>
                        <a class="underline" href="#top">Women</a>
                    </li>
                    <li>
                        <a class="underline" href="#top">Collection</a>
                    </li>
                    <li>
                        <a class="underline" href="#top">New styles</a>
                    </li>
                    <li>
                        <a class="underline" href="#top">Straps</a>
                    </li>
                </ul>
            </div>
            <div class="menu-left">
                <ul>
                    <li>
                        <a href="#top" class="underline">Brand</a>
                    </li>
                    <li>
                        <a href="#top" class="underline">Customer service</a>
                    </li>
                </ul>
            </div>
            <div class="menu-right">
                <ul>
                    <li class="search">
                        <button on:click={() => searchOpen = true}>
                            <svg class="icon">
                                <use
                                    xlink:href="/images/symbols.svg#icon-search"
                                >
                                </use>
                            </svg>
                            <span>Search</span>
                        </button>
                    </li>
                    <li>
                        <a href="#top">
                            <svg>
                                <use
                                    xlink:href="/images/symbols.svg#icon-map-pin"
                                ></use>
                            </svg>
                            <span>Find stores</span>
                        </a>
                    </li>
                    <li>
                        <a href="#top">
                            <svg>
                                <use xlink:href="/images/symbols.svg#icon-watch"
                                ></use>
                            </svg>
                            <span>Register watch</span>
                        </a>
                    </li>
                    <li class="intl">
                        <a href="#top">
                            <svg>
                                <use xlink:href="/images/symbols.svg#icon-globe"
                                ></use>
                            </svg>
                            <span>International</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </nav>
    <nav class="search" aria-hidden={navOpen}>
        <div class="flex">
            <form action="#search" method="post">
                <input
                    class:transparent={isTop}
                    type="search"
                    placeholder="Search for a product"
                />
                <button class="btn-search">
                    <svg class="icon">
                        <use xlink:href="/images/symbols.svg#icon-search">
                        </use>
                    </svg>
                </button>
            </form>
            <button
                class="btn-dismiss"
                on:click={() => dispatchNav(innerWidth < 1280)}
            >
                <svg class="icon">
                    <use xlink:href="/images/symbols.svg#icon-x"></use>
                </svg>
            </button>
        </div>
    </nav>
</header>
<nav class="menu-search" class:top={isTop} aria-hidden={!searchOpen}>
    <img src="/images/tissot-minimal.svg" alt="Tissot logo" />
    <form action="#search" method="post">
        <input bind:value={searchtxt} type="search" placeholder="Search for a product" />
        <button class="btn-search">
            <svg class="icon">
                <use xlink:href="/images/symbols.svg#icon-search"></use>
            </svg>
        </button>
    </form>
    <button class="btn-dismiss" on:click={() => {
        if (searchtxt) searchtxt = null
        else searchOpen = false
    }}>
        <svg class="icon">
            <use xlink:href="/images/symbols.svg#icon-x"></use>
        </svg>
    </button>
</nav>

<style>
    @import url("../../assets/header.css");
</style>
