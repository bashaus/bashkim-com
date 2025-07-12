import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

import SiteLogo from "../../components/SiteLogo";

export default {
  title: "Introduction/Welcome",
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    a11y: { disable: true },
  },
} as Meta;

export const Welcome: StoryObj = {
  render: () => (
    <Container maxWidth="md">
      <Box mt={5} mb={3}>
        <SiteLogo width={250} />
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
        implemented on{" "}
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
};
