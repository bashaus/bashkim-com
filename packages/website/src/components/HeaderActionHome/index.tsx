import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

import { getHomePath } from "@/libraries/app/navigation";

export default function HeaderActionHome() {
  return (
    <IconButton href={getHomePath()}>
      <HomeIcon width={16} height={16} aria-label="Back to Homepage" />
    </IconButton>
  );
}
