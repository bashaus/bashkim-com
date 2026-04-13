import { confirm } from "@inquirer/prompts";

export async function mswEnabledPrompt() {
  const value = await confirm({
    message: "Would you like to enabled Mock Service Worker (MSW)?",
  });

  return { mswEnabled: value };
}
