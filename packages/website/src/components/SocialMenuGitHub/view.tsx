import CodeIcon from "@mui/icons-material/Code";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import GitHubVector from "../../assets/vectors/social/GitHub.svg";
import { PromiseMachineState } from "../../machines/Promise/PromiseMachine.state";
import { SocialMenu } from "../SocialMenu";
import { SocialMenuItemHeader } from "../SocialMenuItemHeader";
import { SocialMenuStateFailure } from "../SocialMenuStateFailure";
import { SocialMenuStateLoading } from "../SocialMenuStateLoading";
import { useSocialMenuGitHubViewModel } from "./view-model";

export type SocialMenuGitHubViewProps = {
  viewModel: ReturnType<typeof useSocialMenuGitHubViewModel>;
};

export const SocialMenuGitHubView = ({
  viewModel,
}: SocialMenuGitHubViewProps) => {
  const {
    promiseMachineState: {
      value: viewState,
      context: { response },
    },
  } = viewModel;

  return (
    <SocialMenu
      label="GitHub"
      signifierIcon={
        <GitHubVector width={30} height={30} viewBox="0 0 100 100" />
      }
      onOpen={viewModel.handleOpen}
    >
      <SocialMenuItemHeader
        href="https://github.com/bashaus/"
        avatarBadgeBackground="#333"
        avatarBadge={
          <GitHubVector
            width={15}
            height={15}
            viewBox="0 0 100 100"
            color="#FFFFF"
          />
        }
        textPrimary="@bashaus"
        textSecondary="View profile on GitHub"
      />

      <Divider />
      {viewState === PromiseMachineState.LOADING && <SocialMenuStateLoading />}
      {viewState === PromiseMachineState.FAILURE && <SocialMenuStateFailure />}
      {viewState === PromiseMachineState.SUCCESS && (
        <>
          <ListSubheader>Pinned items</ListSubheader>
          {response.pinnedItems.map((item) => (
            <MenuItem
              component="a"
              href={item.url}
              target="_blank"
              key={item.name}
              style={{ alignItems: "flex-start" }}
            >
              <ListItemIcon sx={{ py: 0.5 }}>
                <CodeIcon
                  sx={{ width: 28, height: 28 }}
                  aria-label="Repository"
                />
              </ListItemIcon>

              <ListItemText
                primary={
                  <Stack direction="row" spacing={1}>
                    <span>{item.name}</span>

                    {item.name === "bashkim-com" && (
                      <Chip
                        label="This site"
                        color="primary"
                        size="small"
                        style={{
                          pointerEvents: "none",
                          textTransform: "uppercase",
                          fontSize: "60%",
                        }}
                      />
                    )}
                  </Stack>
                }
                secondary={item.description}
              />
            </MenuItem>
          ))}
        </>
      )}
    </SocialMenu>
  );
};
