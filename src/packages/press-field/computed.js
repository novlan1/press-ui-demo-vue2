import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function inputStyle(autosize) {
  if (autosize && autosize.constructor === 'Object') {
    return style({
      'min-height': addUnit(autosize.minHeight),
      'max-height': addUnit(autosize.maxHeight),
    });
  }

  return '';
}

export default {
  inputStyle,
};
