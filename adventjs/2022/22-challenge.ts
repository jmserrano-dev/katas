function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const previous = {};

  return systemNames.every((name, index) => {
    if (previous[name] == null || previous[name] < stepNumbers[index]) {
      previous[name] = stepNumbers[index];
      return true;
    }

    return false;
  });
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]
// true: Los pasos de cada sistema están en orden estrictamente creciente
// => true
checkStepNumbers(systemNames, stepNumbers); //?

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]
// false: tree_1 tiene los pasos de forma decreciente
// => false
checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]); //?
