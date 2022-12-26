type Maze = string[][];

type Position = [number, number];

function canExit(maze: Maze) {
  const getStart = (maze: Maze): Position => {
    const numberOfColumns = maze[0].length;
    const position = maze.flat().findIndex((x) => x === "S");
    return [Math.floor(position / numberOfColumns), position % numberOfColumns];
  };

  const can = (maze: Maze, [x, y]: Position) => {
    const numberOfRows = maze.length;
    const numberOfColumns = maze[0].length;

    return (
      x >= 0 &&
      x < numberOfRows &&
      y >= 0 &&
      y < numberOfColumns &&
      ["S", " ", "E"].includes(maze[x][y])
    );
  };

  const find = (maze: Maze, [x, y]: Position) => {
    if (can(maze, [x, y])) {
      if (maze[x][y] === "E") return true;

      maze[x][y] = "*";

      if (find(maze, [x + 1, y])) return true;
      if (find(maze, [x - 1, y])) return true;
      if (find(maze, [x, y + 1])) return true;
      if (find(maze, [x, y - 1])) return true;
    }

    return false;
  };

  return find(maze, getStart(maze));
}

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]
// -> true
canExit([
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]); //?

// No hay manera de llegar de [0, 4] a [4, 4]
// -> false
canExit([
  [" ", " ", "W", "W", "S"],
  [" ", " ", " ", "W", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]); //?
