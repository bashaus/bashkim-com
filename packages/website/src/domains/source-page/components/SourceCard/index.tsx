import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { PropsWithChildren, ReactNode } from "react";

export type SourceCardProps = Readonly<
  PropsWithChildren<{
    href: string;
    image?: string;
    icon: ReactNode;
    title: ReactNode;
  }>
>;

export default function SourceCard({
  children,
  href,
  image,
  icon,
  title,
}: SourceCardProps) {
  return (
    <Card variant="outlined">
      <CardActionArea href={href} target="_blank" rel="noopener noreferrer">
        {image && <CardMedia image={image} sx={{ aspectRatio: "16 / 9" }} />}
        <CardContent>
          <Stack direction="row" spacing={1} mb={1}>
            {icon}
            <Typography variant="h6" component="p">
              {title}
            </Typography>
          </Stack>

          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
