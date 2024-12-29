function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const result: {
    missing: Record<string, number>;
    extra: Record<string, number>;
  } = {
    missing: {},
    extra: {},
  };

  received.forEach((receivedGift) => {
    const expectedIndex = expected.findIndex(
      (expectedGift) => expectedGift === receivedGift
    );

    if (expectedIndex < 0) {
      result.extra[receivedGift] = (result.extra[receivedGift] ?? 0) + 1;
    } else {
      delete expected[expectedIndex];
    }
  });
  
  expected.forEach(expectedGift => {
    result.missing[expectedGift] = (result.missing[expectedGift] ?? 0) + 1;
  })

  return result;
}

fixGiftList(
  ["puzzle", "car", "doll", "car"],
  ["car", "puzzle", "doll", "ball"]
);
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }

