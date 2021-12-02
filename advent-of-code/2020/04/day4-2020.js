import fs from "fs";

// part 1
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .split(/\n\n/)
  .map((item) => {
    return item
      .replace(/\n/g, " ")
      .split(" ")
      .reduce((accum, current) => {
        const kv = current.split(":");
        accum[kv[0]] = kv[1];
        return accum;
      }, {});
  });

console.log(inputData);

function processInputData(data) {
  let validCount = 0;
  data.forEach((passportObj) => {
    if (
      passportObj.hasOwnProperty("ecl") &&
      passportObj.hasOwnProperty("pid") &&
      passportObj.hasOwnProperty("eyr") &&
      passportObj.hasOwnProperty("hcl") &&
      passportObj.hasOwnProperty("byr") &&
      passportObj.hasOwnProperty("iyr") &&
      passportObj.hasOwnProperty("hgt")
    ) {
      validCount++;
    }
  });
  console.log("valid password count", validCount);
}

processInputData(inputData);
