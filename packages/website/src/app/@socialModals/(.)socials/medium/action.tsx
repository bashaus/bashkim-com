"use server";

import { getMediumSocials } from "@bashkim-com/socials";

export async function animateMediumSocials() {
  const [result] = await Promise.all([
    getMediumSocials(),
    new Promise((resolve) => setTimeout(() => resolve(true), 500)),
  ]);

  return result;
}
