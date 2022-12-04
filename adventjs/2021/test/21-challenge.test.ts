import canCarry from "../src/21-challenge";

describe("Can carry should", () => {
  test.each([
    [
      false,
      4,
      [
        [2, 5, 8],
        [3, 6, 10],
      ],
    ],
    [
      true,
      3,
      [
        [1, 1, 5],
        [2, 2, 10],
      ],
    ],
    [
      true,
      3,
      [
        [2, 1, 5],
        [3, 5, 7],
      ],
    ],
    [
      true,
      4,
      [
        [2, 3, 8],
        [2, 5, 7],
      ],
    ],
    [false, 1, [[2, 3, 8]]],
    [
      false,
      2,
      [
        [1, 2, 4],
        [2, 3, 8],
      ],
    ],
  ])(
    "return %p when the capacity is %p and trip is %p",
    (expected, capacity, trip) => {
      const tripIsPosible = canCarry(capacity, trip);

      expect(tripIsPosible).toStrictEqual(expected);
    }
  );
});
