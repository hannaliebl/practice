//leetcode.com/problems/minimum-size-subarray-sum/
// medium rating
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let currentMin = Number.MAX_SAFE_INTEGER;
  let windowStart = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // shrink the window as small as possible until the sum is less than the target
    while (sum >= target) {
      currentMin = Math.min(currentMin, i + 1 - windowStart);
      // the sum of the current sliding window
      sum = sum - nums[windowStart];
      // now actually slide the window by moving the start to the right by one
      windowStart++;
    }
  }
  // edge case
  if (currentMin === Number.MAX_SAFE_INTEGER) {
    return 0;
  }
  return currentMin;
};
