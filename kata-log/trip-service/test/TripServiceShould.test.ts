import { instance, mock, when } from "ts-mockito";

import User from "../src/user/User";
import Trip from "../src/trip/Trip";
import TripService from "../src/trip/TripService";
import { UserBuilder } from "./builders/UserBuilder";
import { UserSession } from "../src/user/UserSession";
import TripDAO, { ITripDAO } from "../src/trip/TripDAO";
import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";

let loggedUser: User;
const GUEST: User = null;
const ANOTHER_USER: User = null;
const REGISTERED_USER: User = new User();

const TO_ZARAGOZA = new Trip();
const TO_BARCELONA = new Trip();

describe("Trip service should", () => {
  let tripService: TripService;
  const userSession = mock(UserSession);
  const tripDAO: ITripDAO = mock(TripDAO);

  beforeAll(() => {
    tripService = new TripService(instance(userSession), instance(tripDAO));
  });

  it("not allow to get trips when user is not logged in", () => {
    loggedUser = GUEST;
    when(userSession.getLoggedUser()).thenReturn(loggedUser);

    const service = () => {
      tripService.getTripsByUser(GUEST);
    };

    expect(service).toThrow(UserNotLoggedInException);
  });

  it("not allow to get back trips when users are not friends", () => {
    loggedUser = REGISTERED_USER;
    when(userSession.getLoggedUser()).thenReturn(loggedUser);

    const notFriend = UserBuilder.create()
      .withFriends(ANOTHER_USER)
      .withTrips([TO_BARCELONA, TO_ZARAGOZA])
      .build();

    const trips = tripService.getTripsByUser(notFriend);

    expect(trips).toHaveLength(0);
  });

  it("allow to get back trips when users are friends", () => {
    loggedUser = REGISTERED_USER;

    const friend = UserBuilder.create()
      .withFriends(loggedUser, ANOTHER_USER)
      .withTrips(TO_BARCELONA, TO_ZARAGOZA)
      .build();

    when(userSession.getLoggedUser()).thenReturn(loggedUser);
    when(tripDAO.findTripsBy(friend)).thenReturn(friend.getTrips());

    const trips = tripService.getTripsByUser(friend);

    expect(trips).toHaveLength(2);
  });
});
