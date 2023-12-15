function maxGifts(houses: number[]): number {
  let penultimate = houses[0] ?? 0;
  let last = houses[1] ?? 0;
  let current = Math.max(penultimate, last);

  for (let i = 2; i < houses.length; i++) {
    current = Math.max(last, houses[i] + penultimate);
    penultimate = last;
    last = current;
  }

  return current;
}

// 4 (4)
maxGifts([2, 4, 2]); //?

// 10 (5 + 5)
maxGifts([5, 1, 1, 5]); //?

// 9 (4 + 4 + 1)
maxGifts([4, 1, 1, 4, 2, 1]); //?

// 103 (3 + 100)
maxGifts([1, 3, 1, 3, 100]); //?
