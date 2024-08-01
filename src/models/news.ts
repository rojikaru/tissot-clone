export default class News {
    // declare id: number;
    declare title: string;
    declare content: string;
    declare url: string;
    declare image: string;
    declare publishedAt: Date;

    constructor(
        // id: number,
        title: string,
        content: string,
        url: string,
        image: string,
        publishedAt: Date
    ) {
        // this.id = id;
        this.title = title
        this.content = content
        this.url = url;
        this.image = image;
        this.publishedAt = publishedAt;
    }

    get publishedAtFormatted(): string {
        return this.publishedAt.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
        });
    }
}

export const newsList: News[] = [
    new News(
        // 1,
        "The NBA Paris Games 2025, presented by Tissot, will be held from 23 to 25 January",
        "January 23 and 25, 2025 will mark the first time that two regular-season matches will be held in the French capital during the same season.",
        "#top",
        "/images/news/Tissot_PG_1.webp",
        new Date('5/17/24')
    ),
    new News(
        // 2,
        "The Return of the Chemin des Tourelles: A Transparent Vision of Time",
        "The Chemin des Tourelles Skeleton series keeps its traditional design, while offering a window into the watch that invites wearers to observe the precise detailing into the heart of the timekeeper.",
        "#top",
        "/images/news/BlueProduct.webp",
        new Date('6/14/24')
    ),
    new News(
        // 3,
        "PR100 Tour de France & La Vuelta a España Special Edition",
        "Tissot launches two new additions to their sport special edition lineup: the PR100 Tour de France and the PR100 La Vuelta a España",
        "#top",
        "/images/news/Lifestyle.avif",
        new Date('6/25/24')
    ),
    new News(
        // 4,
        "Timekeeping, an art mastered by Tissot through decades of expertise",
        "For Tissot, timekeeping is an incredible commitment, provided by an experienced team of professionals who simply love the sport of cycling. Triumphs, setbacks, and unexpected twists are part of every race, of every competition. Timekeeping sets the pace of the tension, emotions and passion.",
        "#top",
        "/images/news/Cycling.avif",
        new Date("7/10/24")
    ),
]