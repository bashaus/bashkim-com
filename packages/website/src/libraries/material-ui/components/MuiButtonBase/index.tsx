import { createTheme } from "@mui/material/styles";

import MuiNextLink from "@/libraries/material-ui/link";

const MuiButtonBaseTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: MuiNextLink,
      },
    },
  },
});

export default MuiButtonBaseTheme;
