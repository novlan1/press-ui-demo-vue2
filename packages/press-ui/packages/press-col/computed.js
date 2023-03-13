import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function rootStyle(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'padding-right': addUnit(data.gutter / 2),
    'padding-left': addUnit(data.gutter / 2),
  });
}

export default {
  rootStyle,
};
