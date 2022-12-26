type Command = string;

type Register = number;

type Context = {
  pointer: number;
  commands: Command[];
  registers: Register[];
};

interface ICommand {
  is(context: Context): boolean;
  execute(context: Context): Context;
}

function executeCommands(commands: Command[]) {
  const moveRegisterCommand: ICommand = {
    is: ({ pointer, commands }: Context): boolean => {
      return /^MOV V(\d\d),V(\d\d)/.test(commands[pointer]);
    },
    execute({ pointer, commands, registers }: Context): Context {
      const parameters = commands[pointer].match(/^MOV V(\d\d),V(\d\d)/)!;
      const registerX = Number(parameters[1]);
      const registerY = Number(parameters[2]);

      registers[registerY] = registers[registerX];

      return { pointer: pointer + 1, commands, registers };
    },
  };

  const moveConstantCommand: ICommand = {
    is: ({ pointer, commands }: Context): boolean => {
      return /^MOV (\d+),V(\d\d)/.test(commands[pointer]);
    },
    execute: ({ pointer, commands, registers }: Context): Context => {
      const parameters = commands[pointer].match(/^MOV (\d+),V(\d\d)/)!;
      const constant = Number(parameters[1]);
      const registerX = Number(parameters[2]);

      registers[registerX] = constant;

      return { pointer: pointer + 1, commands, registers };
    },
  };

  const addCommand: ICommand = {
    is: ({ pointer, commands }: Context): boolean => {
      return /^ADD V(\d\d),V(\d\d)/.test(commands[pointer]);
    },
    execute: ({ pointer, commands, registers }: Context): Context => {
      const parameters = commands[pointer].match(/^ADD V(\d\d),V(\d\d)/)!;

      const registerX = Number(parameters[1]);
      const registerY = Number(parameters[2]);

      registers[registerX] =
        (registers[registerX] + registers[registerY] + 256) % 256;

      return { pointer: pointer + 1, commands, registers };
    },
  };

  const decreaseCommand: ICommand = {
    is: ({ pointer, commands }: Context): boolean => {
      return /^DEC V(\d\d)/.test(commands[pointer]);
    },
    execute: ({ pointer, commands, registers }: Context): Context => {
      const parameters = commands[pointer].match(/^DEC V(\d\d)/)!;
      const registerX = Number(parameters[1]);

      registers[registerX] = (registers[registerX] - 1 + 256) % 256;

      return { pointer: pointer + 1, commands, registers };
    },
  };

  const increaseCommand: ICommand = {
    is: ({ pointer, commands }: Context): boolean => {
      return /^INC V(\d\d)/.test(commands[pointer]);
    },
    execute: ({ pointer, commands, registers }: Context): Context => {
      const parameters = commands[pointer].match(/^INC V(\d\d)/)!;
      const registerX = Number(parameters[1]);

      registers[registerX] = (registers[registerX] + 1 + 256) % 256;

      return { pointer: pointer + 1, commands, registers };
    },
  };

  const jumpCommand: ICommand = {
    is: ({ pointer, commands }: Context): boolean => {
      return /^JMP (\d+)/.test(commands[pointer]);
    },
    execute: ({ pointer, commands, registers }: Context): Context => {
      const parameters = commands[pointer].match(/^JMP (\d+)/)!;
      const jumpTo = Number(parameters[1]);

      return registers[0] === 0
        ? { pointer: pointer + 1, commands, registers }
        : { pointer: jumpTo, commands, registers };
    },
  };

  const executableCommands = [
    moveRegisterCommand,
    moveConstantCommand,
    addCommand,
    decreaseCommand,
    increaseCommand,
    jumpCommand,
  ];

  let context: Context = {
    pointer: 0,
    commands,
    registers: Array.from({ length: 8 }, (_) => 0),
  };

  while (context.pointer < commands.length) {
    context = executableCommands
      .find((command) => command.is(context))!
      .execute(context);
  }

  return context.registers;
}

// Output: [14, 10, 0, 0, 0, 0, 0]
executeCommands([
  "MOV 5,V00", // V00 es 5
  "MOV 10,V01", // V01 es 10
  "DEC V00", // V00 ahora es 4
  "ADD V00,V01", // V00 = V00 + V01 = 14
]); //?

// Output: [0, 254, 0, 0, 0, 0, 0]
executeCommands([
  "MOV 255,V00", // V00 es 255
  "INC V00", // V00 es 256, desborda a 0
  "DEC V01", // V01 es -1, desborda a 255
  "DEC V01", // V01 es 254
]); //?

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
executeCommands([
  "MOV 10,V00", // V00 es 10
  "DEC V00", // decrementa V00 en 1     <---┐
  "INC V01", // incrementa V01 en 1         |
  "JMP 1", // bucle hasta que V00 sea 0 ----┘
  "INC V06", // incrementa V06 en 1
]); //?
