import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

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

export default {
  rootStyle,
  notifyStyle,
};
