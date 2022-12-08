function checkPart(part: string) {
  const palindrome = (str: string) => str === str.split("").reverse().join("");

  const removeCharacter = (str: string, characterIndex: number) =>
    str.slice(0, characterIndex) + str.slice(characterIndex + 1);

  return (
    palindrome(part) ||
    [...part].some((_, index) => palindrome(removeCharacter(part, index)))
  );
}

// true
checkPart("uwu"); //?

// true
checkPart("miidim"); //?

// false
checkPart("midu"); //?
