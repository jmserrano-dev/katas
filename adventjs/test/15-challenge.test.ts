import checkSledJump from "../src/15-challenge";

describe("Check sled jump should", () => {
  test.each([
    [true, [1, 2, 3, 2, 1]],
    [true, [0, 1, 0]],
    [true, [0, 3, 2, 1]],
    [true, [0, 1000, 1]],
    [false, [2, 4, 4, 6, 2]],
    [false, [1, 2, 3]],
    [false, [1, 2, 3, 2, 1, 2, 3]],
  ])("return %p when the heights are %p", (expected, heights) => {
    const reindeer = checkSledJump(heights);

    expect(reindeer).toStrictEqual(expected);
  });
});
