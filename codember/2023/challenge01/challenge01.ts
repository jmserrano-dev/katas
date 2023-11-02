import { challengeInput } from "./input";

const decode = (input: string): string => {
  const dictionary = input.split(" ").reduce((previous, current) => {
    previous[current.toLowerCase()] =
      (previous[current.toLowerCase()] ?? 0) + 1;
    return previous;
  }, {});

  return Object.entries(dictionary).reduce((previous, [key, value]) => {
    return `${previous}${key}${value}`;
  }, "");
};

console.log(decode(challengeInput));
