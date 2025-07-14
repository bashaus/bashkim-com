import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image, { type ImageProps } from "next/image";
import { ReactNode } from "react";

import * as S from "./styles";

export type TileProps = Readonly<{
  description: ReactNode;
  icon?: ImageProps;
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
          avatar={
            !!icon && (
              <S.Icon>
                <Image
                  alt={icon.alt}
                  src={icon.src}
                  width={icon.width}
                  height={icon.height}
                  style={{ width: 32, height: 32 }}
                />
              </S.Icon>
            )
          }
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
