import { Processor } from "../src/Processor";

describe("Processor", () => {
  it("should analysis a text empty", () => {
    const processor = new Processor();

    processor.analyse("");

    expect(processor.getTop10()).toEqual([]);
    expect(processor.getTotalWords()).toEqual(0);
  });

  it("should analysis a text with one word", () => {
    const processor = new Processor();

    processor.analyse("I");

    expect(processor.getTop10()).toEqual(["I"]);
    expect(processor.getTotalWords()).toEqual(1);
  });
});
