// https://adventjs.dev/challenges/17

export type Carrier<T = string> = [T, number, T[]];

export default function countPackages(
  carriers: Carrier[],
  carrierID: string
): number {
  const [, ownPackages, team] = carriers.find(([id]) => id === carrierID);

  if (team.length === 0) return ownPackages;

  return (
    ownPackages +
    team
      .map((carrier) => countPackages(carriers, carrier))
      .reduce((previous, current) => previous + current, 0)
  );
}
