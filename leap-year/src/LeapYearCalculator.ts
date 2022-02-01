import { Utils } from "./shared/Utils";

export class LeapYearCalculator {
  public calculate(year: number): boolean {
    const yearIsMultipleOf = Utils.isMultiple(year);

    return (
      (yearIsMultipleOf(4) && !yearIsMultipleOf(100)) ||
      (yearIsMultipleOf(4) && yearIsMultipleOf(400))
    );
  }
}
