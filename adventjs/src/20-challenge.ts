// https://adventjs.dev/challenges/20

export default function pangram(letter: string) {
  const alphabetSize = 26;
  const alphabetCharacters = /[a-zA-Zñáéíóúü]/g;

  return new Set(letter.match(alphabetCharacters)).size > alphabetSize;
}
