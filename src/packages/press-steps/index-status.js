
function get(index, active) {
  if (index < active) {
    return 'finish';
  }
  if (index === active) {
    return 'process';
  }

  return 'inactive';
}

module.exports = get;
