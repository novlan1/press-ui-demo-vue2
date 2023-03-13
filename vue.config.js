const path = require('path');
const { RemToRpxPlugin } = require('uni-plugin-light/lib/plugin');

const plugins = [];

if (process.env.VUE_APP_PLATFORM !== 'h5') {
  plugins.push(new RemToRpxPlugin());
}

process.env.UNI_OUTPUT_DIR = path.resolve(process.env.UNI_OUTPUT_DIR, process.env.VUE_APP_PROJECT);
console.log('[process.env.UNI_OUTPUT_DIR]', process.env.UNI_OUTPUT_DIR);
console.log('[process.env.UNI_INPUT_DIR]', process.env.UNI_INPUT_DIR);


module.exports = {
  configureWebpack: {
    devServer: {
      port: 9999,
    },
    resolve: {
      alias: {
        packages: path.resolve(__dirname, './packages'),
        // src: path.resolve(__dirname, './src'),
      },
    },
    plugins,
  },

};
