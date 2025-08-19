import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTHeading5Props = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTHeading5({ children, key }: RTHeading5Props) {
  return (
    <Typography variant="h6" component="h5" gutterBottom key={key}>
      {children}
    </Typography>
  );
}
