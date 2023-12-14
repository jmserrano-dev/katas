function calculateTime(deliveries: string[]): string {
  const toSeconds = (time: string): number => {
    const [hh, mm, ss] = time.split(":");
    return Number(hh) * 60 * 60 + Number(mm) * 60 + Number(ss);
  };

  const toHHmmss = (seconds: number): string => {
    const date = new Date(0, 0, 0, 0, 0, Math.abs(seconds));

    return [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map((x) => String(x).padStart(2, "0"))
      .join(":");
  };

  const deliveriesInSeconds = deliveries.reduce((previous, current) => {
    return previous + toSeconds(current);
  }, 0);

  const timeInSeconds = 7 * 60 * 60 - deliveriesInSeconds;

  return (timeInSeconds > 0 ? "-" : "") + toHHmmss(timeInSeconds);
}

// '-02:20:00'
calculateTime(["00:10:00", "01:00:00", "03:30:00"]); //?

// '00:30:00'
calculateTime(["02:00:00", "05:00:00", "00:30:00"]); //?
