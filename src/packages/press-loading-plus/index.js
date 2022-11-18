const style = require('../wxs-js/style.js');
const addUnit = require('../wxs-js/add-unit.js');

function spinnerStyle(data) {
  return style({
    color: data.color,
    width: addUnit(data.size),
    height: addUnit(data.size),
  });
}

function textStyle(data) {
  return style({
    'font-size': addUnit(data.textSize),
  });
}

module.exports = {
  spinnerStyle,
  textStyle,
};
