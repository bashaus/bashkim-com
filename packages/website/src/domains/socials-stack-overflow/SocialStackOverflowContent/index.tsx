"use client";

import { StackOverflowPost, StackOverflowUser } from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMotion from "@/domains/socials/components/SocialMotion";

import SocialStackOverflowHeaderConnected from "../SocialStackOverflowHeaderConnected";
import SocialStackOverflowItem from "../SocialStackOverflowItem";

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
      <SocialMotion custom={++i}>
        <SocialStackOverflowHeaderConnected
          reputation={user.reputation}
          goldBadgeCount={user.badgeCounts?.gold}
          silverBadgeCount={user.badgeCounts?.silver}
          bronzeBadgeCount={user.badgeCounts?.bronze}
        />
      </SocialMotion>

      <Divider />

      <SocialContent>
        <ListSubheader component="div">
          <SocialMotion custom={++i}>Top posts</SocialMotion>
        </ListSubheader>

        {posts.map((post) => (
          <SocialMotion custom={++i} key={post.id}>
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
          </SocialMotion>
        ))}
      </SocialContent>
    </>
  );
}
