export class HttpException extends Error {
  constructor(public status: number, public message: string) {
    super(message);

    // needed for CustomError instanceof Error => true
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
