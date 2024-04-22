class MathFunctions {
  constructor(nums) {
    this.numsArray = nums.split(",").map((num) => parseFloat(num.trim()));
  }

  mean(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total / nums.length;
  }

  median(nums) {
    let center = Math.floor(nums.length / 2);
    return nums[center];
  }

  mode(nums) {
    const counts = {};

    nums.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
    });

    let mode;
    let maxCount = 0;

    for (const num in counts) {
      if (counts[num] > maxCount) {
        mode = num;
        maxCount = counts[num];
      }
    }
    return mode;
  }
}

module.exports = MathFunctions;
