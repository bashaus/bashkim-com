import { input } from "@inquirer/prompts";
import { z } from "zod";

import { zodValidator } from "../../helpers/zod";

const baseUrlSchema = z.httpUrl();

export async function baseHrefPrompt() {
  const value = await input({
    message: "What is the base URL?",
    default: "http://localhost:3000",
    validate: zodValidator(baseUrlSchema),
  });

  return { baseHref: value };
}
