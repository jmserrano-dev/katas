function drawGift(size: number, symbol: string): string {
  if (size === 1) return "#";

  const top: string[] = [];
  const bottom: string[] = [];
  const middle = `${"#".repeat(size)}${symbol.repeat(size - 2)}#`;

  for (let index = 0; index < size - 1; index++) {
    const stuffed =
      index === 0
        ? "#".repeat(size)
        : `#${symbol.repeat(size - 2)}#${symbol.repeat(index - 1)}#`;

    top.push(stuffed.padStart(middle.length, " "));
    bottom.push(stuffed);
  }

  return [...top, middle, ...bottom.reverse()].join("\n");
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
