export interface IOperation {
  getPriority(): number;
  getOperator(): string;
  calculate(x: number, y: number): number;
}
