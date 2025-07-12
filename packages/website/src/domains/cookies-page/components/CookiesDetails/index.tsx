import Group from "@bashkim-com/design-system/Group";
import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import HeaderDesktopImage from "@/domains/cookies-page/assets/header-desktop.jpg";
import HeaderMobileImage from "@/domains/cookies-page/assets/header-mobile.jpg";

export default function CookiesDetails() {
  return (
    <>
      <PageHeaderPartial
        imageDesktop={HeaderDesktopImage.src}
        imageMobile={HeaderMobileImage.src}
      />

      <Group>
        <Container maxWidth="md">
          <Typography variant="h4" component="h1" gutterBottom>
            Cookies on this site
          </Typography>

          <Typography gutterBottom>
            This website sends and receives data (known as <em>cookies</em>) to
            understand how you browse the site and deliver the best possible
            experience. These cookies measure how you use the website to inform
            improvements with insights.
          </Typography>

          <Typography gutterBottom>
            No personally identifiable information is collected through the use
            of cookies on this site.
          </Typography>

          <Typography gutterBottom>
            More information about{" "}
            <Link
              href="https://ico.org.uk/for-the-public/online/cookies/"
              target="_blank"
              rel="noreferrer"
            >
              how to manage cookies
            </Link>{" "}
            can be found on the Information Commissioner&apos;s Office (ICO)
            website.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom>
            How are cookies used on this website?
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom>
            Google Analytics
          </Typography>

          <Typography gutterBottom>
            Google Analytics collects information about how you engage with this
            website; this informs decisions on making improvements for the site.
          </Typography>

          <Typography gutterBottom>
            Google Analytics stores information about:
          </Typography>

          <ul>
            <li>The pages you visit on this website;</li>
            <li>Time spent on each page of this website;</li>
            <li>How you got to this website;</li>
            <li>What you click on during your visit to this website.</li>
          </ul>

          <Typography gutterBottom>
            This information is collected anonymously and no personally
            identifiable information (e.g.: your name or address) is collected
            or stored.
          </Typography>

          <Typography gutterBottom>
            If you prefer, you can{" "}
            <Link
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
            >
              opt-out of Google Analytics
            </Link>{" "}
            by following the instructions provided by Google.
          </Typography>

          <TableContainer>
            <Table>
              <caption>Google Analytics sets the following cookies</caption>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Lifetime</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>_ga</TableCell>
                  <TableCell>
                    Helps count how many people visit this website by tracking
                    if you&apos;ve visited before.
                  </TableCell>
                  <TableCell>2 years</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>_gid</TableCell>
                  <TableCell>
                    Helps count how many people visit this website by tracking
                    if you&apos;ve visited before.
                  </TableCell>
                  <TableCell>24 hours</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>_gat</TableCell>
                  <TableCell>
                    Used to manage the rate at which page view requests are
                    made.
                  </TableCell>
                  <TableCell>10 minutes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" component="h3" gutterBottom>
            YouTube
          </Typography>

          <Typography gutterBottom>
            This website utilises the embedded player from YouTube to present
            videos of work and associated artefacts.
          </Typography>

          <Divider />

          <Typography gutterBottom fontSize="small">
            Last updated 30 March 2025
          </Typography>
        </Container>
      </Group>
    </>
  );
}
