import daysToXmas from "../src/5-challenge";

describe("Days to xmas should", () => {
  test.each([
    [24, new Date("Dec 1, 2021")],
    [23, new Date("Dec 2, 2021")],
    [1, new Date("Dec 24, 2021 00:00:01")],
    [1, new Date("Dec 24, 2021 23:59:59")],
    [5, new Date("December 20, 2021 03:24:00")],
  ])("return %p days when the date is %p", (expected, date) => {
    const days = daysToXmas(date);

    expect(expected).toBe(days);
  });
});
