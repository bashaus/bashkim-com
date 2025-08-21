import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)(({ theme }) => [
  {
    display: "flex",
    width: "100%",
    height: 42,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f0f0ee",
    color: "#484847",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  theme.applyStyles("dark", {
    backgroundColor: "#383837",
    color: "#b5b4b3",
  }),
]);

const Button = styled(Box)(() => ({
  width: 12,
  height: 12,
  borderRadius: "50%",
}));

export const ButtonClose = styled(Button)(() => ({
  backgroundColor: "#ff605c",
}));

export const ButtonMin = styled(Button)(() => ({
  backgroundColor: "#ffbd44",
}));

export const ButtonMax = styled(Button)(() => ({
  backgroundColor: "#00ca4e",
}));

export const Title = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: "currentColor",
  flex: 1,
  textAlign: "center",
  fontWeight: "bold",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
}));
