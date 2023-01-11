import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function rootStyle(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'margin-right': addUnit(-data.gutter / 2),
    'margin-left': addUnit(-data.gutter / 2),
  });
}

export default {
  rootStyle,
};
