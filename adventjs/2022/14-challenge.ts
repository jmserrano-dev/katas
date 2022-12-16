function getOptimalPath(path: number[][]): number {
  const [result] = path.reduceRight((previous, current) => {
    return current.map((value, index) => {
      return value + Math.min(previous[index], previous[index + 1]);
    });
  });

  return result;
}

// 1 = 1
getOptimalPath([[1]]); //?

// 0 -> 2 = 2
getOptimalPath([[0], [2, 3]]); //?

// 0 -> 4 -> 1 = 5
getOptimalPath([[0], [3, 4], [9, 8, 1]]); //?

// 1 -> 1 -> 5 -> 1 = 8
getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]); //?
