// https://adventjs.dev/challenges/21

export default function canCarry(capacity: number, trip: number[][]) {
  const schedule = trip.reduce((previous, current) => {
    const [numberOfGifs, pickUpPoint, deliveryPoint] = current;

    previous[pickUpPoint] = (previous[pickUpPoint] ?? 0) + numberOfGifs;
    previous[deliveryPoint] = (previous[deliveryPoint] ?? 0) - numberOfGifs;

    return previous;
  }, {});

  let currentTotal = 0;
  return Object.entries(schedule).reduce((previous, [, quantity]) => {
    currentTotal += Number(quantity);
    return previous && currentTotal <= capacity;
  }, true);
}
