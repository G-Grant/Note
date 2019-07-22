module.exports = {
    themeConfig: {
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: 'Github',
            link: 'https://github.com/G-Grant/Note'
        }]
    },
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '博客',
            description: '不积跬步，无以至千里；不积小流，无以成江海。',
        }
    }
}