import Trip from "./Trip";
import { ITripDAO } from "./TripDAO";
import User from "../user/User";
import { Ensure } from "../shared/Ensure";
import { IUserSession } from "../user/UserSession";
import UserNotLoggedInException from "../exception/UserNotLoggedInException";

export default class TripService {
  constructor(private userSession: IUserSession, private tripDAO: ITripDAO) {}

  public getTripsByUser(user: User): Trip[] {
    const loggedUser = Ensure.isNotNullOrUndefined(
      UserNotLoggedInException,
      this.userSession.getLoggedUser()
    );

    return user.isFriendOf(loggedUser) ? this.tripDAO.findTripsBy(user) : [];
  }
}
