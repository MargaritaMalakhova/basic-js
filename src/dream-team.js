const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false;
  }
  let a = [];
  for (let i of members) {
    if (typeof i === 'string') {
		for (j = 0; j < i.length; j++){
			if (i[j] !== ' ') {
				a.push ((i[j]).toUpperCase());
				break;
			}
		}
    }
  }
  
  return a.sort().join('');
};
