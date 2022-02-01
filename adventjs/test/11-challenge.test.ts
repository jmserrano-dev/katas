import shouldBuyFidelity from "../src/11-challenge";

describe("Buy fidelity should", () => {
  test.each([
    [false, 1],
    [false, 3],
    [true, 100],
  ])("return %p when number of tickets are %p", (expected, times) => {
    const buyFidelity = shouldBuyFidelity(times);

    expect(buyFidelity).toBe(expected);
  });
});
