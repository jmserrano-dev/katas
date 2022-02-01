import canReconfigure from "../src/23-challenge";

describe("Pangram should", () => {
  test.each([
    [true, "BAL", "LIB"],
    [false, "CON", "JUU"],
    [false, "XBOX", "XXBO"],
    [true, "XBOX", "XOBX"],
    [false, "MMM", "MID"],
    [false, "AA", "MID"],
  ])("return %p when the letter is %p", (expected, from, to) => {
    const isCorrect = canReconfigure(from, to);

    expect(isCorrect).toBe(expected);
  });
});
