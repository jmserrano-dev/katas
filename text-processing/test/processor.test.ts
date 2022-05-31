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

    expect(processor.getTop10()).toEqual(["I"]);
    expect(processor.getTotalWords()).toEqual(1);
  });

  it("should analysis a text with two words", () => {
    processor.analyse("I love");

    expect(processor.getTop10()).toEqual(["I", "love"]);
    expect(processor.getTotalWords()).toEqual(2);
  });

  it("should analysis a text with two repeated words", () => {
    processor.analyse("I I");

    expect(processor.getTop10()).toEqual(["I"]);
    expect(processor.getTotalWords()).toEqual(2);
  });

  it("should analysis a text with multiple repetitions", () => {
    processor.analyse("Hello Bye Bye Hello Hello");

    expect(processor.getTop10()).toEqual(["Hello", "Bye"]);
    expect(processor.getTotalWords()).toEqual(5);
  });

  it("should analysis a text with multiple repetitions unsorted", () => {
    processor.analyse("Bye Bye Hello Hello Hello");

    expect(processor.getTop10()).toEqual(["Hello", "Bye"]);
    expect(processor.getTotalWords()).toEqual(5);
  });

  it("should analysis a text in case insensitive", () => {
    processor.analyse("bye ByE Hello hEllo heLLo");

    expect(processor.getTop10()).toEqual(["hello", "bye"]);
    expect(processor.getTotalWords()).toEqual(5);
  });
});
