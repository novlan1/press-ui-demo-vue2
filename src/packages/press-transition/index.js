const style = require('../wxs-js/style.js');

function rootStyle(data) {
  console.log('display', data.display);
  return style([
    {
      '-webkit-transition-duration': `${data.currentDuration}ms`,
      'transition-duration': `${data.currentDuration}ms`,
    },
    data.display ? null : 'display: none',
    data.customStyle,
  ]);
}

module.exports = {
  rootStyle,
};
