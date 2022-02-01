import { IOperation } from "./IOperation";

export class Sum implements IOperation {
  constructor() {}

  public getOperator(): string {
    return "+";
  }

  public calculate(x: number, y: number): number {
    return x + y;
  }

  public getPriority(): number {
    return 1;
  }
}
