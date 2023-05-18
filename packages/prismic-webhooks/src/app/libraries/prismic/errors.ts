export class PrismicError extends Error {}

export class PrismicSecretUndefinedError extends PrismicError {
  statusCode = 500;

  constructor() {
    super("Prismic webhook secret undefined");
  }
}

export class PrismicSecretInvalidError extends PrismicError {
  statusCode = 401;

  constructor() {
    super("Prismic webhook secret invalid");
  }
}
