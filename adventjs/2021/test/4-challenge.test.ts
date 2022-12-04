import createXmasTree from "../src/4-challenge";

describe("XmasTree should", () => {
  it("render a tree with height 3", () => {
    const tree = createXmasTree(3);

    expect(tree).toBe("__*__\n_***_\n*****\n__#__\n__#__");
  });

  it("render a tree with height 5", () => {
    const tree = createXmasTree(5);

    expect(tree).toBe(
      "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____"
    );
  });
});
