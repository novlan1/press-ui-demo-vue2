
// var REGEXP = getRegExp('^-?\d+(\.\d+)?$');
const REGEXP = /^-?\d+(\.\d+)?$/;

function addUnit(value) {
  if (value == null) {
    return undefined;
  }
  return REGEXP.test(`${value}`) ? `${value}px` : value;
}

module.exports = addUnit;
