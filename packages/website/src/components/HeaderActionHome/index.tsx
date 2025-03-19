import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

export default function HeaderActionHome() {
  return (
    <IconButton href="/">
      <HomeIcon width={16} height={16} aria-label="Back to Homepage" />
    </IconButton>
  );
}
