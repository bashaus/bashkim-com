import ComputerIcon from "@mui/icons-material/Computer";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const MobileIcon = styled(PhoneAndroidIcon)(() => ({
  width: 16,
  height: 16,
}));

export const SliderLabel = styled(Typography)(() => ({
  flex: 1,
  fontSize: "small",
  textAlign: "center",
}));

export const DesktopIcon = styled(ComputerIcon)(() => ({
  width: 16,
  height: 16,
}));
