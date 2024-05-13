import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import type { LinkProps } from "@mui/material/Link";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import type { ReactNode } from "react";

import photoImage from "../../assets/images/photo/photo@4x.jpg";

export type SocialMenuItemHeaderProps = {
  avatarBadge: ReactNode;
  avatarBadgeBackground: string;
  avatarImage?: ReactNode;
  href: LinkProps["href"];
  textPrimary: ReactNode;
  textSecondary: ReactNode;
};

export const SocialMenuItemHeader = ({
  avatarBadge,
  avatarBadgeBackground,
  avatarImage = (
    <Image
      src={photoImage.src}
      alt="Bashkim Isai"
      width={photoImage.width}
      height={photoImage.height}
    />
  ),
  href,
  textPrimary,
  textSecondary,
}: SocialMenuItemHeaderProps) => (
  <MenuItem href={href} target="_blank" component="a">
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
  </MenuItem>
);
