import { createTheme } from "@mui/material";

import NextLinkComponent from "../../link";

const MuiButtonBaseTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NextLinkComponent,
      },
    },
  },
});

export default MuiButtonBaseTheme;
