import Group from "@bashkim-com/design-system/Group";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { getPortfolioPath } from "@/libraries/app/navigation";

import * as S from "./styles";

export default function HomeFeatured() {
  return (
    <Group>
      <Container>
        <S.Links>
          <S.Link>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Portfolio
                </Typography>

                <Typography>
                  Explore my case studies, from design to development. See the
                  projects that showcase my skills and creativity.
                </Typography>
              </CardContent>

              <CardActions>
                <Button href={getPortfolioPath()}>Case studies</Button>
              </CardActions>
            </Card>
          </S.Link>

          <S.Link>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Resources
                </Typography>

                <Typography>
                  Check out my GitHub contributions and Medium articles. I
                  build, collaborate, and share code with the developer
                  community.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  href="https://github.com/bashaus/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </Button>

                <Button
                  href="https://medium.com/@bashaus"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Medium
                </Button>
              </CardActions>
            </Card>
          </S.Link>

          <S.Link>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Let&apos;s connect
                </Typography>

                <Typography>
                  Reach out on LinkedIn to chat about opportunities,
                  collaborations, or just to say hello.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  href="https://www.linkedin.com/in/bashaus/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Linked In
                </Button>
              </CardActions>
            </Card>
          </S.Link>
        </S.Links>
      </Container>
    </Group>
  );
}
