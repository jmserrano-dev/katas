import countDecorations, { Tree } from "../src/22-challenge";

describe("Count decotations should", () => {
  it("return number of ornaments when the tree is small", () => {
    const tree = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    };

    const numberOfOrnaments = countDecorations(tree);

    expect(numberOfOrnaments).toBe(6);
  });

  it("return number of ornaments when the tree is big", () => {
    const tree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };

    const numberOfOrnaments = countDecorations(tree);

    expect(numberOfOrnaments).toBe(28);
  });
});
