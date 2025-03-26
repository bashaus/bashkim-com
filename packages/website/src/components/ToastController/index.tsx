import { useTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

export default function ToastController() {
  const theme = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      draggable
      closeButton={false}
      style={{
        zIndex: theme.zIndex.appBar,
      }}
      toastStyle={{
        backgroundColor: "unset",
        padding: "unset",
        color: "inherit",
        width: "unset",
      }}
    />
  );
}
