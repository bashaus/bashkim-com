import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type SocialMediumItemProps = Readonly<{
  image?: ReactNode;
  title: ReactNode;
  part?: ReactNode;
  publishedAt: ReactNode;
}>;

export default function SocialMediumItem({
  image,
  title,
  part,
  publishedAt,
}: SocialMediumItemProps) {
  return (
    <Grid container sx={{ spacing: 2, width: "100%" }}>
      <Grid size={8}>
        <ListItemText>
          <Typography
            variant="body2"
            sx={{
              color: "textSecondary",
              fontSize: "small",
            }}
            gutterBottom
          >
            {publishedAt}
          </Typography>
          <Typography variant="body1">{title}</Typography>
        </ListItemText>
      </Grid>

      <Grid size={4} sx={{ paddingTop: 1 }}>
        <Badge
          badgeContent={part}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          sx={{
            color: "primary",
            width: "100%",
          }}
        >
          {image}
        </Badge>
      </Grid>
    </Grid>
  );
}
