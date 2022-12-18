function carryGifts(gifts: string[], maxWeight: number) {
  if (gifts.some((x) => x.length > maxWeight)) return [];

  return gifts.reduce((previous, current) => {
    const lastGifs = previous.pop() || "";

    if (`${lastGifs}${current}`.replace(/\s/g, "").length <= maxWeight)
      return [...previous, `${lastGifs} ${current}`.trim()];
    else return [...previous, lastGifs, current];
  }, [] as string[]);
}

// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg
carryGifts(["game", "bike", "book", "toy"], 10); //?

// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg
carryGifts(["game", "bike", "book", "toy"], 7); //?

// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo
carryGifts(["game", "bike", "book", "toy"], 4); //?

// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro
carryGifts(["toy", "gamme", "toy", "bike"], 6); //?
