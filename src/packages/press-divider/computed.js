const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function rootStyle(data) {
  return style([
    {
      'border-color': data.borderColor,
      color: data.textColor,
      'font-size': addUnit(data.fontSize),
    },
    data.customStyle,
  ]);
}

module.exports = {
  rootStyle,
};
