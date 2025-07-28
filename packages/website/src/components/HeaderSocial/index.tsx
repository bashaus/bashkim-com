import {
  GitHubVector,
  LinkedInOutlinedVector,
  MediumVector,
  StackOverflowVector,
} from "@bashkim-com/design-system/SocialsAssets";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

export default function HeaderSocial() {
  return (
    <Stack direction="row">
      <Link href="/socials/github">
        <Tooltip title="GitHub" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <GitHubVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href="/socials/medium">
        <Tooltip title="Medium" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <MediumVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href="/socials/linked-in">
        <Tooltip title="LinkedIn" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <LinkedInOutlinedVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href="/socials/stack-overflow">
        <Tooltip title="Stack Overflow" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <StackOverflowVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>
    </Stack>
  );
}
