var assert = require('assert');
var glob = require('glob');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');

var problems = glob.sync(path.resolve(__dirname, '../{problems,algorithm}/*'));

problems.forEach(function (dirPath) {
  var dirName = path.relative(path.resolve(dirPath, '..'), dirPath);
  var testcasesPath = path.join(dirPath, 'testcases.js');
  var programPath = path.join(dirPath, 'index.js');
  var program = require(programPath);
  var testcases = require(testcasesPath);

  if (typeof program === 'object') {
    Object.keys(program).forEach(function (key) {
      describe(dirName + ' : ' + key, function () {
        it('testcases should passed', function () {
          testcases.forEach(function (testcase) {
            console.log('      ' + testcase.input + ' -> ' +
              program[key].apply(null, testcase.input) + ' vs ' + testcase.output);
            assert.deepEqual(program[key].apply(null, testcase.input), testcase.output);
          });
        });
      });
    });
  }
});