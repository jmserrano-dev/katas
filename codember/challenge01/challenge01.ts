import { challengeInput } from "./input";

const REQUIRED_FIELDS = ["usr", "eme", "psw", "age", "loc", "fll"];

const checkRequiredFields =
  (requiredFields: readonly string[]) => (user: string) => {
    return requiredFields.every((field) =>
      user.match(new RegExp(`${field}:.*`))
    );
  };

const validUsers = challengeInput
  .split("\n\n")
  .filter(checkRequiredFields(REQUIRED_FIELDS));

console.log({
  numberOfUsers: validUsers.length,
  lastUser: [...validUsers].pop(),
});
