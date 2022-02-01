import User from "../src/user/User";
import { UserBuilder } from "./builders/UserBuilder";

const BOB: User = new User();
const ALICE: User = new User();

describe("User should", () => {
  it("inform when users are not friends", () => {
    const user = UserBuilder.create().withFriends(BOB).build();

    const isFriend = user.isFriendOf(ALICE);

    expect(isFriend).toBeFalsy();
  });

  it("inform when users are friends", () => {
    const user = UserBuilder.create().withFriends(BOB).build();

    const isFriend = user.isFriendOf(BOB);

    expect(isFriend).toBeTruthy();
  });
});
