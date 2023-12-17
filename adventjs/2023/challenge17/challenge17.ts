function optimizeIntervals(intervals: Array<[number, number]>) {
  return intervals
    .sort(([startX], [startY]) => startX - startY)
    .reduce((previous, current) => {
      if (previous.length === 0) return [current];

      const last = previous.pop()!;

      return current[0] <= last[1]
        ? [...previous, [last[0], last[1] > current[1] ? last[1] : current[1]]]
        : [...previous, last, current];
    }, []);
}

// [[2, 8]]
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); //?

// [[1, 6], [8, 10]]
optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); //?

// // [[1, 2], [3, 4], [5, 6]]
optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); //?
