/**
 * https://leetcode.com/problems/search-for-a-range/#/description
 * 
 * Given an array of integers sorted in ascending order, find the
 * starting and ending position of a given target value. Your algorithm's
 * runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * 
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
exports.searchRange = function (nums, target) {
  var first = 0;
  var last = nums.length;
  while (first !== last) {
    var mid = first + Math.floor((last - first) / 2);
    if (target > nums[mid]) first = ++mid;
    else last = mid;
  }
  var low = first;
  last = nums.length;
  while (first !== last) {
    var mid2 = first + Math.floor((last - first) / 2);
    if (target >= nums[mid2]) first = ++mid2;
    else last = mid2;
  }
  var high = first;
  if (nums[low] !== target) return [-1, -1];
  return [low, high - 1];
};