/**
 * https://leetcode.com/problems/search-insert-position/#/description
 * 
 * Given a sorted array and a target value, return the index if the
 * target is found. If not, return the index where it would be if it
 * were inserted in order.
 * 
 * You may assume no duplicates in the array.
 * 
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 */

/**
 * 典型的二分查找
 * 查找到的话返回下标，否则返回应该在的位置下标。
 * 注意默认输入的数组是有序且不含重复数字的。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 在searchInsert基础上进行优化
 */
exports.searchInsert2 = function (nums, target) {
  var first = 0;
  var last = nums.length;
  while (first !== last) {
    var mid = first + Math.floor((last - first) / 2);
    if (target > nums[mid]) first = ++mid;
    else last = mid;
  }
  return first;
};

/**
 * 典型的二分查找
 * 查找到的话返回下标，否则返回应该在的位置下标。
 * 注意默认输入的数组是有序且不含重复数字的。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 2017.5.3
 */
exports.searchInsert = function (nums, target) {
  var first = 0;
  var last = nums.length - 1;
  var mid = Math.floor(last / 2);
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  while (first <= last) {
    mid = first + Math.floor((last - first) / 2);
    if (target < nums[mid]) last = mid - 1;
    else if (target > nums[mid]) first = mid + 1;
    else return mid;
  }
  if (target > nums[mid]) return mid + 1;
  return mid;
};
