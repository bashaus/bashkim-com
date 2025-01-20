"use client";

import {
  StackOverflowPost,
  StackOverflowPostType,
  StackOverflowUser,
} from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import StackOverflowFilledVector from "../../../assets/vectors/social/stack-overflow-filled.svg";
import SocialHeader from "../../socials/SocialHeader";
import styles from "./styles.module.scss";

export type SocialModalStackOverflowProps = Readonly<{
  user: StackOverflowUser;
  posts: Array<StackOverflowPost>;
}>;

export default function SocialModalStackOverflow({
  user,
  posts,
}: SocialModalStackOverflowProps) {
  return (
    <>
      <SocialHeader
        href="https://stackoverflow.com/users/600240/bashaus"
        avatarBadgeBackground="#FFF"
        avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
        textPrimary="Bashkim Isai"
        textSecondary={
          <Stack direction="row" spacing={2} component="span">
            <span>{user.reputation}</span>

            <span className={styles["BadgesGold"]}>
              ● {user.badgeCounts.gold}
            </span>

            <span className={styles["BadgesSilver"]}>
              ● {user.badgeCounts.silver}
            </span>

            <span className={styles["BadgesBronze"]}>
              ● {user.badgeCounts.bronze}
            </span>
          </Stack>
        }
      />

      <Divider />
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
            <div className={styles["Score"]}>{post.score}</div>
          </ListItemAvatar>

          <ListItemText
            primary={post.title}
            secondary={
              post.type === StackOverflowPostType.Answer
                ? "Answered by @bashaus"
                : "Question by @bashaus"
            }
          />
        </MenuItem>
      ))}
    </>
  );
}
