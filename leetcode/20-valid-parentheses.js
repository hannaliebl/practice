// https://leetcode.com/problems/valid-parentheses/
// easy rating
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let a = s.split("");
  const stack = [];
  const matchesMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const isOpen = function (char) {
    if (char === "(" || char === "[" || char === "{") {
      return true;
    } else {
      return false;
    }
  };

  let valid = true;

  for (let i = 0; i < a.length; i++) {
    if (isOpen(a[i])) {
      stack.push(a[i]);
    } else {
      const lastOfStack = stack.pop();
      if (matchesMap[lastOfStack] !== a[i]) {
        valid = false;
      }
    }
  }

  if (stack.length > 0) valid = false;

  return valid;
};
