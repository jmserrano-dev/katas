import fixFiles from "../src/18-challenge";

describe("Fix files should", () => {
  test.each([
    [
      ["photo", "postcard", "photo(1)", "photo(2)", "video"],
      ["photo", "postcard", "photo", "photo", "video"],
    ],
    [
      ["file", "file(1)", "file(2)", "game", "game(1)"],
      ["file", "file", "file", "game", "game"],
    ],
    [
      ["file", "file(1)", "icon", "icon(1)", "icon(1)(1)"],
      ["file", "file(1)", "icon", "icon(1)", "icon(1)"],
    ],
  ])("return %p when the symbols are %p", (expected, files) => {
    const fix = fixFiles(files);

    expect(fix).toStrictEqual(expected);
  });
});
