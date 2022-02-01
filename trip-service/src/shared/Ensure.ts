export class Ensure {
  public static isNotNullOrUndefined<T, R extends Error>(
    exception: new () => R,
    obj: T
  ): T {
    if (obj == null) throw new exception();

    return obj;
  }
}
