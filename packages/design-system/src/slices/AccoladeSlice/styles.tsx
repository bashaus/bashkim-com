import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

import TrophyVector from "./trophy.svg";

const trophyColors: Record<string, string> = {
  gold: "#d6af36",
  silver: "#a7a7ad",
  bronze: "#824a02",
  honour: "#cc0000",
};

type TrophyProps = {
  place: string;
};

export const Trophy = styled(TrophyVector)<TrophyProps>(({ theme, place }) => ({
  display: "block",
  width: 50,
  height: 50,
  marginLeft: -10,
  marginBottom: 20,
  fill:
    place in trophyColors ? trophyColors[place] : theme.palette.text.primary,
}));

export function Place(props: TypographyProps) {
  return <Typography variant="h6" component="h4" gutterBottom {...props} />;
}
