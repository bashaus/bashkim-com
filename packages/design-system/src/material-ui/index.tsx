import { createTheme } from "@mui/material/styles";

import MuiButtonTheme from "./components/MuiButton";
import MuiDialogTheme from "./components/MuiDialog";
import MuiDrawerTheme from "./components/MuiDrawer";
import MuiListItemTextTheme from "./components/MuiListItemText";
import MuiListSubheaderTheme from "./components/MuiListSubheader";

export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiButton: MuiButtonTheme.components?.MuiButton,
    MuiDialog: MuiDialogTheme.components?.MuiDialog,
    MuiDrawer: MuiDrawerTheme.components?.MuiDrawer,
    MuiListItemText: MuiListItemTextTheme.components?.MuiListItemText,
    MuiListSubheader: MuiListSubheaderTheme.components?.MuiListSubheader,
  },
});
