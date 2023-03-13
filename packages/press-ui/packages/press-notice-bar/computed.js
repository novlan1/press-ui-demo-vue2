import style from '../wxs-js/style';

function rootStyle(data) {
  return style({
    color: data.color,
    'background-color': data.backgroundColor,
    background: data.background,
  });
}

export default {
  rootStyle,
};
