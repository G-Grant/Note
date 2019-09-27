module.exports = {
    base: '/Note/',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
        ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
    ],
    themeConfig: {
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        sidebar: 'auto',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/G-Grant'
            }
        ]
    },
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '博客',
            description: '不积跬步，无以至千里；不积小流，无以成江海。'
        }
    },
    plugins: [['@vuepress/active-header-links'], ['@vuepress/back-to-top', true]]
};
