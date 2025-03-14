import Grid, { Grid2Props as GridProps } from "@mui/material/Grid2";
import { styled } from "@mui/system";

type GridCellProps = Readonly<Omit<GridProps, "size">>;

function GridCell(props: GridCellProps) {
  return <Grid {...props} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }} />;
}

export const Principles = styled(Grid)();
export const Principle = styled(GridCell)();

export const Icon = styled("svg")(() => ({
  width: 50,
  height: 50,
  fill: "currentColor",
}));
