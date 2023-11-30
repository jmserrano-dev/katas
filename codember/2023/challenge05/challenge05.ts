import { exampleInput, input } from "./input";

const verifyId = (id: string): boolean => {
  return /^[a-z0-9]+$/i.test(id);
};

const verifyUsername = (username: string): boolean => {
  return /^[a-z0-9]+$/i.test(username);
};

const verifyEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const verifyAge = (age: string): boolean => {
  return /^\d*$/.test(age);
};

const verifyLocation = (location: string): boolean => {
  return /^[a-zA-Z\s]*$/.test(location);
};

const getInvalidRegisters = (input: string): string[] => {
  return input.split("\n").reduce((previous, current) => {
    const [id, username, email, age, location] = current.split(",");

    return verifyId(id) &&
      verifyUsername(username) &&
      verifyEmail(email) &&
      verifyAge(age) &&
      verifyLocation(location)
      ? previous
      : [...previous, current];
  }, [] as string[]);
};

getInvalidRegisters(exampleInput); //?

const invalidRegisters = getInvalidRegisters(input);

const hiddenMessage = invalidRegisters.reduce((previous, current) => {
  const [_, [firstLetterUsername]] = current.split(",");
  return previous + firstLetterUsername;
}, ""); //?
