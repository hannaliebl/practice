// https://leetcode.com/problems/two-sum/
// easy rating
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashTable = {};
  // {val: index} so for [1,2,4] {1: 0, 2: 1, 3: 4}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashTable[complement] !== undefined) {
      return [i, hashTable[complement]];
    }
    hashTable[nums[i]] = i;
  }
};
