import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function FooterCopyright() {
  return (
    <Container
      aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Twenty-Five, Bashkim Isai. All rights reserved."
      sx={{ py: 2 }}
    >
      <Typography aria-hidden="true" fontSize="small">
        Copyright &copy;{" "}
        <time dateTime="2008" title="2008">
          MMVIII
        </time>
        &#x2011;
        <time dateTime="2025" title="2025">
          MMXXV
        </time>
        , Bashkim&nbsp;Isai. All&nbsp;rights&nbsp;reserved.
      </Typography>
    </Container>
  );
}
