export class UnhandledHttpError extends Error {
  statusCode = 500;

  constructor() {
    super("Unhandled error occurred");
  }
}
