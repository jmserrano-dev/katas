import { LeapYearCalculator } from "../src/LeapYearCalculator";

describe("Leap year calculator should", () => {
  test.each([
    [false, 1997],
    [true, 1996],
    [true, 1600],
    [false, 1800],
  ])("return %p when input is %p", (expected, input) => {
    const subject = new LeapYearCalculator();

    const result = subject.calculate(input);

    expect(result).toBe(expected);
  });
});
