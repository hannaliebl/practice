import { readLines } from "../readlines.js";

// part 1
async function countDepthIncreases() {
  let depthsArr = [];
  const depths = await readLines("input.txt");

  for await (const depth of depths) {
    depthsArr.push(parseInt(depth));
  }

  let increaseCount = 0;
  let initial = depthsArr[0];
  for (let i = 0; i < depthsArr.length; i++) {
    if (depthsArr[i + 1] > depthsArr[i]) {
      increaseCount++;
    }
  }
  console.log(increaseCount);
}

countDepthIncreases();

// part 2
async function countDepthIncreasesSlidingWindow() {
  let depthsArr = [];
  const depths = await readLines("input.txt");

  for await (const depth of depths) {
    depthsArr.push(parseInt(depth));
  }

  let increaseCount = 0;
  // just do this for now, lol
  let initialWindowSum = [depthsArr[0], depthsArr[1], depthsArr[2]].reduce(
    (p, c) => {
      return p + c;
    },
    0
  );
  for (let i = 3; i < depthsArr.length; i++) {
    let newWindowSum = initialWindowSum - depthsArr[i - 3] + depthsArr[i];
    if (newWindowSum > initialWindowSum) {
      increaseCount++;
    }
    initialWindowSum = newWindowSum;
  }
  console.log("sliding window depth answer", increaseCount);
}

countDepthIncreasesSlidingWindow();
