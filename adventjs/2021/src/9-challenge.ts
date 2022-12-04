// https://adventjs.dev/challenges/09

export default function groupBy<T>(
  collection: Array<T>,
  conditionOrProperty: Function | string
) {
  if (!Array.isArray(collection)) return collection;

  return collection.reduce((previous, current) => {
    const key =
      typeof conditionOrProperty === "function"
        ? conditionOrProperty(current)
        : current[conditionOrProperty];

    previous[key] = [...(previous[key] ?? []), current];
    return previous;
  }, {});
}
