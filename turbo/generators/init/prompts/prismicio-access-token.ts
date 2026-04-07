import { password } from "@inquirer/prompts";
import { z } from "zod";

import { zodValidator } from "../../helpers/zod";

const prismicioAccessTokenSchema = z.string().min(1);

export default async function prismicioAccessTokenPrompt() {
  const value = await password({
    message: "What is the Prismic.io Access Token?",
    validate: zodValidator(prismicioAccessTokenSchema),
  });

  return { prismicioAccessToken: value };
}
