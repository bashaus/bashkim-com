import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type SocialMediumItemProps = Readonly<{
  image?: ReactNode;
  title: ReactNode;
  part?: ReactNode;
  pubDate: ReactNode;
}>;

export default function SocialMediumItem({
  image,
  title,
  part,
  pubDate,
}: SocialMediumItemProps) {
  return (
    <Grid container spacing={2} width="100%">
      <Grid size={8}>
        <ListItemText>
          <Typography
            variant="body2"
            fontSize="small"
            color="textSecondary"
            gutterBottom
          >
            {pubDate}
          </Typography>
          <Typography variant="body1">{title}</Typography>
        </ListItemText>
      </Grid>

      <Grid size={4} pt={1}>
        <Badge
          badgeContent={part}
          color="primary"
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          sx={{ width: "100%" }}
        >
          {image}
        </Badge>
      </Grid>
    </Grid>
  );
}
