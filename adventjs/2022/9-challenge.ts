function countTime(leds: number[]) {
  let time = 0;
  const allLedsOn = (leds: number[]) => leds.every((x) => x === 1);

  while (!allLedsOn(leds)) {
    time += 7;
    leds = leds.map((led, index, allLeds) =>
      led === 1 ? led : allLeds.slice(index - 1)[0]
    );
  }
  return time;
}

countTime([0, 1, 1, 0, 1]); //?
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); //?
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]); //?
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
