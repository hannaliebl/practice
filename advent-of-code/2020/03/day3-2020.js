import { readLines } from "../readlines.js";

// part 1
async function getTreesInPath() {
  const lines = await readLines("input.txt");
  let treeCount = 0;
  let currCol = 0;
  for await (const line of lines) {
    let lineArr = line.split("");
    while (lineArr[currCol] === undefined) {
      lineArr = lineArr.concat(lineArr);
    }
    if (lineArr[currCol] !== undefined && lineArr[currCol] === "#") {
      treeCount++;
    }
    currCol = currCol + 3;
  }
  console.log("trees hit for part 1:", treeCount);
}

getTreesInPath();

// part 2
async function getTreesInPathWithArgs(right, down) {
  const lines = await readLines("input.txt");
  let treeCount = 0;
  let currRow = 0;
  let currCol = 0;
  const mapMatrix = [];
  for await (const line of lines) {
    mapMatrix.push(line);
  }
  mapMatrix.forEach((line, i) => {
    if (currRow === i) {
      let lineArr = line.split("");
      while (lineArr[currCol] === undefined) {
        lineArr = lineArr.concat(lineArr);
      }
      if (lineArr[currCol] !== undefined && lineArr[currCol] === "#") {
        treeCount++;
      }
      currRow = currRow + down;
      currCol = currCol + right;
    }
  });

  console.log("trees hit:", treeCount);
  return treeCount;
}

async function getAnswerForPart2() {
  const a = await getTreesInPathWithArgs(1, 1);
  const b = await getTreesInPathWithArgs(3, 1);
  const c = await getTreesInPathWithArgs(5, 1);
  const d = await getTreesInPathWithArgs(7, 1);
  const e = await getTreesInPathWithArgs(1, 2);

  console.log("Part 2 final answer:", a * b * c * d * e);
}

getAnswerForPart2();
