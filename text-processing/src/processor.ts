type Word = string;

type WordDictionary = { [key: Word]: number };

export class Processor {
  private totalWords: number = 0;
  private dictionary: WordDictionary = {};

  public analyse(text: string) {
    const words = this.splitIntoWords(text);
    const dictionary = this.getWordDictionary(words);

    this.dictionary = dictionary;
    this.totalWords = words.length;
  }

  public getTop10() {
    return Object.entries(this.dictionary)
      .sort((x, y) => y[1] - x[1])
      .slice(0, 10)
      .map(([word]) => word);
  }

  public getTotalWords() {
    return this.totalWords;
  }

  private splitIntoWords(text: string): Word[] {
    return text.split(" ").filter(Boolean);
  }

  private getWordDictionary(words: Word[]): WordDictionary {
    return words.reduce((previous, current) => {
      const word = current.toLowerCase();
      previous[word] = (previous[word] || 0) + 1;
      return previous;
    }, {});
  }
}
