import contains, { Store } from "../src/7-challenge";

describe("Store should", () => {
  it("contains a product at some level", () => {
    const store: Store = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta",
        },
      },
    };

    const product = contains(store, "camiseta");

    expect(product).toBeTruthy();
  });

  it("doesn't contain a product at some level", () => {
    const store: Store = {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    };

    const product = contains(store, "gameboy");

    expect(product).toBeFalsy();
  });
});
