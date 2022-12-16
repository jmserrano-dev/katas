export class Enum {
  public static getLength(obj: any) {
    return Object.keys(obj).filter((key) => typeof obj[key] === "string")
      .length;
  }
}
