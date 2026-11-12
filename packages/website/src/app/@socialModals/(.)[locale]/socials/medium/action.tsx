"use server";

import { getMediumStories } from "@bashkim-com/socials";

export async function animateMediumSocials() {
  const [result] = await Promise.all([
    getMediumStories(),
    new Promise((resolve) => setTimeout(() => resolve(true), 500)),
  ]);

  return result;
}
