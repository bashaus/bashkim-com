import fetch from "node-fetch";

import { StackOverflowUser } from "./types";

const getStackOverflowUserData = async () => {
  const userId = 600240;

  const url = new URL("https://api.stackexchange.com/");
  url.pathname = `/2.3/users/${userId}`;
  url.searchParams.append("site", "stackoverflow");

  const response = await fetch(url.toString(), {});
  return response.json();
};

export async function getStackOverflowUser(): Promise<StackOverflowUser> {
  const result = await getStackOverflowUserData();

  const [user] = result.items;
  if (!user) {
    throw new Error("User information was not found");
  }

  return {
    badgeCounts: {
      gold: user.badge_counts.gold,
      silver: user.badge_counts.silver,
      bronze: user.badge_counts.bronze,
    },
    reputation: user.reputation,
  };
}
