const bem = require('./bem.js');
const memoize = require('./memoize.js');
const addUnit = require('./add-unit.js');

module.exports = {
  bem: memoize(bem),
  memoize,
  addUnit,
};
