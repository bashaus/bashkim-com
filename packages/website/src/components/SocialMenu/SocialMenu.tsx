import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import type { MouseEvent, ReactNode } from "react";
import { useCallback, useId, useState } from "react";

export type SocialMenuChildProps = {
  open: boolean;
};

export type SocialMenuProps = {
  children: ReactNode;
  label: ReactNode;
  onOpen?: () => void;
  signifierIcon: ReactNode;
};

export const SocialMenu = ({
  children,
  label,
  onOpen,
  signifierIcon,
}: SocialMenuProps) => {
  const menuId = useId();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;

  const handleSignifierClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      onOpen && onOpen();
    },
    [onOpen],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Tooltip arrow title={label}>
        <IconButton
          aria-controls={open ? menuId : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleSignifierClick}
          color="inherit"
        >
          {signifierIcon}
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id={menuId}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        slotProps={{
          paper: {
            variant: "social",
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
};
