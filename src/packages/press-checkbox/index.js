const style = require('../wxs-js/style.js');
const addUnit = require('../wxs-js/add-unit.js');

function iconStyle(checkedColor, value, disabled, parentDisabled, iconSize) {
  const styles = {
    'font-size': addUnit(iconSize),
  };

  if (checkedColor && value && !disabled && !parentDisabled) {
    styles['border-color'] = checkedColor;
    styles['background-color'] = checkedColor;
  }

  return style(styles);
}

module.exports = {
  iconStyle,
};
