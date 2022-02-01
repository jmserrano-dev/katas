import { Command } from "./Command";
import { Direction } from "../Direction";

export class TurnCommand implements Command {
  constructor(private turn: "L" | "R", private direction: Direction) {}

  public execute(): void {
    const turnTo = {
      ["L"]: () => this.direction.turnLeft(),
      ["R"]: () => this.direction.turnRight(),
    };

    turnTo[this.turn]();
  }
}
