const style = require('../wxs-js/style.js');
const addUnit = require('../wxs-js/add-unit.js');

function titleStyle(data) {
  return style([
    {
      'max-width': addUnit(data.titleWidth),
      'min-width': addUnit(data.titleWidth),
    },
    data.titleStyle,
  ]);
}

module.exports = {
  titleStyle,
};
