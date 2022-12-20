function sortToys(toys: string[], positions: number[]) {
  return toys
    .map((toy, index) => ({ toy, position: positions[index] }))
    .sort((x, y) => x.position - y.position)
    .map((x) => x.toy);
}

// ['puzzle', 'car', 'ball', 'doll']
sortToys(["ball", "doll", "car", "puzzle"], [2, 3, 1, 0]); //?

// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [8, 6, 5, 7, 9]); //?
