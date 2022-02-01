import CollaboratorCallException from "../exception/CollaboratorCallException";
import User from "../user/User";
import Trip from "./Trip";

export interface ITripDAO {
  findTripsBy(user: User): Trip[];
}

export default class TripDAO implements ITripDAO {
  public static findTripsByUser(user: User): Trip[] {
    throw new CollaboratorCallException(
      "TripDAO should not be invoked on an unit test."
    );
  }

  public findTripsBy(user: User): Trip[] {
    return TripDAO.findTripsByUser(user);
  }
}
