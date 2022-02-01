import { Position } from "./Position";
import { Direction } from "./Direction";
import { Command } from "./commands/Command";
import { MoveCommand } from "./commands/MoveCommand";
import { TurnCommand } from "./commands/TurnCommand";

export class MarsRover {
  private position: Position;
  private direction: Direction;

  constructor() {
    this.position = new Position();
    this.direction = new Direction();
  }

  public execute(input: string): string {
    const inputCommands = input.split("");

    const commands: Command[] = inputCommands.map((inputCommand) => {
      return {
        ["M"]: () => new MoveCommand(this.position, this.direction),
        ["L"]: () => new TurnCommand("L", this.direction),
        ["R"]: () => new TurnCommand("R", this.direction),
      }[inputCommand]();
    });

    commands.forEach((command) => command.execute());

    return `${this.position}:${this.direction}`;
  }
}
