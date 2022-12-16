export default class CollaboratorCallException extends Error {
  constructor() {
    super();

    Object.setPrototypeOf(this, CollaboratorCallException.prototype);
  }
}
