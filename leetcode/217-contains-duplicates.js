// leetcode.com/problems/contains-duplicate/
// easy rating
/**
 * @param {number[]} nums
 * @return {boolean}
 */
https: var containsDuplicate = function (nums) {
  let dict = {}; // {val: true}
  let hasDupes = false;
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]] === undefined) {
      dict[nums[i]] = true;
    } else {
      hasDupes = true;
    }
  }
  return hasDupes;
};
