// https://adventjs.dev/challenges/07

export type Store = Object;
export type Product = string;

export default function contains(store: Store, product: Product) {
  return ObjectUtils.getNestedValues(store).includes(product);
}

const ObjectUtils = {
  getNestedValues: (obj: Object): string[] => {
    return obj && typeof obj === "object"
      ? Object.values(obj).map(ObjectUtils.getNestedValues).flat()
      : [obj as string];
  },
};
