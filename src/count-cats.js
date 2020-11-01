const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
	let cats = 0;
	for (let array of matrix) {
		for (let elem of array) {
			if (elem === '^^') {
				cats++;
			}
		}
	}
	return cats;
};
