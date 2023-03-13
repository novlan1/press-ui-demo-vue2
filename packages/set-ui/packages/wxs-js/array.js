function isArray(array) {
  return array && (array.constructor === 'Array' || (typeof Array !== 'undefined' && Array.isArray(array)));
}

export default { isArray };
