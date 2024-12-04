function createXmasTree(height: number, ornament: string): string {
  const tree: string[] = [];
  const maxWidth = height * 2 - 1;

  for (let i = 1; i <= height; i++) {
    const numberOfOrnaments = i * 2 - 1;
    const numberOfSymbols = (maxWidth - numberOfOrnaments) / 2;
    const side = "_".repeat(numberOfSymbols);
    tree.push(`${side}${ornament.repeat(numberOfOrnaments)}${side}`);
  }

  const numberOfSymbols = (maxWidth - 1) / 2;
  const sideTrunk = "_".repeat(numberOfSymbols);
  tree.push(`${sideTrunk}#${sideTrunk}`, `${sideTrunk}#${sideTrunk}`);

  return tree.join("\n");
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
