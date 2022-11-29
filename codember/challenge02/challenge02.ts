import { mailInput } from "./input";

const digits: string[] = mailInput.split("");

const asciiCodes: number[] = [];

while (digits.length > 0) {
  if (digits[0] === " ") {
    asciiCodes.push(32);
    digits.splice(0, 1);
    continue;
  }

  if (digits[0] === "1") {
    const characterCode = Number(digits.splice(0, 3).join(""));
    asciiCodes.push(characterCode);
    continue;
  }

  // if (digits[0] === "9") {
  const characterCode = Number(digits.splice(0, 2).join(""));
  asciiCodes.push(characterCode);
  // }
}

String.fromCharCode(...asciiCodes); //?
