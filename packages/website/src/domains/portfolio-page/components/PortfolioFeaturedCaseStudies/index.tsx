import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type {
  Case_Study,
  PortfolioPageFeaturedModelFragment,
} from "@bashkim-com/prismic-dal";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

export type PortfolioFeaturedCaseStudiesProps = Readonly<{
  featured: Array<PortfolioPageFeaturedModelFragment>;
}>;

export default function PortfolioFeaturedCaseStudies({
  featured,
}: PortfolioFeaturedCaseStudiesProps) {
  return (
    <Container>
      <Grid container spacing={2}>
        {featured.map((feature) => {
          const title = feature.featured_title;
          const description = feature.featured_description;
          const caseStudy = feature.featured_case_study as Case_Study;

          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}
              key={caseStudy._meta.id}
            >
              <Stack display="flex" flexDirection="column" spacing={2}>
                <RichTextFormatter field={title} />

                <Link href={`/portfolio/${caseStudy._meta.uid}`}>
                  <Card variant="outlined">
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <S.Icon>
                            <Image
                              src={caseStudy.image_icon.url}
                              alt={caseStudy.image_icon.alt ?? ""}
                              width={caseStudy.image_icon.dimensions.width}
                              height={caseStudy.image_icon.dimensions.height}
                            />
                          </S.Icon>
                        }
                        title={caseStudy.meta_title ?? ""}
                      />

                      <CardMedia
                        component="img"
                        height="194"
                        image={caseStudy.image_poster.url}
                      />

                      <CardContent>
                        <Typography>
                          {caseStudy.meta_description ?? ""}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>

                <RichTextFormatter field={description} />
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
