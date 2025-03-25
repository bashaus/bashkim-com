import { createTheme } from "@mui/material/styles";

const MuiSliderTheme = createTheme({
  components: {
    MuiSlider: {
      variants: [
        {
          props: {},
          style: {
            cursor: "ew-resize",
          },
        },
      ],
    },
  },
});

export default MuiSliderTheme;
