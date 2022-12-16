export class InvalidRecordException extends Error {
  constructor() {
    super();

    Object.setPrototypeOf(this, InvalidRecordException.prototype);
  }
}
