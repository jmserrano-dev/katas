function drawClock(time: string) {
  const clock: string[][] = Array.from({ length: 7 }).map((_) =>
    Array.from<string>({ length: 17 }).fill(" ")
  );

  const symbolToDisplay = {
    ":": [
      [2, 0],
      [4, 0],
    ],
    "0": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 2],
      [3, 0],
      [3, 2],
      [4, 0],
      [4, 2],
      [5, 0],
      [5, 2],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
    "1": [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ],
    "2": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 0],
      [5, 0],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
    "3": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
    "4": [
      [0, 0],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 2],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ],
    "5": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [2, 0],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
    "6": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [2, 0],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 0],
      [4, 2],
      [5, 0],
      [5, 2],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
    "7": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ],
    "8": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 2],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 0],
      [4, 2],
      [5, 0],
      [5, 2],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
    "9": [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 2],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 0],
      [6, 1],
      [6, 2],
    ],
  };

  const digits = time.split("");

  [0, 4, 8, 10, 14].forEach((offset, index) => {
    symbolToDisplay[digits[index]].forEach(([row, column]) => {
      clock[row][column + offset] = "*";
    });
  });

  return clock;
}

drawClock("01:30"); //?

// [
//     ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
//     ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//     ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//     ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
//     ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//     ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//     ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
// ]