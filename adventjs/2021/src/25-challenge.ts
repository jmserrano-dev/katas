// https://adventjs.dev/challenges/25

type Room = string[][];
type Position = [number, number];
export type Direction = "up" | "down" | "right" | "left";

export default function canMouseEat(direction: Direction, room: Room) {
  const mousePosition = getMousePosition(room);
  const foodPosition = getPosition(direction, mousePosition);

  return thereIsFood(foodPosition, room);
}

const getDimensions = (room: Room) => {
  return { rows: room.length, columns: room?.[0]?.length ?? 0 };
};

const getMousePosition = (room: Room): Position => {
  const MOUSE = "m";

  const { columns } = getDimensions(room);
  const index = room.flat().findIndex((x) => x === MOUSE);

  return [Math.floor(index / columns), index % columns];
};

const getPosition = (
  direction: Direction,
  mousePosition: Position
): Position => {
  const OFFSET: { [key in Direction]: Position } = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  const [x, y] = mousePosition;
  const [offsetX, offsetY] = OFFSET[direction];

  return [x + offsetX, y + offsetY];
};

const thereIsFood = (foodPosition: Position, room: Room): boolean => {
  const FOOD = "*";
  const [x, y] = foodPosition;
  const { rows, columns } = getDimensions(room);

  if (x < 0 || y < 0 || x >= columns || y >= rows) return false;

  return room[x][y] === FOOD;
};
