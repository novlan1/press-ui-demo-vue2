const style = require('../wxs-js/style.js');
const addUnit = require('../wxs-js/add-unit.js');

function wrapStyle(data) {
  return style({
    transform: data.transform
      ? `translate3d(0, ${data.transform}px, 0)`
      : '',
    top: data.fixed ? addUnit(data.offsetTop) : '',
    'z-index': data.zIndex,
  });
}

function containerStyle(data) {
  return style({
    height: data.fixed ? addUnit(data.height) : '',
    'z-index': data.zIndex,
  });
}

module.exports = {
  wrapStyle,
  containerStyle,
};
