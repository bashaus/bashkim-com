import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import * as S from "./styles";

export type SocialStackOverflowItemProps = Readonly<{
  score?: ReactNode;
  title: ReactNode;
  type: ReactNode;
}>;

export default function SocialStackOverflowItem({
  score,
  title,
  type,
}: SocialStackOverflowItemProps) {
  return (
    <>
      <ListItemAvatar sx={{ paddingTop: 0.5, alignSelf: "flex-start" }}>
        <S.Score>{score ?? <>&nbsp;</>}</S.Score>
      </ListItemAvatar>

      <ListItemText>
        <Typography variant="body1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {type}
        </Typography>
      </ListItemText>
    </>
  );
}
