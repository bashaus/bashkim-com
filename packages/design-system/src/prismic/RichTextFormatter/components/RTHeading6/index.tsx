import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTHeading6Props = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTHeading6({ children, key }: RTHeading6Props) {
  return (
    <Typography variant="h6" component="h6" gutterBottom key={key}>
      {children}
    </Typography>
  );
}
