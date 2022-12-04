// https://adventjs.dev/challenges/10

export default function getCoins(change: number) {
  const coins = [50, 20, 10, 5, 2, 1];

  return coins
    .map((coin) => {
      const numberOfCoins = Math.floor(change / coin);
      change %= coin;
      return numberOfCoins;
    })
    .reverse();
}
