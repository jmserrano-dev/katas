import isValid from "../src/3-challenge";

describe("The letter should", () => {
  test.each([["(a) (b) (c)"], ["(muñeca) consola bici"]])(
    "be valid when input is %p",
    (input) => {
      const result = isValid(input);

      expect(result).toBeTruthy();
    }
  );

  test.each([
    ["() bici"],
    ["(()) bici"],
    ["(peluche {) bici"],
    ["bici (balón bici coche"],
    ["bici coche (balón bici coche"],
    ["peluche (bici [coche) bici coche balón"],
  ])("be not valid when input is %p", (input) => {
    const result = isValid(input);

    expect(result).toBeFalsy();
  });
});
