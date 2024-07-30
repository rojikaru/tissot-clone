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
        '/src/assets/images/watch/tissot-pr-100-chronograph.avif',
        "#top"
    ),
    new Watch(
        'Tissot Seastar 1000 Powermatic 80 40MM',
        'Automatic',
        '/src/assets/images/watch/tissot-seastar-1000.webp',
        "#top"
    ),
    new Watch(
        'Tissot PR 100',
        'Quartz',
        '/src/assets/images/watch/tissot-pr-100.avif',
        "#top"
    ),
    new Watch(
        'Tissot PRX Powermatic 80',
        'Automatic',
        '/src/assets/images/watch/tissot-prx-powermatic-80.avif',
        "#top"
    ),
]

export const female_watches: Watch[] = [
    new Watch(
        'Tissot PRX Powermatic 80 35MM',
        'Automatic',
        '/src/assets/images/watch/tissot-prx-powermatic-80-35mm.avif',
        "#top"
    ),
    new Watch(
        'Tissot Seastar 1000 Powermatic 80 40MM',
        'Automatic',
        '/src/assets/images/watch/tissot-seastar-1000-gold.avif',
        "#top"
    ),
    new Watch(
        'Tissot T-Touch Connect Sport',
        'Quartz',
        '/src/assets/images/watch/tissot-t-touch-connect-sport.avif',
        "#top"
    ),
    new Watch(
        'Tissot PR 100 34MM',
        'Quartz',
        '/src/assets/images/watch/tissot-pr-100-34mm.avif',
        "#top"
    ),
]

export const new_watches: Watch[] = [
]
