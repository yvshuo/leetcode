var util = require('../../util');

/**
 * 算法2.2：插入排序
 * @param {number[] | string[]} array
 * @return {number[] | string[]}
 */
exports.insersion = function (array) {
  var copy = array.slice(0);
  for (var i = 0; i < copy.length; i++) {
    for (var j = i; j > 0 && copy[j] < copy[j - 1]; j--) {
      util.exch(copy, j - 1, j);
    }
  }
  return copy;
};