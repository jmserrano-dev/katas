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
});
