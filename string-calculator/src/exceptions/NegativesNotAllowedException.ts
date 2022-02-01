export class NegativesNotAllowedException extends Error {
  constructor() {
    super();

    Object.setPrototypeOf(this, NegativesNotAllowedException.prototype);
  }
}
