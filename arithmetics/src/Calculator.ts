import { Ensure } from "./shared/Ensure";
import { OperationsService } from "./operators";
import { InvalidRecordException } from "./exceptions/InvalidRecordException";

export class Calculator {
  private numbersStack: number[];
  private operatorsStack: string[];
  private operationsService: OperationsService;

  constructor() {
    this.numbersStack = [];
    this.operatorsStack = [];
    this.operationsService = new OperationsService();
  }

  public calculate(input: string): number {
    const tokens = this.tokenize(input);

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (!this.operationsService.isOperator(token)) {
        this.numbersStack.push(Number(token));
        continue;
      }

      if (
        this.operationsService.isAFinalParenthesis(token) ||
        this.operationsService.hasLessOrEqualPriority(
          token,
          this.getLastOperatorInserted()
        )
      ) {
        this.solveToBeginningOfLeadingParenthesis();
      }

      this.operationsService.isAFinalParenthesis(token)
        ? this.operatorsStack.pop()
        : this.operatorsStack.push(token);
    }

    Ensure.condition(
      InvalidRecordException,
      () => this.operatorsStack.length === 0
    );

    return this.numbersStack[0] ?? 0;
  }

  private solveToBeginningOfLeadingParenthesis() {
    while (
      !this.operationsService.isAnInitialParenthesis(
        this.getLastOperatorInserted()
      )
    ) {
      const operator = this.operatorsStack.pop();
      const operand2 = this.numbersStack.pop();
      const operand1 = this.numbersStack.pop();

      this.numbersStack.push(
        this.operationsService
          .getOperationBy(operator)
          .calculate(operand1, operand2)
      );
    }
  }

  private getLastOperatorInserted() {
    return this.operatorsStack[this.operatorsStack.length - 1];
  }

  private tokenize(input: string): string[] {
    return input.split("").filter((x) => x != " ");
  }
}
