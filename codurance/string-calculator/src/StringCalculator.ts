import { Ensure } from "./shared/Ensure";
import { INumberParser } from "./NumberParser";
import { NegativesNotAllowedException } from "./exceptions/NegativesNotAllowedException";

export class StringCalculator {
  constructor(private numberParser: INumberParser) {}

  public add(input: string): number {
    const numbers = this.numberParser
      .parse(input)
      .filter(this.numberLessThanAThousand);

    Ensure.notContainsNegativeNumbers(NegativesNotAllowedException, numbers);

    return numbers.reduce((previous, current) => current + previous, 0);
  }

  private numberLessThanAThousand(num: number): boolean {
    return num <= 1000;
  }
}
