function findMissingNumbers(nums: number[]): number[] {
  return Array.from({ length: Math.max(...nums) }, (_, i) => i + 1).filter(
    (x) => !nums.includes(x)
  );
}

findMissingNumbers([1, 2, 4, 6]);
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]
