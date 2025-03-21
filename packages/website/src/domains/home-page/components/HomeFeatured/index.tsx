import { Group } from "@bashkim-com/design-system";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import * as S from "./styles";

export default function HomeFeatured() {
  return (
    <Group>
      <Container>
        <S.Links>
          <S.Link>
            <S.Card>
              <CardHeader title="Portfolio" />
              <CardContent>
                <Typography>
                  Explore my case studies, from design to development. See the
                  projects that showcase my skills and creativity.
                </Typography>
              </CardContent>

              <CardActions>
                <Button href="/portfolio">Case studies</Button>
              </CardActions>
            </S.Card>
          </S.Link>

          <S.Link>
            <S.Card>
              <CardHeader title="Open source" />
              <CardContent>
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
            </S.Card>
          </S.Link>

          <S.Link>
            <S.Card>
              <CardHeader title="Let's connect" />
              <CardContent>
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
                  Connect
                </Button>
              </CardActions>
            </S.Card>
          </S.Link>
        </S.Links>
      </Container>
    </Group>
  );
}
