function decode(message: string): string {
  const result = [""];

  message.split("").forEach((character) => {
    if (!["(", ")"].includes(character)) {
      result[result.length - 1] += character;
    }

    if (character === "(") {
      result.push("");
    }

    if (character === ")") {
      const reversed = result.pop()!.split("").reverse().join("");
      result[result.length - 1] += reversed;
    }
  });

  return result[0];
}

decode("hola (odnum)"); //?
