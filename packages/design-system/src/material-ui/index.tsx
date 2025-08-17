import { createTheme } from "@mui/material/styles";

import MuiButtonTheme from "./components/MuiButton/theme";
import MuiCssBaselineTheme from "./components/MuiCssBaseline/theme";
import MuiDialogTheme from "./components/MuiDialog/theme";
import MuiDrawerTheme from "./components/MuiDrawer/theme";
import MuiIconButtonTheme from "./components/MuiIconButton/theme";
import MuiLinkTheme from "./components/MuiLink/theme";
import MuiListItemTextTheme from "./components/MuiListItemText/theme";
import MuiListSubheaderTheme from "./components/MuiListSubheader/theme";
import MuiPaperTheme from "./components/MuiPaper/theme";
import MuiSliderTheme from "./components/MuiSlider/theme";
import MuiTypographyTheme from "./components/MuiTypography/theme";

export const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },

  cssVariables: {
    colorSchemeSelector: "data",
    nativeColor: true,
  },

  components: {
    MuiButton: MuiButtonTheme.components?.MuiButton,
    MuiCssBaseline: MuiCssBaselineTheme.components?.MuiCssBaseline,
    MuiDialog: MuiDialogTheme.components?.MuiDialog,
    MuiDrawer: MuiDrawerTheme.components?.MuiDrawer,
    MuiIconButton: MuiIconButtonTheme.components?.MuiIconButton,
    MuiLink: MuiLinkTheme.components?.MuiLink,
    MuiListItemText: MuiListItemTextTheme.components?.MuiListItemText,
    MuiListSubheader: MuiListSubheaderTheme.components?.MuiListSubheader,
    MuiPaper: MuiPaperTheme.components?.MuiPaper,
    MuiSlider: MuiSliderTheme.components?.MuiSlider,
    MuiTypography: MuiTypographyTheme.components?.MuiTypography,
  },
});
