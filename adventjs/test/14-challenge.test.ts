import missingReindeer from "../src/14-challenge";

describe("Missing reindeer should", () => {
  test.each([
    [1, [0, 2, 3]],
    [4, [5, 6, 1, 2, 3, 7, 0]],
    [2, [0, 1]],
    [2, [3, 0, 1]],
    [8, [9, 2, 3, 5, 6, 4, 7, 0, 1]],
    [1, [0]],
    [12, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  ])("return %p when the ids are %p", (expected, ids) => {
    const reindeer = missingReindeer(ids);

    expect(reindeer).toStrictEqual(expected);
  });
});
