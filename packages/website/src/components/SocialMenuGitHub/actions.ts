"use server";

import { getGitHubSocials } from "@bashkim-com/socials";

export default async function getGitHubSocialsAction() {
  return getGitHubSocials();
}
