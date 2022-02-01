import learn from "../src/19-challenge";

describe("Learn should", () => {
  test.each([
    [[0, 2], 10, [2, 3, 8, 1, 4]],
    [[1, 2], 15, [2, 10, 4, 1]],
    [[0, 1], 25, [10, 15, 20, 5]],
    [[1, 2], 8, [8, 2, 1]],
    [[3, 4], 8, [8, 2, 1, 4, 3]],
    [null, 4, [10, 14, 20]],
    [null, 5, [5, 5, 5]],
  ])(
    "return %p when the time for coures is %p and available courses are %p",
    (expected, time, courses) => {
      const selectedCourses = learn(time, courses);

      expect(selectedCourses).toStrictEqual(expected);
    }
  );
});
