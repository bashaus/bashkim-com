import createTheme from "@mui/material/styles/createTheme";

import MuiButtonTheme from "../components/MuiButton";
import MuiButtonBaseTheme from "../components/MuiButtonBase";
import MuiDialogTheme from "../components/MuiDialog";
import MuiDrawerTheme from "../components/MuiDrawer";
import MuiListItemTextTheme from "../components/MuiListItemText";
import MuiListSubheaderTheme from "../components/MuiListSubheader";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiButton: MuiButtonTheme.components?.MuiButton,
    MuiButtonBase: MuiButtonBaseTheme.components?.MuiButtonBase,
    MuiDialog: MuiDialogTheme.components?.MuiDialog,
    MuiDrawer: MuiDrawerTheme.components?.MuiDrawer,
    MuiListItemText: MuiListItemTextTheme.components?.MuiListItemText,
    MuiListSubheader: MuiListSubheaderTheme.components?.MuiListSubheader,
  },
});

export default theme;
