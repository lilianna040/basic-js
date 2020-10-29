const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month = isNaN(Date.parse(date)) ? 
  (typeof date == 'object' ? 'Error' : 'Unable to determine the time of year!') : date.getUTCMonth();

  if (month==0 || month==1 || month==11) return 'winter';
  if (month==2 || month==3 || month==4) return 'spring';
  if (month==5 || month==6 || month==7) return 'summer';   
  if (month==8 || month==9 || month==10) return 'autumn';
  if (month==='Error') throw month;
  return month;
};
