import { theme as siteMuiTheme } from "@bashkim-com/design-system/material-ui";
import { createTheme } from "@mui/material/styles";
import deepmerge from "@mui/utils/deepmerge";

import MuiButtonBaseTheme from "@/libraries/material-ui/components/MuiButtonBase";

const nextMuiTheme = createTheme({
  components: {
    MuiButtonBase: MuiButtonBaseTheme.components?.MuiButtonBase,
  },
});

const theme = createTheme(deepmerge(siteMuiTheme, nextMuiTheme));
export default theme;
