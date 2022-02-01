import { IOperation } from "./IOperation";

export class Subtract implements IOperation {
  public getOperator(): string {
    return "-";
  }

  public calculate(x: number, y: number): number {
    return x - y;
  }

  public getPriority(): number {
    return 1;
  }
}
