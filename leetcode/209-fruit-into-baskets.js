// https://leetcode.com/problems/fruit-into-baskets/
// medium

// Map is likely cleaner
// Tried Set first, but it doesn't work when input has multiple of same in row, like 3, 3, 1, 2, 1 as it doesn't keep
// track of count. There is a clever solution with set, though: https://leetcode.com/problems/fruit-into-baskets/discuss/1230969/JS-with-Set-O(N)
var totalFruit = function (fruits) {
  let maxFruits = 0;
  let left = 0;
  let currentFruits = {};
  for (let right = 0; right < fruits.length; right++) {
    // slide window to the left if we have two fruits already and the current fruit
    // isn't in the "basket" yet (so, we have 3 fruits, which is too many for the given constraints)
    while (
      Object.keys(currentFruits).length === 2 &&
      currentFruits[fruits[right]] === undefined
    ) {
      currentFruits[fruits[left]]--;
      // remove zeroed fruits entirely so Object.keys works above
      if (currentFruits[fruits[left]] === 0) delete currentFruits[fruits[left]];
      left++;
    }
    currentFruits[fruits[right]]
      ? currentFruits[fruits[right]]++
      : (currentFruits[fruits[right]] = 1);
    maxFruits = Math.max(maxFruits, right - left + 1);
  }
  return maxFruits;
};

console.log(totalFruit([3, 3, 1, 2, 1])); // 3
console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4

// Map solution:
var totalFruitWithMap = function (fruits) {
  let max = 0;
  let left = 0;
  let basket = new Map();
  for (let right = 0; right < fruits.length; right++) {
    if (!basket.has(fruits[right])) {
      basket.set(fruits[right], 1);
    } else {
      basket.set(fruits[right], basket.get(fruits[right]) + 1);
    }
    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) <= 0) {
        basket.delete(fruits[left]);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(totalFruitWithMap([3, 3, 1, 2, 1])); // 3
console.log(totalFruitWithMap([1, 2, 1])); // 3
console.log(totalFruitWithMap([0, 1, 2, 2])); // 3
console.log(totalFruitWithMap([1, 2, 3, 2, 2])); // 4
