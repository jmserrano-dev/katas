function revealSabotage(store: string[][]) {
  const rows = store.length;
  const columns = store[0].length;

  const result: string[][] = Array.from({ length: rows }).map((_) =>
    Array.from<string>({ length: columns }).fill(" ")
  );

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const currentItem = store[rowIndex][columnIndex];

      const sabotagedToys = {
        "*": () => "*",
        " ": () => {
          return (
            store
              .slice(rowIndex - 1 < 0 ? 0 : rowIndex - 1, rowIndex + 2)
              .flatMap((x) =>
                x.slice(
                  columnIndex - 1 < 0 ? 0 : columnIndex - 1,
                  columnIndex + 2
                )
              )
              .filter((x) => x === "*").length || " "
          );
        },
      }[currentItem]();

      result[rowIndex][columnIndex] = String(sabotagedToys);
    }
  }

  return result;
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store)); //?
/* Debería mostrar:
  [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
  ]
  */
