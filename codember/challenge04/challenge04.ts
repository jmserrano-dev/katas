import { input } from "./input";

const { start, end } = input;

const splitDigits = (password: number): number[] => {
  return password
    .toString()
    .split("")
    .map((digit) => Number(digit));
};

const checkHasLeastTwoFives = (password: number): boolean => {
  return splitDigits(password).filter((digit) => digit === 5).length >= 2;
};

const checkNextDigitIsGreaterThanPrevious = (password: number): boolean => {
  return splitDigits(password).reduce((previous, current, index, digits) => {
    return previous && (digits[index - 1] ?? -1) <= current;
  }, true);
};

const validPasswords: number[] = [];

for (let password = start; password <= end; password++) {
  if (
    checkHasLeastTwoFives(password) &&
    checkNextDigitIsGreaterThanPrevious(password)
  ) {
    validPasswords.push(password);
  }
}

const result = {
  length: validPasswords.length,
  passwordIndex55: validPasswords[55],
}; //?
