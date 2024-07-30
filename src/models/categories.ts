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
        '/src/assets/images/categories/classic.webp',
        '#top'
    ),
    new Category(
        'Sport',
        '/src/assets/images/categories/sport.avif',
        '#top'
    ),
    new Category(
        'Heritage',
        '/src/assets/images/categories/heritage.webp',
        '#top'
    ),
    new Category(
        'Touch',
        '/src/assets/images/categories/touch.webp',
        '#top'
    ),
    new Category(
        'Pocket',
        '/src/assets/images/categories/pocket.avif',
        '#top'
    ),
    new Category(
        'Gold',
        '/src/assets/images/categories/gold.avif',
        '#top'
    ),
]