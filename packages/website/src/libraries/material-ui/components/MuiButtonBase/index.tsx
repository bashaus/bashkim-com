import { createTheme } from "@mui/material/styles";

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
