function detectBombs(grid: boolean[][]): number[][] {
  return grid.map((row, rowIndex) => {
    return row.map((_, columnIndex) => {
      return [
        grid[rowIndex + 1]?.[columnIndex],
        grid[rowIndex - 1]?.[columnIndex],
        grid[rowIndex]?.[columnIndex + 1],
        grid[rowIndex]?.[columnIndex - 1],
        grid[rowIndex + 1]?.[columnIndex + 1],
        grid[rowIndex + 1]?.[columnIndex - 1],
        grid[rowIndex - 1]?.[columnIndex - 1],
        grid[rowIndex - 1]?.[columnIndex + 1],
      ].reduce((prev, current) => {
        return current == true ? prev + 1 : prev;
      }, 0);
    });
  });
}

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false],
]);
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true],
]);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
