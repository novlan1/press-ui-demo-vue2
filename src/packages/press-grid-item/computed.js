import style from '../wxs-js/style';
import addUnit from '../wxs-js/add-unit';

function wrapperStyle(data) {
  const width = `${100 / data.columnNum}%`;

  return style({
    width,
    'padding-top': data.square ? width : null,
    'padding-right': addUnit(data.gutter),
    'margin-top':
      data.index >= data.columnNum && !data.square
        ? addUnit(data.gutter)
        : null,
  });
}

function contentStyle(data) {
  return data.square
    ? style({
      right: addUnit(data.gutter),
      bottom: addUnit(data.gutter),
      height: 'auto',
      position: 'absolute',
    })
    : '';
}

export default {
  wrapperStyle,
  contentStyle,
};
