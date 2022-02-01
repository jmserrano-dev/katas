// https://adventjs.dev/challenges/23

export default function canReconfigure(from: string, to: string) {
  if (from.length !== to.length) return false;

  const mapper = {};

  for (let index = 0; index < from.length; index++) {
    const fromLetter = from[index];
    const toLetter = to[index];

    if (mapper[toLetter] != null && mapper[toLetter] !== fromLetter)
      return false;

    if (mapper[fromLetter] != null && mapper[fromLetter] !== toLetter)
      return false;

    mapper[toLetter] = fromLetter;
    mapper[fromLetter] = toLetter;
  }

  return true;
}
