// https://adventjs.dev/challenges/04

export default function createXmasTree(height: number) {
  const tree = new Tree(height);

  return tree.render();
}

class Tree {
  private height: number;
  private width: number;

  constructor(height: number) {
    this.height = height;
    this.width = 2 * height - 1;
  }

  public render(): string {
    const treeTop = this.getTreeTopLayers(this.width, this.height);
    const treeTrunk = this.getTreeTrunkLayers(this.width);

    return [...treeTop, ...treeTrunk].join("\n");
  }

  private getTreeTopLayers(width: number, height: number): string[] {
    if (height === 0) return [];

    const layerTree = 2 * height - 1;
    const spaceOnEachSide = (width - layerTree) / 2;
    const layer = this.renderLayer("*", layerTree, spaceOnEachSide);

    return [...this.getTreeTopLayers(width, height - 1), layer];
  }

  private getTreeTrunkLayers(
    width: number,
    height: number = 2,
    trunkWidth: number = 1
  ): string[] {
    const spaceOnEachSide = (width - trunkWidth) / 2;
    const layer = this.renderLayer("#", trunkWidth, spaceOnEachSide);

    return new Array(height).fill(layer);
  }

  private renderLayer(symbol: "*" | "#", tree: number, spaces: number): string {
    const spaceOnEachSide = "_".repeat(spaces);
    return [spaceOnEachSide, symbol.repeat(tree), spaceOnEachSide].join("");
  }
}
