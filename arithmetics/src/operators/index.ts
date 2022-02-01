import { Sum } from "./Sum";
import { Divide } from "./Divide";
import { Subtract } from "./Subtract";
import { Multiply } from "./Multiply";
import { IOperation } from "./IOperation";

export class OperationsService {
  private operators: string[];
  private operations: IOperation[];
  private finalParenthesis = ")";
  private initialParenthesis = "(";

  constructor() {
    this.operations = [new Sum(), new Subtract(), new Multiply(), new Divide()];

    this.operators = [
      this.initialParenthesis,
      this.finalParenthesis,
      ...this.operations.map((x) => x.getOperator()),
    ];
  }

  public hasLessOrEqualPriority(operatorX: string, operatorY: string) {
    return (
      !this.isAnInitialParenthesis(operatorX) &&
      !this.isAnInitialParenthesis(operatorY) &&
      this.getOperationBy(operatorX)?.getPriority() <=
        this.getOperationBy(operatorY)?.getPriority()
    );
  }

  public isAnInitialParenthesis(operator: string) {
    return operator === this.initialParenthesis;
  }

  public isAFinalParenthesis(operator: string) {
    return operator === this.finalParenthesis;
  }

  public isOperator(operator: string) {
    return this.operators.includes(operator);
  }

  public getOperationBy(operator: string) {
    return this.operations.find((x) => x.getOperator() === operator);
  }
}
