/**
 * 交换数组中的两个下标对应的值
 * @param {array} array
 * @param {number} i
 * @param {number} j
 */
exports.exch = function (array, i, j) {
  var arr = array;
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
