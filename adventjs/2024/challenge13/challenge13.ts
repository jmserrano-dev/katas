type Position = [number, number];

function isRobotBack(moves: string): true | Position {
  const commands = moves.split("");

  const invertCommand: Record<string, string> = {
    R: "L",
    L: "R",
    U: "D",
    D: "U",
  };

  const execute: Record<string, (_: Position) => Position> = {
    U: ([x, y]: Position) => [x, y + 1],
    D: ([x, y]: Position) => [x, y - 1],
    L: ([x, y]: Position) => [x - 1, y],
    R: ([x, y]: Position) => [x + 1, y],
  };

  let index = 0;
  const finalCommands: string[] = [];

  while (index < commands.length) {
    const currentCommand = commands[index];
    const nextCommand = commands[index + 1];

    switch (currentCommand) {
      case "*":
        finalCommands.push(nextCommand, nextCommand);
        index += 2;
        break;
      case "!":
        finalCommands.push(invertCommand[nextCommand]);
        index += 2;
        break;
      case "?":
        if (finalCommands.includes(nextCommand)) {
          index += 2;
        } else {
          index++;
        }
        break;
      default:
        finalCommands.push(currentCommand);
        index++;
    }
  }

  const [endX, endY] = finalCommands.reduce<Position>(
    (position, command) => execute[command](position),
    [0, 0]
  );

  return endX === 0 && endY === 0 ? true : [endX, endY];
}

isRobotBack("R"); // [1, 0]
isRobotBack("RL"); // true
isRobotBack("RLUD"); // true
isRobotBack("*RU"); // [2, 1]
isRobotBack("R*U"); // [1, 2]
isRobotBack("LLL!R"); // [-4, 0]
isRobotBack("R?R"); // [1, 0]
isRobotBack("U?D"); // true
isRobotBack("R!L"); // [2,0]
isRobotBack("U!D"); // [0,2]
isRobotBack("R?L"); // true
isRobotBack("U?U"); // [0,1]
isRobotBack("*U?U"); // [0,2]
isRobotBack("U?D?U"); // true

// Ejemplos paso a paso:
isRobotBack("R!U?U"); // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack("UU!U?D"); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
