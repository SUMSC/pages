module.exports = {
    // 主题配置，使用的主题是 https://github.com/recoluan/vuepress-theme-reco
    theme: "reco",
    // 这里是网站全局配置
    title: "SUMSC",
    description: "这里是苏州大学微软学生俱乐部，在这里，你可以看到关于我们的信息以及我们最近的动态。",
    themeConfig: {
        author: 'SUMSC',
        nav: [{
                text: "技术博客",
                link: "/blog/",
                icon: "reco-date"
            },
            {
                text: "魔盒挑战",
                items: [{
                        text: "第二期",
                        link: "/pandora/2/"
                    },
                    {
                        text: "第一期",
                        link: "/pandora/1/"
                    }
                ],
                icon: "reco-account"
            },
            {
                text: "关于我们",
                link: "/about",
                icon: "reco-message",
            },
            {
                text: "Github",
                link: "https://github.com/SUMSC",
                icon: "reco-github"
            },
        ],
        record: '苏ICP备17074773号-1',
        startYear: '2017',
    },
    head: [
        // 移动端优化
        ['meta', {
            name: 'viewport', 
            content: 'width=device-width,initial-scale=1,user-scalable=no' 
        }],
        ['link', { rel: 'favicon', type: "image/x-icon", href: `./favicon.ico` }]
    ],
    // 这里是 Vuepress 开发配置
    port: 8080,
    serviceWorker: true,
    configureWebpack: {
        resolve: {
            alias: {}
        }
    }
};