const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  for (let i=0; i<members.length; i++) {
    if (typeof members[i] == 'string')
      members[i] = members[i].replace(/\ /g, '').substring(0,1).toUpperCase();
    else members[i]='';
  }
  members = members.sort().join('');
  return members;
}
