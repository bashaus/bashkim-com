import { select } from "@inquirer/prompts";

export async function playwrightHeadlessPrompt() {
  const value = await select({
    message: "How would you like to run playwright in e2e tests?",
    choices: [
      {
        name: "Run in GUI mode",
        value: false,
      },
      {
        name: "Run in headless mode",
        value: true,
      },
    ],
  });

  return { playwrightHeadless: value };
}
