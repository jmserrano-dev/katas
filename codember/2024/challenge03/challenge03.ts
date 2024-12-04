import { inputChallenge, inputExample } from "./input.ts";

const getNumberOfJumps = (instruction: string) => {
  let jumps = 0;
  let index = 0;

  const arr = instruction.split(" ").map((x) => Number(x));

  while (index >= 0 && index < arr.length) {
    const current = arr[index];
    arr[index] += 1;
    index += current;
    jumps += 1;
  }

  return jumps;
};

inputExample.split("\n").map((instruction) => {
  const counter = getNumberOfJumps(instruction);
  console.log(instruction, " - ", counter);
});

let sum = 0;
let lastResult = 0;

inputChallenge.split("\n").forEach((instruction) => {
  const counter = getNumberOfJumps(instruction);
  sum += counter;
  lastResult = counter;
});

console.log(`submit ${sum}-${lastResult}`);
