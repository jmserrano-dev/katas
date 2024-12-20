function removeSnow(s: string): string {
  let result = "";
  let prevResult = "";

  do {
    prevResult = result;

    result = s
      .split("")
      .reduce<string[]>((prev, current) => {
        const lastCharacter = prev.pop()!;
        return current === lastCharacter
          ? prev
          : [...prev, lastCharacter, current];
      }, [])
      .join("");
  } while (prevResult !== result);

  return result;
}

removeSnow("zxxzoz"); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow("zzz"); // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow("a"); // -> "a"
// No hay montículos repetidos
