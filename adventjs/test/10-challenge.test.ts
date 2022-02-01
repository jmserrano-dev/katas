import getCoins from "../src/10-challenge";

describe("Get coins should", () => {
  test.each([
    [[1, 0, 0, 0, 0, 1], 51],
    [[1, 1, 0, 0, 0, 0], 3],
    [[0, 0, 1, 0, 0, 0], 5],
    [[1, 0, 1, 1, 0, 0], 16],
    [[0, 0, 0, 0, 0, 2], 100],
  ])("return %p when change is %p", (expected, change) => {
    const coins = getCoins(change);

    expect(coins).toStrictEqual(expected);
  });
});
