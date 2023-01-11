const fs = require('fs');
const SIDEBAR_CONFIG_PATH = './docs/.vuepress/sidebar/sidebar.json';
const SIDEBAR_EN_CONFIG_PATH = './docs/.vuepress/sidebar/sidebar-en.json';

function getSidebarConfig(isEn) {
  const path = isEn ? SIDEBAR_EN_CONFIG_PATH : SIDEBAR_CONFIG_PATH;
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

module.exports = {
  title: '',
  description: 'press-ui',
  markdown: {
    // 显示行号
    lineNumbers: false,
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  base: '/press-ui/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      // title: 'VuePress',
      // description: 'Vue 驱动的静态网站生成器',
    },
    '/en/': {
      lang: 'en-US',
      // title: 'VuePress',
      // description: 'Vue-powered Static Site Generator',
    },
  },
  themeConfig: {
    logo: {
      img: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui-full-logo.png',
      // link: 'https://mobile.woa.com/press-ui/',
    },
    subLogo: {
      // img: '',
      // link: ''
    },
    nav: [
      {
        text: '源码地址',
        link: 'https://git.woa.com/pmd-mobile/support/press-ui',
      },

    ],
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
    // mode: 'hash',
    // repo: '', // git 仓库
    // repoLabel: '查看源码', // git 仓库显示文字
    docsDir: 'docs',
    docsBranch: 'master',
    // editLinks: true,
    // editLinkText: '在 GitHub 上编辑此页面！',
    smoothScroll: true, // 开启滚动效果
    sidebarDepth: 0, // 嵌套标题深度
    lastUpdated: '最后更新时间', // 最后更新时间
    locales: {
      '/': {
        selectText: '中文',
        label: '中文',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
      },
      '/en/': {
        selectText: 'English',
        label: 'English',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Check Source',
            link: 'https://git.woa.com/pmd-mobile/support/press-ui',
          },
        ],
        sidebar: [
          {
            title: 'Introduction',
            path: '/en/',
          },
          '/en/quickstart',
          '/en/locale',
          // '/changelog.md',
          // '/questions.md',
          // {
          // 	path: 'https://cn.vuejs.org/v2/style-guide/',
          // 	title: '风格指南',
          // },
          ...getSidebarConfig(true).sidebar,
        ],
      },
    },
    sidebar: [
      {
        title: '介绍',
        path: '/',
      },
      '/quickstart',
      '/locale',
      // '/changelog.md',
      // '/questions.md',
      // {
      // 	path: 'https://cn.vuejs.org/v2/style-guide/',
      // 	title: '风格指南',
      // },
      ...getSidebarConfig().sidebar,
    ],
  },
  plugins: [
    ['vuepress-plugin-code-copy', true],
    require('./plugins/mdstyles'),
  ],
};
