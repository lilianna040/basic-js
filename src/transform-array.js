const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr)
  let newArr=[];
  for (let i=0; i<arr.length; i++) {
    switch (arr[i]) {
      case '--double-next': arr[i+1]!=undefined ? newArr.push(arr[i+1]) : ''; break;
      case '--double-prev': (arr[i-2]!='--discard-next' && arr[i-1]!=undefined) ? newArr.push(arr[i-1]) : ''; break;
      case '--discard-next': i++; break;
      case '--discard-prev': arr[i-2]!='--discard-next' ? newArr.pop() : ''; break;
      default : newArr.push(arr[i]); break;
    }
  }
  return newArr;
};
