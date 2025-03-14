import { siteMuiTheme } from "@bashkim-com/design-system";
import createTheme from "@mui/material/styles/createTheme";
import deepmerge from "@mui/utils/deepmerge";

import MuiButtonBaseTheme from "@/libraries/material-ui/components/MuiButtonBase";

const nextMuiTheme = createTheme({
  components: {
    MuiButtonBase: MuiButtonBaseTheme.components.MuiButtonBase,
  },
});

const theme = createTheme(deepmerge(siteMuiTheme, nextMuiTheme));
export default theme;
