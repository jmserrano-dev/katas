import pangram from "../src/20-challenge";

describe("Pangram should", () => {
  test.each([
    [true, "Extraño pan de col y kiwi se quemó bajo fugaz vaho"],
    [true, "Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!"],
    [
      false,
      "Esto es una frase larga pero no tiene todas las letras del abecedario",
    ],
    [false, "De la a a la z, nos faltan letras"],
  ])("return %p when the letter is %p", (expected, letter) => {
    const selectedCourses = pangram(letter);

    expect(selectedCourses).toStrictEqual(expected);
  });
});
