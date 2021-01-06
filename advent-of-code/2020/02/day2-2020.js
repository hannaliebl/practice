import { readLines } from "../readlines.js";

// part 1
async function getValidPasswordCount() {
  let validCount = 0;
  const lines = await readLines("input.txt");

  for await (const line of lines) {
    const lineArr = line.split(": ");
    const password = lineArr[1];
    const searchTarget = lineArr[0].slice(-1);
    const occurences = lineArr[0].slice(0, lineArr[0].length - 2).split("-");
    const re = new RegExp(searchTarget, "g");
    const count = (password.match(re) || []).length;
    if (count >= parseInt(occurences[0]) && count <= parseInt(occurences[1])) {
      validCount++;
    }
  }
  console.log("valid count:", validCount);
}

// part 2
async function getValidPasswordCountNewPolicy() {
  let validCount = 0;
  // https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
  const lines = await readLines("input.txt");
  for await (const line of lines) {
    const lineArr = line.split(": ");
    const passwordArr = lineArr[1].split("");
    const searchTarget = lineArr[0].slice(-1);
    const positions = lineArr[0].slice(0, lineArr[0].length - 2).split("-");
    const pos1 = parseInt(positions[0]);
    const pos2 = parseInt(positions[1]);
    if (
      (passwordArr[pos1 - 1] === searchTarget &&
        passwordArr[pos2 - 1] !== searchTarget) ||
      (passwordArr[pos2 - 1] === searchTarget &&
        passwordArr[pos1 - 1] !== searchTarget)
    ) {
      validCount++;
    }
  }
  console.log("valid count with new policy:", validCount);
}

getValidPasswordCount();
getValidPasswordCountNewPolicy();
