import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function rootStyle(data) {
  return style([
    {
      'border-color': data.borderColor,
      color: data.textColor,
      'font-size': addUnit(data.fontSize),
    },
    data.customStyle,
  ]);
}

export default {
  rootStyle,
};
