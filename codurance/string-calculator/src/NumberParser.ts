export interface INumberParser {
  parse(input: string): number[];
}

export class NumberParser implements INumberParser {
  private readonly delimiter = "//";
  private readonly simpleSeparatorPattern = /\/\/(.)/;
  private readonly multipleSeparatorPattern = /\/\/(\[.*?\])(\[.*?\])*/;

  public parse(input: string): number[] {
    const separators = [",", "\n"];

    if (input.startsWith(this.delimiter)) {
      const [_, ...customSeparators] = this.multipleSeparatorPattern.test(input)
        ? input.match(this.multipleSeparatorPattern)
        : input.match(this.simpleSeparatorPattern);
      separators.push(...customSeparators);
    }

    const separatorPattern = new RegExp(separators.join("|"));
    return input.split(separatorPattern).map(Number).filter(Number);
  }
}
