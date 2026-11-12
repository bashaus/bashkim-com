"use server";

import {
  getStackOverflowPosts,
  getStackOverflowUser,
} from "@bashkim-com/socials";

export async function animateStackOverflowSocials() {
  const [user, posts] = await Promise.all([
    getStackOverflowUser(),
    getStackOverflowPosts(),

    new Promise((resolve) => setTimeout(() => resolve(true), 500)),
  ]);

  return { user, posts };
}
