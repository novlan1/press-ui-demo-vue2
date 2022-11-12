module.exports = {
  defaultSeverity: 'error',
  extends: ['@tencent/stylelint-config-tencent'],
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    // 'declaration-no-important': null,
    // 'value-no-vendor-prefix': null,
    // 'property-no-vendor-prefix': null,
    // 'selector-no-vendor-prefix': null,
    // 'at-rule-no-vendor-prefix': null,
    // 'selector-max-id': 1,
  },
};