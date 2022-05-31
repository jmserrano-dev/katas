export const sanitize = (text: string): string => {
  return text.replace(/[.,\n]/g, "");
};

export const splitByWhiteSpace = (text: string): string[] => {
  return text.split(/\s/);
};

export const cleanEmptyStrings = (words: string[]): string[] => {
  return words.filter(Boolean);
};
