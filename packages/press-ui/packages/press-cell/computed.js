import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function titleStyle(data) {
  return style([
    {
      'max-width': addUnit(data.titleWidth),
      'min-width': addUnit(data.titleWidth),
    },
    data.titleStyle,
  ]);
}

export default {
  titleStyle,
};
