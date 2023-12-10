function createChristmasTree(ornaments: string, height: number): string {
  let ornamentIndex = 0;
  const tree: string[] = [];
  const trunk = "|".padStart(height, " ");
  const separateOrnaments = ornaments.split("");

  for (let index = 0; index < height; index++) {
    const treeLevel = Array.from({ length: index + 1 }).map((_, leafIndex) => {
      return separateOrnaments[
        (ornamentIndex + leafIndex) % separateOrnaments.length
      ];
    });

    ornamentIndex += treeLevel.length;
    tree.push(treeLevel.join(" ").padStart(height + index, " "));
  }

  return [...tree, trunk].join("\n") + "\n";
}

createChristmasTree("xo", 4); //?
