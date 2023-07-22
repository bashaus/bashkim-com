import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const SocialMenuStateLoading = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{ height: 200 }}
  >
    <CircularProgress />
  </Box>
);
