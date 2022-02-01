import { IOperation } from "./IOperation";

export class Divide implements IOperation {
  public getOperator(): string {
    return "/";
  }

  public calculate(x: number, y: number): number {
    return x / y;
  }

  public getPriority(): number {
    return 2;
  }
}
