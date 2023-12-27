function travelDistance(map: string) {
  let santaPosition = [0, 0];
  let childrenPositions: Record<string, [number, number]> = {};

  map
    .split("\n")
    .map((x) => x.split(""))
    .forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === "S") {
          santaPosition = [rowIndex, columnIndex];
        } else if (cell !== ".") {
          childrenPositions = {
            ...childrenPositions,
            [cell]: [rowIndex, columnIndex],
          };
        }
      });
    });

  return Object.entries(childrenPositions).reduce((previous, [_, position]) => {
    const kilometers =
      previous +
      Math.abs(santaPosition[0] - position[0]) +
      Math.abs(santaPosition[1] - position[1]);

    santaPosition = position;

    return kilometers;
  }, 0);
}

const map = `.....1....
..S.......
..........
....3.....
......2...`;

// -> 12 km
const result = travelDistance(map); //?
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

// -> 2
const result2 = travelDistance(`..S.1...`); //?
