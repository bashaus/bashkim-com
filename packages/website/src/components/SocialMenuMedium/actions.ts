"use server";

import { getMediumSocials } from "@bashkim-com/socials";

export default async function getMediumSocialsAction() {
  return getMediumSocials();
}
