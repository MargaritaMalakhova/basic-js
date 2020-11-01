const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let repeaterString = '';
	if (options.addition === undefined) {
		options.addition = '';
	}
	if (options.separator == null) {
		options.separator = '+';
	}
	if (options.additionSeparator == null) {
		options.additionSeparator = '|';
	}
	if (options.repeatTimes === undefined) {
		return str + options.addition;
	}
	for (let i = 1; i <= options.repeatTimes; i++) {
		repeaterString += str;
		let addString =''; 
		for (j = 1; j <options.additionRepeatTimes; j++) {
			addString += options.addition + options.additionSeparator;
		}
		repeaterString += addString;
		repeaterString += options.addition;
		if (i !== options.repeatTimes) {
			repeaterString += options.separator;
		}
  }
  return repeaterString;
};
  