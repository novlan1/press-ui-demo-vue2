import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

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

export default {
  iconStyle,
};
