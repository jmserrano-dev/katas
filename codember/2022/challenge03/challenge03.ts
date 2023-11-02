import { challengeInput } from "./input";

const input = challengeInput;

const lightStrips: string[][] = [];

input.forEach((lightColor, index) => {
  const currentLightStrip = lightStrips[lightStrips.length - 1];

  if (
    currentLightStrip &&
    currentLightStrip[currentLightStrip.length - 1] !== lightColor &&
    (currentLightStrip[currentLightStrip.length - 2] ?? lightColor) ===
      lightColor
  ) {
    currentLightStrip.push(lightColor);
  } else {
    lightStrips.push([
      ...new Set([input[index - 1], lightColor].filter(Boolean)),
    ]);
  }
});

const lightStripLengths = lightStrips.map((lightStrip) => lightStrip.length);
const theLongestLightStripIndex = lightStripLengths.lastIndexOf(
  Math.max(...lightStripLengths)
);

console.log({
  length: lightStrips[theLongestLightStripIndex].length,
  lastItem: [...lightStrips[theLongestLightStripIndex]].pop(),
}); //?
