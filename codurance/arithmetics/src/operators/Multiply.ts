import { IOperation } from "./IOperation";

export class Multiply implements IOperation {
  public getOperator(): string {
    return "*";
  }

  public calculate(x: number, y: number): number {
    return x * y;
  }

  public getPriority(): number {
    return 2;
  }
}
