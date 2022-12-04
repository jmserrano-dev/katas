// https://adventjs.dev/challenges/22

type Nullable<T> = T | null;
export type Tree = { value: number; left: Tree | null; right: Tree | null };

export default function countDecorations(tree: Nullable<Tree>) {
  if (tree === null) return 0;

  return (
    tree.value + countDecorations(tree.left) + countDecorations(tree.right)
  );
}
