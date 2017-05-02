/**
 * https://leetcode.com/problems/two-sum/#/description
 *
 * Given an array of integers, return indices of the two
 * numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 *
 * Input: numbers={2, 7, 11, 15}, target=9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * Output: [0, 1].
 */

/**
 * 使用hash表存储每个数对应的下标
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = module.exports = function (nums, target) {
  var hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    var index = hash.get(target - nums[i]);
    if (index === undefined) {
      hash.set(nums[i], i);
    } else {
      return [i, index].sort(1);
    }
  }
  return null;
};
