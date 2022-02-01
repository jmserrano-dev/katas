// https://adventjs.dev/challenges/18

export default function fixFiles(files: string[]): string[] {
  const fileCounter = {};

  return files.map((file) => {
    const filename = fileCounter[file] ? `${file}(${fileCounter[file]})` : file;
    fileCounter[file] = (fileCounter[file] ?? 0) + 1;
    return filename;
  });
}
