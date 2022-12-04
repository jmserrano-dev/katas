// https://adventjs.dev/challenges/08

export default function maxProfit(prices: number[]) {
  let maximumGain = -1;

  for (let x = 0; x < prices.length - 1; x++) {
    for (let y = x + 1; y < prices.length; y++) {
      const difference = prices[y] - prices[x];
      if (difference > 0 && difference > maximumGain) {
        maximumGain = difference;
      }
    }
  }

  return maximumGain;
}
