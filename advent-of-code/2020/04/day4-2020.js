import fs from "fs";

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

// reduce((accum, curr) => {

// }, {})
// .reduce((accum, curr) => {
//   if (curr.length > 0) {
//     accum.push(curr);
//   }
// }, []);
console.log(inputData);

// function getInput() {
//   return fs
//     .readFileSync("input.txt")
//     .toString()
//     .split("\n\n")
//     .map((item) =>
//       item
//         .replace(/\n/g, " ")
//         .split(" ")
//         .reduce((accum, field) => {
//           const kv = field.split(":");
//           accum[kv[0]] = kv[1];
//           return accum;
//         }, {})
//     );
// }

const test = [
  "ecl:grn",
  "cid:315 iyr:2012 hgt:192cm eyr:2023 pid:873355140 byr:1925 hcl:#cb2c03",
  "",
  "byr:2027 hcl:ec0cfd ecl:blu cid:120",
  "eyr:1937 pid:106018766 iyr:2010 hgt:154cm",
  "",
];

const foo = test.reduce((accum, curr, i, arr) => {
  let store = {};
  if (curr.length > 0) {
    store.data = curr;
    accum.push(store);
    return accum;
  } else {
    return accum;
  }
}, []);

console.log(foo);

// console.log(getInput());
