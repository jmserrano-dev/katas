// https://adventjs.dev/challenges/14

export default function missingReindeer(ids: number[]): number {
  const reinnerId = ids
    .sort(compareNumbers)
    .find((value, index) => value !== index);

  return reinnerId ? reinnerId - 1 : ids.length;
}

const compareNumbers = (x: number, y: number): number => {
  if (x === y) return 0;
  return x > y ? 1 : -1;
};
