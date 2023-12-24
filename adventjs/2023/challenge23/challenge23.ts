function organizeChristmasDinner(dishes: string[][]) {
  const result: Record<string, string[]> = {};

  dishes.forEach((dishWithIngredients) => {
    const [dish, ...ingredients] = dishWithIngredients;
    ingredients.forEach((ingredient) => {
      result[ingredient] = [...(result[ingredient] || []), dish];
    });
  });

  return Object.entries(result)
    .filter(([, dishes]) => dishes.length >= 2)
    .sort(([xKey], [yKey]) => xKey.localeCompare(yKey))
    .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()]);
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

organizeChristmasDinner(dishes); //?

// [
//     ["sauce", "christmas turkey", "pizza"],
//     ["sugar", "cake", "hot chocolate"]
// ]
