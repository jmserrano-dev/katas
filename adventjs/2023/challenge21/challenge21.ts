function findBalancedSegment(message: number[]) {
  function isBalanced(submessage: number[]) {
    const zeros = submessage.filter((x) => x === 0).length;
    const ones = submessage.length - zeros;

    return zeros != 0 && zeros === ones;
  }

  let result: number[] = [];

  for (let i = 0; i < message.length - 1; i++) {
    for (let j = i + 1; j < message.length; j++) {
      const balanced = isBalanced(message.slice(i, j + 1));

      if (balanced && j - i > (result[1] || 0) - (result[0] || 0)) {
        result = [i, j];
      }
    }
  }

  return result;
}

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]); //?
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

findBalancedSegment([1, 1, 0]); //?
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1]); //?
// no hay segmentos equilibrados: []
