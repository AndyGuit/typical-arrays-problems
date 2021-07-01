
exports.min = function min(array) {
  if (arguments.length === 0 || array.length === 0) { return 0; }
  const result = array.sort((a, b) => a - b);
  return result[0];
}

exports.max = function max(array) {
  if (arguments.length === 0 || array.length === 0) { return 0; }
  const result = array.sort((a, b) => a - b);
  return result[result.length - 1];
}

exports.avg = function avg(array) {
  if (arguments.length === 0 || array.length === 0) { return 0; }
  return (array.reduce((sum, current) => sum + current, 0)) / array.length;
}
