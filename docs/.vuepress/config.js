module.exports = {
  // 这里是网站全局配置
  title: 'SUMSC',
  description: '这里是苏州大学微软学生俱乐部，在这里，你可以看到关于我们的信息以及我们最近的动态。',
  themeConfig: {
    nav: [
      {
        text: '技术博客',
        link: '/blog/'
      },
      {
        text: '魔盒挑战',
        items: [
          { text: '第二期', link: '/pandora/1/' },
          { text: '第一期', link: '/pandora/2/' }
        ]
      },
      {
        text: '团队',
        link: '/about'
      },
      {
        text: 'Github',
        link: 'https://github.com/SUMSC'
      }
    ]
  },

  // 这里是 Vuepress 开发配置
  port: 8080,
  serviceWorker: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@icon': 'static/icon/',
        '@css': 'static/css/',
        '@js': 'static/js/'
      }
    }
  },
}