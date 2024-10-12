"use server";

import {
  getStackOverflowPosts,
  getStackOverflowUser,
} from "@bashkim-com/socials";

export const getStackOverflowSocialsAction = async () => {
  console.log("getStackOverflowSocialsAction");

  const [user, posts] = await Promise.all([
    getStackOverflowUser(),
    getStackOverflowPosts(),
  ]);

  return { user, posts };
};
