const bem = require('./bem.js');
const { bem2 } = require('./bem');
const memoize = require('./memoize.js');
const addUnit = require('./add-unit.js');

module.exports = {
  bem: memoize(bem),
  memoize,
  addUnit,
  bem2,
};
