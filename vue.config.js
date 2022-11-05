const RemToRpxPlugin = require('./plugin/rem-to-rpx-plugin');
const plugins = [];
console.log('process.env.VUE_APP_PLATFORM', process.env.VUE_APP_PLATFORM);
if (process.env.VUE_APP_PLATFORM !== 'h5') {
  plugins.push(new RemToRpxPlugin());
}

module.exports = {
  configureWebpack: {
    resolve: {
      // alias: {
      //   // 添加游戏人生alias
      //   ...getAllAppNameAlias(),
      // },
    },
    plugins,
    // module: {
    //   rules: [
    //     {
    //       test: /\.(css)$/,
    //       use: ['./loader/css-url-loader.js'],
    //     },
    //   ],
    // },
    // watchOptions: {
    //   ignored: [/node_modules/],
    // },
  },

};
