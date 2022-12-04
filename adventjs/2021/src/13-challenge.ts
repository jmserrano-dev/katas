// https://adventjs.dev/challenges/13

export default function wrapGifts(gifts: string[]): string[] {
  if (gifts.length === 0) return [];

  console.log({ gifts });
  const numberOfGifts = gifts[0].length;

  const cover = `*${"*".repeat(numberOfGifts)}*`;
  const wrappedGifts = gifts.map((gift) => `*${gift}*`);

  return [cover, ...wrappedGifts, cover];
}
