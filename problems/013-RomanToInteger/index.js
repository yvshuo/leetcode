/**
 * https://leetcode.com/problems/roman-to-integer/#/description
 * 
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * 1~9: {'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'};
 * 10~90: {'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'};
 * 100~900: {'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'};
 * 1000~3000: {'M', 'MM', 'MMM'}.
 */

/**
 * 将罗马数转换成整数
 * 注意数的范围是1-3999
 * 
 * @param {string} s
 * @return {number}
 */
exports.romanToInt = function (s) {
  var cases = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var result = 0;
  if (!s || typeof s !== 'string') throw new Error('Type Error');
  result = cases[s[0]];
  for (var i = 1; i < s.length; i++) {
    if (cases[s[i - 1]] < cases[s[i]]) {
      result += cases[s[i]] - 2 * cases[s[i - 1]];
    } else {
      result += cases[s[i]];
    }
  }
  return result;
};
