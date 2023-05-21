import {
  PrismicSecretInvalidError,
  PrismicSecretUndefinedError,
} from "./errors";

export const validatePrismicSecret = (secret: string): boolean => {
  const { APP_WEBHOOKS_PRISMIC_SECRET_KEY } = process.env;

  if (!APP_WEBHOOKS_PRISMIC_SECRET_KEY) {
    throw new PrismicSecretUndefinedError();
  }

  if (APP_WEBHOOKS_PRISMIC_SECRET_KEY !== secret) {
    throw new PrismicSecretInvalidError();
  }

  return true;
};
