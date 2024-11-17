import { challengeInput } from "./input";

const checkAccess = (passwords: string[]) => {
  const result = { valid: 0, invalid: 0 };

  const onlyLowerCaseOrDigits = (password: string) =>
    password.match(/^[a-z0-9]+$/);

  const notDigitAfterLetter = (password: string) =>
    password.match(/[a-z]\d/) === null;

  const numberAlwaysAscending = (password: string) => {
    const numbers = password.match(/\d/g)?.map((number) => parseInt(number));

    if (!numbers) return true;

    return numbers.every(
      (number, index) => number >= (numbers[index - 1] || 0)
    );
  };

  const charactersAlwaysAscending = (password: string) => {
    const characters = password.match(/[a-z]/g);

    if (!characters) return true;

    return characters.every(
      (character, index) => character >= (characters[index - 1] || "")
    );
  };

  passwords.forEach((password) => {
    const isValid =
      onlyLowerCaseOrDigits(password) &&
      notDigitAfterLetter(password) &&
      numberAlwaysAscending(password) &&
      charactersAlwaysAscending(password);

    if (isValid) {
      result.valid++;
    } else {
      result.invalid++;
    }
  });

  return result;
};

console.log(checkAccess(["1234", "abc", "aabbcc", "112233", "a123", "123abc"]));

console.log(checkAccess(challengeInput.split("\n")));
