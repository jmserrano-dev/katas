// https://adventjs.dev/challenges/15

export default function checkSledJump(heights: number[]) {
  const maxHeight = Math.max(...heights);
  const maxHeightIndex = heights.indexOf(maxHeight);

  const leftPart = heights.slice(0, maxHeightIndex + 1);
  const rightPart = heights.slice(maxHeightIndex);

  return (
    leftPart.length > 1 &&
    rightPart.length > 1 &&
    leftPart.every(isInIncrement) &&
    rightPart.every(isInDecrement)
  );
}

const isInIncrement = <T>(_value: T, index: number, array: T[]) => {
  return array[index] < (array[index + 1] ?? Number.MAX_SAFE_INTEGER);
};

const isInDecrement = <T>(_value: T, index: number, array: T[]) => {
  return array[index] > (array[index + 1] ?? Number.MIN_SAFE_INTEGER);
};
