function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];

  function addGifts(startIndex = 0, current: string[] = []) {
    if (current.length > 0) {
      result.push([...current]);
    }

    for (let i = startIndex; i < gifts.length; i++) {
      current.push(gifts[i]);
      addGifts(i + 1, current);
      current.pop();
    }
  }

  addGifts();

  return result.sort((x, y) => x.length - y.length);
}

generateGiftSets(["car", "doll", "puzzle"]);
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(["ball"]);
// [
//   ['ball']
// ]

generateGiftSets(["game", "pc"]);
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
