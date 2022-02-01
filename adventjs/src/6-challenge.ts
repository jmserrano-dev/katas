// https://adventjs.dev/challenges/06

export default function sumPairs(numbers: number[], result: number) {
  for (let firstIndex = 0; firstIndex < numbers.length - 1; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < numbers.length;
      secondIndex++
    ) {
      const firstNumber = numbers[firstIndex];
      const secondNumber = numbers[secondIndex];

      if (firstNumber + secondNumber === result) {
        return [firstNumber, secondNumber];
      }
    }
  }

  return null;
}
