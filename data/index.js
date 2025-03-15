const commonData = {
    navigation: [
        {url: '/index.html', label: 'Inicio'},
        {url: '/galeria.html', label: 'Galería'},
        {url: '/noticias.html', label: 'Noticias'},
        {url: '/contactus.html', label: 'Acerca de FFL'}
    ]
};

export const getPageContext = (pagePath) => {
    let pageData = {}; // Define la variable pageData

    switch (pagePath) {
        case '/index.html':
            break;
        case '/contactus.html':
            break;
        default:
            break;
    }

    return {
        ...commonData,
        ...pageData
    };
};
