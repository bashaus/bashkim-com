import { styled } from "@mui/material/styles";

import TrophyVector from "../../assets/vectors/trophy.svg";

const trophyColors: Record<string, string> = {
  gold: "#d6af36",
  silver: "#a7a7ad",
  bronze: "#824a02",
  honour: "#cc0000",
  default: "#000000",
};

type TrophyProps = {
  place: string;
};

export const Link = styled("a")(() => ({
  display: "block",
}));

export const Trophy = styled(TrophyVector)<TrophyProps>(({ theme, place }) => ({
  display: "block",
  width: 50,
  height: 50,
  marginLeft: -10,
  marginBottom: 20,
  fill:
    place in trophyColors ? trophyColors[place] : theme.palette.text.primary,
}));
