import Trip from "../trip/Trip";

export default class User {
  private trips: Trip[] = [];
  private friends: User[] = [];

  public addFriend(user: User): void {
    this.friends.push(user);
  }

  public addTrip(trip: Trip): void {
    this.trips.push(trip);
  }

  public getTrips(): Trip[] {
    return this.trips;
  }

  public isFriendOf(user: User) {
    return this.friends.includes(user);
  }
}
