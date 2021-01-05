const fs = require("fs");
const readline = require("readline");

async function getValidPasswordCount() {
  let validCount = 0;
  // https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
  const fileStream = fs.createReadStream("input.txt");
  const readLines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of readLines) {
    const lineArr = line.split(":");
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

getValidPasswordCount();
