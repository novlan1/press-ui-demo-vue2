// const REGEXP = getRegExp('{|}|"', 'g');
const REGEXP = /{|}|"/g;

function keys(obj) {
  return JSON.stringify(obj)
    .replace(REGEXP, '')
    .split(',')
    .map(item => item.split(':')[0]);
}

module.exports.keys = keys;
