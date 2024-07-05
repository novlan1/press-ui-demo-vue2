const path = require('path');
const {
  RemToRpxPlugin,
  GenVersionMpPlugin,
  GenVersionWebPlugin,
  DispatchVuePlugin,
  DispatchScriptPlugin,
  FixNpmPackagePlugin,
} = require('plugin-light/lib/plugin');
const { BUILD_NAME_MAP } = require('t-comm/lib/v-console/config');


const plugins = [];

if (process.env.UNI_PLATFORM !== 'h5') {
  plugins.push(new GenVersionMpPlugin());
  plugins.push(new RemToRpxPlugin({}));

  if (process.env.NODE_ENV === 'production') {
    plugins.push(new DispatchVuePlugin({
      insertRequireVendor: true,
      moveComponents: {
        disableList: ['@zebra-ui'],
      },
    }));
    plugins.push(new DispatchScriptPlugin({
      addCommonVendorRequire: true,
      whiteList: [],
    }));
    plugins.push(new FixNpmPackagePlugin());
  }
} else {
  plugins.push(new GenVersionWebPlugin({
    buildName: BUILD_NAME_MAP.build,
    commitName: BUILD_NAME_MAP.commit,
    delay: 1,
  }));
}


module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    plugins,
  },
  transpileDependencies: ['press-ui', '@zebra-ui/swiper'],
};
