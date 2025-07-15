import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import * as S from "./styles";

export type TileProps = Readonly<{
  description: ReactNode;
  icon?: ReactNode;
  poster?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
}>;

export default function Tile({
  description,
  title,
  subtitle,
  icon,
  poster,
}: TileProps) {
  return (
    <Card data-testid="Tile">
      <CardActionArea>
        <CardHeader
          avatar={!!icon && <S.Icon>{icon}</S.Icon>}
          title={title}
          subheader={subtitle}
        />
        <CardMedia component="img" height="194" image={poster} />
        <CardContent>
          <Typography order={4}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
