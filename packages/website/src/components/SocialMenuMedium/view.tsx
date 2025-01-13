import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import MediumClapVector from "../../assets/vectors/icons/MediumClap.svg";
import MediumVector from "../../assets/vectors/social/Medium.svg";
import { PromiseMachineState } from "../../machines/Promise/PromiseMachine.state";
import SocialMenu from "../SocialMenu";
import SocialMenuItemHeader from "../SocialMenuItemHeader";
import SocialMenuStateFailure from "../SocialMenuStateFailure";
import SocialMenuStateLoading from "../SocialMenuStateLoading";
import { useSocialMenuMediumViewModel } from "./view-model";

export type SocialMenuMediumProps = {
  viewModel: ReturnType<typeof useSocialMenuMediumViewModel>;
};

export default function SocialMenuMediumView({
  viewModel,
}: SocialMenuMediumProps) {
  const {
    promiseMachineState: {
      value: viewState,
      context: { response },
    },
  } = viewModel;

  return (
    <SocialMenu
      label="Medium"
      signifierIcon={
        <MediumVector width={30} height={30} viewBox="0 0 100 100" />
      }
      onOpen={viewModel.handleOpen}
    >
      <SocialMenuItemHeader
        href="https://medium.com/@bashaus"
        avatarBadgeBackground="#000"
        avatarBadge={
          <MediumVector
            width={10}
            height={10}
            viewBox="0 0 100 100"
            color="#FFFFF"
          />
        }
        textPrimary="Bashkim Isai"
        textSecondary="View profile on Medium"
      />

      <Divider />

      {viewState === PromiseMachineState.LOADING && <SocialMenuStateLoading />}
      {viewState === PromiseMachineState.FAILURE && <SocialMenuStateFailure />}
      {viewState === PromiseMachineState.SUCCESS && (
        <>
          <ListSubheader>Recent articles</ListSubheader>

          {response.articles.map((article) => (
            <MenuItem
              key={article.title}
              component="a"
              href={article.url}
              target="_blank"
              style={{ alignItems: "flex-start" }}
            >
              <ListItemIcon>
                <Stack alignItems="center" justifyContent="center">
                  <MediumClapVector />
                  <div>{article.claps}</div>
                </Stack>
              </ListItemIcon>

              <ListItemText primary="Article" secondary={article.title} />
            </MenuItem>
          ))}
        </>
      )}
    </SocialMenu>
  );
}
