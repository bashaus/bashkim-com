import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTHeading2Props = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTHeading2({ children, key }: RTHeading2Props) {
  return (
    <Typography variant="h5" component="h2" gutterBottom key={key}>
      {children}
    </Typography>
  );
}
