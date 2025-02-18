import { createTheme } from "@mui/material/styles";

import Backdrop from "../../../components/Backdrop";

const MuiDialogTheme = createTheme({
  components: {
    MuiDialog: {
      defaultProps: {
        slots: {
          backdrop: Backdrop,
        },
        transitionDuration: 800,
      },
    },
  },
});

export default MuiDialogTheme;
