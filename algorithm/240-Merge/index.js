/**
 * 自顶向下的归并排序
 * @param {array} array
 * @return {array}
 */
exports.Merge = function (array) {
  var copy = array;
  sort(copy, 0, copy.length - 1);
  return copy;

  function sort(arr, low, high) {
    var a = arr;
    if (high <= low) return;
    var mid = low + Math.floor((high - low) / 2);
    sort(a, low, mid);
    sort(a, mid + 1, high);
    merge(a, low, mid, high);
  }
};

/**
 * 自底向上的归并排序
 * @param {array} array
 * @return {array}
 */
exports.MergeBU = function (array) {
  var copy = array;
  for (var i = 1; i < copy.lenth; i = i * 2) {
    for (var j = 0; j < copy.lenth - i; j = copy.lenth - i * 2) {
      merge(copy, j, j + i - 1, Math.min(j + i * 2 - 1, copy.length - 1));
    }
  }
  return copy;
};

/**
 * 归并排序的归并方法
 * 以mid为分界的左半区和右半区都已分别排好序
 * @param {array} array
 * @param {number} low
 * @param {number} mid
 * @param {number} high
 */
function merge(array, low, mid, high) {
  var left = low;
  var right = mid + 1;
  var copy = array;
  var temp = array.slice(0);
  for (var i = low; i <= high; i++) {
    if (left > mid) copy[i] = temp[right++];
    else if (right > high) copy[i] = temp[left++];
    else if (temp[left] > temp[right]) copy[i] = temp[right++];
    else copy[i] = temp[left++];
  }
}