// leetcode.com/problems/maximum-subarray/
// easy rating
/**
 * @param {number[]} nums
 * @return {number}
 */
https: var maxSubArray = function (nums) {
  // just start with both values set to first value of arr to begin with
  let currMax = nums[0];
  let subArrSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // Math.max is important here, as it can reset the sub array to the
    // next value in the array, or keep it going.
    subArrSum = Math.max(nums[i], subArrSum + nums[i]);
    // see if the new sub array is bigger than the current max, if so, set it to current max
    currMax = Math.max(currMax, subArrSum);
  }
  return currMax;
};

maxSubArray([4, -1, 2, -3, -15]); // 6
