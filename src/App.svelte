<script lang="ts">
  import "./app.css";
  import Footer from "./lib/global-components/Footer.svelte";
  import Header from "./lib/global-components/Header.svelte";
  import Home from "./lib/Home.svelte";
</script>

<Header />
<main class="main">
  <Home />
  <!-- TODO: Replace with an outlet -->
</main>
<Footer />
