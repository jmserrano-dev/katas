import { Processor } from "../src/processor";

describe("Processor", () => {
  it("should analysis a text empty", () => {
    const { top10, totalWords } = new Processor().analysis("");

    expect(top10).toEqual([]);
    expect(totalWords).toEqual(0);
  });
});
