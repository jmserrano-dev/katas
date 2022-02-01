import countPackages, { Carrier } from "../src/17-challenge";

describe("Count packages should", () => {
  it("count number of packages of a carrier without dependencies", () => {
    const carriers: Carrier[] = [["midu", 2, []]];

    const packages = countPackages(carriers, "midu");

    expect(packages).toBe(2);
  });

  it("count number of packages of a carrier with dependencies", () => {
    const carriers: Carrier[] = [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ];

    const packages = countPackages(carriers, "dapelu");

    expect(packages).toBe(9);
  });

  it("count number of packages of a carrier with complex dependencies", () => {
    const carriers: Carrier[] = [
      ["lolivier", 8, ["camila", "jesuspoleo"]],
      ["camila", 5, ["sergiomartinez", "conchaasensio"]],
      ["jesuspoleo", 4, []],
      ["sergiomartinez", 4, []],
      ["conchaasensio", 3, ["facundocapua", "faviola"]],
      ["facundocapua", 2, []],
      ["faviola", 1, []],
    ];

    const packages = countPackages(carriers, "camila");

    expect(packages).toBe(15);
  });
});
