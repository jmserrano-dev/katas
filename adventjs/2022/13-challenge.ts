type Change = [number, number];

function getFilesToBackup(lastBackup: number, changes: Change[]) {
  return [
    ...new Set(
      changes
        .filter(([, time]) => time > lastBackup)
        .map(([id]) => id)
        .sort((x, y) => x - y)
    ),
  ];
}

// [ 1, 3 ]
getFilesToBackup(1546300800, [
  [3, 1546301100],
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
]); //?
