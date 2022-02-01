export default class UserNotLoggedInException extends Error {
  constructor() {
    super();

    Object.setPrototypeOf(this, UserNotLoggedInException.prototype);
  }
}
