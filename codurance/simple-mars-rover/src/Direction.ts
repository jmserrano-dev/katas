import { Enum } from "./shared/Enum";

export enum Compass {
  "N",
  "E",
  "S",
  "W",
}

export class Direction {
  private compass: Compass;

  private static NUMBER_OF_DIRECTIONS = Enum.getLength(Compass);

  constructor() {
    this.compass = Compass.N;
  }

  public turnLeft() {
    this.turn(-1);
  }

  public turnRight() {
    this.turn(1);
  }

  private turn(offset: number) {
    this.compass = Math.abs(
      (this.compass + Direction.NUMBER_OF_DIRECTIONS + offset) %
        Direction.NUMBER_OF_DIRECTIONS
    );
  }

  public getCompass(): Compass {
    return this.compass;
  }

  public toString(): string {
    return Compass[this.compass];
  }
}
