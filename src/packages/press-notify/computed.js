const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function rootStyle(data) {
  return style({
    'z-index': data.zIndex,
    top: addUnit(data.top),
  });
}

function notifyStyle(data) {
  return style({
    background: data.background,
    color: data.color,
  });
}

module.exports = {
  rootStyle,
  notifyStyle,
};
