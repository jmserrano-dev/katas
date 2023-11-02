import { input } from "./input";

let users = input.map((x, index) => ({ index, x }));

while (users.length > 1) {
  const isOdd = users.length % 2 === 1;

  users = users.filter((_, index) => index % 2 === 0);

  if (isOdd && users.length !== 1) {
    const [_, ...restOfUsers] = users;
    users = restOfUsers;
  }
}

const [winningUser] = users;
console.log(winningUser); //?
