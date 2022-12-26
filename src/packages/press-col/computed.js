const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function rootStyle(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'padding-right': addUnit(data.gutter / 2),
    'padding-left': addUnit(data.gutter / 2),
  });
}

module.exports = {
  rootStyle,
};
