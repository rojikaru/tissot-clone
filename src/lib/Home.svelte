<script lang="ts">
    import { female_watches, male_watches } from "../models/watch";
    import MostPopularSection from "./home-sections/MostPopular.svelte";
    import SplitSection from "./home-sections/SplitSection.svelte";
    import CategoriesSection from "./home-sections/Categories.svelte";
    import Register from "./home-sections/Register.svelte";
    import Novelties from "./home-sections/Novelties.svelte";
    import NewsLetter from "./home-sections/Newsletter.svelte";
    import { newsList } from "../models/news";
    import Help from "./home-sections/Help.svelte";
    import Email from "./home-sections/Email.svelte";
</script>

<MostPopularSection />
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
<CategoriesSection />
<Register/>
<Novelties />
<NewsLetter news={newsList} />
<Help />
<Email />
