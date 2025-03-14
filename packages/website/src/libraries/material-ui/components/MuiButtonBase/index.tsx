import { createTheme } from "@mui/material/styles";

import NextLinkComponent from "@/libraries/material-ui/link";

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
