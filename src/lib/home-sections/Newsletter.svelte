<script lang="ts">
    import type News from "../../models/news";
    export let news: News[];

    const orderFn = (a: News, b: News) =>
        b.publishedAt.getTime() - a.publishedAt.getTime();
    $: orderedNews = news.sort(orderFn);
</script>

<section class="news">
    <h2>Latest news</h2>
    <ul class="articles">
        {#each orderedNews as article}
            <li>
                <a href={article.url}>
                    <article>
                        <div class="img-container">
                            <img src={article.image} alt={article.title} />
                        </div>
                        <h3>{article.title}</h3>
                        <p class="date">{article.publishedAtFormatted}</p>
                        <p class="content">{article.content}</p>
                    </article>
                </a>
            </li>
        {/each}
    </ul>
    <a href="#top" class="btn-primary btn-more"> View all news </a>
</section>

<style>
    .news ul {
        list-style: none;
        padding: 0;
    }

    .news a {
        text-decoration: none;
        color: inherit;
    }

    .news {
        margin: 60px 0 50px;
    }

    .articles {
        display: grid;
        grid-template-columns: 1fr;
        gap: 25px;
        margin: 0 16px;
    }

    .news h2,
    .news h3 {
        color: black;
        text-transform: uppercase;
        transition: all .2s ease-in;
    }

    .news a:hover h3 {
        color: #dc1f18;
    }

    .news h2 {
        margin: 0 0 35px;
        font-size: 25px;
        letter-spacing: 1px;
        font-weight: 400;
        text-align: center;
    }

    .news h3 {
        font-size: 16px;
        letter-spacing: 0.8px;
        font-weight: 500;
        margin: 30px 0 0;
        line-height: 17.5px;
    }

    .news p {
        font-size: 16px;
        font-weight: 400;
    }

    .news .date {
        margin: 0 0 10px;
    }

    .news .content {
        font-size: 18px;
        margin: 0;
        overflow: hidden;
        white-space: pre-wrap;
        text-overflow: ellipsis;

        display: flex;
        flex-direction: column;
        line-height: 30px;
        max-height: 90px;
    }

    @supports (-webkit-line-clamp: 3) {
        .news .content {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            line-clamp: 3;
            box-orient: vertical;
        }
    }

    .news .btn-more {
        display: flex;
        margin: 25px auto 0;
        text-align: center;
        text-transform: uppercase;
        color: white;
    }

    article img {
        transition: all .2s ease-in;
        object-fit: cover;
    }

    .news a:hover img {
        transform: scale(1.03);
    }

    article .img-container {
        display: flex;
        overflow: hidden;
    }

    @media (min-width: 768px) {
        .news {
            margin: 105px 20px 50px;
        }

        .articles {
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin: 0 -5px 65px;
            padding: 0 5px;
        }
    }

    @media (min-width: 1024px) {
        .news h2 {
            font-size: 40px;
        }
    }

    @media (min-width: 1280px) {
        .news a:focus {
            outline: 1px dashed #dc1f18;
            outline-offset: 3px;
            box-shadow: none;
        }
    }
</style>
