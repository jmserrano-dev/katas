function calculatePrice(ornaments: string): number | undefined {
  const prizes: Record<string, number> = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  
  return ornaments.split("").reverse().reduce((prev, current, index, arr) => {
    const prize = prizes[current];
    const prevPrize = prizes[arr[index - 1]] ?? 0;
    
    return prevPrize > prize ? prev - prize : prev + prize;
  }, 0) || undefined
}

calculatePrice("***"); // 3   (1 + 1 + 1)
calculatePrice("*o"); // 4   (5 - 1)
calculatePrice("o*"); // 6   (5 + 1)
calculatePrice("*o*"); // 5  (-1 + 5 + 1)
calculatePrice("**o*"); // 6  (1 - 1 + 5 + 1)
calculatePrice("o***"); // 8   (5 + 3)
calculatePrice("*o@"); // 94  (-5 - 1 + 100)
calculatePrice("*#"); // 49  (-1 + 50)
calculatePrice("@@@"); // 300 (100 + 100 + 100)
calculatePrice("#@"); // 50  (-50 + 100)
calculatePrice("#@Z"); // undefined (Z es desconocido)
