import { exampleInput, challengeInput } from "./input";

const decript = ([initialNumbers, initialMoves]: string[]) => {
  const numbers = initialNumbers.split("").map((x) => Number(x));
  const moves = initialMoves.split("");
  let index = 0;

  moves.forEach((move) => {
    switch (move) {
      case "R":
        index++;
        break;
      case "L":
        index--;
        break;
      case "U":
        numbers[index] = (numbers[index % numbers.length] + 1 + 10) % 10;
        break;
      case "D":
        numbers[index] = (numbers[index % numbers.length] - 1 + 10) % 10;
        break;
    }
  });

  return numbers.join("");
};

console.log("EXAMPLE", decript(exampleInput));
console.log("CHALLENGE", decript(challengeInput));
