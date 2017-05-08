/**
 * 输出一组数据中第N小的数
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
exports.selectMinN = function partion(nums, n) {
  var array = nums;
  var left = [];
  var right = [];
  for (var i = 0; i < array.length; i++) {
    if (i === n) continue;
    if (array[i] < array[n]) left.push(array[i]);
    else right.push(array[i]);
  }
  if (left.length < n - 1) return partion(right, n - left.length - 1);
  if (left.length > n - 1) return partion(left, n);
  return array[n];
};

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input = "";
// var input_array = "";

// process.stdin.on('data', function (data) {
//     input += data;
// });

// process.stdin.on('end', function () {
//     input_array = input.split("\n");
//     var nLine = 0;
    
//     while(nLine < input_array.length){
//         var line = input_array[nLine++].trim();
//         if(line === ''){
//             continue;
//         }
//         var s = line;
//         var n = +input_array[nLine++];
//         while(n--){
//             var input_arrays = input_array[nLine++].trim().split(' ');
//             var p = +input_arrays[0];
//             var l = +input_arrays[1];

//             //你的代码

//         }
//     }
// });