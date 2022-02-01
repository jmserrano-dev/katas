// https://adventjs.dev/challenges/03

export default function isValid(letter: string) {
  const invalidCharacters = ["{", "}", "[", "]", "(", ")"];

  const textBetweenParentheses =
    StringUtils.extractContentBetweenParentheses(letter);

  if (ArrayUtils.isEmpty(textBetweenParentheses)) return false;

  return textBetweenParentheses.every((text) => {
    const content = StringUtils.removeFirstAndLastCharacters(text);
    return (
      StringUtils.isNotEmpty(content) &&
      !StringUtils.containsInvalidCharacters(content, invalidCharacters)
    );
  });
}

const ArrayUtils = {
  isEmpty: (arr: unknown[]): boolean => {
    return arr.length === 0;
  },
};

const StringUtils = {
  isNotEmpty: (str: string): boolean => {
    return str !== "" && str != null;
  },
  containsInvalidCharacters: (
    str: string,
    invalidCharacters: string[]
  ): boolean => {
    return invalidCharacters.some((invalidCharacter) =>
      str.includes(invalidCharacter)
    );
  },
  extractContentBetweenParentheses: (str: string): string[] => {
    const regex = /\(([^)]+)\)/g;
    return str.match(regex) ?? [];
  },
  removeFirstAndLastCharacters: (str: string): string => {
    return str.slice(1, -1);
  },
};
