// https://adventjs.dev/challenges/11

export default function shouldBuyFidelity(numberOfTickets: number): boolean {
  const ticketPrice = 12;

  return (
    calculateBuyWithFidelity(ticketPrice, numberOfTickets) <
    calculateBuyWithoutFidelity(ticketPrice, numberOfTickets)
  );
}

const calculateBuyWithoutFidelity = (
  ticketPrice: number,
  numberOfTickets: number
): number => {
  return ticketPrice * numberOfTickets;
};

const calculateBuyWithFidelity = (
  ticketPrice: number,
  numberOfTickets: number
): number => {
  const initialCardPrice = 250;
  const percentageReductionPrice = 0.75;

  if (numberOfTickets === 0) return initialCardPrice;

  const price = ticketPrice * percentageReductionPrice ** numberOfTickets;

  return price + calculateBuyWithFidelity(ticketPrice, numberOfTickets - 1);
};
