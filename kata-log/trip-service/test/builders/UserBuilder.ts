import User from "../../src/user/User";
import Trip from "../../src/trip/Trip";

export class UserBuilder {
  private user: User = new User();

  private constructor() {}

  public static create(): UserBuilder {
    return new UserBuilder();
  }

  public withFriends(...friends: User[]): UserBuilder {
    friends.forEach((friend) => this.user.addFriend(friend));

    return this;
  }

  public withTrips(...trips: Trip[]): UserBuilder {
    trips.forEach((trip) => this.user.addTrip(trip));

    return this;
  }

  public build(): User {
    return this.user;
  }
}
