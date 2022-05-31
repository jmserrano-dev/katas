import { Processor } from "../src/Processor";

describe("Processor", () => {
  test("should analysis a text empty", () => {
    const processor = new Processor();

    processor.analyse("");

    expect(processor.getTop10()).toEqual([]);
    expect(processor.getTotalWords()).toEqual(0);
  });
});
