function distributeGifts(weights: Array<Array<number | null>>) {
  const rows = weights.length;
  const columns = weights[0].length;

  const result: number[][] = Array.from({ length: rows }).map((_) =>
    Array.from<number>({ length: columns }).fill(0)
  );

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const elements = [
        weights[rowIndex]?.[columnIndex - 1],
        weights[rowIndex]?.[columnIndex + 1],
        weights[rowIndex - 1]?.[columnIndex],
        weights[rowIndex + 1]?.[columnIndex],
        weights[rowIndex][columnIndex],
      ].filter((x) => x != null);

      const sum = elements.reduce((acc, x) => acc! + x!, 0)!;

      result[rowIndex][columnIndex] = Math.round(sum / elements.length);
    }
  }

  return result;
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

distributeGifts(input); //?

// Resultado final tras redondear con Math.round()
// [
//   [5, 3, 3],
//   [6, 5, 3],
//   [7, 6, 4],
// ];
