import groupBy from "../src/9-challenge";

describe("Group by should", () => {
  it("group a collection of numbers by math functions", () => {
    const result = groupBy([6.1, 4.2, 6.3], Math.floor);

    expect(result).toStrictEqual({ 6: [6.1, 6.3], 4: [4.2] });
  });

  it("group a collection of strings by string property", () => {
    const result = groupBy(["one", "two", "three"], "length");

    expect(result).toStrictEqual({ 3: ["one", "two"], 5: ["three"] });
  });

  it("group a collection of object by property key", () => {
    const result = groupBy([{ age: 23 }, { age: 24 }], "age");

    expect(result).toStrictEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] });
  });

  it("group a collection of tics by time function", () => {
    const result = groupBy([1397639141184, 1363223700000], (timestamp) =>
      new Date(timestamp).getFullYear()
    );

    expect(result).toStrictEqual({
      2013: [1363223700000],
      2014: [1397639141184],
    });
  });

  it("group a collection of object by property", () => {
    const result = groupBy(
      [
        { title: "JavaScript: The Good Parts", rating: 8 },
        { title: "Aprendiendo Git", rating: 10 },
        { title: "Clean Code", rating: 9 },
      ],
      "rating"
    );

    expect(result).toStrictEqual({
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }],
    });
  });
});
