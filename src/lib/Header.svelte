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
    <nav class="search"></nav>
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
        padding: 20px 0;
        height: 70px;
    }

    a.logo {
        float: none;
        display: inline;
        max-width: 100%;
        margin: 0;
        position: relative;
    }

    .logo img {
        width: 158px;
        height: 20px;
    }
</style>
