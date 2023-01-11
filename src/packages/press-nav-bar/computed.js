import style from '../wxs-js/style';

function barStyle(data) {
  return style({
    'z-index': data.zIndex,
    'padding-top': data.safeAreaInsetTop ? `${data.statusBarHeight}px` : 0,
  });
}

export default {
  barStyle,
};
