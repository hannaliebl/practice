//leetcode.com/problems/reverse-integer/
// easy rating
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversedArr = x.toString().split("").reverse();
  if (reversedArr[reversedArr.length - 1] === "-") {
    reversedArr.pop();
    reversedArr.unshift("-");
  }
  const reversedString = reversedArr.join("");
  const answer = parseInt(reversedString, 10);
  return Math.abs(answer) > 2147483648 ? 0 : answer;
};
