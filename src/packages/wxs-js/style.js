const object = require('./object.js');
const array = require('./array.js');

function kebabCase(word) {
  const reg = /[A-Z]/g;
  const newWord = word
    .replace(reg, i => `-${i}`)
    .toLowerCase();

  return newWord;
}

function style(styles) {
  if (array.isArray(styles)) {
    return styles
      .filter(item => item != null && item !== '')
      .map(item => style(item))
      .join(';');
  }
  if (typeof styles === 'string') {
    return styles;
  }
  // if ('Object' === styles.constructor) {
  return object
    .keys(styles)
    .filter(key => styles[key] != null && styles[key] !== '')
    .map(key => [kebabCase(key), [styles[key]]].join(':'))
    .join(';');
  // }

  // return styles;
}

module.exports = style;
