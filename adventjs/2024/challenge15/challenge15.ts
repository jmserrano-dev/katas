function drawTable(data: Array<Record<string, string | number>>): string {
  const headers = Object.keys(data[0]);

  const dataByColumn: Record<string, Array<string | number>> = {};
  headers.forEach((header) => {
    data.forEach((row) => {
      dataByColumn[header] = [...(dataByColumn[header] ?? []), row[header]];
    });
  });

  const maxByColumn: Record<string, number> = {};
  Object.entries(dataByColumn).forEach(([key, values]) => {
    maxByColumn[key] = Math.max(
      ...values.map((x) => String(x).length + 2),
      key.length + 2
    );
  });

  const toCapitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const getSeparator = (data: Record<string, number>) => {
    return `+${Object.values(data)
      .map((x) => "-".repeat(x))
      .join("+")}+`;
  };

  const getHeader = (data: Record<string, number>) => {
    return `|${Object.entries(data)
      .map(([key, length]) => ` ${toCapitalize(key)}`.padEnd(length, " "))
      .join("|")}|`;
  };
  
  const getRow = (row: Record<string, number | string>) => {
    return `|${Object.entries(row)
      .map(([key, value]) => ` ${value}`.padEnd(maxByColumn[key], " "))
      .join("|")}|`;
  }
  
  return [
    getSeparator(maxByColumn),
    getHeader(maxByColumn),
    getSeparator(maxByColumn),
    ...data.map(row => getRow(row)),
    getSeparator(maxByColumn),
  ].join("\n");
}

drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
