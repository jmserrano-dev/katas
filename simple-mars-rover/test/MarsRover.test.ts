import { MarsRover } from "../src/MarsRover";

describe("Mars Rover should", () => {
  let marsRover: MarsRover;

  beforeEach(() => {
    marsRover = new MarsRover();
  });

  it("start with position (0,0) and direction N", () => {
    const position = marsRover.execute("");

    expect(position).toBe("0:0:N");
  });

  it("go ahead one unit in the predetermined direction", () => {
    const position = marsRover.execute("M");

    expect(position).toBe("0:1:N");
  });

  it("go ahead three units in the predetermined direccion", () => {
    const position = marsRover.execute("MMM");

    expect(position).toBe("0:3:N");
  });

  it("go ahead three units in the predetermined direccion then turn to right one unit", () => {
    const position = marsRover.execute("MMMRM");

    expect(position).toBe("1:3:E");
  });

  it("go ahead ten units in the predetermined direccion and go back to initial position. (The rover wraps around if it reaches the end of the grid)", () => {
    const position = marsRover.execute("MMMMMMMMMM");

    expect(position).toBe("0:0:N");
  });

  test.each([
    ["MMRMMLM", "2:3:N"],
    ["RMMLM", "2:1:N"],
    ["MMRMLMLMRM", "0:4:N"],
    ["LMRMMM", "9:3:N"],
    ["MMMRRMMMLL", "0:0:N"],
  ])("given the command %p, returns %p", (command, expected) => {
    const position = marsRover.execute(command);

    expect(position).toBe(expected);
  });
});
