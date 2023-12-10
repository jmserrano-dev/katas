function adjustLights(lights: string[]): number {
  const checkErrors = (lights: string[]): number => {
    const errors = lights.filter((light, index) => {
      return index % 2 === 0 ? light !== lights[0] : light === lights[0];
    });

    return errors.length;
  };

  return Math.min(checkErrors(lights), checkErrors(lights.reverse()));
}

adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]); //?
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]); //?
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]); //?
// -> 0 (ya están alternadas)

adjustLights(["🔴", "🔴", "🔴"]); //?
// -> 1 (cambias la segunda luz a 🟢)
