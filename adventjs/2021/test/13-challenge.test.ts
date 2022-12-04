import wrapGifts from "../src/13-challenge";

describe("Wrap grift should", () => {
  test.each([
    [[], []],
    [
      ["****", "*📷*", "*⚽️*", "****"],
      ["📷", "⚽️"],
    ],
    [
      ["******", "*🏈🎸*", "*🎮🧸*", "******"],
      ["🏈🎸", "🎮🧸"],
    ],
    [["****", "*📷*", "****"], ["📷"]],
  ])("return %p when the gits are %p", (expected, gifts) => {
    const wrappedGifts = wrapGifts(gifts);

    expect(wrappedGifts).toStrictEqual(expected);
  });
});
