function fixPackages(packages: string): string {
  const stack: string[][] = [[]];
  
  packages.split("").forEach((character) => {
    if(character === '(') {
      stack.push([])
    } else if(character === ')') {
      const reversedString = stack.pop()!.reverse();
      stack.push([...stack.pop()!, ...reversedString])
    } else {
       stack.push([...stack.pop()!, character]);
    }
  })

  return stack.pop()!.join("");
}

fixPackages("a(cb)de");
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages("a(bc(def)g)h");
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"