const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
	if(!Array.isArray(arr)) {
		throw Error;
	}
	let array = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			i++;
			if(arr[i+1] == '--double-prev' || arr[i+1] == '--discard-prev') {
				i++;
			}
		} else if (arr[i] === '--discard-prev') {
			if (array.length !== 0) {
				array.pop();
			}
		} else if (arr[i] === '--double-next') {
			if (i + 1 < arr.length) {
				array.push(arr[i+1]);
			}
		} else if (arr[i] === '--double-prev') {
			if (i !== 0) {
				array.push(arr[i-1]);
			}
		} else {
			array.push(arr[i]);
		}
	}
	return array;
};
