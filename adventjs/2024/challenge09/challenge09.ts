type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  const nextMovToResult: Record<string, Result> = {
    "·": "none",
    o: "crash",
    "*": "eat",
    undefined: "crash",
  };
  
  return board.reduce<Result>((prev, row, posX) => {
    const posY = row.indexOf("@");
    if (posY < 0) return prev;

    const nextMov = {
      U: board[posX - 1]?.[posY],
      D: board[posX + 1]?.[posY],
      L: board[posX]?.[posY - 1],
      R: board[posX]?.[posY + 1],
    }[mov];

    return nextMovToResult[nextMov];
  }, "none");
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
