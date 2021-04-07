export class PrismicSecretUndefinedError extends Error {
  statusCode = 500;
  message = "Prismic webhook secret undefined";
}

export class PrismicSecretInvalidError extends Error {
  statusCode = 401;
  message = "Prismic webhook secret invalid";
}

export function validatePrismicSecret(secret: string): boolean {
  const { APP_WEBHOOKS_PRISMIC_SECRET_KEY } = process.env;

  if (!APP_WEBHOOKS_PRISMIC_SECRET_KEY) {
    throw new PrismicSecretUndefinedError();
  }

  if (APP_WEBHOOKS_PRISMIC_SECRET_KEY !== secret) {
    throw new PrismicSecretInvalidError();
  }

  return true;
}
