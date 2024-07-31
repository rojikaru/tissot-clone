export default class Watch {
    // declare id: string;
    declare name: string;
    // declare price: number;
    declare description: string;
    declare image: string;
    declare link: string;
    // declare rating: number;
    // declare category: string;
    // declare countInStock: number;

    constructor(
        name: string,
        description: string,
        image: string,
        link: string
    ) {
        // this.id = id;
        this.name = name;
        // this.price = price;
        this.description = description;
        this.image = image;
        this.link = link;
        // this.rating = rating;
        // this.category = category;
        // this.countInStock = countInStock;
    }
}

export const male_watches: Watch[] = [
    new Watch(
        'Tissot PR 100 Chronograph',
        'Quartz',
        '/images/watch/tissot-pr-100-chronograph.avif',
        "#top"
    ),
    new Watch(
        'Tissot Seastar 1000 Powermatic 80 40MM',
        'Automatic',
        '/images/watch/tissot-seastar-1000.webp',
        "#top"
    ),
    new Watch(
        'Tissot PR 100',
        'Quartz',
        '/images/watch/tissot-pr-100.avif',
        "#top"
    ),
    new Watch(
        'Tissot PRX Powermatic 80',
        'Automatic',
        '/images/watch/tissot-prx-powermatic-80.avif',
        "#top"
    ),
]

export const female_watches: Watch[] = [
    new Watch(
        'Tissot PRX Powermatic 80 35MM',
        'Automatic',
        '/images/watch/tissot-prx-powermatic-80-35mm.avif',
        "#top"
    ),
    new Watch(
        'Tissot Seastar 1000 Powermatic 80 40MM',
        'Automatic',
        '/images/watch/tissot-seastar-1000-gold.avif',
        "#top"
    ),
    new Watch(
        'Tissot T-Touch Connect Sport',
        'Quartz',
        '/images/watch/tissot-t-touch-connect-sport.avif',
        "#top"
    ),
    new Watch(
        'Tissot PR 100 34MM',
        'Quartz',
        '/images/watch/tissot-pr-100-34mm.avif',
        "#top"
    ),
]

export const new_watches: Watch[] = [
    new Watch(
        'Tissot Heritage 1938 Automatic Cosc',
        'Automatic',
        '/images/watch/heritage-1938-cosc.avif',
        "#top"
    ),
    new Watch(
        'Tissot Seastar Wilson WNBA',
        'Quartz',
        '/images/watch/seastar-wilson-wnba-white.avif',
        "#top"
    ),
    new Watch(
        'Tissot Seastar Wilson WNBA',
        'Automatic',
        '/images/watch/seastar-wilson-wnba-orange.avif',
        "#top"
    ),
    new Watch(
        'Tissot T-My Lady Automatic',
        'Automatic',
        '/images/watch/t-my-lady-auto-sky-blue.avif',
        "#top"
    ),
    new Watch(
        'Tissot T-My Lady Automatic',
        'Automatic',
        '/images/watch/t-my-lady-auto-teal.avif',
        "#top"
    ),
    new Watch(
        'Tissot T-Race MotoGP™ Chronograph 2024 Limited Edition',
        'Quartz',
        '/images/watch/t-race-motogp-chronograph-2024-ltd.avif',
        "#top"
    ),
    new Watch(
        'Tissot T-Race MotoGP™ Automatic Chronograph 2024 Limited Edition',
        'Automatic',
        '/images/watch/t-race-motogp-auto-chronograph-2024-ltd.webp',
        "#top"
    ),
    new Watch(
        'Tissot Pr 100 Vuelta',
        'Quartz',
        '/images/watch/pr-100-vuelta.png',
        "#top"
    ),
    new Watch(
        'Tissot Pr 100 Tour De France',
        'Quartz',
        '/images/watch/pr-100-tour-de-france.avif',
        "#top"
    ),
    new Watch(
        'Tissot Pr 100 Chronograph',
        'Quartz',
        '/images/watch/pr-100-chronograph-sky-blue.avif',
        "#top"
    ),
    new Watch(
        'Tissot Pr 100 Chronograph',
        'Quartz',
        '/images/watch/pr-100-chronograph-green.avif',
        "#top"
    ),
    new Watch(
        'Tissot Pr 100 Chronograph',
        'Quartz',
        '/images/watch/pr-100-chronograph-blue.avif',
        "#top"
    ),
]
