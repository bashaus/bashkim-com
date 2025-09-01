"use client";

import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import { StackOverflowPost, StackOverflowUser } from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";

import SocialStackOverflowHeaderConnected from "@/domains/socials-stack-overflow/components/SocialStackOverflowHeaderConnected";
import SocialStackOverflowItem from "@/domains/socials-stack-overflow/components/SocialStackOverflowItem";

export type SocialStackOverflowContentProps = Readonly<{
  user: StackOverflowUser;
  posts: Array<StackOverflowPost>;
}>;

export default function SocialStackOverflowContent({
  posts,
  user,
}: SocialStackOverflowContentProps) {
  let i = -1;

  return (
    <>
      <SocialsMotion custom={++i}>
        <SocialStackOverflowHeaderConnected
          reputation={user.reputation}
          goldBadgeCount={user.badgeCounts?.gold}
          silverBadgeCount={user.badgeCounts?.silver}
          bronzeBadgeCount={user.badgeCounts?.bronze}
        />
      </SocialsMotion>

      <Divider />

      <SocialsContent>
        <ListSubheader component="div">
          <SocialsMotion custom={++i}>Top posts</SocialsMotion>
        </ListSubheader>

        {posts.map((post) => (
          <SocialsMotion custom={++i} key={post.id}>
            <ListItemButton
              component="a"
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialStackOverflowItem
                title={post.title}
                score={post.score}
                type={
                  post.type === "question"
                    ? "Question by @bashaus"
                    : "Answered by @bashaus"
                }
              />
            </ListItemButton>
          </SocialsMotion>
        ))}
      </SocialsContent>
    </>
  );
}
