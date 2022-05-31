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

  it("should analysis a text with two repeat words", () => {
    processor.analyse("I I");

    expect(processor.getTop10()).toEqual(["I"]);
    expect(processor.getTotalWords()).toEqual(2);
  });
});
