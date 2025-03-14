import { NavigationGroup } from "@bashkim-com/design-system";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

import GitHubVector from "@/assets/vectors/social/github.svg";
import LinkedInOutlinedVector from "@/assets/vectors/social/linked-in-outlined.svg";
import MediumVector from "@/assets/vectors/social/medium.svg";
import StackOverflowVector from "@/assets/vectors/social/stack-overflow.svg";

export default function HeaderDesktopSocial() {
  return (
    <NavigationGroup>
      <Link href="/socials/github/">
        <Tooltip title="GitHub" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <GitHubVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href="/socials/medium/">
        <Tooltip title="Medium" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <MediumVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href="/socials/linked-in/">
        <Tooltip title="LinkedIn" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <LinkedInOutlinedVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href="/socials/stack-overflow/">
        <Tooltip title="Stack Overflow" arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <StackOverflowVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>
    </NavigationGroup>
  );
}
