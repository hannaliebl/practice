const fs = require("fs");
const readline = require("readline");

// part 1
async function getTreesInPath() {
  // https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
  const fileStream = fs.createReadStream("input.txt");
  const readLines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let treeCount = 0;
  let currCol = 0;

  for await (const line of readLines) {
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
  // https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
  const fileStream = fs.createReadStream("input.txt");
  const readLines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let treeCount = 0;
  let currRow = 0;
  let currCol = 0;

  const mapMatrix = [];

  for await (const line of readLines) {
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

async function getAnswer() {
  const a = await getTreesInPathWithArgs(1, 1);
  const b = await getTreesInPathWithArgs(3, 1);
  const c = await getTreesInPathWithArgs(5, 1);
  const d = await getTreesInPathWithArgs(7, 1);
  const e = await getTreesInPathWithArgs(1, 2);

  console.log("final", a * b * c * d * e);
}

getAnswer();
