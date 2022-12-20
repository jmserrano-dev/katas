type ReindeerType = {
  type: string;
  weightCapacity: number;
};

type Gift = {
  country: string;
  weight: number;
};

type ReindeerResult = {
  type: string;
  num: number;
};

function howManyReindeers(reindeerTypes: ReindeerType[], gifts: Gift[]) {
  const calculateReindeers = (
    weight: number,
    reindeerTypes: ReindeerType[],
    reindeerTypeIndex: number = 0
  ): string[] => {
    if (weight === 0) return [];

    const { type, weightCapacity } =
      reindeerTypes[reindeerTypeIndex % reindeerTypes.length];

    return weight - weightCapacity >= 0
      ? [
          type,
          ...calculateReindeers(
            weight - weightCapacity,
            reindeerTypes,
            reindeerTypeIndex + 1
          ),
        ]
      : [...calculateReindeers(weight, reindeerTypes, reindeerTypeIndex + 1)];
  };

  const countReindeers = (
    reindeerTypes: ReindeerType[],
    types: string[]
  ): ReindeerResult[] => {
    return Object.entries(
      types.reduce((previous, current) => {
        previous[current] = (previous[current] || 0) + 1;
        return previous;
      }, {} as Record<string, number>)
    )
      .map(([type, num]) => ({ type, num }))
      .sort(
        (x, y) =>
          reindeerTypes.findIndex((z) => z.type === x.type) -
          reindeerTypes.findIndex((z) => z.type === y.type)
      );
  };

  const sortedReindeerTypes = reindeerTypes.sort(
    (x, y) => x.weightCapacity - y.weightCapacity
  );

  const reversedReindeerTypes = [...sortedReindeerTypes].reverse();

  return gifts.map(({ country, weight }) => ({
    country,
    reindeers: countReindeers(
      reversedReindeerTypes,
      calculateReindeers(weight, sortedReindeerTypes)
    ),
  }));
}

// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
howManyReindeers(
  [
    { type: "Nuclear", weightCapacity: 50 },
    { type: "Electric", weightCapacity: 10 },
    { type: "Gasoline", weightCapacity: 5 },
    { type: "Diesel", weightCapacity: 1 },
  ],
  [
    { country: "Spain", weight: 30 },
    { country: "France", weight: 17 },
    { country: "Italy", weight: 50 },
  ]
); //?
