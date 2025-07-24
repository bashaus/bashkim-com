"use client";

import { StackOverflowPost, StackOverflowUser } from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";

import SocialContent from "@/domains/socials/components/SocialContent";

import SocialStackOverflowHeaderConnected from "../SocialStackOverflowHeaderConnected";
import * as S from "./styles";

export type SocialStackOverflowProps = Readonly<{
  user: StackOverflowUser;
  posts: Array<StackOverflowPost>;
}>;

export default function SocialStackOverflow({
  user,
  posts,
}: SocialStackOverflowProps) {
  return (
    <>
      <SocialStackOverflowHeaderConnected
        reputation={user.reputation}
        goldBadgeCount={user.badgeCounts?.gold}
        silverBadgeCount={user.badgeCounts?.silver}
        bronzeBadgeCount={user.badgeCounts?.bronze}
      />
      <Divider />

      <SocialContent>
        <ListSubheader>Top posts</ListSubheader>

        {posts.map((post) => (
          <MenuItem
            component="a"
            href={post.link}
            target="_blank"
            key={post.id}
            style={{ alignItems: "flex-start" }}
          >
            <ListItemAvatar>
              <S.Score>{post.score}</S.Score>
            </ListItemAvatar>

            <ListItemText
              primary={post.title}
              secondary={
                post.type === "question"
                  ? "Question by @bashaus"
                  : "Answered by @bashaus"
              }
            />
          </MenuItem>
        ))}
      </SocialContent>
    </>
  );
}
