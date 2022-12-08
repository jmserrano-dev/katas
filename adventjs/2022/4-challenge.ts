type Box = {
  l: number;
  w: number;
  h: number;
};

function fitsInOneBox(boxes: Box[]): boolean {
  const sortedBoxes = boxes.sort((x, y) => x.l - y.l || x.w - y.w || x.h - y.h);

  return sortedBoxes.reduce((previous, current, currentIndex, arr) => {
    const next = arr[currentIndex + 1];

    if (next == null) return previous;

    return (
      previous && current.l < next.l && current.w < next.w && current.h < next.h
    );
  }, true);
}

// true
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]); //?

// false
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]); //?

// true
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]); //?

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
]); //?
