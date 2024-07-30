export default class Watch {
    // declare id: string;
    declare name: string;
    // declare price: number;
    declare description: string;
    declare image: string;
    // declare rating: number;
    // declare category: string;
    // declare countInStock: number;

    constructor(name: string,
        description: string,
        image: string) {
        // this.id = id;
        this.name = name;
        // this.price = price;
        this.description = description;
        this.image = image;
        // this.rating = rating;
        // this.category = category;
        // this.countInStock = countInStock;
    }
}

export const male_watches: Watch[] = [
    new Watch(
        'Tissot PR 100 Chronograph',
        'Quartz',
        '/src/assets/images/tissot-pr-100-chronograph.avif'
    ),
    new Watch(
        'Tissot Seastar 1000 Powermatic 80 40MM',
        'Automatic',
        '/src/assets/images/tissot-seastar-1000.webp'
    ),
    new Watch(
        'Tissot PR 100',
        'Quartz',
        '/src/assets/images/tissot-pr-100.avif'
    ),
    new Watch(
        'Tissot PRX Powermatic 80',
        'Automatic',
        '/src/assets/images/tissot-prx-powermatic-80.avif'
    ),
]

export const female_watches: Watch[] = [
    new Watch(
        'Tissot PRX Powermatic 80 35MM',
        'Automatic',
        '/src/assets/images/tissot-prx-powermatic-80-35mm.avif'
    ),
    new Watch(
        'Tissot Seastar 1000 Powermatic 80 40MM',
        'Automatic',
        '/src/assets/images/tissot-seastar-1000-gold.avif'
    ),
    new Watch(
        'Tissot T-Touch Connect Sport',
        'Quartz',
        '/src/assets/images/tissot-t-touch-connect-sport.avif'
    ),
    new Watch(
        'Tissot PR 100 34MM',
        'Quartz',
        '/src/assets/images/tissot-pr-100-34mm.avif'
    ),
]