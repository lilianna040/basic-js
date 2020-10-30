const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") return false;
  if(MODERN_ACTIVITY > sampleActivity && sampleActivity > 0)
  return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))*5730*1.577*10000000/0.693);
  else return false;
};
