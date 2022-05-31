export class Processor {
  private top10: string[] = [];
  private totalWords: number = 0;

  public analyse(text: string) {
    if (text === "") {
      this.top10 = [];
      this.totalWords = 0;
    } else {
      this.top10 = [text];
      this.totalWords = 1;
    }
  }

  public getTop10() {
    return this.top10;
  }

  public getTotalWords() {
    return this.totalWords;
  }
}
