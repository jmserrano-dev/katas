import { exampleInput, input } from "./input";

const isCharInRange = (
  password: string,
  character: string,
  min: number,
  max: number
): boolean => {
  const regex = new RegExp(character, "g");
  const numberOfCharacters = (password.match(regex) || []).length;
  return numberOfCharacters >= min && numberOfCharacters <= max;
};

const parseRule = (rule: string) => {
  const [_, min, max, character] = rule.match(/^(.*)-(.*) (.*)$/)!;

  return {
    character,
    min: Number(min),
    max: Number(max),
  };
};

const checkPassword = (input: string): string[] => {
  return input.split("\n").reduce((invalidPasswords, current) => {
    const [rule, password] = current.split(": ");
    const { min, max, character } = parseRule(rule);

    return isCharInRange(password, character, Number(min), Number(max))
      ? invalidPasswords
      : [...invalidPasswords, password];
  }, [] as string[]);
};

checkPassword(exampleInput); //?

checkPassword(input)[41]; //?

checkPassword(input)[12]; //?
