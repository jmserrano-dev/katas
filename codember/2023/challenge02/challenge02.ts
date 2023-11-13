import { challengeInput } from "./input";

const compile = (input: string): number => {
  const executeOperation: Record<string, (_: number) => number> = {
    "#": (x) => x + 1,
    "@": (x) => x - 1,
    "*": (x) => x * x,
    "&": (x) => {
      console.log(x);
      return x;
    },
  };

  return input.split("").reduce((previous, operation) => {
    return executeOperation[operation](previous);
  }, 0);
};

console.log(compile(challengeInput));
