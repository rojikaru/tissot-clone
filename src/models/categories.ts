export default class Category {
    // declare id: string;
    declare name: string;
    declare image: string;
    declare link: string;

    constructor(name: string,
        image: string,
        link: string) {
        // this.id = id;
        this.name = name;
        this.image = image;
        this.link = link;
    }
}

export const categories: Category[] = [
    new Category(
        'Classic',
        '/images/categories/classic.webp',
        '#top'
    ),
    new Category(
        'Sport',
        '/images/categories/sport.avif',
        '#top'
    ),
    new Category(
        'Heritage',
        '/images/categories/heritage.webp',
        '#top'
    ),
    new Category(
        'Touch',
        '/images/categories/touch.webp',
        '#top'
    ),
    new Category(
        'Pocket',
        '/images/categories/pocket.avif',
        '#top'
    ),
    new Category(
        'Gold',
        '/images/categories/gold.avif',
        '#top'
    ),
]