import { NumberParser } from "../src/NumberParser";
import { StringCalculator } from "../src/StringCalculator";
import { NegativesNotAllowedException } from "../src/exceptions/NegativesNotAllowedException";

describe("String calculator should", () => {
  const numberParser = new NumberParser();
  const subject = new StringCalculator(numberParser);

  test.each([
    [0, ""],
    [4, "4"],
    [8, "8"],
    [3, "1,2"],
    [45, "1,2,3,4,5,6,7,8,9"],
  ])("return %p when input is %p", (expected, input) => {
    const result = subject.add(input);
    expect(result).toBe(expected);
  });

  it("allow newline as separator", () => {
    const input = "1\n2,3";

    const result = subject.add(input);

    expect(result).toBe(6);
  });

  it("allow custom separators", () => {
    const input = "//;\n1;2";

    const result = subject.add(input);

    expect(result).toBe(3);
  });

  it("throw an exception when input contains negatives", () => {
    const input = "1,-2,-3";

    const action = () => subject.add(input);

    expect(action).toThrow(NegativesNotAllowedException);
  });

  it("ignore numbers bigger then 1000", () => {
    const input = "1001, 2";

    const result = subject.add(input);

    expect(result).toBe(2);
  });

  it("allow arbitrary-length separators", () => {
    const input = "//[***]\n1***2***3";

    const result = subject.add(input);

    expect(result).toBe(6);
  });

  it("allow multiple single-length separators", () => {
    const input = "//[*][%]\n1*2%3";

    const result = subject.add(input);

    expect(result).toBe(6);
  });

  it("allow multiple longer-lenght separators", () => {
    const input = "//[foo][bar]\n1foo2bar3";

    const result = subject.add(input);

    expect(result).toBe(6);
  });
});
