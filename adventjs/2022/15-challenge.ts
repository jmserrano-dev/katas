function decorateTree(base: string): string[] {
  const generateDecoration = (currentDecoration, index, all) => {
    return {
      PP: "P",
      BP: "R",
      PB: "R",
      RP: "B",
      PR: "B",
      BR: "P",
      RB: "P",
      RR: "R",
      BB: "B",
    }[`${currentDecoration}${all[index + 1]}`];
  };

  if (base.length === 1) return [base];

  const aboveDecoration = base
    .split(" ")
    .map(generateDecoration)
    .filter(Boolean)
    .join(" ");

  return [...decorateTree(aboveDecoration), base];
}

// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]
decorateTree("B P R P"); //?

// ['B', 'B B']
decorateTree("B B"); //?
