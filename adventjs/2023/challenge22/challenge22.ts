function compile(code: string) {
  let counter = 0;
  const blocksStack: number[] = [];
  const intructionsToOmit: Set<number> = new Set();

  const instructions = code.split("");

  for (
    let intructionIndex = 0;
    intructionIndex < instructions.length;
    intructionIndex++
  ) {
    if (intructionsToOmit.has(intructionIndex)) continue;

    const instruction = instructions[intructionIndex];

    counter = {
      "+": (currentCounter: number) => {
        return currentCounter + 1;
      },
      "*": (currentCounter: number) => {
        return currentCounter * 2;
      },
      "-": (currentCounter: number) => {
        return currentCounter - 1;
      },
      "%": (currentCounter: number) => {
        blocksStack.push(intructionIndex);

        return currentCounter;
      },
      "<": (currentCounter: number) => {
        const lastBlock = blocksStack.pop();

        if (lastBlock) {
          intructionsToOmit.add(intructionIndex);
          intructionIndex = lastBlock;
        }

        return currentCounter;
      },
      "¿": (currentCounter: number) => {
        if (currentCounter <= 0) {
          const endConditionalOffset = instructions
            .slice(intructionIndex)
            .indexOf("?");
          intructionIndex = intructionIndex + endConditionalOffset;
        }

        return currentCounter;
      },
      "?": (x) => {
        return x;
      },
    }[instruction](counter);
  }

  return counter;
}

//7
compile("<%+¿++%++<?"); //?

// -1
compile("--¿+++?+++¿--?"); //?

// 3
compile("++*-"); //?
// (1 + 1) * 2 - 1 = 3

// 6
compile("++%++<"); //?
// 1 + 1 + 1 + 1 + 1 + 1 = 6

// 0
compile("++<--"); //?
// 1 + 1 - 1 - 1 = 0

// 3
compile("++¿+?"); //?
// 1 + 1 + 1 = 3

// -2
compile("--¿+++?"); //?
// - 1 - 1 = -2
