import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTHeading4Props = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTHeading4({ children, key }: RTHeading4Props) {
  return (
    <Typography variant="h6" component="h4" gutterBottom key={key}>
      {children}
    </Typography>
  );
}
