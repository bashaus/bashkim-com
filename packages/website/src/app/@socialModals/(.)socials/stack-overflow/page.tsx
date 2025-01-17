import {
  getStackOverflowPosts,
  getStackOverflowUser,
} from "@bashkim-com/socials";

import SocialModalStackOverflow from "../../../../components/SocialModalStackOverflow";

export const dynamic = "force-dynamic";

export default async function SocialModalsSlotStackOverflow() {
  const [user, posts] = await Promise.all([
    getStackOverflowUser(),
    getStackOverflowPosts(),
  ]);

  return <SocialModalStackOverflow user={user} posts={posts} />;
}
