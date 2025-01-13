"use server";

import {
  getStackOverflowPosts,
  getStackOverflowUser,
} from "@bashkim-com/socials";

export default async function getStackOverflowSocialsAction() {
  console.log("getStackOverflowSocialsAction");

  const [user, posts] = await Promise.all([
    getStackOverflowUser(),
    getStackOverflowPosts(),
  ]);

  return { user, posts };
}
