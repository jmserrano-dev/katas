function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map(name => name.length));
  
  return [
    "*".repeat(maxLength + 4),
    ...names.map(name => `* ${name.padEnd(maxLength, " ")} *`),
    "*".repeat(maxLength + 4)
  ].join("\n")
}

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************