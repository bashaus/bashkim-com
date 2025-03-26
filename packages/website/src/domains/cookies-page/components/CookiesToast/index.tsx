import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { ToastContentProps } from "react-toastify";

import CookiesVector from "@/domains/cookies-page/assets/cookies.svg";

export type CookiesToastProps = Readonly<ToastContentProps>;

export default function CookiesToast({ closeToast }: CookiesToastProps) {
  return (
    <Card elevation={0} sx={{ maxWidth: 500, width: "100%" }}>
      <CardHeader
        avatar={
          <Box
            borderRadius="50%"
            bgcolor="#29e5d0"
            width={48}
            height={48}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CookiesVector width={28} height={28} color="#000" />
          </Box>
        }
        action={
          <IconButton onClick={closeToast} size="small">
            <Close />
          </IconButton>
        }
        title="This website uses cookies"
        slotProps={{ title: { variant: "subtitle1" } }}
        subheader={
          <>
            To provide core functionality and the best possible experience.{" "}
            <Link href="/cookies" onClick={closeToast}>
              Cookie&nbsp;policy
            </Link>
            .
          </>
        }
      />
    </Card>
  );
}
