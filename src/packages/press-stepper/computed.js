import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function buttonStyle(data) {
  return style({
    width: addUnit(data.buttonSize),
    height: addUnit(data.buttonSize),
  });
}

function inputStyle(data) {
  return style({
    width: addUnit(data.inputWidth),
    height: addUnit(data.buttonSize),
  });
}

export default {
  buttonStyle,
  inputStyle,
};
