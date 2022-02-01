import { Calculator } from "../src/Calculator";
import { InvalidRecordException } from "../src/exceptions/InvalidRecordException";

describe("Calculator should", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test.each([
    [0, "()"],
    [0, "((()()))"],
    [1, "( 1 )"],
    [3, "( 1 + 2 )"],
    [6, "( 2 * 3 )"],
    [7, "( 1 + ( 2 * 3 ) )"],
    [101, "( 1 + ( ( 2 + 3 ) * (4 * 5) ) )"],
    [-165, "( 5 * ( 4 * ( 3 * ( 2 * ( 1 * 9 ) / 8 - 7 ) + 6 ) ) )"],
  ])("return %p when input is %p", (expected, input) => {
    const result = calculator.calculate(input);

    expect(result).toBe(expected);
  });

  it("throw error when input doesn't start and end with parentheses", () => {
    const input = "3 + ( 2 * 1 )";

    const action = () => calculator.calculate(input);

    expect(action).toThrow(InvalidRecordException);
  });
});
