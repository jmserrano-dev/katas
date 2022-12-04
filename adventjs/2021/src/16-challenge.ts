// https://adventjs.dev/challenges/16

export default function decodeNumber(symbols: string) {
  const symbolsTable = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  return symbols.split("").reduce((previous, symbol, index, tokens) => {
    const nextSymbol = tokens[index + 1];
    const nextSymbolValue = symbolsTable[nextSymbol];
    const currentSymbolValue = symbolsTable[symbol];

    return nextSymbolValue > currentSymbolValue
      ? previous - symbolsTable[symbol]
      : previous + symbolsTable[symbol];
  }, 0);
}
