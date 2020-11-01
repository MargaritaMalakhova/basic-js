const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i of arr) {
      let innerDepth = 1;
      if (Array.isArray(i)) {
        innerDepth += this.calculateDepth(i);
        if (depth < innerDepth) {
          depth = innerDepth;
        }
      }
    }
   return depth;
  }
};