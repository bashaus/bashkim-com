import CodeIcon from "@mui/icons-material/Code";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

export default function FooterCopyright() {
  return (
    <Container aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Twenty-Five, Bashkim Isai. All rights reserved.">
      <Stack direction="row" alignItems="center">
        <Box flex={1}>
          <Typography aria-hidden="true" fontSize="smaller">
            &copy;{" "}
            <Tooltip title="2008" arrow>
              <time dateTime="2008">MMVIII</time>
            </Tooltip>
            -
            <Tooltip title="2025" arrow>
              <time dateTime="2025">MMXXV</time>
            </Tooltip>
            , Bashkim&nbsp;Isai.
          </Typography>
        </Box>

        <Box ml={2}>
          <Button
            href="/source"
            size="small"
            startIcon={<CodeIcon />}
            color="currentColor"
          >
            Site source
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
