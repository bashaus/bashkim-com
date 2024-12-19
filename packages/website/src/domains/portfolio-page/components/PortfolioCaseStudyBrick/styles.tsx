import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "@mui/material/styles/styled";

export const Container = styled(ListItem)(() => ({}));

export const Icon = styled(ListItemIcon)(() => ({}));

export const Text = styled(ListItemText)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));