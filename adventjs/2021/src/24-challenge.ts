// https://adventjs.dev/challenges/24

type Nullable<T> = T | null;
export type Tree = { value: number; left: Tree | null; right: Tree | null };

export default function checkIsSameTree(
  treeA: Nullable<Tree>,
  treeB: Nullable<Tree>
): boolean {
  if (treeA === null && treeB === null) return true;
  if (treeA === null && treeB !== null) return false;
  if (treeB === null && treeA !== null) return false;

  return (
    treeA.value === treeB.value &&
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right)
  );
}
