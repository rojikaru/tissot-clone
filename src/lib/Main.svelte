<script lang="ts">
    import { female_watches, male_watches } from "../models/watch";
    import MostPopular from "./MostPopular.svelte";
    import SplitSection from "./SplitSection.svelte";
</script>

<main class="main">
    <MostPopular />
    <SplitSection
        isImgLeft={true}
        title="Watches for him"
        watches={male_watches}
        img="/images/man.avif"
    />
    <SplitSection
        isImgLeft={false}
        title="Watches for her"
        watches={female_watches}
        img="/images/woman.avif"
    />
    <!-- <section class="section">
        <h2>Section Title</h2>
        <span>Section content...</span>
    </section> -->
</main>
