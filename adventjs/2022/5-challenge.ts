function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  const findAllPosibleCombinations = (
    giftsCities: number[],
    allPossibleCities: number[][],
    cities: number[] = [],
    index = 0
  ) => {
    if (index == giftsCities.length) {
      allPossibleCities.push(cities);
      return;
    }

    findAllPosibleCombinations(
      giftsCities,
      allPossibleCities,
      [...cities],
      index + 1
    );
    findAllPosibleCombinations(
      giftsCities,
      allPossibleCities,
      [...cities, giftsCities[index]],
      index + 1
    );
  };

  const sum = (arr: number[]) => {
    return arr.reduce((previous, current) => previous + current, 0);
  };

  let allPossibleCities: number[][] = [];
  findAllPosibleCombinations(giftsCities, allPossibleCities);

  return Math.max(
    ...allPossibleCities
      .filter((cities) => cities.length <= maxCities)
      .map(sum)
      .filter((numberOfGifts) => numberOfGifts <= maxGifts)
  );
}

// 20
getMaxGifts([12, 3, 11, 5, 7], 20, 3); //?
// 20
getMaxGifts([12, 3, 11, 5, 7], 20, 3); //?
// 0
getMaxGifts([50], 15, 1); //?
// 50
getMaxGifts([50], 100, 1); //?
// 70
getMaxGifts([50, 70], 100, 1); //?
// 100
getMaxGifts([50, 70, 30], 100, 2); //?
// 100
getMaxGifts([50, 70, 30], 100, 3); //?
// 100
getMaxGifts([50, 70, 30], 100, 4); //?
