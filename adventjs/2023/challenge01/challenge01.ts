function findFirstRepeated(gifts: number[]): number {
  const map = new Set();

  for (const gift of gifts) {
    if (map.has(gift)) return gift;
    map.add(gift);
  }

  return -1;
}
