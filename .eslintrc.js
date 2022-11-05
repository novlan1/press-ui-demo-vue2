module.exports = {
  root: true,
  extends: ['eslint-config-light'],
  globals: {
    getCurrentPages: true,
  },
  settings: {
    'import/resolver': {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
      alias: {
        // src: './src',
        map: [
          // 这里参照webpack的别名配置映射
          ['src', './src'],
          ['packages', './packages'],
        ],
        // 告诉resolver-alias有哪些后缀的文件要解析
      },
    },
    'import/ignore': ['node_modules'],
  },
};


