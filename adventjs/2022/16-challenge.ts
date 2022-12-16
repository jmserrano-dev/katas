type Letter = string;

function fixLetter(letter: Letter) {
  const pipe =
    (...fns) =>
    (x) =>
      fns.reduce((v, f) => f(v), x);

  const setWhiteSpaceAfterComma = (letter: Letter) => {
    return letter.replace(/,/g, ", ");
  };

  const clearStarAndEndWhiteSpace = (letter: Letter) => {
    return letter.trim();
  };

  const removeMultiplesWhiteSpaces = (letter: Letter) => {
    return letter.replace(/\s+/g, " ");
  };

  const removeWhiteSpacesBeforeSymbols = (letter: Letter) => {
    return letter.replace(/(\s+([,.?!]))/g, (_, __, symbol) => symbol);
  };

  const removeMultipleSymbols = (letter: Letter) => {
    return letter.replace(/\?+/g, "?").replace(/\!+/g, "!");
  };

  const capitalize = (letter: Letter) => {
    return letter
      .replace(/./, (character) => character.toUpperCase())
      .replace(/[.!?]\s(.)/g, (character) => character.toUpperCase());
  };

  const setSantaClausUpperCase = (letter: Letter) => {
    return letter.replace(/santa claus/gi, "Santa Claus");
  };

  const setEndDot = (letter: Letter) => {
    return letter.replace(/([A-z])$/, (_, lastLetter) => `${lastLetter}.`);
  };

  return pipe(
    setWhiteSpaceAfterComma,
    clearStarAndEndWhiteSpace,
    removeMultiplesWhiteSpaces,
    removeWhiteSpacesBeforeSymbols,
    removeMultipleSymbols,
    capitalize,
    setSantaClausUpperCase,
    setEndDot
  )(letter);
}

// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
const firstLetter = fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
); //?

const checkFirstLetter =
  firstLetter ===
  "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."; //?

// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
const secondLetter = fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
); //?

const checkSecondLetter =
  secondLetter ===
  "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"; //?
