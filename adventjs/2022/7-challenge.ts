type Store = string[];

function getGiftsToRefill(a1: Store, a2: Store, a3: Store) {
  const unique = (arr: Store) => [...new Set(arr)];

  const noStockIn = (s1: Store, s2: Store) =>
    s1.map((x) => (!s2.includes(x) ? x : undefined)).filter(Boolean);

  const [s1, s2, s3] = [unique(a1), unique(a2), unique(a3)];

  return [
    ...noStockIn(s1, [...s2, ...s3]),
    ...noStockIn(s2, [...s1, ...s3]),
    ...noStockIn(s3, [...s1, ...s2]),
  ];
}

function getGiftsToRefill2(a1: Store, a2: Store, a3: Store) {
  const unique = (arr: Store) => [...new Set(arr)];

  return Object.entries(
    [...unique(a1), ...unique(a2), ...unique(a3)].reduce((prev, curr) => {
      return { ...prev, [curr]: (prev[curr] || 0) + 1 };
    }, {})
  )
    .map(([key, value]) => (value === 1 ? key : undefined))
    .filter(Boolean);
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

// ['muñeca', 'pc']
const gifts = getGiftsToRefill(a1, a2, a3); //?
