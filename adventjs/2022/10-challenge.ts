function checkJump(heights: number[]) {
  const maxIndex = heights.findIndex((x) => x === Math.max(...heights));

  const up = heights.slice(0, maxIndex);
  const down = heights.slice(maxIndex + 1);

  return (
    up.length > 0 &&
    up.every((x, index) => up[index + 1] == null || x <= up[index + 1]) &&
    down.length > 0 &&
    down.every((x, index) => down[index + 1] == null || x >= down[index + 1])
  );
}

// true
checkJump([1, 3, 8, 5, 2]); //?

false;
checkJump([1, 7, 3, 5]); //?
