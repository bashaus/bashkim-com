import { RichTextFormatter, Tile } from "@bashkim-com/design-system";
import type {
  Case_Study,
  PortfolioPageFeaturedModelFragment,
} from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import { Grid2 } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";

export type PortfolioFeaturedCaseStudiesProps = Readonly<{
  featured: Array<PortfolioPageFeaturedModelFragment>;
}>;

export default function PortfolioFeaturedCaseStudies({
  featured,
}: PortfolioFeaturedCaseStudiesProps) {
  return (
    <Container>
      <Grid2 container spacing={2}>
        {featured.map((feature) => {
          const title = feature.featured_title;
          const description = feature.featured_description;
          const caseStudy = feature.featured_case_study as Case_Study;

          return (
            <Grid2
              size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}
              key={caseStudy._meta.id}
            >
              <Stack display="flex" flexDirection="column" spacing={2}>
                <Box flexGrow={0}>
                  <RichTextFormatter>
                    <PrismicRichText render={title} />
                    <PrismicRichText render={description} />
                  </RichTextFormatter>
                </Box>

                <Box flexGrow={1}>
                  <Link href={`/portfolio/${caseStudy._meta.uid}`}>
                    <Tile
                      title={caseStudy.meta_title ?? ""}
                      description={caseStudy.meta_description ?? ""}
                      icon={
                        <Image
                          src={caseStudy.image_icon.url}
                          alt={caseStudy.image_icon.alt ?? ""}
                          width={caseStudy.image_icon.dimensions.width}
                          height={caseStudy.image_icon.dimensions.height}
                        />
                      }
                      poster={caseStudy.image_poster.url}
                    />
                  </Link>
                </Box>
              </Stack>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
}
