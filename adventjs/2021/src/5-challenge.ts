// https://adventjs.dev/challenges/05

export default function daysToXmas(date: Date) {
  const xmas = new Date("Dec 25, 2021");
  return DateUtils.differenceInDays(xmas, date);
}

const DateUtils = {
  toMillisecondsWithoutTime: (date: Date) => {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  },
  differenceInDays: (x: Date, y: Date) => {
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const millisecondsX = DateUtils.toMillisecondsWithoutTime(x);
    const millisecondsY = DateUtils.toMillisecondsWithoutTime(y);

    return (millisecondsX - millisecondsY) / millisecondsInADay;
  },
};
