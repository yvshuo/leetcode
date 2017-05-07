var util = require('../../util');

/**
 * 算法2.1：选择排序
 * @param {number[] | string[]} array
 * @return {number[] | string[]}
 */
exports.selection = function (array) {
  var copy = array.slice(0);
  for (var i = 0; i < copy.length; i++) {
    var min = i;
    for (var j = i + 1; j < copy.length; j++) {
      if (copy[j] < copy[min]) min = j;
    }
    util.exch(copy, i, min);
  }
  return copy;
};