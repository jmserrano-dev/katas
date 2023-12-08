function drawGift(size: number, symbol: string): string {
  if (size === 1) return "#\n";

  const parts: string[] = [];
  const middle = `${"#".repeat(size)}${symbol.repeat(size - 2)}#`;

  for (let index = 0; index < size - 1; index++) {
    const stuffed =
      index === 0
        ? "#".repeat(size)
        : `#${symbol.repeat(size - 2)}#${symbol.repeat(index - 1)}#`;

    parts.push(stuffed);
  }

  const top = parts.map((x) => x.padStart(middle.length, " "));
  const bottom = parts.reverse();

  return [...top, middle, ...bottom].join("\n") + "\n";
}

drawGift(1, "^"); //?
/*
#
*/

drawGift(5, "*"); //?
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(4, "+"); //?

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
