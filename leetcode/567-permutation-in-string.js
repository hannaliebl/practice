// https://leetcode.com/problems/permutation-in-string/
// medium rating
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // permutation is same length and same letter count
  const windowSize = s1.length;
  let left = 0;
  let permutationKey = new Map();
  // get the "key" for the string we are checking for permutations on
  for (let i = 0; i < s1.length; i++) {
    if (permutationKey.has(s1[i])) {
      permutationKey.set(s1[i], permutationKey.get(s1[i]) + 1);
    } else {
      permutationKey.set(s1[i], 1);
    }
  }
  let letterCount = new Map();
  for (let right = 0; right <= s2.length; right++) {
    if (!letterCount.has(s2[right])) {
      letterCount.set(s2[right], 1);
    } else {
      letterCount.set(s2[right], letterCount.get(s2[right]) + 1);
    }
    while (right - left + 1 === windowSize) {
      // check if current window is permutation of s1
      let allMatch = true;
      for (const [key, value] of letterCount) {
        if (permutationKey.get(key) !== value) {
          allMatch = false;
        }
      }
      // if not, move the window left and remove left val from map
      if (!allMatch) {
        // this tripped me up initially: really the current leftval since
        // we are eventually sliding left is the current count minus 1.
        // maybe clearer way to express this, but meh
        let currentLeftVal = letterCount.get(s2[left]) - 1;
        if (currentLeftVal === 0) {
          letterCount.delete(s2[left]);
        } else {
          letterCount.set(s2[left], currentLeftVal);
        }
        left++;
      } else {
        return true;
      }
    }
  }
  // default case if we haven't found any permutation by end
  return false;
};
