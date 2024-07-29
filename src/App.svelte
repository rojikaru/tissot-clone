<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  let isMenuOpen = false;
</script>

{#if isMenuOpen}
  <div>Menu</div>
{:else}
<Header bind:isMenuOpen={isMenuOpen} />
<Main />
<Footer />
{/if}