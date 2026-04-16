import { trackQuota } from "../response/track-quota";
import { getStackOverflowUserSchema } from "./schema";

export async function getStackOverflowUser() {
  const userId = 600240;

  const url = new URL("https://api.stackexchange.com/");
  url.pathname = `/2.3/users/${userId}`;
  url.searchParams.append("site", "stackoverflow");

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 3600,
    },
  });

  const rawData = await response.json();
  const data = await getStackOverflowUserSchema.parseAsync(rawData);
  await trackQuota(data);

  const [user] = data.items;
  if (!user) {
    throw new Error("User information was not found");
  }

  return {
    badgeCounts: user.badge_counts,
    reputation: user.reputation,
  };
}

export type StackOverflowUser = Awaited<
  ReturnType<typeof getStackOverflowUser>
>;
