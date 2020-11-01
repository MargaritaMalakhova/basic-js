const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') {
		return false;
	}
	let activity = parseInt(sampleActivity, 10);
	if (isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY) { 
		return false;
	}
	return Math.ceil( Math.log2(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));
};
