function checkIsValidCopy(original: string, copy: string) {
  const symbols = ["#", "+", ":", ".", " "];

  for (let index = 0; index < original.length; index++) {
    const originalLetter = original[index];
    const copyLetter = copy[index];

    if (originalLetter === copyLetter) continue;

    if (
      originalLetter.match(/[A-Z]/) &&
      !(
        originalLetter.toLowerCase() === copyLetter ||
        symbols.includes(copyLetter)
      )
    ) {
      return false;
    }

    if (originalLetter.match(/[a-z]/) && !symbols.includes(copyLetter)) {
      return false;
    }

    if (
      symbols.findIndex((x) => x === originalLetter) >
      symbols.findIndex((x) => x === copyLetter)
    ) {
      return false;
    }
  }

  return true;
}

// true
checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#"); //?

// // false (por la p inicial)
checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#"); //?

// true
checkIsValidCopy("Santa Claus", "s#+:. c:. s"); //?

// false (hay un # donde no debería)
checkIsValidCopy("Santa Claus", "s#+:.#c:. s"); //?
