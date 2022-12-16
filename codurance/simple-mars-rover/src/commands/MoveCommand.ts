import { Command } from "./Command";
import { Position } from "../Position";
import { Compass, Direction } from "../Direction";

export class MoveCommand implements Command {
  constructor(private position: Position, private direction: Direction) {}

  public execute(): void {
    const moveTo = {
      [Compass.N]: () => this.position.moveUp(),
      [Compass.E]: () => this.position.moveLeft(),
      [Compass.S]: () => this.position.moveDown(),
      [Compass.W]: () => this.position.moveRight(),
    };

    moveTo[this.direction.getCompass()]();
  }
}
