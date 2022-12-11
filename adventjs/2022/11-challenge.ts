function getCompleted(part: string, total: string) {
  const convertToSeconds = (time: string): number => {
    const [hours, minutes, seconds] = time.split(":");
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  };

  const gcd = (numerator: number, denominator: number) => {
    return denominator ? gcd(denominator, numerator % denominator) : numerator;
  };

  const reduceFraction = (numerator: number, denominator: number) => {
    const factor = gcd(numerator, denominator);
    return [numerator / factor, denominator / factor];
  };

  return reduceFraction(convertToSeconds(part), convertToSeconds(total)).join(
    "/"
  );
}

// '1/3'
getCompleted("01:00:00", "03:00:00"); //?
// '1/2'
getCompleted("02:00:00", "04:00:00"); //?
// '1/1'
getCompleted("01:00:00", "01:00:00"); //?
// '1/6'
getCompleted("00:10:00", "01:00:00"); //?
// '1/3'
getCompleted("01:10:10", "03:30:30"); //?
// '3/5
getCompleted("03:30:30", "05:50:50"); //?
