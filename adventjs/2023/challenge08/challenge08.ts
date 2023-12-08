function organizeGifts(gifts: string): string {
  const quantities = gifts.match(/(\d+)/g)!;
  const types = gifts.match(/([a-z]+)/g)!;

  return quantities
    .map((quantity, index) => ({
      quantity: Number(quantity),
      type: types[index],
    }))
    .reduce((previous, { quantity, type }) => {
      const bag = quantity % 10;
      const boxes = Math.floor(quantity / 10);
      const pallets = Math.floor(boxes / 5);
      const boxesWithoutPallets = boxes % 5;

      return (
        previous +
        [
          `[${type}]`.repeat(pallets),
          `{${type}}`.repeat(boxesWithoutPallets),
          bag ? `(${type.repeat(bag)})` : "",
        ]
          .filter(Boolean)
          .join("")
      );
    }, "");
}

const result1 = organizeGifts(`76a11b`); //?
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
