function dryNumber(dry: number, numbers: number) {
  return [...Array(numbers).keys()]
    .map((x) => x + 1)
    .filter((x) => x.toString().includes(dry.toString()));
}

// [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15
dryNumber(1, 15); //?

// [2, 12, 20]

// no tenemos tinta para el 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
dryNumber(2, 20); //?
