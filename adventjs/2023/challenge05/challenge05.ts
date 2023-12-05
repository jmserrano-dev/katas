function cyberReindeer(road: string, time: number): string[] {
  const ROAD_TOKEN = ".";
  const SLEIGH_TOKEN = "S";
  const OPEN_BARRIER_TOKEN = "*";
  const CLOSE_BARRIER_TOKEN = "|";
  const TIME_TO_OPEN_BARRIERS = 5;

  const state = [road];
  let sleighPosition = 0;
  let roadState = `${ROAD_TOKEN}${road.slice(1)}`;

  for (let currentTime = 1; currentTime < time; currentTime++) {
    if (currentTime == TIME_TO_OPEN_BARRIERS) {
      const regex = new RegExp("\\" + CLOSE_BARRIER_TOKEN, "g");
      roadState = roadState.replace(regex, OPEN_BARRIER_TOKEN);
    }

    if (roadState[sleighPosition + 1] !== CLOSE_BARRIER_TOKEN) {
      sleighPosition++;
    }

    const newStartRoad = roadState.slice(0, sleighPosition);
    const newEndRoad = roadState.slice(sleighPosition + 1);
    state.push(`${newStartRoad}${SLEIGH_TOKEN}${newEndRoad}`);
  }

  return state;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time); //?
