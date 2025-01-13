import { MenuButton } from "@bashkim-com/design-system";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export default function MenuButtonHome() {
  return (
    <Link href="/" passHref>
      <MenuButton>
        <HomeIcon width={16} height={16} aria-label="Back to Homepage" />
      </MenuButton>
    </Link>
  );
}
