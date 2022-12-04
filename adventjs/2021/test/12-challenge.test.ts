import getMinJump from "../src/12-challenge";

describe("Get min jump should", () => {
  test.each([
    [4, [5, 3, 6, 7, 9]],
    [7, [2, 4, 6, 8, 10]],
    [4, [1, 2, 3, 5]],
    [2, [3, 7, 5]],
    [2, [9, 5, 1]],
  ])("return %p when the obstacles are %p", (expected, obstacles) => {
    const minJump = getMinJump(obstacles);

    expect(minJump).toBe(expected);
  });
});
