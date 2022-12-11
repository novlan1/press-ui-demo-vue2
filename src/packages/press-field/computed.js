const style = require('../wxs-js/style');
const addUnit = require('../wxs-js/add-unit');

function inputStyle(autosize) {
  if (autosize && autosize.constructor === 'Object') {
    return style({
      'min-height': addUnit(autosize.minHeight),
      'max-height': addUnit(autosize.maxHeight),
    });
  }

  return '';
}

module.exports = {
  inputStyle,
};
