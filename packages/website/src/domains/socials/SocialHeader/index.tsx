import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import type { LinkProps } from "@mui/material/Link";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import type { ReactNode } from "react";

import PhotoImage from "@/assets/images/photo/photo@4x.jpg";
import MuiNextLink from "@/libraries/material-ui/link";

export type SocialHeaderProps = Readonly<{
  avatarBadge: ReactNode;
  avatarBadgeBackground: string;
  avatarImage?: ReactNode;
  href: LinkProps["href"];
  textPrimary: ReactNode;
  textSecondary: ReactNode;
}>;

export default function SocialHeader({
  avatarBadge,
  avatarBadgeBackground,
  avatarImage = (
    <Image
      src={PhotoImage.src}
      alt="Bashkim Isai"
      width={PhotoImage.width}
      height={PhotoImage.height}
    />
  ),
  href,
  textPrimary,
  textSecondary,
}: SocialHeaderProps) {
  return (
    <ListItemButton
      component="a"
      LinkComponent={MuiNextLink}
      href={href}
      target="_blank"
    >
      <ListItemAvatar>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar
              sx={{
                width: 20,
                height: 20,
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "background.paper",
                backgroundColor: avatarBadgeBackground,
              }}
            >
              {avatarBadge}
            </Avatar>
          }
        >
          <Avatar>{avatarImage}</Avatar>
        </Badge>
      </ListItemAvatar>

      <ListItemText primary={textPrimary} secondary={textSecondary} />

      <Box px={2}>
        <OpenInNewIcon sx={{ width: 18, height: 18 }} color="action" />
      </Box>
    </ListItemButton>
  );
}
