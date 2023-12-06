function maxDistance(movements: string): number {
  const tokens = movements.split("");
  const right = tokens.filter((x) => x === ">").length;
  const left = tokens.filter((x) => x === "<").length;
  const neutral = tokens.filter((x) => x === "*").length;

  return right > left ? right + neutral - left : left + neutral - right;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
