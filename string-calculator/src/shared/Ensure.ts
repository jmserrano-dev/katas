export class Ensure {
  public static notContainsNegativeNumbers<T extends number[], R extends Error>(
    exception: new () => R,
    array: T
  ): T {
    if (array.some((x) => x < 0)) throw new exception();

    return array;
  }
}
