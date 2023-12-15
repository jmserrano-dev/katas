function autonomousDrive(store: string[], movements: string[]) {
  let yIndex = store.findIndex((x) => x.includes("!")); //?
  let xIndex = store[yIndex].indexOf("!"); //?

  return movements
    .reduce(
      (previous, command) => {
        return {
          R: () => {
            if (previous[yIndex]?.[xIndex + 1] === ".") {
              previous[yIndex][xIndex] = ".";
              previous[yIndex][xIndex + 1] = "!";
              xIndex += 1;
            }
            return previous;
          },
          L: () => {
            if (previous[yIndex]?.[xIndex - 1] === ".") {
              previous[yIndex][xIndex] = ".";
              previous[yIndex][xIndex - 1] = "!";
              xIndex -= 1;
            }
            return previous;
          },
          U: () => {
            if (previous[yIndex - 1]?.[xIndex] === ".") {
              previous[yIndex][xIndex] = ".";
              previous[yIndex - 1][xIndex] = "!";
              yIndex -= 1;
            }
            return previous;
          },
          D: () => {
            if (previous[yIndex + 1]?.[xIndex] === ".") {
              previous[yIndex][xIndex] = ".";
              previous[yIndex + 1][xIndex] = "!";
              yIndex += 1;
            }
            return previous;
          },
        }[command]();
      },
      store.map((x) => x.split(""))
    )
    .map((x) => x.join(""));
}

const store = ["..!....", "...*.*."];
const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements); //?
/*
[
  ".......",
  "...*!*."
]
*/
