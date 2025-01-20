import {
  getStackOverflowPosts,
  getStackOverflowUser,
} from "@bashkim-com/socials";

import SocialStackOverflow from "../../../../domains/socials-stack-overflow/SocialStackOverflow";

export const dynamic = "force-dynamic";

export default async function SocialModalsSlotStackOverflow() {
  const [user, posts] = await Promise.all([
    getStackOverflowUser(),
    getStackOverflowPosts(),
  ]);

  return <SocialStackOverflow user={user} posts={posts} />;
}
