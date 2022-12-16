const isMultiple =
  (input: number) =>
  (multiple: number): boolean => {
    return input % multiple === 0;
  };

export const Utils = { isMultiple };
