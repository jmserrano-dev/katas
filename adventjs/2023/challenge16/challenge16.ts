function transformTree(tree: Array<number | null>) {
  const createNode = (nodeIndex: number) => {
    if (nodeIndex >= tree.length || tree[nodeIndex] === null) {
      return null;
    }

    return {
      value: tree[nodeIndex],
      left: createNode(2 * nodeIndex + 1),
      right: createNode(2 * nodeIndex + 2),
    };
  };

  return createNode(0);
}

transformTree([3, 1, 0, 8, 12, null, 1]); //?
