import checkIsSameTree from "../src/24-challenge";

describe("Check is same tree should", () => {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  };

  const tree2 = {
    value: 1,
    left: {
      value: 3,
      left: { value: 2, left: null, right: null },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: { value: 4, left: null, right: null },
    },
  };

  it("return true when trees are same", () => {
    const isSame = checkIsSameTree(tree, tree);

    expect(isSame).toBeTruthy();
  });

  it("return false when trees are different", () => {
    const isSame = checkIsSameTree(tree, tree2);

    expect(isSame).toBeFalsy();
  });
});
