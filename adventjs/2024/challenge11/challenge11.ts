function decodeFilename(filename: string): string {
  const [_, ...filenameWithExtraExtension] = filename.split("_");
  const [name, extension] = filenameWithExtraExtension.join("_").split(".")

  return `${name}.${extension}`;
}

decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
// ➞ "sleighDesign.png"

decodeFilename("42_chimney_dimensions.pdf.hack2023");
// ➞ "chimney_dimensions.pdf"

decodeFilename("987654321_elf-roster.csv.tempfile");
// ➞ "elf-roster.csv"
