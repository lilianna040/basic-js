const CustomError = require("../extensions/custom-error");

module.exports = function countCats(lawn) {
  lawn=[].concat(...lawn);
  let count=0;
  for (i of lawn) {
    if (i=='^^')
    count++
  }
  return count;
};
