const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str=String(str); 
  options.addition=String(options.addition)
  let arr=[], repeat=0, repeatAdd=0;

  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.separator == undefined) options.separator = '+';
  if (options.repeatTimes==undefined && options.additionRepeatTimes==undefined) {
    options.repeatTimes=1;
    options.additionRepeatTimes=1;
  }
  while (repeat<options.repeatTimes) {
    arr.push(str);
    repeatAdd=0;
      while (repeatAdd<options.additionRepeatTimes) {
        arr.push(options.addition);
        arr.push(options.additionSeparator);
        repeatAdd++;
      }
      if (repeatAdd!=0) arr.pop();
    arr.push(options.separator);
    repeat++;
  } arr.pop();
  return arr.join('');   
};
