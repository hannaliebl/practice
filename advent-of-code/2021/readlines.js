import fs from "fs";
import readline from "readline";

// https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
export async function readLines(file) {
  const fileStream = fs.createReadStream(file);
  return readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
}
