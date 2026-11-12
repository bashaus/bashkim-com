import Group from "@bashkim-com/design-system/Group";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";

import {
  getExternalGitHubUrl,
  getExternalLinkedInUrl,
  getExternalMediumUrl,
  getPortfolioPath,
} from "@/libraries/app/navigation";

import * as S from "./styles";

export default function HomeFeatured() {
  const locale = useLocale();
  const t = useTranslations("HomeFeatured");

  return (
    <Group>
      <Container>
        <S.Links>
          <S.Link>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {t("portfolioTitle")}
                </Typography>

                <Typography>{t("portfolioDescription")}</Typography>
              </CardContent>

              <CardActions>
                <Button href={getPortfolioPath({ locale })}>
                  {t("portfolioButtonLabel")}
                </Button>
              </CardActions>
            </Card>
          </S.Link>

          <S.Link>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {t("resourcesTitle")}
                </Typography>

                <Typography>{t("resourcesDescription")}</Typography>
              </CardContent>

              <CardActions>
                <Button
                  href={getExternalGitHubUrl()}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("resourcesGitHubButtonLabel")}
                </Button>

                <Button
                  href={getExternalMediumUrl()}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("resourcesMediumButtonLabel")}
                </Button>
              </CardActions>
            </Card>
          </S.Link>

          <S.Link>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {t("connectTitle")}
                </Typography>

                <Typography>{t("connectDescription")}</Typography>
              </CardContent>

              <CardActions>
                <Button
                  href={getExternalLinkedInUrl()}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("connectButtonLabel")}
                </Button>
              </CardActions>
            </Card>
          </S.Link>
        </S.Links>
      </Container>
    </Group>
  );
}
