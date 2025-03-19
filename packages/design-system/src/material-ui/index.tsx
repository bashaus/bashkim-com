import { createTheme } from "@mui/material/styles";

import MuiButtonTheme from "./components/MuiButton";
import MuiDialogTheme from "./components/MuiDialog";
import MuiDrawerTheme from "./components/MuiDrawer";
import MuiIconButtonTheme from "./components/MuiIconButton";
import MuiLinkTheme from "./components/MuiLink";
import MuiListItemTextTheme from "./components/MuiListItemText";
import MuiListSubheaderTheme from "./components/MuiListSubheader";
import MuiTypographyTheme from "./components/MuiTypography";

export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiButton: MuiButtonTheme.components?.MuiButton,
    MuiDialog: MuiDialogTheme.components?.MuiDialog,
    MuiDrawer: MuiDrawerTheme.components?.MuiDrawer,
    MuiIconButton: MuiIconButtonTheme.components?.MuiIconButton,
    MuiLink: MuiLinkTheme.components?.MuiLink,
    MuiListItemText: MuiListItemTextTheme.components?.MuiListItemText,
    MuiListSubheader: MuiListSubheaderTheme.components?.MuiListSubheader,
    MuiTypography: MuiTypographyTheme.components?.MuiTypography,
  },
});
