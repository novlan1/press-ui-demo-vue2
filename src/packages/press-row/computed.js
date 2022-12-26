const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function rootStyle(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'margin-right': addUnit(-data.gutter / 2),
    'margin-left': addUnit(-data.gutter / 2),
  });
}

module.exports = {
  rootStyle,
};
