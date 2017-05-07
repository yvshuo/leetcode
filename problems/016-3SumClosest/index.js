/**
 * https://leetcode.com/problems/3sum-closest/#/description
 * 
 * Given an array S of n integers, find three integers in S
 * such that the sum is closest to a given number, target.
 * Return the sum of the three integers. You may assume that
 * each input would have exactly one solution.
 * 
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
exports.threeSumClosest = function (nums, target) {
  var copy = nums.slice(0);
  var min = Number.POSITIVE_INFINITY;
  var result = Number.POSITIVE_INFINITY;
  if (copy.length < 3) return result;
  copy.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < copy.length - 2; i++) {
    var low = i + 1;
    var high = copy.length - 1;
    while (low < high) {
      var plusRes = copy[i] + copy[low] + copy[high];
      var abs = Math.abs(plusRes - target);
      if (abs < min) {
        min = abs;
        result = plusRes;
      }
      if (plusRes < target) ++low;
      else --high;
    }
  }
  return result;
};