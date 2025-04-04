import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import Tile from "@bashkim-com/design-system/Tile";
import type {
  Case_Study,
  PortfolioPageFeaturedModelFragment,
} from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "next/link";

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
                <RichTextFormatter>
                  <PrismicRichText render={title} />
                </RichTextFormatter>

                <Link href={`/portfolio/${caseStudy._meta.uid}`}>
                  <Tile
                    title={caseStudy.meta_title ?? ""}
                    description={caseStudy.meta_description ?? ""}
                    icon={{
                      src: caseStudy.image_icon.url,
                      alt: caseStudy.image_icon.alt ?? "",
                      width: caseStudy.image_icon.dimensions.width,
                      height: caseStudy.image_icon.dimensions.height,
                    }}
                    poster={caseStudy.image_poster.url}
                  />
                </Link>

                <RichTextFormatter>
                  <PrismicRichText render={description} />
                </RichTextFormatter>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
