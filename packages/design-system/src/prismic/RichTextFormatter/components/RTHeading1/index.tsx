import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTHeading1Props = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTHeading1({ children, key }: RTHeading1Props) {
  return (
    <Typography variant="h4" component="h1" gutterBottom key={key}>
      {children}
    </Typography>
  );
}
