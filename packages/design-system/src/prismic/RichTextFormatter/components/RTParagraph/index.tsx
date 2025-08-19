import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export type RTParagraphProps = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTParagraph({ children, key }: RTParagraphProps) {
  return (
    <Typography gutterBottom key={key}>
      {children}
    </Typography>
  );
}
