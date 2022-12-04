import decodeNumber from "../src/16-challenge";

describe("Decode number should", () => {
  test.each([
    [3, "..."],
    [4, ".,"],
    [6, ",."],
    [8, ",..."],
    [107, ".........!"],
    [49, ".;"],
    [5, "..,"],
    [95, "..,!"],
    [49, ".;!"],
    [300, "!!!"],
    [50, ";!"],
    [NaN, ";.W"],
  ])("return %p when the symbols are %p", (expected, symbols) => {
    const reindeer = decodeNumber(symbols);

    expect(reindeer).toStrictEqual(expected);
  });
});
