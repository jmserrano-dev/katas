function getIndexsForPalindrome(word: string): number[] | null {
  const letters = [...word];

  function isPalindrome(word: string): boolean {
    return word === [...word].reverse().join("");
  }

  if (isPalindrome(word)) return [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 1; j < letters.length; j++) {
      let str = [...word];
      str[i] = word[j];
      str[j] = word[i];

      if (isPalindrome(str.join(""))) return [i, j];
    }
  }

  return null;
}

// []
getIndexsForPalindrome("anna"); //?

// [0, 1]
getIndexsForPalindrome("abab"); //?

// null
getIndexsForPalindrome("abac"); //?

// []
getIndexsForPalindrome("aaaaaaaa"); //?

// [1, 3]
getIndexsForPalindrome("aaababa"); //?

// null
getIndexsForPalindrome("caababa"); //?
