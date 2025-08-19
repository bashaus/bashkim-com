import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTHeading3Props = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTHeading3({ children, key }: RTHeading3Props) {
  return (
    <Typography variant="h6" component="h3" gutterBottom key={key}>
      {children}
    </Typography>
  );
}
