type Distance = number;

type Sleigh = { name: string; consumption: number };

function selectSleigh(distance: Distance, sleighs: Sleigh[]) {
  const battery = 20;

  let theBestSleight: { name: string | null; total: number } = {
    name: null,
    total: 0,
  };

  sleighs.forEach(({ name, consumption }) => {
    const total = distance * consumption;
    if (total <= battery && total > theBestSleight.total) {
      theBestSleight = { name, total };
    }
  });

  return theBestSleight.name;
}

// => "Dancer"
selectSleigh(30, [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
]); //?
