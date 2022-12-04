// https://adventjs.dev/challenges/12

export default function getMinJump(obstacles: number[]) {
  if (!obstacles) return 1;

  for (let jump = 2; ; jump++) {
    if (obstacles.every((obstacle) => obstacle % jump !== 0)) return jump;
  }
}
