// https://leetcode.com/problems/product-of-array-except-self/
// medium rating
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [];
  const right = [];
  const answer = [];
  let currentLeftProduct = 1;
  let currentRightProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    currentLeftProduct = currentLeftProduct * nums[i];
    left.push(currentLeftProduct);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    currentRightProduct = currentRightProduct * nums[i];
    right.unshift(currentRightProduct);
  }
  answer[0] = right[1];

  for (let i = 1; i < nums.length - 1; i++) {
    answer[i] = left[i - 1] * right[i + 1];
  }
  answer[answer.length] = left[left.length - 2];
  return answer;
};
