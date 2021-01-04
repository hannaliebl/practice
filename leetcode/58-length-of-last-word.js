// https://leetcode.com/problems/length-of-last-word/
// easy rating
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  wordArray = s.split(" ").filter((str) => str !== "");
  if (wordArray.length > 0) {
    return wordArray[wordArray.length - 1].length;
  } else {
    return 0;
  }
};
