export class Processor {
  private top10: string[] = [];
  private totalWords: number = 0;

  public analyse(text: string) {
    const words = text.split(" ").filter(Boolean);

    this.top10 = [...words];
    this.totalWords = words.length;
  }

  public getTop10() {
    return this.top10;
  }

  public getTotalWords() {
    return this.totalWords;
  }
}
