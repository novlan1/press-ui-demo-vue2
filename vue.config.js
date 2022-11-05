const path = require('path');
const RemToRpxPlugin = require('./plugin/rem-to-rpx-plugin');
const {
  TransferLocalFilePlugin,
} = require('@tencent/uni-plugin-light/lib/plugin');


const plugins = [];

if (process.env.VUE_APP_PLATFORM !== 'h5') {
  plugins.push(new RemToRpxPlugin());
  plugins.push(new TransferLocalFilePlugin({
    adapterDirs: ['packages'],
    isModifyRef: true,
  }));
}


module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 添加游戏人生alias
        packages: path.resolve(__dirname, './packages'),
        // ...getAllAppNameAlias(),
      },
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
