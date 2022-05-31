export class Processor {
  private distinctWords: { [key: string]: number } = {};
  private totalWords: number = 0;

  public analyse(text: string) {
    const words = this.splitIntoWords(text);

    const distinctWords = words.reduce((previous, current) => {
      previous[current] = (previous[current] || 0) + 1;
      return previous;
    }, {});

    this.totalWords = words.length;
    this.distinctWords = distinctWords;
  }

  public getTop10() {
    return Object.entries(this.distinctWords)
      .sort((x, y) => y[1] - x[1])
      .slice(0, 10)
      .map((entry) => entry[0]);
  }

  public getTotalWords() {
    return this.totalWords;
  }

  private splitIntoWords(text: string) {
    return text.split(" ").filter(Boolean);
  }
}
