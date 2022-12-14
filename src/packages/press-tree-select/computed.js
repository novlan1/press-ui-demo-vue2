const array = require('../wxs-js/array');

function isActive(activeList, itemId) {
  if (array.isArray(activeList)) {
    return activeList.indexOf(itemId) > -1;
  }

  return activeList === itemId;
}

module.exports.isActive = isActive;
