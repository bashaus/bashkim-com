import { StackOverflowPostType } from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import StackOverflowVector from "../../assets/vectors/social/StackOverflow.svg";
import StackOverflowFilledVector from "../../assets/vectors/social/StackOverflowFilled.svg";
import { PromiseMachineState } from "../../machines/Promise/PromiseMachine.state";
import { SocialMenu } from "../SocialMenu";
import { SocialMenuItemHeader } from "../SocialMenuItemHeader";
import { SocialMenuStateFailure } from "../SocialMenuStateFailure";
import { SocialMenuStateLoading } from "../SocialMenuStateLoading";
import styles from "./styles.module.scss";
import { useSocialMenuStackOverflowViewModel } from "./view-model";

export type SocialMenuStackOverflowView = {
  viewModel: ReturnType<typeof useSocialMenuStackOverflowViewModel>;
};

export const SocialMenuStackOverflowView = ({
  viewModel,
}: SocialMenuStackOverflowView) => {
  const {
    promiseMachineState: {
      value: viewState,
      context: { response },
    },
  } = viewModel;

  return (
    <SocialMenu
      label="Stack Overflow"
      signifierIcon={<StackOverflowVector width="30" height="30" />}
      onOpen={viewModel.handleOpen}
    >
      <SocialMenuItemHeader
        href="https://stackoverflow.com/users/600240/bashaus"
        avatarBadgeBackground="#FFF"
        avatarBadge={<StackOverflowFilledVector width="20" height="20" />}
        textPrimary="Bashkim Isai"
        textSecondary={
          <>
            {viewState !== PromiseMachineState.SUCCESS && (
              <>View profile on Stack Overflow</>
            )}

            {viewState === PromiseMachineState.SUCCESS && (
              <Stack direction="row" spacing={2}>
                <span>{response.user.reputation}</span>

                <span className={styles["BadgesGold"]}>
                  ● {response.user.badgeCounts.gold}
                </span>

                <span className={styles["BadgesSilver"]}>
                  ● {response.user.badgeCounts.silver}
                </span>

                <span className={styles["BadgesBronze"]}>
                  ● {response.user.badgeCounts.bronze}
                </span>
              </Stack>
            )}
          </>
        }
      />

      <Divider />

      {viewState === PromiseMachineState.LOADING && <SocialMenuStateLoading />}
      {viewState === PromiseMachineState.FAILURE && <SocialMenuStateFailure />}
      {viewState === PromiseMachineState.SUCCESS && (
        <>
          <ListSubheader>Top posts</ListSubheader>
          {response.posts.map((post) => (
            <MenuItem
              component="a"
              href={post.link}
              target="_blank"
              key={post.post_id}
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
      )}
    </SocialMenu>
  );
};
