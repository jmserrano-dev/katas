function getStaircasePaths(steps: number, maxJump: number) {
  const solvePaths = (
    currentSteps: number,
    currentPath: number[],
    paths: number[][]
  ) => {
    if (currentSteps < 0) return;

    if (currentSteps === 0) {
      paths.push(currentPath);
      return;
    }

    for (let jump = 1; jump <= maxJump; jump++) {
      solvePaths(currentSteps - jump, [...currentPath, jump], paths);
    }
  };

  const paths = [];
  solvePaths(steps, [], paths);

  return paths;
}

// [[1, 1]]
getStaircasePaths(2, 1); //?

// [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(3, 3); //?

// [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 1); //?

/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
getStaircasePaths(5, 2); //?
