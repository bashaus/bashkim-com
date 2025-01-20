import { Backdrop } from "@bashkim-com/design-system";
import { createTheme } from "@mui/material/styles";

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
