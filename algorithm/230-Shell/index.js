var util = require('../../util');

/**
 * 算法2.3：希尔排序
 * @param {number[] | string[]} array
 * @return {number[] | string[]}
 */
exports.shell = function (array) {
  var copy = array.slice(0);
  var h = 1;
  while (h < Math.floor(copy.length / 3)) h = 3 * h + 1;
  while (h >= 1) {
    for (var i = h; i < copy.length; i++) {
      for (var j = i; j >= h && copy[j] < copy[j - h]; j -= h) {
        util.exch(copy, j - h, j);
      }
    }
    h = Math.floor(h / 3);
  }
  return copy;
};