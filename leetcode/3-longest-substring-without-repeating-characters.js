// leetcode.com/problems/longest-substring-without-repeating-characters/
// medium
var lengthOfLongestSubstring = function (s) {
  // Set is key to this, as it can't contain dupes
  const foundLetters = new Set();
  let left = 0;
  let longestLen = 0;
  for (let right = 0; right < s.length; right++) {
    // this means as we slide right we have a duplicate, so
    // to handle it we need to adjust the window size from
    // the left
    while (foundLetters.has(s[right])) {
      // move left pointer over, and in turn also remove left value from
      // the current set.
      foundLetters.delete(s[left]);
      left++;
    }
    foundLetters.add(s[right]);
    longestLen = Math.max(longestLen, right - left + 1);
  }
  return longestLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
