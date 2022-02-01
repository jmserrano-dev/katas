import canMouseEat, { Direction } from "../src/25-challenge";

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

describe("Can mouse eat should", () => {
  test.each([
    [false, "up", room],
    [true, "down", room],
    [false, "right", room],
    [false, "left", room],
  ])("return %p when the letter is %p", (expected, direction, room) => {
    const canEat = canMouseEat(direction as Direction, room);

    expect(canEat).toBe(expected);
  });

  test.each([
    [false, "up", room2],
    [false, "down", room2],
    [true, "right", room2],
    [false, "left", room2],
  ])("return %p when the letter is %p", (expected, direction, room) => {
    const canEat = canMouseEat(direction as Direction, room);

    expect(canEat).toBe(expected);
  });
});
