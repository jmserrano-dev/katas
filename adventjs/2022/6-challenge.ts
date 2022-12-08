function createCube(size: number) {
  return Array.from({ length: size }).reduce((previous, _, index) => {
    const top = [
      " ".repeat(index),
      "/\\".repeat(size - index),
      "_\\".repeat(size),
    ].join("");

    const bottom = [
      " ".repeat(index),
      "\\/".repeat(size - index),
      "_/".repeat(size),
    ].join("");

    return [top, previous, bottom].filter(Boolean).join("\n");
  }, "");
}

const cubeOfOne = createCube(1); //?

const cubeOfTwo = createCube(2); //?

const cube = createCube(3); //?
