type Gift = { name: string; quantity: number };

function printTable(gifts: Gift[]) {
  const calculateMaxLength = (collection: Array<string | number>): number => {
    return Math.max(...collection.map((x) => x.toString().length));
  };

  const pad = (item: string | number, maxLength: number) => {
    return item.toString().padEnd(maxLength, " ");
  };

  const [giftHeader, quantityHeader] = ["Gift", "Quantity"];

  const giftHeaderLength = calculateMaxLength([
    giftHeader,
    ...gifts.map((x) => x.name),
  ]);

  const quantityHeaderLength = calculateMaxLength([
    quantityHeader,
    ...gifts.map((x) => x.quantity),
  ]);

  return [
    "+".repeat(7 + giftHeaderLength + quantityHeaderLength),
    `| ${pad(giftHeader, giftHeaderLength)} | ${pad(
      quantityHeader,
      quantityHeaderLength
    )} |`,
    `| ${"-".repeat(giftHeaderLength)} | ${"-".repeat(quantityHeaderLength)} |`,
    ...gifts.map((gift) => {
      return `| ${pad(gift.name, giftHeaderLength)} | ${pad(
        gift.quantity,
        quantityHeaderLength
      )} |`;
    }),
    "*".repeat(7 + giftHeaderLength + quantityHeaderLength),
  ].join("\n");
}

// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

printTable([
  { name: "Game", quantity: 2 },
  { name: "Bike", quantity: 1 },
  { name: "Book", quantity: 3 },
]); //?

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************

printTable([
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
]); //?
