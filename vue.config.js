const path = require('path');

module.exports = {
  configureWebpack: {
    // devServer: {
    //   port: 9999,
    //   // 防止报错：Invalid Host header
    //   disableHostCheck: true,
    // },
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        // 'press-ui': path.resolve(__dirname, './src/packages/'),
      },
    },
    // plugins,
  },
  transpileDependencies: ['press-ui', '@zebra-ui/swiper'],
};
