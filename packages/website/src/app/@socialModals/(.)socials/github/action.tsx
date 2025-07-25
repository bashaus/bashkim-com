"use server";

import { getGitHubSocials } from "@bashkim-com/socials";

export async function animateGitHubSocials() {
  const [result] = await Promise.all([
    getGitHubSocials(),
    new Promise((resolve) => setTimeout(() => resolve(true), 500)),
  ]);

  return result;
}
