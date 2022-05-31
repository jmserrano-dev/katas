import { Processor } from "../src/Processor";

describe("Processor", () => {
  let processor: Processor;

  beforeEach(() => {
    processor = new Processor();
  });

  it("should analysis a text empty", () => {
    processor.analyse("");

    expect(processor.getTop10()).toEqual([]);
    expect(processor.getTotalWords()).toEqual(0);
  });

  it("should analysis a text with one word", () => {
    processor.analyse("I");

    expect(processor.getTop10()).toEqual(["i"]);
    expect(processor.getTotalWords()).toEqual(1);
  });

  it("should analysis a text with two words", () => {
    processor.analyse("I love");

    expect(processor.getTop10()).toEqual(["i", "love"]);
    expect(processor.getTotalWords()).toEqual(2);
  });

  it("should analysis a text with two repeated words", () => {
    processor.analyse("I I");

    expect(processor.getTop10()).toEqual(["i"]);
    expect(processor.getTotalWords()).toEqual(2);
  });

  it("should analysis a text with multiple repetitions", () => {
    processor.analyse("Hello Bye Bye Hello Hello");

    expect(processor.getTop10()).toEqual(["hello", "bye"]);
    expect(processor.getTotalWords()).toEqual(5);
  });

  it("should analysis a text with multiple repetitions unsorted", () => {
    processor.analyse("Bye Bye Hello Hello Hello");

    expect(processor.getTop10()).toEqual(["hello", "bye"]);
    expect(processor.getTotalWords()).toEqual(5);
  });

  it("should analysis a text in case insensitive", () => {
    processor.analyse("bye ByE Hello hEllo heLLo");

    expect(processor.getTop10()).toEqual(["hello", "bye"]);
    expect(processor.getTotalWords()).toEqual(5);
  });

  it("should analysis a complex text", () => {
    processor.analyse(`Hello, this is an example for you to practice. You should grab
    this text and make it as your test case.`);

    expect(processor.getTop10()).toEqual([
      "this",
      "you",
      "hello",
      "is",
      "an",
      "example",
      "for",
      "to",
      "practice",
      "should",
    ]);

    expect(processor.getTotalWords()).toEqual(21);
  });
});
