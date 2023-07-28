const properties = {
    cardContainer: {
        isChildOf:'card',
        orderRender: 0,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'card__container'],

    },
    cardControls: {
        isChildOf:'cardContainer',
        orderRender: 1,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'card__controls'],

    },
    cardContent: {
        isChildOf:'cardContainer',
        orderRender: 2,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'card__content'],

    },

    buttonTrash: {
        isChildOf:'cardControls',
        orderRender:3,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'trash'],

    },
    buttonFav: {
        isChildOf:'cardControls',
        orderRender:4,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'fav'],

    },
    buttonDown: {
        isChildOf:'cardControls',
        orderRender:5,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'down'],

    },
    buttonMax: {
        isChildOf:'cardControls',
        orderRender:6,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'max'],

    },

    cardImage: {
        isChildOf:'cardContent',
        orderRender:7,
        componentType: 'figure',
        attributes:[],
        classList: ['card', 'image'],

    },
    sectionInfo: {
        isChildOf:'cardContent',
        orderRender:8,
        componentType: 'section',
        attributes:[],
        classList: ['card', 'info'],

    },
    userInfo: {
        isChildOf:'sectionInfo',
        orderRender:9,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'user'],

    },
    titleInfo: {
        isChildOf:'sectionInfo',
        orderRender:10,
        componentType: 'div',
        attributes:[],
        classList: ['card', 'title']

    },
}

console.log(JSON.stringify(properties));