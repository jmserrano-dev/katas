export class Position {
  private x: number;
  private y: number;

  private static STEP = 1;
  private static PLATEAU_LENGTH = 10;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  public moveUp() {
    this.move({ offsetY: Position.STEP });
  }

  public moveLeft() {
    this.move({ offsetX: Position.STEP });
  }

  public moveDown() {
    this.move({ offsetY: -Position.STEP });
  }

  public moveRight() {
    this.move({ offsetX: -Position.STEP });
  }

  private move({
    offsetX = 0,
    offsetY = 0,
  }: {
    offsetX?: number;
    offsetY?: number;
  }) {
    this.x = Math.abs(
      (this.x + Position.PLATEAU_LENGTH + offsetX) % Position.PLATEAU_LENGTH
    );
    this.y = Math.abs(
      (this.y + Position.PLATEAU_LENGTH + offsetY) % Position.PLATEAU_LENGTH
    );
  }

  public toString(): string {
    return [this.x, this.y].join(":");
  }
}
