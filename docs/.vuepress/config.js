module.exports = {
    title: 'Hello Suppa',
    description: 'Just playing around',
    base: '/',
    themeConfig: {
        searchPlaceholder: 'Search kkkuuuuu...',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
            '/',
            '/guide/',
        ],
         // default value is true. Set it to false to hide next page links on all pages
    nextLinks: false,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: false,
    smoothScroll: false
    }
}