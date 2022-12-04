function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const giftsWeight = packOfGifts.reduce(
    (acc, current) => acc + current.length,
    0
  );
  const reindeersWeight = reindeers.reduce(
    (acc, current) => acc + current.length * 2,
    0
  );

  return Math.floor(reindeersWeight / giftsWeight);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// 2
distributeGifts(packOfGifts, reindeers); //?
