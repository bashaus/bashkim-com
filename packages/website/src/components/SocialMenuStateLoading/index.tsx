import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function SocialMenuStateLoading() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ height: 200 }}
    >
      <CircularProgress />
    </Box>
  );
}
