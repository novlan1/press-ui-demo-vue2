const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function rootStyle(data) {
  return style({
    'padding-left': addUnit(data.gutter),
  });
}

module.exports = {
  rootStyle,
};
