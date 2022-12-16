export class Ensure {
  public static condition<R extends Error>(
    exception: new () => R,
    condition: () => boolean
  ): void {
    if (!condition()) throw new exception();
  }
}
