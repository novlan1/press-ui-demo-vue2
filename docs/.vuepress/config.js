const fs = require('fs');
const SIDEBAR_CONFIG_PATH = './docs/.vuepress/plugins/config/sidebar.json';

function getSidebarConfig() {
  const data = fs.readFileSync(SIDEBAR_CONFIG_PATH);
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
  themeConfig: {
    logo: {
      img: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui.png',
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
    sidebar: [
      '/',
      '/quickstart',
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
