import { exampleInput, input } from "./input";

const getNonRepeatingChars = (filename: string): string => {
  let nonRepeatingCharacters = "";

  for (let i = 0; i < filename.length; i++) {
    const character = filename[i];

    if (
      filename.indexOf(character) == i &&
      filename.indexOf(character, i + 1) == -1
    ) {
      nonRepeatingCharacters += character;
    }
  }

  return nonRepeatingCharacters;
};

const checkFiles = (files: string[]): string[] => {
  return files.reduce((previous, current) => {
    const [filename, checksum] = current.split("-");

    return getNonRepeatingChars(filename) === checksum
      ? [...previous, checksum]
      : previous;
  }, [] as string[]);
};

checkFiles(exampleInput); //?

checkFiles(input)[32]; //?
