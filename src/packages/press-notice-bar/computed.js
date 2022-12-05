const style = require('../wxs-js/style');
// const addUnit = require('../wxs-js/add-unit');

function rootStyle(data) {
  return style({
    color: data.color,
    'background-color': data.backgroundColor,
    background: data.background,
  });
}

module.exports = {
  rootStyle,
};
