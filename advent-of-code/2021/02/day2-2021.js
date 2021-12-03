import { readLines } from "../readlines.js";

// part 1
async function parseDirections() {
  const directions = await readLines("input.txt");
  let depth = 0;
  let horizontal = 0;

  for await (const direction of directions) {
    const forwardRegex = /forward/;
    const downRegex = /down/;
    const upRegex = /up/;
    const digitRegex = /\d+/;
    if (direction.match(forwardRegex)) {
      const num = parseInt(direction.match(digitRegex)[0]);
      horizontal = horizontal + num;
    }
    if (direction.match(downRegex)) {
      const num = parseInt(direction.match(digitRegex)[0]);
      depth = depth + num;
    }
    if (direction.match(upRegex)) {
      const num = parseInt(direction.match(digitRegex)[0]);
      depth = depth - num;
    }
    // if direction = forward: horizontal = horizontal + direction
    // if direction = down: depth = depth + direction
    // if direction = up: depth = depth - direction
  }

  console.log("answer part 1: ", depth * horizontal);
}

parseDirections();

// part 1
async function parseDirectionsWithAim() {
  const directions = await readLines("input.txt");
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  for await (const direction of directions) {
    const forwardRegex = /forward/;
    const downRegex = /down/;
    const upRegex = /up/;
    const digitRegex = /\d+/;
    if (direction.match(forwardRegex)) {
      const num = parseInt(direction.match(digitRegex)[0]);
      horizontal = horizontal + num;
      depth = depth + aim * num;
    }
    if (direction.match(downRegex)) {
      const num = parseInt(direction.match(digitRegex)[0]);
      aim = aim + num;
    }
    if (direction.match(upRegex)) {
      const num = parseInt(direction.match(digitRegex)[0]);
      aim = aim - num;
    }
  }

  console.log("answer part 2: ", depth * horizontal);
}

parseDirectionsWithAim();
