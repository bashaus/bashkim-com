import CodeIcon from "@mui/icons-material/Code";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { getSourcePath } from "@/libraries/app/navigation";

export default function FooterCopyright() {
  return (
    <Container aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Twenty-Five, Bashkim Isai. All rights reserved.">
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Box sx={{ flex: 1 }}>
          <Typography aria-hidden="true" sx={{ fontSize: "smaller" }}>
            &copy;{" "}
            <Tooltip title="2008" arrow>
              <time dateTime="2008">MMVIII</time>
            </Tooltip>
            -
            <Tooltip title="2026" arrow>
              <time dateTime="2026">MMXXVI</time>
            </Tooltip>
            , Bashkim&nbsp;Isai.
          </Typography>
        </Box>

        <Box sx={{ marginLeft: 2 }}>
          <Button
            href={getSourcePath()}
            size="small"
            startIcon={<CodeIcon />}
            sx={{ color: "currentColor" }}
          >
            Site source
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
