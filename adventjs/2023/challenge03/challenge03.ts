function findNaughtyStep(original: string, modified: string): string {
  const [start, end] =
    original.length > modified.length
      ? [original.split(""), modified.split("")]
      : [modified.split(""), original.split("")];

  const [extra = ""] = [
    ...start.filter((x) => !end.includes(x)),
    ...start.slice(end.length),
  ];

  return extra;
}

const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified); //?

const original2 = "stepfor";
const modified2 = "stepor";
findNaughtyStep(original2, modified2); //?

const original3 = "abcde";
const modified3 = "abcde";
findNaughtyStep(original3, modified3); //?
