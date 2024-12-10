function compile(instructions: string[]): number {
  const variables: Record<string, number> = {};

  let index = 0
  
  while(index < instructions.length) {
    const instruction = instructions[index];

    if (instruction.startsWith("MOV")) {
      const [_, reg1, reg2] = instruction.split(" ");
      variables[reg2] = variables[reg1] ?? Number(reg1);
      index++
    }
    
    if(instruction.startsWith("INC")) {
      const [_, reg1] = instruction.split(" ")
      variables[reg1] = (variables[reg1] ?? 0) + 1
      index++
    }
    
    if(instruction.startsWith("DEC")) {
      const [_, reg1] = instruction.split(" ")
      variables[reg1] = (variables[reg1] ?? 0) - 1
      index++
    }
    
    if(instruction.startsWith("JMP")) {
      const [_, reg1, reg2] = instruction.split(" ")
      if((variables[reg1] ?? 0) === 0) {
        index = Number(reg2)
      } else {
        index++
      }
    }
  }
  
  return variables["A"]
}

/*
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions); // -> 2
*/

compile([
  "JMP A 2",
  "MOV -1 B",
  "INC B",
  "JMP B 1",
  "MOV B A"
])


/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */
