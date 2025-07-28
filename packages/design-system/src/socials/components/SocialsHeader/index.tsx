import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import type { ReactNode } from "react";

import profilePhoto from "../../../brand/ProfilePhoto/photo@4x.jpg";

export type SocialsHeaderProps = Readonly<{
  avatarBadge: ReactNode;
  avatarBadgeBackground: string;
  avatarImage?: ReactNode;
  href: string;
  textPrimary: ReactNode;
  textSecondary: ReactNode;
}>;

export default function SocialsHeader({
  avatarBadge,
  avatarBadgeBackground,
  avatarImage = (
    <Image
      src={profilePhoto.src}
      alt="Bashkim Isai"
      width={profilePhoto.width}
      height={profilePhoto.height}
    />
  ),
  href,
  textPrimary,
  textSecondary,
}: SocialsHeaderProps) {
  return (
    <Box>
      <ListItemButton href={href} target="_blank" rel="noopener noreferrer">
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
          <OpenInNewIcon
            sx={{ width: 18, height: 18, display: "block" }}
            color="action"
          />
        </Box>
      </ListItemButton>
    </Box>
  );
}
