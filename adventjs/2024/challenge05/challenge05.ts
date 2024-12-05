type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const groupBySize = shoes.reduce<Record<number, [number, number]>>(
    (prev, current) => {
      prev[current.size] = [
        (prev[current.size]?.[0] ?? 0) + (current.type === "I" ? 1 : 0),
        (prev[current.size]?.[1] ?? 0) + (current.type === "R" ? 1 : 0),
      ];
      return prev;
    },
    {}
  );

  return Object.entries(groupBySize).reduce<number[]>((prev, [size, pairs]) => {
    return [
      ...prev,
      ...Array.from({ length: Math.min(...pairs) }, () => Number(size)),
    ];
  }, []);
}

const shoes: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes); // [38, 42]

const shoes2: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];

organizeShoes(shoes2); // [38, 38]

const shoes3: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

organizeShoes(shoes3); // []
