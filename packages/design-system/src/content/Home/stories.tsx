import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

import InlineLogo from "../../brand/InlineLogo";

const meta = {
  title: "Home",
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export const Home = {
  render: () => (
    <Container sx={{ maxWidth: "md" }}>
      <Box sx={{ marginTop: 12, marginBottom: 3 }}>
        <InlineLogo width={252} />
      </Box>

      <Typography variant="h5" component="h1" gutterBottom>
        Design system
      </Typography>

      <Typography>
        This{" "}
        <Link
          href="https://storybook.js.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          storybook
        </Link>{" "}
        implementation showcases a collection of reusable UI components
        implemented for{" "}
        <Link
          href="https://www.bashkim.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          bashkim.com
        </Link>
        . It provides an interactive way to explore and test individual
        components in isolation, making it easier to see how they work and fit
        together. The aim is to provide a clear look at the building blocks
        behind the web interface.
      </Typography>
    </Container>
  ),
} satisfies Story;

export default meta;
