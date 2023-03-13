const REGEXP = /{|}|"/g;

function keys(obj) {
  return JSON.stringify(obj)
    .replace(REGEXP, '')
    .split(',')
    .map(item => item.split(':')[0]);
}

export default { keys };
