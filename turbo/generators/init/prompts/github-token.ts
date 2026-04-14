import { password } from "@inquirer/prompts";
import { z } from "zod";

import { zodValidator } from "../../helpers/zod";

const githubTokenSchema = z.string().startsWith("github_pat_");

export async function githubTokenPrompt() {
  const value = await password({
    message: "What is the GitHub Token?",
    validate: zodValidator(githubTokenSchema),
  });

  return { githubToken: value };
}
