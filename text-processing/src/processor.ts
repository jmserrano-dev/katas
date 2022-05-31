export class Processor {
  private top10: string[] = [];
  private totalWords: number = 0;

  public analyse(text: string) {
    const words = text.split(" ").filter(Boolean);

    const distinctWords = words.reduce((previous, current) => {
      return previous.includes(current) ? previous : [...previous, current];
    }, []);

    this.top10 = [...distinctWords];
    this.totalWords = words.length;
  }

  public getTop10() {
    return this.top10;
  }

  public getTotalWords() {
    return this.totalWords;
  }
}
