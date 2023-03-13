import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function rootStyle(data) {
  const currentColor = data.checked === data.activeValue ? data.activeColor : data.inactiveColor;

  return style({
    'font-size': addUnit(data.size),
    'background-color': currentColor,
  });
}

const BLUE = '#1989fa';
const GRAY_DARK = '#969799';

function loadingColor(data) {
  return data.checked === data.activeValue
    ? data.activeColor || BLUE
    : data.inactiveColor || GRAY_DARK;
}

export default {
  rootStyle,
  loadingColor,
};
