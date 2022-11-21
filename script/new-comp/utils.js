
const COMP_PREFIX = 'press-';

function getFullCompName(name) {
  if (!name.startsWith(COMP_PREFIX)) {
    return `${COMP_PREFIX}${name}`;
  }
  return name;
}

function getPureCompName(name) {
  return name.replace(new RegExp(`^${COMP_PREFIX}`), '');
}


module.exports = {
  getFullCompName,
  getPureCompName,
};
