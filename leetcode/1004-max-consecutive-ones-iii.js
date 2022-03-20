// https://leetcode.com/problems/max-consecutive-ones-iii/
// medium rating
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0;
  let flipped = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      flipped++;
    }
    while (flipped > k) {
      // only if the left slide is a 0 do we go ahead and
      // reduce the flipped count - because now we know that
      // that value has left our sliding window
      if (nums[left] === 0) flipped--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};
