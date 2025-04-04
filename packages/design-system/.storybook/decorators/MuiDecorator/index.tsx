import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { type ComponentType } from "react";

import { theme } from "../../../src/material-ui";

export default function MuiDecorator(Story: ComponentType) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
}
