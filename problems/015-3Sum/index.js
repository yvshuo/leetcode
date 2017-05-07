/**
 * https://leetcode.com/problems/3sum/#/description
 * 
 * Given an array S of n integers, are there elements a, b, c
 * in S such that a + b + c = 0.
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 * 
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * 求给定数组中三个数的和为0的集合，结果不能有重复值。
 * 注意对数组进行去重。
 * 先排序，然后左右夹逼
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
exports.threeSum2 = function (nums) {
  var copyNums = nums.slice(0);
  var result = [];
  var target = 0;
  if (copyNums.length < 3) return result;
  copyNums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < copyNums.length - 2; i++) {
    if (copyNums[i] > target) break;
    if (i > 0 && copyNums[i] === copyNums[i - 1]) continue;
    var low = i + 1;
    var high = copyNums.length - 1;
    while (low < high) {
      var plusRes = copyNums[i] + copyNums[low] + copyNums[high];
      if (plusRes < target) {
        // 比target值小，提高下界，往上夹逼
        ++low;
        // 跳过重复的数
        while (low < high && copyNums[low] === copyNums[low - 1]) {
          ++low;
        }
        continue;
      }
      if (plusRes > target) {
        // 比target值大，减小上界，往下夹逼
        --high;
        // 跳过重复的数
        while (low < high && copyNums[high] === copyNums[high + 1]) {
          --high;
        }
        continue;
      }
      result.push([copyNums[i], copyNums[low], copyNums[high]]);
      ++low;
      --high;
      // 跳过重复的数
      while (low < high && copyNums[low] === copyNums[low - 1]) {
        ++low;
      }
      // 跳过重复的数
      while (low < high && copyNums[high] === copyNums[high + 1]) {
        --high;
      }
    }
  }
  return result;
};

/**
 * 求给定数组中三个数的和为0的集合，结果不能有重复值。
 * 注意对数组进行去重。
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
exports.threeSum = function (nums) {
  var copyNums = nums.slice(0);
  var result = [];
  if (copyNums.length < 3) return result;
  copyNums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < copyNums.length - 2; i++) {
    // 过滤掉绝对不会符合条件的情况
    if (copyNums[i] > 0) break;
    if (copyNums[i] === 0 && copyNums[i + 1] === 0 && copyNums[i + 2] === 0) {
      result.push([0, 0, 0]);
      break;
    }
    for (var j = i + 1; j < copyNums.length - 1; j++) {
      var first = j + 1;
      var last = copyNums.length;
      var target = -copyNums[i] - copyNums[j];
      if (copyNums[i] + copyNums[j] + copyNums[first] > 0) break;
      if (copyNums[first] === target) {
        result.push([copyNums[i], copyNums[j], copyNums[first]]);
        break;
      }
      // 使用二分查找进行命中查找
      while (first !== last) {
        var mid = first + Math.floor((last - first) / 2);
        if (target > copyNums[mid]) first = mid + 1;
        if (target < copyNums[mid]) last = mid;
        if (target === copyNums[mid]) {
          result.push([copyNums[i], copyNums[j], target]);
          break;
        }
      }
    }
  }
  if (result.length === 1) return result;
  var copyResult = {};
  result = result.filter(function (a) {
    if (copyResult[a.toString()]) return false;
    copyResult[a.toString()] = true;
    return true;
  });
  return result;
};