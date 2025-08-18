import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export type VideoCloseButtonProps = Readonly<{
  onClick: () => void;
}>;

export default function VideoCloseButton({ onClick }: VideoCloseButtonProps) {
  return (
    <Tooltip placement="top" title="Close">
      <IconButton onClick={onClick}>
        <CloseIcon color="primary" />
      </IconButton>
    </Tooltip>
  );
}
