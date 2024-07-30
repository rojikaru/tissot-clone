<script lang="ts">
  import Footer from "./lib/global-components/Footer.svelte";
  import Header from "./lib/global-components/Header.svelte";
  import Menu from "./lib/global-components/Menu.svelte";
  import Home from "./lib/Home.svelte";

  let menuOpen = false;
</script>

{#if menuOpen}
  <Menu />
{:else}
  <Header bind:isMenuOpen={menuOpen} />
  <main class="main">
    <Home />
  </main>
  <Footer />
{/if}
