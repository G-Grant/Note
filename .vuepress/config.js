module.exports = {
    themeConfig: {
        searchMaxSuggestions: 10,
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: 'Github',
            link: 'https://github.com/G-Grant/Note'
        }],
        sidebar: [{
            title: 'React',
            collapsable: true,
            children: [
                '/articles/React/20190625.md'
            ]
        }, {
            title: 'Webpack',
            collapsable: true,
            children: [
                '/articles/Webpack/20180502.md',
                '/articles/Webpack/20190719.md',
                '/articles/Webpack/20190721.md'
            ]
        }, {
            title: 'Flutter',
            collapsable: true,
            children: [
                '/articles/Flutter/20190217.md'
            ]
        }, {
            title: 'Canvas',
            collapsable: true,
            children: [
                '/articles/Canvas/20181001.md'
            ]
        }, {
            title: '细读 JavaScript',
            collapsable: true,
            children: [
                '/articles/JavaScript/20190318.md',
                '/articles/JavaScript/20190329.md',
                '/articles/JavaScript/29190415.md'
            ]
        }, {
            title: '数据结构与算法分析',
            collapsable: true,
            children: [
                '/articles/algorithm/20190721-1.md',
                '/articles/algorithm/20190721-2.md'
            ]
        }, {
            title: '其他',
            collapsable: true,
            children: [
                '/articles/others/20170702.md',
                '/articles/others/20170730.md',
                '/articles/others/20171111.md',
                '/articles/others/20171112.md',
                '/articles/others/20171118.md',
                '/articles/others/20180404.md',
                '/articles/others/20180712.md',
                '/articles/others/20180725.md',
                '/articles/others/20181231.md',
                '/articles/others/20190120.md',
                '/articles/others/20190331.md'
            ]
        }]
    },
    markdown: {
        lineNumbers: true
    }
}