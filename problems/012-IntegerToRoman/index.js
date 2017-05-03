/**
 * https://leetcode.com/problems/integer-to-roman/#/description
 * 
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * 1~9: {'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'};
 * 10~90: {'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'};
 * 100~900: {'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'};
 * 1000~3000: {'M', 'MM', 'MMM'}.
 */

/**
 * 整数转罗马数
 * 注意题目整数的范围是1到3999
 * 
 * @param {number} num
 * @return {string}
 */
exports.intToRoman = function (num) {
  var cases = {
    0: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    1: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    2: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    3: ['', 'M', 'MM', 'MMM'],
  };
  var remain = num;
  var result = '';
  var cnt = 0;
  while (remain !== 0) {
    var index = remain % 10;
    result = cases[cnt][index] + result;
    cnt++;
    remain = Math.floor(remain / 10);
  }
  return result;
};
