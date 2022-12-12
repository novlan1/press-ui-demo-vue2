const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function buttonStyle(data) {
  return style({
    width: addUnit(data.buttonSize),
    height: addUnit(data.buttonSize),
  });
}

function inputStyle(data) {
  return style({
    width: addUnit(data.inputWidth),
    height: addUnit(data.buttonSize),
  });
}

module.exports = {
  buttonStyle,
  inputStyle,
};
