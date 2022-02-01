import sumPairs from "../src/6-challenge";

describe("Sum pairs should", () => {
  test.each([
    [[3, 7], [3, 5, 7, 2], 10],
    [null, [-3, -2, 7, -5], 10],
    [[2, 2], [2, 2, 3, 1], 4],
    [[6, 2], [6, 7, 1, 2], 8],
    [[1, 5], [0, 2, 2, 3, -1, 1, 5], 6],
  ])(
    "return %p when numbers are %p and the sum is %p",
    (expected, numbers, result) => {
      const pair = sumPairs(numbers, result);

      expect(pair).toStrictEqual(expected);
    }
  );
});
