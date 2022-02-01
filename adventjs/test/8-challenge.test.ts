import maxProfit from "../src/8-challenge";

describe("Max profit should", () => {
  test.each([
    [16, [39, 18, 29, 25, 34, 32, 5]],
    [60, [10, 20, 30, 40, 50, 60, 70]],
    [-1, [18, 15, 12, 11, 9, 7]],
    [-1, [3, 3, 3, 3, 3]],
  ])("return %p when prices are %p", (expected, prices) => {
    const max = maxProfit(prices);

    expect(max).toBe(expected);
  });
});
