import fetch from "node-fetch";

export class CircleCiApiKeyUndefinedError extends Error {
  statusCode = 500;
  override message = "Circle CI API Key undefined";
}

export class CircleCiProjectSlugUndefinedError extends Error {
  statusCode = 500;
  override message = "Circle CI Project Slug undefined";
}

export class CircleCiTriggerPipelineError extends Error {}

export const triggerCircleCiPipeline = async (
  branch = "main",
): Promise<boolean> => {
  const { APP_WEBHOOKS_CIRCLE_API_KEY, APP_WEBHOOKS_CIRCLE_PROJECT_SLUG } =
    process.env;

  if (!APP_WEBHOOKS_CIRCLE_API_KEY) {
    throw new CircleCiApiKeyUndefinedError();
  }

  if (!APP_WEBHOOKS_CIRCLE_PROJECT_SLUG) {
    throw new CircleCiProjectSlugUndefinedError();
  }

  const response = await fetch(
    `https://circleci.com/api/v2/project/${APP_WEBHOOKS_CIRCLE_PROJECT_SLUG}/pipeline`,
    {
      method: "POST",
      body: JSON.stringify({ branch }),
      headers: {
        Authorization: "api_key_header",
        "Content-Type": "application/json",
        "Circle-Token": APP_WEBHOOKS_CIRCLE_API_KEY,
      },
    },
  );

  if (response.status !== 201) {
    throw new CircleCiTriggerPipelineError();
  }

  return true;
};
