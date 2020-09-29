
exports.min = function min (array) {
  return arguments[0] !== undefined && array.length ? array.reduce((min, item) => min < item ? min : item) : 0;
}

exports.max = function max (array) {
  return arguments[0] !== undefined && array.length ? array.reduce((max, item) => max > item ? max : item) : 0;
}

exports.avg = function avg (array) {
  return arguments[0] !== undefined && array.length ? array.reduce((sum, item) => sum + item, 0) / array.length : 0;
}
