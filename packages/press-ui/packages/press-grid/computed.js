import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function rootStyle(data) {
  return style({
    'padding-left': addUnit(data.gutter),
  });
}

export default {
  rootStyle,
};
