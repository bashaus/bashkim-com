import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const Icon = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  justifyContent: "center",
}));

export const ErrorIcon = styled(SyncProblemIcon)(() => ({
  width: "5rem",
  height: "5rem",
}));

export const Title = styled(Typography)(() => ({
  textAlign: "center",
}));

export const Message = styled(Typography)(() => ({
  textAlign: "center",
}));

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));
